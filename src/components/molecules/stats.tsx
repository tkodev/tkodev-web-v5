import { forwardRef, type HTMLAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['w-full', 'flex flex-wrap items-start justify-center gap-8 px-4 text-center']),
  stat: cva('flex w-40 flex-col gap-4'),
  value: cva('text-h5 font-heading'),
  label: cva('text-e4 font-expressive text-muted-foreground uppercase')
}

type StatEntry = {
  title: string
  value: string
}

type StatsRef = HTMLDivElement
type StatsProps = HTMLAttributes<StatsRef> &
  VariantProps<typeof styles.root> & {
    statEntries: StatEntry[]
  }

const Stats = forwardRef<StatsRef, StatsProps>((props, ref) => {
  // props
  const { statEntries, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      {statEntries.map((statEntry) => {
        const key = `stat-${statEntry.title}`
        return (
          <div key={key} className={cn(styles.stat())}>
            <p className={cn(styles.value())}>{statEntry.value}</p>
            <p className={cn(styles.label())}>{statEntry.title}</p>
          </div>
        )
      })}
    </div>
  )
})
Stats.displayName = 'Stats'

export { Stats }
export type { StatEntry, StatsProps, StatsRef }
