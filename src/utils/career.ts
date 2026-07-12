import { differenceInMonths } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import { appTimeZone, simpleDateFormat } from '@/constants/date'
import { placeholderAsset } from '@/constants/layout'
import { type JobEntry, type ProjectEntry } from '@/types/career'
import { type AssetEntry } from '@/types/layout'

// A project's main image: the first story asset, falling back to the site placeholder.
const getProjectMainAsset = (project: ProjectEntry): AssetEntry => {
  return project.media?.stories?.[0]?.asset ?? project.media?.visuals?.[0] ?? placeholderAsset
}

type JobGroup = {
  employerId: string
  jobEntries: JobEntry[]
  startDate: Date
  endDate?: Date
}

// Jobs collapsed into one entry per employer, keeping the newest-first order they are declared in.
const getJobGroups = (jobEntries: JobEntry[]): JobGroup[] => {
  const jobGroups: JobGroup[] = []
  jobEntries.forEach((jobEntry) => {
    const { startDate, endDate } = jobEntry.basic
    const { employerId } = jobEntry.parents
    const jobGroup = jobGroups.find((entry) => entry.employerId === employerId)
    if (!jobGroup) {
      jobGroups.push({ employerId, jobEntries: [jobEntry], startDate, endDate })
      return
    }
    jobGroup.jobEntries.push(jobEntry)
    jobGroup.startDate = startDate < jobGroup.startDate ? startDate : jobGroup.startDate
    // A group is open-ended the moment any of its roles is.
    jobGroup.endDate =
      !endDate || !jobGroup.endDate
        ? undefined
        : endDate > jobGroup.endDate
          ? endDate
          : jobGroup.endDate
  })
  return jobGroups
}

// Open-ended roles measure against the clock, which on a static build is the build time.
const getEndDate = (endDate?: Date): Date => endDate ?? new Date()

// "1 yr 7 mos" — the elapsed span, never rounded up.
const formatJobDuration = (startDate: Date, endDate?: Date): string => {
  const months = differenceInMonths(getEndDate(endDate), startDate)
  const years = Math.floor(months / 12)
  const remainder = months % 12
  const parts: string[] = []
  if (years > 0) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`)
  if (remainder > 0 || years === 0) parts.push(`${remainder} ${remainder === 1 ? 'mo' : 'mos'}`)
  return parts.join(' ')
}

// "May 2023 – Nov 2024", with an open-ended role reading as present.
const formatJobSpan = (startDate: Date, endDate?: Date): string => {
  const start = formatInTimeZone(startDate, appTimeZone, simpleDateFormat)
  const end = endDate ? formatInTimeZone(endDate, appTimeZone, simpleDateFormat) : 'Present'
  return `${start} – ${end}`
}

// The day the earliest role on record began.
const getCareerStartDate = (jobEntries: JobEntry[]): Date => {
  const startDates = jobEntries.map((jobEntry) => jobEntry.basic.startDate.getTime())
  return new Date(Math.min(...startDates))
}

// Years elapsed since the earliest role on record.
const getCareerYears = (jobEntries: JobEntry[]): number => {
  const months = differenceInMonths(new Date(), getCareerStartDate(jobEntries))
  return Math.floor(months / 12)
}

// Distinct clients the projects on record were built for.
const getProjectClientIds = (projectEntries: ProjectEntry[]): string[] => {
  const clientIds = projectEntries.map((projectEntry) => projectEntry.parents.clientId)
  return [...new Set(clientIds)]
}

// Every organization on record: the employers, plus each project's client and agency.
const getCareerClientIds = (jobEntries: JobEntry[], projectEntries: ProjectEntry[]): string[] => {
  const employerIds = jobEntries.map((jobEntry) => jobEntry.parents.employerId)
  const projectIds = projectEntries.flatMap((projectEntry) => {
    const { clientId, agencyId } = projectEntry.parents
    return agencyId ? [clientId, agencyId] : [clientId]
  })
  return [...new Set([...employerIds, ...projectIds])]
}

export {
  formatJobDuration,
  formatJobSpan,
  getCareerClientIds,
  getCareerYears,
  getJobGroups,
  getProjectClientIds,
  getProjectMainAsset
}
export type { JobGroup }
