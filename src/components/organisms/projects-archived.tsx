import { forwardRef, type HTMLAttributes } from 'react'
import { Project } from '@/components/molecules/project'
import { ProjectEntry } from '@/types/career'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { Board, type BoardProps } from '../molecules/board'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center']),
  board: cva('grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3')
}

type ProjectsArchivedRef = HTMLDivElement
type ProjectsArchivedProps = HTMLAttributes<ProjectsArchivedRef> &
  VariantProps<typeof styles.root> & {
    boardProps: Omit<BoardProps, 'cta'>
    projectEntries: ProjectEntry[]
  }

const ProjectsArchived = forwardRef<ProjectsArchivedRef, ProjectsArchivedProps>((props, ref) => {
  // props
  const { boardProps, projectEntries, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Board {...boardProps} className={cn(styles.board())}>
        {projectEntries.map((projectEntry) => {
          const key = `archive-${projectEntry.id}-card`
          return <Project key={key} project={projectEntry} />
        })}
      </Board>
    </div>
  )
})
ProjectsArchived.displayName = 'ProjectsArchived'

export { ProjectsArchived }
export type { ProjectsArchivedProps, ProjectsArchivedRef }
