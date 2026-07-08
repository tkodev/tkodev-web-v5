import keyBy from 'lodash/keyBy'
import { type PersonEntry } from '@/types/career'

const personEntries: PersonEntry[] = [
  {
    id: 'tony',
    basic: {
      name: 'Tony Ko',
      role: 'Staff Software Engineer'
    },
    extended: {
      linkedin: 'https://www.linkedin.com/in/tkodev',
      github: 'https://www.github.com/tkodev',
      email: 'tony@tko.dev',
      phone: '+1 (647) 300-9787',
      resume: '/career/persons/tony/tony-ko-resume-2026.pdf',
      competencies: [
        {
          id: 'designSystems',
          title: 'Design Systems Architecture',
          desc: 'Design system adoption across products, semantic tokens and variables, AI adherence to the design system, and staged system rollouts.'
        },
        {
          id: 'technicalDirection',
          title: 'Architecture & Technical Direction',
          desc: 'Technical strategy, architecture, and mentorship from Staff Engineer roles at TELUS Digital and Quantum Mob.'
        },
        {
          id: 'realTimeUi',
          title: 'Real-Time & High-Fidelity UI',
          desc: 'Real-time dashboard interfaces for managed pressure drilling and live industrial telemetry.'
        },
        {
          id: 'eventDriven',
          title: 'Event-Driven Systems Architecture',
          desc: 'WebSocket-driven data flows and event-driven architectures for subsecond telemetry platforms.'
        },
        {
          id: 'observability',
          title: 'Observability & Telemetry',
          desc: 'Telemetry and observability solutions delivered across multiple applications for external clients.'
        },
        {
          id: 'crossPlatform',
          title: 'Cross-Platform Engineering',
          desc: 'Systems spanning web, mobile, browser extensions, and embedded platforms.'
        },
        {
          id: 'accessibility',
          title: 'WCAG & Accessibility Engineering',
          desc: 'High-performing, secure, and accessible software for top North American brands.'
        },
        {
          id: 'dx',
          title: 'Developer Experience (DX)',
          desc: 'Engineering standards, shared tooling, monorepos, and AI-native workflows that accelerate delivery.'
        }
      ]
    },
    media: {
      photo: {
        type: 'image',
        src: '/career/persons/tony/dp-sq.jpg',
        width: 1920,
        height: 1920,
        alt: 'Tony Ko portrait'
      },
      thumb: {
        type: 'image',
        src: '/career/persons/tony/dp-thumb.jpg',
        width: 1920,
        height: 1920,
        alt: 'Tony Ko thumbnail'
      }
    }
  },
  {
    id: 'jax',
    basic: {
      name: 'Jackson Feist',
      role: 'Technical Lead'
    },
    extended: {
      linkedin: 'https://www.linkedin.com/in/jackson-feist/'
    }
  },
  {
    id: 'ron',
    basic: {
      name: 'Ron Yosipovich',
      role: 'Senior Software Engineer'
    },
    extended: {
      linkedin: 'https://www.linkedin.com/in/ronyosi/'
    }
  },
  {
    id: 'yuval',
    basic: {
      name: 'Yuval Yakubov',
      role: 'Senior Cloud Engineer'
    },
    extended: {
      linkedin: 'https://www.linkedin.com/in/yuval-yakubov/'
    }
  },
  {
    id: 'tulio',
    basic: {
      name: 'Tulio Fernandes',
      role: 'Staff Software Engineer'
    },
    extended: {
      linkedin: 'https://www.linkedin.com/in/tuliof',
      github: 'https://www.github.com/tuliof'
    }
  },
  {
    id: 'zeena',
    basic: {
      name: 'Zeena Adwan',
      role: 'Data Product Manager'
    },
    extended: {
      linkedin: 'https://www.linkedin.com/in/zadwan'
    }
  },
  {
    id: 'harpreet',
    basic: {
      name: 'Harpreet Singh Sidhu',
      role: 'Product Designer'
    },
    extended: {
      linkedin: 'https://www.linkedin.com/in/preet618'
    }
  },
  {
    id: 'leo',
    basic: {
      name: 'Leo Wong',
      role: 'Senior Software Engineer'
    },
    extended: {
      linkedin: 'https://www.linkedin.com/in/leoltwong'
    }
  },
  {
    id: 'ben',
    basic: {
      name: 'Benjamin Lokash',
      role: 'Senior Software Engineer'
    },
    extended: {
      linkedin: 'https://www.linkedin.com/in/blokash/'
    }
  },
  {
    id: 'nikita',
    basic: {
      name: 'Nikita Plakhotin',
      role: 'Senior Software Engineer'
    },
    extended: {
      linkedin: 'https://www.linkedin.com/in/nikita-plakhotin/'
    }
  },
  {
    id: 'steven',
    basic: {
      name: 'Steven Smith',
      role: 'Senior Software Engineer'
    },
    extended: {
      linkedin: 'https://www.linkedin.com/in/76484/'
    }
  },
  {
    id: 'nahuel',
    basic: {
      name: 'Nahuel Lucero',
      role: 'Senior Software Engineer'
    },
    extended: {
      linkedin: 'https://www.linkedin.com/in/nahuel-mart%C3%ADn-lucero-seinturia-b9029931/'
    }
  },
  {
    id: 'tarun',
    basic: {
      name: 'Tarun Kateja',
      role: 'Marketing Specialist'
    }
  },
  {
    id: 'sebastien',
    basic: {
      name: 'Sebastien Balda',
      role: 'VP of Delivery and Operations'
    }
  },
  {
    id: 'kavindu',
    basic: {
      name: 'Kavindu Narathota',
      role: 'Technical Product Leader'
    }
  },
  {
    id: 'andrea',
    basic: {
      name: 'Andrea Cabral',
      role: 'Senior Software Engineer'
    }
  },
  {
    id: 'maritia',
    basic: {
      name: 'Maritia Singh',
      role: 'Senior Digital Project Manager'
    }
  },
  {
    id: 'billie',
    basic: {
      name: 'Billie Law',
      role: 'QA & Project Coordinator'
    }
  },
  {
    id: 'dirksen',
    basic: {
      name: 'Dirksen Liu',
      role: 'Backend Engineer'
    }
  },
  {
    id: 'carlos',
    basic: {
      name: 'Carlos Zabaleta',
      role: 'Software Developer & IT Project Manager'
    }
  },
  {
    id: 'jie',
    basic: {
      name: 'Jie Liang',
      role: 'Software Engineer'
    }
  },
  {
    id: 'justin',
    basic: {
      name: 'Justin Lau',
      role: 'Senior Software Engineer'
    }
  }
]

const personEntryById = keyBy(personEntries, (personEntry) => personEntry.id)

export { personEntries, personEntryById }
