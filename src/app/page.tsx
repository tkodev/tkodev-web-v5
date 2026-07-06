import { Section } from '@/components/templates/section'
import { appName } from '@/constants/site'

const HomePage = () => {
  // jsx
  return (
    <Section size="lg">
      <h1>{appName}</h1>
    </Section>
  )
}

export default HomePage
