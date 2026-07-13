'use client'

import { useEffect, useRef, useState, type FC } from 'react'
import { AnimatePresence, motion, useInView, type Variants } from 'motion/react'
import { getRandomInt } from '@/utils/number'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva('inline scale-100 cursor-default overflow-hidden'),
  letter: cva('', {
    variants: {
      isValid: {
        true: 'w-3'
      }
    }
  })
}

type DecodeProps = {
  text: string
  duration?: number
  framerProps?: Variants
  className?: string
}

// exclude the wide glyphs (M, W) so scrambling doesn't expand the line width
const alphabets = 'ABCDEFGHIJKLNOPQRSTUVXYZ'.split('')

const Decode: FC<DecodeProps> = (props) => {
  // props
  const {
    text,
    duration,
    framerProps = {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 3 }
    },
    className
  } = props

  // hooks
  const rootRef = useRef<HTMLDivElement>(null)
  const inView = useInView(rootRef, { once: true, amount: 0.4 })
  const [displayText, setDisplayText] = useState(text?.split('') ?? [])

  // render vars
  // the whole reveal always lands in `total`; the default scales with length but caps at 2s
  const total = duration ?? Math.min(400 + text.length * 40, 2000)

  useEffect(() => {
    // hold until the heading scrolls into view
    if (!inView) return
    // reduced motion: skip the scramble; displayText already holds the real text
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const chars = text.split('')
    let raf = 0
    let start = 0
    // time-based reveal: progress derives from elapsed / total, so the finish is exactly `total`
    // regardless of length, instead of a per-tick counter the timer floor stretches out
    const step = (now: number) => {
      if (!start) start = now
      const progress = Math.min((now - start) / total, 1)
      const revealed = progress * chars.length
      setDisplayText(
        // scramble everything except spaces and newlines
        chars.map((l, i) =>
          l === ' ' || l === '\n' || i < revealed ? l : alphabets[getRandomInt(alphabets.length)]
        )
      )
      if (progress < 1) raf = requestAnimationFrame(step)
      else setDisplayText(chars)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, text, total])

  return (
    <div ref={rootRef} className={cn(styles.root())}>
      <AnimatePresence mode="sync">
        {displayText.map((letter, i) => (
          <motion.span
            key={i}
            className={cn(styles.letter({ isValid: letter === ' ', className }))}
            {...framerProps}
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}

export { Decode }
