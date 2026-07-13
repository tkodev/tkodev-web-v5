'use client'

import { forwardRef, useState, type HTMLAttributes } from 'react'
import { Asset } from '@/components/atoms/asset'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['relative size-full p-4', 'flex items-center justify-center overflow-hidden']),
  grid: cva('grid w-full shrink-0 grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5'),
  // hidden until its image loads, then boots in like the reticle lines
  tile: cva(['bg-card rounded-sm', 'relative aspect-video overflow-hidden sm:last:hidden'], {
    variants: {
      loaded: {
        true: 'animate-boot-in fill-mode-both opacity-100 motion-reduce:animate-none',
        false: 'opacity-0'
      }
    },
    defaultVariants: {
      loaded: false
    }
  }),
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

  // hooks
  const [loaded, setLoaded] = useState<Set<number>>(new Set())

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} aria-hidden {...rest}>
      <div className={cn(styles.grid())}>
        {assets.map((asset, index) => {
          const key = `tile-${asset.src}-${index}`
          return (
            <div
              key={key}
              className={cn(styles.tile({ loaded: loaded.has(index) }))}
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <Asset
                className={cn(styles.img())}
                asset={asset}
                onLoad={() => setLoaded((prev) => new Set(prev).add(index))}
              />
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
