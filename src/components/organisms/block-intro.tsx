import { forwardRef, HTMLAttributes } from 'react'
import { Reticle } from '@/components/atoms/reticle'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['h-full w-full', 'relative overflow-visible']),
  reticle: cva(['object-fill', 'absolute top-1/2 left-1/2 -translate-1/2'])
}

type BlockIntroRef = HTMLDivElement
type BlockIntroProps = HTMLAttributes<BlockIntroRef> & VariantProps<typeof styles.root>

const BlockIntro = forwardRef<BlockIntroRef, BlockIntroProps>((props, ref) => {
  // props
  const { className, ...rest } = props

  // hooks

  // render vars

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Reticle className={cn(styles.reticle())} />
    </div>
  )
})
BlockIntro.displayName = 'BlockIntro'

export { BlockIntro }
export type { BlockIntroProps, BlockIntroRef }
