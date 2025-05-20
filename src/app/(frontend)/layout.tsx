import React from 'react'
import { cn } from '@/lib/utils'
import { Inter as FontSans, Lavishly_Yours } from 'next/font/google'
import './styles.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontLavishlyYours = Lavishly_Yours({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lavishly-yours',
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body
        className={cn(
          'bg-background font-sans font-lavishly-yours antialiased',
          fontSans.variable,
          fontLavishlyYours.variable,
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  )
}
