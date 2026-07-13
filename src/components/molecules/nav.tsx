import Link from 'next/link'
import { forwardRef, type HTMLAttributes } from 'react'
import { PlayIcon } from 'lucide-react'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { NavEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex gap-4', {
    variants: {
      orientation: {
        horizontal: 'items-center',
        vertical: 'flex-col items-start'
      }
    },
    defaultVariants: {
      orientation: 'horizontal'
    }
  }),
  icon: cva('xs:block')
}

type NavRef = HTMLDivElement
type NavProps = HTMLAttributes<NavRef> &
  VariantProps<typeof styles.root> & {
    entries: NavEntry[]
  }

const Nav = forwardRef<NavRef, NavProps>((props, ref) => {
  // props
  const { entries, orientation, children, className, ...rest } = props

  // jsx
  return (
    <nav ref={ref} className={cn(styles.root({ orientation, className }))} {...rest}>
      {entries.map((props, index) => {
        const { intent, href, name, icon, isVisible, variant, ...rest } = props
        const linkHref = href || '#'
        const isInternal = linkHref.startsWith('/') || linkHref.startsWith('#')
        const linkTarget = !isInternal || linkHref.endsWith('.pdf') ? '_blank' : undefined
        const key = `nav-item-${index}`

        if (!isVisible) {
          return null
        }
        if (intent === 'url') {
          return (
            <Button key={key} variant={variant} {...rest} asChild>
              <Link href={linkHref} target={linkTarget}>
                {!!icon && <Icon className={cn(styles.icon())} icon={icon} size="sm" />}
                {name}
              </Link>
            </Button>
          )
        }
        if (intent === 'theme') {
          return (
            <Button key={key} variant={variant}>
              {!!icon && <Icon className={cn(styles.icon())} icon={icon} size="sm" />}
            </Button>
          )
        }
        if (intent === 'music') {
          return (
            <Button key={key} variant={variant}>
              {!!icon && <Icon icon={PlayIcon} size="sm" />}
              {name}
            </Button>
          )
        }
        if (intent === 'spacer') {
          return <Icon key={key} icon={icon} size="sm" />
        }
        return null
      })}
      {children}
    </nav>
  )
})

Nav.displayName = 'Nav'

export { Nav }
export type { NavProps, NavRef }
