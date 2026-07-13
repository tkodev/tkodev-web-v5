import { forwardRef, type HTMLAttributes } from 'react'
import { Contour } from '@/components/atoms/contour'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('pointer-events-none fixed inset-0')
}

type UnderlayRef = HTMLDivElement
type UnderlayProps = HTMLAttributes<UnderlayRef> & VariantProps<typeof styles.root>

const Underlay = forwardRef<UnderlayRef, UnderlayProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Contour />
    </div>
  )
})
Underlay.displayName = 'Underlay'

export { Underlay }
export type { UnderlayProps, UnderlayRef }
