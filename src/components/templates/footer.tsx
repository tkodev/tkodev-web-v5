'use client'

import { FC, type HTMLAttributes } from 'react'
import { formatInTimeZone } from 'date-fns-tz'
import { appTimeZone } from '@/constants/date'
import { footerEntries } from '@/constants/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { Nav } from '../molecules/nav'

const styles = {
  root: cva(['h-18 w-full', 'fixed bottom-0 left-0 z-10']),

  veil: cva([
    'pointer-events-none fixed -bottom-0.5 left-0 h-18 w-full',
    'from-background bg-linear-to-t from-25% to-transparent',
    'backdrop-blur-xl',
    '[mask-image:linear-gradient(to_top,#000_25%,transparent)]'
  ]),

  container: cva([
    'h-16 w-full max-w-7xl',
    'fixed bottom-1 left-1/2 mx-auto -translate-x-1/2 px-4'
  ]),
  bar: cva('animate-boot-up flex h-full items-center justify-between gap-8 px-2', {
    variants: {
      variant: {
        bar: [
          'bg-background/30 border-border rounded-full border shadow-md',
          'backdrop-blur-lg backdrop-filter'
        ],
        flat: 'rounded-none border-none bg-transparent shadow-none'
      }
    },
    defaultVariants: {
      variant: 'flat'
    }
  }),

  left: cva(['flex h-full items-center gap-2 px-2', 'text-e4 font-expressive uppercase']),
  right: cva('no-scrollbar flex h-full items-center gap-2 overflow-x-auto px-2')
}

type FooterProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles.bar>

const Footer: FC<FooterProps> = (props) => {
  const { variant, className, ...rest } = props

  const year = formatInTimeZone(new Date(), appTimeZone, 'yyyy')

  return (
    <footer className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.veil())} />
      <div className={cn(styles.container())}>
        <div className={cn(styles.bar({ variant }))}>
          <div className={cn(styles.left())}>© Tony Ko {year}</div>
          <div className={cn(styles.right())}>
            <Nav entries={footerEntries} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
