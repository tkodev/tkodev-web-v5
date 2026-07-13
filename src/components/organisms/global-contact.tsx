import { forwardRef, type HTMLAttributes } from 'react'
import { Reveal } from '@/components/atoms/reveal'
import { Board, type BoardProps } from '@/components/molecules/board'
import { Contact, type ChannelEntry } from '@/components/molecules/contact'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  // scroll-mt clears the fixed header (h-18) when the footer contact control jumps here
  root: cva(['size-full scroll-mt-20', 'flex items-center justify-center'])
}

type GlobalContactRef = HTMLDivElement
type GlobalContactProps = HTMLAttributes<GlobalContactRef> &
  VariantProps<typeof styles.root> & {
    boardProps: Omit<BoardProps, 'title' | 'cta'>
    title: string
    desc: string
    channelEntries: ChannelEntry[]
  }

const GlobalContact = forwardRef<GlobalContactRef, GlobalContactProps>((props, ref) => {
  // props
  const { boardProps, title, desc, channelEntries, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} id="contact" className={cn(styles.root({ className }))} {...rest}>
      <Reveal className="w-full">
        <Board {...boardProps}>
          <Contact channelEntries={channelEntries} desc={desc} title={title} />
        </Board>
      </Reveal>
    </div>
  )
})
GlobalContact.displayName = 'GlobalContact'

export { GlobalContact }
export type { ChannelEntry, GlobalContactProps, GlobalContactRef }
