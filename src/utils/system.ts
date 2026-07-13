import type { Metadata } from 'next'
import { appdata, defaultMetadata, defaultOgImage, type OgImage } from '@/constants/system'

type CreateMetadataOptions = {
  title: string
  description: string
  path?: string
  image?: OgImage
  robots?: Metadata['robots']
}

/**
 * Builds a full per-route Metadata object, inheriting the root {@link defaultMetadata} defaults
 * (icons, `metadataBase`) and overriding title, description, canonical URL, and OG/Twitter images.
 *
 * @param options.title - Page title, used for the tab, Open Graph, and Twitter.
 * @param options.description - Page description, shared across the meta, OG, and Twitter tags.
 * @param options.path - Route path appended to the site URL for the canonical link (e.g. `/works`).
 * @param options.image - Open Graph / Twitter image; defaults to the site preview image.
 * @param options.robots - Robots directives; omit to inherit the root defaults (indexable).
 * @returns A Next.js Metadata object for the route.
 */
const createMetadata = ({
  title,
  description,
  path = '',
  image = defaultOgImage,
  robots
}: CreateMetadataOptions): Metadata => {
  const canonical = `${appdata.url}${path}`
  return {
    ...defaultMetadata,
    title,
    description,
    alternates: { canonical },
    ...(robots ? { robots } : {}),
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url: canonical,
      images: [image]
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
      images: [{ ...image, alt: title }]
    }
  }
}

export { createMetadata }
export type { CreateMetadataOptions }
