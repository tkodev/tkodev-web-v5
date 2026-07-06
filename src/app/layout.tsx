import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { fontAllianceNo2, fontGeistMono, fontGeistSans } from '@/fonts'
import '@/themes/theme.css'

const metadata: Metadata = {
  title: 'tko.dev'
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  // render vars
  const fontVariables = `${fontAllianceNo2.variable} ${fontGeistSans.variable} ${fontGeistMono.variable}`

  // jsx
  return (
    <html lang="en">
      <body className={`${fontVariables} bg-background text-foreground font-sans`}>{children}</body>
    </html>
  )
}

export default RootLayout
export { metadata }
