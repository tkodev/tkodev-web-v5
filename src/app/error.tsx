'use client'

import Link from 'next/link'
import { type FC } from 'react'
import { Button } from '@/components/atoms/button'
import { ErrorHero } from '@/components/organisms/error-hero'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'

const styles = {
  buttons: 'flex flex-wrap items-center justify-center gap-4'
}

type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

const ErrorPage: FC<ErrorPageProps> = (props) => {
  // props
  const { error, reset } = props

  // render vars
  const digest = error.digest ?? 'unlogged'

  // jsx
  return (
    <Main>
      <Section id="fault">
        <ErrorHero
          hudProps={{
            title: 'Sys / Fault //',
            subtitle: '// Signal Lost',
            accent1: '[ Link Severed ]',
            accent2: '[ Retry Ready ]',
            cta: `err // fault_ref: ${digest}`
          }}
          introProps={{
            title: 'Signal Corrupted',
            subtitle: '500 // System Fault',
            desc: 'An unhandled exception broke the feed. \nReset the link to retry, or return to base.'
          }}
        >
          <div className={styles.buttons}>
            <Button onClick={reset}>Retry transmission</Button>
            <Button variant="outline" asChild>
              <Link href="/">Return to base</Link>
            </Button>
          </div>
        </ErrorHero>
      </Section>
    </Main>
  )
}

export default ErrorPage
