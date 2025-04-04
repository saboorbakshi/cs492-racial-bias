import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Footer from '@/components/Footer'
import './globals.css'
import Header from '@/components/Header'

const custom = localFont({
  src: '../../public/fonts/Figtree_VF_W.ttf',
  variable: '--font-custom',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Implications of Biased Healthcare Data',
  description: 'How Biased Clinical Research Data Affects Healthcare Practices'
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
            {/* <Header /> */}
            {children}
          </div>
        </main>
        <div className="h-[1px] bg-stroke" />
        <Footer />
      </body>
    </html>
  )
}
