'use client'

import { type FC } from 'react'
import CountUp from 'react-countup'
import { useReducedMotion } from 'motion/react'
import { motionDurations } from '@/constants/motion'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva('tabular-nums')
}

const numericPattern = /^(\D*)([\d,]*\.?\d+)(.*)$/

type CounterProps = {
  value: string
  className?: string
}

/**
 * Rolls a numeric readout up from zero to its true value the first time it
 * scrolls into view, preserving the source formatting (separators, prefixes like
 * `<`, suffixes like `+`, `s`, `mo`). Values with no number, and every value
 * under `prefers-reduced-motion`, render statically. The honest-readout rule
 * holds: the final value is always the real one.
 */
const Counter: FC<CounterProps> = (props) => {
  // props
  const { value, className } = props

  // hooks
  const reduced = useReducedMotion()

  // render vars
  const match = value.match(numericPattern)
  const digits = match?.[2]
  const end = digits ? Number(digits.replace(/,/g, '')) : null
  const decimals = digits?.includes('.') ? (digits.split('.')[1]?.length ?? 0) : 0

  // jsx
  // non-numeric readouts (and reduced motion) show the true value with no roll
  if (reduced || end === null || match === null) {
    return <span className={cn(styles.root({ className }))}>{value}</span>
  }
  return (
    <CountUp
      className={cn(styles.root({ className }))}
      decimals={decimals}
      duration={motionDurations.count}
      end={end}
      prefix={match[1]}
      separator=","
      suffix={match[3]}
    />
  )
}

export { Counter }
export type { CounterProps }
