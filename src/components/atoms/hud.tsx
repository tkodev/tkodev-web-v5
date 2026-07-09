import { forwardRef, type HTMLAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['pointer-events-none size-full', 'relative']),
  accent: cva(['text-e4 font-expressive text-muted-foreground uppercase', 'absolute'], {
    variants: {
      variant: {
        title: ['top-8 left-4', 'opacity-0 transition-opacity duration-1000 sm:opacity-100'],
        subtitle: ['top-8 right-4', 'opacity-0 transition-opacity duration-1000 sm:opacity-100'],
        accent1: ['bottom-8 left-4', 'opacity-0 transition-opacity duration-1000 sm:opacity-100'],
        accent2: ['right-4 bottom-8', 'opacity-0 transition-opacity duration-1000 sm:opacity-100'],
        smTitle: [
          'top-8 left-1/2 -translate-x-1/2',
          'opacity-100 transition-opacity duration-1000 sm:opacity-0'
        ],
        smCta: ['bottom-8 left-1/2 -translate-x-1/2', 'text-foreground']
      }
    }
  })
}

type HudRef = HTMLDivElement
type HudProps = HTMLAttributes<HudRef> &
  VariantProps<typeof styles.root> & {
    title?: string
    subtitle?: string
    accent1?: string
    accent2?: string
    cta?: string
  }

const Hud = forwardRef<HudRef, HudProps>((props, ref) => {
  // props
  const { title, subtitle, accent1, accent2, cta, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      {!!title && <div className={cn(styles.accent({ variant: 'title' }))}>{title}</div>}
      {!!subtitle && <div className={cn(styles.accent({ variant: 'subtitle' }))}>{subtitle}</div>}
      {!!accent1 && <div className={cn(styles.accent({ variant: 'accent1' }))}>{accent1}</div>}
      {!!accent2 && <div className={cn(styles.accent({ variant: 'accent2' }))}>{accent2}</div>}
      {!!title && <div className={cn(styles.accent({ variant: 'smTitle' }))}>{title}</div>}
      {!!cta && (
        <div className={cn(styles.accent({ variant: 'smCta' }))}>
          <strong>{cta}</strong>
        </div>
      )}
    </div>
  )
})
Hud.displayName = 'Hud'

export { Hud }
export type { HudProps, HudRef }
