import Link from 'next/link'
import { forwardRef, HTMLAttributes } from 'react'
import { PlayIcon } from 'lucide-react'
import { Button } from '@/components/atoms/button'
import { ButtonGroup } from '@/components/atoms/button-group'
import { Icon } from '@/components/atoms/icon'
import { NavItem } from '@/types/layout'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex items-center gap-2'),
  icon: cva('xs:block')
}

type NavRef = HTMLDivElement
type NavProps = HTMLAttributes<NavRef> &
  VariantProps<typeof styles.root> & {
    items: NavItem[]
  }

const Nav = forwardRef<NavRef, NavProps>((props, ref) => {
  const { items, children, className, ...rest } = props

  return (
    <nav ref={ref} className={cn(styles.root({ className }))} {...rest}>
      {items.map((props, index) => {
        const { intent, href, name, icon, isVisible, variant, ...rest } = props
        const linkHref = href || '#'
        const linkTarget =
          !linkHref.startsWith('/') || linkHref.endsWith('.pdf') ? '_blank' : undefined

        if (!isVisible) {
          return null
        }
        if (intent === 'url') {
          return (
            <Button key={`nav-item-${index}`} variant={variant} {...rest} asChild>
              <Link href={linkHref} target={linkTarget}>
                {!!icon && <Icon className={cn(styles.icon())} icon={icon} size="xs" />}
                {name}
              </Link>
            </Button>
          )
        }
        if (intent === 'theme') {
          return (
            <Button key={`nav-item-${index}`} variant={variant}>
              {!!icon && <Icon className={cn(styles.icon())} icon={icon} size="xs" />}
              Dark Mode
            </Button>
          )
        }
        if (intent === 'music') {
          return (
            <ButtonGroup key={`nav-item-${index}`}>
              <Button variant={variant}>
                {!!icon && <Icon icon={PlayIcon} size="xs" />}
                {name}
              </Button>
              <Button variant={variant} asChild>
                <Link href={linkHref} target="_blank">
                  {!!icon && <Icon className={cn(styles.icon())} icon={icon} size="xs" />}
                </Link>
              </Button>
            </ButtonGroup>
          )
        }
        if (intent === 'spacer') {
          return <Icon key={`nav-item-${index}`} icon={icon} size="xs" />
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
