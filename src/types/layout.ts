import { ButtonProps } from '@/components/atoms/button'
import { SvgComponent } from '@/types/system'

type NavEntry = {
  intent: 'url' | 'theme' | 'music' | 'spacer'
  href?: string
  name?: string
  icon?: SvgComponent
  isVisible: boolean
} & ButtonProps

type AssetEntry = {
  type: 'image' | 'video'
  src: string
  width: number
  height: number
  alt: string
}

type StoryEntry = {
  id: string
  asset: AssetEntry
  title: string
  body: string
}

export type { AssetEntry, NavEntry, StoryEntry }
