'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from '@/components/Link'
import { interviewees } from '@/data'
import ButtonLink from '@/components/ButtonLink'

export default function Home() {
  const [selectedInterviewee, setSelectedInterviewee] = useState(interviewees[0])

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
      <div className="flex flex-row">
        <Link label="Project Proposal" url="/pdfs/project-proposal.pdf" />
        <div className="mx-2">•</div>
        <Link label="Progress Report" url="/pdfs/progress-report.pdf" />
        <div className="mx-2">•</div>
        <Link label="Interview Script" url="/pdfs/interview-script.pdf" />
      </div>

      <div className="h-[1px] bg-stroke my-8"></div>

      <div className="sm:text-2xl font-medium mb-4">Interviews</div>
      <div className="mb-8">
        We interviewed four participants, beginning with brief introductions about their background
        and research. Each was presented with six real-world cases of biased AI in healthcare—three
        based on gender, three on race. We first offered limited, skewed details to explore their
        assumptions, then revealed the full context for deeper discussion. The interviews concluded
        with reflections on broader impacts and solutions.
      </div>
      <div className="grid grid-cols-2 gap-x-0 gap-y-8 mb-8">
        {interviewees.map((interviewee, index) => (
          <button
            key={index}
            onClick={() => setSelectedInterviewee(interviewee)}
            className="flex flex-row items-center gap-4 group"
          >
            <div className="relative">
              <Image
                src={`/interviewees/${interviewee.src}`}
                alt={interviewee.name}
                width={72}
                height={72}
                className="rounded-full border"
              />
              <Image
                src={`/companies/${interviewee.companySrc}`}
                alt={interviewee.company}
                width={36}
                height={36}
                className="rounded-full border absolute -bottom-2 -right-2"
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                <div
                  className={`sm:text-base font-semibold ${
                    selectedInterviewee.name === interviewee.name ? 'text-black' : ''
                  } group-hover:underline transition-colors`}
                >
                  {interviewee.name}
                </div>
                {selectedInterviewee.name === interviewee.name && (
                  <div className="relative flex items-center justify-center p-1">
                    <div className="absolute size-2 animate-ping rounded-full bg-green-500 opacity-75"></div>
                    <div className="size-2 rounded-full bg-green-500"></div>
                  </div>
                )}
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
      <ButtonLink
        label={`Read the Interview Transcript featuring ${selectedInterviewee.name} →`}
        url={'/transcripts/' + selectedInterviewee.name.toLowerCase().replace(/\s+/g, '-')}
      />

      <div className="h-[1px] bg-stroke my-8"></div>

      <div className="sm:text-2xl font-medium mb-4">Analysis</div>

      <div className="h-[1px] bg-stroke my-8"></div>

      <div className="sm:text-2xl font-medium mb-4">Conclusion</div>

      <div className="h-[1px] bg-stroke my-8"></div>

      <div className="sm:text-2xl font-medium mb-4">Quiz</div>
    </div>
  )
}
