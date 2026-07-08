import { type Metadata } from 'next'
import { ContactIcon, GitBranchIcon, IdCardIcon, MailIcon, Palette } from 'lucide-react'
import { SectionContact } from '@/components/organisms/section-contact'
import { SectionProjectsArchived } from '@/components/organisms/section-projects-archived'
import { SectionProjectsFeatured } from '@/components/organisms/section-projects-featured'
import { SectionProjectsHero } from '@/components/organisms/section-projects-hero'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'
import { personEntryById } from '@/constants/profile'
import { projectEntries, projectEntriesByCategory } from '@/constants/projects'
import { shuffle } from '@/utils/array'
import { getProjectAsset } from '@/utils/career'

const metadata: Metadata = {
  title: 'Tony Ko / Works',
  description:
    'Verified builds across loyalty, fintech, industrial, and retail sectors. 25+ deployments. No simulations.'
}

const WorksPage = () => {
  // render vars
  const tony = personEntryById['tony']
  const archiveEntries = projectEntries.filter(
    (projectEntry) => projectEntry.basic.category !== 'featured'
  )
  const tileAssets = shuffle(
    projectEntries.map((projectEntry) => getProjectAsset(projectEntry)).filter((asset) => !!asset)
  ).slice(0, 20)

  // jsx
  return (
    <Main>
      <Section id="works-intro">
        <SectionProjectsHero
          tileAssets={tileAssets}
          hudProps={{
            title: '2.0 / Works //',
            subtitle: '// Design System / V5',
            accent1: '[ Build Manifest ]',
            accent2: '[ Systems Nominal ]',
            cta: 'Review Assets'
          }}
          introProps={{
            title: 'Assets Deployed',
            subtitle: 'Signal Acquired',
            desc: 'Verified builds across loyalty, fintech, industrial, \nand retail sectors. 25+ deployments.'
          }}
        />
      </Section>
      <Section id="featured" height="auto" width="lg">
        <SectionProjectsFeatured
          ctaProps={{ href: '/works#archive', icon: Palette, label: 'View All Works' }}
          projectEntries={projectEntriesByCategory['featured']}
          boardProps={{
            subtitle: '2.1 / Featured //',
            title: 'Selected Works'
          }}
        />
      </Section>
      <Section id="archive" height="auto" width="lg">
        <SectionProjectsArchived
          projectEntries={archiveEntries}
          boardProps={{
            subtitle: '2.2 / Archive //',
            title: 'More Works'
          }}
        />
      </Section>
      <Section id="contact" height="auto" width="lg">
        <SectionContact
          boardProps={{ subtitle: '2.3 / Contact //' }}
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

export default WorksPage
export { metadata }
