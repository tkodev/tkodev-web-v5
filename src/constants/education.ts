import { fromZonedTime } from 'date-fns-tz'
import { type EducationEntry } from '@/types/career'
import { appTimeZone } from './date'

const educationEntries: EducationEntry[] = [
  {
    id: 'freeCodeCampFullStackDevelopment',
    basic: {
      title: 'Full Stack Development',
      subtitle: 'Computer Software Engineering',
      startDate: fromZonedTime('2016-01-01', appTimeZone),
      endDate: fromZonedTime('2019-01-01', appTimeZone)
    },
    parents: {
      schoolId: 'freeCodeCamp',
      studentId: 'tony'
    }
  },
  {
    id: 'ocadBachelorOfDesign',
    basic: {
      title: 'Bachelor of Design',
      subtitle: 'Environmental Design',
      startDate: fromZonedTime('2013-01-01', appTimeZone),
      endDate: fromZonedTime('2016-01-01', appTimeZone)
    },
    parents: {
      schoolId: 'ocadUniversity',
      studentId: 'tony'
    }
  }
]

export { educationEntries }
