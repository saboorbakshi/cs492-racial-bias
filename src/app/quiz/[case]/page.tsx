'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import { caseStudies } from '@/data'
import { quizzes } from '@/quizData'
import ButtonLink from '@/components/ButtonLink'
import Link from 'next/link'

// Array of option labels - only 4 options (A-D) are needed
const OPTION_LABELS = ['A', 'B', 'C', 'D']

export default function CaseStudyQuizPage() {
  const { case: caseParam } = useParams()

  // Check if the parameter is a valid number (only digits)
  const isNumeric = /^\d+$/.test(caseParam as string)
  const caseNumber = isNumeric ? parseInt(caseParam as string, 10) : NaN

  // Validate case number (1-6)
  const isValidCase =
    isNumeric && !isNaN(caseNumber) && caseNumber >= 1 && caseNumber <= caseStudies.length
  const selectedCaseIndex = isValidCase ? caseNumber - 1 : 0

  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  if (!isValidCase) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] gap-4">
        <div className="text-2xl font-medium">Case Study Not Found</div>
        <div>Sorry, we couldn't find the case study you're looking for.</div>
        <ButtonLink label="Return to Home" url="/" />
      </div>
    )
  }

  const caseStudy = caseStudies[selectedCaseIndex]
  const quiz = quizzes.find((q) => q.caseId === caseNumber)
  const hasQuiz = quiz && quiz.questions.filter((q) => q.type !== 'info').length > 0

  const handleSelectAnswer = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: OPTION_LABELS[optionIndex]
    })
  }

  const handleSubmitQuiz = () => {
    setShowResults(true)
  }

  const calculateScore = () => {
    if (!hasQuiz) return 0

    let correctAnswers = 0
    quiz.questions.filter((q) => q.type !== 'info').forEach((question, qIndex) => {
      const selectedLabel = selectedAnswers[qIndex]
      if (selectedLabel) {
        const selectedIndex = OPTION_LABELS.indexOf(selectedLabel)
        if (selectedIndex === question.answer) {
          correctAnswers++
        }
      }
    })

    return correctAnswers
  }

  const resetQuiz = () => {
    setSelectedAnswers({})
    setCurrentQuestionIndex(0)
    setShowResults(false)
  }

  return (
    <div>
      <div className="mb-8">
        <ButtonLink label="← Back" url="/" />
      </div>

      <div className="bg-bgSecondary rounded-lg p-1 mb-6">
        <div className="flex flex-row items-center justify-between">
          {Array.from({ length: caseStudies.length }, (_, index) => {
            const caseNumber = index + 1
            const isSelected = selectedCaseIndex === index
            return (
              <Link
                key={caseNumber}
                href={`/quiz/${caseNumber}`}
                className={`flex-1 rounded-md transition-colors py-2 text-center ${
                  isSelected ? 'bg-bg text-fg' : 'bg-bgSecondary text-fgSecondary'
                }`}
              >
                Quiz {caseNumber}
              </Link>
            )
          })}
        </div>
      </div>

      <div className="text-3xl font-medium mb-4">{caseStudy.title}</div>

      {hasQuiz ? (
        <div className="space-y-8">
          {showResults ? (
            <div className="space-y-6">
              <div className="text-2xl">
                You scored {calculateScore()} out of {quiz.questions.filter((q) => q.type !== 'info').length}!<br />
                The "correct" answers are determined by the consensus of the four interviewees responses.
                This is because oftentimes their responses generally match each other.
              </div>

              {quiz.questions.filter((q) => q.type !== 'info').map((question, qIndex) => {
                const selectedLabel = selectedAnswers[qIndex]
                const selectedIndex = selectedLabel ? OPTION_LABELS.indexOf(selectedLabel) : -1
                const correctIndex = question.answer
                const isCorrect = selectedIndex === correctIndex

                return (
                  <div key={qIndex} className="border rounded-lg p-6 space-y-4">
                    <div className="font-medium text-lg">{question.question}</div>

                    <div className="space-y-2">
                      {question.options?.map((option, optionIndex) => {
                        const optionLabel = OPTION_LABELS[optionIndex]
                        const isSelected = selectedLabel === optionLabel
                        const isCorrectOption = optionIndex === question.answer

                        let bgColor = ''
                        if (isSelected && isCorrectOption) bgColor = 'bg-green-100'
                        else if (isSelected && !isCorrectOption) bgColor = 'bg-red-100'
                        else if (!isSelected && isCorrectOption) bgColor = 'bg-green-50'

                        return (
                          <div
                            key={optionIndex}
                            className={`p-3 rounded-md ${bgColor} ${
                              isSelected ? 'border-2 border-blue-300' : 'border border-gray-200'
                            }`}
                          >
                            <div className="flex items-start">
                              <div className="font-medium mr-2">{optionLabel}.</div>
                              <div>{option.text}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}

              <div className="flex justify-center mt-8">
                <button
                  onClick={resetQuiz}
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="border rounded-lg p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="text-lg font-medium">
                    Page {currentQuestionIndex + 1} of {quiz.questions.length}
                  </div>
                  <div className="text-sm text-gray-500">
                    {Object.keys(selectedAnswers).length} of {quiz.questions.filter((q) => q.type !== 'info').length} answered
                  </div>
                </div>

                {quiz.questions[currentQuestionIndex].type === 'info' ? (
                  <div className="text-sm text-gray-800 space-y-4">
                    {quiz.questions[currentQuestionIndex].question.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                ) : (
                  <div className="text-xl font-medium">
                    {quiz.questions[currentQuestionIndex].question}
                  </div>
                )}

                <div className="space-y-3">
                  {quiz.questions[currentQuestionIndex].options?.map((option, optionIndex) => {
                    const optionLabel = OPTION_LABELS[optionIndex]
                    return (
                      <div
                        key={optionIndex}
                        onClick={() => handleSelectAnswer(currentQuestionIndex, optionIndex)}
                        className={`p-4 rounded-md border cursor-pointer hover:bg-gray-50 transition-colors
                          ${
                            selectedAnswers[currentQuestionIndex] === optionLabel
                              ? 'border-2 border-blue-500 bg-blue-50'
                              : 'border-gray-200'
                          }`}
                      >
                        <div className="flex items-start">
                          <div className="font-medium mr-2">{optionLabel}.</div>
                          <div>{option.text}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                    disabled={currentQuestionIndex === 0}
                    className={`px-4 py-2 rounded-md border border-gray-300 
                      ${
                        currentQuestionIndex === 0
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:bg-gray-50 transition-colors'
                      }`}
                  >
                    Previous
                  </button>

                  <button
                    onClick={() =>
                      setCurrentQuestionIndex((prev) =>
                        Math.min(quiz.questions.length - 1, prev + 1)
                      )
                    }
                    disabled={currentQuestionIndex === quiz.questions.length - 1}
                    className={`px-4 py-2 rounded-md bg-blue-600 text-white 
                      ${
                        currentQuestionIndex === quiz.questions.length - 1
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:bg-blue-700 transition-colors'
                      }`}
                  >
                    Next
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {quiz.questions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentQuestionIndex(index)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm
                        ${
                          currentQuestionIndex === index
                            ? 'bg-blue-600 text-white'
                            : selectedAnswers[index] !== undefined
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleSubmitQuiz}
                  disabled={Object.keys(selectedAnswers).length < quiz.questions.filter((q) => q.type !== 'info').length}
                  className={`px-4 py-2 rounded-md bg-green-600 text-white 
                    ${
                      Object.keys(selectedAnswers).length < quiz.questions.filter((q) => q.type !== 'info').length
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-green-700 transition-colors'
                    }`}
                >
                  Submit Quiz
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="border rounded-lg p-8 text-center">
          <div className="text-xl mb-4">No quiz available for this case study yet.</div>
          <div className="text-gray-500">
            We're still working on creating a quiz for this case study. Please check back later.
          </div>
        </div>
      )}
    </div>
  )
}
