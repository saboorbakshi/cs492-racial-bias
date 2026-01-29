'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from '@/components/Link'
import { interviewees, caseStudies, conclusionSections } from '@/data'
import ButtonLink from '@/components/ButtonLink'

export default function Home() {
  const [selectedInterviewee, setSelectedInterviewee] = useState(interviewees[0])
  const [selectedCase, setSelectedCase] = useState(0)

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="sm:text-3xl font-medium">
          How Biased Clinical Research Data Affects Healthcare Practices
        </div>
        <div className="flex flex-col">
          <div>Jaskirat Pabla, Samin Sharar Nafi, Sahl Bakshi, Saboor Bakshi</div>
          <div className="text-fgSecondary">Mar 31, 2025</div>
        </div>
      </div>

      <div className="h-[1px] bg-stroke my-8"></div>

      <div className="sm:text-2xl font-medium mb-4">Introduction</div>
      <div className="mb-4">
        Our project explores how biased clinical data, especially lacking in racial and gender
        diversity, can lead to harmful outcomes in healthcare AI. Through interviews and case
        studies, we examine real-world examples where algorithms made discriminatory decisions, and
        propose ways to make AI in healthcare more inclusive and fair.
      </div>
      <div className="flex flex-wrap gap-2">
        <Link
          label="Project Proposal"
          url="/pdfs/Project Proposal.pdf"
          className="text-base"
        />
        <span className="text-blue-600">•</span>
        <Link
          label="Project Update"
          url="/pdfs/Project Update.pdf"
          className="text-base"
        />
        <span className="text-blue-600">•</span>
        <Link
          label="Complete Detailed Cases with References"
          url="/pdfs/Complete Detailed Cases with References.pdf"
          className="text-base"
        />
        <span className="text-blue-600">•</span>
        <Link
          label="Interview Script"
          url="/pdfs/Interview Script.pdf"
          className="text-base"
        />
      </div>

      <div className="h-[1px] bg-stroke my-8"></div>

      <div className="sm:text-2xl font-medium mb-4">Interviews</div>
      <div className="mb-6">
        We interviewed four participants, beginning with brief introductions about their background
        and research. Each was presented with six real-world cases of biased AI in healthcare, with three
        cases based on gender, and the other three on race. We first offered limited, skewed details to explore their
        assumptions, then revealed the full context for deeper discussion. The interviews concluded
        with reflections on broader impacts and solutions.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
        {interviewees.map((interviewee, index) => (
          <button
            key={index}
            onClick={() => setSelectedInterviewee(interviewee)}
            className={`flex flex-row items-center gap-4 rounded-xl px-2 py-3 transition-all border-[1.5px] hover:bg-blue-50 ${selectedInterviewee.name === interviewee.name
              ? 'border-blue-500 bg-blue-50'
              : 'border-transparent'
              }`}
          >
            <div className="relative">
              <Image
                src={`/interviewees/${interviewee.src}`}
                alt={interviewee.name}
                fetchPriority="high"
                priority
                width={72}
                height={72}
                className="rounded-full border"
              />
              <Image
                src={`/companies/${interviewee.companySrc}`}
                alt={interviewee.company}
                fetchPriority="high"
                priority
                width={36}
                height={36}
                className="rounded-full border absolute -bottom-2 -right-2"
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                <div
                  className={`sm:text-base font-semibold transition-colors text-fg`}
                >
                  {interviewee.name}
                </div>
              </div>
              <div className="sm:text-base">{interviewee.role}</div>
              <div className="sm:text-base text-fgSecondary">{interviewee.company}</div>
            </div>
          </button>
        ))}
      </div>
      <div className="aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden mb-6">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${selectedInterviewee.youtubeId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mb-8">
        <ButtonLink
          label={`Read ${selectedInterviewee.name}’s Transcript`}
          url={'/transcripts/' + selectedInterviewee.name.toLowerCase().replace(/\s+/g, '-')}
        />
      </div>

      <div className="h-[1px] bg-stroke my-8"></div>

      <div className="sm:text-2xl font-medium mb-4">Analysis of Case Studies</div>
      <div className="mb-6">
        For each of the six case studies, we will analyze the interviewee responses to understand how bias influenced the AI's decisions and explore the ethical and practical implications of each scenario.
      </div>
      <div className="bg-bgSecondary rounded-lg p-1 mb-6">
        <div className="flex flex-row items-center justify-between">
          {Array.from({ length: caseStudies.length }, (_, index) => {
            const caseNumber = index
            return (
              <button
                key={caseNumber}
                className={`flex-1 rounded-md transition-colors py-2  ${selectedCase === caseNumber ? 'bg-bg text-fg' : 'bg-bgSecondary text-fgSecondary'
                  }`}
                onClick={() => setSelectedCase(caseNumber)}
              >
                <span className="sm:hidden">C{caseNumber + 1}</span>
                <span className="hidden sm:inline">Case {caseNumber + 1}</span>
              </button>
            )
          })}
        </div>
      </div>
      <div className="mb-6 border border-gray-200 rounded-xl p-6 text-center">
        <p className="text-base text-fgSecondary">
          Try the quiz before reading the case and discussion below.<br />
          It’s a great way to test your intuition first!
        </p>
        <div className="mt-4">
          <ButtonLink
            label={`Take Quiz ${selectedCase + 1}`}
            url={`/quiz/${selectedCase + 1}`}
          />
        </div>
      </div>
      <div className="sm:text-xl font-medium mb-3">{caseStudies[selectedCase].title}</div>
      <div className="mb-6">
        {caseStudies[selectedCase].summary.map((paragraph, index) => (
          <p key={index} className="mb-3">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="sm:text-xl font-medium mb-3">Questions</div>
      <div className="mb-6">
        <ol className="list-decimal pl-5 space-y-2">
          {caseStudies[selectedCase].questions.map((question, index) => (
            <li key={index} className="mb-2">
              {question}
            </li>
          ))}
        </ol>
      </div>

      <div className="sm:text-xl font-medium mb-3">Discussion</div>
      <div className="mb-6">
        {caseStudies[selectedCase].discussion.map((paragraph, index) => (
          <p key={index} className="mb-3">
            {paragraph}
          </p>
        ))}
      </div>
      {/* <ButtonLink label={`Take Quiz ${selectedCase + 1} →`} url={'/quiz/' + (selectedCase + 1)} /> */}

      <div className="h-[1px] bg-stroke my-8"></div>

      <div className="sm:text-2xl font-medium mb-4">Conclusion</div>
      {conclusionSections.map((section, index) => (
        <div key={index} className="mb-6">
          <div className="sm:text-xl font-medium mb-3">{section.title}</div>
          <div>{section.content}</div>
        </div>
      ))}
    </div>
  )
}
