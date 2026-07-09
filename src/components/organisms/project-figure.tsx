import { forwardRef, type HTMLAttributes } from 'react'
import { Figures, type FiguresProps } from '@/components/molecules/figures'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center'])
}

type ProjectFigureRef = HTMLDivElement
type ProjectFigureProps = HTMLAttributes<ProjectFigureRef> &
  VariantProps<typeof styles.root> & {
    figuresProps: FiguresProps
  }

const ProjectFigure = forwardRef<ProjectFigureRef, ProjectFigureProps>((props, ref) => {
  // props
  const { figuresProps, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Figures {...figuresProps} />
    </div>
  )
})
ProjectFigure.displayName = 'ProjectFigure'

export { ProjectFigure }
export type { ProjectFigureProps, ProjectFigureRef }
