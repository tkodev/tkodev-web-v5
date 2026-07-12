import { forwardRef, type HTMLAttributes } from 'react'
import { Slot } from 'radix-ui'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['bg-background/30 rounded-sm border backdrop-blur-sm'], {
    variants: {
      isHover: {
        true: 'hover:bg-muted transition-colors duration-500',
        false: ''
      }
    },
    defaultVariants: {
      isHover: false
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
  const { asChild = false, isHover, className, ...rest } = props

  // render vars
  const Comp = asChild ? Slot.Root : 'div'

  // jsx
  return (
    <Comp
      ref={ref}
      className={cn(styles.root({ isHover, className }))}
      data-slot="card"
      {...rest}
    />
  )
})
Card.displayName = 'Card'

export { Card }
export type { CardProps, CardRef }
