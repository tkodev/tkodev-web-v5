import { FC, ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Footer } from '@/components/templates/footer'
import { Header } from '@/components/templates/header'
import { Overlay } from '@/components/templates/overlay'
import { Underlay } from '@/components/templates/underlay'
import { appData, metaData } from '@/constants/system'
import { allianceNo2Font } from '@/fonts/alliance-no2'
import { geistMonoFont, geistSansFont } from '@/fonts/geist'
import { cn, cva } from '@/utils/theme'
import '@/themes/theme.css'

const styles = {
  html: cva([
    'font-body bg-background text-foreground h-full w-full',
    'text-md antialiased motion-safe:scroll-smooth'
  ]),
  body: cva(['font-body bg-background text-foreground h-full w-full', 'text-sm'])
}

type LayoutPageProps = {
  children: ReactNode
}

const LayoutPage: FC<LayoutPageProps> = (props) => {
  const { children } = props
  return (
    <html
      className={cn(styles.html())}
      data-scroll-behavior="smooth"
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={cn(
          styles.body(),
          allianceNo2Font.variable,
          geistSansFont.variable,
          geistMonoFont.variable
        )}
        suppressHydrationWarning
      >
        <Underlay />
        <Header />
        {children}
        <Footer />
        <Overlay />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export { metaData as metadata, appData as pagedata }
export default LayoutPage
