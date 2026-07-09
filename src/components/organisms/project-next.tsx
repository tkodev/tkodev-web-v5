import { forwardRef, type HTMLAttributes } from 'react'
import { Next, type NextProps } from '@/components/molecules/next'
import { Tile } from '@/components/molecules/tile'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['relative size-full', 'flex items-center justify-center']),
  tile: cva('aspect-video w-full'),
  next: cva(['absolute', 'flex items-center justify-center'])
}

type ProjectNextRef = HTMLDivElement
type ProjectNextProps = HTMLAttributes<ProjectNextRef> &
  VariantProps<typeof styles.root> & {
    nextProps: NextProps
    asset: AssetEntry
  }

const ProjectNext = forwardRef<ProjectNextRef, ProjectNextProps>((props, ref) => {
  // props
  const { nextProps, asset, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Tile className={cn(styles.tile())} asset={asset} />
      <Next className={cn(styles.next())} {...nextProps} />
    </div>
  )
})
ProjectNext.displayName = 'ProjectNext'

export { ProjectNext }
export type { ProjectNextProps, ProjectNextRef }
