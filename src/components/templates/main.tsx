import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva('flex-1')
}

type MainRef = HTMLElement
type MainProps = HTMLAttributes<MainRef>

const Main = forwardRef<MainRef, MainProps>((props, ref) => {
  // props
  const { className, ...rest } = props

  // jsx
  return <main ref={ref} className={cn(styles.root({ className }))} {...rest} />
})
Main.displayName = 'Main'

export { Main }
export type { MainProps, MainRef }
