'use client'

import Link from 'next/link'
import { type FC } from 'react'
import { Button } from '@/components/atoms/button'
import { Decode } from '@/components/atoms/decode'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'

const styles = {
  section: 'flex flex-col items-center justify-center gap-6 text-center',
  eyebrow: 'text-e4 font-expressive text-muted-foreground uppercase tracking-[0.25em]',
  title: 'text-h1 font-heading uppercase',
  desc: 'text-muted-foreground max-w-md text-sm',
  readout: 'text-e5 font-expressive text-muted-foreground uppercase tracking-[0.25em]',
  actions: 'flex flex-wrap items-center justify-center gap-4'
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
      <Section className={styles.section}>
        <p className={styles.eyebrow}>[ 500 // system fault ]</p>
        <h1 className={styles.title}>
          <Decode>SIGNAL CORRUPTED</Decode>
        </h1>
        <p className={styles.desc}>
          An unhandled exception broke the feed. Reset the link to retry the transmission, or return
          to base.
        </p>
        <p className={styles.readout}>err // fault_ref: {digest}</p>
        <div className={styles.actions}>
          <Button onClick={reset}>Retry transmission</Button>
          <Button variant="outline" asChild>
            <Link href="/">Return to base</Link>
          </Button>
        </div>
      </Section>
    </Main>
  )
}

export default ErrorPage
