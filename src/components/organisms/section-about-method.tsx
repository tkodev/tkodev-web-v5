import { forwardRef, type HTMLAttributes } from 'react'
import { BlockText, type BlockTextProps } from '@/components/molecules/block-text'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center'])
}

type SectionAboutMethodRef = HTMLDivElement
type SectionAboutMethodProps = HTMLAttributes<SectionAboutMethodRef> &
  VariantProps<typeof styles.root> & {
    textProps: BlockTextProps
  }

const SectionAboutMethod = forwardRef<SectionAboutMethodRef, SectionAboutMethodProps>(
  (props, ref) => {
    // props
    const { textProps, className, ...rest } = props

    // jsx
    return (
      <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
        <BlockText {...textProps} />
      </div>
    )
  }
)
SectionAboutMethod.displayName = 'SectionAboutMethod'

export { SectionAboutMethod }
export type { SectionAboutMethodProps, SectionAboutMethodRef }
