import Link from 'next/link'
import { forwardRef, type HTMLAttributes } from 'react'
import { Marquee } from '@/components/atoms/marquee'
import { CardTestimonial } from '@/components/molecules/card-testimonial'
import { type TestimonialEntry } from '@/types/career'
import { type SvgComponent } from '@/types/system'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'
import { Board, type BoardProps } from '../molecules/board'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center']),
  board: cva('flex flex-col gap-8'),
  card: cva('w-100 shrink-0')
}

type BlockTestimonialsRef = HTMLDivElement
type BlockTestimonialsProps = HTMLAttributes<BlockTestimonialsRef> &
  VariantProps<typeof styles.root> & {
    boardProps: Omit<BoardProps, 'cta' | 'ctaPlacement'>
    ctaProps: {
      href: string
      label: string
      icon: SvgComponent
    }
    testimonialEntries: TestimonialEntry[]
  }

const BlockTestimonials = forwardRef<BlockTestimonialsRef, BlockTestimonialsProps>((props, ref) => {
  // props
  const { boardProps, ctaProps, testimonialEntries, className, ...rest } = props
  const { href, label, icon } = ctaProps

  // render vars
  const target = href.startsWith('/') ? undefined : '_blank'
  const midpoint = Math.ceil(testimonialEntries.length / 2)
  const rows = [testimonialEntries.slice(0, midpoint), testimonialEntries.slice(midpoint)].filter(
    (row) => row.length > 0
  )

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Board
        {...boardProps}
        className={cn(styles.board())}
        ctaPlacement="footer"
        cta={
          <Button variant="outline" asChild>
            <Link href={href} target={target}>
              <Icon icon={icon} size="sm" />
              {label}
            </Link>
          </Button>
        }
      >
        {rows.map((row, rowIndex) => {
          const key = `testimonial-row-${rowIndex}`
          return (
            <Marquee key={key} direction={rowIndex % 2 === 0 ? 'left' : 'right'}>
              {row.map((testimonialEntry) => {
                const cardKey = `testimonial-${testimonialEntry.id}-card`
                return (
                  <CardTestimonial
                    key={cardKey}
                    className={cn(styles.card())}
                    testimonial={testimonialEntry}
                  />
                )
              })}
            </Marquee>
          )
        })}
      </Board>
    </div>
  )
})
BlockTestimonials.displayName = 'BlockTestimonials'

export { BlockTestimonials }
export type { BlockTestimonialsProps, BlockTestimonialsRef }
