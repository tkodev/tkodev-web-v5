import Link from 'next/link'
import { forwardRef, type HTMLAttributes } from 'react'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { BlockTile } from '@/components/molecules/block-tile'
import { BlockTitle, type BlockTitleProps } from '@/components/molecules/block-title'
import { type AssetEntry } from '@/types/layout'
import { type SvgComponent } from '@/types/system'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'relative overflow-visible']),
  tile: cva(['size-full', 'absolute top-1/2 left-1/2 -translate-1/2', 'opacity-15']),
  content: cva(['relative size-full', 'flex flex-col justify-between gap-8']),
  nav: cva('px-6 py-4')
}

type SectionProjectHeroRef = HTMLDivElement
type SectionProjectHeroProps = HTMLAttributes<SectionProjectHeroRef> &
  VariantProps<typeof styles.root> & {
    ctaProps: {
      href: string
      label: string
      icon: SvgComponent
    }
    titleProps: BlockTitleProps
    asset: AssetEntry
  }

const SectionProjectHero = forwardRef<SectionProjectHeroRef, SectionProjectHeroProps>(
  (props, ref) => {
    // props
    const { ctaProps, titleProps, asset, className, ...rest } = props
    const { href, label, icon } = ctaProps

    // jsx
    return (
      <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
        <BlockTile className={cn(styles.tile())} asset={asset} />
        <div className={cn(styles.content())}>
          <div className={cn(styles.nav())}>
            <Button variant="outline" asChild>
              <Link href={href}>
                <Icon icon={icon} size="sm" />
                {label}
              </Link>
            </Button>
          </div>
          <BlockTitle {...titleProps} />
        </div>
      </div>
    )
  }
)
SectionProjectHero.displayName = 'SectionProjectHero'

export { SectionProjectHero }
export type { SectionProjectHeroProps, SectionProjectHeroRef }
