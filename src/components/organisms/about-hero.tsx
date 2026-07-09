import { forwardRef, type HTMLAttributes } from 'react'
import { Hud, type HudProps } from '@/components/atoms/hud'
import { Reticle } from '@/components/atoms/reticle'
import { Intro, type IntroProps } from '@/components/molecules/intro'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'relative overflow-visible']),
  reticle: cva(['h-full object-fill', 'absolute top-1/2 left-1/2 -translate-1/2']),
  overlay: cva(['absolute top-1/2 left-1/2 -translate-1/2', 'flex flex-col items-center gap-4']),
  intro: cva('max-w-2xl')
}

type AboutHeroRef = HTMLDivElement
type AboutHeroProps = HTMLAttributes<AboutHeroRef> &
  VariantProps<typeof styles.root> & {
    hudProps: HudProps
    introProps: IntroProps
  }

const AboutHero = forwardRef<AboutHeroRef, AboutHeroProps>((props, ref) => {
  // props
  const { hudProps, introProps, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Reticle className={cn(styles.reticle())} />
      <Hud {...hudProps} />
      <div className={cn(styles.overlay())}>
        <Intro className={cn(styles.intro())} {...introProps} />
      </div>
    </div>
  )
})
AboutHero.displayName = 'AboutHero'

export { AboutHero }
export type { AboutHeroProps, AboutHeroRef }
