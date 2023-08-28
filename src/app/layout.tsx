/* eslint-disable camelcase */
import './global.css'
import React from 'react'

import { Roboto_Mono } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import Providers from './providers'
export const metadata = {
  title: 'Stx System',
  description: 'Intern system to manage employee and tasks',
}

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter',
// })

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto_mono.variable}>
      <link rel="icon" href="./app/assets/imgs/logo1.png" sizes="any" />
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
