import Link from 'next/link'
import { forwardRef, type HTMLAttributes } from 'react'
import { PlayIcon } from 'lucide-react'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { NavEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex items-center gap-4'),
  icon: cva('xs:block')
}

type BlockNavRef = HTMLDivElement
type BlockNavProps = HTMLAttributes<BlockNavRef> &
  VariantProps<typeof styles.root> & {
    entries: NavEntry[]
  }

const BlockNav = forwardRef<BlockNavRef, BlockNavProps>((props, ref) => {
  // props
  const { entries, children, className, ...rest } = props

  // jsx
  return (
    <nav ref={ref} className={cn(styles.root({ className }))} {...rest}>
      {entries.map((props, index) => {
        const { intent, href, name, icon, isVisible, variant, ...rest } = props
        const linkHref = href || '#'
        const linkTarget =
          !linkHref.startsWith('/') || linkHref.endsWith('.pdf') ? '_blank' : undefined
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

BlockNav.displayName = 'BlockNav'

export { BlockNav }
export type { BlockNavProps, BlockNavRef }
