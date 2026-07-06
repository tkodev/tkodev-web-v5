type ClientId = string
type ProfileId = string
type ProjectId = string
type ClientEntry = {
  id: ClientId
  name: string
  href: string
  baseSrc: string
  lightSrc: string
  darkSrc: string
}

type MediaEntry = {
  type: 'image' | 'video'
  src: string
  width: number
  height: number
  alt: string
}

type JobEntry = {
  id: string
  companyId: ClientId
  companyName: string
  title: string
  location: string
  startDate: Date
  endDate?: Date
  skills: string[]
}

type ProfileEntry = {
  id: ProfileId
  name: string
  title: string
  linkedin: string
  github: string
  email: string
  phone: string
}

type ProjectRole = 'product thinking' | 'software engineering' | 'design engineering'

type ProjectBadge = {
  label: string
  value: string
}

type ProjectStat = {
  value: string
  label: string
}

type ProjectSection = {
  id: string
  media: MediaEntry
  heading: string
  body: string
}

type ProjectTestimonial = {
  quote: string
  author: string
  title: string
  source?: string
}

type ProjectEntry = {
  id: ProjectId
  basic: {
    title: string
    intro: string
    desc: string
    roles: ProjectRole[]
    tools: string[]
    skills: string[]
    startDate: string
    endDate?: string
  }
  extended?: {
    win?: string
    impact?: string
    badges?: ProjectBadge[]
    stats?: ProjectStat[]
    people?: ProfileId[]
  }
  sections?: ProjectSection[]
  showcase?: MediaEntry[]
  testimonial?: ProjectTestimonial
}

export type {
  ClientEntry,
  ClientId,
  JobEntry,
  MediaEntry,
  ProfileEntry,
  ProfileId,
  ProjectBadge,
  ProjectEntry,
  ProjectId,
  ProjectRole,
  ProjectSection,
  ProjectStat,
  ProjectTestimonial
}
