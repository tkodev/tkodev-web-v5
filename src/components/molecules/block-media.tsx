import { forwardRef, type HTMLAttributes } from 'react'
import { Asset } from '@/components/atoms/asset'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['w-full', 'flex flex-col gap-8 px-4']),
  frame: cva(['flex h-100 items-center justify-center md:h-148', 'rounded-sm border p-6']),
  plate: cva('bg-card relative size-full overflow-hidden rounded-xs'),
  img: cva('absolute inset-0 size-full object-cover'),

  caption: cva([
    'flex flex-wrap items-center justify-between gap-4',
    'text-e4 font-expressive uppercase'
  ]),
  captionIndex: cva('text-muted-foreground'),
  captionLabel: cva('')
}

type BlockMediaRef = HTMLDivElement
type BlockMediaProps = HTMLAttributes<BlockMediaRef> &
  VariantProps<typeof styles.root> & {
    asset: AssetEntry
    index: number
  }

const BlockMedia = forwardRef<BlockMediaRef, BlockMediaProps>((props, ref) => {
  // props
  const { asset, index, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.frame())}>
        <div className={cn(styles.plate())}>
          <Asset className={cn(styles.img())} asset={asset} />
        </div>
      </div>
      <div className={cn(styles.caption())}>
        <p className={cn(styles.captionIndex())}>Figure {index}.0</p>
        <p className={cn(styles.captionLabel())}>{asset.alt}</p>
      </div>
    </div>
  )
})
BlockMedia.displayName = 'BlockMedia'

export { BlockMedia }
export type { BlockMediaProps, BlockMediaRef }
