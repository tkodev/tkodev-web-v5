import { forwardRef, type HTMLAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex items-center justify-center gap-4'),
  dot: cva('h-2 rounded-sm border', {
    variants: {
      isActive: {
        true: 'bg-foreground w-8',
        false: 'w-2'
      }
    },
    defaultVariants: {
      isActive: false
    }
  })
}

type DotsRef = HTMLDivElement
type DotsProps = HTMLAttributes<DotsRef> &
  VariantProps<typeof styles.root> & {
    count: number
    activeIndex?: number
  }

const Dots = forwardRef<DotsRef, DotsProps>((props, ref) => {
  // props
  const { count, activeIndex = 0, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} aria-hidden {...rest}>
      {Array.from({ length: count }, (_, index) => {
        const key = `dot-${index}`
        return <div key={key} className={cn(styles.dot({ isActive: index === activeIndex }))} />
      })}
    </div>
  )
})
Dots.displayName = 'Dots'

export { Dots }
export type { DotsProps, DotsRef }
