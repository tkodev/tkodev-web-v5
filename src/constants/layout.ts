import { SunMoonIcon, UserStarIcon } from 'lucide-react'
import { NavItem } from '@/types/layout'

const headerItems: NavItem[] = [
  {
    intent: 'url',
    href: '/experience',
    name: 'Experience',
    variant: 'link',
    isVisible: true
  },
  {
    intent: 'url',
    href: '/works',
    name: 'Works',
    variant: 'link',
    isVisible: true
  },
  {
    intent: 'url',
    href: '/about',
    name: 'About',
    variant: 'link',
    isVisible: true
  },
  {
    intent: 'url',
    href: '/contact',
    name: 'Contact',
    variant: 'link',
    isVisible: true
  }
]

const footerItems: NavItem[] = [
  {
    intent: 'music',
    href: 'https://uppbeat.io/track/justin-marshall-elias/an-empty-bus',
    icon: UserStarIcon,
    variant: 'link',
    isVisible: true
  },
  {
    intent: 'theme',
    icon: SunMoonIcon,
    variant: 'link',
    isVisible: true
  }
]

export { footerItems, headerItems }
