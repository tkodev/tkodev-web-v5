import { forwardRef, type HTMLAttributes } from 'react'
import { Slot } from 'radix-ui'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('', {
    variants: {
      variant: {
        card: 'bg-background/30 rounded-sm border backdrop-blur-sm',
        plate: 'bg-card relative overflow-hidden rounded-xs'
      }
    },
    defaultVariants: {
      variant: 'card'
    }
  })
}

type CardRef = HTMLDivElement
type CardProps = HTMLAttributes<CardRef> &
  VariantProps<typeof styles.root> & {
    asChild?: boolean
  }

const Card = forwardRef<CardRef, CardProps>((props, ref) => {
  // props
  const { asChild = false, variant, className, ...rest } = props

  // render vars
  const Comp = asChild ? Slot.Root : 'div'

  // jsx
  return (
    <Comp
      ref={ref}
      className={cn(styles.root({ variant, className }))}
      data-slot="card"
      {...rest}
    />
  )
})
Card.displayName = 'Card'

export { Card }
export type { CardProps, CardRef }
