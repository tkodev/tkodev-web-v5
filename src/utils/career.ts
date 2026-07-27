import { differenceInMonths } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import { appTimeZone, simpleDateFormat } from '@/constants/date'
import { placeholderAsset } from '@/constants/layout'
import { type JobEntry, type ProjectEntry } from '@/types/career'
import { type AssetEntry } from '@/types/layout'

/**
 * A project's main image: the first story asset, then the first visual, then the site placeholder.
 *
 * @param project - The project to read media from.
 */
const getProjectMainAsset = (project: ProjectEntry): AssetEntry => {
  return project.media?.stories?.[0]?.asset ?? project.media?.visuals?.[0] ?? placeholderAsset
}

/**
 * A project's card thumbnail: the card-sized thumb, falling back to the site placeholder.
 *
 * @param project - The project to read media from.
 */
const getProjectMainThumb = (project: ProjectEntry): AssetEntry => {
  return project.media?.thumbs?.[0] ?? placeholderAsset
}

/**
 * The ids of projects that own a detail page: only featured entries link to `/works/[workId]`.
 *
 * @param projectEntries - All project entries to filter.
 * @returns The ids of entries whose category is `featured`, in source order.
 */
const getFeaturedProjectIds = (projectEntries: ProjectEntry[]): string[] => {
  return projectEntries
    .filter((projectEntry) => projectEntry.basic.category === 'featured')
    .map((projectEntry) => projectEntry.id)
}

/** One employer's roles collapsed together, spanning the earliest start to the latest end. */
type JobGroup = {
  employerId: string
  jobEntries: JobEntry[]
  /** The earliest start across the group's roles. */
  startDate: Date
  /** The latest end across the group's roles; absent when any role is open-ended. */
  endDate?: Date
}

/**
 * Jobs collapsed into one entry per employer, keeping the newest-first order they are declared in.
 *
 * @param jobEntries - The roles to group, newest first.
 */
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

/**
 * A role's end date, defaulting an open-ended role to the clock (the build time on a static build).
 *
 * @param endDate - The role's end date, absent when open-ended.
 */
const getEndDate = (endDate?: Date): Date => endDate ?? new Date()

/**
 * The elapsed span as "1 yr 7 mos", never rounded up; an open-ended role measures to now.
 *
 * @param startDate - The role's start date.
 * @param endDate - The role's end date, absent when open-ended.
 */
const formatJobDuration = (startDate: Date, endDate?: Date): string => {
  const months = differenceInMonths(getEndDate(endDate), startDate)
  const years = Math.floor(months / 12)
  const remainder = months % 12
  const parts: string[] = []
  if (years > 0) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`)
  if (remainder > 0 || years === 0) parts.push(`${remainder} ${remainder === 1 ? 'mo' : 'mos'}`)
  return parts.join(' ')
}

/**
 * The span as "May 2023 – Nov 2024", with an open-ended role reading as "Present".
 *
 * @param startDate - The role's start date.
 * @param endDate - The role's end date, absent when open-ended.
 */
const formatJobSpan = (startDate: Date, endDate?: Date): string => {
  const start = formatInTimeZone(startDate, appTimeZone, simpleDateFormat)
  const end = endDate ? formatInTimeZone(endDate, appTimeZone, simpleDateFormat) : 'Present'
  return `${start} – ${end}`
}

/**
 * The day the earliest role on record began.
 *
 * @param jobEntries - The roles to scan.
 */
const getCareerStartDate = (jobEntries: JobEntry[]): Date => {
  const startDates = jobEntries.map((jobEntry) => jobEntry.basic.startDate.getTime())
  return new Date(Math.min(...startDates))
}

/**
 * Whole years elapsed since the earliest role on record.
 *
 * @param jobEntries - The roles to scan.
 */
const getCareerYears = (jobEntries: JobEntry[]): number => {
  const months = differenceInMonths(new Date(), getCareerStartDate(jobEntries))
  return Math.floor(months / 12)
}

/**
 * The distinct clients the projects on record were built for, in first-seen order.
 *
 * @param projectEntries - The projects to scan.
 */
const getProjectClientIds = (projectEntries: ProjectEntry[]): string[] => {
  const clientIds = projectEntries.map((projectEntry) => projectEntry.parents.clientId)
  return [...new Set(clientIds)]
}

/**
 * Every distinct organization on record: the employers, plus each project's client and agency.
 *
 * @param jobEntries - The roles supplying employers.
 * @param projectEntries - The projects supplying clients and agencies.
 */
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
  getFeaturedProjectIds,
  getJobGroups,
  getProjectClientIds,
  getProjectMainAsset,
  getProjectMainThumb
}
export type { JobGroup }
