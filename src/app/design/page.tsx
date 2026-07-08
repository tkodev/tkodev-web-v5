import { type Metadata } from 'next'
import { CompassIcon } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/atoms/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Badge } from '@/components/atoms/badge'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { Logo } from '@/components/atoms/logo'
import { Marquee } from '@/components/atoms/marquee'
import { Reticle } from '@/components/atoms/reticle'
import { Signature } from '@/components/atoms/signature'
import { Board } from '@/components/molecules/board'
import { CardBio } from '@/components/molecules/card-bio'
import { CardCompetencies } from '@/components/molecules/card-competencies'
import { CardProject } from '@/components/molecules/card-project'
import { CardQuote } from '@/components/molecules/card-quote'
import { Intro } from '@/components/molecules/intro'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'
import { personEntryById } from '@/constants/profile'
import { projectEntriesByCategory } from '@/constants/projects'
import { testimonialEntries } from '@/constants/testimonials'

const metadata: Metadata = {
  title: 'Tony Ko / Design System',
  description: 'The living styleguide for tko.dev v5: tokens, ramps, and primitives.',
  robots: { index: false }
}

const headingRamp = [
  { token: 'h1', className: 'text-h1' },
  { token: 'h2', className: 'text-h2' },
  { token: 'h3', className: 'text-h3' },
  { token: 'h4', className: 'text-h4' },
  { token: 'h5', className: 'text-h5' }
]

const expressiveRamp = [
  { token: 'e1', className: 'text-e1' },
  { token: 'e2', className: 'text-e2' },
  { token: 'e3', className: 'text-e3' },
  { token: 'e4', className: 'text-e4' },
  { token: 'e5', className: 'text-e5' }
]

const bodyRamp = [
  { token: 'xl', className: 'text-xl' },
  { token: 'lg', className: 'text-lg' },
  { token: 'md', className: 'text-md' },
  { token: 'sm', className: 'text-sm' },
  { token: 'xs', className: 'text-xs' }
]

const colorSwatches = [
  { token: 'background', className: 'bg-background' },
  { token: 'foreground', className: 'bg-foreground' },
  { token: 'card', className: 'bg-card' },
  { token: 'primary', className: 'bg-primary' },
  { token: 'secondary', className: 'bg-secondary' },
  { token: 'muted', className: 'bg-muted' },
  { token: 'muted-foreground', className: 'bg-muted-foreground' },
  { token: 'accent', className: 'bg-accent' },
  { token: 'destructive', className: 'bg-destructive' },
  { token: 'border', className: 'bg-border' },
  { token: 'input', className: 'bg-input' },
  { token: 'ring', className: 'bg-ring' }
]

const radiusSteps = [
  { token: 'radius-xs', className: 'rounded-xs' },
  { token: 'radius-sm', className: 'rounded-sm' },
  { token: 'radius-md', className: 'rounded-md' },
  { token: 'radius-lg', className: 'rounded-lg' },
  { token: 'radius-xl', className: 'rounded-xl' }
]

const gapSteps = [
  { token: 'gap-xs', className: 'w-xs' },
  { token: 'gap-sm', className: 'w-sm' },
  { token: 'gap-md', className: 'w-md' },
  { token: 'gap-lg', className: 'w-lg' },
  { token: 'gap-xl', className: 'w-xl' }
]

const buttonVariants = ['primary', 'outline', 'secondary', 'ghost', 'destructive', 'link'] as const
const buttonSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
const badgeVariants = ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] as const
const iconSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

