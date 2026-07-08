import Link from 'next/link'
import { forwardRef, type HTMLAttributes } from 'react'
import { CardBio, type CardBioProps } from '@/components/molecules/card-bio'
import {
  CardCompetencies,
  type CardCompetenciesProps
} from '@/components/molecules/card-competencies'
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

type BlockOverviewRef = HTMLDivElement
type BlockOverviewProps = HTMLAttributes<BlockOverviewRef> &
  VariantProps<typeof styles.root> & {
    boardProps: Omit<BoardProps, 'title' | 'cta'>
    bioProps: Omit<CardBioProps, 'cta'>
    bioCtaProps: {
      href: string
      label: string
      icon: SvgComponent
    }
    competenciesProps: CardCompetenciesProps
  }

const BlockOverview = forwardRef<BlockOverviewRef, BlockOverviewProps>((props, ref) => {
  // props
  const { boardProps, bioProps, bioCtaProps, competenciesProps, className, ...rest } = props
  const { href, label, icon } = bioCtaProps

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Board {...boardProps} className={cn(styles.board())}>
        <CardBio
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
        <CardCompetencies {...competenciesProps} />
      </Board>
    </div>
  )
})
BlockOverview.displayName = 'BlockOverview'

export { BlockOverview }
export type { BlockOverviewProps, BlockOverviewRef }
