import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva('flex min-h-dvh flex-col')
}

type LayoutRef = HTMLDivElement
type LayoutProps = HTMLAttributes<LayoutRef>

const Layout = forwardRef<LayoutRef, LayoutProps>((props, ref) => {
  // props
  const { className, ...rest } = props

  // jsx
  return <div ref={ref} className={cn(styles.root({ className }))} {...rest} />
})
Layout.displayName = 'Layout'

export { Layout }
export type { LayoutProps, LayoutRef }
