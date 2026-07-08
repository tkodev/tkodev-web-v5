import { fromZonedTime } from 'date-fns-tz'
import { type JobEntry } from '@/types/career'
import { appTimeZone } from './date'

const jobEntries: JobEntry[] = [
  {
    id: 'careerBreak',
    basic: {
      title: 'Career Break — Independent Projects',
      desc: "Shipped three production apps independently — all design, code architecture, and engineering standards are original work; AI-native tools (Claude Code, Codex, v0 - workflow, loops & MCP) used to accelerate feature development and delivery:\n\n- Designed and shipped tko.dev — cinematic personal portfolio with a custom Next.js design system: semantic token architecture, Zustand lifecycle state management, Framer Motion transition system, and full light/dark theming.\n- Built TechTank Toronto's web community platform (www.techtankto.com) — conversion-optimized onboarding hub for a Toronto tech community with role-based funnels, structured event archive, shadcn/ui component library, and Vercel analytics.\n- Developing Gridflow — social scheduling app with Next.js, Supabase (Auth, Database, Storage), TanStack Query, and React Hook Form; full-cycle product ownership from PRD to deployed code.",
      type: 'break',
      location: 'Toronto, Ontario, Canada · Self-directed',
      startDate: fromZonedTime('2025-07-01', appTimeZone)
    },
    extended: {
      skills: [
        'Claude Code',
        'Claude Design',
        'Codex',
        'v0',
        'Next.js',
        'TypeScript',
        'Supabase',
        'Tailwind CSS',
        'shadcn/ui',
        'Radix UI',
        'Framer Motion',
        'TanStack Query',
        'React Hook Form',
        'Zustand'
      ]
    },
    parents: {
      employerId: 'tkodev',
      employeeId: 'tony'
    }
  },
  {
    id: 'techtankToDigitalLeadOrganizer',
    basic: {
      title: 'Digital Lead & Organizer',
      desc: "TechTank Toronto is a community-driven organization supporting tech enthusiasts and developers through mentorship, educational initiatives, and social networking events.\n\n- Presented technical talks on browser extensions and engineering best practices.\n- Managed digital and content projects to drive TechTank's brand and community growth.\n- Managed a small team of software engineers, content creators, and volunteers.\n- Designed graphics and established a cohesive social media brand identity.\n- Wrote engaging copy for posts to increase audience engagement and reach.\n- Captured event photography to create compelling content for campaigns.",
      type: 'volunteer',
      location: 'Toronto, Ontario, Canada · Volunteer',
      startDate: fromZonedTime('2024-10-01', appTimeZone)
    },
    extended: {
      skills: [
        'Community Building',
        'Event Organization',
        'Technical Talks',
        'Team Leadership',
        'Content Strategy',
        'Brand Identity',
        'Social Media',
        'Copywriting',
        'Event Photography',
        'Graphic Design',
        'Mentorship'
      ]
    },
    parents: {
      employerId: 'techtankTo',
      employeeId: 'tony'
    }
  },
  {
    id: 'telusDigitalSeniorSoftwareEngineer',
    basic: {
      title: 'Senior Software Engineer',
      desc: 'Web Lead for Loblaw Digital Telemetry\n\n- Architected a cross-platform OpenTelemetry SDK (Node.js / Next.js) adopted across multiple Loblaw Digital LOBs — reusable abstractions supporting divergent Next.js versions, both server and browser runtimes, and LOB-specific instrumentation requirements without fragmentation.\n- Defined SDK architecture, data flows, and Grafana dashboard POC; presented to engineering leads and executives across LOBs and drove alignment on instrumentation strategy and platform adoption.\n- Built a Zustand-powered state store with historical tracking to enrich trace context across server and client runtimes; designed for extensibility across divergent LOB requirements.\n- Implemented distributed traces, metrics, and logs using low-level OpenTelemetry APIs; designed custom transformation pipelines feeding VictoriaMetrics, Tempo, and Grafana.\n- Delivered organization-wide P95 latency diagnostics, frontend error rate monitoring, and SLO breach visibility — actionable performance signals across multiple lines of business.',
      type: 'contract',
      location: 'Toronto, Ontario, Canada · Remote',
      startDate: fromZonedTime('2024-12-16', appTimeZone),
      endDate: fromZonedTime('2025-06-01', appTimeZone)
    },
    extended: {
      skills: [
        'OpenTelemetry',
        'Software Observability',
        'Grafana',
        'VictoriaMetrics',
        'Tempo',
        'Node.js',
        'Next.js',
        'TypeScript',
        'Zustand',
        'Google Cloud Platform (GCP)',
        'Jest',
        'Application Architecture',
        'Team Leadership'
      ]
    },
    parents: {
      employerId: 'telusDigital',
      employeeId: 'tony'
    }
  },
  {
    id: 'telusDigitalStaffSoftwareEngineer',
    basic: {
      title: 'Staff Software Engineer',
      desc: 'Staff Engineer: Modernization for Beyond MPD\n\nCo-led a mission-critical modernization for Beyond MPD, transforming legacy systems to a next-generation architecture interfacing with oil rig panels, communications buses, and PLCs.\n\n- Led technical discovery: interviewed client engineers to surface system constraints, integration requirements, and hardware specifications; produced timeline and cost estimates; built POCs to validate major architectural decisions before implementation.\n- Co-developed event-driven architecture integrating PLCs, communications buses, and sensors for reliable command/status communications across safety-critical oil rig control systems.\n- Built real-time and historical SVG data visualizations rendering 10,000+ data points at subsecond tolerance — animated graph elements, interactive controls, and coordinate precision matched to pixel-accurate hardware specifications.\n- Authored fluid pressure interpolation algorithms with rigorous unit test coverage; developed validation schemas enforcing data integrity and client-server limits across global rig deployments.\n- Contributed to the Figma design system for the Olympus platform — built components, provided engineering feedback on component feasibility, hardware interaction constraints, and implementation tradeoffs throughout the build; co-engineered back-end calibration solutions for chokes and sensors; optimized CI/CD pipelines coordinating deployment across multiple environments.',
      type: 'contract',
      location: 'Toronto, Ontario, Canada · Remote',
      startDate: fromZonedTime('2023-05-01', appTimeZone),
      endDate: fromZonedTime('2024-11-08', appTimeZone)
    },
    extended: {
      skills: [
        'Docker',
        'Node.js',
        'I18n',
        'Express.js',
        'Monorepo',
        'Sales Engineering',
        'React.js',
        'Serverless Computing',
        'TypeScript',
        'Software Estimation',
        'Coaching & Mentoring',
        'Team Leadership',
        'Composable Headless',
        'React Native',
        'Media Management',
        'Solution Architecture',
        'Application Architecture',
        'Figma',
        'Next.js',
        'SVG',
        'tRPC',
        'CI/CD',
        'Jest',
        'gRPC',
        'RabbitMQ'
      ]
    },
    parents: {
      employerId: 'telusDigital',
      employeeId: 'tony'
    }
  },
  {
    id: 'quantumMobStaffSoftwareEngineer',
    basic: {
      title: 'Staff Software Engineer',
      desc: "Team Lead: Vercel Partnership and Platform Development for International QSR and Real Estate Clients\n\n- Drove Quantum Mob's Vercel partnership from concept to close — led R&D, authored technical content, and secured an official partnership in Q1 2023.\n- Owned technical proposals and RFPs for international QSR and real estate clients, working directly with sales to shape scope and win engagements.\n- Led department-wide architectural standards, evolving role matrix, and CI/CD improvements alongside Senior Engineers to scale team capability.\n- Delivered biweekly coaching, paired programming, and structured goal-setting for SE1 through Senior Engineers; built and ran the hiring process — interview criteria, evaluation rubrics, and team-alignment framework — for the same range.",
      type: 'full-time',
      location: 'Toronto, Ontario, Canada · Hybrid',
      startDate: fromZonedTime('2022-11-01', appTimeZone),
      endDate: fromZonedTime('2023-05-01', appTimeZone)
    },
    extended: {
      skills: [
        'Docker',
        'Node.js',
        'I18n',
        'Express.js',
        'Monorepo',
        'Sales Engineering',
        'React.js',
        'Serverless Computing',
        'TypeScript',
        'Software Estimation',
        'Coaching & Mentoring',
        'Team Leadership',
        'Composable Headless',
        'React Native',
        'Media Management',
        'Solution Architecture',
        'Application Architecture',
        'Figma',
        'Next.js'
      ]
    },
    parents: {
      employerId: 'quantumMob',
      employeeId: 'tony'
    }
  },
  {
    id: 'quantumMobSeniorSoftwareEngineer',
    basic: {
      title: 'Senior Software Engineer',
      desc: 'Team Lead: PayPower Prepaid Mastercard Mobile App, Aeroplan Cross-Browser Extension\n\n- Led system design for the Aeroplan Shopping Button cross-browser extension — consistent architecture and feature behavior across Chrome, Firefox, Safari, and Edge.\n- Secured and led three new PayPower client engagements, building the business case for a white-label monorepo, a Redux-to-React Query refactor, and a UX-focused mobile redesign.\n- Established and maintained 12 CI/CD pipelines across iOS, Android, and Web; integrated Sentry monitoring and Mixpanel analytics across all pipelines for production reliability and user insight.\n- Directed incident response for critical security, deployment, and production issues, ensuring rapid resolution and minimal user impact.\n- Founded Quantum Talks — a weekly company-wide knowledge-sharing series; presented on Turborepo and React Query in 2022.\n- Mentored SE1 through Senior Engineers via biweekly coaching and paired programming; designed and ran the hiring process from SE1 to Senior.',
      type: 'full-time',
      location: 'Toronto, Ontario, Canada',
      startDate: fromZonedTime('2021-11-01', appTimeZone),
      endDate: fromZonedTime('2022-10-01', appTimeZone)
    },
    extended: {
      skills: [
        'Docker',
        'Node.js',
        'I18n',
        'Express.js',
        'Monorepo',
        'CI/CD',
        'PWAs',
        'React Testing Library',
        'React.js',
        'Serverless Computing',
        'React Query',
        'OAuth',
        'AODA',
        'TypeScript',
        'Software Estimation',
        'Coaching & Mentoring',
        'WCAG',
        'Team Leadership',
        'JavaScript',
        'Jest',
        'Redux.js',
        'Composable Headless',
        'React Native',
        'Media Management',
        'Application Architecture',
        'Figma',
        'Next.js'
      ]
    },
    parents: {
      employerId: 'quantumMob',
      employeeId: 'tony'
    }
  },
  {
    id: 'quantumMobSoftwareEngineerII',
    basic: {
      title: 'Software Engineer II',
      desc: "Team Lead: Aeroplan Redemption eStore Web App, RocMar Employee Dashboard\n\n- Led system design for Aeroplan's redemption platform: React/Redux architecture, Air Canada API integrations, localization, binary-masked item variant indexing, and checkout flow for a high-traffic national loyalty program.\n- Proposed and secured three new Aeroplan engagements covering architecture refinement, theming systems, accessibility compliance, and integration testing strategy.\n- Led a team of five engineers through a full AODA/WCAG 2.0 AA accessibility overhaul — structural semantics, focus management, ARIA roles, keyboard navigation, and colour contrast.\n- Achieved 80%+ test coverage across critical components using React Testing Library and Jest; led code reviews with emphasis on maintainability and standards adherence.\n- Designed and built RocMar Engineering's employee productivity dashboard: full Figma interface design and design system; OAuth/OIDC and API-token-based server-side data collection across four integrations; dynamic SVG data visualizations surfacing millions of historical data points as actionable productivity insights.",
      type: 'full-time',
      location: 'Toronto, Canada Area',
      startDate: fromZonedTime('2020-11-01', appTimeZone),
      endDate: fromZonedTime('2021-10-01', appTimeZone)
    },
    extended: {
      skills: [
        'Docker',
        'Node.js',
        'I18n',
        'Express.js',
        'Monorepo',
        'CI/CD',
        'PWAs',
        'React Testing Library',
        'React.js',
        'Serverless Computing',
        'Webpack',
        'React Query',
        'OAuth',
        'AODA',
        'TypeScript',
        'Software Estimation',
        'Coaching & Mentoring',
        'WCAG',
        'Team Leadership',
        'JavaScript',
        'Jest',
        'PostgreSQL',
        'MySQL',
        'Redux.js',
        'ORM',
        'React Native',
        'Media Management',
        'Application Architecture',
        'Figma',
        'Next.js'
      ]
    },
    parents: {
      employerId: 'quantumMob',
      employeeId: 'tony'
    }
  },
  {
    id: 'quantumMobSoftwareEngineerI',
    basic: {
      title: 'Software Engineer I',
      desc: 'Engineer: Air Miles Landing Portal & Internal Tools\n\n- Built React components for the Air Miles landing portal within a large team monorepo; applied BEM SASS standards across components for maintainable, cross-compatible styling.\n- Led development of a white-label product catalog and project infrastructure creation tool with automated CI/CD pipeline generation — internal platform tooling adopted across client projects.\n- Built reusable utility and auth modules for internal and client projects within a monorepo structure.',
      type: 'full-time',
      location: 'Toronto, Ontario, Canada',
      startDate: fromZonedTime('2019-11-01', appTimeZone),
      endDate: fromZonedTime('2020-10-01', appTimeZone)
    },
    extended: {
      skills: [
        'Docker',
        'Node.js',
        'I18n',
        'Express.js',
        'Monorepo',
        'CI/CD',
        'React.js',
        'Webpack',
        'TypeScript',
        'JavaScript',
        'PostgreSQL',
        'MySQL',
        'Redux.js',
        'ORM',
        'Figma',
        'Next.js'
      ]
    },
    parents: {
      employerId: 'quantumMob',
      employeeId: 'tony'
    }
  },
  {
    id: 'brandfireIntermediateFrontEndDeveloper',
    basic: {
      title: 'Intermediate Front End Developer',
      desc: 'Engineer: Development of Node.js Apps with Koa/Express and OAuth Authentication\n\n- Built pixel-accurate motion and interactive experiences for Toyota and Canada Dry consumer campaigns — parallax animations, hover states, and transitions shipped to production.\n- Developed Node.js applications with Koa and Express, Passport.js/OAuth for secure session management, and RESTful API endpoints backed by MySQL schemas.\n- Delivered front-end solutions in Angular.js, Vue, and Ractive.js; translated designs into responsive, AODA/WCAG 2.0 AA compliant web apps.\n- Owned build pipelines and bundler scripts across AWS, Shopify, and Linux environments; validated code with Mocha.js unit and end-to-end tests within Agile QA workflows.\n- Translated high-level project requirements into technical specifications, feature estimates, and data flow diagrams for Toyota, Canada Dry, and other clients.',
      type: 'full-time',
      location: 'Markham, Ontario',
      startDate: fromZonedTime('2017-04-01', appTimeZone),
      endDate: fromZonedTime('2019-11-01', appTimeZone)
    },
    extended: {
      skills: [
        'Node.js',
        'I18n',
        'Express.js',
        'CI/CD',
        'Software Estimation',
        'JavaScript',
        'PostgreSQL',
        'MySQL',
        'Adobe Creative Suite',
        'Media Management',
        'Vue.js',
        'Angular.js',
        'Ractive.js'
      ]
    },
    parents: {
      employerId: 'brandfire',
      employeeId: 'tony'
    }
  },
  {
    id: 'kosInteriorDesignInteriorDesigner',
    basic: {
      title: 'Interior Designer',
      desc: '- Managed 40+ residential and commercial design projects: 3D modeling, electrical and building code, client coordination, and quote estimation.',
      type: 'full-time',
      location: 'Toronto, Canada Area',
      startDate: fromZonedTime('2013-07-01', appTimeZone),
      endDate: fromZonedTime('2016-09-01', appTimeZone)
    },
    extended: {
      skills: ['Adobe Creative Suite']
    },
    parents: {
      employerId: 'kosInteriorDesign',
      employeeId: 'tony'
    }
  }
]

export { jobEntries }
