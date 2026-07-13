import { forwardRef, type HTMLAttributes } from 'react'
import { Hud, type HudProps } from '@/components/atoms/hud'
import { Intro, type IntroProps } from '@/components/atoms/intro'
import { Tiles } from '@/components/molecules/tiles'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'relative overflow-visible']),
  tiles: cva(['absolute inset-0']),
  intro: cva(['absolute top-1/2 left-1/2 -translate-1/2'])
}

type ProjectsHeroRef = HTMLDivElement
type ProjectsHeroProps = HTMLAttributes<ProjectsHeroRef> &
  VariantProps<typeof styles.root> & {
    hudProps: HudProps
    introProps: IntroProps
    tileAssets: AssetEntry[]
  }

const ProjectsHero = forwardRef<ProjectsHeroRef, ProjectsHeroProps>((props, ref) => {
  // props
  const { hudProps, introProps, tileAssets, children, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Tiles className={cn(styles.tiles())} assets={tileAssets} />
      <Hud {...hudProps} />
      <Intro className={cn(styles.intro())} {...introProps}>
        {children}
      </Intro>
    </div>
  )
})
ProjectsHero.displayName = 'ProjectsHero'

export { ProjectsHero }
export type { ProjectsHeroProps, ProjectsHeroRef }
