'use client'

import { forwardRef, useState, type HTMLAttributes } from 'react'
import { PauseIcon, PlayIcon } from 'lucide-react'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('relative w-full'),
  viewport: cva([
    'w-full overflow-hidden',
    'motion-reduce:overflow-x-auto motion-reduce:overscroll-x-contain'
  ]),
  track: cva(
    [
      'animate-marquee flex w-max',
      'hover:paused data-[paused=true]:paused',
      'motion-reduce:animate-none'
    ],
    {
      variants: {
        direction: {
          left: '',
          right: 'direction-reverse'
        }
      },
      defaultVariants: {
        direction: 'left'
      }
    }
  ),
  group: cva('flex shrink-0 items-stretch gap-8 pr-8'),
  duplicate: cva('motion-reduce:hidden'),
  control: cva(['absolute top-4 right-4 z-10', 'text-muted-foreground', 'motion-reduce:hidden'])
}

type MarqueeRef = HTMLDivElement
type MarqueeProps = HTMLAttributes<MarqueeRef> &
  VariantProps<typeof styles.track> & {
    /** Accessible label for the control that stops the drift. */
    pauseLabel?: string
    /** Accessible label for the control once the drift is stopped. */
    resumeLabel?: string
  }

const Marquee = forwardRef<MarqueeRef, MarqueeProps>((props, ref) => {
  // props
  const {
    direction,
    pauseLabel = 'Pause scrolling',
    resumeLabel = 'Resume scrolling',
    children,
    className,
    ...rest
  } = props

  // hooks
  const [paused, setPaused] = useState(false)

  // render vars
  const handleToggle = () => setPaused((prev) => !prev)

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.viewport())}>
        <div className={cn(styles.track({ direction }))} data-paused={paused}>
          <div className={cn(styles.group())}>{children}</div>
          <div className={cn(styles.group(), styles.duplicate())} aria-hidden>
            {children}
          </div>
        </div>
      </div>
      <Button
        type="button"
        className={cn(styles.control())}
        aria-label={paused ? resumeLabel : pauseLabel}
        size="icon-sm"
        variant="ghost"
        onClick={handleToggle}
      >
        <Icon icon={paused ? PlayIcon : PauseIcon} />
      </Button>
    </div>
  )
})
Marquee.displayName = 'Marquee'

export { Marquee }
export type { MarqueeProps, MarqueeRef }
