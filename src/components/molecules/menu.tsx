'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { forwardRef, type HTMLAttributes } from 'react'
import { NavEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['w-fit max-w-full', 'flex flex-col']),
  item: cva(
    [
      'group/menu-item flex items-baseline gap-4 p-4',
      'animate-slide-down fill-mode-both motion-reduce:animate-none',
      'transition-colors outline-none',
      'focus-visible:ring-ring/50 focus-visible:ring-3'
    ],
    {
      variants: {
        isCurrent: {
          true: 'text-foreground',
          false: 'text-muted-foreground hover:text-foreground'
        }
      },
      defaultVariants: {
        isCurrent: false
      }
    }
  ),
  index: cva('text-e4 font-expressive w-10 shrink-0 uppercase'),
  name: cva('text-h3 font-heading flex-1 uppercase')
}

type MenuRef = HTMLElement
type MenuProps = HTMLAttributes<MenuRef> &
  VariantProps<typeof styles.root> & {
    entries: NavEntry[]
    onNavigate?: () => void
  }

const Menu = forwardRef<MenuRef, MenuProps>((props, ref) => {
  // props
  const { entries, onNavigate, className, ...rest } = props

  // hooks
  const pathname = usePathname()

  // render vars
  const linkEntries = entries.filter((entry) => entry.intent === 'url' && entry.isVisible)

  // jsx
  return (
    <nav ref={ref} className={cn(styles.root({ className }))} {...rest}>
      {linkEntries.map((entry, index) => {
        const href = entry.href || '#'
        const isCurrent = pathname === href || pathname.startsWith(`${href}/`)
        const key = `menu-item-${index}`

        return (
          <Link
            key={key}
            className={cn(styles.item({ isCurrent }))}
            href={href}
            onClick={onNavigate}
          >
            <span className={cn(styles.index())}>{`${String(index + 1).padStart(2, '0')} //`}</span>
            <span className={cn(styles.name())}>{entry.name}</span>
          </Link>
        )
      })}
    </nav>
  )
})
Menu.displayName = 'Menu'

export { Menu }
export type { MenuProps, MenuRef }
