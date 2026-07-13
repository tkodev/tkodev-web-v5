import type { Metadata } from 'next'

const appData = {
  title: 'Tony Ko / Portfolio',
  siteName: 'tko.dev',
  description:
    "I'm Tony Ko, a Staff Software Engineer with a proven track record of delivering high-performing, secure, and accessible software solutions for top North American brands, including Aeroplan, Air Miles, and Toyota. My expertise spans web,  mobile, browser extensions, and embedded systems, backed by a strong foundation in  TypeScript, Lua, and C. Passionate about fostering team growth, I blend technical excellence with mentorship to lead impactful projects that drive innovation and achieve business goals",
  url: 'https://tko.dev'
}

const previewImage = {
  url: `${appData.url}/images/favicons/preview.png`,
  width: 1200,
  height: 630
}

type OgImage = {
  url: string
  width: number
  height: number
}

type CreateMetadataInput = {
  title: string
  description: string
  path?: string
  image?: OgImage
}

// builds a full per-route metadata block (canonical + og + twitter) from the root defaults
const createMetadata = (input: CreateMetadataInput): Metadata => {
  const { title, description, path = '', image = previewImage } = input
  const canonical = `${appData.url}${path}`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: appData.siteName,
      images: [image],
      locale: 'en_CA',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ ...image, alt: title }]
    }
  }
}

const metaData: Metadata = {
  metadataBase: new URL(appData.url),
  ...createMetadata({ title: appData.title, description: appData.description }),
  icons: {
    icon: [
      { url: '/images/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicons/favicon.ico' }
    ],
    apple: [{ url: '/images/favicons/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'mask-icon', url: '/images/favicons/safari-pinned-tab.svg' }]
  }
}

export { appData, createMetadata, metaData }
export type { OgImage }
