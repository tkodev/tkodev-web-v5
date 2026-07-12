import { forwardRef, type HTMLAttributes } from 'react'
import { Board, type BoardProps } from '@/components/molecules/board'
import { Log, type LogEntry } from '@/components/molecules/log'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center']),
  board: cva('p-0')
}

type ExperienceLogsRef = HTMLDivElement
type ExperienceLogsProps = HTMLAttributes<ExperienceLogsRef> &
  VariantProps<typeof styles.root> & {
    boardProps: Omit<BoardProps, 'cta'>
    logEntries: LogEntry[]
  }

const ExperienceLogs = forwardRef<ExperienceLogsRef, ExperienceLogsProps>((props, ref) => {
  // props
  const { boardProps, logEntries, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Board {...boardProps} className={cn(styles.board())}>
        {logEntries.map((logEntry, index) => {
          const key = `log-${logEntry.id}`
          return <Log key={key} index={index} logEntry={logEntry} />
        })}
      </Board>
    </div>
  )
})
ExperienceLogs.displayName = 'ExperienceLogs'

export { ExperienceLogs }
export type { ExperienceLogsProps, ExperienceLogsRef }
