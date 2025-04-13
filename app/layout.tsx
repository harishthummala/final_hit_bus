import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hindusthan Institute of Technology Transport Portal',
  description: 'Hindusthan Institute of Technology Transport Portal',
  generator: 'Hindusthan Institute of Technology Transport Portal',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
