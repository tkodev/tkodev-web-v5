import {
  BriefcaseIcon,
  ContactIcon,
  ExternalLinkIcon,
  GitBranchIcon,
  IdCardIcon,
  MailIcon,
  Palette
} from 'lucide-react'
import { SectionContact } from '@/components/organisms/section-contact'
import { SectionHomeHero } from '@/components/organisms/section-home-hero'
import { SectionOverview } from '@/components/organisms/section-overview'
import { SectionProjectsPreview } from '@/components/organisms/section-projects-preview'
import { SectionStatement } from '@/components/organisms/section-statement'
import { SectionTestimonials } from '@/components/organisms/section-testimonials'
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
        <SectionHomeHero
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
        <SectionProjectsPreview
          ctaProps={{ href: '/works', icon: Palette, label: 'View All Works' }}
          projectEntries={projectEntriesByCategory['featured']}
          boardProps={{
            subtitle: '1.1 / Works //',
            title: 'Selected Works'
          }}
        />
      </Section>
      <Section id="statement" height="auto" width="sm">
        <SectionStatement
          label="// Statement //"
          statement={'Good engineering is invisible. \nGood design is why you stay.'}
        />
      </Section>
      <Section id="overview" height="auto" width="md">
        <SectionOverview
          bioCtaProps={{ href: '/experience', icon: BriefcaseIcon, label: 'View Experience' }}
          boardProps={{ subtitle: '1.2 / Overview //' }}
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
        <SectionTestimonials
          testimonialEntries={tonyTestimonialEntries}
          boardProps={{
            subtitle: '1.3 / Testimonials //',
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
        <SectionContact
          boardProps={{ subtitle: '1.4 / Contact //' }}
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
