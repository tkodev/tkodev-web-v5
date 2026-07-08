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

type BoardRef = HTMLDivElement
type BoardProps = HTMLAttributes<BoardRef> &
  VariantProps<typeof styles.root> & {
    title?: string
    subtitle: string
    cta?: ReactNode
    ctaPlacement?: 'both' | 'header' | 'footer'
  }

const Board = forwardRef<BoardRef, BoardProps>((props, ref) => {
  // props
  const { title, subtitle, cta, ctaPlacement = 'both', children, className, ...rest } = props

  // render vars
  const headerCta = ctaPlacement !== 'footer' ? cta : null
  const footerCta = ctaPlacement !== 'header' ? cta : null

  // jsx
  return (
    <div ref={ref} className={cn(styles.root())} {...rest}>
      <div className={cn(styles.subtitle())}>{subtitle}</div>
      {!!title && (
        <div className={cn(styles.title())}>
          <h2>{title}</h2>
          {headerCta}
        </div>
      )}
      {!!children && <div className={cn(styles.content({ className }))}>{children}</div>}
      {!!footerCta && <div className={cn(styles.cta())}>{footerCta}</div>}
    </div>
  )
})
Board.displayName = 'Board'

export { Board }
export type { BoardProps, BoardRef }
