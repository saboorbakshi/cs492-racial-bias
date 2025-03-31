'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const interviewees = [
  {
    name: 'Dan Holtby',
    role: 'Professor',
    src: 'not-available.png',
    company: 'University of Waterloo',
    companySrc: 'university-of-waterloo.jpeg',
    youtubeId: '0NFZOjxsusA'
  },
  {
    name: 'Jennifer Aguiar',
    role: 'Bioinformatician',
    src: 'jennifer-aguiar.jpeg',
    company: 'The Hospital for Sick Children',
    companySrc: 'hospital-for-sick-children.jpeg',
    youtubeId: '2Fmyextb2Qg'
  },
  {
    name: 'Pedro Ballester',
    role: 'Machine Learning Specialist',
    src: 'pedro-ballester.jpeg',
    company: 'The Hospital for Sick Children',
    companySrc: 'hospital-for-sick-children.jpeg',
    youtubeId: 'Up5Bgq2Vrxs'
  },
  {
    name: 'Scott Davidson',
    role: 'Senior Bioinformatician',
    src: 'not-available.png',
    company: 'The Hospital for Sick Children',
    companySrc: 'hospital-for-sick-children.jpeg',
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

      <div className="sm:text-2xl font-medium mb-4">Interviewees</div>
      <div className="grid grid-cols-2 gap-x-0 gap-y-8 mb-6">
        {interviewees.map((interviewee, index) => (
          <button
            key={index}
            onClick={() => setSelectedInterviewee(interviewee)}
            className="flex flex-row items-center gap-4 group"
          >
            <Image
              src={`/interviewees/${interviewee.src}`}
              alt={interviewee.name}
              width={72}
              height={72}
              className="rounded-full border"
            />
            <div className="flex flex-col items-start">
              <div className={`sm:text-base font-semibold ${selectedInterviewee.name === interviewee.name ? 'text-blue-500' : ''} group-hover:underline transition-colors`}>
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
    </div>
  )
}
