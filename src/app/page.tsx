import { BlockIntro } from '@/components/organisms/block-intro'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'

const HomePage = () => {
  // jsx
  return (
    <Main>
      <Section>
        <BlockIntro
          hudProps={{
            accent1: '[ Spec Validated ]',
            accent2: '[ Deploy Sequenced ]',
            build: '// Design System / V5',
            cta: 'Explore',
            index: '1.0 / Intro //'
          }}
          introProps={{
            title: 'Staff Software Engineer',
            subtitle: 'Tony Ko',
            desc: 'Bridging the gap between ux and execution. \nEngineer by craft. Designer by instinct.'
          }}
        />
      </Section>
    </Main>
  )
}

export default HomePage
