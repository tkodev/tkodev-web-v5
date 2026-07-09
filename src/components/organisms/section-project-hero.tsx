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
  root: cva(['size-full', 'flex flex-col']),
  nav: cva('shrink-0 px-4 py-4'),
  tile: cva('min-h-0 grow')
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
        <div className={cn(styles.nav())}>
          <Button variant="outline" asChild>
            <Link href={href}>
              <Icon icon={icon} size="sm" />
              {label}
            </Link>
          </Button>
        </div>
        <BlockTile className={cn(styles.tile())} asset={asset} />
        <BlockTitle {...titleProps} />
      </div>
    )
  }
)
SectionProjectHero.displayName = 'SectionProjectHero'

export { SectionProjectHero }
export type { SectionProjectHeroProps, SectionProjectHeroRef }
