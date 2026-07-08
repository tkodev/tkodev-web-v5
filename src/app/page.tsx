import { Palette } from 'lucide-react'
import { BlockIntro } from '@/components/organisms/block-intro'
import { BlockSelectedWorks } from '@/components/organisms/block-selected-works'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'
import { projectEntriesByCategory } from '@/constants/projects'

const HomePage = () => {
  // jsx
  return (
    <Main>
      <Section id="intro">
        <BlockIntro
          hudProps={{
            title: '1.0 / Intro //',
            subtitle: '// Design System / V5',
            accent1: '[ Spec Validated ]',
            accent2: '[ Deploy Sequenced ]',
            cta: 'Explore'
          }}
          introProps={{
            title: 'Staff Software Engineer',
            subtitle: 'Tony Ko',
            desc: 'Bridging the gap between ux and execution. \nEngineer by craft. Designer by instinct.'
          }}
        />
      </Section>
      <Section id="selected-works" height="auto" width="lg">
        <BlockSelectedWorks
          ctaProps={{ href: '/works', icon: Palette, label: 'View All Works' }}
          projectEntries={projectEntriesByCategory['featured']}
          boardProps={{
            subtitle: '1.1 / Works //',
            title: 'Selected Works'
          }}
        />
      </Section>
    </Main>
  )
}

export default HomePage
