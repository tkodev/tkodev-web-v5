import { forwardRef, type HTMLAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center', 'border-y px-4 py-24']),
  statement: cva('text-h5 font-heading w-3/4 text-center')
}

type BlockStatementRef = HTMLDivElement
type BlockStatementProps = HTMLAttributes<BlockStatementRef> &
  VariantProps<typeof styles.root> & {
    statement: string
  }

const BlockStatement = forwardRef<BlockStatementRef, BlockStatementProps>((props, ref) => {
  // props
  const { statement, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <p className={cn(styles.statement())}>{statement}</p>
    </div>
  )
})
BlockStatement.displayName = 'BlockStatement'

export { BlockStatement }
export type { BlockStatementProps, BlockStatementRef }
