import { forwardRef, type HTMLAttributes } from 'react'
import { Asset } from '@/components/atoms/asset'
import { Card } from '@/components/atoms/card'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['w-full', 'flex flex-col gap-8 px-4']),
  frame: cva(['flex h-100 items-center justify-center md:h-148', 'rounded-sm border p-4']),
  plate: cva('size-full'),
  img: cva('absolute inset-0 size-full object-cover'),

  caption: cva([
    'flex flex-wrap items-center justify-between gap-4',
    'text-e4 font-expressive uppercase'
  ]),
  captionIndex: cva('text-muted-foreground'),
  captionLabel: cva('')
}

type VisualsRef = HTMLDivElement
type VisualsProps = HTMLAttributes<VisualsRef> &
  VariantProps<typeof styles.root> & {
    asset: AssetEntry
    index: string
  }

const Visuals = forwardRef<VisualsRef, VisualsProps>((props, ref) => {
  // props
  const { asset, index, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.frame())}>
        <Card className={cn(styles.plate())} variant="plate">
          <Asset className={cn(styles.img())} asset={asset} />
        </Card>
      </div>
      <div className={cn(styles.caption())}>
        <p className={cn(styles.captionIndex())}>{index} / Figure //</p>
        <p className={cn(styles.captionLabel())}>{asset.alt}</p>
      </div>
    </div>
  )
})
Visuals.displayName = 'Visuals'

export { Visuals }
export type { VisualsProps, VisualsRef }
