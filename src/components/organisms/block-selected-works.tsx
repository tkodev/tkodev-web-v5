import Link from 'next/link'
import { forwardRef, type HTMLAttributes } from 'react'
import { CardProject } from '@/components/molecules/card-project'
import { ProjectEntry } from '@/types/career'
import { type SvgComponent } from '@/types/system'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'
import { Board, type BoardProps } from '../molecules/board'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center']),
  board: cva('grid auto-cols-[minmax(22rem,1fr)] grid-flow-col gap-16 overflow-x-auto')
}

type BlockSelectedWorksRef = HTMLDivElement
type BlockSelectedWorksProps = HTMLAttributes<BlockSelectedWorksRef> &
  VariantProps<typeof styles.root> & {
    boardProps: Omit<BoardProps, 'cta'>
    ctaProps: {
      href: string
      label: string
      icon: SvgComponent
    }
    projectEntries: ProjectEntry[]
  }

const BlockSelectedWorks = forwardRef<BlockSelectedWorksRef, BlockSelectedWorksProps>(
  (props, ref) => {
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
            return <CardProject key={key} project={projectEntry} />
          })}
        </Board>
      </div>
    )
  }
)
BlockSelectedWorks.displayName = 'BlockSelectedWorks'

export { BlockSelectedWorks }
export type { BlockSelectedWorksProps, BlockSelectedWorksRef }
