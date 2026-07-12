import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import { Slot } from 'radix-ui'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(
    [
      'group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden',
      'h-5 gap-1 px-2 py-0.5',
      'text-e5 font-expressive whitespace-nowrap uppercase',
      'rounded-sm border border-transparent',
      'transition-all',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
      'has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5',
      '[&>svg]:pointer-events-none [&>svg]:size-3!',
      'backdrop-blur-sm'
    ],
    {
      variants: {
        variant: {
          default: ['bg-primary text-primary-foreground', '[a]:hover:bg-primary/80'],
          secondary: ['bg-secondary text-secondary-foreground', '[a]:hover:bg-secondary/80'],
          destructive: [
            'bg-destructive/10 text-destructive',
            '[a]:hover:bg-destructive/20',
            'focus-visible:ring-destructive/20',
            'dark:bg-destructive/20 dark:focus-visible:ring-destructive/40'
          ],
          outline: [
            'border-border text-foreground',
            '[a]:hover:bg-muted [a]:hover:text-muted-foreground'
          ],
          ghost: ['hover:bg-muted hover:text-muted-foreground', 'dark:hover:bg-muted/50'],
          link: ['text-primary', 'underline-offset-4 hover:underline']
        }
      },
      defaultVariants: {
        variant: 'default'
      }
    }
  )
}

type BadgeRef = HTMLSpanElement
type BadgeProps = HTMLAttributes<BadgeRef> &
  VariantProps<typeof styles.root> & {
    asChild?: boolean
  }

const Badge = forwardRef<BadgeRef, BadgeProps>((props, ref) => {
  // props
  const { asChild = false, className, variant = 'default', ...rest } = props

  // render vars
  const Comp = asChild ? Slot.Root : 'span'

  // jsx
  return (
    <Comp
      ref={ref}
      className={cn(styles.root({ className, variant }))}
      data-slot="badge"
      data-variant={variant}
      {...rest}
    />
  )
})
Badge.displayName = 'Badge'

export { Badge }
export type { BadgeProps, BadgeRef }
