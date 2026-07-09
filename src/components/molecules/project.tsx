import Link from 'next/link'
import { forwardRef, type ComponentProps, type HTMLAttributes } from 'react'
import { formatInTimeZone } from 'date-fns-tz'
import { Asset } from '@/components/atoms/asset'
import { Ticker } from '@/components/atoms/ticker'
import { clientById } from '@/constants/client'
import { appTimeZone } from '@/constants/date'
import { placeholderAsset } from '@/constants/layout'
import { ProjectEntry } from '@/types/career'
import { getProjectAsset } from '@/utils/career'
import { formatAttribution } from '@/utils/string'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { Badge } from '../atoms/badge'

const styles = {
  root: cva([
    'group/ticker bg-background/30 @container block min-w-60 rounded-sm border backdrop-blur-sm',
    'transition-colors outline-none',
    'focus-visible:ring-ring/50 focus-visible:ring-3'
  ]),
  cols: cva('flex size-full flex-col @3xl:flex-row'),

  assetCol: cva('@3xl:flex @3xl:w-1/3 @3xl:items-center'),
  contentCol: cva('flex grow flex-col @3xl:w-2/3 @3xl:border-l'),

  assetCell: cva('flex size-full items-center p-4'),
  assetFrame: cva('bg-card relative aspect-video w-full overflow-hidden rounded-xs'),
  img: cva('absolute inset-0 size-full object-cover'),
  introCell: cva('flex shrink-0 flex-col gap-2 overflow-hidden border-t p-4 @3xl:border-t-0'),
  clientCell: cva([
    'flex items-center border-t p-4',
    'text-muted-foreground text-e4 font-expressive uppercase'
  ]),
  dutiesCell: cva('flex flex-wrap gap-2 border-t p-4'),

  subtitle: cva([
    'flex justify-between gap-4',
    'text-muted-foreground text-e4 font-expressive uppercase'
  ]),
  title: cva(['flex items-center justify-between gap-4', 'text-h5 font-heading uppercase']),
  titleText: cva('min-w-0 flex-1'),
  desc: cva('')
}

type ProjectRef = HTMLDivElement
type ProjectProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof styles.root> & {
    project: ProjectEntry
    href?: string
  }

const Project = forwardRef<ProjectRef, ProjectProps>((props, ref) => {
  // props
  const { project, href, className, ...rest } = props
  const { basic, extended, parents } = project

  // render vars
  const asset = getProjectAsset(project) ?? placeholderAsset
  const client = clientById[parents.clientId] ?? undefined
  const agency = parents?.agencyId ? clientById[parents?.agencyId] : undefined
  const projectYear = formatInTimeZone(basic.startDate, appTimeZone, 'yyyy')
  const attribution = formatAttribution(client.basic.name, agency?.basic.name)
  const content = (
    <div className={cn(styles.cols())}>
      <div className={cn(styles.assetCol())}>
        <div className={cn(styles.assetCell())}>
          <div className={cn(styles.assetFrame())}>
            <Asset className={cn(styles.img())} asset={asset} />
          </div>
        </div>
      </div>
      <div className={cn(styles.contentCol())}>
        <div className={cn(styles.introCell())}>
          <div className={cn(styles.subtitle())}>
            <p>{basic.role}</p>
            <p>{projectYear}</p>
          </div>
          <div className={cn(styles.title())}>
            <h3 className={cn(styles.titleText())}>
              <Ticker>{basic.title}</Ticker>
            </h3>
          </div>
          <div className={cn(styles.desc())}>{basic.subtitle}</div>
        </div>
        <div className={cn(styles.clientCell())}>
          <Ticker>{attribution}</Ticker>
        </div>
        {!!extended?.duties && (
          <div className={cn(styles.dutiesCell())}>
            {extended?.duties?.map((duty, index) => {
              const key = `${project.id}-duty-${index}`
              return <Badge key={key}>{duty}</Badge>
            })}
          </div>
        )}
      </div>
    </div>
  )

  // jsx
  if (href) {
    return (
      <Link
        ref={ref as ComponentProps<typeof Link>['ref']}
        className={cn(styles.root({ className }))}
        href={href}
        {...rest}
      >
        {content}
      </Link>
    )
  }
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      {content}
    </div>
  )
})
Project.displayName = 'Project'

export { Project }
export type { ProjectProps, ProjectRef }
