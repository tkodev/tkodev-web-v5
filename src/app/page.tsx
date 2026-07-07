import { BlockIntro } from '@/components/organisms/block-intro'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'

const HomePage = () => {
  // jsx
  return (
    <Main>
      <Section>
        <BlockIntro
          cta="Explore"
          index="1.0"
          status="[ Spec Validated ]"
          substatus="[ Deploy Sequenced ]"
          subtitle="// Design System / V5"
          title="/ Intro //"
        />
      </Section>
    </Main>
  )
}

export default HomePage
