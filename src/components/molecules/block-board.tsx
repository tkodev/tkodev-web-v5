import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('w-full'),
  subtitle: cva(['border-b p-4', 'text-e4 font-expressive text-muted-foreground uppercase']),
  title: cva([
    'flex items-center justify-between border-b px-4 py-8',
    'text-h4 font-heading uppercase'
  ]),
  content: cva('border-b px-4 py-16'),
  cta: cva('flex items-center justify-center px-4 py-8')
}

type BlockBoardRef = HTMLDivElement
type BlockBoardProps = HTMLAttributes<BlockBoardRef> &
  VariantProps<typeof styles.root> & {
    title?: string
    subtitle: string
    cta?: ReactNode
  }

const BlockBoard = forwardRef<BlockBoardRef, BlockBoardProps>((props, ref) => {
  // props
  const { title, subtitle, cta, children, className, ...rest } = props

  // render vars

  // jsx
  return (
    <div ref={ref} className={cn(styles.root())} {...rest}>
      <div className={cn(styles.subtitle())}>{subtitle}</div>
      {!!title && (
        <div className={cn(styles.title())}>
          <h2>{title}</h2>
        </div>
      )}
      {!!children && <div className={cn(styles.content({ className }))}>{children}</div>}
      {!!cta && <div className={cn(styles.cta())}>{cta}</div>}
    </div>
  )
})
BlockBoard.displayName = 'BlockBoard'

export { BlockBoard }
export type { BlockBoardProps, BlockBoardRef }
