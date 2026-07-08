import Link from 'next/link'
import { forwardRef, type HTMLAttributes } from 'react'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { type SvgComponent } from '@/types/system'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['w-full', 'flex flex-col items-center justify-center gap-8 px-6 text-center']),
  label: cva('text-e4 font-expressive text-muted-foreground uppercase'),
  title: cva('text-h5 font-heading uppercase')
}

type BlockNextRef = HTMLDivElement
type BlockNextProps = HTMLAttributes<BlockNextRef> &
  VariantProps<typeof styles.root> & {
    label: string
    title: string
    ctaProps: {
      href: string
      label: string
      icon: SvgComponent
    }
  }

const BlockNext = forwardRef<BlockNextRef, BlockNextProps>((props, ref) => {
  // props
  const { label, title, ctaProps, className, ...rest } = props
  const { href, label: ctaLabel, icon } = ctaProps

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <p className={cn(styles.label())}>{label}</p>
      <h2 className={cn(styles.title())}>{title}</h2>
      <Button variant="outline" asChild>
        <Link href={href}>
          <Icon icon={icon} size="sm" />
          {ctaLabel}
        </Link>
      </Button>
    </div>
  )
})
BlockNext.displayName = 'BlockNext'

export { BlockNext }
export type { BlockNextProps, BlockNextRef }
