import { forwardRef, type HTMLAttributes } from 'react'
import { Marquee } from '@/components/atoms/marquee'
import { Emblem } from '@/components/molecules/emblem'
import { Stats, type StatEntry } from '@/components/molecules/stats'
import { type ClientEntry } from '@/types/career'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex flex-col justify-center gap-16']),
  clients: cva('flex flex-col gap-8')
}

type ExperienceSummaryRef = HTMLDivElement
type ExperienceSummaryProps = HTMLAttributes<ExperienceSummaryRef> &
  VariantProps<typeof styles.root> & {
    statEntries: StatEntry[]
    clientEntries: ClientEntry[]
  }

const ExperienceSummary = forwardRef<ExperienceSummaryRef, ExperienceSummaryProps>((props, ref) => {
  // props
  const { statEntries, clientEntries, className, ...rest } = props

  // render vars
  const midpoint = Math.ceil(clientEntries.length / 2)
  const rows = [clientEntries.slice(0, midpoint), clientEntries.slice(midpoint)].filter(
    (row) => row.length > 0
  )

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Stats statEntries={statEntries} />
      <div className={cn(styles.clients())}>
        {rows.map((row, rowIndex) => {
          const key = `client-row-${rowIndex}`
          return (
            <Marquee key={key} direction={rowIndex % 2 === 0 ? 'left' : 'right'}>
              {row.map((clientEntry) => {
                const emblemKey = `client-${clientEntry.id}-emblem`
                return <Emblem key={emblemKey} client={clientEntry} />
              })}
            </Marquee>
          )
        })}
      </div>
    </div>
  )
})
ExperienceSummary.displayName = 'ExperienceSummary'

export { ExperienceSummary }
export type { ExperienceSummaryProps, ExperienceSummaryRef }
