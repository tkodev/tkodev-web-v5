import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'relative']),
  accent: cva(['text-e4 font-expressive uppercase', 'absolute'], {
    variants: {
      variant: {
        title: ['top-0 left-1/2 -translate-x-1/2', 'sm:left-4 sm:translate-none'],
        subtitle: 'top-0 right-4',
        status: 'bottom-0 left-4',
        substatus: 'right-4 bottom-0',
        cta: 'text-bold bottom-0 left-1/2 -translate-x-1/2'
      }
    }
  })
}

type HudRef = HTMLDivElement
type HudProps = HTMLAttributes<HudRef> &
  VariantProps<typeof styles.root> & {
    title: string
    subtitle: string
    status: string
    substatus: string
    cta: string
  }

const Hud = forwardRef<HudRef, HudProps>((props, ref) => {
  // props
  const { title, subtitle, status, substatus, cta, className, ...rest } = props

  // hooks

  // render vars

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.accent({ variant: 'title' }))}>{title}</div>
      <div className={cn(styles.accent({ variant: 'subtitle' }))}>{subtitle}</div>
      <div className={cn(styles.accent({ variant: 'status' }))}>{status}</div>
      <div className={cn(styles.accent({ variant: 'substatus' }))}>{substatus}</div>
      <div className={cn(styles.accent({ variant: 'cta' }))}>{cta}</div>
    </div>
  )
})
Hud.displayName = 'Hud'

export { Hud }
export type { HudProps, HudRef }