const DesignPage = () => {
  // render vars
  const tony = personEntryById['tony']
  const specimenProject = projectEntriesByCategory['featured'][0]
  const specimenTestimonial = testimonialEntries.filter(
    (testimonialEntry) => testimonialEntry.parents.recipientId === 'tony'
  )[0]

  // jsx
  return (
    <Main>
      <Section id="design-intro" height="auto" width="md">
        <Intro
          desc="Every token, ramp, and primitive in the v5 system, rendered live."
          subtitle="Living Styleguide"
          title="Design System"
        />
      </Section>
      <Section id="design-typography" height="auto" width="md">
        <Board subtitle="D.1 / Typography //" title="Type Ramps">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {headingRamp.map(({ token, className }) => (
                <div key={token} className="flex items-baseline gap-4">
                  <span className="text-e4 font-expressive text-muted-foreground w-8 shrink-0 uppercase">
                    {token}
                  </span>
                  <span className={`font-heading uppercase ${className}`}>Signal Acquired</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 border-t pt-8">
              {expressiveRamp.map(({ token, className }) => (
                <div key={token} className="flex items-baseline gap-4">
                  <span className="text-e4 font-expressive text-muted-foreground w-8 shrink-0 uppercase">
                    {token}
                  </span>
                  <span className={`font-expressive uppercase ${className}`}>
                    Engineering, Design, Technology
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 border-t pt-8">
              {bodyRamp.map(({ token, className }) => (
                <div key={token} className="flex items-baseline gap-4">
                  <span className="text-e4 font-expressive text-muted-foreground w-8 shrink-0 uppercase">
                    {token}
                  </span>
                  <span className={className}>
                    Bridging the gap between ux and execution. Engineer by craft, designer by
                    instinct.
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Board>
      </Section>
      <Section id="design-color" height="auto" width="md">
        <Board subtitle="D.2 / Color //" title="Semantic Tokens">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {colorSwatches.map(({ token, className }) => (
              <div key={token} className="flex flex-col gap-2">
                <div className={`h-16 w-full rounded-sm border ${className}`} />
                <span className="text-e4 font-expressive text-muted-foreground uppercase">
                  {token}
                </span>
              </div>
            ))}
          </div>
        </Board>
      </Section>
      <Section id="design-visual" height="auto" width="md">
        <Board subtitle="D.3 / Visual //" title="Radius & Gap">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-end gap-4">
              {radiusSteps.map(({ token, className }) => (
                <div key={token} className="flex flex-col items-center gap-2">
                  <div className={`bg-muted size-20 border ${className}`} />
                  <span className="text-e4 font-expressive text-muted-foreground uppercase">
                    {token}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 border-t pt-8">
              {gapSteps.map(({ token, className }) => (
                <div key={token} className="flex items-center gap-4">
                  <span className="text-e4 font-expressive text-muted-foreground w-16 shrink-0 uppercase">
                    {token}
                  </span>
                  <div className={`bg-primary h-2 ${className}`} />
                </div>
              ))}
            </div>
          </div>
        </Board>
      </Section>
      <Section id="design-atoms" height="auto" width="md">
        <Board subtitle="D.4 / Atoms //" title="Primitives">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-4">
              {buttonVariants.map((variant) => (
                <Button key={variant} variant={variant}>
                  {variant}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {buttonSizes.map((size) => (
                <Button key={size} size={size} variant="outline">
                  {size}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 border-t pt-8">
              {badgeVariants.map((variant) => (
                <Badge key={variant} variant={variant}>
                  {variant}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 border-t pt-8">
              {iconSizes.map((size) => (
                <Icon key={size} icon={CompassIcon} size={size} />
              ))}
              <Avatar>
                <AvatarImage alt={tony.media?.thumb?.alt} src={tony.media?.thumb?.src} />
                <AvatarFallback>tko</AvatarFallback>
              </Avatar>
              <Logo className="w-18" />
              <Signature className="w-18" />
            </div>
            <div className="border-t pt-8">
              <Accordion type="single" collapsible>
                {(tony.extended?.competencies ?? []).slice(0, 3).map((competencyEntry) => (
                  <AccordionItem key={competencyEntry.id} value={competencyEntry.id}>
                    <AccordionTrigger>{competencyEntry.title}</AccordionTrigger>
                    {!!competencyEntry.desc && (
                      <AccordionContent>{competencyEntry.desc}</AccordionContent>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="border-t pt-8">
              <Marquee>
                {badgeVariants.map((variant) => (
                  <Badge key={`marquee-${variant}`} variant="outline">
                    Marquee Specimen
                  </Badge>
                ))}
              </Marquee>
            </div>
            <div className="overflow-hidden border-t pt-8">
              <Reticle className="mx-auto w-full max-w-xl" />
            </div>
          </div>
        </Board>
      </Section>
      <Section id="design-molecules" height="auto" width="md">
        <Board subtitle="D.5 / Molecules //" title="Cards">
          <div className="flex flex-col gap-8">
            <CardProject project={specimenProject} />
            <div className="grid items-stretch gap-8 md:grid-cols-2">
              <CardBio
                cta={<Button variant="outline">Card CTA</Button>}
                desc="Card-bio specimen: portrait underlay, scrim, and CTA slot."
                photo={tony.media?.photo}
                title="Bio"
              />
              <CardCompetencies
                competencyEntries={(tony.extended?.competencies ?? []).slice(0, 4)}
                title="Core Competencies"
              />
            </div>
            {!!specimenTestimonial && (
              <div className="max-w-100">
                <CardQuote testimonial={specimenTestimonial} />
              </div>
            )}
          </div>
        </Board>
      </Section>
    </Main>
  )
}

export default DesignPage
export { metadata }
