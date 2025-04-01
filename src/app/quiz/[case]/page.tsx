'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import { caseStudies } from '@/data'
import { quizzes } from '@/quizData'
import ButtonLink from '@/components/ButtonLink'
import Link from 'next/link'

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
  const hasQuiz = quiz && quiz.questions.length > 0

  const handleSelectAnswer = (questionIndex: number, optionId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionId
    })
  }

  const handleSubmitQuiz = () => {
    setShowResults(true)
  }

  const calculateScore = () => {
    if (!hasQuiz) return 0

    let correctAnswers = 0
    quiz.questions.forEach((question, index) => {
      const selectedOption = selectedAnswers[index]
      const correctOption = question.options.find((option) => option.isCorrect)

      if (selectedOption && correctOption && selectedOption === correctOption.id) {
        correctAnswers++
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
                You scored {calculateScore()} out of {quiz.questions.length}
              </div>

              {quiz.questions.map((question, qIndex) => {
                const selectedOption = selectedAnswers[qIndex]
                const correctOption = question.options.find((option) => option.isCorrect)
                const isCorrect = selectedOption === correctOption?.id

                return (
                  <div key={qIndex} className="border rounded-lg p-6 space-y-4">
                    <div className="font-medium text-lg">{question.question}</div>

                    <div className="space-y-2">
                      {question.options.map((option) => {
                        const isSelected = selectedOption === option.id
                        const isCorrectOption = option.isCorrect

                        let bgColor = ''
                        if (isSelected && isCorrectOption) bgColor = 'bg-green-100'
                        else if (isSelected && !isCorrectOption) bgColor = 'bg-red-100'
                        else if (!isSelected && isCorrectOption) bgColor = 'bg-green-50'

                        return (
                          <div
                            key={option.id}
                            className={`p-3 rounded-md ${bgColor} ${
                              isSelected ? 'border-2 border-blue-300' : 'border border-gray-200'
                            }`}
                          >
                            <div className="flex items-start">
                              <div className="font-medium mr-2">{option.id}.</div>
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
                    Question {currentQuestionIndex + 1} of {quiz.questions.length}
                  </div>
                  <div className="text-sm text-gray-500">
                    {Object.keys(selectedAnswers).length} of {quiz.questions.length} answered
                  </div>
                </div>

                <div className="text-xl font-medium">
                  {quiz.questions[currentQuestionIndex].question}
                </div>

                <div className="space-y-3">
                  {quiz.questions[currentQuestionIndex].options.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => handleSelectAnswer(currentQuestionIndex, option.id)}
                      className={`p-4 rounded-md border cursor-pointer hover:bg-gray-50 transition-colors
                        ${
                          selectedAnswers[currentQuestionIndex] === option.id
                            ? 'border-2 border-blue-500 bg-blue-50'
                            : 'border-gray-200'
                        }`}
                    >
                      <div className="flex items-start">
                        <div className="font-medium mr-2">{option.id}.</div>
                        <div>{option.text}</div>
                      </div>
                    </div>
                  ))}
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

                  {currentQuestionIndex < quiz.questions.length - 1 ? (
                    <button
                      onClick={() =>
                        setCurrentQuestionIndex((prev) =>
                          Math.min(quiz.questions.length - 1, prev + 1)
                        )
                      }
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmitQuiz}
                      disabled={Object.keys(selectedAnswers).length < quiz.questions.length}
                      className={`px-4 py-2 rounded-md 
                        ${
                          Object.keys(selectedAnswers).length < quiz.questions.length
                            ? 'bg-gray-300 opacity-50 cursor-not-allowed'
                            : 'bg-green-600 text-white hover:bg-green-700 transition-colors'
                        }`}
                    >
                      Submit Quiz
                    </button>
                  )}
                </div>
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                {quiz.questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestionIndex(index)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center
                      ${
                        currentQuestionIndex === index
                          ? 'bg-blue-600 text-white'
                          : selectedAnswers[index]
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-200 text-gray-800'
                      }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="text-xl font-medium mb-4">Quiz Coming Soon</div>
          <div className="text-gray-500">
            We're still working on the quiz for this case study. Please check back later!
          </div>
        </div>
      )}
    </div>
  )
}
