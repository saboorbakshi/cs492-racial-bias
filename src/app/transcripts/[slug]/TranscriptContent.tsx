'use client'

import React from 'react'
import { interviewees, transcripts } from '@/data'
import ButtonLink from '@/components/ButtonLink'

export default function TranscriptContent({ slug }: { slug: string }) {
  const interviewee = interviewees.find(
    (person) => person.name.toLowerCase().replace(/\s+/g, '-') === slug
  )

  if (!interviewee) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] gap-4">
        <div className="text-2xl font-medium">Transcript Not Found</div>
        <div>Sorry, we couldn't find the transcript you're looking for.</div>
        <ButtonLink label="Return to Home" url="/" />
      </div>
    )
  }

  const intervieweeSlug = interviewee.name.toLowerCase().replace(/\s+/g, '-')
  const interviewTranscript = transcripts[intervieweeSlug] || []

  return (
    <div>
      <div className="mb-8">
        <ButtonLink label="← Back" url="/" />
      </div>

      <div className="text-3xl font-medium mb-4">Interview Transcript: {interviewee.name}</div>
      <div className="flex flex-col gap-2">
        <div className="font-medium">{interviewee.role}</div>
        <div className="text-fgSecondary">{interviewee.company}</div>
      </div>
      <div className="h-[1px] bg-stroke my-8"></div>

      <div className="space-y-6">
        {interviewTranscript.map((segment, index) => (
          <div key={index} className="mb-4">
            <div
              className={`font-medium mb-1 ${index % 2 === 0 ? 'text-green-500' : 'text-blue-500'}`}
            >
              {index % 2 === 0 ? 'Interviewer' : interviewee.name}
            </div>
            <div className="pl-4 border-l-2 border-gray-200">{segment}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
