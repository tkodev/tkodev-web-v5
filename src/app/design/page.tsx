import type { Metadata } from 'next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/atoms/accordion'
import { Badge } from '@/components/atoms/badge'
import { Button } from '@/components/atoms/button'
import { Separator } from '@/components/atoms/separator'
import { Section } from '@/components/templates/section'

const metadata: Metadata = {
  description: 'Design token and primitive specimen for tko.dev v5.',
  title: 'Design'
}

const headingSteps = [
  { className: 'font-alliance text-h1', label: 'h1 / Alliance No.2 Bold / 60px' },
  { className: 'font-alliance text-h2', label: 'h2 / Alliance No.2 Bold / 48px' },
  { className: 'font-alliance text-h3', label: 'h3 / Alliance No.2 Bold / 40px' },
  { className: 'font-alliance text-h4', label: 'h4 / Alliance No.2 Bold / 32px' },
  { className: 'font-sans text-h5', label: 'h5 / Geist Bold / 24px' }
]

const expressiveSteps = [
  { className: 'font-alliance text-e1 uppercase', label: 'e1 / 18px' },
  { className: 'font-alliance text-e2 uppercase', label: 'e2 / 16px' },
  { className: 'font-alliance text-e3 uppercase', label: 'e3 / 14px' },
  { className: 'font-alliance text-e4 uppercase', label: 'e4 / 12px' },
  { className: 'font-alliance text-e5 uppercase', label: 'e5 / 10px' }
]

const bodySteps = [
  { className: 'font-sans text-xl', label: 'xl / 20px' },
  { className: 'font-sans text-lg', label: 'lg / 18px' },
  { className: 'font-sans text-md', label: 'md / 16px' },
  { className: 'font-sans text-sm', label: 'sm / 14px' },
  { className: 'font-sans text-xs', label: 'xs / 12px' }
]

const colorSwatches = [
  { className: 'bg-background', name: 'background' },
  { className: 'bg-foreground', name: 'foreground' },
  { className: 'bg-card', name: 'card' },
  { className: 'bg-primary', name: 'primary' },
  { className: 'bg-secondary', name: 'secondary' },
  { className: 'bg-muted', name: 'muted' },
  { className: 'bg-muted-foreground', name: 'muted-foreground' },
  { className: 'bg-accent', name: 'accent' },
  { className: 'bg-destructive', name: 'destructive' },
  { className: 'bg-border', name: 'border' },
  { className: 'bg-input', name: 'input' },
  { className: 'bg-ring', name: 'ring' },
  { className: 'bg-chart-1', name: 'chart-1' },
  { className: 'bg-chart-2', name: 'chart-2' },
  { className: 'bg-chart-3', name: 'chart-3' },
  { className: 'bg-chart-4', name: 'chart-4' },
  { className: 'bg-chart-5', name: 'chart-5' }
]

const radiusSteps = [
  { className: 'rounded-xs', label: 'radius-xs / 4px' },
  { className: 'rounded-sm', label: 'radius-sm / 8px' },
  { className: 'rounded-md', label: 'radius-md / 12px' },
  { className: 'rounded-lg', label: 'radius-lg / 16px' },
  { className: 'rounded-xl', label: 'radius-xl / 32px' }
]

const gapSteps = [
  { className: 'gap-xs', label: 'gap-xs / 4px' },
  { className: 'gap-sm', label: 'gap-sm / 8px' },
  { className: 'gap-md', label: 'gap-md / 16px' },
  { className: 'gap-lg', label: 'gap-lg / 32px' },
  { className: 'gap-xl', label: 'gap-xl / 64px' }
]

const buttonVariants = ['default', 'secondary', 'outline', 'ghost', 'link', 'destructive'] as const
const badgeVariants = ['default', 'secondary', 'outline', 'ghost', 'link', 'destructive'] as const

