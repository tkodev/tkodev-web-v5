import { forwardRef, type HTMLAttributes } from 'react'
import { Statement, type StatementProps } from '@/components/molecules/statement'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center'])
}

type AboutMethodRef = HTMLDivElement
type AboutMethodProps = HTMLAttributes<AboutMethodRef> &
  VariantProps<typeof styles.root> & {
    statementProps: StatementProps
  }

const AboutMethod = forwardRef<AboutMethodRef, AboutMethodProps>((props, ref) => {
  // props
  const { statementProps, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Statement {...statementProps} />
    </div>
  )
})
AboutMethod.displayName = 'AboutMethod'

export { AboutMethod }
export type { AboutMethodProps, AboutMethodRef }
