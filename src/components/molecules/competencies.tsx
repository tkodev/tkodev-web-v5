import { forwardRef, type HTMLAttributes } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/atoms/accordion'
import { type CompetencyEntry } from '@/types/career'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('bg-background/30 flex flex-col gap-4 rounded-sm border p-4 backdrop-blur-sm'),
  title: cva('text-h4 font-heading uppercase'),
  accordion: cva('w-full')
}

type CompetenciesRef = HTMLDivElement
type CompetenciesProps = HTMLAttributes<CompetenciesRef> &
  VariantProps<typeof styles.root> & {
    title: string
    competencyEntries: CompetencyEntry[]
  }

const Competencies = forwardRef<CompetenciesRef, CompetenciesProps>((props, ref) => {
  // props
  const { title, competencyEntries, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <h3 className={cn(styles.title())}>{title}</h3>
      <Accordion type="single" className={cn(styles.accordion())} collapsible>
        {competencyEntries.map((competencyEntry) => {
          const key = `competency-${competencyEntry.id}`
          return (
            <AccordionItem key={key} value={competencyEntry.id}>
              <AccordionTrigger>{competencyEntry.title}</AccordionTrigger>
              {!!competencyEntry.desc && (
                <AccordionContent>{competencyEntry.desc}</AccordionContent>
              )}
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
})
Competencies.displayName = 'Competencies'

export { Competencies }
export type { CompetenciesProps, CompetenciesRef }
