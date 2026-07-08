import Link from 'next/link'
import { forwardRef, type HTMLAttributes } from 'react'
import { CardProject } from '@/components/molecules/card-project'
import { ProjectEntry } from '@/types/career'
import { type SvgComponent } from '@/types/system'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'
import { BlockBoard, type BlockBoardProps } from '../molecules/block-board'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center']),
  board: cva(
    'hide-scrollbar grid auto-cols-[minmax(18rem,1fr)] grid-flow-col gap-8 overflow-x-auto lg:gap-16'
  )
}

type SectionProjectsPreviewRef = HTMLDivElement
type SectionProjectsPreviewProps = HTMLAttributes<SectionProjectsPreviewRef> &
  VariantProps<typeof styles.root> & {
    boardProps: Omit<BlockBoardProps, 'cta'>
    ctaProps: {
      href: string
      label: string
      icon: SvgComponent
    }
    projectEntries: ProjectEntry[]
  }

const SectionProjectsPreview = forwardRef<SectionProjectsPreviewRef, SectionProjectsPreviewProps>(
  (props, ref) => {
    // props
    const { boardProps, ctaProps, projectEntries, className, ...rest } = props
    const { href, label, icon } = ctaProps

    // jsx
    return (
      <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
        <BlockBoard
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
            return (
              <CardProject key={key} project={projectEntry} href={`/works/${projectEntry.id}`} />
            )
          })}
        </BlockBoard>
      </div>
    )
  }
)
SectionProjectsPreview.displayName = 'SectionProjectsPreview'

export { SectionProjectsPreview }
export type { SectionProjectsPreviewProps, SectionProjectsPreviewRef }
