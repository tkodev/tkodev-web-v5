import { ProjectEntry, ProjectId } from '@/types/career'

const projectEntries: Record<ProjectId, ProjectEntry> = {
  tkodevPortfolio: {
    id: 'tkodevPortfolio',
    basic: {
      title: 'tko.dev — Personal Portfolio',
      intro:
        'Cinematic personal portfolio site — all visual design, animation choreography, interaction patterns, and design system architecture are original work. Custom Next.js design system: semantic token architecture, Zustand lifecycle state management with five distinct states, Framer Motion transition system, background music system with explicit user consent, and full light/dark theming.',
      desc: 'Cinematic portfolio built entirely from scratch — semantic token architecture, five-state Zustand lifecycle choreographing transitions and ambient audio, Framer Motion animation system, and full light/dark theming. Claude Code and Cursor used to accelerate delivery.',
      roles: ['software engineering', 'design engineering'],
      tools: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'Zustand',
        'Claude Code',
        'Cursor'
      ],
      skills: [
        'Design Systems',
        'Semantic Tokens',
        'Animation',
        'State Management',
        'Light/Dark Theming',
        'Next.js',
        'TypeScript'
      ],
      startDate: 'Mar 2025'
    },
    extended: {
      win: 'Designed and shipped a cinematic portfolio end-to-end — all visual design, animation systems, and design system architecture are original work, with AI-native tooling used to accelerate delivery.',
      impact:
        'A live production site demonstrating full-stack design engineering: from semantic token architecture to Framer Motion choreography to Zustand state lifecycle management.',
      badges: [{ label: 'Client', value: 'Independent' }],
      people: ['tony']
    }
  },

  gridflow: {
    id: 'gridflow',
    basic: {
      title: 'Gridflow — Social Media Scheduling App',
      intro:
        'Social media scheduling app built with full-cycle product ownership from PRD through deployed code. Stack: Next.js App Router, Supabase (Auth, Database, Storage), TanStack Query, React Hook Form, shadcn/ui, Radix UI, Framer Motion, TypeScript.',
      desc: 'Social media scheduling app with full-cycle product ownership from PRD to deployed code. Next.js App Router, Supabase (Auth, Database, Storage), TanStack Query, React Hook Form with Zod, shadcn/ui, Radix UI, and Framer Motion. Built with Cursor. Source on GitHub.',
      roles: ['product thinking', 'software engineering'],
      tools: [
        'Next.js',
        'TypeScript',
        'Supabase',
        'TanStack Query',
        'React Hook Form',
        'shadcn/ui',
        'Framer Motion',
        'Cursor'
      ],
      skills: [
        'Product Ownership',
        'Full-Stack Development',
        'TypeScript',
        'Next.js',
        'Supabase',
        'TanStack Query',
        'Form Validation'
      ],
      startDate: 'Mar 2026'
    },
    extended: {
      badges: [{ label: 'Client', value: 'Independent' }],
      people: ['tony']
    }
  },

  techtankToWebsite: {
    id: 'techtankToWebsite',
    basic: {
      title: 'TechTank Toronto — Community Platform',
      intro:
        'Conversion-oriented community hub for a Toronto-based tech community — role-based onboarding funnels, structured event archive with recap system, shadcn/ui component library, Vercel analytics, and shared Next.js layouts.',
      desc: 'Led a complete rewrite of the TechTank Toronto community site — conversion-optimized onboarding funnels for speaker, host, sponsor, and volunteer roles; shadcn/ui component library; structured event archive; Vercel analytics. Initial scaffold via v0; developed with Claude Code.',
      roles: ['product thinking', 'software engineering', 'design engineering'],
      tools: [
        'Next.js',
        'TypeScript',
        'shadcn/ui',
        'Tailwind CSS',
        'Vercel Analytics',
        'v0',
        'Claude Code'
      ],
      skills: [
        'Next.js',
        'TypeScript',
        'shadcn/ui',
        'Brand Design',
        'Content Strategy',
        'Information Architecture',
        'Conversion Optimization'
      ],
      startDate: 'Apr 2026'
    },
    extended: {
      win: 'Designed and shipped a full community platform from PRD to production — role-based onboarding funnels, structured event archive, and a shadcn/ui component library, with v0 and Claude Code accelerating delivery.',
      impact:
        'A live community hub that converts visitors into active TechTank Toronto participants across speaker, host, sponsor, and volunteer roles.',
      badges: [{ label: 'Client', value: 'TechTank Toronto' }],
      people: ['tony']
    },
    sections: [
      {
        id: 'community-platform',
        media: {
          type: 'image',
          src: '/images/projects/techtankto/next.techtankto.com_(iPad%20Pro).png',
          width: 2732,
          height: 2048,
          alt: 'TechTank Toronto — Website Redesign'
        },
        heading: 'Community Platform and Onboarding Architecture',
        body: 'Led the complete rewrite of the TechTank Toronto website — modernizing the stack, improving information architecture, and creating a conversion-oriented experience. Role-based onboarding funnels channel visitors into active community roles: speaker, host, sponsor, and volunteer. Built on Next.js with shared layouts, shadcn/ui components, and Vercel analytics.'
      },
      {
        id: 'brand-content',
        media: {
          type: 'image',
          src: '/images/projects/techtankto/1d7bbc4a-c4e2-4643-b3f3-1174ff1076b3.jpg',
          width: 2048,
          height: 1536,
          alt: 'TechTank Toronto — Community Event'
        },
        heading: 'Brand, Content, and Community Growth',
        body: 'Designed graphics and established a cohesive social media brand identity, wrote copy to grow audience reach, and captured event photography for campaign content. Presented technical talks at community events on topics from browser extensions to engineering best practices.'
      }
    ],
    showcase: [
      {
        type: 'image',
        src: '/images/projects/techtankto/next.techtankto.com_(iPad%20Pro).png',
        width: 2732,
        height: 2048,
        alt: 'TechTank Toronto — Website Redesign (Tablet)'
      },
      {
        type: 'image',
        src: '/images/projects/techtankto/next.techtankto.com_(iPad%20Pro)%20(1).png',
        width: 2732,
        height: 2048,
        alt: 'TechTank Toronto — Website Redesign (Tablet)'
      },
      {
        type: 'image',
        src: '/images/projects/techtankto/next.techtankto.com_(iPad%20Pro)%20(2).png',
        width: 2732,
        height: 2048,
        alt: 'TechTank Toronto — Website Redesign (Tablet)'
      },
      {
        type: 'image',
        src: '/images/projects/techtankto/next.techtankto.com_(iPhone%2014%20Pro%20Max).png',
        width: 1290,
        height: 2796,
        alt: 'TechTank Toronto — Website Redesign (Mobile)'
      },
      {
        type: 'image',
        src: '/images/projects/techtankto/next.techtankto.com_(iPhone%2014%20Pro%20Max)%20(1).png',
        width: 1290,
        height: 2796,
        alt: 'TechTank Toronto — Website Redesign (Mobile)'
      }
    ]
  },

  loblawsPerfectExperience: {
    id: 'loblawsPerfectExperience',
    basic: {
      title: 'Loblaw Digital Perfect Experience',
      intro:
        'Cross-platform OpenTelemetry SDK that became the unified observability layer across multiple Loblaws Digital lines of business — the first shared instrumentation infrastructure spanning divergent Next.js versions, server and browser runtimes, and LOB-specific requirements.',
      desc: 'Architected a cross-platform OpenTelemetry SDK adopted across multiple Loblaws Digital LOBs — spanning divergent Next.js versions and both runtimes. Custom transformation pipelines feed VictoriaMetrics, Tempo, and Grafana; Zustand state store enriches distributed traces across server and client boundaries.',
      roles: ['product thinking', 'software engineering'],
      tools: [
        'OpenTelemetry',
        'Next.js',
        'Node.js',
        'Zustand',
        'TypeScript',
        'Grafana',
        'VictoriaMetrics',
        'Tempo'
      ],
      skills: [
        'OpenTelemetry',
        'Observability',
        'SDK Architecture',
        'Distributed Tracing',
        'State Management',
        'TypeScript',
        'Next.js'
      ],
      startDate: 'Dec 2024',
      endDate: 'Jun 2025'
    },
    extended: {
      win: 'Architected the first shared observability infrastructure across Loblaws Digital — a single SDK spanning multiple LOBs, divergent Next.js versions, and both server and browser runtimes.',
      impact:
        'Delivered organization-wide P95 latency diagnostics, frontend error rate monitoring, and SLO breach visibility across multiple lines of business.',
      badges: [{ label: 'Client', value: 'TELUS Digital / Loblaws Digital' }],
      stats: [
        { value: 'Multi-LOB', label: 'Adoption across Loblaws Digital lines of business' },
        { value: 'P95', label: 'Latency diagnostics delivered org-wide' }
      ],
      people: ['tony', 'jax', 'ron', 'yuval']
    },
    sections: [
      {
        id: 'sdk-architecture',
        media: {
          type: 'image',
          src: '/images/projects/sdm-pe/grafana.png',
          width: 1040,
          height: 580,
          alt: 'Loblaws Perfect Experience — SDK Architecture and Grafana Dashboard'
        },
        heading: 'SDK Architecture and Cross-Platform Abstraction',
        body: 'Architected a cross-platform OpenTelemetry SDK that unified instrumentation across divergent Next.js versions, server and browser runtimes, and LOB-specific requirements — without fragmentation. Defined SDK architecture, data flows, and Grafana dashboard POC; presented to engineering leads and executives across LOBs to drive alignment on instrumentation strategy and platform adoption.'
      },
      {
        id: 'state-enrichment',
        media: {
          type: 'image',
          src: '/images/projects/sdm-pe/desktop.png',
          width: 3840,
          height: 2160,
          alt: 'Loblaws Perfect Experience — Desktop'
        },
        heading: 'State Management and Trace Context Enrichment',
        body: 'Built a Zustand-powered state store with historical state tracking to enrich distributed trace context across server and client boundaries — designed for extensibility across divergent LOB requirements and runtime environments.'
      },
      {
        id: 'observability-pipeline',
        media: {
          type: 'image',
          src: '/images/projects/sdm-pe/mobile.png',
          width: 1290,
          height: 2796,
          alt: 'Loblaws Perfect Experience — Mobile'
        },
        heading: 'Observability Pipeline and Organization-Wide Visibility',
        body: 'Designed custom transformation pipelines feeding VictoriaMetrics, Tempo, and Grafana. Delivered organization-wide P95 latency diagnostics, frontend error rate monitoring, and SLO breach visibility — actionable performance signals across multiple lines of business.'
      }
    ],
    showcase: [
      {
        type: 'image',
        src: '/images/projects/sdm-pe/grafana.png',
        width: 1040,
        height: 580,
        alt: 'Loblaws Perfect Experience — Grafana Observability Dashboard'
      },
      {
        type: 'image',
        src: '/images/projects/sdm-pe/desktop.png',
        width: 3840,
        height: 2160,
        alt: 'Shoppers Drug Mart Perfect Experience — Desktop'
      },
      {
        type: 'image',
        src: '/images/projects/sdm-pe/mobile.png',
        width: 1290,
        height: 2796,
        alt: 'Shoppers Drug Mart Perfect Experience — Mobile'
      }
    ]
  },

  beyondMpdOlympus: {
    id: 'beyondMpdOlympus',
    basic: {
      title: 'Beyond MPD Olympus',
      intro:
        'The Olympus platform is redefining industrial operations by transforming legacy oil rig systems into a cutting-edge, event-driven architecture. Designed to improve operational integrity and real-time decision-making, this modernization project bridges advanced technology with critical field applications.',
      desc: 'Embedded from discovery through delivery on a safety-critical oil rig platform. Co-developed event-driven architecture for hardware control, contributed to the Figma design system by building components and providing engineering feedback, and engineered real-time SVG visualizations tracking 10,000+ data points with subsecond tolerance.',
      roles: ['product thinking', 'software engineering', 'design engineering'],
      tools: ['Node.js', 'RabbitMQ', 'tRPC', 'gRPC', 'SVG', 'Jest', 'Figma'],
      skills: [
        'Event-Driven Architecture',
        'Real-Time Data Visualization',
        'SVG',
        'Unit Testing',
        'tRPC',
        'RabbitMQ',
        'Technical Discovery',
        'CI/CD'
      ],
      startDate: 'May 2023',
      endDate: 'Nov 2024'
    },
    extended: {
      win: 'Co-developed a safety-critical event-driven architecture using RabbitMQ and gRPC, replacing fragmented oil rig control systems with a unified platform capable of tracking 10,000+ data points with subsecond tolerance.',
      impact: 'Precision control infrastructure for active drill sites.',
      badges: [{ label: 'Client', value: 'TELUS Digital' }],
      stats: [
        { value: '10,000+', label: 'Data points tracked in real-time' },
        { value: '<1s', label: 'Data refresh tolerance' },
        { value: '18mo', label: 'Embedded delivery' }
      ],
      people: ['tony', 'tulio', 'zeena', 'harpreet']
    },
    sections: [
      {
        id: 'discovery',
        media: {
          type: 'image',
          src: '/images/projects/beyond-mpd/beyond.png',
          width: 1920,
          height: 1080,
          alt: 'Beyond MPD — Discovery and Constraint Mapping'
        },
        heading: 'Discovery and Constraint Mapping',
        body: "Before any implementation began, I participated in client-facing discovery and refinement sessions with product owners and the client's engineering team. I interviewed client engineers to assess existing systems, hardware specifications, and integration requirements. These conversations surfaced constraints that shaped every architecture decision — from event broker topology to UI component interaction models."
      },
      {
        id: 'event-driven-architecture',
        media: {
          type: 'image',
          src: '/images/projects/beyond-mpd/olympus.png',
          width: 3660,
          height: 1994,
          alt: 'Beyond MPD — Event-Driven Architecture'
        },
        heading: 'Event-Driven Architecture',
        body: 'I co-developed an event-driven architecture using RabbitMQ as the core event broker, ensuring reliable command and status communications across safety-critical control systems. The architecture interfaced with oil rig panels, communications buses, and PLCs — systems where message delivery guarantees and fault tolerance are non-negotiable.'
      },
      {
        id: 'fluid-pressure-control',
        media: {
          type: 'image',
          src: '/images/projects/beyond-mpd/3.png',
          width: 1319,
          height: 729,
          alt: 'Beyond MPD — Fluid Pressure Control and Sensor Calibration'
        },
        heading: 'Fluid Pressure Control and Sensor Calibration',
        body: 'I contributed to back-end solutions supporting the calibration of chokes and sensors, and co-authored interpolation algorithms for precise fluid pressure control. Each algorithm was validated with rigorous unit tests to ensure correctness under real-world operating conditions where a miscalculation has field consequences.'
      },
      {
        id: 'data-visualization',
        media: {
          type: 'image',
          src: '/images/projects/beyond-mpd/1.png',
          width: 1060,
          height: 590,
          alt: 'Beyond MPD — Real-Time Data Visualization'
        },
        heading: 'Real-Time Data Visualization',
        body: 'Leveraging SVG, I designed real-time and historical data visualization solutions capable of tracking over 10,000 data points with subsecond tolerance. The visualizations covered ramp interfaces, tripping operations, rollover tracking, and sensor state — each designed to surface critical operational state at a glance.'
      },
      {
        id: 'design-system',
        media: {
          type: 'image',
          src: '/images/projects/beyond-mpd/2.png',
          width: 1170,
          height: 657,
          alt: 'Beyond MPD — Design System and Engineering Feedback Loop'
        },
        heading: 'Design System and Engineering Feedback Loop',
        body: 'I contributed to the Figma design system for the Olympus platform — building components and providing engineering feedback on component feasibility, hardware interaction constraints, and implementation tradeoffs throughout the build.'
      },
      {
        id: 'global-deployment',
        media: {
          type: 'image',
          src: '/images/projects/beyond-mpd/4-rollover.png',
          width: 906,
          height: 509,
          alt: 'Beyond MPD — Global Deployment Readiness'
        },
        heading: 'Global Deployment Readiness',
        body: 'To support deployment across geographically distributed rigs, I developed robust validation schemas, optimized CI/CD pipelines, and ensured global compatibility through precise unit conversion standards — accounting for measurement variations across operating regions.'
      }
    ],
    showcase: [
      {
        type: 'image',
        src: '/images/projects/beyond-mpd/1.png',
        width: 1060,
        height: 590,
        alt: 'Beyond MPD — Olympus Ramp Interface'
      },
      {
        type: 'image',
        src: '/images/projects/beyond-mpd/2.png',
        width: 1170,
        height: 657,
        alt: 'Beyond MPD — Olympus Ramp Interface (Light Mode)'
      },
      {
        type: 'image',
        src: '/images/projects/beyond-mpd/3.png',
        width: 1319,
        height: 729,
        alt: 'Beyond MPD — Olympus Advanced Tripping Interface'
      },
      {
        type: 'image',
        src: '/images/projects/beyond-mpd/3-basic.png',
        width: 1350,
        height: 756,
        alt: 'Beyond MPD — Olympus Basic Tripping Interface'
      },
      {
        type: 'image',
        src: '/images/projects/beyond-mpd/4-rollover.png',
        width: 906,
        height: 509,
        alt: 'Beyond MPD — Olympus Rollover Interface'
      }
    ]
  },

  paypowerReloadablePrepaidMastercardMobileApp: {
    id: 'paypowerReloadablePrepaidMastercardMobileApp',
    basic: {
      title: 'PayPower Mastercard — Reloadable Prepaid Mobile App',
      intro:
        'White-label React Native iOS and Android app for managing reloadable prepaid Mastercards — multi-currency support, precise financial calculations, real-time push notifications, and a 12-pipeline CI/CD strategy across iOS, Android, and web.',
      desc: 'Led white-label React Native development for prepaid Mastercards — migrated Redux to tRPC, added multi-currency support with big integer financial precision, real-time push notifications, and a 12-pipeline CI/CD strategy across iOS, Android, and web. Secured three new client engagements.',
      roles: ['product thinking', 'software engineering', 'design engineering'],
      tools: ['React Native', 'tRPC', 'Monorepo', 'CI/CD', 'Sentry', 'Mixpanel', 'TypeScript'],
      skills: [
        'React Native',
        'Mobile Development',
        'CI/CD',
        'White-Label Architecture',
        'tRPC',
        'Monorepo',
        'Incident Response'
      ],
      startDate: 'Oct 2021',
      endDate: 'Apr 2022'
    },
    extended: {
      win: 'Secured three new client engagements and owned a 12-pipeline CI/CD strategy across iOS, Android, and web — while migrating a legacy Redux system to tRPC and adding multi-currency financial precision.',
      impact:
        'Transformed a single-client mobile app into a white-label platform that could be deployed for multiple prepaid card programs with configuration-only customization.',
      badges: [{ label: 'Client', value: 'Peoples Group / Quantum Mob' }],
      stats: [
        { value: '12', label: 'CI/CD pipelines across iOS, Android, and Web' },
        { value: '3', label: 'Client engagements proposed and won' }
      ],
      people: ['tony', 'ben', 'leo', 'nikita']
    },
    sections: [
      {
        id: 'white-label-architecture',
        media: {
          type: 'image',
          src: '/images/projects/paypower/paypower.png',
          width: 1640,
          height: 1024,
          alt: 'PayPower Mastercard App — White-Label Architecture'
        },
        heading: 'White-Label Architecture',
        body: 'Implemented a monorepo architecture with feature flag-based whitelabeling, enabling tailored deployments for diverse client needs. Migrated a legacy Redux system to tRPC, enhancing data efficiency. Added multi-currency support with precise financial calculations using big integers to prevent rounding errors in financial transactions.'
      },
      {
        id: 'cicd-reliability',
        media: {
          type: 'image',
          src: '/images/projects/paypower/paypower-overview.png',
          width: 1640,
          height: 1024,
          alt: 'PayPower Mastercard App — CI/CD and Production Reliability'
        },
        heading: 'CI/CD Strategy and Production Reliability',
        body: 'Owned a 12-pipeline CI/CD strategy across iOS, Android, and web with integrated Sentry monitoring and Mixpanel analytics. Directed incident response for critical security, deployment, and production issues, ensuring rapid resolution and minimal user impact.'
      },
      {
        id: 'client-engagement',
        media: {
          type: 'image',
          src: '/images/projects/paypower/paypower-cards.png',
          width: 375,
          height: 812,
          alt: 'PayPower Mastercard App — Cards'
        },
        heading: 'Client Engagement and Business Development',
        body: 'Secured three new client engagements by building the business case for the white-label monorepo, a Redux-to-React Query refactor, and a UX-focused mobile redesign. Worked directly with sales to shape scope and win engagements alongside the product owner.'
      }
    ],
    showcase: [
      {
        type: 'image',
        src: '/images/projects/paypower/paypower.png',
        width: 1640,
        height: 1024,
        alt: 'PayPower Mastercard App'
      },
      {
        type: 'image',
        src: '/images/projects/paypower/paypower-overview.png',
        width: 1640,
        height: 1024,
        alt: 'PayPower Mastercard App — Overview'
      },
      {
        type: 'image',
        src: '/images/projects/paypower/paypower-cards.png',
        width: 375,
        height: 812,
        alt: 'PayPower Mastercard App — Cards'
      },
      {
        type: 'image',
        src: '/images/projects/paypower/paypower-dashboard.png',
        width: 375,
        height: 812,
        alt: 'PayPower Mastercard App — Dashboard'
      },
      {
        type: 'image',
        src: '/images/projects/paypower/paypower-verify.png',
        width: 375,
        height: 812,
        alt: 'PayPower Mastercard App — Verify Identity'
      }
    ]
  },

  aeroplanShoppingButton: {
    id: 'aeroplanShoppingButton',
    basic: {
      title: 'Aeroplan Shopping Button — Browser Extension',
      intro:
        "Aeroplan's first cross-browser extension — consistent behavior across Chrome, Firefox, Safari, and Edge across hundreds of retail sites. SWR-based query system to bypass CORS, multi-domain session tracking, and a multi-level caching layer.",
      desc: "Architected Aeroplan's first cross-browser extension — consistent behavior across Chrome, Firefox, Safari, and Edge. SWR-based CORS bypass, multi-domain session tracking for purchase attribution, and a multi-level caching layer for high-traffic retailer data.",
      roles: ['product thinking', 'software engineering'],
      tools: [
        'SWR',
        'Browser Extension API',
        'TypeScript',
        'Multi-domain Caching',
        'Chrome',
        'Firefox',
        'Safari',
        'Edge'
      ],
      skills: [
        'Browser Extension Development',
        'Cross-Browser Architecture',
        'CORS Bypass',
        'Session Tracking',
        'Caching',
        'TypeScript',
        'Product Management'
      ],
      startDate: 'Jul 2021',
      endDate: 'Jan 2022'
    },
    extended: {
      win: "Architected Aeroplan's first cross-browser extension — CORS bypass, multi-domain session tracking, and multi-level caching across hundreds of retail sites and four browsers.",
      impact:
        'Delivered a reliable, scalable browser extension that empowered Aeroplan members to earn rewards effortlessly across hundreds of retailers without friction.',
      badges: [{ label: 'Client', value: 'Air Canada Aeroplan / Quantum Mob' }],
      stats: [
        { value: '4', label: 'Browsers supported' },
        { value: '100s', label: 'Retail sites integrated' }
      ],
      people: ['tony']
    },
    sections: [
      {
        id: 'cross-browser-architecture',
        media: {
          type: 'image',
          src: '/images/projects/aeroplan-ext/aeroplan-ext.png',
          width: 2232,
          height: 936,
          alt: 'Aeroplan Shopping Button — Cross-Browser Architecture'
        },
        heading: 'Cross-Browser Architecture',
        body: 'Architected consistent behavior across Chrome, Firefox, Safari, and Edge — a single codebase handling browser-specific extension APIs, content script injection patterns, and background service worker lifecycle differences across four distinct runtimes.'
      },
      {
        id: 'cors-session-tracking',
        media: {
          type: 'image',
          src: '/images/projects/aeroplan-ext/aeroplan-ext-overview.png',
          width: 1920,
          height: 1080,
          alt: 'Aeroplan Shopping Button — CORS and Session Tracking'
        },
        heading: 'CORS Bypass and Multi-Domain Session Tracking',
        body: 'Implemented an SWR-based query system to overcome CORS restrictions and handle real-time retailer data without direct cross-origin calls. Built a navigation tracking system for multi-domain purchase sessions — ensuring reward attribution remained intact across redirects, affiliate hops, and multi-tab checkout flows.'
      },
      {
        id: 'caching-performance',
        media: {
          type: 'image',
          src: '/images/projects/aeroplan-ext/aeroplan-ext-02-activate-offer-coupons-crop.png',
          width: 1440,
          height: 934,
          alt: 'Aeroplan Shopping Button — Offer Activation'
        },
        heading: 'Multi-Level Caching and Performance',
        body: 'Designed a multi-level caching mechanism to manage high traffic and dynamic retailer data — reducing backend load while maintaining responsive performance across hundreds of retail sites. Owned PRDs, estimates, and client expectation management alongside the product owner.'
      }
    ],
    showcase: [
      {
        type: 'image',
        src: '/images/projects/aeroplan-ext/aeroplan-ext.png',
        width: 2232,
        height: 936,
        alt: 'Aeroplan Shopping Button — Browser Extension'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-ext/aeroplan-ext-overview.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan Shopping Button — Overview'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-ext/aeroplan-ext-02-activate-offer-coupons-crop.png',
        width: 1440,
        height: 934,
        alt: 'Aeroplan Shopping Button — Offer Activation'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-ext/aeroplan-ext-04-activated-a-crop.png',
        width: 2880,
        height: 1868,
        alt: 'Aeroplan Shopping Button — Offer Activated'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-ext/aeroplan-ext-05-landing-a-crop.png',
        width: 2880,
        height: 1868,
        alt: 'Aeroplan Shopping Button — Home View'
      }
    ]
  },

  aeroplanEStore: {
    id: 'aeroplanEStore',
    basic: {
      title: 'Aeroplan Redemption eStore',
      intro:
        'Lead developer across multiple Aeroplan engagements spanning initial architecture, retailer catalog redesign, and AODA AA / WCAG 2.0 accessibility compliance — a high-traffic national loyalty platform built on React and Redux.',
      desc: 'Lead developer across multiple Aeroplan engagements — initial React/Redux eStore architecture, catalog redesign with Air Canada API integrations and binary-masked variant indexing, and a five-engineer AODA/WCAG 2.0 AA overhaul. Proposed and won all three engagements; 80%+ test coverage.',
      roles: ['product thinking', 'software engineering'],
      tools: [
        'React',
        'Redux',
        'Node.js',
        'TypeScript',
        'Jest',
        'React Testing Library',
        'AODA/WCAG 2.0 AA'
      ],
      skills: [
        'React',
        'Redux',
        'Accessibility',
        'AODA/WCAG 2.0 AA',
        'Jest',
        'React Testing Library',
        'Technical Leadership',
        'Localization'
      ],
      startDate: 'Jan 2020',
      endDate: 'Jan 2023'
    },
    extended: {
      win: 'Proposed and won three Aeroplan engagements — led architecture, catalog redesign, and a full team of five through AODA/WCAG 2.0 AA compliance on a high-traffic national loyalty platform.',
      impact:
        "Elevated Aeroplan's digital platform across user experience, accessibility, and technical scalability — establishing a reusable architecture that supported years of subsequent feature development.",
      badges: [{ label: 'Client', value: 'Air Canada Aeroplan / Quantum Mob' }],
      stats: [
        { value: '3', label: 'Engagements proposed and won' },
        { value: '80%+', label: 'Test coverage on critical components' },
        { value: '5', label: 'Engineers led through AODA compliance' }
      ],
      people: ['tony', 'steven']
    },
    sections: [
      {
        id: 'initial-architecture',
        media: {
          type: 'image',
          src: '/images/projects/aeroplan-retailer/aeroplan-for-you.png',
          width: 1920,
          height: 1080,
          alt: 'Aeroplan eStore — Initial Architecture and MVP'
        },
        heading: 'Initial Architecture and MVP',
        body: 'Lead developer for the Aeroplan eStore front end, state management, and server model design — the foundational architecture on which subsequent redesigns, accessibility work, and catalog extensions were built. Designed scalable React and Node.js solutions enabling future feature expansion and proposed three follow-on engagements covering architecture refinement, theming, and accessibility.'
      },
      {
        id: 'retailer-catalog',
        media: {
          type: 'image',
          src: '/images/projects/aeroplan-retailer/aeroplan-listing.png',
          width: 1920,
          height: 1080,
          alt: 'Aeroplan eStore — Retailers Listing'
        },
        heading: 'Retailer and Catalog Redesign',
        body: "Spearheaded the eStore's retailer catalog and filtering system redesign — componentized React architecture, Redux-based state management, and whitelabel theming for scalability. Implemented Air Canada API integrations, localization, and binary-masked item variant indexing for a high-traffic national loyalty program."
      },
      {
        id: 'accessibility',
        media: {
          type: 'image',
          src: '/images/projects/aeroplan-retailer/aeroplan-cart.png',
          width: 1920,
          height: 1080,
          alt: 'Aeroplan eStore — AODA Accessibility Compliance'
        },
        heading: 'Accessibility Compliance — AODA AA / WCAG 2.0',
        body: 'Led a team of five engineers through a full AODA/WCAG 2.0 AA accessibility overhaul — structural semantics, focus management, ARIA roles, keyboard navigation, and colour contrast across the entire React/Redux application. Achieved 80%+ test coverage across critical components using React Testing Library and Jest.'
      }
    ],
    showcase: [
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-for-you.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore — For You Page'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-listing.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore — Retailers Listing'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-cart.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore — Cart'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-retailers.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore — Retailers Intro'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-dyson.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore — Dyson Retailer'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-catalog.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore — Dyson Retailer Catalog'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-mobile-deals.png',
        width: 430,
        height: 930,
        alt: 'Aeroplan eStore — Mobile Deals'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-mobile-retailer.png',
        width: 430,
        height: 930,
        alt: 'Aeroplan eStore — Mobile Retailer'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-mobile-item.png',
        width: 430,
        height: 930,
        alt: 'Aeroplan eStore — Mobile Product'
      }
    ]
  },

  rocMarEngineeringEmployeeDashboard: {
    id: 'rocMarEngineeringEmployeeDashboard',
    basic: {
      title: 'RocMar Engineering — Employee Dashboard',
      intro:
        'Full design-to-code delivery for an employee productivity dashboard — Figma interface design, design system, OAuth/OIDC authentication across four API integrations, and SVG visualizations surfacing millions of historical data points.',
      desc: 'Full design-to-code delivery — designed the Figma interface and design system, then implemented OAuth/OIDC auth via Passport.js across four API integrations. Leveraged SVG and optimized SQL to surface millions of historical data points as actionable productivity insights.',
      roles: ['product thinking', 'software engineering', 'design engineering'],
      tools: [
        'React',
        'Next.js',
        'Express',
        'OAuth',
        'OIDC',
        'Passport.js',
        'SVG',
        'Postgres',
        'Figma'
      ],
      skills: [
        'Full-Stack Development',
        'OAuth',
        'OIDC',
        'SVG',
        'Data Visualization',
        'Design Systems',
        'Figma',
        'PostgreSQL'
      ],
      startDate: 'Nov 2020',
      endDate: 'Mar 2021'
    },
    extended: {
      win: 'Owned full design-to-code delivery — Figma design system through OAuth/OIDC auth and SVG visualizations surfacing millions of historical data points from four API integrations.',
      impact:
        'Delivered a powerful, visually cohesive dashboard that centralized data across four integrations and elevated employee productivity for an architectural engineering firm.',
      badges: [{ label: 'Client', value: 'RocMar Engineering / Quantum Mob' }],
      stats: [
        { value: '4', label: 'OAuth API integrations' },
        { value: 'Millions', label: 'Historical data points visualized' }
      ],
      people: ['tony']
    },
    sections: [
      {
        id: 'design-system',
        media: {
          type: 'image',
          src: '/images/projects/rocmar/rocmar.png',
          width: 1920,
          height: 1080,
          alt: 'RocMar Employee Dashboard — Interface Design'
        },
        heading: 'Interface Design and Design System',
        body: 'Designed the full interface in Figma and developed a comprehensive design system, ensuring visual consistency and intuitive interactions across the dashboard. The design system established reusable components, typography, and color semantics that scaled across all views.'
      },
      {
        id: 'data-integrations',
        media: {
          type: 'image',
          src: '/images/projects/rocmar/rocmar-overview.png',
          width: 1920,
          height: 1080,
          alt: 'RocMar Employee Dashboard — Data Integration Overview'
        },
        heading: 'Data Integration, Auth, and SVG Visualization',
        body: 'Implemented secure infrastructure with OAuth and OIDC for SSO authentication via Passport.js. Integrated four OAuth-based APIs, transforming user data and browsing habits into actionable productivity insights. Leveraged SVG and optimized SQL queries to combine millions of historical data points spanning years into meaningful, interactive visualizations.'
      }
    ],
    showcase: [
      {
        type: 'image',
        src: '/images/projects/rocmar/rocmar.png',
        width: 1920,
        height: 1080,
        alt: 'RocMar Employee Dashboard'
      },
      {
        type: 'image',
        src: '/images/projects/rocmar/rocmar-overview.png',
        width: 1920,
        height: 1080,
        alt: 'RocMar Employee Dashboard — Overview'
      },
      {
        type: 'image',
        src: '/images/projects/rocmar/rocmar-home.png',
        width: 1920,
        height: 1080,
        alt: 'RocMar Employee Dashboard — Home'
      },
      {
        type: 'image',
        src: '/images/projects/rocmar/rocmar-dashboard.png',
        width: 1920,
        height: 1080,
        alt: 'RocMar Employee Dashboard — Dashboard'
      }
    ]
  },

  quantumMobCatalogAppProjectMobCiCdIntegrations: {
    id: 'quantumMobCatalogAppProjectMobCiCdIntegrations',
    basic: {
      title: 'Quantum Mob — Catalog App, Project Mob, CI/CD Integrations',
      intro:
        "Team lead for Quantum Mob's white-label product catalog and an internal project scaffolding tool that automated CI/CD pipeline generation — reducing new client project setup from manual configuration to a repeatable one-command process.",
      desc: "Built Quantum Mob's white-label product catalog and an internal project scaffolding tool that automated CI/CD pipeline generation — reducing new client project setup to a one-command process, adopted across client engagements.",
      roles: ['product thinking', 'software engineering'],
      tools: ['CI/CD', 'Monorepo', 'Pipeline Automation', 'Node.js'],
      skills: [
        'CI/CD',
        'Pipeline Automation',
        'Internal Tooling',
        'Technical Leadership',
        'Monorepo',
        'Node.js'
      ],
      startDate: 'Sep 2020',
      endDate: 'Oct 2020'
    },
    extended: {
      badges: [{ label: 'Client', value: 'Quantum Mob' }],
      people: ['tony']
    }
  },

  quantumMobCoreUtilitiesAuthModule: {
    id: 'quantumMobCoreUtilitiesAuthModule',
    basic: {
      title: 'Quantum Mob — Core Utilities & Auth Module',
      intro:
        "Reusable utility and auth modules built within Quantum Mob's monorepo — adopted across multiple client projects as shared internal infrastructure.",
      desc: "Built reusable utility and auth modules within Quantum Mob's monorepo structure, enabling reuse across multiple client projects. These modules provided robust, secure authentication solutions for both internal and client applications, reducing development time on future projects.",
      roles: ['software engineering'],
      tools: ['Node.js', 'Monorepo', 'OAuth', 'Authentication'],
      skills: ['Authentication', 'OAuth', 'Monorepo', 'Shared Infrastructure', 'Node.js'],
      startDate: 'Jul 2020',
      endDate: 'Oct 2020'
    },
    extended: {
      badges: [{ label: 'Client', value: 'Quantum Mob' }],
      people: ['tony']
    }
  },

  airMilesLandingPortalDevelopment: {
    id: 'airMilesLandingPortalDevelopment',
    basic: {
      title: 'Air Miles — Landing Portal',
      intro:
        'React components for the Air Miles landing portal within a large team monorepo — BEM SASS standards for maintainable, cross-compatible styling across hundreds of components.',
      desc: 'Implemented React components for the Air Miles landing portal within a large team monorepo — BEM SASS standards for cross-compatible styling, Lerna-published shared components, Jest and Nock test coverage, and AODA/WCAG 2.0 AA accessibility compliance.',
      roles: ['software engineering'],
      tools: ['React', 'Monorepo', 'Lerna', 'BEM SASS', 'Jest', 'AODA/WCAG 2.0 AA'],
      skills: [
        'React',
        'BEM SASS',
        'Accessibility',
        'Jest',
        'Monorepo',
        'Lerna',
        'AODA/WCAG 2.0 AA'
      ],
      startDate: 'Jan 2020',
      endDate: 'Jan 2020'
    },
    extended: {
      badges: [{ label: 'Client', value: 'Air Miles / Quantum Mob' }],
      people: ['tony']
    },
    showcase: [
      {
        type: 'image',
        src: '/images/projects/airmiles/airmiles.png',
        width: 1920,
        height: 1080,
        alt: 'Air Miles Landing Portal'
      },
      {
        type: 'image',
        src: '/images/projects/airmiles/airmiles-partners.png',
        width: 1920,
        height: 1080,
        alt: 'Air Miles Landing Portal — Partner Finder'
      },
      {
        type: 'image',
        src: '/images/projects/airmiles/airmiles-earn.png',
        width: 1920,
        height: 1080,
        alt: 'Air Miles Landing Portal — How to Earn'
      },
      {
        type: 'image',
        src: '/images/projects/airmiles/airmiles-offers.png',
        width: 1920,
        height: 1080,
        alt: 'Air Miles Landing Portal — Offers'
      },
      {
        type: 'image',
        src: '/images/projects/airmiles/airmiles-ways.png',
        width: 1920,
        height: 1080,
        alt: 'Air Miles Landing Portal — 6 Ways to Earn'
      }
    ]
  },

  modaMatchVirtualFittingRoom: {
    id: 'modaMatchVirtualFittingRoom',
    basic: {
      title: 'Moda Match — Virtual Fitting Room',
      intro:
        'White-label virtual try-on plugin for Shopify and WooCommerce — predefined body model previews with support for thousands of apparel items, enabling shoppers to visualize fit and dimensions before purchasing.',
      desc: 'White-label virtual try-on plugin for Shopify and WooCommerce — DOM-injection install with body model previews for thousands of apparel items, enabling shoppers to visualize fit and dimensions before purchasing. Built with React and Next.js.',
      roles: ['software engineering'],
      tools: ['React', 'Next.js', 'MongoDB', 'DOM Injection', 'Shopify', 'WooCommerce'],
      skills: [
        'React',
        'Next.js',
        'Shopify',
        'WooCommerce',
        'DOM Injection',
        'MongoDB',
        'Plugin Development'
      ],
      startDate: 'Apr 2021',
      endDate: 'May 2021'
    },
    extended: {
      badges: [{ label: 'Client', value: 'Quantum Mob' }],
      people: ['tony']
    }
  },

  petsAboveReactModernization: {
    id: 'petsAboveReactModernization',
    basic: {
      title: 'Pets Above — React Modernization',
      intro:
        'Refactoring and modernization of a legacy React, Redux, RabbitMQ, and MySQL application — updated component architecture and state management to current patterns.',
      desc: 'Modernized the Pets Above application — updated legacy React and Redux to current patterns, improved RabbitMQ messaging, and refined MySQL data handling to align with modern performance and maintainability standards.',
      roles: ['software engineering'],
      tools: ['React', 'Redux', 'RabbitMQ', 'MySQL'],
      skills: ['React', 'Redux', 'RabbitMQ', 'MySQL', 'Code Modernization', 'Refactoring'],
      startDate: 'Nov 2019',
      endDate: 'Dec 2019'
    },
    extended: {
      badges: [{ label: 'Client', value: 'Quantum Mob' }],
      people: ['tony']
    }
  },

  cardinalMeatsFoodServiceWebsiteAndCms: {
    id: 'cardinalMeatsFoodServiceWebsiteAndCms',
    basic: {
      title: 'Cardinal Meats & Food Service — Website & CMS',
      intro:
        'Express-based landing site with an integrated custom CMS for Cardinal Meats & Food Service — built for non-technical editors to manage products and company content independently.',
      desc: 'Express-based landing site with an integrated custom CMS for Cardinal Meats — built for non-technical editors to manage products and company content independently without developer involvement.',
      roles: ['software engineering'],
      tools: ['Express.js', 'Node.js', 'CMS'],
      skills: ['Express.js', 'Node.js', 'CMS Development', 'Content Management', 'Web Development'],
      startDate: 'Apr 2019',
      endDate: 'Nov 2019'
    },
    extended: {
      badges: [{ label: 'Client', value: 'Cardinal Meats / Quantum Mob' }],
      people: ['tony']
    },
    showcase: [
      {
        type: 'image',
        src: '/images/projects/cardinal.png',
        width: 1920,
        height: 1080,
        alt: 'Cardinal Meats & Food Service — Website & CMS'
      }
    ]
  },

  toyotaSalesReportingDashboard: {
    id: 'toyotaSalesReportingDashboard',
    basic: {
      title: 'Toyota — Sales Reporting Dashboard',
      intro:
        'Koa.js internal sales reporting dashboard for Toyota — aggregated dealer and campaign data into a web interface for sales teams.',
      desc: 'Developed an internal sales reporting dashboard using Koa.js for Toyota. The dashboard provided real-time data visualization, aggregating dealer and campaign data into a web interface that made it easier for sales teams to track metrics and make informed business decisions.',
      roles: ['software engineering'],
      tools: ['Koa.js', 'Node.js', 'Data Visualization', 'MySQL'],
      skills: ['Koa.js', 'Node.js', 'Data Visualization', 'MySQL', 'Dashboard Development'],
      startDate: 'Apr 2019',
      endDate: 'Nov 2019'
    },
    extended: {
      badges: [{ label: 'Client', value: 'Toyota' }],
      people: ['tony']
    }
  },

  weiserCanadianCatalogWebsite: {
    id: 'weiserCanadianCatalogWebsite',
    basic: {
      title: 'Weiser — Canadian Catalog Website',
      intro:
        "Lead developer for Weiser Lock's Canadian catalog site — Express and Vue.js server-rendered product catalog with localization and responsive design.",
      desc: "Led the development of the Canadian catalog website for Weiser Lock using Express and Vue.js, delivering a server-rendered, user-friendly experience. The site showcased Weiser's products with localization for the Canadian market and responsive design across devices.",
      roles: ['software engineering'],
      tools: ['Express.js', 'Vue.js', 'SSR', 'Node.js', 'Localization'],
      skills: ['Vue.js', 'Express.js', 'SSR', 'Localization', 'Responsive Design', 'Node.js'],
      startDate: 'Apr 2018',
      endDate: 'Nov 2019'
    },
    extended: {
      badges: [{ label: 'Client', value: 'Weiser / Brandfire Marketing Group' }],
      people: ['tony']
    },
    showcase: [
      {
        type: 'image',
        src: '/images/projects/weiser.png',
        width: 1920,
        height: 1080,
        alt: 'Weiser — Canadian Catalog Website'
      }
    ]
  },

  canadaChiropracticProtectiveAssociationWebsiteAndCms: {
    id: 'canadaChiropracticProtectiveAssociationWebsiteAndCms',
    basic: {
      title: 'Canada Chiropractic Protective Association — Website & CMS',
      intro:
        'Microsoft Dynamics 365 CRM-backed website for the Canada Chiropractic Protective Association — client case and insurance plan management for member chiropractors.',
      desc: 'Microsoft Dynamics 365 CRM-integrated website for the Canada Chiropractic Protective Association — client case and insurance plan management for member chiropractors, accessible through a centralized platform.',
      roles: ['software engineering'],
      tools: ['Microsoft Dynamics 365', 'CRM Integration', 'Node.js'],
      skills: [
        'CRM Integration',
        'Microsoft Dynamics 365',
        'Node.js',
        'Web Development',
        'Content Management'
      ],
      startDate: 'Apr 2017',
      endDate: 'Apr 2019'
    },
    extended: {
      badges: [{ label: 'Client', value: 'CCPA / Brandfire Marketing Group' }],
      people: ['tony']
    },
    showcase: [
      {
        type: 'image',
        src: '/images/projects/ccpa.png',
        width: 1920,
        height: 1080,
        alt: 'Canada Chiropractic Protective Association — Website & CMS'
      },
      {
        type: 'video',
        src: '/videos/projects/CCPAinfographic-short.mp4',
        width: 2788,
        height: 1748,
        alt: 'Canada Chiropractic Protective Association — Infographic'
      }
    ]
  },

  canadaDryEnterPinContest: {
    id: 'canadaDryEnterPinContest',
    basic: {
      title: 'Canada Dry — Enter PIN Contest',
      intro:
        'PHP and Ractive.js promotional contest with time-gated entry and PIN validation for the Canada Dry campaign.',
      desc: 'PIN-based promotional contest for Canada Dry — time-gated entry logic, prize-tier validation, and an interactive UI built on PHP and Ractive.js.',
      roles: ['software engineering'],
      tools: ['PHP', 'Ractive.js', 'MySQL'],
      skills: ['PHP', 'Ractive.js', 'MySQL', 'Interactive Design', 'Contest Mechanics'],
      startDate: 'Apr 2017',
      endDate: 'Apr 2019'
    },
    extended: {
      badges: [{ label: 'Client', value: 'Canada Dry / Brandfire Marketing Group' }],
      people: ['tony']
    },
    showcase: [
      {
        type: 'image',
        src: '/images/projects/canadadry.png',
        width: 1920,
        height: 1080,
        alt: 'Canada Dry — Enter PIN Contest'
      }
    ]
  },

  canadaDryWebsite: {
    id: 'canadaDryWebsite',
    basic: {
      title: 'Canada Dry — Website',
      intro:
        'PHP landing site with parallax scrolling and interactive animations for Canada Dry — built to brand standards with AODA-compliant markup.',
      desc: 'PHP landing site for Canada Dry featuring parallax effects and interactive animations — delivered to brand standards with AODA-compliant markup.',
      roles: ['software engineering'],
      tools: ['PHP', 'Parallax', 'CSS Animation', 'AODA'],
      skills: [
        'PHP',
        'Parallax Animation',
        'CSS Animation',
        'AODA Compliance',
        'Interactive Design'
      ],
      startDate: 'Apr 2017',
      endDate: 'Apr 2019'
    },
    extended: {
      badges: [{ label: 'Client', value: 'Canada Dry / Brandfire Marketing Group' }],
      people: ['tony']
    },
    showcase: [
      {
        type: 'image',
        src: '/images/projects/canadadry.png',
        width: 1920,
        height: 1080,
        alt: 'Canada Dry — Website'
      }
    ]
  },

  monogramCanadianCatalogWebsite: {
    id: 'monogramCanadianCatalogWebsite',
    basic: {
      title: 'Monogram — Canadian Catalog Website',
      intro:
        'Koa.js and Ractive.js server-rendered product catalog for Monogram (GE Appliances Canada) — responsive browsing with localization for the Canadian market.',
      desc: "Developed a responsive catalog website for Monogram using Koa.js and Ractive.js. The site showcased Monogram's offerings through a clean, accessible interface that adapted seamlessly across devices, with localization for the Canadian market.",
      roles: ['software engineering'],
      tools: ['Koa.js', 'Ractive.js', 'SSR', 'Localization'],
      skills: [
        'Koa.js',
        'Ractive.js',
        'SSR',
        'Localization',
        'Responsive Design',
        'Product Catalog'
      ],
      startDate: 'Apr 2017',
      endDate: 'Apr 2019'
    },
    extended: {
      badges: [{ label: 'Client', value: 'Monogram (GE Appliances) / Brandfire Marketing Group' }],
      people: ['tony']
    },
    showcase: [
      {
        type: 'image',
        src: '/images/projects/monogram.png',
        width: 1920,
        height: 1080,
        alt: 'Monogram — Canadian Catalog Website'
      }
    ]
  },

  parentsCanadaMagazineWebsite: {
    id: 'parentsCanadaMagazineWebsite',
    basic: {
      title: 'Parents Canada — Magazine Website',
      intro:
        "Custom WordPress theme for Parents Canada — article templates, editorial layout, and content management aligned to the magazine's visual brand.",
      desc: "Custom WordPress theme for Parents Canada's magazine website — article templates, editorial layout, and content management aligned to the magazine's visual brand and diverse readership.",
      roles: ['software engineering'],
      tools: ['WordPress', 'PHP', 'Theme Development'],
      skills: ['WordPress', 'PHP', 'Theme Development', 'Content Management', 'Editorial Design'],
      startDate: 'Apr 2018',
      endDate: 'Apr 2019'
    },
    extended: {
      badges: [{ label: 'Client', value: 'Parents Canada / Brandfire Marketing Group' }],
      people: ['tony']
    },
    showcase: [
      {
        type: 'image',
        src: '/images/projects/parents.png',
        width: 1920,
        height: 1080,
        alt: 'Parents Canada — Magazine Website'
      }
    ]
  },

  toffifeeSpinToWinContest: {
    id: 'toffifeeSpinToWinContest',
    basic: {
      title: 'Toffifee — Spin to Win Contest',
      intro:
        'Interactive spin-to-win contest for Toffifee — animated SVG mechanic with prize-tier logic, built on Express.js and Ractive.js.',
      desc: "Created an interactive spin-to-win promotional contest for Toffifee using Express.js and Ractive.js. The animated SVG wheel mechanic featured prize-tier logic with weighted outcomes, driving customer engagement and enhancing Toffifee's digital marketing campaign.",
      roles: ['software engineering'],
      tools: ['Express.js', 'Ractive.js', 'SVG Animation'],
      skills: ['Express.js', 'Ractive.js', 'SVG Animation', 'Interactive Design', 'Prize Logic'],
      startDate: 'Apr 2017',
      endDate: 'Apr 2019'
    },
    extended: {
      badges: [{ label: 'Client', value: 'Toffifee / Brandfire Marketing Group' }],
      people: ['tony']
    },
    showcase: [
      {
        type: 'video',
        src: '/videos/projects/toff7026-short.mp4',
        width: 2400,
        height: 1748,
        alt: 'Toffifee — Spin to Win Contest'
      },
      {
        type: 'video',
        src: '/videos/projects/toff7026.mp4',
        width: 2400,
        height: 1748,
        alt: 'Toffifee — Spin to Win Contest (Full)'
      },
      {
        type: 'video',
        src: '/videos/projects/toff7026-spin.mp4',
        width: 2784,
        height: 1652,
        alt: 'Toffifee — Spin Animation'
      }
    ]
  },

  toyotaBringYourToyotaHomeContest: {
    id: 'toyotaBringYourToyotaHomeContest',
    basic: {
      title: 'Toyota — Bring Your Toyota Home Contest',
      intro:
        "Apple-style parallax scroll experience for Toyota's 'Bring Your Toyota Home' contest — section-by-section scroll-driven animation on Express.js and Ractive.js.",
      desc: "Pixel-accurate parallax scroll experience for Toyota's 'Bring Your Toyota Home' contest — Apple-style section-by-section scroll animations with hover states and transitions. Translated campaign requirements into technical specs and motion implementation.",
      roles: ['software engineering'],
      tools: ['Express.js', 'Ractive.js', 'Parallax Animation', 'CSS'],
      skills: [
        'Express.js',
        'Ractive.js',
        'Parallax Animation',
        'CSS',
        'Interactive Design',
        'Motion Design'
      ],
      startDate: 'Apr 2017',
      endDate: 'Apr 2019'
    },
    extended: {
      badges: [{ label: 'Client', value: 'Toyota / Brandfire Marketing Group' }],
      people: ['tony']
    },
    showcase: [
      {
        type: 'video',
        src: '/videos/projects/byth7040-short.mp4',
        width: 1146,
        height: 850,
        alt: 'Toyota — Bring Your Toyota Home Contest'
      },
      {
        type: 'video',
        src: '/videos/projects/byth7040-long.mp4',
        width: 1276,
        height: 796,
        alt: 'Toyota — Bring Your Toyota Home Contest (Full)'
      }
    ]
  },

  toyotaMakeADateContest: {
    id: 'toyotaMakeADateContest',
    basic: {
      title: 'Toyota — Make a Date Contest',
      intro:
        "Express.js and Ractive.js promotional microsite for Toyota's 'Make a Date' contest campaign.",
      desc: "Developed a date-driven promotional microsite for Toyota's 'Make a Date' contest, combining Toyota's branding with an engaging interactive interface and entry mechanics. Built on Express.js and Ractive.js.",
      roles: ['software engineering'],
      tools: ['Express.js', 'Ractive.js', 'Interactive Design'],
      skills: [
        'Express.js',
        'Ractive.js',
        'Interactive Design',
        'Promotional Microsite',
        'Web Development'
      ],
      startDate: 'Apr 2018',
      endDate: 'Apr 2019'
    },
    extended: {
      badges: [{ label: 'Client', value: 'Toyota / Brandfire Marketing Group' }],
      people: ['tony']
    },
    showcase: [
      {
        type: 'image',
        src: '/images/projects/toyota.webp',
        width: 900,
        height: 574,
        alt: 'Toyota — Make a Date Contest'
      }
    ]
  },

  babyJoggerCanadianCatalogWebsite: {
    id: 'babyJoggerCanadianCatalogWebsite',
    basic: {
      title: 'BabyJogger — Canadian Catalog Website',
      intro:
        'Canadian catalog website for BabyJogger — product browsing, filtering, and localization built on Koa.js and Ractive.js.',
      desc: "Created a responsive catalog website for BabyJogger using Koa.js and Ractive.js, offering a seamless browsing experience for customers. The site presented BabyJogger's products in a user-friendly format with filtering and localization for the Canadian market.",
      roles: ['software engineering'],
      tools: ['Koa.js', 'Ractive.js', 'Responsive Design', 'Localization'],
      skills: [
        'Koa.js',
        'Ractive.js',
        'Responsive Design',
        'Localization',
        'Product Catalog',
        'Web Development'
      ],
      startDate: 'Apr 2017',
      endDate: 'Apr 2018'
    },
    extended: {
      badges: [{ label: 'Client', value: 'BabyJogger / Brandfire Marketing Group' }],
      people: ['tony']
    },
    showcase: [
      {
        type: 'image',
        src: '/images/projects/babyjogger.png',
        width: 1920,
        height: 1080,
        alt: 'BabyJogger — Canadian Catalog Website'
      }
    ]
  },

  earlySoftwareEngineering: {
    id: 'earlySoftwareEngineering',
    basic: {
      title: 'Early Software Engineering',
      intro:
        'Self-directed FreeCodeCamp bootcamp — full-stack JavaScript fundamentals, applied through a series of polished mobile-first projects combining design background with emerging engineering discipline.',
      desc: 'Self-directed FreeCodeCamp curriculum — full-stack JavaScript, OAuth, algorithms, and data structures. Applied OCAD design background to build polished mobile-first projects from scratch: Simon Says, Tic Tac Toe, Pomodoro timer, calculator, and weather widget.',
      roles: ['software engineering', 'design engineering'],
      tools: ['React.js', 'Node.js', 'Koa.js', 'Express.js', 'jQuery', 'OAuth', 'MySQL'],
      skills: [
        'JavaScript',
        'React.js',
        'Node.js',
        'Full-Stack Development',
        'Mobile-First Design',
        'Algorithms',
        'Data Structures'
      ],
      startDate: 'Sep 2016',
      endDate: 'May 2019'
    },
    extended: {
      win: 'Transitioned from interior design to software engineering through a self-directed FreeCodeCamp curriculum — shipping a series of polished, mobile-first projects that fused design background with full-stack JavaScript fundamentals.',
      impact:
        'Established the engineering and design foundation that would define a career at the intersection of software engineering and design systems.',
      badges: [{ label: 'Institution', value: 'FreeCodeCamp' }],
      people: ['tony']
    },
    sections: [
      {
        id: 'full-stack-foundation',
        media: {
          type: 'image',
          src: '/images/projects/early-soft/mockup-mobile-m (1).jpg',
          width: 2259,
          height: 1506,
          alt: 'Early Software Engineering — Full-Stack Foundation'
        },
        heading: 'Full-Stack JavaScript Foundation',
        body: 'Immersed in full-stack JavaScript fundamentals — DOM manipulation, Node.js, OAuth authentication, algorithms, and data structures — through a self-directed FreeCodeCamp curriculum. Built real-world projects at my own pace, fostering both technical skill and self-discipline.'
      },
      {
        id: 'design-meets-engineering',
        media: {
          type: 'image',
          src: '/images/projects/early-soft/mockup-mobile-m.jpg',
          width: 1980,
          height: 1506,
          alt: 'Early Software Engineering — Design Meets Engineering'
        },
        heading: 'Design Background Applied to Engineering',
        body: 'Applied a background in functional design, color theory, and composition from OCAD to create interfaces that were minimalist yet polished and user-centric. Every project was designed from scratch before any code was written — establishing a design-led engineering approach that has defined the career since.'
      }
    ],
    showcase: [
      {
        type: 'image',
        src: '/images/projects/early-soft/mockup-mobile-m (1).jpg',
        width: 2259,
        height: 1506,
        alt: 'Early Software Engineering — Simon Says Mobile Mockup'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/mockup-mobile-m.jpg',
        width: 1980,
        height: 1506,
        alt: 'Early Software Engineering — Tic Tac Toe Mobile Mockup'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/mockup-mobile-game-m.jpg',
        width: 1980,
        height: 1506,
        alt: 'Early Software Engineering — Tic Tac Toe Mobile Mockup'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/mockup-mobile-m (3).jpg',
        width: 2259,
        height: 1506,
        alt: 'Early Software Engineering — Pomodoro Mobile Mockup'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/mockup-mobile-m (2).jpg',
        width: 1980,
        height: 1506,
        alt: 'Early Software Engineering — Calculator Mobile Mockup'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/mockup-mobile.jpg',
        width: 960,
        height: 640,
        alt: 'Early Software Engineering — Weather Widget Mockup'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/screenshot-6+ (1).jpg',
        width: 414,
        height: 736,
        alt: 'Early Software Engineering — Simon Says'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/screenshot-6+.jpg',
        width: 414,
        height: 736,
        alt: 'Early Software Engineering — Tic Tac Toe'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/screenshot-game-6+.jpg',
        width: 414,
        height: 736,
        alt: 'Early Software Engineering — Tic Tac Toe (Game)'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/screenshot-6+ (4).jpg',
        width: 414,
        height: 736,
        alt: 'Early Software Engineering — Pomodoro Timer'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/screenshot-6+ (3).jpg',
        width: 414,
        height: 736,
        alt: 'Early Software Engineering — Calculator'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/screenshot-6+ (2).jpg',
        width: 414,
        height: 736,
        alt: 'Early Software Engineering — Weather Widget'
      }
    ]
  },

  web10Era: {
    id: 'web10Era',
    basic: {
      title: 'Web 1.0 Era Web Design',
      intro:
        'Pixel-perfect web design and illustration during the Web 1.0 era — Photoshop-sliced templates, custom platform themes for Sony Ericsson phones and Winamp, and hand-coded HTML/CSS before HTML5, CSS3, or flex/grid existed.',
      desc: 'Pixel-perfect web design during the Web 1.0 era — Photoshop-sliced templates, table-based HTML/CSS, and custom themes for Sony Ericsson phones, Winamp, and social platforms (Xanga, AsianAvenue, Zuup). Assets optimized for dial-up; shipped across Netscape and IE6.',
      roles: ['design engineering'],
      tools: [
        'Photoshop',
        'Illustrator',
        'Flash',
        'Dreamweaver',
        'HTML',
        'CSS 1 & 2',
        'JavaScript'
      ],
      skills: [
        'Photoshop',
        'Illustrator',
        'Flash',
        'HTML',
        'CSS',
        'Web Design',
        'Digital Illustration'
      ],
      startDate: '2000',
      endDate: '2010'
    },
    extended: {
      win: 'Self-taught pixel-perfect web design and illustration from an early age — custom platform themes, sliced Photoshop templates, and hand-coded HTML/CSS shipped to live sites before modern tooling existed.',
      impact:
        'Established a foundational design sensibility and technical curiosity that would drive every engineering and design decision in the decade that followed.',
      badges: [{ label: 'Client', value: 'Independent' }],
      people: ['tony']
    },
    sections: [
      {
        id: 'pixel-perfect-design',
        media: {
          type: 'image',
          src: '/images/projects/web-era/6.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — PixelInfinity.ca Theme'
        },
        heading: 'Pixel-Perfect Web Design',
        body: 'Designed and built pixel-perfect web layouts using Photoshop-sliced templates — exported to table-based HTML and hand-coded CSS before grid and flex existed. Every asset was optimized for dial-up speeds while maintaining visual precision across Netscape Navigator and Internet Explorer 6.'
      },
      {
        id: 'platform-themes',
        media: {
          type: 'image',
          src: '/images/projects/web-era/7.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — Xanga Theme'
        },
        heading: 'Custom Platform Themes and Illustration',
        body: "Designed custom themes for social platforms (Xanga, AsianAvenue, Zuup) and hardware (Sony Ericsson phones, Winamp) — each requiring understanding of the host environment's rendering constraints. Also produced original abstract art and illustrations that ran alongside the design work."
      }
    ],
    showcase: [
      {
        type: 'image',
        src: '/images/projects/web-era/1.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era — Sony Ericsson Phone Theme'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/7.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era — Xanga Theme'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/12.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era — AsianAvenue Theme'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/11.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era — Zuup Theme & Abstract Art'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/5.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era — Mousepad Photoshop Design'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/4.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era — Train Illustration'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/3.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era — Alienware Illustration'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/9.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era — Naha Sushi Flash Website'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/10.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era — ABC Cakes Business Cards'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/6.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era — PixelInfinity.ca Theme'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/2.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era — Xanga Theme (Variant)'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/8.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era — Zuup Theme'
      }
    ]
  },

  interiorsArchitecture: {
    id: 'interiorsArchitecture',
    basic: {
      title: 'Interior & Architecture Design',
      intro:
        'Interior design and architecture studies at Georgian College and OCAD University — architectural models, technical drawings, 3D visualization, and projects spanning residential modernization, sculpture galleries, and community revitalization.',
      desc: 'Interior design and architecture at OCAD — models, technical drawings, and 3D visualizations across residential, gallery, and community programs. Mastered Revit, Fusion 360, and Blender; developed spatial reasoning and design systems thinking that carries into software.',
      roles: ['design engineering'],
      tools: [
        'Revit',
        'Fusion 360',
        'Blender',
        'Photoshop',
        'Technical Drawing',
        'Physical Modeling'
      ],
      skills: [
        'Interior Design',
        'Architecture',
        'Technical Drawing',
        'Revit',
        'Fusion 360',
        'Blender',
        '3D Visualization'
      ],
      startDate: 'Sep 2010',
      endDate: 'Sep 2016'
    },
    extended: {
      win: 'Produced a body of architectural and interior design work at OCAD spanning physical models, technical drawings, and 3D visualizations — developed the spatial reasoning and design systems thinking that now informs software design work.',
      impact:
        'The formal design education — color theory, architectural history, spatial reasoning, and user experience — became the foundation of a design engineering practice that distinguishes technical work ever since.',
      badges: [{ label: 'Institution', value: 'OCAD University' }],
      people: ['tony']
    },
    sections: [
      {
        id: 'architecture-models',
        media: {
          type: 'image',
          src: '/images/projects/interiors-arch/Overview.jpg',
          width: 1920,
          height: 1080,
          alt: "Interior & Architecture Design — 1800's Queen St. Modernization"
        },
        heading: 'Architecture and Interior Design',
        body: 'Projects spanned residential modernization, sculpture gallery design, and community revitalization — each combining precision engineering with creative expression. Physical models and 3D visualizations explored the relationship between form, function, and user experience across a range of scales and programs.'
      },
      {
        id: 'technical-drawing',
        media: {
          type: 'image',
          src: '/images/projects/interiors-arch/floor-plan-&-cross-section.jpg',
          width: 1920,
          height: 1242,
          alt: 'Interior & Architecture Design — Technical Drawing'
        },
        heading: 'Technical Drawing and 3D Modeling',
        body: 'Developed technical drawing skills and mastered Revit, Fusion 360, and Blender to produce axonometric models, floor plans, and cross-sections. Physical models reinforced the relationship between material, structure, and space — skills that directly translate to design system architecture and component hierarchy in software.'
      }
    ],
    showcase: [
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Overview.jpg',
        width: 1920,
        height: 1080,
        alt: "Interior & Architecture Design — 1800's Queen St. Modernization"
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Overview-Cutaway-2.jpg',
        width: 1920,
        height: 1080,
        alt: "Interior & Architecture Design — 1800's Queen St. Modernization Cutaway"
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Overview-Cutaway-1.jpg',
        width: 1920,
        height: 1080,
        alt: "Interior & Architecture Design — 1800's Queen St. Modernization Cutaway"
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/South-West-Overview.jpg',
        width: 300,
        height: 300,
        alt: 'Interior & Architecture Design — Modern Sculpture Gallery'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/South-Overview.jpg',
        width: 300,
        height: 300,
        alt: 'Interior & Architecture Design — Modern Sculpture Gallery'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/West-Overview.jpg',
        width: 300,
        height: 300,
        alt: 'Interior & Architecture Design — Modern Sculpture Gallery'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/North-East-Overview.jpg',
        width: 300,
        height: 300,
        alt: 'Interior & Architecture Design — Modern Sculpture Gallery'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Overview-2.jpg',
        width: 1920,
        height: 1440,
        alt: 'Interior & Architecture Design — Alexandra Park Revitalization'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Street-View.jpg',
        width: 1920,
        height: 1440,
        alt: 'Interior & Architecture Design — Alexandra Park Revitalization'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/East-Overview.jpg',
        width: 1920,
        height: 1080,
        alt: 'Interior & Architecture Design — Das Canoas House Model'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/axonometric-models.jpg',
        width: 1920,
        height: 1242,
        alt: 'Interior & Architecture Design — AGO Staircase Technical Drawing'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/floor-plan-&-cross-section.jpg',
        width: 1920,
        height: 1242,
        alt: 'Interior & Architecture Design — AGO Staircase Technical Drawing'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Final-1.jpg',
        width: 1920,
        height: 1242,
        alt: 'Interior & Architecture Design — Museum of Contemporary Canadian Art Drawings'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Final-2.jpg',
        width: 1920,
        height: 1242,
        alt: 'Interior & Architecture Design — Museum of Contemporary Canadian Art Drawings'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Final-4.jpg',
        width: 1920,
        height: 1242,
        alt: 'Interior & Architecture Design — Museum of Contemporary Canadian Art Drawings'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Light.jpg',
        width: 1920,
        height: 1085,
        alt: 'Interior & Architecture Design — Lamp Sculpture'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Light-Top.jpg',
        width: 1920,
        height: 1085,
        alt: 'Interior & Architecture Design — Lamp Sculpture'
      }
    ]
  },

  industrialDesign: {
    id: 'industrialDesign',
    basic: {
      title: '3D Modeling and Industrial Design',
      intro:
        'Hobby-driven 3D modeling and industrial design using Fusion 360 and Blender — custom 3D-printed solutions for everyday problems, PC hardware, water cooling components, and functional objects.',
      desc: 'Hobby-driven 3D modeling with Fusion 360 and Blender — custom prints for PC hardware, water cooling, and everyday objects. Projects include a full IKEA Bekant server rack, custom PC cases, water blocks, keyfobs, and trophies. Same principles as software: solve for usability.',
      roles: ['design engineering'],
      tools: ['Fusion 360', 'Blender', '3D Printing', 'Industrial Design'],
      skills: [
        '3D Modeling',
        'Industrial Design',
        'Fusion 360',
        'Blender',
        '3D Printing',
        'Fabrication',
        'Product Design'
      ],
      startDate: 'Jan 2021'
    },
    extended: {
      win: 'Designed and 3D-printed a complete home server rack system within an IKEA Bekant cabinet — custom-modeled to integrate NAS, SFF servers, UPS, and all cabling in a furniture-native form factor.',
      impact:
        'Built a functional home lab that serves LLMs and Docker apps — designed, modeled, and fabricated entirely from scratch.',
      badges: [{ label: 'Client', value: 'Independent' }],
      people: ['tony']
    },
    showcase: [
      {
        type: 'image',
        src: '/images/projects/industrial-design/Bekant_Cabinet_2026-May-10_02-26-22PM-000_CustomizedView10916433213.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — Bekant Server Rack for NAS and SFF Servers'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/cf6d4327-aaba-47f1-83bc-4ad2aa772854.PNG',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — Bekant Server Rack (Installed)'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/modern-build_2024-dec-15_11-10-28pm-000_customizedview2748624882.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — Small Form Factor PC Build'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/modern-build_2024-dec-15_11-10-52pm-000_customizedview25809979503.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — Small Form Factor PC Build (Detail)'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/eos_1_a_2024-dec-15_11-32-28pm-000_customizedview18216312656.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — EOS Acrylic Laser Cut PC Case'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/mjolnir_3_2024-dec-15_11-48-20pm-000_customizedview1631237819.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — Mjolnir 3D Printed PC Case'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/eos_block_2024-dec-15_11-50-39pm-000_customizedview34151560115.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — EOS CPU Water Block with Pump'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/eos_block_2024-nov-27_04-57-07am-000_customizedview5928134866.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — EOS CPU Water Block'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/zx-1_mount_2024-dec-15_11-15-23pm-000_customizedview13614885543.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — Nouvolo CPU Block to Iquinix ZX-1 Case Mount'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/case_-_evolv_shift_2_2024-dec-15_11-12-54pm-000_customizedview31469564511.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — Evolv Shift 2 Case Cover'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/redux-assy_2024-dec-15_11-37-14pm-000_customizedview18606186293.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — Magic the Gathering Redux Card Case'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/redux-assy_2024-dec-15_11-37-06pm-000_customizedview18606186293.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — Magic the Gathering Redux Card Case with Insert'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/desk-organizer-redux_2024-dec-15_11-36-28pm-000_customizedview7294577484.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — Desk Organizer Redux'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/macbook_stand_2024-dec-15_11-09-37pm-000_customizedview6170979262.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — MacBook Stand'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/hue-mount_2024-dec-15_11-13-59pm-000_customizedview18169488883.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — Philips Hue Lightbar Mount for Vivo Desk Pole'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/light_pole_mount_-_screw_based_2024-dec-15_11-39-06pm-000_customizedview10171845343.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — Generic Mount for Vivo Desk Monitor Pole'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/koolance_-_fitting_-_90_degree_-_low_profile_2024-dec-15_11-35-21pm-000_customizedview10262692848.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — Koolance Fitting 90 Degree Low Profile'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/vandal_switch_2024-dec-15_11-11-49pm-000_customizedview19737110002.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — Anti-Vandal Switch'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/qm-ornament_2024-dec-15_11-41-51pm-000_customizedview39273023891.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — Quantum Mob Logo Ornament'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/keyfob_2024-dec-15_11-41-34pm-000_customizedview3517011434.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — Quantum Mob Logo Keyfob'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/trophy_-_tech_tank_2024-dec-15_11-07-40pm-000_customizedview13777747030.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — TechTank Sashimis Sports Trophy'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/burger_press_2024-dec-15_11-36-02pm-000_customizedview3640923189.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling — Burger Press'
      }
    ]
  }
}

