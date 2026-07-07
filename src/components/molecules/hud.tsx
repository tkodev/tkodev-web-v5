import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['pointer-events-none size-full', 'relative']),
  accent: cva(['text-e5 font-expressive text-muted-foreground uppercase', 'absolute'], {
    variants: {
      variant: {
        index: ['top-8 left-4', 'opacity-0 transition-opacity duration-1000 sm:opacity-100'],
        build: ['top-8 right-4', 'opacity-0 transition-opacity duration-1000 sm:opacity-100'],
        accent1: ['bottom-8 left-4', 'opacity-0 transition-opacity duration-1000 sm:opacity-100'],
        accent2: ['right-4 bottom-8', 'opacity-0 transition-opacity duration-1000 sm:opacity-100'],
        smIndex: [
          'top-8 left-1/2 -translate-x-1/2',
          'opacity-100 transition-opacity duration-1000 sm:opacity-0'
        ],
        smCta: ['bottom-8 left-1/2 -translate-x-1/2', 'text-bold text-foreground']
      }
    }
  })
}

type HudRef = HTMLDivElement
type HudProps = HTMLAttributes<HudRef> &
  VariantProps<typeof styles.root> & {
    index: string
    build: string
    accent1: string
    accent2: string
    cta: string
  }

const Hud = forwardRef<HudRef, HudProps>((props, ref) => {
  // props
  const { index, build, accent1, accent2, cta, className, ...rest } = props

  // hooks

  // render vars

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.accent({ variant: 'index' }))}>{index}</div>
      <div className={cn(styles.accent({ variant: 'build' }))}>{build}</div>
      <div className={cn(styles.accent({ variant: 'accent1' }))}>{accent1}</div>
      <div className={cn(styles.accent({ variant: 'accent2' }))}>{accent2}</div>
      <div className={cn(styles.accent({ variant: 'smIndex' }))}>{index}</div>
      <div className={cn(styles.accent({ variant: 'smCta' }))}>{cta}</div>
    </div>
  )
})
Hud.displayName = 'Hud'

export { Hud }
export type { HudProps, HudRef }
