import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Footer } from '@/components/templates/footer'
import { Header } from '@/components/templates/header'
import { Layout } from '@/components/templates/layout'
import { Main } from '@/components/templates/main'
import { Overlays } from '@/components/templates/overlays'
import { Underlays } from '@/components/templates/underlays'
import { appName, navEntries } from '@/constants/site'
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
      <body className={`${fontVariables} bg-background text-foreground font-sans`}>
        <Layout>
          <Underlays />
          <Header>
            <Link href="/">{appName}</Link>
            <nav className="gap-md flex" aria-label="Primary">
              {navEntries.map((entry) => (
                <Link key={entry.href} href={entry.href}>
                  {entry.label}
                </Link>
              ))}
            </nav>
          </Header>
          <Main>{children}</Main>
          <Footer>
            <span>{appName}</span>
          </Footer>
          <Overlays />
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout
export { metadata }
