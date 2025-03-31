'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  // Consider a link active if the pathname matches exactly or starts with the href (for nested routes)
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
  const activeClass = isActive ? 'text-fg' : 'text-fgSecondary'

  return (
    <Link href={href} className={`sm:text-base ${activeClass} hover:text-fg`}>
      {children}
    </Link>
  )
}

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center mb-7 sm:mb-8">
      <Link href="/">Saboor Bakshi</Link>
      <div className="flex gap-6">
        <NavLink href="/">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
      </div>
    </header>
  )
}
