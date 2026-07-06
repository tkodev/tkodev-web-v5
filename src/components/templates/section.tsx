import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import type { VariantProps } from '@/utils/theme'
import { cn, cva } from '@/utils/theme'

const styles = {
  /* container widths pending their token contract; tailwind steps hold the slot */
  container: cva('px-md mx-auto w-full', {
    defaultVariants: { size: 'lg' },
    variants: {
      size: {
        lg: 'max-w-6xl',
        md: 'max-w-4xl',
        sm: 'max-w-2xl'
      }
    }
  }),
  root: cva('w-full')
}

type SectionRef = HTMLElement
type SectionProps = HTMLAttributes<SectionRef> & VariantProps<typeof styles.container>

const Section = forwardRef<SectionRef, SectionProps>((props, ref) => {
  // props
  const { children, className, size, ...rest } = props

  // jsx
  return (
    <section ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.container({ size }))}>{children}</div>
    </section>
  )
})
Section.displayName = 'Section'

export { Section }
export type { SectionProps, SectionRef }
