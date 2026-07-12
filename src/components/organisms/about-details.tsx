import { forwardRef, type HTMLAttributes } from 'react'
import { Signature } from '@/components/atoms/signature'
import { Statement, type StatementProps } from '@/components/molecules/statement'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center']),
  signature: cva('w-48')
}

type AboutDetailsRef = HTMLDivElement
type AboutDetailsProps = HTMLAttributes<AboutDetailsRef> &
  VariantProps<typeof styles.root> & {
    statementProps: StatementProps
  }

const AboutDetails = forwardRef<AboutDetailsRef, AboutDetailsProps>((props, ref) => {
  // props
  const { statementProps, className, ...rest } = props
  const { children, ...restStatement } = statementProps

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Statement {...restStatement}>
        {children}
        <Signature className={cn(styles.signature())} />
      </Statement>
    </div>
  )
})
AboutDetails.displayName = 'AboutDetails'

export { AboutDetails }
export type { AboutDetailsProps, AboutDetailsRef }
