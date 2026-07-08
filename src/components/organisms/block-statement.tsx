import { forwardRef, type HTMLAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva([
    'size-full',
    'flex flex-col items-center justify-center gap-4',
    'border-y px-4 py-24'
  ]),
  label: cva('text-e4 font-expressive text-muted-foreground uppercase'),
  statement: cva('text-h5 font-heading text-center whitespace-pre-line uppercase')
}

type BlockStatementRef = HTMLDivElement
type BlockStatementProps = HTMLAttributes<BlockStatementRef> &
  VariantProps<typeof styles.root> & {
    statement: string
    label?: string
  }

const BlockStatement = forwardRef<BlockStatementRef, BlockStatementProps>((props, ref) => {
  // props
  const { statement, label, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      {!!label && <div className={cn(styles.label())}>{label}</div>}
      <p className={cn(styles.statement())}>{statement}</p>
    </div>
  )
})
BlockStatement.displayName = 'BlockStatement'

export { BlockStatement }
export type { BlockStatementProps, BlockStatementRef }
