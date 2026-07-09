import { forwardRef, type HTMLAttributes } from 'react'
import { BlockProcess, type ProcessEntry } from '@/components/molecules/block-process'
import { BlockStatement, type BlockStatementProps } from '@/components/molecules/block-statement'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex flex-col items-center justify-center gap-24'])
}

type SectionAboutProcessRef = HTMLDivElement
type SectionAboutProcessProps = HTMLAttributes<SectionAboutProcessRef> &
  VariantProps<typeof styles.root> & {
    statementProps: BlockStatementProps
    processEntries: ProcessEntry[]
  }

const SectionAboutProcess = forwardRef<SectionAboutProcessRef, SectionAboutProcessProps>(
  (props, ref) => {
    // props
    const { statementProps, processEntries, className, ...rest } = props

    // jsx
    return (
      <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
        <BlockStatement {...statementProps} />
        <BlockProcess processEntries={processEntries} />
      </div>
    )
  }
)
SectionAboutProcess.displayName = 'SectionAboutProcess'

export { SectionAboutProcess }
export type { SectionAboutProcessProps, SectionAboutProcessRef }
