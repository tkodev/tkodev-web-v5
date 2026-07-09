import { forwardRef, type HTMLAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('relative flex max-w-86 flex-col items-center justify-center gap-4 text-center'),
  subtitle: cva('text-muted-foreground text-e4 font-expressive uppercase'),
  title: cva('text-h1 font-heading whitespace-pre-line uppercase'),
  desc: cva('text-muted-foreground text-sm whitespace-pre-line')
}

type BlockIntroRef = HTMLDivElement
type BlockIntroProps = HTMLAttributes<BlockIntroRef> &
  VariantProps<typeof styles.root> & {
    title: string
    subtitle: string
    desc?: string
  }

const BlockIntro = forwardRef<BlockIntroRef, BlockIntroProps>((props, ref) => {
  // props
  const { title, subtitle, desc, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.subtitle())}>{subtitle}</div>
      <div className={cn(styles.title())}>{title}</div>
      {!!desc && <div className={cn(styles.desc())}>{desc}</div>}
    </div>
  )
})
BlockIntro.displayName = 'BlockIntro'

export { BlockIntro }
export type { BlockIntroProps, BlockIntroRef }
