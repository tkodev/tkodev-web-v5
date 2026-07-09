import Image from 'next/image'
import { forwardRef, type HTMLAttributes } from 'react'
import { Card } from '@/components/atoms/card'
import { personEntryById } from '@/constants/profile'
import { type TestimonialEntry } from '@/types/career'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col'),

  quoteCell: cva('grow border-b p-4'),
  quote: cva('text-muted-foreground line-clamp-9 text-sm whitespace-pre-line italic'),

  footerCell: cva('flex items-center gap-4 px-4 py-4'),
  photo: cva('size-12 rounded-sm object-cover'),
  fallback: cva([
    'flex size-12 shrink-0 items-center justify-center rounded-sm',
    'bg-muted text-muted-foreground text-e4 font-expressive uppercase'
  ]),
  meta: cva('flex min-w-0 flex-col gap-2'),
  role: cva('text-e4 font-expressive text-muted-foreground uppercase'),
  name: cva('text-h5 font-heading uppercase')
}

type TestimonialRef = HTMLDivElement
type TestimonialProps = HTMLAttributes<TestimonialRef> &
  VariantProps<typeof styles.root> & {
    testimonial: TestimonialEntry
  }

const Testimonial = forwardRef<TestimonialRef, TestimonialProps>((props, ref) => {
  // props
  const { testimonial, className, ...rest } = props
  const { basic, parents } = testimonial

  // render vars
  const author = personEntryById[parents.authorId] ?? undefined
  const photo = author?.media?.thumb ?? author?.media?.photo
  const initials = author?.basic.name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 3)
    .join('')

  // jsx
  return (
    <Card ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.quoteCell())}>
        <blockquote className={cn(styles.quote())}>&ldquo;{basic.desc}&rdquo;</blockquote>
      </div>
      <div className={cn(styles.footerCell())}>
        {photo ? (
          <Image
            className={cn(styles.photo())}
            alt={photo.alt}
            height={photo.height}
            src={photo.src}
            width={photo.width}
          />
        ) : (
          <div className={cn(styles.fallback())} aria-hidden>
            {initials}
          </div>
        )}
        <div className={cn(styles.meta())}>
          <p className={cn(styles.role())}>{author?.basic.role}</p>
          <p className={cn(styles.name())}>{author?.basic.name}</p>
        </div>
      </div>
    </Card>
  )
})
Testimonial.displayName = 'Testimonial'

export { Testimonial }
export type { TestimonialProps, TestimonialRef }
