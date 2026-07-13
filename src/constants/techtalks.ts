import { fromZonedTime } from 'date-fns-tz'
import { type TechtalkEntry } from '@/types/career'
import { appTimeZone } from './date'

/** Speaking log of tech talks, newest first. */
const techtalkEntries: TechtalkEntry[] = [
  {
    id: 'cross-browser-extensions',
    basic: {
      title: 'Cross-Browser Extensions',
      subtitle: 'TechTank at Cohere',
      desc: "Presented at TechTank's first meetup of 2025, hosted at Cohere's Toronto office. The talk covered building robust browser extensions that work seamlessly across platforms, including DOM management, deployment strategies, and real-world challenges from hands-on experience. Followed by a Q&A and networking session.",
      date: fromZonedTime('2025-01-01', appTimeZone)
    },
    extended: {
      recording: 'https://www.youtube.com/watch?v=f8ONw6O_rco',
      slides:
        'https://www.figma.com/deck/Pp9WuKLFwDnXimapCLwnb2/TechTalk---Cross-Browser-Extensions?node-id=1-25&t=h0Rn8vbGsHPTRxUa-1',
      album: 'https://photos.app.goo.gl/JdCB2QUhzxXPwUTg9'
    },
    parents: {
      hostId: 'techtank-to',
      speakerId: 'tony'
    }
  },
  {
    id: 'redux-to-react-query-and-monorepos',
    basic: {
      title: 'Redux to React Query & Monorepos with Turborepo',
      subtitle: 'React + Native Toronto',
      desc: "I'm thrilled to have been part of the Quantum Talks series hosted by Quantum Mob, where I had the opportunity to share insights alongside some incredible developers in the community.\n\nDuring the event, I presented on Using Turborepo to Manage a React Native and Web Monorepo. I highlighted how Turborepo has streamlined development for projects I've led, enabling whitelabelling, efficient workflows and scalability across both React Native and web platforms. It was exciting to discuss real-world challenges and solutions, drawing from my experiences in building financial and loyalty program apps at Quantum Mob.\n\nA huge thank you to our host Quantum Mob, a leader in digital innovation, and to everyone who attended. The conversations and connections made during the event were truly inspiring, and I'm proud to have contributed to fostering knowledge sharing in the Toronto tech community.",
      date: fromZonedTime('2022-10-26', appTimeZone)
    },
    parents: {
      hostId: 'quantum-mob',
      speakerId: 'tony'
    }
  }
]

export { techtalkEntries }
