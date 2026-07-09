import { forwardRef, type HTMLAttributes } from 'react'
import { Asset } from '@/components/atoms/asset'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['relative size-full p-4', 'flex items-center justify-center overflow-hidden']),
  tile: cva('bg-muted relative aspect-video w-full max-w-3xl overflow-hidden rounded-sm'),
  img: cva('absolute inset-0 size-full object-cover')
}

type BlockTileRef = HTMLDivElement
type BlockTileProps = HTMLAttributes<BlockTileRef> &
  VariantProps<typeof styles.root> & {
    asset: AssetEntry
  }

const BlockTile = forwardRef<BlockTileRef, BlockTileProps>((props, ref) => {
  // props
  const { asset, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} aria-hidden {...rest}>
      <div className={cn(styles.tile())}>
        <Asset className={cn(styles.img())} asset={asset} />
      </div>
    </div>
  )
})
BlockTile.displayName = 'BlockTile'

export { BlockTile }
export type { BlockTileProps, BlockTileRef }
