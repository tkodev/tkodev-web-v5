import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'

/** A ref-forwarding SVG React component, the shape `lucide-react` and local icons export. */
type SvgComponent = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, 'ref'> & RefAttributes<SVGSVGElement>
>

/** The props an App Router page receives: route params and query, both async in Next.js 16. */
type PageProps = {
  /** Dynamic route segments, keyed by segment name. */
  params: Promise<{ [key: string]: string }>
  /** URL query string values, single or repeated per key. */
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export type { PageProps, SvgComponent }
