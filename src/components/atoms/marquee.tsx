import { forwardRef, type HTMLAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  // the drift is the only thing bringing offscreen entries into view, so under reduced
  // motion the row hands that job to the reader as a plain scroller
  root: cva([
    'w-full overflow-hidden',
    'motion-reduce:overflow-x-auto motion-reduce:overscroll-x-contain'
  ]),
  track: cva(['animate-marquee flex w-max', 'hover:paused', 'motion-reduce:animate-none'], {
    variants: {
      direction: {
        left: '',
        right: 'direction-reverse'
      }
    },
    defaultVariants: {
      direction: 'left'
    }
  }),
  group: cva('flex shrink-0 items-stretch gap-8 pr-8'),
  // the duplicate exists only to hide the loop's seam; scrolling it would just repeat
  duplicate: cva('motion-reduce:hidden')
}

type MarqueeRef = HTMLDivElement
type MarqueeProps = HTMLAttributes<MarqueeRef> & VariantProps<typeof styles.track>

const Marquee = forwardRef<MarqueeRef, MarqueeProps>((props, ref) => {
  // props
  const { direction, children, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.track({ direction }))}>
        <div className={cn(styles.group())}>{children}</div>
        <div className={cn(styles.group(), styles.duplicate())} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
})
Marquee.displayName = 'Marquee'

export { Marquee }
export type { MarqueeProps, MarqueeRef }
