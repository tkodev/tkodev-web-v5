import { ButtonProps } from '@/components/atoms/button'
import { SvgComponent } from '@/types/system'

/** One entry in the site's navigation, rendered as a button that carries its intent. */
type NavEntry = {
  /** What activating the entry does: follow a URL, toggle theme, toggle music, or hold space. */
  intent: 'url' | 'theme' | 'music' | 'spacer'
  href?: string
  name?: string
  icon?: SvgComponent
  /** Whether the entry shows in the current nav context. */
  isVisible: boolean
} & ButtonProps

/** A single media asset with the real dimensions and alt text the data standard requires. */
type AssetEntry = {
  type: 'image' | 'video'
  /** Site-absolute path under `public/`. */
  src: string
  width: number
  height: number
  alt: string
}

/** An annotated dossier figure: one asset paired with the copy explaining the work behind it. */
type StoryEntry = {
  id: string
  asset: AssetEntry
  title: string
  body: string
}

export type { AssetEntry, NavEntry, StoryEntry }
