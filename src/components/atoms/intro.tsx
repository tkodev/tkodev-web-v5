import { forwardRef, type HTMLAttributes } from 'react'
import { Decode } from '@/components/atoms/decode'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('relative flex max-w-100 flex-col items-center justify-center gap-4 text-center'),
  subtitle: cva('text-muted-foreground text-e4 font-expressive uppercase'),
  title: cva('text-h1 font-heading whitespace-pre-line uppercase'),
  desc: cva('text-muted-foreground text-sm whitespace-pre-line'),
  cta: cva('flex flex-col items-center gap-2')
}

type IntroRef = HTMLDivElement
type IntroProps = HTMLAttributes<IntroRef> &
  VariantProps<typeof styles.root> & {
    title: string
    subtitle: string
    desc?: string
  }

const Intro = forwardRef<IntroRef, IntroProps>((props, ref) => {
  // props
  const { title, subtitle, children, desc, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.subtitle())}>{subtitle}</div>
      <div className={cn(styles.title())}>
        <Decode text={title} />
      </div>
      {!!desc && <div className={cn(styles.desc())}>{desc}</div>}
      {!!children && <div className={cn(styles.cta())}>{children}</div>}
    </div>
  )
})
Intro.displayName = 'Intro'

export { Intro }
export type { IntroProps, IntroRef }
