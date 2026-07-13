import { type Variants } from 'motion/react'

/** Named durations in seconds, matched to the CSS animation tokens' feel. */
const motionDurations = {
  base: 0.5,
  slow: 0.8,
  fast: 0.15,
  count: 1.4
} as const

/** Cubic-bezier control points as framer easing arrays, mirroring the CSS tokens. */
const motionEasings = {
  out: [0, 0, 0.2, 1],
  inOut: [0.4, 0, 0.2, 1]
} as const

/** Distance (px) a revealing element rises from, the blur it clears, and its trigger point. */
const motionReveal = {
  distance: 24,
  blur: 8,
  amount: 0.3
} as const

/** The `Reveal` variant: the fade + rise + de-blur an element runs when it enters view. */
const revealItem: Variants = {
  hidden: {
    opacity: 0,
    y: motionReveal.distance,
    filter: `blur(${motionReveal.blur}px)`
  },
  shown: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: motionDurations.base,
      ease: motionEasings.out
    }
  }
}

export { motionDurations, motionEasings, motionReveal, revealItem }
