import { forwardRef, type HTMLAttributes } from 'react'
import { BlockNext, type BlockNextProps } from '@/components/molecules/block-next'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center'])
}

type SectionProjectNextRef = HTMLDivElement
type SectionProjectNextProps = HTMLAttributes<SectionProjectNextRef> &
  VariantProps<typeof styles.root> & {
    nextProps: BlockNextProps
  }

const SectionProjectNext = forwardRef<SectionProjectNextRef, SectionProjectNextProps>(
  (props, ref) => {
    // props
    const { nextProps, className, ...rest } = props

    // jsx
    return (
      <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
        <BlockNext {...nextProps} />
      </div>
    )
  }
)
SectionProjectNext.displayName = 'SectionProjectNext'

export { SectionProjectNext }
export type { SectionProjectNextProps, SectionProjectNextRef }
