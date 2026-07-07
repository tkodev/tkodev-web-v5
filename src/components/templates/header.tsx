'use client'

import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Logo } from '@/components/atoms/logo'
import { Nav } from '@/components/molecules/nav'
import { headerItems } from '@/constants/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['z-10 h-18 w-full', 'fixed top-0 left-0']),

  fade: cva([
    'pointer-events-none fixed -top-0.5 left-0 h-18 w-full',
    'bg-background gradient-mask-b-10'
  ]),
  blur: cva(['pointer-events-none h-18 w-full', 'fixed -top-0.5 left-0']),

  container: cva([
    'z-10 h-16 w-full max-w-7xl',
    'fixed top-1 left-1/2 mx-auto -translate-x-1/2 px-4'
  ]),
  bar: cva('animate-slide-down flex h-full w-full items-center justify-between gap-2 px-4', {
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

  left: cva('flex h-full items-center gap-2'),
  right: cva('no-scrollbar flex h-full items-center gap-2 overflow-x-auto'),

  thumb: cva('hidden sm:block'),
  logo: cva('h-6 w-18 sm:mx-6'),
  intro: cva('hidden sm:block')
}

type HeaderProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles.bar>

const Header: FC<HeaderProps> = (props) => {
  const { variant, className, ...rest } = props

  return (
    <header className={cn(styles.root({ className }))} {...rest}>
      {[
        { blur: 'backdrop-blur-[8px]', stop: '0%' },
        { blur: 'backdrop-blur-[12px]', stop: '25%' },
        { blur: 'backdrop-blur-[16px]', stop: '50%' },
        { blur: 'backdrop-blur-[20px]', stop: '75%' }
      ].map(({ blur, stop }) => (
        <div
          key={stop}
          className={cn(styles.blur(), blur)}
          style={{ maskImage: `linear-gradient(to top, transparent ${stop}, black)` }}
        />
      ))}
      <div className={cn(styles.fade())} />
      <div className={cn(styles.container())}>
        <div className={cn(styles.bar({ variant }))}>
          <div className={cn(styles.left())}>
            <Link className={cn(styles.thumb())} href="/">
              <Avatar>
                <AvatarImage alt="Tony Ko" src="/media/tkodev/dp-thumb.jpg" />
                <AvatarFallback>tko</AvatarFallback>
              </Avatar>
            </Link>
            <Link className={cn(styles.logo())} href="/">
              <Logo />
            </Link>
          </div>
          <div className={cn(styles.right())}>
            <Nav items={headerItems} />
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }
