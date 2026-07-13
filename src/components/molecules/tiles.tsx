import { forwardRef, type HTMLAttributes } from 'react'
import { Asset } from '@/components/atoms/asset'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['relative size-full p-4', 'flex items-center justify-center overflow-hidden']),
  grid: cva('grid w-full shrink-0 grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5'),
  tile: cva(['bg-background/80 relative aspect-video overflow-hidden rounded-sm sm:last:hidden']),
  img: cva([
    'absolute inset-0 size-full object-cover',
    'opacity-15 hover:scale-105 hover:opacity-30',
    'transition-all duration-1000'
  ])
}

type TilesRef = HTMLDivElement
type TilesProps = HTMLAttributes<TilesRef> &
  VariantProps<typeof styles.root> & {
    assets: AssetEntry[]
  }

const Tiles = forwardRef<TilesRef, TilesProps>((props, ref) => {
  // props
  const { assets, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} aria-hidden {...rest}>
      <div className={cn(styles.grid())}>
        {assets.map((asset, index) => {
          const key = `tile-${asset.src}-${index}`
          return (
            <div key={key} className={cn(styles.tile())}>
              <Asset className={cn(styles.img())} asset={asset} />
            </div>
          )
        })}
      </div>
    </div>
  )
})
Tiles.displayName = 'Tiles'

export { Tiles }
export type { TilesProps, TilesRef }
