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

/**
 * Distance (px) a revealing element rises from, the blur it clears, and its trigger points.
 * `railAmount` is the lenient threshold for horizontal-rail items (featured/selected works):
 * a card parked off-screen shows only a thin sliver, so it reveals on any visible portion
 * rather than the `amount` fraction a stacked section waits for.
 */
const motionReveal = {
  distance: 24,
  blur: 8,
  amount: 0.3,
  railAmount: 0.01
} as const

/**
 * The resting state a `Reveal` starts from, shared by both variants below. It is rendered
 * on the server, where the reduced-motion preference is unknowable, so both variants must
 * open from it: a client that hydrated a different `hidden` state would mismatch, and React
 * does not patch up inline-style mismatches, stranding the element at `opacity: 0`.
 */
const revealHidden = {
  opacity: 0,
  y: motionReveal.distance,
  filter: `blur(${motionReveal.blur}px)`
} as const

/** The `Reveal` variant: the fade + rise + de-blur an element runs when it enters view. */
const revealItem: Variants = {
  hidden: revealHidden,
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

/**
 * The reduced-motion `Reveal` variant: the rise and de-blur snap to their resting values
 * while the opacity still fades, so the element arrives without travelling. Opacity alone
 * carries no vestibular cost, and the element must still animate to `shown`: it is the only
 * thing that clears the server-rendered `hidden` style.
 */
const revealItemReduced: Variants = {
  hidden: revealHidden,
  shown: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: motionDurations.base,
      ease: motionEasings.out,
      y: { duration: 0 },
      filter: { duration: 0 }
    }
  }
}

export { motionDurations, motionEasings, motionReveal, revealItem, revealItemReduced }
