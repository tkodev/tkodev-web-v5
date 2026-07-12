import Link from 'next/link'
import { forwardRef, type HTMLAttributes } from 'react'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { Logo } from '@/components/atoms/logo'
import { type SvgComponent } from '@/types/system'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['w-full', 'flex flex-wrap items-center gap-8']),

  info: cva('flex min-w-72 flex-1 flex-col items-start gap-4'),
  title: cva('text-h2 font-heading uppercase'),
  desc: cva('text-sm whitespace-pre-line'),
  channels: cva('grid w-full gap-x-6 gap-y-2 sm:grid-cols-2'),
  channel: cva('justify-start'),

  logoPanel: cva([
    'min-h-56 min-w-72 flex-1 self-stretch',
    'flex items-center justify-center rounded-sm border p-4'
  ]),
  logo: cva('w-48')
}

type ChannelEntry = {
  href: string
  label: string
  icon: SvgComponent
}

type ContactRef = HTMLDivElement
type ContactProps = HTMLAttributes<ContactRef> &
  VariantProps<typeof styles.root> & {
    title: string
    desc: string
    channelEntries: ChannelEntry[]
  }

const Contact = forwardRef<ContactRef, ContactProps>((props, ref) => {
  // props
  const { title, desc, channelEntries, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.info())}>
        <h2 className={cn(styles.title())}>{title}</h2>
        <p className={cn(styles.desc())}>{desc}</p>
        <div className={cn(styles.channels())}>
          {channelEntries.map((channelEntry) => {
            const { href, label, icon } = channelEntry
            const key = `channel-${label}`
            const target = href.startsWith('/') ? undefined : '_blank'
            return (
              <Button key={key} className={cn(styles.channel())} variant="link" asChild>
                <Link href={href} target={target}>
                  <Icon icon={icon} size="sm" />
                  {label}
                </Link>
              </Button>
            )
          })}
        </div>
      </div>
      <div className={cn(styles.logoPanel())}>
        <Logo className={cn(styles.logo())} />
      </div>
    </div>
  )
})
Contact.displayName = 'Contact'

export { Contact }
export type { ChannelEntry, ContactProps, ContactRef }
