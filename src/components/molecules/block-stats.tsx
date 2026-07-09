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

type BlockStatsRef = HTMLDivElement
type BlockStatsProps = HTMLAttributes<BlockStatsRef> &
  VariantProps<typeof styles.root> & {
    statEntries: StatEntry[]
  }

const BlockStats = forwardRef<BlockStatsRef, BlockStatsProps>((props, ref) => {
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
BlockStats.displayName = 'BlockStats'

export { BlockStats }
export type { BlockStatsProps, BlockStatsRef, StatEntry }
