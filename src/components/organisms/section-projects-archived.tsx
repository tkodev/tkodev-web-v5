'use client'

import { forwardRef, useState, type HTMLAttributes } from 'react'
import { ChevronsDownIcon } from 'lucide-react'
import { CardProject } from '@/components/molecules/card-project'
import { ProjectEntry } from '@/types/career'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'
import { BlockBoard, type BlockBoardProps } from '../molecules/block-board'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center']),
  board: cva('grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3')
}

type SectionProjectsArchivedRef = HTMLDivElement
type SectionProjectsArchivedProps = HTMLAttributes<SectionProjectsArchivedRef> &
  VariantProps<typeof styles.root> & {
    boardProps: Omit<BlockBoardProps, 'cta'>
    ctaProps: {
      label: string
    }
    projectEntries: ProjectEntry[]
    pageSize?: number
  }

const SectionProjectsArchived = forwardRef<
  SectionProjectsArchivedRef,
  SectionProjectsArchivedProps
>((props, ref) => {
  // props
  const { boardProps, ctaProps, projectEntries, pageSize = 6, className, ...rest } = props
  const { label } = ctaProps

  // hooks
  const [visibleCount, setVisibleCount] = useState(pageSize)

  // render vars
  const visibleEntries = projectEntries.slice(0, visibleCount)
  const hasMore = visibleCount < projectEntries.length

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <BlockBoard
        {...boardProps}
        className={cn(styles.board())}
        cta={
          hasMore ? (
            <Button variant="outline" onClick={() => setVisibleCount((count) => count + pageSize)}>
              <Icon icon={ChevronsDownIcon} size="sm" />
              {label}
            </Button>
          ) : null
        }
      >
        {visibleEntries.map((projectEntry) => {
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
