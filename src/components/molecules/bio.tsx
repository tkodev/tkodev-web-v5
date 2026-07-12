import Image from 'next/image'
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { Card } from '@/components/atoms/card'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['relative flex flex-col justify-between gap-24 overflow-hidden p-4']),
  photo: cva('absolute inset-0 size-full object-cover'),
  scrim: cva('from-card/0 to-card absolute inset-0 bg-linear-to-b'),
  title: cva(['relative', 'text-h4 font-heading uppercase']),
  content: cva('relative flex flex-col items-start gap-4'),
  desc: cva('')
}

type BioRef = HTMLDivElement
type BioProps = HTMLAttributes<BioRef> &
  VariantProps<typeof styles.root> & {
    title: string
    desc: string
    photo?: AssetEntry
    cta?: ReactNode
  }

const Bio = forwardRef<BioRef, BioProps>((props, ref) => {
  // props
  const { title, desc, photo, cta, className, ...rest } = props

  // jsx
  return (
    <Card ref={ref} className={cn(styles.root({ className }))} {...rest}>
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
    </Card>
  )
})
Bio.displayName = 'Bio'

export { Bio }
export type { BioProps, BioRef }
