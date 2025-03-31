import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Footer from '@/components/Footer'
import './globals.css'
import Header from '@/components/Header'

const custom = localFont({
  src: [
    {
      path: '../../public/fonts/neue-montreal-regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/neue-montreal-medium.woff2',
      weight: '500',
      style: 'normal'
    }
  ],
  variable: '--font-custom'
})

export const metadata: Metadata = {
  title: 'Saboor Bakshi',
  description:
    'Software engineer with a deep appreciation for great design, currently studying Computer Science at the University of Waterloo.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${custom.variable} font-custom`}>
      <body className="flex flex-col min-h-screen">
        <main className="flex flex-col grow items-center my-8 mb-12 sm:my-12 px-6">
          <div className="w-full max-w-screen-custom">
            <Header />
            {children}
          </div>
        </main>
        <div className="h-[1px] bg-stroke" />
        <Footer />
      </body>
    </html>
  )
}
