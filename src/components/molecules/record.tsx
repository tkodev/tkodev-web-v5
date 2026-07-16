import { forwardRef, type ComponentProps } from 'react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/atoms/accordion'
import { Badge } from '@/components/atoms/badge'
import { clientById } from '@/constants/client'
import { jobTypeLabels } from '@/constants/jobs'
import { formatJobDuration, formatJobSpan, type JobGroup } from '@/utils/career'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col'),

  trigger: cva('gap-4 p-4 hover:no-underline'),
  index: cva('text-e4 font-expressive text-muted-foreground w-8 shrink-0 uppercase'),
  header: cva('flex min-w-0 grow flex-col gap-2 text-left'),
  employer: cva('text-h5 font-heading uppercase'),
  meta: cva(['flex flex-wrap gap-4', 'text-e4 font-expressive text-muted-foreground uppercase']),

  content: cva('flex flex-col p-0'),
  role: cva('flex flex-col gap-4 border-t px-4 py-6 sm:pl-16'),
  title: cva('flex flex-col gap-2'),
  name: cva('text-md'),
  span: cva('text-e4 font-expressive text-muted-foreground uppercase'),
  location: cva('text-e4 font-expressive text-muted-foreground uppercase'),
  desc: cva('text-foreground text-sm whitespace-pre-line'),
  skills: cva('flex flex-wrap gap-2')
}

type RecordRef = HTMLDivElement
type RecordProps = Omit<ComponentProps<typeof AccordionItem>, 'value'> &
  VariantProps<typeof styles.root> & {
    jobGroup: JobGroup
    index: number
  }

const Record = forwardRef<RecordRef, RecordProps>((props, ref) => {
  // props
  const { jobGroup, index, className, ...rest } = props
  const { employerId, jobEntries, startDate, endDate } = jobGroup

  // render vars
  const employer = clientById[employerId]
  const numeral = String(index + 1).padStart(2, '0')
  const duration = formatJobDuration(startDate, endDate)
  const roleCount = `${jobEntries.length} ${jobEntries.length === 1 ? 'Role' : 'Roles'}`
  const types = [...new Set(jobEntries.map((jobEntry) => jobTypeLabels[jobEntry.basic.type]))]

  // jsx
  return (
    <AccordionItem
      ref={ref}
      className={cn(styles.root({ className }))}
      value={employerId}
      {...rest}
    >
      <AccordionTrigger className={cn(styles.trigger())}>
        <span className={cn(styles.index())}>{numeral}</span>
        <span className={cn(styles.header())}>
          <span className={cn(styles.employer())}>{employer.basic.name}</span>
          <span className={cn(styles.meta())}>
            <span>{roleCount}</span>
            <span>{duration}</span>
            <span>{types.join(' / ')}</span>
          </span>
        </span>
      </AccordionTrigger>
      <AccordionContent className={cn(styles.content())}>
        {jobEntries.map((jobEntry) => {
          const { basic, extended } = jobEntry
          const key = `record-${jobEntry.id}`
          const span = formatJobSpan(basic.startDate, basic.endDate)
          const roleDuration = formatJobDuration(basic.startDate, basic.endDate)
          return (
            <div key={key} className={cn(styles.role())}>
              <div className={cn(styles.title())}>
                <h4 className={cn(styles.name())}>{basic.title}</h4>
                <p className={cn(styles.span())}>
                  {span} · {roleDuration}
                </p>
                <p className={cn(styles.location())}>{basic.location}</p>
              </div>
              <p className={cn(styles.desc())}>{basic.desc}</p>
              {!!extended?.skills?.length && (
                <div className={cn(styles.skills())}>
                  {extended.skills.map((skill) => {
                    const skillKey = `${jobEntry.id}-skill-${skill}`
                    return (
                      <Badge key={skillKey} variant="outline">
                        {skill}
                      </Badge>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </AccordionContent>
    </AccordionItem>
  )
})
Record.displayName = 'Record'

export { Record }
export type { RecordProps, RecordRef }
