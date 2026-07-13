import type { Metadata } from 'next'

/** Core site identity: title, name, description, and canonical URL. */
const appdata = {
  title: 'Tony Ko / Portfolio',
  siteName: 'tko.dev',
  description:
    "I'm Tony Ko, a Staff Software Engineer with a proven track record of delivering high-performing, secure, and accessible software solutions for top North American brands, including Aeroplan, Air Miles, and Toyota. My expertise spans web,  mobile, browser extensions, and embedded systems, backed by a strong foundation in  TypeScript, Lua, and C. Passionate about fostering team growth, I blend technical excellence with mentorship to lead impactful projects that drive innovation and achieve business goals",
  url: 'https://tko.dev'
}

/** An Open Graph image: its absolute URL and pixel dimensions. */
type OgImage = {
  url: string
  width: number
  height: number
}

/** The site-wide Open Graph and Twitter card image. */
const defaultOgImage: OgImage = {
  url: `${appdata.url}/images/favicons/preview.png`,
  width: 1200,
  height: 630
}

/** Root Next.js metadata: title, description, Open Graph, Twitter, icons. */
const defaultMetadata: Metadata = {
  metadataBase: new URL(appdata.url),
  title: appdata.title,
  description: appdata.description,
  alternates: { canonical: appdata.url },
  openGraph: {
    title: appdata.title,
    description: appdata.description,
    url: appdata.url,
    siteName: appdata.siteName,
    images: [defaultOgImage],
    locale: 'en_CA',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: appdata.title,
    description: appdata.description,
    images: [{ ...defaultOgImage, alt: appdata.title }]
  },
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

/** Easter egg: a briefing left in the devtools console for the curious. */
const consoleSignal = {
  stamp: ' SIGNAL ACQUIRED ',
  message: 'You found the console. If you build things worth annotating, so do I.',
  prompt: 'Open a channel'
}

export { appdata, consoleSignal, defaultMetadata, defaultOgImage }
export type { OgImage }
