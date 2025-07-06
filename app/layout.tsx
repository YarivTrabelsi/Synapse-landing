import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Synapse AI - Your AI Infrastructure Engineer',
  description: 'AI-native infrastructure platform that builds, heals, and explains full cloud systems autonomously. Go from idea to production-grade infrastructure in minutes.',
  generator: 'Next.js',
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
