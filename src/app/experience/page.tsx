import Link from 'next/link'
import { formatInTimeZone } from 'date-fns-tz'
import { ContactIcon, GitBranchIcon, IdCardIcon, MailIcon } from 'lucide-react'
import { Button } from '@/components/atoms/button'
import { type LogEntry } from '@/components/molecules/log'
import { ExperienceHero } from '@/components/organisms/experience-hero'
import { ExperienceLogs } from '@/components/organisms/experience-logs'
import { ExperienceRecord } from '@/components/organisms/experience-record'
import { ExperienceSummary } from '@/components/organisms/experience-summary'
import { GlobalContact } from '@/components/organisms/global-contact'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'
import { clientById } from '@/constants/client'
import { appTimeZone, simpleDateFormat } from '@/constants/date'
import { educationEntries } from '@/constants/education'
import { jobEntries } from '@/constants/jobs'
import { personEntryById } from '@/constants/profile'
import { projectEntries } from '@/constants/projects'
import { createMetadata } from '@/constants/system'
import { techtalkEntries } from '@/constants/techtalks'
import {
  getCareerClientIds,
  getCareerYears,
  getJobGroups,
  getProjectClientIds
} from '@/utils/career'

const metadata = createMetadata({
  title: 'Tony Ko / Experience',
  description:
    'The service record: every role, talk, and credential behind two decades of design and engineering.',
  path: '/experience'
})

const ExperiencePage = () => {
  // render vars
  const tony = personEntryById['tony']
  const jobGroups = getJobGroups(jobEntries)
  const softwareJobEntries = jobEntries.filter(
    (jobEntry) => jobEntry.parents.employerId !== 'kos-interior-design'
  )
  const careerYears = getCareerYears(softwareJobEntries)
  const clientIds = getProjectClientIds(projectEntries).filter((clientId) => clientId !== 'tkodev')
  const logoClients = getCareerClientIds(jobEntries, projectEntries)
    .map((clientId) => clientById[clientId])
    .filter((clientEntry) => !!clientEntry?.media?.dark)
    .filter((clientEntry) => (clientEntry.category ?? 'client') === 'client')

  const talkEntries: LogEntry[] = techtalkEntries.map((techtalkEntry) => {
    const { basic, extended } = techtalkEntry
    return {
      id: techtalkEntry.id,
      title: basic.title,
      subtitle: basic.subtitle,
      value: formatInTimeZone(basic.date, appTimeZone, simpleDateFormat),
      linkEntries: [
        ...(extended?.recording ? [{ href: extended.recording, label: 'Recording' }] : []),
        ...(extended?.slides ? [{ href: extended.slides, label: 'Slides' }] : []),
        ...(extended?.album ? [{ href: extended.album, label: 'Album' }] : [])
      ]
    }
  })

  const schoolEntries: LogEntry[] = educationEntries.map((educationEntry) => {
    const { basic, parents } = educationEntry
    const school = parents?.schoolId ? clientById[parents.schoolId] : undefined
    const startYear = formatInTimeZone(basic.startDate, appTimeZone, 'yyyy')
    const endYear = basic.endDate ? formatInTimeZone(basic.endDate, appTimeZone, 'yyyy') : 'Present'
    return {
      id: educationEntry.id,
      title: basic.title,
      subtitle: [school?.basic.name, basic.subtitle].filter(Boolean).join(' · '),
      value: `${startYear} – ${endYear}`
    }
  })

  // jsx
  return (
    <Main>
      <Section id="experience-hero">
        <ExperienceHero
          hudProps={{
            title: '2.0 / Experience //',
            subtitle: '// Service Record',
            accent1: '[ Record Open ]',
            accent2: `[ ${jobGroups.length} Employers ]`,
            cta: 'Open Record'
          }}
          introProps={{
            subtitle: 'Experience',
            title: 'Service \nrecord',
            desc: 'Service history, unredacted: what I built, \nwho I built it for, and how long I stayed.'
          }}
        />
      </Section>
      <Section id="record" height="auto" width="lg">
        <ExperienceRecord
          jobGroups={jobGroups}
          boardProps={{
            subtitle: '2.1 / Record //',
            title: 'Service Record',
            cta: (
              <Button size="md" variant="outline" asChild>
                <Link href={tony.extended?.resume ?? '#'}>Download Resume</Link>
              </Button>
            )
          }}
        />
      </Section>
      <Section id="summary" height="auto" width="lg">
        <ExperienceSummary
          clientEntries={logoClients}
          subtitle="2.2 / Summary //"
          statEntries={[
            { title: 'Years Experience', value: String(careerYears) },
            { title: 'Employers', value: String(jobGroups.length) },
            { title: 'Projects Shipped', value: String(projectEntries.length) },
            { title: 'Clients & Brands', value: String(clientIds.length) }
          ]}
        />
      </Section>
      <Section id="talks" height="auto" width="lg">
        <ExperienceLogs
          boardProps={{ subtitle: '2.3 / Signals //', title: 'Speaking' }}
          logEntries={talkEntries}
        />
      </Section>
      <Section id="education" height="auto" width="lg">
        <ExperienceLogs
          boardProps={{ subtitle: '2.4 / Training //', title: 'Education' }}
          logEntries={schoolEntries}
        />
      </Section>
      <Section id="contact" height="auto" width="lg">
        <GlobalContact
          boardProps={{ subtitle: '2.5 / Contact //' }}
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

export default ExperiencePage
export { metadata }
