import type { Metadata } from 'next'
import { appdata, defaultMetadata, defaultOgImage, type OgImage } from '@/constants/system'

/**
 * Builds a full per-route Metadata object, inheriting the root {@link defaultMetadata} defaults
 * (icons, `metadataBase`) and overriding title, description, canonical URL, and OG/Twitter images.
 *
 * @param title - Page title, used for the tab, Open Graph, and Twitter.
 * @param description - Page description, shared across the meta, OG, and Twitter tags.
 * @param path - Route path appended to the site URL for the canonical link (e.g. `/works`).
 * @param image - Open Graph / Twitter image; defaults to the site preview image.
 * @returns A Next.js Metadata object for the route.
 */
const createMetadata = (
  title: string,
  description: string,
  path = '',
  image: OgImage = defaultOgImage
): Metadata => {
  const canonical = `${appdata.url}${path}`
  return {
    ...defaultMetadata,
    title,
    description,
    alternates: { canonical },
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
