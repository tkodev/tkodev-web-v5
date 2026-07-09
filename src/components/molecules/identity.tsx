import Link from 'next/link'
import { forwardRef, type HTMLAttributes } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Logo } from '@/components/atoms/logo'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex h-full items-center gap-2'),
  thumb: cva('hidden sm:block'),
  logo: cva('h-6 w-18 sm:mx-6'),
  intro: cva('text-e4 font-expressive hidden flex-col gap-1 uppercase md:flex')
}

type IdentityRef = HTMLDivElement
type IdentityProps = HTMLAttributes<IdentityRef> &
  VariantProps<typeof styles.root> & {
    name: string
    role: string
    thumb?: AssetEntry
    fallback: string
  }

const Identity = forwardRef<IdentityRef, IdentityProps>((props, ref) => {
  // props
  const { name, role, thumb, fallback, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Link className={cn(styles.thumb())} href="/">
        <Avatar>
          <AvatarImage alt={thumb?.alt ?? name} src={thumb?.src} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      </Link>
      <Link className={cn(styles.logo())} href="/">
        <Logo />
      </Link>
      <div className={cn(styles.intro())}>
        <p>
          <strong>{name}</strong>
        </p>
        <p>{role}</p>
      </div>
    </div>
  )
})
Identity.displayName = 'Identity'

export { Identity }
export type { IdentityProps, IdentityRef }
