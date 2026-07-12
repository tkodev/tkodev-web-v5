import { forwardRef, type HTMLAttributes } from 'react'
import { Story, type StoryProps } from '@/components/molecules/story'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['size-full', 'flex items-center justify-center'])
}

type ProjectStoryRef = HTMLDivElement
type ProjectStoryProps = HTMLAttributes<ProjectStoryRef> &
  VariantProps<typeof styles.root> & {
    storyProps: StoryProps
  }

const ProjectStory = forwardRef<ProjectStoryRef, ProjectStoryProps>((props, ref) => {
  // props
  const { storyProps, className, ...rest } = props

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Story {...storyProps} />
    </div>
  )
})
ProjectStory.displayName = 'ProjectStory'

export { ProjectStory }
export type { ProjectStoryProps, ProjectStoryRef }
