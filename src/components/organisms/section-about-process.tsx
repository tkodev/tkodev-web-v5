import { forwardRef, type HTMLAttributes } from 'react'
import { BlockProcess, type ProcessEntry } from '@/components/molecules/block-process'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center'])
}

type SectionAboutProcessRef = HTMLDivElement
type SectionAboutProcessProps = HTMLAttributes<SectionAboutProcessRef> &
  VariantProps<typeof styles.root> & {
    processEntries: ProcessEntry[]
  }

const SectionAboutProcess = forwardRef<SectionAboutProcessRef, SectionAboutProcessProps>(
  (props, ref) => {
    // props
    const { processEntries, className, ...rest } = props

    // jsx
    return (
      <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
        <BlockProcess processEntries={processEntries} />
      </div>
    )
  }
)
SectionAboutProcess.displayName = 'SectionAboutProcess'

export { SectionAboutProcess }
export type { SectionAboutProcessProps, SectionAboutProcessRef }
