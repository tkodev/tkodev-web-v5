import { forwardRef, type HTMLAttributes } from 'react'
import { BlockStatement, type BlockStatementProps } from '@/components/molecules/block-statement'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center'])
}

type SectionProjectSummaryRef = HTMLDivElement
type SectionProjectSummaryProps = HTMLAttributes<SectionProjectSummaryRef> &
  VariantProps<typeof styles.root> & {
    statementProps: BlockStatementProps
  }

const SectionProjectSummary = forwardRef<SectionProjectSummaryRef, SectionProjectSummaryProps>(
  (props, ref) => {
    // props
    const { statementProps, className, ...rest } = props

    // jsx
    return (
      <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
        <BlockStatement {...statementProps} />
      </div>
    )
  }
)
SectionProjectSummary.displayName = 'SectionProjectSummary'

export { SectionProjectSummary }
export type { SectionProjectSummaryProps, SectionProjectSummaryRef }
