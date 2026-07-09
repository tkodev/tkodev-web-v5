import {
  BriefcaseIcon,
  ContactIcon,
  ExternalLinkIcon,
  GitBranchIcon,
  IdCardIcon,
  MailIcon,
  Palette
} from 'lucide-react'
import { GlobalContact } from '@/components/organisms/global-contact'
import { HomeHero } from '@/components/organisms/home-hero'
import { HomeOverview } from '@/components/organisms/home-overview'
import { HomeStatement } from '@/components/organisms/home-statement'
import { HomeTestimonials } from '@/components/organisms/home-testimonials'
import { ProjectsPreview } from '@/components/organisms/projects-preview'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'
import { personEntryById } from '@/constants/profile'
import { projectEntriesByCategory } from '@/constants/projects'
import { testimonialEntries } from '@/constants/testimonials'

const HomePage = () => {
  // render vars
  const tony = personEntryById['tony']
  const tonyTestimonialEntries = testimonialEntries.filter(
    (testimonialEntry) => testimonialEntry.parents.recipientId === 'tony'
  )

  // jsx
  return (
    <Main>
      <Section id="intro">
        <HomeHero
          hudProps={{
            title: '0.0 / Intro //',
            subtitle: '// Design System V5',
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
        <ProjectsPreview
          ctaProps={{ href: '/works', icon: Palette, label: 'View All Works' }}
          projectEntries={projectEntriesByCategory['featured']}
          boardProps={{
            subtitle: '0.1 / Works //',
            title: 'Selected Works'
          }}
        />
      </Section>
      <Section id="statement" height="auto" width="sm">
        <HomeStatement
          statementProps={{
            subtitle: '// Statement //',
            title: 'Good engineering is invisible. \nGood design is why you stay.'
          }}
        />
      </Section>
      <Section id="overview" height="auto" width="md">
        <HomeOverview
          bioCtaProps={{ href: '/experience', icon: BriefcaseIcon, label: 'View Experience' }}
          boardProps={{ subtitle: '0.2 / Overview //' }}
          bioProps={{
            title: 'Bio',
            desc: 'Staff Software Engineer with 9+ years shipping cross-platform systems for Telus Digital, Aeroplan, Air Miles, Toyota, and Loblaw Digital. Unique product-design-engineering career experience.',
            photo: tony.media?.photo
          }}
          competenciesProps={{
            title: 'Core Competencies',
            competencyEntries: tony.extended?.competencies ?? []
          }}
        />
      </Section>
      <Section id="testimonials" height="auto" width="lg">
        <HomeTestimonials
          testimonialEntries={tonyTestimonialEntries}
          boardProps={{
            subtitle: '0.3 / Testimonials //',
            title: 'What People Say'
          }}
          ctaProps={{
            href: 'https://www.linkedin.com/in/tkodev/details/recommendations/',
            icon: ExternalLinkIcon,
            label: 'View All Testimonials'
          }}
        />
      </Section>
      <Section id="contact" height="auto" width="lg">
        <GlobalContact
          boardProps={{ subtitle: '0.4 / Contact //' }}
          title="Get in Touch"
          channelEntries={[
            { href: `mailto:${tony.extended?.email}`, icon: MailIcon, label: 'tony@tko.dev' },
            { href: tony.extended?.linkedin ?? '#', icon: ContactIcon, label: 'LinkedIn' },
            { href: tony.extended?.resume ?? '#', icon: IdCardIcon, label: 'Resume 2026' },
            { href: tony.extended?.github ?? '#', icon: GitBranchIcon, label: 'GitHub' }
          ]}
          desc={
            "I'm based in Toronto, Canada. \nOpen to roles where engineering and product need to work closely together."
          }
        />
      </Section>
    </Main>
  )
}

export default HomePage
