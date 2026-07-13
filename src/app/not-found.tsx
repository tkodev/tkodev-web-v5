import { type Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/atoms/button'
import { ErrorHero } from '@/components/organisms/error-hero'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'

const metadata: Metadata = {
  title: 'Tony Ko / Signal Lost',
  description: 'No signal at the requested coordinates.',
  robots: { index: false }
}

const NotFoundPage = () => {
  // jsx
  return (
    <Main>
      <Section id="signal-lost">
        <ErrorHero
          hudProps={{
            title: '404 / Signal Lost //',
            subtitle: '// No Return',
            accent1: '[ Off The Grid ]',
            accent2: '[ Path Unmapped ]',
            cta: 'err // no_signal_at_path'
          }}
          introProps={{
            title: 'Transmission Not Found',
            subtitle: '404 // Signal Lost',
            desc: 'The coordinates you requested return no signal. \nThe asset was moved, decommissioned, or never logged.'
          }}
        >
          <Button asChild>
            <Link href="/">Re-establish link</Link>
          </Button>
        </ErrorHero>
      </Section>
    </Main>
  )
}

export default NotFoundPage
export { metadata }
