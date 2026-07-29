import { forwardRef, type HTMLAttributes } from 'react'
import { Hud, type HudProps } from '@/components/atoms/hud'
import { Intro, type IntroProps } from '@/components/atoms/intro'
import { ReticleDial, type ReticleDialReadout } from '@/components/atoms/reticle-dial'
import { ReticleLogo } from '@/components/atoms/reticle-logo'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'relative overflow-visible']),
  reticle: cva(['h-full object-fill', 'absolute top-1/2 left-1/2 -translate-1/2']),
  intro: cva(['absolute top-1/2 left-1/2 -translate-1/2'])
}

type DesignHeroRef = HTMLDivElement
type DesignHeroProps = HTMLAttributes<DesignHeroRef> &
  VariantProps<typeof styles.root> & {
    hudProps: HudProps
    introProps: IntroProps
    /** Which reticle atom to render. Defaults to the tick-dial variant. */
    reticle?: 'dial' | 'logo'
    /** Boxed readouts on the reticle's side rails, dial variant only. Real data only. */
    readouts?: ReticleDialReadout[]
  }

const DesignHero = forwardRef<DesignHeroRef, DesignHeroProps>((props, ref) => {
  // props
  const { hudProps, introProps, reticle = 'dial', readouts, children, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      {reticle === 'dial' ? (
        <ReticleDial className={cn(styles.reticle())} readouts={readouts} />
      ) : (
        <ReticleLogo className={cn(styles.reticle())} />
      )}
      <Hud {...hudProps} />
      <Intro className={cn(styles.intro())} {...introProps}>
        {children}
      </Intro>
    </div>
  )
})
DesignHero.displayName = 'DesignHero'

export { DesignHero }
export type { DesignHeroProps, DesignHeroRef }
