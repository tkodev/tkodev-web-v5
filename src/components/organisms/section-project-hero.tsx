import { forwardRef, type HTMLAttributes } from 'react'
import { Hud, type HudProps } from '@/components/atoms/hud'
import { BlockTile } from '@/components/molecules/block-tile'
import { BlockTitle, type BlockTitleProps } from '@/components/molecules/block-title'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'relative', 'flex flex-col']),
  hud: cva('absolute inset-0'),
  tile: cva('min-h-0 grow p-4')
}

type SectionProjectHeroRef = HTMLDivElement
type SectionProjectHeroProps = HTMLAttributes<SectionProjectHeroRef> &
  VariantProps<typeof styles.root> & {
    hudProps: HudProps
    titleProps: BlockTitleProps
    asset: AssetEntry
  }

const SectionProjectHero = forwardRef<SectionProjectHeroRef, SectionProjectHeroProps>(
  (props, ref) => {
    // props
    const { hudProps, titleProps, asset, className, ...rest } = props

    // jsx
    return (
      <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
        <Hud className={cn(styles.hud())} {...hudProps} />
        <BlockTile className={cn(styles.tile())} asset={asset} />
        <BlockTitle {...titleProps} />
      </div>
    )
  }
)
SectionProjectHero.displayName = 'SectionProjectHero'

export { SectionProjectHero }
export type { SectionProjectHeroProps, SectionProjectHeroRef }
