import { type CSSProperties, type FC } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['pointer-events-none fixed left-0 z-0 h-18 w-full'], {
    variants: {
      side: {
        top: '-top-0.5',
        bottom: '-bottom-0.5'
      }
    },
    defaultVariants: {
      side: 'top'
    }
  }),

  tint: cva('from-background absolute inset-0 from-25% to-transparent', {
    variants: {
      side: {
        top: 'bg-linear-to-b',
        bottom: 'bg-linear-to-t'
      }
    },
    defaultVariants: {
      side: 'top'
    }
  }),

  layer: cva('absolute inset-0')
}

/**
 * Progressive-blur band anchored to the top or bottom edge: a stack of
 * `backdrop-filter` layers whose blur radius doubles toward the anchored edge,
 * each clipped to an overlapping mask band so the blur ramps weak-to-strong
 * rather than blurring the whole band uniformly. Paired with a `background`
 * tint fade so content dissolves into the edge. Purely decorative
 * (`pointer-events-none`); atmosphere, not a readout.
 */
const Veil: FC<VeilProps> = (props) => {
  // props
  const { side = 'top', className } = props

  // render vars
  const dir = side === 'top' ? 'to top' : 'to bottom'
  const layers = [
    { blur: 0.5, stops: [0, 12.5, 37.5, 50] },
    { blur: 1, stops: [25, 37.5, 62.5, 75] },
    { blur: 2, stops: [50, 62.5, 87.5, 100] },
    { blur: 4, stops: [75, 87.5, 100, 100] }
  ]

  // jsx
  return (
    <div className={cn(styles.root({ side, className }))}>
      <div className={cn(styles.tint({ side }))} />
      {layers.map(({ blur, stops }) => {
        const [a, b, c, d] = stops
        const mask = `linear-gradient(${dir}, transparent ${a}%, #000 ${b}%, #000 ${c}%, transparent ${d}%)`
        const style: CSSProperties = {
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          maskImage: mask,
          WebkitMaskImage: mask
        }
        return <div key={blur} className={cn(styles.layer())} style={style} />
      })}
    </div>
  )
}

type VeilProps = VariantProps<typeof styles.root> & {
  className?: string
}

export { Veil }
export type { VeilProps }
