'use client'

import { useEffect, useRef, useState, type FC, type HTMLAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('')
}

// hypertext glyph pool: uppercase alphanumerics plus a few instrument symbols
const glyphPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>[]#*'

type DecodeRef = HTMLSpanElement
type DecodeProps = HTMLAttributes<DecodeRef> &
  VariantProps<typeof styles.root> & {
    children: string
    durationMs?: number
    glyphs?: string
  }

const Decode: FC<DecodeProps> = (props) => {
  // props
  const { children, durationMs = 900, glyphs = glyphPool, className, ...rest } = props

  // hooks
  const rootRef = useRef<DecodeRef>(null)
  const [display, setDisplay] = useState(children)

  useEffect(() => {
    // display initializes to the real text, so the DOM (and crawlers) always hold true text
    const root = rootRef.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    let start = 0

    const scramble = (now: number) => {
      if (!start) start = now
      const progress = Math.min((now - start) / durationMs, 1)
      const revealed = Math.floor(progress * children.length)
      let next = ''
      for (let index = 0; index < children.length; index += 1) {
        const char = children[index]
        // whitespace stays fixed so word and line shape never shift
        if (char === ' ' || char === '\n' || index < revealed) next += char
        else next += glyphs[Math.floor(Math.random() * glyphs.length)]
      }
      setDisplay(next)
      if (progress < 1) frame = requestAnimationFrame(scramble)
      else setDisplay(children)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting) return
        observer.disconnect()
        frame = requestAnimationFrame(scramble)
      },
      { threshold: 0.4 }
    )
    observer.observe(root)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [children, durationMs, glyphs])

  // jsx
  return (
    <span ref={rootRef} className={cn(styles.root({ className }))} {...rest}>
      {display}
    </span>
  )
}

export { Decode }
export type { DecodeProps, DecodeRef }
