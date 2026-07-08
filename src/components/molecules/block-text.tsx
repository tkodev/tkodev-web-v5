import { forwardRef, type HTMLAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['w-full', 'flex flex-col items-center gap-8', 'border-y px-6 py-24 text-center']),
  title: cva('text-h5 font-heading uppercase'),
  desc: cva('max-w-3xl text-sm whitespace-pre-line')
}

type BlockTextRef = HTMLDivElement
type BlockTextProps = HTMLAttributes<BlockTextRef> &
  VariantProps<typeof styles.root> & {
    title: string
    desc: string
  }

const BlockText = forwardRef<BlockTextRef, BlockTextProps>((props, ref) => {
  // props
  const { title, desc, children, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <h2 className={cn(styles.title())}>{title}</h2>
      <p className={cn(styles.desc())}>{desc}</p>
      {children}
    </div>
  )
})
BlockText.displayName = 'BlockText'

export { BlockText }
export type { BlockTextProps, BlockTextRef }
