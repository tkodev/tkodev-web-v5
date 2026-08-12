import { formatInTimeZone } from 'date-fns-tz'
import {
  CompassIcon,
  ContactIcon,
  GitBranchIcon,
  IdCardIcon,
  MailIcon,
  PanelBottomIcon,
  PhoneIcon,
  PresentationIcon
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/atoms/accordion'
import { Asset } from '@/components/atoms/asset'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Badge } from '@/components/atoms/badge'
import { Button } from '@/components/atoms/button'
import { Card } from '@/components/atoms/card'
import { Decode } from '@/components/atoms/decode'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/atoms/drawer'
import { Hud } from '@/components/atoms/hud'
import { Icon } from '@/components/atoms/icon'
import { Logo } from '@/components/atoms/logo'
import { Marquee } from '@/components/atoms/marquee'
import { ReticleLogo } from '@/components/atoms/reticle-logo'
import { Signature } from '@/components/atoms/signature'
import { Ticker } from '@/components/atoms/ticker'
import { Bio } from '@/components/molecules/bio'
import { Board } from '@/components/molecules/board'
import { Competencies } from '@/components/molecules/competencies'
import { Contact } from '@/components/molecules/contact'
import { Dossier } from '@/components/molecules/dossier'
import { Emblem } from '@/components/molecules/emblem'
import { Identity } from '@/components/molecules/identity'
import { Log, type LogEntry } from '@/components/molecules/log'
import { Menu } from '@/components/molecules/menu'
import { Nav } from '@/components/molecules/nav'
import { Next } from '@/components/molecules/next'
import { Process } from '@/components/molecules/process'
import { Project } from '@/components/molecules/project'
import { Record } from '@/components/molecules/record'
import { Statement } from '@/components/molecules/statement'
import { Stats } from '@/components/molecules/stats'
import { Story } from '@/components/molecules/story'
import { Testimonial } from '@/components/molecules/testimonial'
import { Tile } from '@/components/molecules/tile'
import { Tiles } from '@/components/molecules/tiles'
import { Visuals } from '@/components/molecules/visuals'
import { DesignHero } from '@/components/organisms/design-hero'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'
import { clientById } from '@/constants/client'
import { appTimeZone, simpleDateFormat } from '@/constants/date'
import { jobEntries } from '@/constants/jobs'
import { headerEntries, placeholderAsset } from '@/constants/layout'
import { personEntryById } from '@/constants/profile'
import { projectEntries, projectEntriesByCategory } from '@/constants/projects'
import { appdata } from '@/constants/system'
import { techtalkEntries } from '@/constants/techtalks'
import { testimonialEntries } from '@/constants/testimonials'
import {
  getCareerYears,
  getJobGroups,
  getProjectMainAsset,
  getProjectMainThumb
} from '@/utils/career'
import { createMetadata } from '@/utils/system'

