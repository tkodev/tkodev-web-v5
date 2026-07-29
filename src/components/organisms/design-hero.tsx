import { forwardRef, type HTMLAttributes } from 'react'
import { Hud, type HudProps } from '@/components/atoms/hud'
import { Intro, type IntroProps } from '@/components/atoms/intro'
import { ReticleDial } from '@/components/atoms/reticle-dial'
import { appTimeZone } from '@/constants/date'
import { cn, cva, type VariantProps } from '@/utils/theme'
import pkg from '../../../package.json'

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
  }

const DesignHero = forwardRef<DesignHeroRef, DesignHeroProps>((props, ref) => {
  // props
  const { hudProps, introProps, children, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <ReticleDial
        className={cn(styles.reticle())}
        readouts={[
          { label: 'Build', value: `v${pkg.version}` },
          { label: 'Zone', value: appTimeZone.replace('_', ' ').toUpperCase() }
        ]}
      />
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
