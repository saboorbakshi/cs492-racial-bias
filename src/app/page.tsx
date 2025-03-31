'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from '@/components/Link'

const interviewees = [
  {
    name: 'Dan Holtby',
    role: 'Professor',
    src: 'not-available.png',
    company: 'University of Waterloo',
    companySrc: 'university-of-waterloo.png',
    youtubeId: '0NFZOjxsusA'
  },
  {
    name: 'Jennifer Aguiar',
    role: 'Bioinformatician',
    src: 'jennifer-aguiar.jpeg',
    company: 'The Hospital for Sick Children',
    companySrc: 'the-hospital-for-sick-kids.jpeg',
    youtubeId: '2Fmyextb2Qg'
  },
  {
    name: 'Pedro Ballester',
    role: 'Machine Learning Specialist',
    src: 'pedro-ballester.jpeg',
    company: 'The Hospital for Sick Kids',
    companySrc: 'the-hospital-for-sick-kids.jpeg',
    youtubeId: 'Up5Bgq2Vrxs'
  },
  {
    name: 'Scott Davidson',
    role: 'Senior Bioinformatician',
    src: 'not-available.png',
    company: 'The Hospital for Sick Kids',
    companySrc: 'the-hospital-for-sick-kids.jpeg',
    youtubeId: 'CFe6isPF6ao'
  }
]

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
              <div
                className={`sm:text-base font-semibold ${
                  selectedInterviewee.name === interviewee.name ? 'text-blue-500' : ''
                } group-hover:underline transition-colors`}
              >
                {interviewee.name}
              </div>
              <div className="sm:text-base">{interviewee.role}</div>
              <div className="sm:text-base text-fgSecondary">{interviewee.company}</div>
            </div>
          </button>
        ))}
      </div>
      <div className="aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${selectedInterviewee.youtubeId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="h-[1px] bg-stroke my-8"></div>

      <div className="sm:text-2xl font-medium mb-4">Analysis</div>
    </div>
  )
}
