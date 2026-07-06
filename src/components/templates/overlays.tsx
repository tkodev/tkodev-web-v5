import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva('pointer-events-none fixed inset-0 z-50')
}

type OverlaysRef = HTMLDivElement
type OverlaysProps = HTMLAttributes<OverlaysRef>

const Overlays = forwardRef<OverlaysRef, OverlaysProps>((props, ref) => {
  // props
  const { className, ...rest } = props

  // jsx
  return <div ref={ref} className={cn(styles.root({ className }))} {...rest} />
})
Overlays.displayName = 'Overlays'

export { Overlays }
export type { OverlaysProps, OverlaysRef }
