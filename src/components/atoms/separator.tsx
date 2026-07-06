'use client'

import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { Separator as SeparatorPrimitive } from 'radix-ui'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva(
    'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px'
  )
}

type SeparatorRef = ComponentRef<typeof SeparatorPrimitive.Root>
type SeparatorProps = ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>

const Separator = forwardRef<SeparatorRef, SeparatorProps>((props, ref) => {
  // props
  const { className, decorative = true, orientation = 'horizontal', ...rest } = props

  // jsx
  return (
    <SeparatorPrimitive.Root
      ref={ref}
      className={cn(styles.root({ className }))}
      decorative={decorative}
      orientation={orientation}
      {...rest}
    />
  )
})
Separator.displayName = 'Separator'

export { Separator }
export type { SeparatorProps, SeparatorRef }
