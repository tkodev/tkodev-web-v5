import { forwardRef, type HTMLAttributes } from 'react'
import { BlockFigures, type BlockFiguresProps } from '@/components/molecules/block-figures'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center'])
}

type SectionProjectFigureRef = HTMLDivElement
type SectionProjectFigureProps = HTMLAttributes<SectionProjectFigureRef> &
  VariantProps<typeof styles.root> & {
    figuresProps: BlockFiguresProps
  }

const SectionProjectFigure = forwardRef<SectionProjectFigureRef, SectionProjectFigureProps>(
  (props, ref) => {
    // props
    const { figuresProps, className, ...rest } = props

    // jsx
    return (
      <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
        <BlockFigures {...figuresProps} />
      </div>
    )
  }
)
SectionProjectFigure.displayName = 'SectionProjectFigure'

export { SectionProjectFigure }
export type { SectionProjectFigureProps, SectionProjectFigureRef }
