import Link from 'next/link'
import { forwardRef, type HTMLAttributes } from 'react'
import { Bio, type BioProps } from '@/components/molecules/bio'
import { Competencies, type CompetenciesProps } from '@/components/molecules/competencies'
import { type SvgComponent } from '@/types/system'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'
import { Board, type BoardProps } from '../molecules/board'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center']),
  board: cva('grid items-stretch gap-8 md:grid-cols-[2fr_3fr]'),
  bio: cva('aspect-square md:aspect-auto')
}

type HomeOverviewRef = HTMLDivElement
type HomeOverviewProps = HTMLAttributes<HomeOverviewRef> &
  VariantProps<typeof styles.root> & {
    boardProps: Omit<BoardProps, 'title' | 'cta'>
    bioProps: Omit<BioProps, 'cta'>
    bioCtaProps: {
      href: string
      label: string
      icon: SvgComponent
    }
    competenciesProps: CompetenciesProps
  }

const HomeOverview = forwardRef<HomeOverviewRef, HomeOverviewProps>((props, ref) => {
  // props
  const { boardProps, bioProps, bioCtaProps, competenciesProps, className, ...rest } = props
  const { href, label, icon } = bioCtaProps

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Board {...boardProps} className={cn(styles.board())}>
        <Bio
          {...bioProps}
          className={cn(styles.bio())}
          cta={
            <Button variant="outline" asChild>
              <Link href={href}>
                <Icon icon={icon} size="sm" />
                {label}
              </Link>
            </Button>
          }
        />
        <Competencies {...competenciesProps} />
      </Board>
    </div>
  )
})
HomeOverview.displayName = 'HomeOverview'

export { HomeOverview }
export type { HomeOverviewProps, HomeOverviewRef }
