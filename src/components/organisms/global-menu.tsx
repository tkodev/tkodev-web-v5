'use client'

import { usePathname } from 'next/navigation'
import { useState, type ReactNode } from 'react'
import { XIcon } from 'lucide-react'
import { Button } from '@/components/atoms/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/atoms/drawer'
import { Icon } from '@/components/atoms/icon'
import { Identity, type IdentityProps } from '@/components/molecules/identity'
import { Menu } from '@/components/molecules/menu'
import { NavEntry } from '@/types/layout'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva('px-4'),
  header: cva(['h-18 max-w-7xl shrink-0 px-4', 'flex flex-row items-center justify-between gap-8']),
  body: cva(['max-w-7xl grow overflow-y-auto px-4', 'flex flex-col items-center justify-center']),
  footer: cva([
    'h-18 max-w-7xl shrink-0 px-4',
    'flex items-center justify-between gap-8',
    'text-e4 font-expressive text-muted-foreground uppercase'
  ]),
  srOnly: cva('sr-only')
}

type GlobalMenuProps = {
  entries: NavEntry[]
  identityProps: IdentityProps
  children: ReactNode
}

const GlobalMenu = (props: GlobalMenuProps) => {
  // props
  const { entries, identityProps, children } = props

  // hooks
  const pathname = usePathname()
  const [openPath, setOpenPath] = useState<string | null>(null)

  // render vars
  const isOpen = openPath === pathname
  const handleOpenChange = (open: boolean) => setOpenPath(open ? pathname : null)
  const handleNavigate = () => setOpenPath(null)

  // jsx
  return (
    <Drawer direction="top" open={isOpen} onOpenChange={handleOpenChange} autoFocus>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className={cn(styles.root())} size="full">
        <DrawerHeader className={cn(styles.header())}>
          <DrawerTitle className={cn(styles.srOnly())}>Menu</DrawerTitle>
          <DrawerDescription className={cn(styles.srOnly())}>Site navigation</DrawerDescription>
          <Identity {...identityProps} />
          <DrawerClose asChild>
            <Button variant="link">
              <Icon icon={XIcon} size="sm" />
              Close
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <div className={cn(styles.body())}>
          <Menu entries={entries} onNavigate={handleNavigate} />
        </div>
        <div className={cn(styles.footer())}>
          <p>{'// Menu //'}</p>
          <p>[ Awaiting Input ]</p>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export { GlobalMenu }
export type { GlobalMenuProps }
