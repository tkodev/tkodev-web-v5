import { forwardRef, type SVGAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('text-muted-foreground aspect-square overflow-visible'),
  ring: cva('svg-origin animate-drift origin-center motion-reduce:animate-none'),
  readoutLabel: cva('text-e4 font-expressive fill-muted-foreground uppercase'),
  readoutValue: cva('text-e4 font-expressive fill-foreground uppercase'),
  panelGroup: cva('opacity-0 transition-opacity duration-1000 xl:opacity-70'),
  readoutGroup: cva('opacity-0 transition-opacity duration-1000 xl:opacity-80'),
  // boot-in, staggered per top-level child; last delay (500ms) + the 1.5s boot-in-blur
  // duration caps the total sequence at 2s
  bootGroup: cva([
    '*:svg-origin *:origin-center',
    '*:animate-boot-in-blur *:fill-mode-both motion-reduce:*:animate-none',
    '[&>*:nth-child(2)]:[animation-delay:50ms]',
    '[&>*:nth-child(3)]:[animation-delay:100ms]',
    '[&>*:nth-child(4)]:[animation-delay:200ms]',
    '[&>*:nth-child(5)]:[animation-delay:400ms]',
    '[&>*:nth-child(6)]:[animation-delay:600ms]',
    '[&>*:nth-child(7)]:[animation-delay:800ms]',
    '[&>*:nth-child(n+8)]:[animation-delay:1200ms]'
  ])
}

type ReticleDialReadout = {
  label: string
  value: string
}

type ReticleDialRef = SVGSVGElement
type ReticleDialProps = SVGAttributes<ReticleDialRef> &
  VariantProps<typeof styles.root> & {
    readouts?: ReticleDialReadout[]
  }

const size = 896
const cx = size / 2
const cy = size / 2

/** Point on a circle of the given radius, angle in degrees (0 = right, -90 = up). */
const point = (angle: number, radius: number) => {
  const rad = (angle * Math.PI) / 180
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) }
}

/** SVG arc path between two angles on a circle of the given radius. */
const arcPath = (radius: number, angleFrom: number, angleTo: number) => {
  const start = point(angleFrom, radius)
  const end = point(angleTo, radius)
  const largeArc = Math.abs(angleTo - angleFrom) > 180 ? 1 : 0
  return `M${start.x} ${start.y} A${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`
}

// fills the frame the way the original reticle's outer ring (r447.5) did in its 896-tall viewBox
const circleRadius = 378
const bracketRadius = circleRadius + 40
const railOffset = bracketRadius + 45

// fine spokes just inside the main circle, facing inward like inner dial gauge marks
const fineTickOuter = circleRadius - 8
const fineTicks = Array.from({ length: 72 }, (_, i) => {
  const angle = i * 5
  const long = i % 6 === 0
  const inner = fineTickOuter - (long ? 12 : 6)
  const from = point(angle, fineTickOuter)
  const to = point(angle, inner)
  return { key: angle, long, x1: from.x, y1: from.y, x2: to.x, y2: to.y }
})

// texture ticks along the flanking arc brackets
const bracketTicks = [
  ...Array.from({ length: 7 }, (_, i) => -55 + i * (110 / 6)),
  ...Array.from({ length: 7 }, (_, i) => 125 + i * (110 / 6))
].map((angle) => {
  const from = point(angle, bracketRadius - 6)
  const to = point(angle, bracketRadius + 6)
  return { key: angle, x1: from.x, y1: from.y, x2: to.x, y2: to.y }
})

const railTicks = Array.from({ length: 9 }, (_, i) => {
  const y = cy - 176 + i * 44
  const long = i % 2 === 0
  return { key: i, y, width: long ? 22 : 12 }
})

// multi-rung ladder lines flanking the crosshair, mirrored left/right
const ladderRungs = [-92, -46, 46, 92].map((offset) => ({
  key: offset,
  y: cy + offset,
  width: offset === -46 || offset === 46 ? 44 : 30
}))

const cornerMarks = [
  { x: 96, y: 96 },
  { x: size - 96, y: 96 },
  { x: 96, y: size - 96 },
  { x: size - 96, y: size - 96 }
]

/**
 * Fixed decorative HUD panel text: dial furniture, not a readout. Per the
 * brief's readout/atmosphere rule ([01-brief.md](../../../docs/02-prd/01-brief.md)
 * pillar 1), instrument chrome that never claims a specific real quantity
 * is atmosphere, so these values are static and do not need to be true.
 */
const panelReadouts = [
  {
    label: 'Drift',
    value: '1.0',
    x: cx - railOffset - 18,
    y: cy - 207,
    textAnchor: 'end' as const
  },
  {
    label: 'Gain',
    value: '5.7',
    x: cx + railOffset + 18,
    y: cy - 207,
    textAnchor: 'start' as const
  },
  {
    label: 'Trim',
    value: '0.52',
    x: cx - railOffset - 18,
    y: cy + 207,
    textAnchor: 'end' as const
  },
  {
    label: 'Scale',
    value: '2.485',
    x: cx + railOffset + 18,
    y: cy + 207,
    textAnchor: 'start' as const
  }
]

