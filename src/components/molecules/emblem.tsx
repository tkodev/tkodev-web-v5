import { forwardRef, type HTMLAttributes } from 'react'
import { Asset } from '@/components/atoms/asset'
import { type ClientEntry } from '@/types/career'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva([
    'flex h-16 w-36 shrink-0 items-center justify-center px-2',
    'rounded-sm transition-opacity outline-none',
    'opacity-60 hover:opacity-100',
    'focus-visible:ring-ring/50 focus-visible:ring-3'
  ]),
  logo: cva('h-auto w-full object-contain')
}

type EmblemRef = HTMLDivElement
type EmblemProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof styles.root> & {
    client: ClientEntry
  }

const Emblem = forwardRef<EmblemRef, EmblemProps>((props, ref) => {
  // props
  const { client, className, ...rest } = props
  const { media } = client

  // render vars
  const logo = media?.dark
  if (!logo) return null

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Asset className={cn(styles.logo())} asset={logo} />
    </div>
  )
})
Emblem.displayName = 'Emblem'

export { Emblem }
export type { EmblemProps, EmblemRef }
