import React from 'react'

interface LinkProps {
  label: string
  url: string
  className: string
}

export default function Link({ label, url, className = '' }: LinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-blue-600 underline ${className}`}
    >
      {label}
    </a>
  )
}
