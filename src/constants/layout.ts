import { SunMoonIcon, UserStarIcon } from 'lucide-react'
import { AssetEntry, NavEntry } from '@/types/layout'

/** Fallback image for entries without their own media. */
const placeholderAsset: AssetEntry = {
  type: 'image',
  src: '/images/placeholder/placeholder.png',
  width: 640,
  height: 360,
  alt: 'Tko.dev'
}

/** Primary navigation links rendered in the header. */
const headerEntries: NavEntry[] = [
  {
    intent: 'url',
    href: '/works',
    name: 'Works',
    variant: 'link',
    isVisible: true
  },
  {
    intent: 'url',
    href: '/experience',
    name: 'Experience',
    variant: 'link',
    isVisible: true
  },
  {
    intent: 'url',
    href: '/about',
    name: 'About',
    variant: 'link',
    isVisible: true
  }
]

/** Utility controls rendered in the footer (music, theme). */
const footerEntries: NavEntry[] = [
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

export { footerEntries, headerEntries, placeholderAsset }
