import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { formatInTimeZone } from 'date-fns-tz'
import { ContactIcon, GitBranchIcon, IdCardIcon, MailIcon, PresentationIcon } from 'lucide-react'
import { GlobalContact } from '@/components/organisms/global-contact'
import { ProjectHero } from '@/components/organisms/project-hero'
import { ProjectNext } from '@/components/organisms/project-next'
import { ProjectStats } from '@/components/organisms/project-stats'
import { ProjectStory } from '@/components/organisms/project-story'
import { ProjectVisuals } from '@/components/organisms/project-visuals'
import { ProjectWins } from '@/components/organisms/project-wins'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'
import { clientById } from '@/constants/client'
import { appTimeZone } from '@/constants/date'
import { personEntryById } from '@/constants/profile'
import { projectEntries, projectEntryById } from '@/constants/projects'
import { appdata } from '@/constants/system'
import { type PageProps } from '@/types/system'
import { getFeaturedProjectIds, getProjectMainAsset } from '@/utils/career'
import { formatAttribution } from '@/utils/string'
import { createMetadata } from '@/utils/system'

// Only featured projects own a detail page; unknown or archive-only ids 404.
// Next requires route segment config as an inline export, so the block-export rule is waived here.
// eslint-disable-next-line no-restricted-syntax
export const dynamicParams = false

const generateStaticParams = () => {
  return getFeaturedProjectIds(projectEntries).map((workId) => ({ workId }))
}

const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const { workId } = await props.params
  const project = workId ? projectEntryById[workId] : undefined
  if (!project) return {}

  const ogAsset = getProjectMainAsset(project)
  return createMetadata({
    title: `Tony Ko / ${project.basic.title}`,
    description: project.basic.desc,
    path: `/works/${project.id}`,
    image: {
      url: `${appdata.url}${ogAsset.src}`,
      width: ogAsset.width,
      height: ogAsset.height
    }
  })
}

const WorkDetailPage = async (props: PageProps) => {
  // props
  const { workId } = await props.params

  // render vars
  const project = workId ? projectEntryById[workId] : undefined
  if (!project) notFound()
  const { basic, extended, media, parents } = project

  const tony = personEntryById['tony']
  const client = clientById[parents.clientId] ?? undefined
  const agency = parents.agencyId ? clientById[parents.agencyId] : undefined
  const attribution = formatAttribution(client.basic.name, agency?.basic.name)
  const projectYear = formatInTimeZone(basic.startDate, appTimeZone, 'yyyy')
  const teamSize = parents.staffIds?.length

  const heroAsset = getProjectMainAsset(project)
  const metaEntries = [
    { label: 'Client', value: attribution },
    { label: 'Year', value: projectYear },
    ...(teamSize ? [{ label: 'Team', value: String(teamSize) }] : [])
  ]
  const statEntries = extended?.stats ?? []
  const stories = media?.stories ?? []
  const visuals = media?.visuals ?? []
  const featuredProjectEntries = projectEntries.filter(
    (projectEntry) => projectEntry.basic.category === 'featured'
  )
  const projectIndex = featuredProjectEntries.findIndex(
    (projectEntry) => projectEntry.id === project.id
  )
  const nextProject =
    featuredProjectEntries[
      projectIndex >= 0 ? (projectIndex + 1) % featuredProjectEntries.length : 0
    ]

  // jsx
  return (
    <Main>
      <Section id="masthead" width="lg">
        <ProjectHero
          asset={heroAsset}
          logo={client?.media?.dark}
          dossierProps={{
            tagline: basic.role,
            title: basic.title,
            desc: basic.subtitle,
            badges: extended?.duties,
            metaEntries
          }}
          hudProps={{
            title: 'WD.0 / Dossier //',
            subtitle: '// Case File',
            accent1: '[ File Open ]',
            accent2: '[ Evidence Logged ]'
          }}
        />
      </Section>
      <Section id="wins" height="auto" width="md">
        <ProjectWins
          statementProps={{
            subtitle: 'WD.1 / Wins //',
            title: extended?.win ?? basic.subtitle,
            children: basic.desc
          }}
        />
      </Section>
      {statEntries.length > 0 && (
        <Section id="stats" height="auto" width="md">
          <ProjectStats statEntries={statEntries} />
        </Section>
      )}
      {stories.map((story, index) => {
        const key = `figure-${story.id}`
        return (
          <Section key={key} id={`figure-${story.id}`} height="auto" width="lg">
            <ProjectStory
              storyProps={{
                direction: index % 2 === 0 ? 'left' : 'right',
                index: `WD.${index + 2}`,
                story
              }}
            />
          </Section>
        )
      })}
      {visuals.map((asset, index) => {
        const key = `plate-${asset.src}`
        return (
          <Section key={key} id={`plate-${index + 1}`} height="auto" width="lg">
            <ProjectVisuals visualsProps={{ asset, index: `WD.${stories.length + index + 2}` }} />
          </Section>
        )
      })}
      <Section id="next" height="auto" width="lg">
        <ProjectNext
          asset={getProjectMainAsset(nextProject)}
          nextProps={{
            label: 'Next Project',
            title: nextProject.basic.title,
            ctaProps: {
              href: `/works/${nextProject.id}`,
              icon: PresentationIcon,
              label: 'View Work'
            }
          }}
        />
      </Section>
      <Section id="contact" height="auto" width="lg">
        <GlobalContact
          boardProps={{ subtitle: `WD.${stories.length + visuals.length + 2} / Contact //` }}
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

export default WorkDetailPage
export { generateMetadata, generateStaticParams }
