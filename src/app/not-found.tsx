import { type Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/atoms/button'
import { Decode } from '@/components/atoms/decode'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'

const styles = {
  section: 'flex flex-col items-center justify-center gap-6 text-center',
  eyebrow: 'text-e4 font-expressive text-muted-foreground uppercase tracking-[0.25em]',
  title: 'text-h1 font-heading uppercase',
  desc: 'text-muted-foreground max-w-md text-sm',
  readout: 'text-e5 font-expressive text-muted-foreground uppercase tracking-[0.25em]'
}

const metadata: Metadata = {
  title: 'Tony Ko / Signal Lost',
  description: 'No signal at the requested coordinates.',
  robots: { index: false }
}

const NotFoundPage = () => {
  // jsx
  return (
    <Main>
      <Section className={styles.section}>
        <p className={styles.eyebrow}>[ 404 // signal lost ]</p>
        <h1 className={styles.title}>
          <Decode>TRANSMISSION NOT FOUND</Decode>
        </h1>
        <p className={styles.desc}>
          The coordinates you requested return no signal. The asset was moved, decommissioned, or
          never logged in this dossier.
        </p>
        <p className={styles.readout}>err // no_signal_at_path</p>
        <Button asChild>
          <Link href="/">Re-establish link</Link>
        </Button>
      </Section>
    </Main>
  )
}

export default NotFoundPage
export { metadata }
