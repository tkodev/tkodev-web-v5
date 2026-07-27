import { type AssetEntry, type StoryEntry } from '@/types/layout'

/** One of the eight competencies, shown as an indexed accordion row on the home overview. */
type CompetencyEntry = {
  id: string
  title: string
  desc?: string
}

/** A person in the career record: Tony or a collaborator, with contact and profile data. */
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

/** An organization in the record: an employer, school, or Tony's own ventures. */
type ClientEntry = {
  id: string
  category?: 'client' | 'education' | 'self'
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

/** One employment role in the service record, tied to an employer and an employee. */
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

/** A real testimonial quote and the relationship between its author and recipient. */
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

/** One talk in the speaking log, with its host, date, and the artifacts it left behind. */
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

/** One entry in the education log, tied to a school and a student. */
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

/** A labeled readout counted from the career data, shown in a dossier's stats. */
type StatEntry = {
  title: string
  value: string
}

/** The central project record: basic facts plus optional extended detail and media. */
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
    stats?: StatEntry[]
  }
  media?: {
    visuals?: AssetEntry[]
    stories?: StoryEntry[]
    thumbs?: AssetEntry[]
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
  StatEntry,
  TechtalkEntry,
  TestimonialEntry
}
