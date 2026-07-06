import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import { Slot } from 'radix-ui'
import type { VariantProps } from '@/utils/theme'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva(
    'focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3',
    {
      defaultVariants: {
        variant: 'default'
      },
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
          destructive:
            'bg-destructive text-destructive-foreground focus-visible:ring-destructive/20 [a&]:hover:bg-destructive/90',
          ghost: '[a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 [a&]:hover:underline',
          outline:
            'border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
          secondary: 'bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90'
        }
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
  const { asChild = false, className, variant, ...rest } = props

  // render vars
  const Comp = asChild ? Slot.Root : 'span'

  // jsx
  return <Comp ref={ref} className={cn(styles.root({ className, variant }))} {...rest} />
})
Badge.displayName = 'Badge'

export { Badge }
export type { BadgeProps, BadgeRef }
