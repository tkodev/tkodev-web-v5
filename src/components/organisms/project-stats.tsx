import { forwardRef, type HTMLAttributes } from 'react'
import { Stats, type StatEntry } from '@/components/molecules/stats'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center'])
}

type ProjectStatsRef = HTMLDivElement
type ProjectStatsProps = HTMLAttributes<ProjectStatsRef> &
  VariantProps<typeof styles.root> & {
    statEntries: StatEntry[]
  }

const ProjectStats = forwardRef<ProjectStatsRef, ProjectStatsProps>((props, ref) => {
  // props
  const { statEntries, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Stats statEntries={statEntries} />
    </div>
  )
})
ProjectStats.displayName = 'ProjectStats'

export { ProjectStats }
export type { ProjectStatsProps, ProjectStatsRef }
