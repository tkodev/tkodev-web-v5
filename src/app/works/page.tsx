import { ContactIcon, GitBranchIcon, IdCardIcon, MailIcon, Palette } from 'lucide-react'
import { GlobalContact } from '@/components/organisms/global-contact'
import { ProjectsArchived } from '@/components/organisms/projects-archived'
import { ProjectsFeatured } from '@/components/organisms/projects-featured'
import { ProjectsHero } from '@/components/organisms/projects-hero'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'
import { placeholderAsset } from '@/constants/layout'
import { personEntryById } from '@/constants/profile'
import { projectEntries, projectEntriesByCategory } from '@/constants/projects'
import { appdata } from '@/constants/system'
import { shuffle } from '@/utils/array'
import { getProjectMainThumb } from '@/utils/career'
import { createMetadata } from '@/utils/system'

const metadata = createMetadata({
  title: 'Tony Ko / Works',
  description:
    'Verified builds across loyalty, fintech, industrial, and retail sectors. 30+ deployments. No simulations.',
  path: '/works',
  image: { url: `${appdata.url}/images/ograph/works.png`, width: 1200, height: 630 }
})

const WorksPage = () => {
  // render vars
  const tony = personEntryById['tony']
  const archiveEntries = projectEntries.filter(
    (projectEntry) => projectEntry.basic.category !== 'featured'
  )
  const tileAssets = shuffle(
    projectEntries
      .map((projectEntry) => getProjectMainThumb(projectEntry))
      .filter((asset) => asset.src !== placeholderAsset.src)
  ).slice(0, 21)

  // jsx
  return (
    <Main>
      <Section id="works-intro">
        <ProjectsHero
          tileAssets={tileAssets}
          hudProps={{
            title: 'W.0 / Works //',
            subtitle: '// Asset Index',
            accent1: '[ Build Manifest ]',
            accent2: '[ Systems Nominal ]',
            cta: 'Review Assets'
          }}
          introProps={{
            title: 'Assets Deployed',
            subtitle: 'Signal Acquired',
            desc: 'Verified builds across loyalty, fintech, industrial, \nand retail sectors. 30+ deployments.'
          }}
        />
      </Section>
      <Section id="featured" height="auto" width="lg">
        <ProjectsFeatured
          ctaProps={{ href: '/works#archive', icon: Palette, label: 'View All Works' }}
          projectEntries={projectEntriesByCategory['featured']}
          boardProps={{
            subtitle: 'W.1 / Featured //',
            title: 'Selected Works'
          }}
        />
      </Section>
      <Section id="archive" height="auto" width="lg">
        <ProjectsArchived
          projectEntries={archiveEntries}
          boardProps={{
            subtitle: 'W.2 / Archive //',
            title: 'More Works'
          }}
        />
      </Section>
      <Section id="contact" height="auto" width="lg">
        <GlobalContact
          boardProps={{ subtitle: 'W.3 / Contact //' }}
          title="Get in Touch"
          channelEntries={[
            { href: `mailto:${tony.extended?.email}`, icon: MailIcon, label: 'tony@tko.dev' },
            { href: tony.extended?.linkedin ?? '#', icon: ContactIcon, label: 'LinkedIn' },
            { href: tony.extended?.resume ?? '#', icon: IdCardIcon, label: 'Resume' },
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
