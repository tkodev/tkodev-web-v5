import { forwardRef, type HTMLAttributes } from 'react'
import { Signature } from '@/components/atoms/signature'
import { BlockText, type BlockTextProps } from '@/components/molecules/block-text'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center']),
  signature: cva('w-48')
}

type SectionAboutDetailsRef = HTMLDivElement
type SectionAboutDetailsProps = HTMLAttributes<SectionAboutDetailsRef> &
  VariantProps<typeof styles.root> & {
    textProps: BlockTextProps
  }

const SectionAboutDetails = forwardRef<SectionAboutDetailsRef, SectionAboutDetailsProps>(
  (props, ref) => {
    // props
    const { textProps, className, ...rest } = props

    // jsx
    return (
      <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
        <BlockText {...textProps}>
          <Signature className={cn(styles.signature())} />
        </BlockText>
      </div>
    )
  }
)
SectionAboutDetails.displayName = 'SectionAboutDetails'

export { SectionAboutDetails }
export type { SectionAboutDetailsProps, SectionAboutDetailsRef }
