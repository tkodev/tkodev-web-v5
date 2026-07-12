import { forwardRef, type HTMLAttributes } from 'react'
import { Accordion } from '@/components/atoms/accordion'
import { Board, type BoardProps } from '@/components/molecules/board'
import { Record } from '@/components/molecules/record'
import { type JobGroup } from '@/utils/career'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center']),
  board: cva('p-0'),
  accordion: cva('w-full')
}

type ExperienceRecordRef = HTMLDivElement
type ExperienceRecordProps = HTMLAttributes<ExperienceRecordRef> &
  VariantProps<typeof styles.root> & {
    boardProps: BoardProps
    jobGroups: JobGroup[]
  }

const ExperienceRecord = forwardRef<ExperienceRecordRef, ExperienceRecordProps>((props, ref) => {
  // props
  const { boardProps, jobGroups, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Board {...boardProps} className={cn(styles.board())}>
        <Accordion type="single" className={cn(styles.accordion())} collapsible>
          {jobGroups.map((jobGroup, index) => {
            const key = `record-${jobGroup.employerId}`
            return <Record key={key} index={index} jobGroup={jobGroup} />
          })}
        </Accordion>
      </Board>
    </div>
  )
})
ExperienceRecord.displayName = 'ExperienceRecord'

export { ExperienceRecord }
export type { ExperienceRecordProps, ExperienceRecordRef }
