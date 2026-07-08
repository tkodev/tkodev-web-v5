import { forwardRef, type HTMLAttributes } from 'react'
import { BlockMedia, type BlockMediaProps } from '@/components/molecules/block-media'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center'])
}

type SectionProjectPlateRef = HTMLDivElement
type SectionProjectPlateProps = HTMLAttributes<SectionProjectPlateRef> &
  VariantProps<typeof styles.root> & {
    mediaProps: BlockMediaProps
  }

const SectionProjectPlate = forwardRef<SectionProjectPlateRef, SectionProjectPlateProps>(
  (props, ref) => {
    // props
    const { mediaProps, className, ...rest } = props

    // jsx
    return (
      <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
        <BlockMedia {...mediaProps} />
      </div>
    )
  }
)
SectionProjectPlate.displayName = 'SectionProjectPlate'

export { SectionProjectPlate }
export type { SectionProjectPlateProps, SectionProjectPlateRef }
