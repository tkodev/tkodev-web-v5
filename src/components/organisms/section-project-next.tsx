import { forwardRef, type HTMLAttributes } from 'react'
import { BlockNext, type BlockNextProps } from '@/components/molecules/block-next'
import { BlockTile } from '@/components/molecules/block-tile'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['relative size-full', 'flex items-center justify-center']),
  tile: cva('aspect-video w-full'),
  next: cva(['absolute', 'flex items-center justify-center'])
}

type SectionProjectNextRef = HTMLDivElement
type SectionProjectNextProps = HTMLAttributes<SectionProjectNextRef> &
  VariantProps<typeof styles.root> & {
    nextProps: BlockNextProps
    asset: AssetEntry
  }

const SectionProjectNext = forwardRef<SectionProjectNextRef, SectionProjectNextProps>(
  (props, ref) => {
    // props
    const { nextProps, asset, className, ...rest } = props

    // jsx
    return (
      <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
        <BlockTile className={cn(styles.tile())} asset={asset} />
        <BlockNext className={cn(styles.next())} {...nextProps} />
      </div>
    )
  }
)
SectionProjectNext.displayName = 'SectionProjectNext'

export { SectionProjectNext }
export type { SectionProjectNextProps, SectionProjectNextRef }
