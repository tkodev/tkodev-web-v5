import { forwardRef, type HTMLAttributes } from 'react'
import { Cursor } from '@/components/atoms/cursor'
import { Grain } from '@/components/atoms/grain'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('')
}

type OverlayRef = HTMLDivElement
type OverlayProps = HTMLAttributes<OverlayRef> & VariantProps<typeof styles.root>

const Overlay = forwardRef<OverlayRef, OverlayProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Grain />
      <Cursor />
    </div>
  )
})
Overlay.displayName = 'Overlay'

export { Overlay }
export type { OverlayProps, OverlayRef }
