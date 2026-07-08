import { forwardRef, type HTMLAttributes } from 'react'
import { BlockBoard, type BlockBoardProps } from '@/components/molecules/block-board'
import { BlockContact, type ChannelEntry } from '@/components/molecules/block-contact'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center'])
}

type SectionContactRef = HTMLDivElement
type SectionContactProps = HTMLAttributes<SectionContactRef> &
  VariantProps<typeof styles.root> & {
    boardProps: Omit<BlockBoardProps, 'title' | 'cta'>
    title: string
    desc: string
    channelEntries: ChannelEntry[]
  }

const SectionContact = forwardRef<SectionContactRef, SectionContactProps>((props, ref) => {
  // props
  const { boardProps, title, desc, channelEntries, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <BlockBoard {...boardProps}>
        <BlockContact channelEntries={channelEntries} desc={desc} title={title} />
      </BlockBoard>
    </div>
  )
})
SectionContact.displayName = 'SectionContact'

export { SectionContact }
export type { ChannelEntry, SectionContactProps, SectionContactRef }
