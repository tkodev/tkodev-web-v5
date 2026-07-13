import { forwardRef, type HTMLAttributes } from 'react'
import { Decode } from '@/components/atoms/decode'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['w-full', 'flex flex-col items-center gap-4', 'border-y px-4 py-24 text-center']),
  subtitle: cva('text-e4 font-expressive text-muted-foreground uppercase'),
  title: cva('text-h5 font-heading whitespace-pre-line uppercase'),
  body: cva('flex max-w-3xl flex-col items-center gap-8 text-sm whitespace-pre-line')
}

type StatementRef = HTMLDivElement
type StatementProps = HTMLAttributes<StatementRef> &
  VariantProps<typeof styles.root> & {
    title: string
    subtitle?: string
  }

const Statement = forwardRef<StatementRef, StatementProps>((props, ref) => {
  // props
  const { title, subtitle, children, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      {!!subtitle && <div className={cn(styles.subtitle())}>{subtitle}</div>}
      <h2 className={cn(styles.title())}>
        <Decode>{title}</Decode>
      </h2>
      {!!children && <div className={cn(styles.body())}>{children}</div>}
    </div>
  )
})
Statement.displayName = 'Statement'

export { Statement }
export type { StatementProps, StatementRef }
