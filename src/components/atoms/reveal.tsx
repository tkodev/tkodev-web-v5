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
  /**
   * Mark this a horizontal-rail item (featured/selected works). On small screens a card
   * parked off-screen shows only a thin sliver, which never meets the default `amount`
   * threshold, so it reveals on any visible portion (`motionReveal.railAmount`) instead.
   */
  rail?: boolean
  className?: string
}

/**
 * Fades and lifts its content in the first time it scrolls into view. Each Reveal
 * triggers on its own intersection.
 */
const Reveal = forwardRef<RevealRef, RevealProps>((props, ref) => {
  // props
  const { children, asChild = false, amount = motionReveal.amount, rail = false, className } = props

  // hooks
  const reduced = useReducedMotion()

  // render vars
  const Comp = asChild ? MotionSlot : motion.div
  const viewport = { once: true, amount: rail ? motionReveal.railAmount : amount }

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
      viewport={viewport}
      whileInView="shown"
    >
      {children}
    </Comp>
  )
})
Reveal.displayName = 'Reveal'

export { Reveal }
export type { RevealProps, RevealRef }
