import { forwardRef, type HTMLAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva([
    'pointer-events-none fixed -inset-1/4 z-9998 size-[150%]',
    'mix-blend-overlay',
    "bg-[url('/images/grain.svg')] bg-size-[180px_180px] bg-repeat",
    'opacity-[var(--brand-grain-opacity)]',
    '[animation:grain-shift_var(--brand-grain-period)_steps(6)_infinite]',
    'motion-reduce:animate-none'
  ])
}

type GrainRef = HTMLDivElement
type GrainProps = HTMLAttributes<GrainRef> & VariantProps<typeof styles.root>

const Grain = forwardRef<GrainRef, GrainProps>((props, ref) => {
  // props
  const { className, ...rest } = props

  // jsx
  return <div ref={ref} className={cn(styles.root({ className }))} aria-hidden="true" {...rest} />
})
Grain.displayName = 'Grain'

export { Grain }
export type { GrainProps, GrainRef }
