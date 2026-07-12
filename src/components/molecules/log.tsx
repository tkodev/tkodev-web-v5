import Link from 'next/link'
import { forwardRef, type HTMLAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { Button } from '../atoms/button'

const styles = {
  root: cva('flex flex-col gap-2 border-b p-4 last:border-b-0'),

  header: cva(['flex flex-col gap-4', 'sm:flex-row sm:items-baseline sm:gap-4']),
  index: cva('text-e4 font-expressive text-muted-foreground w-8 shrink-0 uppercase'),
  body: cva('flex grow flex-col gap-2'),
  title: cva('text-h5 font-heading uppercase'),
  subtitle: cva('text-muted-foreground text-sm'),
  value: cva('text-e4 font-expressive text-muted-foreground shrink-0 uppercase'),

  links: cva('flex flex-wrap gap-4 sm:pl-12'),
  link: cva([
    'text-e4 font-expressive uppercase',
    'rounded-sm underline-offset-4 outline-none',
    'hover:underline',
    'focus-visible:ring-ring/50 focus-visible:ring-3'
  ])
}

type LogLink = {
  href: string
  label: string
}

type LogEntry = {
  id: string
  title: string
  subtitle: string
  value: string
  linkEntries?: LogLink[]
}

type LogRef = HTMLDivElement
type LogProps = HTMLAttributes<LogRef> &
  VariantProps<typeof styles.root> & {
    logEntry: LogEntry
    index: number
  }

const Log = forwardRef<LogRef, LogProps>((props, ref) => {
  // props
  const { logEntry, index, className, ...rest } = props
  const { id, title, subtitle, value, linkEntries } = logEntry

  // render vars
  const numeral = String(index + 1).padStart(2, '0')

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.header())}>
        <p className={cn(styles.index())}>{numeral}</p>
        <div className={cn(styles.body())}>
          <h3 className={cn(styles.title())}>{title}</h3>
          <p className={cn(styles.subtitle())}>{subtitle}</p>
        </div>
        <p className={cn(styles.value())}>{value}</p>
      </div>
      {!!linkEntries?.length && (
        <div className={cn(styles.links())}>
          {linkEntries.map((linkEntry) => {
            const key = `${id}-link-${linkEntry.label}`
            return (
              <Button key={key} size="xs" variant="link" asChild>
                <Link
                  rel="noreferrer"
                  className={cn(styles.link())}
                  href={linkEntry.href}
                  target="_blank"
                >
                  {linkEntry.label}
                </Link>
              </Button>
            )
          })}
        </div>
      )}
    </div>
  )
})
Log.displayName = 'Log'

export { Log }
export type { LogEntry, LogLink, LogProps, LogRef }