const projectIds: ProjectId[] = [
  'tkodevPortfolio',
  'gridflow',
  'techtankToWebsite',
  'loblawsPerfectExperience',
  'beyondMpdOlympus',
  'paypowerReloadablePrepaidMastercardMobileApp',
  'aeroplanShoppingButton',
  'aeroplanEStore',
  'rocMarEngineeringEmployeeDashboard',
  'quantumMobCatalogAppProjectMobCiCdIntegrations',
  'quantumMobCoreUtilitiesAuthModule',
  'airMilesLandingPortalDevelopment',
  'modaMatchVirtualFittingRoom',
  'petsAboveReactModernization',
  'cardinalMeatsFoodServiceWebsiteAndCms',
  'toyotaSalesReportingDashboard',
  'weiserCanadianCatalogWebsite',
  'canadaChiropracticProtectiveAssociationWebsiteAndCms',
  'canadaDryEnterPinContest',
  'canadaDryWebsite',
  'monogramCanadianCatalogWebsite',
  'parentsCanadaMagazineWebsite',
  'toffifeeSpinToWinContest',
  'toyotaBringYourToyotaHomeContest',
  'toyotaMakeADateContest',
  'babyJoggerCanadianCatalogWebsite',
  'earlySoftwareEngineering',
  'web10Era',
  'interiorsArchitecture',
  'industrialDesign'
]

export { projectEntries, projectIds }
