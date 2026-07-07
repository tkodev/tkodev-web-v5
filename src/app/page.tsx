import { BlockIntro } from '@/components/organisms/block-intro'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'

const HomePage = () => {
  // jsx
  return (
    <Main>
      <Section>
        <BlockIntro />
      </Section>
    </Main>
  )
}

export default HomePage
