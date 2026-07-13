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
  const total = duration ?? Math.min(400 + text.length * 40, 2000)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const chars = text.split('')
    let raf = 0
    let start = 0
    const step = (now: number) => {
      if (!start) start = now
      const progress = Math.min((now - start) / total, 1)
      const revealed = progress * chars.length
      setDisplayText(
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
