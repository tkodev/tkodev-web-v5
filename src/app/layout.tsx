import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const metadata: Metadata = {
  title: 'tko.dev'
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  // jsx
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
export { metadata }
