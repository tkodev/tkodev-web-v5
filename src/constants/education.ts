import { fromZonedTime } from 'date-fns-tz'
import { type EducationEntry } from '@/types/career'
import { appTimeZone } from './date'

const educationEntries: EducationEntry[] = [
  {
    id: 'free-code-camp-full-stack-development',
    basic: {
      title: 'Full Stack Development',
      subtitle: 'Computer Software Engineering',
      startDate: fromZonedTime('2016-01-01', appTimeZone),
      endDate: fromZonedTime('2019-01-01', appTimeZone)
    },
    parents: {
      schoolId: 'free-code-camp',
      studentId: 'tony'
    }
  },
  {
    id: 'ocad-bachelor-of-design',
    basic: {
      title: 'Bachelor of Design',
      subtitle: 'Environmental Design',
      startDate: fromZonedTime('2013-01-01', appTimeZone),
      endDate: fromZonedTime('2016-01-01', appTimeZone)
    },
    parents: {
      schoolId: 'ocad-university',
      studentId: 'tony'
    }
  }
]

export { educationEntries }
