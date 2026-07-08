import { forwardRef, type HTMLAttributes } from 'react'
import { BlockStats, type StatEntry } from '@/components/molecules/block-stats'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center'])
}

type SectionProjectStatsRef = HTMLDivElement
type SectionProjectStatsProps = HTMLAttributes<SectionProjectStatsRef> &
  VariantProps<typeof styles.root> & {
    statEntries: StatEntry[]
  }

const SectionProjectStats = forwardRef<SectionProjectStatsRef, SectionProjectStatsProps>(
  (props, ref) => {
    // props
    const { statEntries, className, ...rest } = props

    // jsx
    return (
      <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
        <BlockStats statEntries={statEntries} />
      </div>
    )
  }
)
SectionProjectStats.displayName = 'SectionProjectStats'

export { SectionProjectStats }
export type { SectionProjectStatsProps, SectionProjectStatsRef }
