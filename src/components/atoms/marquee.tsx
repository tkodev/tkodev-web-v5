import { forwardRef, type HTMLAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('w-full overflow-hidden'),
  track: cva(
    [
      'animate-marquee flex w-max',
      'hover:[animation-play-state:paused]',
      'motion-reduce:[animation-play-state:paused]'
    ],
    {
      variants: {
        direction: {
          left: '',
          right: '[animation-direction:reverse]'
        }
      },
      defaultVariants: {
        direction: 'left'
      }
    }
  ),
  group: cva('flex shrink-0 items-stretch gap-8 pr-8')
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
        <div className={cn(styles.group())} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
})
Marquee.displayName = 'Marquee'

export { Marquee }
export type { MarqueeProps, MarqueeRef }