const metadata = createMetadata({
  title: 'Tony Ko / Design System',
  description: 'The living styleguide for tko.dev v5: tokens, ramps, and primitives.',
  path: '/design',
  image: { url: `${appdata.url}/images/ograph/design.png`, width: 1200, height: 630 },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } }
})

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

  const specimenClient = clientById['air-canada']
  const specimenJobGroup = getJobGroups(jobEntries)[0]
  const specimenStory = specimenProject.media?.stories?.[0]
  const specimenVisual = specimenProject.media?.visuals?.[0]
  const mainAsset = getProjectMainAsset(specimenProject)
  const mainThumb = getProjectMainThumb(specimenProject)
  const tileAssets = projectEntries
    .map((projectEntry) => getProjectMainThumb(projectEntry))
    .filter((asset) => asset.src !== placeholderAsset.src)
    .slice(0, 10)

  const specimenTalk = techtalkEntries[0]
  const talkLogEntry: LogEntry = {
    id: specimenTalk.id,
    title: specimenTalk.basic.title,
    subtitle: specimenTalk.basic.subtitle,
    value: formatInTimeZone(specimenTalk.basic.date, appTimeZone, simpleDateFormat),
    linkEntries: [
      ...(specimenTalk.extended?.recording
        ? [{ href: specimenTalk.extended.recording, label: 'Recording' }]
        : []),
      ...(specimenTalk.extended?.slides
        ? [{ href: specimenTalk.extended.slides, label: 'Slides' }]
        : [])
    ]
  }

  const statEntries = [
    { title: 'Years Experience', value: String(getCareerYears(jobEntries)) },
    { title: 'Projects Shipped', value: String(projectEntries.length) },
    { title: 'Employers', value: String(getJobGroups(jobEntries).length) },
    { title: 'Talks', value: String(techtalkEntries.length) }
  ]

  const channelEntries = [
    { href: `mailto:${tony.extended?.email}`, icon: MailIcon, label: 'tony@tko.dev' },
    {
      href: `tel:${tony.extended?.phone?.replace(/[^+\d]/g, '')}`,
      icon: PhoneIcon,
      label: tony.extended?.phone ?? ''
    },
    { href: tony.extended?.linkedin ?? '#', icon: ContactIcon, label: 'LinkedIn' },
    { href: tony.extended?.resume ?? '#', icon: IdCardIcon, label: 'Resume' },
    { href: tony.extended?.github ?? '#', icon: GitBranchIcon, label: 'GitHub' }
  ]

  const processEntries = [
    {
      id: 'discovery',
      title: 'Constraints Before Concepts',
      desc: 'I start with the people closest to the problem and the constraints they actually live with, then prototype the riskiest assumption first.',
      label: 'Discovery',
      icon: CompassIcon
    },
    {
      id: 'refine',
      title: 'Refine Until It Disappears',
      desc: 'The last stretch goes to what nobody writes a ticket for: the focus ring, the empty state, the frame that drops under ten thousand data points.',
      label: 'Refine',
      icon: PresentationIcon
    }
  ]

  // jsx
  return (
    <Main>
      <Section id="design-hero">
        <DesignHero
          reticle="logo"
          hudProps={{
            title: 'D.0 / Design System //',
            subtitle: '// Living Styleguide',
            accent1: '[ Spec Validated ]',
            accent2: '[ Tokens Live ]',
            cta: 'Inspect'
          }}
          introProps={{
            subtitle: 'Design System',
            title: 'Living \nstyleguide',
            desc: 'Every token, ramp, and primitive in the v5 system, rendered live.'
          }}
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
              <ReticleLogo className="mx-auto w-full max-w-xl" />
            </div>
          </div>
        </Board>
      </Section>
      <Section id="design-molecules" height="auto" width="md">
        <Board subtitle="D.5 / Molecules //" title="Cards">
          <div className="flex flex-col gap-8">
            <Project project={specimenProject} />
            <div className="grid items-stretch gap-8 md:grid-cols-2">
              <Bio
                cta={<Button variant="outline">Card CTA</Button>}
                desc="Card-bio specimen: portrait underlay, scrim, and CTA slot."
                photo={tony.media?.photo}
                title="Bio"
              />
              <Competencies
                competencyEntries={(tony.extended?.competencies ?? []).slice(0, 4)}
                title="Core Competencies"
              />
            </div>
            {!!specimenTestimonial && (
              <div className="max-w-100">
                <Testimonial testimonial={specimenTestimonial} />
              </div>
            )}
          </div>
        </Board>
      </Section>
      <Section id="design-surfaces" height="auto" width="md">
        <Board subtitle="D.6 / Surfaces //" title="Cards, Drawers, Assets">
          <div className="flex flex-col gap-8">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <p className="text-e4 font-expressive text-muted-foreground uppercase">
                  Card (default)
                </p>
                <p className="text-sm">Hairline border over a backdrop-blurred card surface.</p>
              </Card>
              <Card className="p-6" isHover>
                <p className="text-e4 font-expressive text-muted-foreground uppercase">
                  Card (isHover)
                </p>
                <p className="text-sm">Hover to see the muted transition.</p>
              </Card>
            </div>
            <div className="border-t pt-8">
              {/* Drawer is a client component; the server-rendered design page can host it directly. */}
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline">
                    <Icon icon={PanelBottomIcon} size="sm" />
                    Open Drawer
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Drawer Specimen</DrawerTitle>
                    <DrawerDescription>
                      A bottom-anchored drawer built on the card surface, with a grab handle and a
                      dimmed overlay.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="text-muted-foreground px-4 text-sm">
                    Content lives between the header and footer.
                  </div>
                  <DrawerFooter>
                    <Button variant="outline">Footer action</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
            <div className="border-t pt-8">
              <p className="text-e4 font-expressive text-muted-foreground mb-4 uppercase">
                Asset (image)
              </p>
              <Asset className="w-full max-w-md rounded-sm border object-cover" asset={mainAsset} />
            </div>
          </div>
        </Board>
      </Section>
      <Section id="design-motion-text" height="auto" width="md">
        <Board subtitle="D.7 / Motion Text //" title="Decode & Ticker">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-e4 font-expressive text-muted-foreground mb-4 uppercase">Decode</p>
              <h3 className="text-h3 font-heading uppercase">
                <Decode text="Signal Acquired" />
              </h3>
            </div>
            <div className="border-t pt-8">
              <p className="text-e4 font-expressive text-muted-foreground mb-4 uppercase">
                Ticker (hover or focus the clipped line)
              </p>
              <div className="max-w-64 rounded-sm border p-3">
                <Ticker>
                  Staff Software Engineer, Design Engineer, and systems thinker based in Toronto.
                </Ticker>
              </div>
            </div>
          </div>
        </Board>
      </Section>
      <Section id="design-data" height="auto" width="lg">
        <Board subtitle="D.8 / Data //" title="Instruments & Ledgers">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-e4 font-expressive text-muted-foreground mb-4 uppercase">Hud</p>
              <div className="relative h-64 overflow-hidden rounded-sm border">
                <Hud
                  accent1="[ File Open ]"
                  accent2="[ Evidence Logged ]"
                  cta="Open Record"
                  subtitle="// Case File"
                  title="D.8 / Hud //"
                />
              </div>
            </div>
            <div className="border-t pt-8">
              <p className="text-e4 font-expressive text-muted-foreground mb-4 uppercase">Stats</p>
              <Stats statEntries={statEntries} />
            </div>
            <div className="border-t pt-8">
              <p className="text-e4 font-expressive text-muted-foreground mb-4 uppercase">Log</p>
              <Log index={0} logEntry={talkLogEntry} />
            </div>
            <div className="border-t pt-8">
              <p className="text-e4 font-expressive text-muted-foreground mb-4 uppercase">
                Record (wrapped in an Accordion)
              </p>
              <Accordion type="single" collapsible>
                <Record index={0} jobGroup={specimenJobGroup} />
              </Accordion>
            </div>
          </div>
        </Board>
      </Section>
      <Section id="design-identity-nav" height="auto" width="md">
        <Board subtitle="D.9 / Identity & Nav //" title="Wayfinding">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-e4 font-expressive text-muted-foreground mb-4 uppercase">
                Identity
              </p>
              <Identity
                name="Tony Ko"
                fallback="tko"
                role="Design Engineer"
                thumb={tony.media?.thumb}
              />
            </div>
            <div className="border-t pt-8">
              <p className="text-e4 font-expressive text-muted-foreground mb-4 uppercase">Nav</p>
              <Nav aria-label="Nav specimen" entries={headerEntries} />
            </div>
            <div className="border-t pt-8">
              <p className="text-e4 font-expressive text-muted-foreground mb-4 uppercase">Menu</p>
              <Menu aria-label="Menu specimen" entries={headerEntries} />
            </div>
            <div className="border-t pt-8">
              <p className="text-e4 font-expressive text-muted-foreground mb-4 uppercase">Emblem</p>
              <Emblem client={specimenClient} />
            </div>
          </div>
        </Board>
      </Section>
      <Section id="design-work" height="auto" width="lg">
        <Board subtitle="D.10 / Work //" title="Dossier & Evidence">
          <div className="flex flex-col gap-16">
            <Dossier
              badges={specimenProject.extended?.duties}
              desc={specimenProject.basic.subtitle}
              tagline={specimenProject.basic.role}
              title={specimenProject.basic.title}
              metaEntries={[
                { label: 'Client', value: 'tkodev' },
                {
                  label: 'Year',
                  value: formatInTimeZone(specimenProject.basic.startDate, appTimeZone, 'yyyy')
                }
              ]}
            />
            {!!specimenStory && <Story index="1A.1" story={specimenStory} />}
            {!!specimenVisual && <Visuals asset={specimenVisual} index="1A.2" />}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-56 overflow-hidden rounded-sm border">
                <p className="text-e4 font-expressive text-muted-foreground absolute top-3 left-3 z-10 uppercase">
                  Tile
                </p>
                <Tile asset={mainThumb} />
              </div>
              <div className="relative h-56 overflow-hidden rounded-sm border">
                <p className="text-e4 font-expressive text-muted-foreground absolute top-3 left-3 z-10 uppercase">
                  Tiles
                </p>
                <Tiles assets={tileAssets} />
              </div>
            </div>
            <Next
              label="Next Project"
              title={specimenProject.basic.title}
              ctaProps={{
                href: `/works/${specimenProject.id}`,
                icon: PresentationIcon,
                label: 'View Work'
              }}
            />
          </div>
        </Board>
      </Section>
      <Section id="design-narrative" height="auto" width="lg">
        <Board subtitle="D.11 / Narrative //" title="Statement, Process, Contact">
          <div className="flex flex-col gap-16">
            <Statement subtitle="D.11 / Method //" title="How I Work">
              I get uncomfortable when design and engineering are not talking.
            </Statement>
            <Process processEntries={processEntries} subtitle="D.11 / Process //" />
            <div id="contact" className="scroll-mt-20">
              <Contact
                channelEntries={channelEntries}
                title="Get in Touch"
                desc={
                  "I'm based in Toronto, Canada. \nOpen to roles where engineering and product need to work closely together."
                }
              />
            </div>
          </div>
        </Board>
      </Section>
    </Main>
  )
}

export default DesignPage
export { metadata }
