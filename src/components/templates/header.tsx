'use client'

import { FC, type HTMLAttributes } from 'react'
import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { Identity, type IdentityProps } from '@/components/molecules/identity'
import { Nav } from '@/components/molecules/nav'
import { GlobalMenu } from '@/components/organisms/global-menu'
import { headerEntries } from '@/constants/layout'
import { personEntryById } from '@/constants/profile'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['h-18 w-full', 'fixed top-0 left-0 z-20']),

  veil: cva([
    'pointer-events-none fixed -top-0.5 left-0 h-18 w-full',
    'from-background bg-linear-to-b from-25% to-transparent',
    'backdrop-blur-xl',
    '[mask-image:linear-gradient(to_bottom,#000_25%,transparent)]'
  ]),

  container: cva(['h-16 w-full max-w-7xl', 'fixed top-1 left-1/2 mx-auto -translate-x-1/2 px-4']),
  bar: cva('animate-boot-down flex size-full items-center justify-between gap-8 px-4', {
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

  nav: cva('hidden sm:flex'),
  trigger: cva('sm:hidden')
}

type HeaderProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles.bar>

const Header: FC<HeaderProps> = (props) => {
  const { variant, className, ...rest } = props

  const tony = personEntryById['tony']
  const identityProps: IdentityProps = {
    name: tony.basic.name,
    role: tony.basic.role,
    thumb: tony.media?.thumb,
    fallback: 'tko'
  }

  return (
    <header className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.veil())} />
      <div className={cn(styles.container())}>
        <div className={cn(styles.bar({ variant }))}>
          <div className={cn(styles.left())}>
            <Identity {...identityProps} />
          </div>
          <div className={cn(styles.right())}>
            <Nav className={cn(styles.nav())} entries={headerEntries} />
            <GlobalMenu entries={headerEntries} identityProps={identityProps}>
              <Button className={cn(styles.trigger())} variant="link">
                <Icon icon={MenuIcon} size="sm" />
                Menu
              </Button>
            </GlobalMenu>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }
