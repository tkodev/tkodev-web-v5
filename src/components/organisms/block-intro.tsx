import { forwardRef, type HTMLAttributes } from 'react'
import { Reticle } from '@/components/atoms/reticle'
import { Hud, type HudProps } from '@/components/molecules/hud'
import { Intro, type IntroProps } from '@/components/molecules/intro'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'relative overflow-visible']),
  reticle: cva(['h-full object-fill', 'absolute top-1/2 left-1/2 -translate-1/2']),
  intro: cva(['absolute top-1/2 left-1/2 -translate-1/2'])
}

type BlockIntroRef = HTMLDivElement
type BlockIntroProps = HTMLAttributes<BlockIntroRef> &
  VariantProps<typeof styles.root> & {
    hudProps: HudProps
    introProps: IntroProps
  }

const BlockIntro = forwardRef<BlockIntroRef, BlockIntroProps>((props, ref) => {
  // props
  const { hudProps, introProps, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Reticle className={cn(styles.reticle())} />
      <Hud {...hudProps} />
      <Intro className={cn(styles.intro())} {...introProps} />
    </div>
  )
})
BlockIntro.displayName = 'BlockIntro'

export { BlockIntro }
export type { BlockIntroProps, BlockIntroRef }
