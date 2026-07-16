'use client'

import { useEffect, useRef, type FC, type HTMLAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva([
    'block max-w-full truncate',
    'group/ticker rounded-xs outline-none',
    'hover:text-clip focus-visible:text-clip',
    'focus-visible:ring-ring/50 focus-visible:ring-3'
  ]),
  content: cva([
    'inline whitespace-nowrap',
    'group-hover/ticker:inline-block group-focus-visible/ticker:inline-block',
    'group-hover/ticker:animate-ticker group-focus-visible/ticker:animate-ticker',
    'motion-reduce:animate-none'
  ])
}

type TickerProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof styles.root>

const Ticker: FC<TickerProps> = (props) => {
  // props
  const { children, className, ...rest } = props

  // hooks
  const rootRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const measure = () => {
      const overflow = Math.max(root.scrollWidth - root.clientWidth, 0)
      root.style.setProperty('--ticker-overflow', `${-overflow}px`)
      root.style.setProperty('--ticker-duration', `${2 + overflow / 50}s`)
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(root)
    return () => observer.disconnect()
  }, [children])

  // jsx
  return (
    <span ref={rootRef} className={cn(styles.root({ className }))} {...rest}>
      <span className={cn(styles.content())}>{children}</span>
    </span>
  )
}

export { Ticker }
export type { TickerProps }
