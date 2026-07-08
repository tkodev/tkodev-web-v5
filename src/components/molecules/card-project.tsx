import Image from 'next/image'
import { forwardRef, type HTMLAttributes } from 'react'
import { formatInTimeZone } from 'date-fns-tz'
import { clientById } from '@/constants/client'
import { appTimeZone } from '@/constants/date'
import { ProjectEntry } from '@/types/career'
import { formatAttribution } from '@/utils/string'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { Badge } from '../atoms/badge'

const styles = {
  root: cva('@container rounded-sm border'),
  cols: cva('flex size-full flex-col @3xl:flex-row'),

  imageCol: cva('@3xl:flex @3xl:w-1/2 @3xl:items-center'),
  contentCol: cva('flex flex-col @3xl:w-1/2 @3xl:border-l'),

  imageCell: cva('size-full p-4'),
  introCell: cva('flex flex-col gap-2 border-t p-4 @3xl:border-t-0'),
  clientCell: cva(['border-t p-4', 'text-muted-foreground text-e4 font-expressive uppercase']),
  dutiesCell: cva('flex flex-wrap gap-2 border-t p-4'),

  subtitle: cva([
    'flex justify-between gap-4',
    'text-muted-foreground text-e4 font-expressive uppercase'
  ]),
  title: cva(['flex justify-between gap-4', 'text-h4 font-heading uppercase']),
  desc: cva('')
}

type CardProjectRef = HTMLDivElement
type CardProjectProps = HTMLAttributes<CardProjectRef> &
  VariantProps<typeof styles.root> & {
    project: ProjectEntry
  }

const CardProject = forwardRef<CardProjectRef, CardProjectProps>((props, ref) => {
  // props
  const { project, className, ...rest } = props
  const { basic, extended, media, parents } = project

  // render vars
  const image = media?.assets?.[0]
  const client = clientById[parents.clientId] ?? undefined
  const agency = parents?.agencyId ? clientById[parents?.agencyId] : undefined
  const projectYear = formatInTimeZone(basic.startDate, appTimeZone, 'yyyy')
  const attribution = formatAttribution(client.basic.name, agency?.basic.name)

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.cols())}>
        <div className={cn(styles.imageCol())}>
          <div className={cn(styles.imageCell())}>
            {!!image && (
              <Image alt={image.alt} height={image.height} src={image.src} width={image.width} />
            )}
          </div>
        </div>
        <div className={cn(styles.contentCol())}>
          <div className={cn(styles.introCell())}>
            <div className={cn(styles.subtitle())}>
              <p>{basic.role}</p>
              <p>{projectYear}</p>
            </div>
            <div className={cn(styles.title())}>
              <h3>{basic.title}</h3>
            </div>
            <div className={cn(styles.desc())}>{basic.subtitle}</div>
          </div>
          <div className={cn(styles.clientCell())}>{attribution}</div>
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
    </div>
  )
})
CardProject.displayName = 'CardProject'

export { CardProject }
export type { CardProjectProps, CardProjectRef }
