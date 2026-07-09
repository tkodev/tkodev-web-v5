import { forwardRef, type HTMLAttributes } from 'react'
import { Hud, type HudProps } from '@/components/atoms/hud'
import { BlockTile } from '@/components/molecules/block-tile'
import { BlockTitle, type BlockTitleProps } from '@/components/molecules/block-title'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex flex-col']),
  stage: cva(['relative grow', 'min-h-0']),
  hud: cva('absolute inset-0'),
  tile: cva('size-full')
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
        <div className={cn(styles.stage())}>
          <Hud className={cn(styles.hud())} {...hudProps} />
          <BlockTile className={cn(styles.tile())} asset={asset} />
        </div>
        <BlockTitle {...titleProps} />
      </div>
    )
  }
)
SectionProjectHero.displayName = 'SectionProjectHero'

export { SectionProjectHero }
export type { SectionProjectHeroProps, SectionProjectHeroRef }
