import { forwardRef, type HTMLAttributes } from 'react'
import { Asset } from '@/components/atoms/asset'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['relative size-full p-4', 'flex items-center justify-center']),
  tile: cva([
    'relative aspect-video h-8/10 w-auto',
    'opacity-15 hover:scale-102 hover:opacity-30',
    'transition-all duration-1000'
  ]),
  img: cva('absolute inset-0 size-full rounded-sm object-cover')
}

type TileRef = HTMLDivElement
type TileProps = HTMLAttributes<TileRef> &
  VariantProps<typeof styles.root> & {
    asset: AssetEntry
  }

const Tile = forwardRef<TileRef, TileProps>((props, ref) => {
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
Tile.displayName = 'Tile'

export { Tile }
export type { TileProps, TileRef }
