import localFont from 'next/font/local'

const fontAllianceNo2 = localFont({
  display: 'swap',
  src: [
    { path: './files/alliance-no2-regular.woff2', style: 'normal', weight: '400' },
    { path: './files/alliance-no2-bold.woff2', style: 'normal', weight: '700' }
  ],
  variable: '--font-alliance-no2'
})

const fontGeistSans = localFont({
  display: 'swap',
  src: './files/geist-vf.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})

const fontGeistMono = localFont({
  display: 'swap',
  src: './files/geist-mono-vf.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export { fontAllianceNo2, fontGeistMono, fontGeistSans }
