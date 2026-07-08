import { type AssetEntry, type StoryEntry } from '@/types/layout'

type CompetencyEntry = {
  id: string
  title: string
  desc?: string
}

type PersonEntry = {
  id: string
  basic: {
    name: string
    role: string
  }
  extended?: {
    linkedin?: string
    github?: string
    email?: string
    phone?: string
    resume?: string
    competencies?: CompetencyEntry[]
  }
  media?: {
    photo?: AssetEntry
    thumb?: AssetEntry
  }
}

type ClientEntry = {
  id: string
  basic: {
    name: string
    href?: string
  }
  media?: {
    base?: AssetEntry
    light?: AssetEntry
    dark?: AssetEntry
  }
}

type JobEntry = {
  id: string
  basic: {
    title: string
    desc: string
    type: 'contract' | 'full-time' | 'volunteer' | 'break'
    location: string
    startDate: Date
    endDate?: Date
  }
  extended?: {
    skills?: string[]
  }
  parents: {
    employerId: ClientEntry['id']
    employeeId: PersonEntry['id']
  }
}

type TestimonialEntry = {
  id: string
  basic: {
    desc: string
    date: Date
  }
  parents: {
    relation: string
    authorId: PersonEntry['id']
    recipientId: PersonEntry['id']
  }
}

type TechtalkEntry = {
  id: string
  basic: {
    title: string
    subtitle: string
    desc: string
    date: Date
  }
  extended?: {
    recording?: string
    slides?: string
    album?: string
  }
  parents?: {
    hostId?: ClientEntry['id']
    speakerId?: PersonEntry['id']
  }
}

type EducationEntry = {
  id: string
  basic: {
    title: string
    subtitle: string
    desc?: string
    startDate: Date
    endDate?: Date
  }
  parents?: {
    schoolId?: ClientEntry['id']
    studentId?: PersonEntry['id']
  }
}

type ProjectEntry = {
  id: string
  basic: {
    title: string
    subtitle: string
    desc: string
    role: string
    category: 'featured' | 'inactive' | 'active'
    startDate: Date
    endDate?: Date
  }
  extended?: {
    duties?: string[]
    win?: string
    impact?: string
    skills?: string[]
    tools?: string[]
    badges?: string[]
    stats?: string[]
  }
  media?: {
    assets?: AssetEntry[]
    stories?: StoryEntry[]
  }
  parents: {
    clientId: ClientEntry['id']
    agencyId?: ClientEntry['id']
    staffIds?: PersonEntry['id'][]
  }
}

export type {
  ClientEntry,
  CompetencyEntry,
  EducationEntry,
  JobEntry,
  PersonEntry,
  ProjectEntry,
  TechtalkEntry,
  TestimonialEntry
}
