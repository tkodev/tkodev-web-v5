import { forwardRef, type HTMLAttributes } from 'react'
import { Asset } from '@/components/atoms/asset'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['relative size-full p-4', 'flex items-center justify-center']),
  tile: cva([
    'bg-muted relative aspect-video h-full w-auto',
    'opacity-30 hover:scale-105 hover:opacity-100',
    'transition-all duration-1000'
  ]),
  img: cva('absolute inset-0 size-full overflow-hidden rounded-sm object-cover')
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