const DesignPage = () => {
  // jsx
  return (
    <Section size="lg">
      <div className="gap-xl py-xl flex flex-col">
        <header className="gap-sm flex flex-col">
          <p className="font-alliance text-e4 text-muted-foreground uppercase">tkodev-design-v5</p>
          <h1 className="font-alliance text-h2">Design</h1>
          <p className="text-muted-foreground text-sm">
            The token contract rendered: typography, color, radius, gap, and the base primitives.
          </p>
        </header>

        <section className="gap-md flex flex-col" aria-label="Headings">
          <h2 className="font-alliance text-e3 text-muted-foreground uppercase">Headings</h2>
          {headingSteps.map((step) => (
            <p key={step.label} className={step.className}>
              {step.label}
            </p>
          ))}
        </section>

        <Separator />

        <section className="gap-md flex flex-col" aria-label="Expressive">
          <h2 className="font-alliance text-e3 text-muted-foreground uppercase">Expressive</h2>
          {expressiveSteps.map((step) => (
            <p key={step.label} className={step.className}>
              Engineering, Design, Technology · {step.label}
            </p>
          ))}
        </section>

        <Separator />

        <section className="gap-md flex flex-col" aria-label="Body">
          <h2 className="font-alliance text-e3 text-muted-foreground uppercase">Body</h2>
          {bodySteps.map((step) => (
            <p key={step.label} className={step.className}>
              {step.label} · The quick brown fox jumps over the lazy dog.
            </p>
          ))}
          <p className="text-sm">
            <strong className="font-semibold">strong</strong> · <em>emphasis</em> ·{' '}
            <span className="underline">underline</span> ·{' '}
            <code className="font-mono font-semibold">code</code>
          </p>
          <blockquote className="border-border pl-md text-md border-l italic">
            blockquote · Geist Italic 16px
          </blockquote>
        </section>

        <Separator />

        <section className="gap-md flex flex-col" aria-label="Color">
          <h2 className="font-alliance text-e3 text-muted-foreground uppercase">Color</h2>
          <div className="gap-sm grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {colorSwatches.map((swatch) => (
              <div key={swatch.name} className="gap-xs flex flex-col">
                <div
                  className={`${swatch.className} border-border h-12 w-full rounded-sm border`}
                />
                <span className="font-mono text-xs">{swatch.name}</span>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        <section className="gap-md flex flex-col" aria-label="Radius">
          <h2 className="font-alliance text-e3 text-muted-foreground uppercase">Radius</h2>
          <div className="gap-md flex flex-wrap">
            {radiusSteps.map((step) => (
              <div key={step.label} className="gap-xs flex flex-col">
                <div className={`${step.className} bg-secondary size-16`} />
                <span className="font-mono text-xs">{step.label}</span>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        <section className="gap-md flex flex-col" aria-label="Gap">
          <h2 className="font-alliance text-e3 text-muted-foreground uppercase">Gap</h2>
          {gapSteps.map((step) => (
            <div key={step.label} className="gap-xs flex flex-col">
              <div className={`${step.className} flex`}>
                <div className="bg-secondary h-6 w-16" />
                <div className="bg-secondary h-6 w-16" />
                <div className="bg-secondary h-6 w-16" />
              </div>
              <span className="font-mono text-xs">{step.label}</span>
            </div>
          ))}
        </section>

        <Separator />

        <section className="gap-md flex flex-col" aria-label="Atoms">
          <h2 className="font-alliance text-e3 text-muted-foreground uppercase">Atoms</h2>
          <div className="gap-sm flex flex-wrap items-center">
            {buttonVariants.map((variant) => (
              <Button key={variant} variant={variant}>
                {variant}
              </Button>
            ))}
          </div>
          <div className="gap-sm flex flex-wrap items-center">
            {badgeVariants.map((variant) => (
              <Badge key={variant} variant={variant}>
                {variant}
              </Badge>
            ))}
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="tokens">
              <AccordionTrigger>Accordion · tokens</AccordionTrigger>
              <AccordionContent>
                Every value on this page comes from the token contract.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="primitives">
              <AccordionTrigger>Accordion · primitives</AccordionTrigger>
              <AccordionContent>
                shadcn primitives, reformatted to the house shape.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </Section>
  )
}

export default DesignPage
export { metadata }
