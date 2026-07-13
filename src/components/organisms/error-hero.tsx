import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { Hud, type HudProps } from '@/components/atoms/hud'
import { Reticle } from '@/components/atoms/reticle'
import { Intro, type IntroProps } from '@/components/molecules/intro'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'relative overflow-visible']),
  reticle: cva(['h-full object-fill', 'absolute top-1/2 left-1/2 -translate-1/2']),
  intro: cva(['absolute top-1/2 left-1/2 -translate-1/2'])
}

type ErrorHeroRef = HTMLDivElement
type ErrorHeroProps = HTMLAttributes<ErrorHeroRef> &
  VariantProps<typeof styles.root> & {
    hudProps: HudProps
    introProps: IntroProps
    children?: ReactNode
  }

const ErrorHero = forwardRef<ErrorHeroRef, ErrorHeroProps>((props, ref) => {
  // props
  const { hudProps, introProps, children, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Reticle className={cn(styles.reticle())} />
      <Hud {...hudProps} />
      <Intro className={cn(styles.intro())} {...introProps}>
        {children}
      </Intro>
    </div>
  )
})
ErrorHero.displayName = 'ErrorHero'

export { ErrorHero }
export type { ErrorHeroProps, ErrorHeroRef }
