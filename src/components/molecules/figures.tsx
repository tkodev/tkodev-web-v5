import { forwardRef, type HTMLAttributes } from 'react'
import { Asset } from '@/components/atoms/asset'
import { type StoryEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['w-full px-4', 'flex flex-col gap-8 md:items-center md:gap-16'], {
    variants: {
      direction: {
        left: 'md:flex-row',
        right: 'md:flex-row-reverse'
      }
    },
    defaultVariants: {
      direction: 'left'
    }
  }),
  frame: cva(['flex h-75 shrink-0 items-center justify-center', 'rounded-sm border p-4 md:w-1/2']),
  plate: cva('bg-card relative size-full overflow-hidden rounded-xs'),
  img: cva('absolute inset-0 size-full object-cover'),

  col: cva('flex min-w-0 flex-1 flex-col gap-8 px-4', {
    variants: {
      direction: {
        left: '',
        right: 'md:text-right'
      }
    },
    defaultVariants: {
      direction: 'left'
    }
  }),
  figure: cva('text-e4 font-expressive text-muted-foreground uppercase'),
  title: cva('text-h5 font-heading uppercase'),
  body: cva('text-sm')
}

type FiguresRef = HTMLDivElement
type FiguresProps = HTMLAttributes<FiguresRef> &
  VariantProps<typeof styles.root> & {
    story: StoryEntry
    index: string
  }

const Figures = forwardRef<FiguresRef, FiguresProps>((props, ref) => {
  // props
  const { story, index, direction, className, ...rest } = props
  const { asset, title, body } = story

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ direction, className }))} {...rest}>
      <div className={cn(styles.frame())}>
        <div className={cn(styles.plate())}>
          <Asset className={cn(styles.img())} asset={asset} />
        </div>
      </div>
      <div className={cn(styles.col({ direction }))}>
        <p className={cn(styles.figure())}>{index} / Figure //</p>
        <h2 className={cn(styles.title())}>{title}</h2>
        <p className={cn(styles.body())}>{body}</p>
      </div>
    </div>
  )
})
Figures.displayName = 'Figures'

export { Figures }
export type { FiguresProps, FiguresRef }
