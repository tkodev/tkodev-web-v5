import { forwardRef, type HTMLAttributes } from 'react'
import { Hud, type HudProps } from '@/components/atoms/hud'
import { Tile } from '@/components/molecules/tile'
import { Title, type TitleProps } from '@/components/molecules/title'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex flex-col']),
  stage: cva(['relative grow', 'min-h-0']),
  hud: cva('absolute inset-0'),
  tile: cva('size-full')
}

type ProjectHeroRef = HTMLDivElement
type ProjectHeroProps = HTMLAttributes<ProjectHeroRef> &
  VariantProps<typeof styles.root> & {
    hudProps: HudProps
    titleProps: TitleProps
    asset: AssetEntry
  }

const ProjectHero = forwardRef<ProjectHeroRef, ProjectHeroProps>((props, ref) => {
  // props
  const { hudProps, titleProps, asset, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.stage())}>
        <Hud className={cn(styles.hud())} {...hudProps} />
        <Tile className={cn(styles.tile())} asset={asset} />
      </div>
      <Title {...titleProps} />
    </div>
  )
})
ProjectHero.displayName = 'ProjectHero'

export { ProjectHero }
export type { ProjectHeroProps, ProjectHeroRef }
