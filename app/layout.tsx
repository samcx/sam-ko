import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'Sam Ko',
  description: 'SAM KO WEB ENGINEER',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