const ReticleDial = forwardRef<ReticleDialRef, ReticleDialProps>((props, ref) => {
  // props
  const { className, readouts, ...rest } = props

  // render vars
  const opacity = 0.3
  const topChevron = point(-90, circleRadius - 18)
  const topChevronTip = point(-90, circleRadius - 40)
  // mirrored across the center horizon: same shape, flipped vertically
  const bottomChevron = point(90, circleRadius - 18)
  const bottomChevronTip = point(90, circleRadius - 40)
  const railAnchors: { x: number; textAnchor: 'start' | 'end' }[] = [
    { x: cx - railOffset - 18, textAnchor: 'end' },
    { x: cx + railOffset + 18, textAnchor: 'start' }
  ]

  // jsx
  return (
    <svg
      ref={ref}
      className={cn(styles.root({ className }))}
      aria-hidden="true"
      fill="none"
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      {...rest}
    >
      <g opacity={opacity}>
        <g className={cn(styles.bootGroup())}>
          {/* main circle */}
          <circle cx={cx} cy={cy} r={circleRadius} stroke="currentColor" />
          <circle cx={cx} cy={cy} fill="currentColor" r="3" stroke="none" />

          {/* inset thick ring, same weight as the original reticle's second-largest ring */}
          <circle cx={cx} cy={cy} r={circleRadius - 70} stroke="currentColor" strokeWidth={25} />

          {/* the original reticle's two smaller fine-line inner circles, at their original size */}
          <circle cx={cx} cy={cy} r={239.5} stroke="currentColor" />
          <circle cx={cx} cy={cy} r={149.5} stroke="currentColor" />

          {/* fine dial texture ring */}
          <g className={cn(styles.ring())}>
            {fineTicks.map((tick) => (
              <line
                key={tick.key}
                stroke="currentColor"
                strokeWidth={0.75}
                x1={tick.x1}
                x2={tick.x2}
                y1={tick.y1}
                y2={tick.y2}
              />
            ))}
          </g>

          {/* flanking arc brackets */}
          <g>
            <path d={arcPath(bracketRadius, -55, 55)} stroke="currentColor" />
            <path d={arcPath(bracketRadius, 125, 235)} stroke="currentColor" />
            {bracketTicks.map((tick) => (
              <line
                key={tick.key}
                stroke="currentColor"
                strokeWidth={1}
                x1={tick.x1}
                x2={tick.x2}
                y1={tick.y1}
                y2={tick.y2}
              />
            ))}
          </g>

          {/* chevrons on the main circle, mirrored across the center horizon */}
          <path
            d={`M${topChevron.x - 10} ${topChevron.y + 16} L${topChevronTip.x} ${topChevronTip.y} L${topChevron.x + 10} ${topChevron.y + 16}`}
            stroke="currentColor"
          />
          <path
            d={`M${bottomChevron.x - 10} ${bottomChevron.y - 16} L${bottomChevronTip.x} ${bottomChevronTip.y} L${bottomChevron.x + 10} ${bottomChevron.y - 16}`}
            stroke="currentColor"
          />

          {/* crosshair ladder */}
          <g>
            {ladderRungs.map((rung) => (
              <g key={rung.key}>
                <line
                  stroke="currentColor"
                  x1={cx - rung.width - 40}
                  x2={cx - 40}
                  y1={rung.y}
                  y2={rung.y}
                />
                <line
                  stroke="currentColor"
                  x1={cx + 40}
                  x2={cx + rung.width + 40}
                  y1={rung.y}
                  y2={rung.y}
                />
              </g>
            ))}
            <line stroke="currentColor" x1={cx - 30} x2={cx + 30} y1={cy} y2={cy} />
            <line stroke="currentColor" x1={cx} x2={cx} y1={cy - 12} y2={cy + 12} />
          </g>

          {/* side rail rulers */}
          <g>
            {[cx - railOffset, cx + railOffset].map((railX) => (
              <g key={railX}>
                <line stroke="currentColor" x1={railX} x2={railX} y1={cy - 176} y2={cy + 176} />
                {railTicks.map((tick) => (
                  <line
                    key={tick.key}
                    stroke="currentColor"
                    x1={railX - tick.width / 2}
                    x2={railX + tick.width / 2}
                    y1={tick.y}
                    y2={tick.y}
                  />
                ))}
              </g>
            ))}
          </g>

          {/* corner registration marks */}
          <g>
            {cornerMarks.map((corner) => (
              <rect
                key={`${corner.x}-${corner.y}`}
                stroke="currentColor"
                x={corner.x - 5}
                y={corner.y - 5}
                height="10"
                width="10"
              />
            ))}
          </g>

          {/* fixed HUD panel furniture: decorative, not a readout */}
          <g className={cn(styles.panelGroup())}>
            {panelReadouts.map((panel) => (
              <g key={panel.label}>
                <text
                  className={cn(styles.readoutLabel())}
                  textAnchor={panel.textAnchor}
                  x={panel.x}
                  y={panel.y}
                >
                  {panel.label}
                </text>
                <text
                  className={cn(styles.readoutValue())}
                  textAnchor={panel.textAnchor}
                  x={panel.x}
                  y={panel.y + 11}
                >
                  {panel.value}
                </text>
              </g>
            ))}
          </g>
        </g>
      </g>

      {/* boxed readouts on the rails: real data only, nothing renders without it */}
      {!!readouts?.length && (
        <g className={cn(styles.readoutGroup(), styles.bootGroup())}>
          {readouts.slice(0, 2).map((readout, i) => {
            const anchor = railAnchors[i]
            return (
              <g key={readout.label}>
                <text
                  className={cn(styles.readoutLabel())}
                  textAnchor={anchor.textAnchor}
                  x={anchor.x}
                  y={cy - 10}
                >
                  {readout.label}
                </text>
                <text
                  className={cn(styles.readoutValue())}
                  textAnchor={anchor.textAnchor}
                  x={anchor.x}
                  y={cy + 3}
                >
                  {readout.value}
                </text>
              </g>
            )
          })}
        </g>
      )}
    </svg>
  )
})
ReticleDial.displayName = 'ReticleDial'

export { ReticleDial }
export type { ReticleDialProps, ReticleDialReadout, ReticleDialRef }
