import Image from 'next/image'
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva([
    'bg-background/30 relative flex flex-col justify-between gap-24 overflow-hidden rounded-sm border p-4 backdrop-blur-sm'
  ]),
  photo: cva('absolute inset-0 size-full object-cover'),
  scrim: cva('from-card/0 to-card absolute inset-0 bg-linear-to-b'),
  title: cva(['relative', 'text-h4 font-heading uppercase']),
  content: cva('relative flex flex-col items-start gap-4'),
  desc: cva('')
}

type CardBioRef = HTMLDivElement
type CardBioProps = HTMLAttributes<CardBioRef> &
  VariantProps<typeof styles.root> & {
    title: string
    desc: string
    photo?: AssetEntry
    cta?: ReactNode
  }

const CardBio = forwardRef<CardBioRef, CardBioProps>((props, ref) => {
  // props
  const { title, desc, photo, cta, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      {!!photo && (
        <Image
          className={cn(styles.photo())}
          alt={photo.alt}
          height={photo.height}
          src={photo.src}
          width={photo.width}
        />
      )}
      <div className={cn(styles.scrim())} aria-hidden />
      <h3 className={cn(styles.title())}>{title}</h3>
      <div className={cn(styles.content())}>
        <p className={cn(styles.desc())}>{desc}</p>
        {cta}
      </div>
    </div>
  )
})
CardBio.displayName = 'CardBio'

export { CardBio }
export type { CardBioProps, CardBioRef }
