import { forwardRef, type HTMLAttributes } from 'react'
import { Visuals, type VisualsProps } from '@/components/molecules/visuals'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center'])
}

type ProjectVisualsRef = HTMLDivElement
type ProjectVisualsProps = HTMLAttributes<ProjectVisualsRef> &
  VariantProps<typeof styles.root> & {
    visualsProps: VisualsProps
  }

const ProjectVisuals = forwardRef<ProjectVisualsRef, ProjectVisualsProps>((props, ref) => {
  // props
  const { visualsProps, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Visuals {...visualsProps} />
    </div>
  )
})
ProjectVisuals.displayName = 'ProjectVisuals'

export { ProjectVisuals }
export type { ProjectVisualsProps, ProjectVisualsRef }
