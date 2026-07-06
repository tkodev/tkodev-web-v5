import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva(
    'border-border px-md py-sm text-muted-foreground flex items-center justify-between border-t text-sm'
  )
}

type FooterRef = HTMLElement
type FooterProps = HTMLAttributes<FooterRef>

const Footer = forwardRef<FooterRef, FooterProps>((props, ref) => {
  // props
  const { className, ...rest } = props

  // jsx
  return <footer ref={ref} className={cn(styles.root({ className }))} {...rest} />
})
Footer.displayName = 'Footer'

export { Footer }
export type { FooterProps, FooterRef }
