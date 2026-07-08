import { forwardRef, type HTMLAttributes } from 'react'
import { CardProject } from '@/components/molecules/card-project'
import { ProjectEntry } from '@/types/career'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { BlockBoard, type BlockBoardProps } from '../molecules/block-board'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center']),
  board: cva('grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3')
}

type SectionProjectsArchivedRef = HTMLDivElement
type SectionProjectsArchivedProps = HTMLAttributes<SectionProjectsArchivedRef> &
  VariantProps<typeof styles.root> & {
    boardProps: Omit<BlockBoardProps, 'cta'>
    projectEntries: ProjectEntry[]
  }

const SectionProjectsArchived = forwardRef<
  SectionProjectsArchivedRef,
  SectionProjectsArchivedProps
>((props, ref) => {
  // props
  const { boardProps, projectEntries, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <BlockBoard {...boardProps} className={cn(styles.board())}>
        {projectEntries.map((projectEntry) => {
          const key = `archive-${projectEntry.id}-card`
          return <CardProject key={key} project={projectEntry} href={`/works/${projectEntry.id}`} />
        })}
      </BlockBoard>
    </div>
  )
})
SectionProjectsArchived.displayName = 'SectionProjectsArchived'

export { SectionProjectsArchived }
export type { SectionProjectsArchivedProps, SectionProjectsArchivedRef }
