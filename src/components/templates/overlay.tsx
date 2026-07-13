import { forwardRef, type HTMLAttributes } from 'react'
import { Cursor } from '@/components/atoms/cursor'
import { Signal } from '@/components/atoms/signal'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('contents')
}

type OverlayRef = HTMLDivElement
type OverlayProps = HTMLAttributes<OverlayRef> & VariantProps<typeof styles.root>

const Overlay = forwardRef<OverlayRef, OverlayProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Signal />
      <Cursor />
    </div>
  )
})
Overlay.displayName = 'Overlay'

export { Overlay }
export type { OverlayProps, OverlayRef }
