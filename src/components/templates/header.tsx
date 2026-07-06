import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva('border-border px-md py-sm flex items-center justify-between border-b')
}

type HeaderRef = HTMLElement
type HeaderProps = HTMLAttributes<HeaderRef>

const Header = forwardRef<HeaderRef, HeaderProps>((props, ref) => {
  // props
  const { className, ...rest } = props

  // jsx
  return <header ref={ref} className={cn(styles.root({ className }))} {...rest} />
})
Header.displayName = 'Header'

export { Header }
export type { HeaderProps, HeaderRef }
