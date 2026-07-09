import { forwardRef, type HTMLAttributes } from 'react'
import { BlockStatement, type BlockStatementProps } from '@/components/molecules/block-statement'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center'])
}

type SectionAboutMethodRef = HTMLDivElement
type SectionAboutMethodProps = HTMLAttributes<SectionAboutMethodRef> &
  VariantProps<typeof styles.root> & {
    statementProps: BlockStatementProps
  }

const SectionAboutMethod = forwardRef<SectionAboutMethodRef, SectionAboutMethodProps>(
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
SectionAboutMethod.displayName = 'SectionAboutMethod'

export { SectionAboutMethod }
export type { SectionAboutMethodProps, SectionAboutMethodRef }
