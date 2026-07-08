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

type LogoRef = HTMLImageElement
type LogoProps = HTMLAttributes<LogoRef> & VariantProps<typeof styles.root>

const Logo = forwardRef<LogoRef, LogoProps>((props, ref) => {
  const { className, ...rest } = props

  const imageProps = {
    width: 192,
    height: 64
  }
  const altString = 'Tko.dev Logo'

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Image
        className={cn(styles.img({ variant: 'light' }))}
        loading="eager"
        alt={altString}
        src="/images/site/logo-light.svg"
        {...imageProps}
      />
      <Image
        className={cn(styles.img({ variant: 'dark' }))}
        loading="eager"
        alt={altString}
        src="/images/site/logo-dark.svg"
        {...imageProps}
      />
      <Image
        className={cn(styles.baseImg())}
        loading="eager"
        alt={altString}
        src="/images/site/logo-dark.svg"
        {...imageProps}
      />
    </div>
  )
})
Logo.displayName = 'Logo'

export { Logo }
export type { LogoProps, LogoRef }
