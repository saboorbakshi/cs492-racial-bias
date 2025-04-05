import React from 'react'
import Link from 'next/link'

interface ButtonLinkProps {
  label: string
  url: string
}

export default function ButtonLink({ label, url }: ButtonLinkProps) {
  return (
    <Link
      href={url}
      rel="noopener noreferrer"
      className="inline-block bg-white px-4 py-2 rounded-full border text-fg hover:bg-bgSecondary transition-colors"
    >
      {label}
    </Link>
  )
}
