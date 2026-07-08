import Link from 'next/link'
import { forwardRef, type HTMLAttributes } from 'react'
import { Logo } from '@/components/atoms/logo'
import { type SvgComponent } from '@/types/system'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'
import { Board, type BoardProps } from '../molecules/board'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center']),
  board: cva('flex flex-wrap items-center gap-8'),

  info: cva('flex min-w-72 flex-1 flex-col items-start gap-6'),
  title: cva('text-h1 font-heading uppercase'),
  desc: cva('text-sm leading-normal whitespace-pre-line'),
  channels: cva('grid w-full gap-x-6 gap-y-2 sm:grid-cols-2'),
  channel: cva('justify-start'),

  logoPanel: cva([
    'min-h-56 min-w-72 flex-1 self-stretch',
    'flex items-center justify-center rounded-sm border p-6'
  ]),
  logo: cva('w-64')
}

type ChannelEntry = {
  href: string
  label: string
  icon: SvgComponent
}

type BlockContactRef = HTMLDivElement
type BlockContactProps = HTMLAttributes<BlockContactRef> &
  VariantProps<typeof styles.root> & {
    boardProps: Omit<BoardProps, 'title' | 'cta'>
    title: string
    desc: string
    channelEntries: ChannelEntry[]
  }

const BlockContact = forwardRef<BlockContactRef, BlockContactProps>((props, ref) => {
  // props
  const { boardProps, title, desc, channelEntries, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Board {...boardProps} className={cn(styles.board())}>
        <div className={cn(styles.info())}>
          <h2 className={cn(styles.title())}>{title}</h2>
          <p className={cn(styles.desc())}>{desc}</p>
          <div className={cn(styles.channels())}>
            {channelEntries.map((channelEntry) => {
              const { href, label, icon } = channelEntry
              const key = `channel-${label}`
              const target = href.startsWith('/') ? undefined : '_blank'
              return (
                <Button key={key} className={cn(styles.channel())} variant="ghost" asChild>
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
      </Board>
    </div>
  )
})
BlockContact.displayName = 'BlockContact'

export { BlockContact }
export type { BlockContactProps, BlockContactRef, ChannelEntry }
