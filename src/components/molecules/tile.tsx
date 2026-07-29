'use client'

import { forwardRef, useState, type HTMLAttributes } from 'react'
import { Asset } from '@/components/atoms/asset'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['relative size-full p-4', 'flex items-center justify-center']),
  tile: cva(
    ['group bg-background rounded-sm', 'relative aspect-video h-8/10 w-auto overflow-hidden'],
    {
      variants: {
        loaded: {
          true: 'animate-boot-in fill-mode-both opacity-100 motion-reduce:animate-none',
          false: 'opacity-0'
        }
      },
      defaultVariants: {
        loaded: false
      }
    }
  ),
  img: cva([
    'absolute inset-0 size-full object-cover',
    'opacity-15 transition-all duration-1000',
    'group-hover:scale-102 group-hover:opacity-100'
  ]),
  logo: cva([
    'pointer-events-none absolute inset-0 m-auto h-auto w-1/6 object-contain',
    'transition-opacity duration-500 group-hover:opacity-0'
  ])
}

type TileRef = HTMLDivElement
type TileProps = HTMLAttributes<TileRef> &
  VariantProps<typeof styles.root> & {
    asset: AssetEntry
    /** Overlaid client logo, faded out on the same hover that fades the image in. */
    logo?: AssetEntry
  }

const Tile = forwardRef<TileRef, TileProps>((props, ref) => {
  // props
  const { asset, logo, className, ...rest } = props

  // hooks
  const [loaded, setLoaded] = useState(false)

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} aria-hidden {...rest}>
      <div className={cn(styles.tile({ loaded }))}>
        <Asset className={cn(styles.img())} asset={asset} onLoad={() => setLoaded(true)} />
        {!!logo && <Asset className={cn(styles.logo())} asset={logo} />}
      </div>
    </div>
  )
})
Tile.displayName = 'Tile'

export { Tile }
export type { TileProps, TileRef }
