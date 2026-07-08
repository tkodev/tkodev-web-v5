'use client'

import Image from 'next/image'
import { forwardRef, type HTMLAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('relative h-auto w-full'),
  img: cva('absolute top-0 left-0 size-full', {
    variants: {
      variant: {
        light: 'block dark:hidden',
        dark: 'hidden dark:block'
      }
    }
  }),
  baseImg: cva('h-auto w-full opacity-0')
}

type SignatureRef = HTMLImageElement
type SignatureProps = HTMLAttributes<SignatureRef> & VariantProps<typeof styles.root>

const Signature = forwardRef<SignatureRef, SignatureProps>((props, ref) => {
  const { className, ...rest } = props

  const imageProps = {
    width: 376,
    height: 176
  }
  const altString = 'Tony Ko signature'

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Image
        className={cn(styles.img({ variant: 'light' }))}
        loading="lazy"
        alt={altString}
        src="/images/site/signature-light@2x.png"
        {...imageProps}
      />
      <Image
        className={cn(styles.img({ variant: 'dark' }))}
        loading="lazy"
        alt={altString}
        src="/images/site/signature-dark@2x.png"
        {...imageProps}
      />
      <Image
        className={cn(styles.baseImg())}
        loading="lazy"
        alt={altString}
        src="/images/site/signature-dark@2x.png"
        {...imageProps}
      />
    </div>
  )
})
Signature.displayName = 'Signature'

export { Signature }
export type { SignatureProps, SignatureRef }
