import type { Metadata } from 'next'

/** Core site identity: title, name, description, and canonical URL. */
const appdata = {
  title: 'Tony Ko / Portfolio',
  siteName: 'tko.dev',
  description:
    'Tony Ko, Staff Software Engineer and Design Engineer in Toronto. 9+ years and 30+ shipped projects across Aeroplan, Loblaw Digital, and Beyond MPD, where engineering depth meets design.',
  url: 'https://www.tko.dev'
}

/**
 * Root Next.js metadata: title, description, Open Graph, Twitter, icons. The site-wide
 * OG/Twitter image is the home surface (1200×630); other surfaces pass their own from
 * `public/images/ograph/` inline to `createMetadata`.
 */
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
    images: [{ url: `${appdata.url}/images/ograph/home.png`, width: 1200, height: 630 }],
    locale: 'en_CA',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: appdata.title,
    description: appdata.description,
    images: [
      { url: `${appdata.url}/images/ograph/home.png`, width: 1200, height: 630, alt: appdata.title }
    ]
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
  stamp: '📡 SIGNAL ACQUIRED',
  message: '📡 You found the console. If you build things worth annotating, so do I.',
  prompt: '📡 Open a channel'
}

export { appdata, consoleSignal, defaultMetadata }
