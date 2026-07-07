import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('relative flex max-w-86 flex-col items-center justify-center gap-4 text-center'),
  subtitle: cva('text-muted-foreground text-e4 font-expressive uppercase'),
  title: cva('text-h1 font-heading uppercase'),
  desc: cva('text-muted-foreground text-sm whitespace-pre-line')
}

type IntroRef = HTMLDivElement
type IntroProps = HTMLAttributes<IntroRef> &
  VariantProps<typeof styles.root> & {
    title: string
    subtitle: string
    desc: string
  }

const Intro = forwardRef<IntroRef, IntroProps>((props, ref) => {
  // props
  const { title, subtitle, desc, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.subtitle())}>{subtitle}</div>
      <div className={cn(styles.title())}>{title}</div>
      <div className={cn(styles.desc())}>{desc}</div>
    </div>
  )
})
Intro.displayName = 'Intro'

export { Intro }
export type { IntroProps, IntroRef }
