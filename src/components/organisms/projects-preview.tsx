import Link from 'next/link'
import { forwardRef, type HTMLAttributes } from 'react'
import { Project } from '@/components/molecules/project'
import { ProjectEntry } from '@/types/career'
import { type SvgComponent } from '@/types/system'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'
import { Board, type BoardProps } from '../molecules/board'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center']),
  board: cva(
    'hide-scrollbar grid auto-cols-[minmax(18rem,1fr)] grid-flow-col gap-8 overflow-x-auto lg:gap-16'
  )
}

type ProjectsPreviewRef = HTMLDivElement
type ProjectsPreviewProps = HTMLAttributes<ProjectsPreviewRef> &
  VariantProps<typeof styles.root> & {
    boardProps: Omit<BoardProps, 'cta'>
    ctaProps: {
      href: string
      label: string
      icon: SvgComponent
    }
    projectEntries: ProjectEntry[]
  }

const ProjectsPreview = forwardRef<ProjectsPreviewRef, ProjectsPreviewProps>((props, ref) => {
  // props
  const { boardProps, ctaProps, projectEntries, className, ...rest } = props
  const { href, label, icon } = ctaProps

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Board
        {...boardProps}
        className={cn(styles.board())}
        cta={
          <Button variant="outline" asChild>
            <Link href={href}>
              <Icon icon={icon} size="sm" />
              {label}
            </Link>
          </Button>
        }
      >
        {projectEntries.map((projectEntry) => {
          const key = `featured-${projectEntry.id}-card`
          return <Project key={key} project={projectEntry} href={`/works/${projectEntry.id}`} />
        })}
      </Board>
    </div>
  )
})
ProjectsPreview.displayName = 'ProjectsPreview'

export { ProjectsPreview }
export type { ProjectsPreviewProps, ProjectsPreviewRef }
