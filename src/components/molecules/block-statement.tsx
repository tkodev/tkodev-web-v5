import { forwardRef, type HTMLAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['w-full', 'flex flex-col items-center gap-8', 'border-y px-4 py-24 text-center']),
  header: cva('flex flex-col items-center gap-4'),
  label: cva('text-e4 font-expressive text-muted-foreground uppercase'),
  title: cva('text-h5 font-heading uppercase'),
  body: cva('flex max-w-3xl flex-col items-center gap-8 text-sm whitespace-pre-line')
}

type BlockStatementRef = HTMLDivElement
type BlockStatementProps = HTMLAttributes<BlockStatementRef> &
  VariantProps<typeof styles.root> & {
    title: string
    label?: string
  }

const BlockStatement = forwardRef<BlockStatementRef, BlockStatementProps>((props, ref) => {
  // props
  const { title, label, children, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.header())}>
        {!!label && <div className={cn(styles.label())}>{label}</div>}
        <h2 className={cn(styles.title())}>{title}</h2>
      </div>
      <div className={cn(styles.body())}>{children}</div>
    </div>
  )
})
BlockStatement.displayName = 'BlockStatement'

export { BlockStatement }
export type { BlockStatementProps, BlockStatementRef }
