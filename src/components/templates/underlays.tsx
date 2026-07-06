import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva('pointer-events-none fixed inset-0 -z-10')
}

type UnderlaysRef = HTMLDivElement
type UnderlaysProps = HTMLAttributes<UnderlaysRef>

const Underlays = forwardRef<UnderlaysRef, UnderlaysProps>((props, ref) => {
  // props
  const { className, ...rest } = props

  // jsx
  return <div ref={ref} className={cn(styles.root({ className }))} aria-hidden {...rest} />
})
Underlays.displayName = 'Underlays'

export { Underlays }
export type { UnderlaysProps, UnderlaysRef }
