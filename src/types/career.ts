import { type AssetEntry, type StoryEntry } from '@/types/layout'

/** One of the eight competencies, shown as an indexed accordion row on the home overview. */
type CompetencyEntry = {
  id: string
  title: string
  /** Optional expanded copy revealed when the row opens. */
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
    /** The person's competencies, indexed on the home overview. */
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
  /** How the organization relates to the career: hiring client, school, or self-owned. */
  category?: 'client' | 'education' | 'self'
  basic: {
    name: string
    href?: string
  }
  media?: {
    /** Theme-agnostic logo. */
    base?: AssetEntry
    /** Logo for light backgrounds. */
    light?: AssetEntry
    /** Logo for dark backgrounds. */
    dark?: AssetEntry
  }
}

/** One employment role in the service record, tied to an employer and an employee. */
type JobEntry = {
  id: string
  basic: {
    title: string
    desc: string
    /** The engagement type shown in the employment ledger. */
    type: 'contract' | 'full-time' | 'volunteer' | 'break'
    location: string
    startDate: Date
    /** Absent when the role is current. */
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
    /** How the author knows the recipient (e.g. "managed", "worked with"). */
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
    /** Absent when the program is ongoing. */
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
    /** Where the project sits: the featured trio, active, or inactive. */
    category: 'featured' | 'inactive' | 'active'
    startDate: Date
    /** Absent when the project is ongoing. */
    endDate?: Date
  }
  extended?: {
    duties?: string[]
    /** The headline outcome the project won. */
    win?: string
    /** The measurable effect the project had. */
    impact?: string
    skills?: string[]
    tools?: string[]
    stats?: StatEntry[]
  }
  media?: {
    /** Supporting plates that widen the record without carrying the narrative. */
    visuals?: AssetEntry[]
    /** Annotated figures that carry the dossier's argument. */
    stories?: StoryEntry[]
  }
  parents: {
    clientId: ClientEntry['id']
    /** The agency Tony worked through, when the project was not direct. */
    agencyId?: ClientEntry['id']
    /** Collaborators credited on the project. */
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
