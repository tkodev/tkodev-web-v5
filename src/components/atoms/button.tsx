import { forwardRef } from 'react'
import type { ComponentProps } from 'react'
import { Slot } from 'radix-ui'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(
    [
      'group/button inline-flex shrink-0 items-center justify-center',
      'text-e4 font-expressive font-medium whitespace-nowrap uppercase',
      'rounded-sm border border-transparent bg-clip-padding',
      'transition-all outline-none select-none',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3',
      'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 aria-invalid:ring-3',
      'active:not-aria-[haspopup]:translate-y-px',
      'disabled:pointer-events-none disabled:opacity-50',
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      'backdrop-blur-sm'
    ],
    {
      variants: {
        size: {
          xs: [
            'h-6 gap-2 px-2',
            'has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
            "[&_svg:not([class*='size-'])]:size-3"
          ],
          sm: [
            'h-8 gap-2 px-4',
            'has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
            "[&_svg:not([class*='size-'])]:size-3.5"
          ],
          md: [
            'h-10 gap-2 px-4',
            'has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2'
          ],
          lg: [
            'h-12 gap-2 px-4',
            'has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2'
          ],
          xl: [
            'h-14 gap-2 px-4',
            'has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2'
          ],
          'icon-xs': ['size-6', "[&_svg:not([class*='size-'])]:size-3"],
          'icon-sm': ['size-7'],
          'icon-md': ['size-8'],
          'icon-lg': ['size-9'],
          'icon-xl': ['size-10']
        },
        variant: {
          primary: ['bg-primary text-primary-foreground', 'hover:bg-primary/80'],
          outline: [
            'border-border bg-background',
            'hover:bg-muted hover:text-foreground',
            'aria-expanded:bg-muted aria-expanded:text-foreground',
            'dark:border-input dark:bg-input/30 dark:hover:bg-input/50'
          ],
          secondary: [
            'bg-secondary text-secondary-foreground',
            'hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]',
            'aria-expanded:bg-secondary aria-expanded:text-secondary-foreground'
          ],
          ghost: [
            'hover:bg-muted hover:text-foreground',
            'aria-expanded:bg-muted aria-expanded:text-foreground',
            'dark:hover:bg-muted/50'
          ],
          destructive: [
            'bg-destructive/10 text-destructive',
            'hover:bg-destructive/20',
            'focus-visible:border-destructive/40 focus-visible:ring-destructive/20',
            'dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40'
          ],
          link: ['text-primary px-0', 'underline-offset-4 hover:underline']
        }
      },
      defaultVariants: {
        variant: 'primary',
        size: 'sm'
      }
    }
  )
}

type ButtonRef = HTMLButtonElement
type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof styles.root> & {
    asChild?: boolean
  }

const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  // props
  const { asChild = false, className, size, variant, ...rest } = props

  // render vars
  const Comp = asChild ? Slot.Root : 'button'

  // jsx
  return (
    <Comp
      ref={ref}
      className={cn(styles.root({ className, size, variant }))}
      data-size={size}
      data-slot="button"
      data-variant={variant}
      {...rest}
    />
  )
})
Button.displayName = 'Button'

export { Button }
export type { ButtonProps, ButtonRef }
