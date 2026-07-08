import { forwardRef, type HTMLAttributes } from 'react'
import { BlockText, type BlockTextProps } from '@/components/molecules/block-text'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center'])
}

type SectionProjectSummaryRef = HTMLDivElement
type SectionProjectSummaryProps = HTMLAttributes<SectionProjectSummaryRef> &
  VariantProps<typeof styles.root> & {
    textProps: BlockTextProps
  }

const SectionProjectSummary = forwardRef<SectionProjectSummaryRef, SectionProjectSummaryProps>(
  (props, ref) => {
    // props
    const { textProps, className, ...rest } = props

    // jsx
    return (
      <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
        <BlockText {...textProps} />
      </div>
    )
  }
)
SectionProjectSummary.displayName = 'SectionProjectSummary'

export { SectionProjectSummary }
export type { SectionProjectSummaryProps, SectionProjectSummaryRef }
