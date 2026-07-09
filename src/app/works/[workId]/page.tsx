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
import { placeholderAsset } from '@/constants/layout'
import { personEntryById } from '@/constants/profile'
import { projectEntries, projectEntryById } from '@/constants/projects'
import { appData } from '@/constants/system'
import { type PageProps } from '@/types/system'
import { getProjectAsset } from '@/utils/career'
import { formatAttribution } from '@/utils/string'

const generateStaticParams = () => {
  return projectEntries.map((projectEntry) => ({ workId: projectEntry.id }))
}

const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const { workId } = await props.params
  const project = workId ? projectEntryById[workId] : undefined
  if (!project) return {}

  const ogAsset = getProjectAsset(project)
  return {
    title: `Tony Ko / ${project.basic.title}`,
    description: project.basic.desc,
    openGraph: ogAsset
      ? {
          images: [
            { url: `${appData.url}${ogAsset.src}`, width: ogAsset.width, height: ogAsset.height }
          ]
        }
      : undefined
  }
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

  const heroAsset = getProjectAsset(project) ?? placeholderAsset
  const metaEntries = [
    { label: 'Client', value: attribution },
    { label: 'Year', value: projectYear },
    ...(teamSize ? [{ label: 'Team', value: String(teamSize) }] : [])
  ]
  const statEntries = extended?.stats ?? []
  const stories = media?.stories ?? []
  const visuals = media?.visuals ?? []
  const projectIndex = projectEntries
    .filter((projectEntry) => projectEntry.basic.category === 'featured')
    .findIndex((projectEntry) => projectEntry.id === project.id)
  const nextProject = projectEntries[(projectIndex + 1) % projectEntries.length]

  // jsx
  return (
    <Main>
      <Section id="masthead" width="lg">
        <ProjectHero
          asset={heroAsset}
          dossierProps={{
            tagline: basic.role,
            title: basic.title,
            desc: basic.subtitle,
            badges: extended?.duties,
            metaEntries
          }}
          hudProps={{
            title: '1A.0 / Dossier //',
            subtitle: '// Case File',
            accent1: '[ File Open ]',
            accent2: '[ Evidence Logged ]'
          }}
        />
      </Section>
      <Section id="wins" height="auto" width="md">
        <ProjectWins
          statementProps={{
            subtitle: '// Wins //',
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
                index: `1A.${index + 1}`,
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
            <ProjectVisuals visualsProps={{ asset, index: `1A.${stories.length + index + 1}` }} />
          </Section>
        )
      })}
      <Section id="next" height="auto" width="lg">
        <ProjectNext
          asset={getProjectAsset(nextProject) ?? placeholderAsset}
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
          boardProps={{ subtitle: `1A.${stories.length + visuals.length + 1} / Contact //` }}
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

export default WorkDetailPage
export { generateMetadata, generateStaticParams }
