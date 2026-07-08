import Image from 'next/image'
import { type FC, type HTMLAttributes } from 'react'
import { type AssetEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('')
}

type AssetProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof styles.root> & {
    asset: AssetEntry
    priority?: boolean
  }

const Asset: FC<AssetProps> = (props) => {
  // props
  const { asset, priority, className, ...rest } = props
  const { type, src, width, height, alt } = asset

  // jsx
  if (type === 'video') {
    return (
      <video
        className={cn(styles.root({ className }))}
        aria-label={alt}
        preload="metadata"
        height={height}
        src={src}
        width={width}
        autoPlay
        loop
        muted
        playsInline
        {...rest}
      />
    )
  }
  return (
    <Image
      className={cn(styles.root({ className }))}
      priority={priority}
      alt={alt}
      height={height}
      src={src}
      width={width}
      {...rest}
    />
  )
}

export { Asset }
export type { AssetProps }
