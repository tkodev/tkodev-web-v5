import { FC, type HTMLAttributes } from 'react'
import { type SvgComponent } from '@/types/system'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('', {
    variants: {
      size: {
        xs: 'size-2',
        sm: 'size-4',
        md: 'size-6',
        lg: 'size-8',
        xl: 'size-10'
      }
    },
    defaultVariants: {
      size: 'sm'
    }
  })
}

type IconProps = HTMLAttributes<SVGElement> &
  VariantProps<typeof styles.root> & {
    icon?: SvgComponent | FC
    alt?: string
  }

const Icon: FC<IconProps> = (props) => {
  const { icon: Icon, alt, size, className, ...rest } = props

  if (!Icon) return null

  return <Icon className={cn(styles.root({ size, className }))} title={alt} {...rest} />
}

export { Icon }
export type { IconProps }
