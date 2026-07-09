import { forwardRef, type HTMLAttributes } from 'react'
import { Dots } from '@/components/atoms/dots'
import { type SvgComponent } from '@/types/system'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['w-full', 'flex flex-col gap-24']),
  step: cva('flex w-full flex-col gap-8 md:flex-row md:items-center'),

  col: cva('flex min-w-0 flex-1 flex-col gap-8 px-4'),
  title: cva('text-h5 font-heading'),
  desc: cva('text-sm'),

  visual: cva('flex min-w-0 flex-1 items-center justify-center gap-4 px-4'),
  numeralFrame: cva('flex size-50 items-center justify-center'),
  numeral: cva([
    '-rotate-90',
    'font-expressive text-[8rem] tracking-[0.25em] uppercase',
    'leading-none whitespace-nowrap'
  ]),
  labelFrame: cva('flex h-20 w-4 items-center justify-center'),
  label: cva([
    '-rotate-90',
    'text-e3 font-expressive text-muted-foreground uppercase',
    'whitespace-nowrap'
  ]),
  icon: cva('text-foreground size-44 shrink-0'),

  dots: cva('px-4')
}

type ProcessEntry = {
  id: string
  title: string
  desc: string
  label: string
  icon: SvgComponent
}

type BlockProcessRef = HTMLDivElement
type BlockProcessProps = HTMLAttributes<BlockProcessRef> &
  VariantProps<typeof styles.root> & {
    processEntries: ProcessEntry[]
  }

const BlockProcess = forwardRef<BlockProcessRef, BlockProcessProps>((props, ref) => {
  // props
  const { processEntries, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      {processEntries.map((processEntry, index) => {
        const { id, title, desc, label, icon: IconComp } = processEntry
        const key = `process-${id}`
        const numeral = String(index + 1).padStart(2, '0')
        return (
          <div key={key} className={cn(styles.step())}>
            <div className={cn(styles.col())}>
              <h2 className={cn(styles.title())}>{title}</h2>
              <p className={cn(styles.desc())}>{desc}</p>
            </div>
            <div className={cn(styles.visual())} aria-hidden>
              <div className={cn(styles.numeralFrame())}>
                <p className={cn(styles.numeral())}>{numeral}</p>
              </div>
              <div className={cn(styles.labelFrame())}>
                <p className={cn(styles.label())}>{label}</p>
              </div>
              <IconComp className={cn(styles.icon())} strokeWidth={0.25} />
            </div>
          </div>
        )
      })}
      <Dots className={cn(styles.dots())} count={processEntries.length} />
    </div>
  )
})
BlockProcess.displayName = 'BlockProcess'

export { BlockProcess }
export type { BlockProcessProps, BlockProcessRef, ProcessEntry }
