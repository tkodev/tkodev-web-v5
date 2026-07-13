'use client'

import { forwardRef, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Slot } from 'radix-ui'
import { motionReveal, revealItem } from '@/constants/motion'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva('')
}

const MotionSlot = motion.create(Slot.Root)

type RevealRef = HTMLDivElement
type RevealProps = {
  children: ReactNode
  /** Merge the reveal onto the single child element instead of wrapping it in a div. */
  asChild?: boolean
  /** Fraction of the element in view before it reveals (default `motionReveal.amount`). */
  amount?: number
  className?: string
}

/**
 * Fades and lifts its content in the first time it scrolls into view. Each Reveal
 * triggers on its own intersection, so a list reveals as its items enter rather
 * than depending on a parent container's threshold. With `asChild` it merges onto
 * the single child element (no wrapper); otherwise it wraps in a `div`. Renders
 * static under `prefers-reduced-motion`, so the content is present and readable
 * with no transform.
 */
const Reveal = forwardRef<RevealRef, RevealProps>((props, ref) => {
  // props
  const { children, asChild = false, amount = motionReveal.amount, className } = props

  // hooks
  const reduced = useReducedMotion()

  // render vars
  const Comp = asChild ? MotionSlot : motion.div

  // jsx
  if (reduced) {
    const Static = asChild ? Slot.Root : 'div'
    return (
      <Static ref={ref} className={cn(styles.root({ className }))}>
        {children}
      </Static>
    )
  }
  return (
    <Comp
      ref={ref}
      className={cn(styles.root({ className }))}
      initial="hidden"
      variants={revealItem}
      viewport={{ once: true, amount }}
      whileInView="shown"
    >
      {children}
    </Comp>
  )
})
Reveal.displayName = 'Reveal'

export { Reveal }
export type { RevealProps, RevealRef }
