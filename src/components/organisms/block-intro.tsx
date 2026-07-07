import { forwardRef, HTMLAttributes } from 'react'
import { Reticle } from '@/components/atoms/reticle'
import { Hud, type HudProps } from '@/components/molecules/hud'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['h-full w-full', 'relative overflow-visible']),
  reticle: cva(['h-full object-fill', 'absolute top-1/2 left-1/2 -translate-1/2'])
}

type BlockIntroRef = HTMLDivElement
type BlockIntroProps = HTMLAttributes<BlockIntroRef> &
  VariantProps<typeof styles.root> &
  HudProps & {
    index: string
  }

const BlockIntro = forwardRef<BlockIntroRef, BlockIntroProps>((props, ref) => {
  // props
  const { index, title, subtitle, status, substatus, cta, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Reticle className={cn(styles.reticle())} />
      <Hud
        cta={cta}
        status={status}
        substatus={substatus}
        subtitle={subtitle}
        title={`${index} ${title}`}
      />
    </div>
  )
})
BlockIntro.displayName = 'BlockIntro'

export { BlockIntro }
export type { BlockIntroProps, BlockIntroRef }
