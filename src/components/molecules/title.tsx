import { forwardRef, type HTMLAttributes } from 'react'
import { Badge } from '@/components/atoms/badge'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(''),
  header: cva('flex flex-col gap-2 px-4'),
  tagline: cva('text-e4 font-expressive text-muted-foreground uppercase'),
  title: cva('text-h3 font-heading uppercase'),
  desc: cva('text-sm'),
  badges: cva('flex flex-wrap gap-2 border-b px-4 py-6'),
  meta: cva([
    'flex flex-wrap gap-x-8 gap-y-2 px-4 py-4',
    'text-e4 font-expressive text-muted-foreground uppercase'
  ])
}

type MetaEntry = {
  label: string
  value: string
}

type TitleRef = HTMLDivElement
type TitleProps = HTMLAttributes<TitleRef> &
  VariantProps<typeof styles.root> & {
    tagline: string
    title: string
    desc: string
    badges?: string[]
    metaEntries: MetaEntry[]
  }

const Title = forwardRef<TitleRef, TitleProps>((props, ref) => {
  // props
  const { tagline, title, desc, badges, metaEntries, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.header())}>
        <p className={cn(styles.tagline())}>{tagline}</p>
        <h1 className={cn(styles.title())}>{title}</h1>
        <p className={cn(styles.desc())}>{desc}</p>
      </div>
      {!!badges?.length && (
        <div className={cn(styles.badges())}>
          {badges.map((badge, index) => {
            const key = `title-badge-${index}`
            return <Badge key={key}>{badge}</Badge>
          })}
        </div>
      )}
      <div className={cn(styles.meta())}>
        {metaEntries.map((metaEntry) => {
          const key = `title-meta-${metaEntry.label}`
          return (
            <p key={key}>
              {metaEntry.label}: {metaEntry.value}
            </p>
          )
        })}
      </div>
    </div>
  )
})
Title.displayName = 'Title'

export { Title }
export type { MetaEntry, TitleProps, TitleRef }
