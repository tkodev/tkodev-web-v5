import { forwardRef, type HTMLAttributes } from 'react'
import { Hud, type HudProps } from '@/components/atoms/hud'
import { Intro, type IntroProps } from '@/components/atoms/intro'
import { ReticleDial, type ReticleDialReadout } from '@/components/atoms/reticle-dial'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'relative overflow-visible']),
  reticle: cva(['h-full object-fill', 'absolute top-1/2 left-1/2 -translate-1/2']),
  intro: cva(['absolute top-1/2 left-1/2 -translate-1/2'])
}

type AboutHeroRef = HTMLDivElement
type AboutHeroProps = HTMLAttributes<AboutHeroRef> &
  VariantProps<typeof styles.root> & {
    hudProps: HudProps
    introProps: IntroProps
    /** Boxed readouts on the reticle's side rails. Real data only. */
    readouts?: ReticleDialReadout[]
  }

const AboutHero = forwardRef<AboutHeroRef, AboutHeroProps>((props, ref) => {
  // props
  const { hudProps, introProps, readouts, children, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <ReticleDial className={cn(styles.reticle())} readouts={readouts} />
      <Hud {...hudProps} />
      <Intro className={cn(styles.intro())} {...introProps}>
        {children}
      </Intro>
    </div>
  )
})
AboutHero.displayName = 'AboutHero'

export { AboutHero }
export type { AboutHeroProps, AboutHeroRef }
