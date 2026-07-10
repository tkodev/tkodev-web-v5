import { forwardRef, type HTMLAttributes } from 'react'
import { type SvgComponent } from '@/types/system'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['w-full', 'flex flex-col gap-24']),
  subtitle: cva(['px-4 md:text-center', 'text-e4 font-expressive text-muted-foreground uppercase']),
  step: cva(['flex w-full flex-col gap-8 md:items-center'], {
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

  col: cva('flex min-w-0 flex-1 flex-col gap-4 px-4', {
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
  title: cva('text-h5 font-heading'),
  desc: cva('text-sm'),

  visual: cva('flex min-w-0 flex-1 items-center justify-center gap-4 px-4'),
  numeralFrame: cva('flex items-center justify-center'),
  numeral: cva([
    '-rotate-90',
    'font-expressive text-h1 pl-2 tracking-[0.25em] uppercase',
    'leading-none whitespace-nowrap'
  ]),
  labelFrame: cva('flex h-20 w-4 items-center justify-center'),
  label: cva([
    '-rotate-90',
    'text-e3 font-expressive text-muted-foreground uppercase',
    'whitespace-nowrap'
  ]),
  icon: cva('text-foreground size-44 shrink-0')
}

type ProcessEntry = {
  id: string
  title: string
  desc: string
  label: string
  icon: SvgComponent
}

type ProcessRef = HTMLDivElement
type ProcessProps = HTMLAttributes<ProcessRef> &
  VariantProps<typeof styles.root> & {
    processEntries: ProcessEntry[]
    subtitle?: string
  }

const Process = forwardRef<ProcessRef, ProcessProps>((props, ref) => {
  // props
  const { processEntries, subtitle, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      {!!subtitle && <div className={cn(styles.subtitle())}>{subtitle}</div>}
      {processEntries.map((processEntry, index) => {
        const { id, title, desc, label, icon: IconComp } = processEntry
        const key = `process-${id}`
        const numeral = String(index + 1).padStart(2, '0')
        const direction = index % 2 === 0 ? 'left' : 'right'
        return (
          <div key={key} className={cn(styles.step({ direction }))}>
            <div className={cn(styles.visual())} aria-hidden>
              <div className={cn(styles.numeralFrame())}>
                <p className={cn(styles.numeral())}>{numeral}</p>
              </div>
              <div className={cn(styles.labelFrame())}>
                <p className={cn(styles.label())}>{label}</p>
              </div>
              <IconComp className={cn(styles.icon())} strokeWidth={0.25} />
            </div>
            <div className={cn(styles.col({ direction }))}>
              <h2 className={cn(styles.title())}>{title}</h2>
              <p className={cn(styles.desc())}>{desc}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
})
Process.displayName = 'Process'

export { Process }
export type { ProcessEntry, ProcessProps, ProcessRef }
