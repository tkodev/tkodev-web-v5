import { forwardRef, type HTMLAttributes } from 'react'
import { Process, type ProcessEntry } from '@/components/molecules/process'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex flex-col items-center justify-center'])
}

type AboutProcessRef = HTMLDivElement
type AboutProcessProps = HTMLAttributes<AboutProcessRef> &
  VariantProps<typeof styles.root> & {
    processEntries: ProcessEntry[]
  }

const AboutProcess = forwardRef<AboutProcessRef, AboutProcessProps>((props, ref) => {
  // props
  const { processEntries, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Process processEntries={processEntries} />
    </div>
  )
})
AboutProcess.displayName = 'AboutProcess'

export { AboutProcess }
export type { AboutProcessProps, AboutProcessRef }
