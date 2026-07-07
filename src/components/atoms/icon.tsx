import { FC, HTMLAttributes } from 'react'
import { SvgComponent } from '@/types/system'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('', {
    variants: {
      size: {
        xs: 'size-4',
        sm: 'size-6',
        md: 'size-8',
        lg: 'size-10',
        xl: 'size-16'
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
