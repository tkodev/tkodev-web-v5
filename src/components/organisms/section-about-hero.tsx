import { forwardRef, type HTMLAttributes } from 'react'
import { Dots } from '@/components/atoms/dots'
import { Hud, type HudProps } from '@/components/atoms/hud'
import { Reticle } from '@/components/atoms/reticle'
import { BlockIntro, type BlockIntroProps } from '@/components/molecules/block-intro'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'relative overflow-visible']),
  reticle: cva(['h-full object-fill', 'absolute top-1/2 left-1/2 -translate-1/2']),
  overlay: cva(['absolute top-1/2 left-1/2 -translate-1/2', 'flex flex-col items-center gap-6']),
  intro: cva('max-w-2xl')
}

type SectionAboutHeroRef = HTMLDivElement
type SectionAboutHeroProps = HTMLAttributes<SectionAboutHeroRef> &
  VariantProps<typeof styles.root> & {
    hudProps: HudProps
    introProps: BlockIntroProps
  }

const SectionAboutHero = forwardRef<SectionAboutHeroRef, SectionAboutHeroProps>((props, ref) => {
  // props
  const { hudProps, introProps, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Reticle className={cn(styles.reticle())} />
      <Hud {...hudProps} />
      <div className={cn(styles.overlay())}>
        <BlockIntro className={cn(styles.intro())} {...introProps} />
        <Dots activeIndex={1} count={4} />
      </div>
    </div>
  )
})
SectionAboutHero.displayName = 'SectionAboutHero'

export { SectionAboutHero }
export type { SectionAboutHeroProps, SectionAboutHeroRef }
