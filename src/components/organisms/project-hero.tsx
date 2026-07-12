import { forwardRef, type HTMLAttributes } from 'react'
import { Asset } from '@/components/atoms/asset'
import { Hud, type HudProps } from '@/components/atoms/hud'
import { Dossier, type DossierProps } from '@/components/molecules/dossier'
import { Tile } from '@/components/molecules/tile'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex flex-col']),
  stage: cva(['relative grow', 'flex items-center justify-center', 'min-h-0']),
  hud: cva('absolute inset-0'),
  tile: cva('aspect-video w-full'),
  logo: cva('absolute inset-0 m-auto h-auto w-1/6 object-contain')
}

type ProjectHeroRef = HTMLDivElement
type ProjectHeroProps = HTMLAttributes<ProjectHeroRef> &
  VariantProps<typeof styles.root> & {
    hudProps: HudProps
    dossierProps: DossierProps
    asset: AssetEntry
    logo?: AssetEntry
  }

const ProjectHero = forwardRef<ProjectHeroRef, ProjectHeroProps>((props, ref) => {
  // props
  const { hudProps, dossierProps, asset, logo, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.stage())}>
        <Hud className={cn(styles.hud())} {...hudProps} />
        <Tile className={cn(styles.tile())} asset={asset} />
        {!!logo && <Asset className={cn(styles.logo())} asset={logo} />}
      </div>
      <Dossier {...dossierProps} />
    </div>
  )
})
ProjectHero.displayName = 'ProjectHero'

export { ProjectHero }
export type { ProjectHeroProps, ProjectHeroRef }
