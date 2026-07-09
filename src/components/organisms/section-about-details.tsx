import { forwardRef, type HTMLAttributes } from 'react'
import { Signature } from '@/components/atoms/signature'
import { BlockStatement, type BlockStatementProps } from '@/components/molecules/block-statement'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center']),
  signature: cva('w-48')
}

type SectionAboutDetailsRef = HTMLDivElement
type SectionAboutDetailsProps = HTMLAttributes<SectionAboutDetailsRef> &
  VariantProps<typeof styles.root> & {
    statementProps: BlockStatementProps
  }

const SectionAboutDetails = forwardRef<SectionAboutDetailsRef, SectionAboutDetailsProps>(
  (props, ref) => {
    // props
    const { statementProps, className, ...rest } = props
    const { children, ...restStatement } = statementProps

    // jsx
    return (
      <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
        <BlockStatement {...restStatement}>
          {children}
          <Signature className={cn(styles.signature())} />
        </BlockStatement>
      </div>
    )
  }
)
SectionAboutDetails.displayName = 'SectionAboutDetails'

export { SectionAboutDetails }
export type { SectionAboutDetailsProps, SectionAboutDetailsRef }
