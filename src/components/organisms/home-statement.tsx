import { forwardRef, type HTMLAttributes } from 'react'
import { Statement, type StatementProps } from '@/components/molecules/statement'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center'])
}

type HomeStatementRef = HTMLDivElement
type HomeStatementProps = HTMLAttributes<HomeStatementRef> &
  VariantProps<typeof styles.root> & {
    statementProps: StatementProps
  }

const HomeStatement = forwardRef<HomeStatementRef, HomeStatementProps>((props, ref) => {
  // props
  const { statementProps, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Statement {...statementProps} />
    </div>
  )
})
HomeStatement.displayName = 'HomeStatement'

export { HomeStatement }
export type { HomeStatementProps, HomeStatementRef }
