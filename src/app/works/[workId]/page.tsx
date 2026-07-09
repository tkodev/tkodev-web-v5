import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { formatInTimeZone } from 'date-fns-tz'
import { ContactIcon, GitBranchIcon, IdCardIcon, MailIcon, PresentationIcon } from 'lucide-react'
import { SectionContact } from '@/components/organisms/section-contact'
import { SectionProjectFigure } from '@/components/organisms/section-project-figure'
import { SectionProjectHero } from '@/components/organisms/section-project-hero'
import { SectionProjectNext } from '@/components/organisms/section-project-next'
import { SectionProjectPlate } from '@/components/organisms/section-project-plate'
import { SectionProjectStats } from '@/components/organisms/section-project-stats'
import { SectionProjectSummary } from '@/components/organisms/section-project-summary'
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
  const assets = media?.assets ?? []
  const projectIndex = projectEntries
    .filter((projectEntry) => projectEntry.basic.category === 'featured')
    .findIndex((projectEntry) => projectEntry.id === project.id)
  const nextProject = projectEntries[(projectIndex + 1) % projectEntries.length]

  // jsx
  return (
    <Main>
      <Section id="masthead" width="lg">
        <SectionProjectHero
          asset={heroAsset}
          hudProps={{
            title: '2.1.0 / Dossier //',
            subtitle: '// Case File',
            accent1: '[ File Open ]',
            accent2: '[ Evidence Logged ]'
          }}
          titleProps={{
            tagline: basic.role,
            title: basic.title,
            desc: basic.subtitle,
            badges: extended?.duties,
            metaEntries
          }}
        />
      </Section>
      <Section id="summary" height="auto" width="md">
        <SectionProjectSummary
          textProps={{ title: extended?.win ?? basic.subtitle, desc: basic.desc }}
        />
      </Section>
      {statEntries.length > 0 && (
        <Section id="stats" height="auto" width="md">
          <SectionProjectStats statEntries={statEntries} />
        </Section>
      )}
      {stories.map((story, index) => {
        const key = `figure-${story.id}`
        return (
          <Section key={key} id={`figure-${story.id}`} height="auto" width="lg">
            <SectionProjectFigure
              figuresProps={{
                direction: index % 2 === 0 ? 'left' : 'right',
                index: `2.1.${index + 1}`,
                story
              }}
            />
          </Section>
        )
      })}
      {assets.map((asset, index) => {
        const key = `plate-${asset.src}`
        return (
          <Section key={key} id={`plate-${index + 1}`} height="auto" width="lg">
            <SectionProjectPlate
              mediaProps={{ asset, index: `2.1.${stories.length + index + 1}` }}
            />
          </Section>
        )
      })}
      <Section id="next" height="auto" width="lg">
        <SectionProjectNext
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
        <SectionContact
          boardProps={{ subtitle: `2.1.${stories.length + assets.length + 1} / Contact //` }}
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
