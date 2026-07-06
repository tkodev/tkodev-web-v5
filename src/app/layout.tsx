import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '@/themes/theme.css'

const metadata: Metadata = {
  title: 'tko.dev'
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  // jsx
  return (
    <html lang="en">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}

export default RootLayout
export { metadata }
