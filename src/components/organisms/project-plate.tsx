import { forwardRef, type HTMLAttributes } from 'react'
import { Media, type MediaProps } from '@/components/molecules/media'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center'])
}

type ProjectPlateRef = HTMLDivElement
type ProjectPlateProps = HTMLAttributes<ProjectPlateRef> &
  VariantProps<typeof styles.root> & {
    mediaProps: MediaProps
  }

const ProjectPlate = forwardRef<ProjectPlateRef, ProjectPlateProps>((props, ref) => {
  // props
  const { mediaProps, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Media {...mediaProps} />
    </div>
  )
})
ProjectPlate.displayName = 'ProjectPlate'

export { ProjectPlate }
export type { ProjectPlateProps, ProjectPlateRef }
