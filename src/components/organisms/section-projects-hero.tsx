import { forwardRef, type HTMLAttributes } from 'react'
import { Hud, type HudProps } from '@/components/atoms/hud'
import { BlockIntro, type BlockIntroProps } from '@/components/molecules/block-intro'
import { BlockTiles } from '@/components/molecules/block-tiles'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'relative overflow-visible']),
  tiles: cva(['size-full', 'absolute top-0 left-0']),
  intro: cva(['absolute top-1/2 left-1/2 -translate-1/2'])
}

type SectionProjectsHeroRef = HTMLDivElement
type SectionProjectsHeroProps = HTMLAttributes<SectionProjectsHeroRef> &
  VariantProps<typeof styles.root> & {
    hudProps: HudProps
    introProps: BlockIntroProps
    tileAssets: AssetEntry[]
  }

const SectionProjectsHero = forwardRef<SectionProjectsHeroRef, SectionProjectsHeroProps>(
  (props, ref) => {
    // props
    const { hudProps, introProps, tileAssets, className, ...rest } = props

    // jsx
    return (
      <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
        <BlockTiles className={cn(styles.tiles())} assets={tileAssets} />
        <Hud {...hudProps} />
        <BlockIntro className={cn(styles.intro())} {...introProps} />
      </div>
    )
  }
)
SectionProjectsHero.displayName = 'SectionProjectsHero'

export { SectionProjectsHero }
export type { SectionProjectsHeroProps, SectionProjectsHeroRef }
