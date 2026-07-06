import { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'
import { Slot } from 'radix-ui'
import type { VariantProps } from '@/utils/theme'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva(
    "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
      defaultVariants: {
        size: 'default',
        variant: 'default'
      },
      variants: {
        size: {
          default: 'h-9 px-4 py-2 has-[>svg]:px-3',
          icon: 'size-9',
          lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
          sm: 'h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5'
        },
        variant: {
          default: 'bg-primary text-primary-foreground hover:bg-primary/90',
          destructive:
            'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
          outline: 'bg-background hover:bg-accent hover:text-accent-foreground border',
          secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
        }
      }
    }
  )
}

type ButtonRef = HTMLButtonElement
type ButtonProps = ButtonHTMLAttributes<ButtonRef> &
  VariantProps<typeof styles.root> & {
    asChild?: boolean
  }

const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  // props
  const { asChild = false, className, size, variant, ...rest } = props

  // render vars
  const Comp = asChild ? Slot.Root : 'button'

  // jsx
  return <Comp ref={ref} className={cn(styles.root({ className, size, variant }))} {...rest} />
})
Button.displayName = 'Button'

export { Button }
export type { ButtonProps, ButtonRef }
