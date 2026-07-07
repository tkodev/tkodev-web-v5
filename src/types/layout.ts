import { ButtonProps } from '@/components/atoms/button'
import { SvgComponent } from '@/types/system'

type NavItem = {
  intent: 'url' | 'theme' | 'music' | 'spacer'
  href?: string
  name?: string
  icon?: SvgComponent
  isVisible: boolean
} & ButtonProps

export type { NavItem }
