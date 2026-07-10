import { fromZonedTime } from 'date-fns-tz'
import groupBy from 'lodash/groupBy'
import keyBy from 'lodash/keyBy'
import { type ProjectEntry } from '@/types/career'
import { appTimeZone } from './date'

const projectEntries: ProjectEntry[] = [
  {
    id: 'tkodev-web',
    basic: {
      title: 'tko.dev',
      subtitle:
        'Cinematic portfolio built from scratch — token architecture, five-state lifecycle, full Framer Motion system.',
      desc: 'A cinematic personal portfolio built entirely from scratch — no template, no component-library skin. A semantic design-token architecture underpins the visual system, a five-state Zustand lifecycle choreographs the loading sequence, page transitions, and ambient audio, and a Framer Motion layer drives every reveal. Full light and dark theming throughout, with Claude Code and Cursor used to accelerate delivery without ever ceding design ownership.',
      role: 'Design Engineer',
      category: 'featured',
      startDate: fromZonedTime('2025-03-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering', 'design engineering'],
      win: 'Designed and shipped a cinematic portfolio, end to end.',
      impact:
        'A live production site demonstrating full-stack design engineering: from semantic token architecture to Framer Motion choreography to Zustand state lifecycle management.',
      skills: [
        'Design Systems',
        'Semantic Tokens',
        'Animation',
        'State Management',
        'Light/Dark Theming',
        'Next.js',
        'TypeScript'
      ],
      tools: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'Zustand',
        'Claude Code',
        'Cursor'
      ]
    },
    media: {
      stories: [
        {
          id: 'token-architecture',
          asset: {
            type: 'image',
            src: '/career/projects/tkodev/www.tko.dev_(1080p).png',
            width: 1920,
            height: 1080,
            alt: 'tko.dev — Personal Portfolio'
          },
          title: 'Semantic Token Architecture and Cinematic Lifecycle',
          body: 'Built the visual system on a two-layer token architecture: a brand layer holds every raw value, and a semantic, shadcn-shaped layer is the only thing components consume, with full light and dark theming from one considered design. A Zustand lifecycle store drives the site from loading to ready, choreographing a boot sequence and staggered reveals through a Framer Motion layer. Every token, ramp, and primitive is original work rather than a component-library skin.'
        },
        {
          id: 'design-ownership',
          asset: {
            type: 'image',
            src: '/career/projects/tkodev/lifecycle-boot-sequence.png',
            width: 1920,
            height: 1080,
            alt: 'tko.dev — Boot Sequence and Lifecycle States'
          },
          title: 'Ambient Audio by Consent, and AI Without Ceding Ownership',
          body: 'The lifecycle store carries five distinct states, and the boot sequence, page transitions, and an ambient background music system all read from it — the audio never plays without explicit user consent. Claude Code and Cursor accelerated feature development and held code standards, but no design decision was delegated: every token, transition, interaction pattern, and system state was designed by hand.'
        }
      ]
    },
    parents: {
      clientId: 'tkodev',
      staffIds: ['tony']
    }
  },
  {
    id: 'gridflow-app',
    basic: {
      title: 'Gridflow',
      subtitle:
        'Social media scheduler owned PRD to production — Next.js, Supabase, TanStack Query, Zod.',
      desc: 'Social media scheduling app with full-cycle product ownership from PRD to deployed code. Next.js App Router, Supabase (Auth, Database, Storage), TanStack Query, React Hook Form with Zod, shadcn/ui, Radix UI, and Framer Motion. Built with Claude Code.',
      role: 'Design Engineer',
      category: 'featured',
      startDate: fromZonedTime('2026-03-01', appTimeZone)
    },
    extended: {
      duties: ['product thinking', 'software engineering'],
      win: 'Owned a social scheduler from PRD to deployed code.',
      skills: [
        'Product Ownership',
        'Full-Stack Development',
        'TypeScript',
        'Next.js',
        'Supabase',
        'TanStack Query',
        'Form Validation'
      ],
      tools: [
        'Next.js',
        'TypeScript',
        'Supabase',
        'TanStack Query',
        'React Hook Form',
        'shadcn/ui',
        'Framer Motion',
        'Claude Code'
      ]
    },
    media: {
      stories: [
        {
          id: 'grid-planning',
          asset: {
            type: 'video',
            src: '/career/projects/gridflow/cursorful-video-1782448184978.mp4',
            width: 944,
            height: 1920,
            alt: 'Gridflow — True-to-Life Grid Planning'
          },
          title: 'True-to-Life Grid Planning and Drag-to-Arrange',
          body: 'Gridflow previews an Instagram feed as a true-to-life three-column grid, so a profile looks exactly as intended before anything is posted. Posts and their media reorder through dnd-kit sortable interactions, backed by optimistic UI so the grid responds instantly. Every post carries a lifecycle status — draft, scheduled, or published — surfaced directly on the grid.'
        },
        {
          id: 'fullstack-supabase',
          asset: {
            type: 'image',
            src: '/career/projects/gridflow/5ABDD3A0-68A2-4F71-851D-68ECC4BF6E06_1_105_c.jpeg',
            width: 621,
            height: 1264,
            alt: 'Gridflow — Social Media Scheduling App'
          },
          title: 'Full-Cycle Ownership on a Supabase Backend',
          body: 'Owned the product from PRD through deployed code on a Next.js App Router and Supabase stack — Auth, Postgres, and Storage behind posts, post media, and profile buckets. TanStack Query isolates all async server state in a dedicated query layer, while React Hook Form governs auth, settings, and caption inputs. The app is structured for Vercel serverless deployment.'
        }
      ]
    },
    parents: {
      clientId: 'tkodev',
      staffIds: ['tony']
    }
  },
  {
    id: 'techtank-next',
    basic: {
      title: 'TechTank Next',
      subtitle:
        'Ground-up rebuild of the community site — role-based onboarding funnels and a live event archive.',
      desc: 'A complete rewrite of the TechTank Toronto community site, owned from PRD through production. Conversion-optimized onboarding funnels route speakers, hosts, sponsors, and volunteers down distinct role paths; a shadcn/ui component library keeps the interface consistent; and a structured event archive with Vercel analytics makes the program measurable. Scaffolded with v0 and built with Claude Code.',
      role: 'Digital Lead',
      category: 'featured',
      startDate: fromZonedTime('2026-04-01', appTimeZone)
    },
    extended: {
      duties: ['product thinking', 'software engineering', 'design engineering'],
      win: 'Shipped a full community platform, PRD to production.',
      impact:
        'A live community hub that converts visitors into active TechTank Toronto participants across speaker, host, sponsor, and volunteer roles.',
      skills: [
        'Next.js',
        'TypeScript',
        'shadcn/ui',
        'Brand Design',
        'Content Strategy',
        'Information Architecture',
        'Conversion Optimization'
      ],
      tools: [
        'Next.js',
        'TypeScript',
        'shadcn/ui',
        'Tailwind CSS',
        'Vercel Analytics',
        'v0',
        'Claude Code'
      ]
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/techtank-to-website/next.techtankto.com_(iPad%20Pro)%20(2).png',
          width: 2732,
          height: 2048,
          alt: 'TechTank Toronto — Website Redesign (Tablet)'
        },
        {
          type: 'image',
          src: '/career/projects/techtank-to-website/next.techtankto.com_(iPhone%2014%20Pro%20Max).png',
          width: 1290,
          height: 2796,
          alt: 'TechTank Toronto — Website Redesign (Mobile)'
        },
        {
          type: 'image',
          src: '/career/projects/techtank-to-website/next.techtankto.com_(iPhone%2014%20Pro%20Max)%20(1).png',
          width: 1290,
          height: 2796,
          alt: 'TechTank Toronto — Website Redesign (Mobile)'
        }
      ],
      stories: [
        {
          id: 'community-platform',
          asset: {
            type: 'image',
            src: '/career/projects/techtank-to-website/next.techtankto.com_(iPad%20Pro).png',
            width: 2732,
            height: 2048,
            alt: 'TechTank Toronto — Website Redesign'
          },
          title: 'Community Platform and Onboarding Architecture',
          body: 'Led the complete rewrite of the TechTank Toronto website — modernizing the stack, improving information architecture, and creating a conversion-oriented experience. Role-based onboarding funnels channel visitors into active community roles: speaker, host, sponsor, and volunteer. Built on Next.js with shared layouts, shadcn/ui components, and Vercel analytics.'
        },
        {
          id: 'brand-content',
          asset: {
            type: 'image',
            src: '/career/projects/techtank-to-website/next.techtankto.com_(iPad%20Pro)%20(1).png',
            width: 2732,
            height: 2048,
            alt: 'TechTank Toronto — Website Redesign (Tablet)'
          },
          title: 'Brand, Content, and Community Growth',
          body: 'Designed graphics and established a cohesive social media brand identity, wrote copy to grow audience reach, and captured event photography for campaign content. Presented technical talks at community events on topics from browser extensions to engineering best practices.'
        }
      ]
    },
    parents: {
      clientId: 'techtank-to',
      staffIds: ['tony']
    }
  },
  {
    id: 'loblaw-perfect-experience',
    basic: {
      title: 'Loblaw Perfect Experience',
      subtitle:
        'Cross-platform OpenTelemetry SDK adopted org-wide at Loblaw, streaming enriched traces to Grafana and Tempo.',
      desc: 'A cross-platform OpenTelemetry SDK architected as the first shared observability infrastructure across Loblaw Digital, adopted by multiple lines of business spanning divergent Next.js versions and both server and browser runtimes. Custom transformation pipelines feed VictoriaMetrics, Tempo, and Grafana, while a Zustand state store enriches distributed traces with context as they cross the server-to-client boundary.',
      role: 'Web Lead',
      category: 'featured',
      startDate: fromZonedTime('2024-12-01', appTimeZone),
      endDate: fromZonedTime('2025-06-01', appTimeZone)
    },
    extended: {
      duties: ['product thinking', 'software engineering'],
      win: "Built Loblaw Digital's first shared observability layer.",
      impact:
        'Delivered organization-wide P95 latency diagnostics, frontend error rate monitoring, and SLO breach visibility across multiple lines of business.',
      skills: [
        'OpenTelemetry',
        'Observability',
        'SDK Architecture',
        'Distributed Tracing',
        'State Management',
        'TypeScript',
        'Next.js'
      ],
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
      stats: [
        { title: 'Adoption across Loblaw Digital lines of business', value: 'Multi-LOB' },
        { title: 'Latency diagnostics delivered org-wide', value: 'P95' }
      ]
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/loblaws-perfect-experience/grafana.png',
          width: 1040,
          height: 580,
          alt: 'Loblaws Perfect Experience — Grafana Observability Dashboard'
        }
      ],
      stories: [
        {
          id: 'sdk-architecture',
          asset: {
            type: 'image',
            src: '/career/projects/loblaws-perfect-experience/grafana.png',
            width: 1040,
            height: 580,
            alt: 'Loblaws Perfect Experience — SDK Architecture and Grafana Dashboard'
          },
          title: 'SDK Architecture and Cross-Platform Abstraction',
          body: 'Architected a cross-platform OpenTelemetry SDK that unified instrumentation across divergent Next.js versions, server and browser runtimes, and LOB-specific requirements — without fragmentation. Defined SDK architecture, data flows, and Grafana dashboard POC; presented to engineering leads and executives across LOBs to drive alignment on instrumentation strategy and platform adoption.'
        },
        {
          id: 'state-enrichment',
          asset: {
            type: 'image',
            src: '/career/projects/loblaws-perfect-experience/desktop.png',
            width: 3840,
            height: 2160,
            alt: 'Loblaws Perfect Experience — Desktop'
          },
          title: 'State Management and Trace Context Enrichment',
          body: 'Built a Zustand-powered state store with historical state tracking to enrich distributed trace context across server and client boundaries — designed for extensibility across divergent LOB requirements and runtime environments.'
        },
        {
          id: 'observability-pipeline',
          asset: {
            type: 'image',
            src: '/career/projects/loblaws-perfect-experience/mobile.png',
            width: 1290,
            height: 2796,
            alt: 'Loblaws Perfect Experience — Mobile'
          },
          title: 'Observability Pipeline and Organization-Wide Visibility',
          body: 'Designed custom transformation pipelines feeding VictoriaMetrics, Tempo, and Grafana. Delivered organization-wide P95 latency diagnostics, frontend error rate monitoring, and SLO breach visibility — actionable performance signals across multiple lines of business.'
        }
      ]
    },
    parents: {
      clientId: 'loblaws-digital',
      agencyId: 'telus-digital',
      staffIds: ['tony', 'jax', 'ron', 'yuval']
    }
  },
  {
    id: 'beyond-mpd-olympus',
    basic: {
      title: 'Beyond MPD Olympus',
      subtitle:
        'Safety-critical oil rig platform with real-time SVG telemetry — 10,000+ data points at subsecond tolerance.',
      desc: 'Embedded from discovery through delivery on a safety-critical oil rig control platform. Co-developed an event-driven architecture over RabbitMQ and gRPC that replaced fragmented hardware control systems with a single unified platform, engineered real-time SVG visualizations tracking more than 10,000 data points at subsecond tolerance, and contributed to the Figma design system by building components and feeding engineering constraints back into the design.',
      role: 'Web Lead',
      category: 'featured',
      startDate: fromZonedTime('2023-05-01', appTimeZone),
      endDate: fromZonedTime('2024-11-01', appTimeZone)
    },
    extended: {
      duties: ['product thinking', 'software engineering', 'design engineering'],
      win: 'Co-developed a safety-critical event-driven control architecture.',
      impact: 'Precision control infrastructure for active drill sites.',
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
      tools: ['Node.js', 'RabbitMQ', 'tRPC', 'gRPC', 'SVG', 'Jest', 'Figma'],
      stats: [
        { title: 'Data points tracked in real time', value: '10,000+' },
        { title: 'Data refresh tolerance', value: '<1s' },
        { title: 'Embedded delivery', value: '18mo' }
      ]
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/beyond-mpd-olympus/3-basic.png',
          width: 1350,
          height: 756,
          alt: 'Beyond MPD — Olympus Basic Tripping Interface'
        }
      ],
      stories: [
        {
          id: 'discovery',
          asset: {
            type: 'image',
            src: '/career/projects/beyond-mpd-olympus/beyond.png',
            width: 1920,
            height: 1080,
            alt: 'Beyond MPD — Discovery and Constraint Mapping'
          },
          title: 'Discovery and Constraint Mapping',
          body: "Before any implementation began, I participated in client-facing discovery and refinement sessions with product owners and the client's engineering team. I interviewed client engineers to assess existing systems, hardware specifications, and integration requirements. These conversations surfaced constraints that shaped every architecture decision — from event broker topology to UI component interaction models."
        },
        {
          id: 'event-driven-architecture',
          asset: {
            type: 'image',
            src: '/career/projects/beyond-mpd-olympus/olympus.png',
            width: 3660,
            height: 1994,
            alt: 'Beyond MPD — Event-Driven Architecture'
          },
          title: 'Event-Driven Architecture',
          body: 'I co-developed an event-driven architecture using RabbitMQ as the core event broker, ensuring reliable command and status communications across safety-critical control systems. The architecture interfaced with oil rig panels, communications buses, and PLCs — systems where message delivery guarantees and fault tolerance are non-negotiable.'
        },
        {
          id: 'fluid-pressure-control',
          asset: {
            type: 'image',
            src: '/career/projects/beyond-mpd-olympus/3.png',
            width: 1319,
            height: 729,
            alt: 'Beyond MPD — Fluid Pressure Control and Sensor Calibration'
          },
          title: 'Fluid Pressure Control and Sensor Calibration',
          body: 'I contributed to back-end solutions supporting the calibration of chokes and sensors, and co-authored interpolation algorithms for precise fluid pressure control. Each algorithm was validated with rigorous unit tests to ensure correctness under real-world operating conditions where a miscalculation has field consequences.'
        },
        {
          id: 'data-visualization',
          asset: {
            type: 'image',
            src: '/career/projects/beyond-mpd-olympus/1.png',
            width: 1060,
            height: 590,
            alt: 'Beyond MPD — Real-Time Data Visualization'
          },
          title: 'Real-Time Data Visualization',
          body: 'Leveraging SVG, I designed real-time and historical data visualization solutions capable of tracking over 10,000 data points with subsecond tolerance. The visualizations covered ramp interfaces, tripping operations, rollover tracking, and sensor state — each designed to surface critical operational state at a glance.'
        },
        {
          id: 'design-system',
          asset: {
            type: 'image',
            src: '/career/projects/beyond-mpd-olympus/2.png',
            width: 1170,
            height: 657,
            alt: 'Beyond MPD — Design System and Engineering Feedback Loop'
          },
          title: 'Design System and Engineering Feedback Loop',
          body: 'I contributed to the Figma design system for the Olympus platform — building components and providing engineering feedback on component feasibility, hardware interaction constraints, and implementation tradeoffs throughout the build.'
        },
        {
          id: 'global-deployment',
          asset: {
            type: 'image',
            src: '/career/projects/beyond-mpd-olympus/4-rollover.png',
            width: 906,
            height: 509,
            alt: 'Beyond MPD — Global Deployment Readiness'
          },
          title: 'Global Deployment Readiness',
          body: 'To support deployment across geographically distributed rigs, I developed robust validation schemas, optimized CI/CD pipelines, and ensured global compatibility through precise unit conversion standards — accounting for measurement variations across operating regions.'
        }
      ]
    },
    parents: {
      clientId: 'beyond',
      agencyId: 'telus-digital',
      staffIds: ['tony', 'tulio', 'zeena', 'harpreet']
    }
  },
  {
    id: 'paypower-prepaid-mastercard',
    basic: {
      title: 'PayPower Prepaid Mastercard',
      subtitle:
        'White-label React Native app for reloadable Mastercards — multi-currency precision, tRPC migration, 12-pipeline CI/CD.',
      desc: 'Led white-label React Native development for reloadable prepaid Mastercards across iOS, Android, and web. Migrated a legacy Redux system to tRPC, added multi-currency support with big-integer financial precision, and wired real-time push notifications, all backed by a 12-pipeline CI/CD strategy that kept releases reliable across three platforms. The engagement secured three new clients.',
      role: 'Team Lead',
      category: 'featured',
      startDate: fromZonedTime('2021-10-01', appTimeZone),
      endDate: fromZonedTime('2022-04-01', appTimeZone)
    },
    extended: {
      duties: ['product thinking', 'software engineering', 'design engineering'],
      win: 'Won three new clients on a white-label prepaid app.',
      impact:
        'Transformed a single-client mobile app into a white-label platform that could be deployed for multiple prepaid card programs with configuration-only customization.',
      skills: [
        'React Native',
        'Mobile Development',
        'CI/CD',
        'White-Label Architecture',
        'tRPC',
        'Monorepo',
        'Incident Response'
      ],
      tools: ['React Native', 'tRPC', 'Monorepo', 'CI/CD', 'Sentry', 'Mixpanel', 'TypeScript'],
      stats: [
        { title: 'CI/CD pipelines across iOS, Android, and web', value: '12' },
        { title: 'Client engagements proposed and won', value: '3' }
      ]
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/paypower-reloadable-prepaid-mastercard-mobile-app/paypower-dashboard.png',
          width: 375,
          height: 812,
          alt: 'PayPower Mastercard App — Dashboard'
        },
        {
          type: 'image',
          src: '/career/projects/paypower-reloadable-prepaid-mastercard-mobile-app/paypower-verify.png',
          width: 375,
          height: 812,
          alt: 'PayPower Mastercard App — Verify Identity'
        }
      ],
      stories: [
        {
          id: 'white-label-architecture',
          asset: {
            type: 'image',
            src: '/career/projects/paypower-reloadable-prepaid-mastercard-mobile-app/paypower.png',
            width: 1640,
            height: 1024,
            alt: 'PayPower Mastercard App — White-Label Architecture'
          },
          title: 'White-Label Architecture',
          body: 'Implemented a monorepo architecture with feature flag-based whitelabeling, enabling tailored deployments for diverse client needs. Migrated a legacy Redux system to tRPC, enhancing data efficiency. Added multi-currency support with precise financial calculations using big integers to prevent rounding errors in financial transactions.'
        },
        {
          id: 'cicd-reliability',
          asset: {
            type: 'image',
            src: '/career/projects/paypower-reloadable-prepaid-mastercard-mobile-app/paypower-overview.png',
            width: 1640,
            height: 1024,
            alt: 'PayPower Mastercard App — CI/CD and Production Reliability'
          },
          title: 'CI/CD Strategy and Production Reliability',
          body: 'Owned a 12-pipeline CI/CD strategy across iOS, Android, and web with integrated Sentry monitoring and Mixpanel analytics. Directed incident response for critical security, deployment, and production issues, ensuring rapid resolution and minimal user impact.'
        },
        {
          id: 'client-engagement',
          asset: {
            type: 'image',
            src: '/career/projects/paypower-reloadable-prepaid-mastercard-mobile-app/paypower-cards.png',
            width: 375,
            height: 812,
            alt: 'PayPower Mastercard App — Cards'
          },
          title: 'Client Engagement and Business Development',
          body: 'Secured three new client engagements by building the business case for the white-label monorepo, a Redux-to-React Query refactor, and a UX-focused mobile redesign. Worked directly with sales to shape scope and win engagements alongside the product owner.'
        }
      ]
    },
    parents: {
      clientId: 'peoples-group',
      agencyId: 'quantum-mob',
      staffIds: ['tony', 'ben', 'leo', 'nikita']
    }
  },
  {
    id: 'aeroplan-shopping-button',
    basic: {
      title: 'Aeroplan Shopping Button',
      subtitle:
        "Aeroplan's first cross-browser extension — one consistent experience across Chrome, Firefox, Safari, and Edge.",
      desc: "Architected Aeroplan's first cross-browser shopping extension, with consistent behavior across Chrome, Firefox, Safari, and Edge. An SWR-based CORS bypass, multi-domain session tracking for purchase attribution, and a multi-level caching layer kept high-traffic retailer data fast and accurate across hundreds of retail sites — turning a first-of-its-kind concept into a shippable product.",
      role: 'Team Lead',
      category: 'featured',
      startDate: fromZonedTime('2021-07-01', appTimeZone),
      endDate: fromZonedTime('2022-01-01', appTimeZone)
    },
    extended: {
      duties: ['product thinking', 'software engineering'],
      win: "Shipped Aeroplan's first cross-browser extension.",
      impact:
        'Delivered a reliable, scalable browser extension that empowered Aeroplan members to earn rewards effortlessly across hundreds of retailers without friction.',
      skills: [
        'Browser Extension Development',
        'Cross-Browser Architecture',
        'CORS Bypass',
        'Session Tracking',
        'Caching',
        'TypeScript',
        'Product Management'
      ],
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
      stats: [
        { title: 'Browsers supported', value: '4' },
        { title: 'Retail sites integrated', value: '100s' }
      ]
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/aeroplan-shopping-button/aeroplan-ext-04-activated-a-crop.png',
          width: 2880,
          height: 1868,
          alt: 'Aeroplan Shopping Button — Offer Activated'
        },
        {
          type: 'image',
          src: '/career/projects/aeroplan-shopping-button/aeroplan-ext-05-landing-a-crop.png',
          width: 2880,
          height: 1868,
          alt: 'Aeroplan Shopping Button — Home View'
        }
      ],
      stories: [
        {
          id: 'cross-browser-architecture',
          asset: {
            type: 'image',
            src: '/career/projects/aeroplan-shopping-button/aeroplan-ext.png',
            width: 2232,
            height: 936,
            alt: 'Aeroplan Shopping Button — Cross-Browser Architecture'
          },
          title: 'Cross-Browser Architecture',
          body: 'Architected consistent behavior across Chrome, Firefox, Safari, and Edge — a single codebase handling browser-specific extension APIs, content script injection patterns, and background service worker lifecycle differences across four distinct runtimes.'
        },
        {
          id: 'cors-session-tracking',
          asset: {
            type: 'image',
            src: '/career/projects/aeroplan-shopping-button/aeroplan-ext-overview.png',
            width: 1920,
            height: 1080,
            alt: 'Aeroplan Shopping Button — CORS and Session Tracking'
          },
          title: 'CORS Bypass and Multi-Domain Session Tracking',
          body: 'Implemented an SWR-based query system to overcome CORS restrictions and handle real-time retailer data without direct cross-origin calls. Built a navigation tracking system for multi-domain purchase sessions — ensuring reward attribution remained intact across redirects, affiliate hops, and multi-tab checkout flows.'
        },
        {
          id: 'caching-performance',
          asset: {
            type: 'image',
            src: '/career/projects/aeroplan-shopping-button/aeroplan-ext-02-activate-offer-coupons-crop.png',
            width: 1440,
            height: 934,
            alt: 'Aeroplan Shopping Button — Offer Activation'
          },
          title: 'Multi-Level Caching and Performance',
          body: 'Designed a multi-level caching mechanism to manage high traffic and dynamic retailer data — reducing backend load while maintaining responsive performance across hundreds of retail sites. Owned PRDs, estimates, and client expectation management alongside the product owner.'
        }
      ]
    },
    parents: {
      clientId: 'air-canada',
      agencyId: 'quantum-mob',
      staffIds: ['tony']
    }
  },
  {
    id: 'aeroplan-estore',
    basic: {
      title: 'The Aeroplan eStore',
      subtitle:
        'Lead across three Aeroplan engagements — eStore architecture, an Air Canada catalog redesign, an AODA overhaul.',
      desc: 'Lead developer across three consecutive Aeroplan engagements on a high-traffic national loyalty platform. Delivered the initial React/Redux eStore architecture, a catalog redesign with Air Canada API integrations and binary-masked variant indexing, and a five-engineer AODA/WCAG 2.0 AA accessibility overhaul. Proposed and won all three, holding the codebase above 80% test coverage throughout.',
      role: 'Lead Developer',
      category: 'featured',
      startDate: fromZonedTime('2020-01-01', appTimeZone),
      endDate: fromZonedTime('2023-01-01', appTimeZone)
    },
    extended: {
      duties: ['product thinking', 'software engineering'],
      win: 'Proposed and won three consecutive Aeroplan engagements.',
      impact:
        "Elevated Aeroplan's digital platform across user experience, accessibility, and technical scalability — establishing a reusable architecture that supported years of subsequent feature development.",
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
      tools: [
        'React',
        'Redux',
        'Node.js',
        'TypeScript',
        'Jest',
        'React Testing Library',
        'AODA/WCAG 2.0 AA'
      ],
      stats: [
        { title: 'Engagements proposed and won', value: '3' },
        { title: 'Test coverage on critical components', value: '80%+' },
        { title: 'Engineers led through AODA compliance', value: '5' }
      ]
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/aeroplan-e-store/aeroplan-retailers.png',
          width: 1920,
          height: 1080,
          alt: 'Aeroplan eStore — Retailers Intro'
        },
        {
          type: 'image',
          src: '/career/projects/aeroplan-e-store/aeroplan-dyson.png',
          width: 1920,
          height: 1080,
          alt: 'Aeroplan eStore — Dyson Retailer'
        },
        {
          type: 'image',
          src: '/career/projects/aeroplan-e-store/aeroplan-catalog.png',
          width: 1920,
          height: 1080,
          alt: 'Aeroplan eStore — Dyson Retailer Catalog'
        },
        {
          type: 'image',
          src: '/career/projects/aeroplan-e-store/aeroplan-mobile-deals.png',
          width: 430,
          height: 930,
          alt: 'Aeroplan eStore — Mobile Deals'
        },
        {
          type: 'image',
          src: '/career/projects/aeroplan-e-store/aeroplan-mobile-retailer.png',
          width: 430,
          height: 930,
          alt: 'Aeroplan eStore — Mobile Retailer'
        },
        {
          type: 'image',
          src: '/career/projects/aeroplan-e-store/aeroplan-mobile-item.png',
          width: 430,
          height: 930,
          alt: 'Aeroplan eStore — Mobile Product'
        }
      ],
      stories: [
        {
          id: 'initial-architecture',
          asset: {
            type: 'image',
            src: '/career/projects/aeroplan-e-store/aeroplan-for-you.png',
            width: 1920,
            height: 1080,
            alt: 'Aeroplan eStore — Initial Architecture and MVP'
          },
          title: 'Initial Architecture and MVP',
          body: 'Lead developer for the Aeroplan eStore front end, state management, and server model design — the foundational architecture on which subsequent redesigns, accessibility work, and catalog extensions were built. Designed scalable React and Node.js solutions enabling future feature expansion and proposed three follow-on engagements covering architecture refinement, theming, and accessibility.'
        },
        {
          id: 'retailer-catalog',
          asset: {
            type: 'image',
            src: '/career/projects/aeroplan-e-store/aeroplan-listing.png',
            width: 1920,
            height: 1080,
            alt: 'Aeroplan eStore — Retailers Listing'
          },
          title: 'Retailer and Catalog Redesign',
          body: "Spearheaded the eStore's retailer catalog and filtering system redesign — componentized React architecture, Redux-based state management, and whitelabel theming for scalability. Implemented Air Canada API integrations, localization, and binary-masked item variant indexing for a high-traffic national loyalty program."
        },
        {
          id: 'accessibility',
          asset: {
            type: 'image',
            src: '/career/projects/aeroplan-e-store/aeroplan-cart.png',
            width: 1920,
            height: 1080,
            alt: 'Aeroplan eStore — AODA Accessibility Compliance'
          },
          title: 'Accessibility Compliance — AODA AA / WCAG 2.0',
          body: 'Led a team of five engineers through a full AODA/WCAG 2.0 AA accessibility overhaul — structural semantics, focus management, ARIA roles, keyboard navigation, and colour contrast across the entire React/Redux application. Achieved 80%+ test coverage across critical components using React Testing Library and Jest.'
        }
      ]
    },
    parents: {
      clientId: 'air-canada',
      agencyId: 'quantum-mob',
      staffIds: ['tony', 'steven']
    }
  },
  {
    id: 'rocmar-dashboard',
    basic: {
      title: 'RocMar Dashboard',
      subtitle:
        'Design-to-code productivity dashboard — Figma system, four-API OAuth, SVG over millions of data points.',
      desc: 'Full design-to-code ownership of an employee productivity dashboard for an architectural engineering firm. Designed the interface and a reusable design system in Figma, then implemented OAuth/OIDC authentication via Passport.js across four API integrations. SVG visualizations and optimized SQL surfaced millions of historical data points as actionable productivity insights in one cohesive view.',
      role: 'Team Lead',
      category: 'featured',
      startDate: fromZonedTime('2020-11-01', appTimeZone),
      endDate: fromZonedTime('2021-03-01', appTimeZone)
    },
    extended: {
      duties: ['product thinking', 'software engineering', 'design engineering'],
      win: 'Owned an employee dashboard, Figma to production.',
      impact:
        'Delivered a powerful, visually cohesive dashboard that centralized data across four integrations and elevated employee productivity for an architectural engineering firm.',
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
      stats: [
        { title: 'OAuth API integrations', value: '4' },
        { title: 'Historical data points visualized', value: 'Millions' }
      ]
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/roc-mar-engineering-employee-dashboard/rocmar-home.png',
          width: 1920,
          height: 1080,
          alt: 'RocMar Employee Dashboard — Home'
        },
        {
          type: 'image',
          src: '/career/projects/roc-mar-engineering-employee-dashboard/rocmar-dashboard.png',
          width: 1920,
          height: 1080,
          alt: 'RocMar Employee Dashboard — Dashboard'
        }
      ],
      stories: [
        {
          id: 'design-system',
          asset: {
            type: 'image',
            src: '/career/projects/roc-mar-engineering-employee-dashboard/rocmar.png',
            width: 1920,
            height: 1080,
            alt: 'RocMar Employee Dashboard — Interface Design'
          },
          title: 'Interface Design and Design System',
          body: 'Designed the full interface in Figma and developed a comprehensive design system, ensuring visual consistency and intuitive interactions across the dashboard. The design system established reusable components, typography, and color semantics that scaled across all views.'
        },
        {
          id: 'data-integrations',
          asset: {
            type: 'image',
            src: '/career/projects/roc-mar-engineering-employee-dashboard/rocmar-overview.png',
            width: 1920,
            height: 1080,
            alt: 'RocMar Employee Dashboard — Data Integration Overview'
          },
          title: 'Data Integration, Auth, and SVG Visualization',
          body: 'Implemented secure infrastructure with OAuth and OIDC for SSO authentication via Passport.js. Integrated four OAuth-based APIs, transforming user data and browsing habits into actionable productivity insights. Leveraged SVG and optimized SQL queries to combine millions of historical data points spanning years into meaningful, interactive visualizations.'
        }
      ]
    },
    parents: {
      clientId: 'roc-mar',
      agencyId: 'quantum-mob',
      staffIds: ['tony']
    }
  },
  {
    id: 'project-mob',
    basic: {
      title: 'Project Mob',
      subtitle:
        'Internal scaffolding tool that cut new client setup to one command, plus a white-label product catalog.',
      desc: "Built Quantum Mob's white-label product catalog and an internal project scaffolding tool that automated CI/CD pipeline generation — reducing new client project setup to a one-command process, adopted across client engagements.",
      role: 'Team Lead',
      category: 'inactive',
      startDate: fromZonedTime('2020-09-01', appTimeZone),
      endDate: fromZonedTime('2020-10-01', appTimeZone)
    },
    extended: {
      duties: ['product thinking', 'software engineering'],
      skills: [
        'CI/CD',
        'Pipeline Automation',
        'Internal Tooling',
        'Technical Leadership',
        'Monorepo',
        'Node.js'
      ],
      tools: ['CI/CD', 'Monorepo', 'Pipeline Automation', 'Node.js']
    },
    parents: {
      clientId: 'quantum-mob',
      staffIds: ['tony']
    }
  },
  {
    id: 'core-auth-module',
    basic: {
      title: 'Core Auth Module',
      subtitle:
        'Reusable auth and utility modules powering secure sign-in across every Quantum Mob client project.',
      desc: "Built reusable utility and auth modules within Quantum Mob's monorepo structure, enabling reuse across multiple client projects. These modules provided robust, secure authentication solutions for both internal and client applications, reducing development time on future projects.",
      role: 'Software Engineer',
      category: 'inactive',
      startDate: fromZonedTime('2020-07-01', appTimeZone),
      endDate: fromZonedTime('2020-10-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering'],
      skills: ['Authentication', 'OAuth', 'Monorepo', 'Shared Infrastructure', 'Node.js'],
      tools: ['Node.js', 'Monorepo', 'OAuth', 'Authentication']
    },
    parents: {
      clientId: 'quantum-mob',
      staffIds: ['tony']
    }
  },
  {
    id: 'air-miles-rewards-portal',
    basic: {
      title: 'Air Miles Rewards Portal',
      subtitle:
        'Loyalty portal components in a large-team monorepo — Lerna-published, BEM SASS, AODA compliant.',
      desc: 'Implemented React components for the Air Miles landing portal within a large team monorepo — BEM SASS standards for cross-compatible styling, Lerna-published shared components, Jest and Nock test coverage, and AODA/WCAG 2.0 AA accessibility compliance.',
      role: 'Software Engineer',
      category: 'inactive',
      startDate: fromZonedTime('2020-01-01', appTimeZone),
      endDate: fromZonedTime('2020-01-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering'],
      skills: [
        'React',
        'BEM SASS',
        'Accessibility',
        'Jest',
        'Monorepo',
        'Lerna',
        'AODA/WCAG 2.0 AA'
      ],
      tools: ['React', 'Monorepo', 'Lerna', 'BEM SASS', 'Jest', 'AODA/WCAG 2.0 AA']
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/air-miles-landing-portal-development/airmiles.png',
          width: 1920,
          height: 1080,
          alt: 'Air Miles Landing Portal'
        },
        {
          type: 'image',
          src: '/career/projects/air-miles-landing-portal-development/airmiles-partners.png',
          width: 1920,
          height: 1080,
          alt: 'Air Miles Landing Portal — Partner Finder'
        },
        {
          type: 'image',
          src: '/career/projects/air-miles-landing-portal-development/airmiles-earn.png',
          width: 1920,
          height: 1080,
          alt: 'Air Miles Landing Portal — How to Earn'
        },
        {
          type: 'image',
          src: '/career/projects/air-miles-landing-portal-development/airmiles-offers.png',
          width: 1920,
          height: 1080,
          alt: 'Air Miles Landing Portal — Offers'
        },
        {
          type: 'image',
          src: '/career/projects/air-miles-landing-portal-development/airmiles-ways.png',
          width: 1920,
          height: 1080,
          alt: 'Air Miles Landing Portal — 6 Ways to Earn'
        }
      ]
    },
    parents: {
      clientId: 'air-miles',
      agencyId: 'quantum-mob',
      staffIds: ['tony']
    }
  },
  {
    id: 'moda-match',
    basic: {
      title: 'Moda Match',
      subtitle:
        'White-label virtual try-on for Shopify and WooCommerce — body-model previews across thousands of apparel items.',
      desc: 'White-label virtual try-on plugin for Shopify and WooCommerce — DOM-injection install with body model previews for thousands of apparel items, enabling shoppers to visualize fit and dimensions before purchasing. Built with React and Next.js.',
      role: 'Software Engineer',
      category: 'inactive',
      startDate: fromZonedTime('2021-04-01', appTimeZone),
      endDate: fromZonedTime('2021-05-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering'],
      skills: [
        'React',
        'Next.js',
        'Shopify',
        'WooCommerce',
        'DOM Injection',
        'MongoDB',
        'Plugin Development'
      ],
      tools: ['React', 'Next.js', 'MongoDB', 'DOM Injection', 'Shopify', 'WooCommerce']
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/moda-match-virtual-fitting-room/modamatch.png',
          width: 1920,
          height: 1080,
          alt: 'Moda Match — Virtual Fitting Room'
        }
      ]
    },
    parents: {
      clientId: 'moda-match',
      agencyId: 'quantum-mob',
      staffIds: ['tony']
    }
  },
  {
    id: 'pets-above',
    basic: {
      title: 'Pets Above',
      subtitle:
        'End-to-end platform rebuild — modernized React and Redux, reworked RabbitMQ messaging, refined MySQL.',
      desc: 'Modernized the Pets Above application — updated legacy React and Redux to current patterns, improved RabbitMQ messaging, and refined MySQL data handling to align with modern performance and maintainability standards.',
      role: 'Software Engineer',
      category: 'inactive',
      startDate: fromZonedTime('2019-11-01', appTimeZone),
      endDate: fromZonedTime('2019-12-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering'],
      skills: ['React', 'Redux', 'RabbitMQ', 'MySQL', 'Code Modernization', 'Refactoring'],
      tools: ['React', 'Redux', 'RabbitMQ', 'MySQL']
    },
    parents: {
      clientId: 'pets-above',
      agencyId: 'quantum-mob',
      staffIds: ['tony']
    }
  },
  {
    id: 'cardinal-meats',
    basic: {
      title: 'Cardinal Meats',
      subtitle:
        'Full corporate site with a custom CMS — non-technical editors run products and content solo.',
      desc: 'Express-based landing site with an integrated custom CMS for Cardinal Meats — built for non-technical editors to manage products and company content independently without developer involvement.',
      role: 'Front End Developer',
      category: 'inactive',
      startDate: fromZonedTime('2019-04-01', appTimeZone),
      endDate: fromZonedTime('2019-11-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering'],
      skills: ['Express.js', 'Node.js', 'CMS Development', 'Content Management', 'Web Development'],
      tools: ['Express.js', 'Node.js', 'CMS']
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/cardinal-meats-food-service-website-and-cms/cardinal.png',
          width: 1920,
          height: 1080,
          alt: 'Cardinal Meats & Food Service — Website & CMS'
        }
      ]
    },
    parents: {
      clientId: 'cardinal-meats',
      agencyId: 'quantum-mob',
      staffIds: ['tony']
    }
  },
  {
    id: 'toyota-dashboard',
    basic: {
      title: 'Toyota',
      subtitle:
        'Koa.js dealer sales dashboard aggregating real-time dealer and campaign data for faster decisions.',
      desc: 'Developed an internal sales reporting dashboard using Koa.js for Toyota. The dashboard provided real-time data visualization, aggregating dealer and campaign data into a web interface that made it easier for sales teams to track metrics and make informed business decisions.',
      role: 'Front End Developer',
      category: 'inactive',
      startDate: fromZonedTime('2019-04-01', appTimeZone),
      endDate: fromZonedTime('2019-11-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering'],
      skills: ['Koa.js', 'Node.js', 'Data Visualization', 'MySQL', 'Dashboard Development'],
      tools: ['Koa.js', 'Node.js', 'Data Visualization', 'MySQL']
    },
    parents: {
      clientId: 'toyota',
      agencyId: 'brandfire',
      staffIds: ['tony']
    }
  },
  {
    id: 'weiser',
    basic: {
      title: 'Weiser',
      subtitle:
        'Full e-commerce build for Weiser Lock — storefront, product search, configurable variants, Canadian localization.',
      desc: "Led the development of the Canadian catalog website for Weiser Lock using Express and Vue.js, delivering a server-rendered, user-friendly experience. The site showcased Weiser's products with localization for the Canadian market and responsive design across devices.",
      role: 'Lead Developer',
      category: 'inactive',
      startDate: fromZonedTime('2018-04-01', appTimeZone),
      endDate: fromZonedTime('2019-11-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering'],
      skills: ['Vue.js', 'Express.js', 'SSR', 'Localization', 'Responsive Design', 'Node.js'],
      tools: ['Express.js', 'Vue.js', 'SSR', 'Node.js', 'Localization']
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/weiser-canadian-catalog-website/weiser.png',
          width: 1920,
          height: 1080,
          alt: 'Weiser — Canadian Catalog Website'
        }
      ]
    },
    parents: {
      clientId: 'weiser',
      agencyId: 'brandfire',
      staffIds: ['tony']
    }
  },
  {
    id: 'ccpa',
    basic: {
      title: 'CCPA',
      subtitle:
        'Complete association site plus a Dynamics 365 CRM managing member case files and insurance plans.',
      desc: 'Microsoft Dynamics 365 CRM-integrated website for the Canada Chiropractic Protective Association — client case and insurance plan management for member chiropractors, accessible through a centralized platform.',
      role: 'Front End Developer',
      category: 'inactive',
      startDate: fromZonedTime('2017-04-01', appTimeZone),
      endDate: fromZonedTime('2019-04-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering'],
      skills: [
        'CRM Integration',
        'Microsoft Dynamics 365',
        'Node.js',
        'Web Development',
        'Content Management'
      ],
      tools: ['Microsoft Dynamics 365', 'CRM Integration', 'Node.js']
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/canada-chiropractic-protective-association-website-and-cms/ccpa.png',
          width: 1920,
          height: 1080,
          alt: 'Canada Chiropractic Protective Association — Website & CMS'
        },
        {
          type: 'video',
          src: '/career/projects/canada-chiropractic-protective-association-website-and-cms/CCPAinfographic-short.mp4',
          width: 2788,
          height: 1748,
          alt: 'Canada Chiropractic Protective Association — Infographic'
        }
      ]
    },
    parents: {
      clientId: 'ccpa',
      agencyId: 'brandfire',
      staffIds: ['tony']
    }
  },
  {
    id: 'canada-dry-enter-pin',
    basic: {
      title: 'Canada Dry Enter PIN',
      subtitle: 'Time-gated entry and prize-tier validation, built on PHP and Ractive.js.',
      desc: 'PIN-based promotional contest for Canada Dry — time-gated entry logic, prize-tier validation, and an interactive UI built on PHP and Ractive.js.',
      role: 'Front End Developer',
      category: 'inactive',
      startDate: fromZonedTime('2017-04-01', appTimeZone),
      endDate: fromZonedTime('2019-04-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering'],
      skills: ['PHP', 'Ractive.js', 'MySQL', 'Interactive Design', 'Contest Mechanics'],
      tools: ['PHP', 'Ractive.js', 'MySQL']
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/canada-dry-enter-pin-contest/canadadry.png',
          width: 1920,
          height: 1080,
          alt: 'Canada Dry — Enter PIN Contest'
        }
      ]
    },
    parents: {
      clientId: 'canada-dry',
      agencyId: 'brandfire',
      staffIds: ['tony']
    }
  },
  {
    id: 'canada-dry',
    basic: {
      title: 'Canada Dry',
      subtitle:
        'Brand site with parallax storytelling and interactive animations, delivered to brand standards, AODA compliant.',
      desc: 'PHP landing site for Canada Dry featuring parallax effects and interactive animations — delivered to brand standards with AODA-compliant markup.',
      role: 'Front End Developer',
      category: 'inactive',
      startDate: fromZonedTime('2017-04-01', appTimeZone),
      endDate: fromZonedTime('2019-04-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering'],
      skills: [
        'PHP',
        'Parallax Animation',
        'CSS Animation',
        'AODA Compliance',
        'Interactive Design'
      ],
      tools: ['PHP', 'Parallax', 'CSS Animation', 'AODA']
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/canada-dry-website/canadadry.png',
          width: 1920,
          height: 1080,
          alt: 'Canada Dry — Website'
        }
      ]
    },
    parents: {
      clientId: 'canada-dry',
      agencyId: 'brandfire',
      staffIds: ['tony']
    }
  },
  {
    id: 'monogram',
    basic: {
      title: 'Monogram',
      subtitle:
        'Server-rendered Canadian catalog for Monogram (GE Appliances) — localized, responsive product showcase.',
      desc: "Developed a responsive catalog website for Monogram using Koa.js and Ractive.js. The site showcased Monogram's offerings through a clean, accessible interface that adapted seamlessly across devices, with localization for the Canadian market.",
      role: 'Front End Developer',
      category: 'inactive',
      startDate: fromZonedTime('2017-04-01', appTimeZone),
      endDate: fromZonedTime('2019-04-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering'],
      skills: [
        'Koa.js',
        'Ractive.js',
        'SSR',
        'Localization',
        'Responsive Design',
        'Product Catalog'
      ],
      tools: ['Koa.js', 'Ractive.js', 'SSR', 'Localization']
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/monogram-canadian-catalog-website/monogram.png',
          width: 1920,
          height: 1080,
          alt: 'Monogram — Canadian Catalog Website'
        }
      ]
    },
    parents: {
      clientId: 'monogram',
      agencyId: 'brandfire',
      staffIds: ['tony']
    }
  },
  {
    id: 'parents-canada',
    basic: {
      title: 'Parents Canada',
      subtitle:
        'Custom WordPress magazine site — editorial templates, article archive, brand-aligned content management.',
      desc: "Custom WordPress theme for Parents Canada's magazine website — article templates, editorial layout, and content management aligned to the magazine's visual brand and diverse readership.",
      role: 'Front End Developer',
      category: 'inactive',
      startDate: fromZonedTime('2018-04-01', appTimeZone),
      endDate: fromZonedTime('2019-04-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering'],
      skills: ['WordPress', 'PHP', 'Theme Development', 'Content Management', 'Editorial Design'],
      tools: ['WordPress', 'PHP', 'Theme Development']
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/parents-canada-magazine-website/parents.png',
          width: 1920,
          height: 1080,
          alt: 'Parents Canada — Magazine Website'
        }
      ]
    },
    parents: {
      clientId: 'parents-canada',
      agencyId: 'brandfire',
      staffIds: ['tony']
    }
  },
  {
    id: 'toffifee-spin-to-win',
    basic: {
      title: 'Toffifee Spin to Win',
      subtitle: 'Animated SVG wheel with weighted prize-tier logic driving campaign engagement.',
      desc: "Created an interactive spin-to-win promotional contest for Toffifee using Express.js and Ractive.js. The animated SVG wheel mechanic featured prize-tier logic with weighted outcomes, driving customer engagement and enhancing Toffifee's digital marketing campaign.",
      role: 'Front End Developer',
      category: 'inactive',
      startDate: fromZonedTime('2017-04-01', appTimeZone),
      endDate: fromZonedTime('2019-04-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering'],
      skills: ['Express.js', 'Ractive.js', 'SVG Animation', 'Interactive Design', 'Prize Logic'],
      tools: ['Express.js', 'Ractive.js', 'SVG Animation']
    },
    media: {
      visuals: [
        {
          type: 'video',
          src: '/career/projects/toffifee-spin-to-win-contest/toff7026-short.mp4',
          width: 2400,
          height: 1748,
          alt: 'Toffifee — Spin to Win Contest'
        },
        {
          type: 'video',
          src: '/career/projects/toffifee-spin-to-win-contest/toff7026.mp4',
          width: 2400,
          height: 1748,
          alt: 'Toffifee — Spin to Win Contest (Full)'
        },
        {
          type: 'video',
          src: '/career/projects/toffifee-spin-to-win-contest/toff7026-spin.mp4',
          width: 2784,
          height: 1652,
          alt: 'Toffifee — Spin Animation'
        }
      ]
    },
    parents: {
      clientId: 'toffifee',
      agencyId: 'brandfire',
      staffIds: ['tony']
    }
  },
  {
    id: 'bring-your-toyota-home',
    basic: {
      title: 'Bring Your Toyota Home',
      subtitle: 'Pixel-accurate parallax scroll with Apple-style section-by-section motion.',
      desc: "Pixel-accurate parallax scroll experience for Toyota's 'Bring Your Toyota Home' contest — Apple-style section-by-section scroll animations with hover states and transitions. Translated campaign requirements into technical specs and motion implementation.",
      role: 'Front End Developer',
      category: 'inactive',
      startDate: fromZonedTime('2017-04-01', appTimeZone),
      endDate: fromZonedTime('2019-04-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering'],
      skills: [
        'Express.js',
        'Ractive.js',
        'Parallax Animation',
        'CSS',
        'Interactive Design',
        'Motion Design'
      ],
      tools: ['Express.js', 'Ractive.js', 'Parallax Animation', 'CSS']
    },
    media: {
      visuals: [
        {
          type: 'video',
          src: '/career/projects/toyota-bring-your-toyota-home-contest/byth7040-short.mp4',
          width: 1146,
          height: 850,
          alt: 'Toyota — Bring Your Toyota Home Contest'
        },
        {
          type: 'video',
          src: '/career/projects/toyota-bring-your-toyota-home-contest/byth7040-long.mp4',
          width: 1276,
          height: 796,
          alt: 'Toyota — Bring Your Toyota Home Contest (Full)'
        }
      ]
    },
    parents: {
      clientId: 'toyota',
      agencyId: 'brandfire',
      staffIds: ['tony']
    }
  },
  {
    id: 'toyota-make-a-date',
    basic: {
      title: 'Toyota Make a Date',
      subtitle: 'Date-driven promotional microsite with branded, interactive entry mechanics.',
      desc: "Developed a date-driven promotional microsite for Toyota's 'Make a Date' contest, combining Toyota's branding with an engaging interactive interface and entry mechanics. Built on Express.js and Ractive.js.",
      role: 'Front End Developer',
      category: 'inactive',
      startDate: fromZonedTime('2018-04-01', appTimeZone),
      endDate: fromZonedTime('2019-04-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering'],
      skills: [
        'Express.js',
        'Ractive.js',
        'Interactive Design',
        'Promotional Microsite',
        'Web Development'
      ],
      tools: ['Express.js', 'Ractive.js', 'Interactive Design']
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/toyota-make-a-date-contest/toyota.webp',
          width: 900,
          height: 574,
          alt: 'Toyota — Make a Date Contest'
        }
      ]
    },
    parents: {
      clientId: 'toyota',
      agencyId: 'brandfire',
      staffIds: ['tony']
    }
  },
  {
    id: 'baby-jogger',
    basic: {
      title: 'BabyJogger',
      subtitle: 'Localized, responsive product browsing with filtering for the Canadian market.',
      desc: "Created a responsive catalog website for BabyJogger using Koa.js and Ractive.js, offering a seamless browsing experience for customers. The site presented BabyJogger's products in a user-friendly format with filtering and localization for the Canadian market.",
      role: 'Front End Developer',
      category: 'inactive',
      startDate: fromZonedTime('2017-04-01', appTimeZone),
      endDate: fromZonedTime('2018-04-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering'],
      skills: [
        'Koa.js',
        'Ractive.js',
        'Responsive Design',
        'Localization',
        'Product Catalog',
        'Web Development'
      ],
      tools: ['Koa.js', 'Ractive.js', 'Responsive Design', 'Localization']
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/baby-jogger-canadian-catalog-website/babyjogger.png',
          width: 1920,
          height: 1080,
          alt: 'BabyJogger — Canadian Catalog Website'
        }
      ]
    },
    parents: {
      clientId: 'baby-jogger',
      agencyId: 'brandfire',
      staffIds: ['tony']
    }
  },
  {
    id: 'early-software-engineering',
    basic: {
      title: 'Early Software Engineering',
      subtitle:
        'Self-directed FreeCodeCamp curriculum that turned a design background into full-stack JavaScript engineering.',
      desc: 'A self-directed FreeCodeCamp curriculum that carried a career from interior design into software engineering — full-stack JavaScript, OAuth, algorithms, and data structures learned from the ground up. An OCAD design background shaped a series of polished, mobile-first builds shipped from scratch: Simon Says, Tic Tac Toe, a Pomodoro timer, a calculator, and a weather widget.',
      role: 'Student',
      category: 'featured',
      startDate: fromZonedTime('2016-09-01', appTimeZone),
      endDate: fromZonedTime('2019-05-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering', 'design engineering'],
      win: 'Crossed from interior design into software.',
      impact:
        'Established the engineering and design foundation that would define a career at the intersection of software engineering and design systems.',
      skills: [
        'JavaScript',
        'React.js',
        'Node.js',
        'Full-Stack Development',
        'Mobile-First Design',
        'Algorithms',
        'Data Structures'
      ],
      tools: ['React.js', 'Node.js', 'Koa.js', 'Express.js', 'jQuery', 'OAuth', 'MySQL']
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/early-software-engineering/mockup-mobile-game-m.jpg',
          width: 1980,
          height: 1506,
          alt: 'Early Software Engineering — Tic Tac Toe Mobile Mockup'
        },
        {
          type: 'image',
          src: '/career/projects/early-software-engineering/mockup-mobile-m (3).jpg',
          width: 2259,
          height: 1506,
          alt: 'Early Software Engineering — Pomodoro Mobile Mockup'
        },
        {
          type: 'image',
          src: '/career/projects/early-software-engineering/mockup-mobile-m (2).jpg',
          width: 1980,
          height: 1506,
          alt: 'Early Software Engineering — Calculator Mobile Mockup'
        },
        {
          type: 'image',
          src: '/career/projects/early-software-engineering/mockup-mobile.jpg',
          width: 960,
          height: 640,
          alt: 'Early Software Engineering — Weather Widget Mockup'
        },
        {
          type: 'image',
          src: '/career/projects/early-software-engineering/screenshot-6+ (1).jpg',
          width: 414,
          height: 736,
          alt: 'Early Software Engineering — Simon Says'
        },
        {
          type: 'image',
          src: '/career/projects/early-software-engineering/screenshot-6+.jpg',
          width: 414,
          height: 736,
          alt: 'Early Software Engineering — Tic Tac Toe'
        },
        {
          type: 'image',
          src: '/career/projects/early-software-engineering/screenshot-game-6+.jpg',
          width: 414,
          height: 736,
          alt: 'Early Software Engineering — Tic Tac Toe (Game)'
        },
        {
          type: 'image',
          src: '/career/projects/early-software-engineering/screenshot-6+ (4).jpg',
          width: 414,
          height: 736,
          alt: 'Early Software Engineering — Pomodoro Timer'
        },
        {
          type: 'image',
          src: '/career/projects/early-software-engineering/screenshot-6+ (3).jpg',
          width: 414,
          height: 736,
          alt: 'Early Software Engineering — Calculator'
        },
        {
          type: 'image',
          src: '/career/projects/early-software-engineering/screenshot-6+ (2).jpg',
          width: 414,
          height: 736,
          alt: 'Early Software Engineering — Weather Widget'
        }
      ],
      stories: [
        {
          id: 'full-stack-foundation',
          asset: {
            type: 'image',
            src: '/career/projects/early-software-engineering/mockup-mobile-m (1).jpg',
            width: 2259,
            height: 1506,
            alt: 'Early Software Engineering — Full-Stack Foundation'
          },
          title: 'Full-Stack JavaScript Foundation',
          body: 'Immersed in full-stack JavaScript fundamentals — DOM manipulation, Node.js, OAuth authentication, algorithms, and data structures — through a self-directed FreeCodeCamp curriculum. Built real-world projects at my own pace, fostering both technical skill and self-discipline.'
        },
        {
          id: 'design-meets-engineering',
          asset: {
            type: 'image',
            src: '/career/projects/early-software-engineering/mockup-mobile-m.jpg',
            width: 1980,
            height: 1506,
            alt: 'Early Software Engineering — Design Meets Engineering'
          },
          title: 'Design Background Applied to Engineering',
          body: 'Applied a background in functional design, color theory, and composition from OCAD to create interfaces that were minimalist yet polished and user-centric. Every project was designed from scratch before any code was written — establishing a design-led engineering approach that has defined the career since.'
        }
      ]
    },
    parents: {
      clientId: 'free-code-camp',
      staffIds: ['tony']
    }
  },
  {
    id: 'web10-era',
    basic: {
      title: 'Web 1.0 Era',
      subtitle:
        'Pixel-perfect web design and illustration, hand-coded for the dial-up era before modern tooling existed.',
      desc: 'Pixel-perfect web design from the Web 1.0 era, self-taught from an early age. Photoshop-sliced templates, table-based HTML and CSS, and custom themes for Sony Ericsson phones, Winamp, and early social platforms like Xanga, AsianAvenue, and Zuup — every asset optimized for dial-up and shipped to live sites across Netscape and IE6, long before modern frameworks existed.',
      role: 'Web Designer',
      category: 'featured',
      startDate: fromZonedTime('2000-01-01', appTimeZone),
      endDate: fromZonedTime('2010-01-01', appTimeZone)
    },
    extended: {
      duties: ['design engineering'],
      win: 'Hand-coded live sites before modern tooling existed.',
      impact:
        'Established a foundational design sensibility and technical curiosity that would drive every engineering and design decision in the decade that followed.',
      skills: [
        'Photoshop',
        'Illustrator',
        'Flash',
        'HTML',
        'CSS',
        'Web Design',
        'Digital Illustration'
      ],
      tools: ['Photoshop', 'Illustrator', 'Flash', 'Dreamweaver', 'HTML', 'CSS 1 & 2', 'JavaScript']
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/web-10-era/1.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — Sony Ericsson Phone Theme'
        },
        {
          type: 'image',
          src: '/career/projects/web-10-era/12.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — AsianAvenue Theme'
        },
        {
          type: 'image',
          src: '/career/projects/web-10-era/11.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — Zuup Theme & Abstract Art'
        },
        {
          type: 'image',
          src: '/career/projects/web-10-era/5.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — Mousepad Photoshop Design'
        },
        {
          type: 'image',
          src: '/career/projects/web-10-era/4.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — Train Illustration'
        },
        {
          type: 'image',
          src: '/career/projects/web-10-era/3.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — Alienware Illustration'
        },
        {
          type: 'image',
          src: '/career/projects/web-10-era/9.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — Naha Sushi Flash Website'
        },
        {
          type: 'image',
          src: '/career/projects/web-10-era/10.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — ABC Cakes Business Cards'
        },
        {
          type: 'image',
          src: '/career/projects/web-10-era/2.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — Xanga Theme (Variant)'
        },
        {
          type: 'image',
          src: '/career/projects/web-10-era/8.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — Zuup Theme'
        }
      ],
      stories: [
        {
          id: 'pixel-perfect-design',
          asset: {
            type: 'image',
            src: '/career/projects/web-10-era/6.jpg',
            width: 1920,
            height: 1500,
            alt: 'Web 1.0 Era — PixelInfinity.ca Theme'
          },
          title: 'Pixel-Perfect Web Design',
          body: 'Designed and built pixel-perfect web layouts using Photoshop-sliced templates — exported to table-based HTML and hand-coded CSS before grid and flex existed. Every asset was optimized for dial-up speeds while maintaining visual precision across Netscape Navigator and Internet Explorer 6.'
        },
        {
          id: 'platform-themes',
          asset: {
            type: 'image',
            src: '/career/projects/web-10-era/7.jpg',
            width: 1920,
            height: 1500,
            alt: 'Web 1.0 Era — Xanga Theme'
          },
          title: 'Custom Platform Themes and Illustration',
          body: "Designed custom themes for social platforms (Xanga, AsianAvenue, Zuup) and hardware (Sony Ericsson phones, Winamp) — each requiring understanding of the host environment's rendering constraints. Also produced original abstract art and illustrations that ran alongside the design work."
        }
      ]
    },
    parents: {
      clientId: 'tkodev',
      staffIds: ['tony']
    }
  },
  {
    id: 'interiors-architecture',
    basic: {
      title: 'Interior & Architecture Design',
      subtitle:
        'Interior and architectural design at OCAD — physical models, technical drawings, and 3D spatial visualizations.',
      desc: 'Interior design and architecture study at OCAD University, producing a body of work across residential, gallery, and community programs — physical models, technical drawings, and 3D visualizations built in Revit, Fusion 360, and Blender. The spatial reasoning and design-systems thinking developed here still carries directly into how software gets designed today.',
      role: 'Student',
      category: 'featured',
      startDate: fromZonedTime('2010-09-01', appTimeZone),
      endDate: fromZonedTime('2016-09-01', appTimeZone)
    },
    extended: {
      duties: ['design engineering'],
      win: 'Trained in spatial design and architecture at OCAD.',
      impact:
        'The formal design education — color theory, architectural history, spatial reasoning, and user experience — became the foundation of a design engineering practice that distinguishes technical work ever since.',
      skills: [
        'Interior Design',
        'Architecture',
        'Technical Drawing',
        'Revit',
        'Fusion 360',
        'Blender',
        '3D Visualization'
      ],
      tools: [
        'Revit',
        'Fusion 360',
        'Blender',
        'Photoshop',
        'Technical Drawing',
        'Physical Modeling'
      ]
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/interiors-architecture/Overview-Cutaway-2.jpg',
          width: 1920,
          height: 1080,
          alt: "Interior & Architecture Design — 1800's Queen St. Modernization Cutaway"
        },
        {
          type: 'image',
          src: '/career/projects/interiors-architecture/Overview-Cutaway-1.jpg',
          width: 1920,
          height: 1080,
          alt: "Interior & Architecture Design — 1800's Queen St. Modernization Cutaway"
        },
        {
          type: 'image',
          src: '/career/projects/interiors-architecture/South-West-Overview.jpg',
          width: 300,
          height: 300,
          alt: 'Interior & Architecture Design — Modern Sculpture Gallery'
        },
        {
          type: 'image',
          src: '/career/projects/interiors-architecture/South-Overview.jpg',
          width: 300,
          height: 300,
          alt: 'Interior & Architecture Design — Modern Sculpture Gallery'
        },
        {
          type: 'image',
          src: '/career/projects/interiors-architecture/West-Overview.jpg',
          width: 300,
          height: 300,
          alt: 'Interior & Architecture Design — Modern Sculpture Gallery'
        },
        {
          type: 'image',
          src: '/career/projects/interiors-architecture/North-East-Overview.jpg',
          width: 300,
          height: 300,
          alt: 'Interior & Architecture Design — Modern Sculpture Gallery'
        },
        {
          type: 'image',
          src: '/career/projects/interiors-architecture/Overview-2.jpg',
          width: 1920,
          height: 1440,
          alt: 'Interior & Architecture Design — Alexandra Park Revitalization'
        },
        {
          type: 'image',
          src: '/career/projects/interiors-architecture/Street-View.jpg',
          width: 1920,
          height: 1440,
          alt: 'Interior & Architecture Design — Alexandra Park Revitalization'
        },
        {
          type: 'image',
          src: '/career/projects/interiors-architecture/East-Overview.jpg',
          width: 1920,
          height: 1080,
          alt: 'Interior & Architecture Design — Das Canoas House Model'
        },
        {
          type: 'image',
          src: '/career/projects/interiors-architecture/axonometric-models.jpg',
          width: 1920,
          height: 1242,
          alt: 'Interior & Architecture Design — AGO Staircase Technical Drawing'
        },
        {
          type: 'image',
          src: '/career/projects/interiors-architecture/Final-1.jpg',
          width: 1920,
          height: 1242,
          alt: 'Interior & Architecture Design — Museum of Contemporary Canadian Art Drawings'
        },
        {
          type: 'image',
          src: '/career/projects/interiors-architecture/Final-2.jpg',
          width: 1920,
          height: 1242,
          alt: 'Interior & Architecture Design — Museum of Contemporary Canadian Art Drawings'
        },
        {
          type: 'image',
          src: '/career/projects/interiors-architecture/Final-4.jpg',
          width: 1920,
          height: 1242,
          alt: 'Interior & Architecture Design — Museum of Contemporary Canadian Art Drawings'
        },
        {
          type: 'image',
          src: '/career/projects/interiors-architecture/Light.jpg',
          width: 1920,
          height: 1085,
          alt: 'Interior & Architecture Design — Lamp Sculpture'
        },
        {
          type: 'image',
          src: '/career/projects/interiors-architecture/Light-Top.jpg',
          width: 1920,
          height: 1085,
          alt: 'Interior & Architecture Design — Lamp Sculpture'
        }
      ],
      stories: [
        {
          id: 'architecture-models',
          asset: {
            type: 'image',
            src: '/career/projects/interiors-architecture/Overview.jpg',
            width: 1920,
            height: 1080,
            alt: "Interior & Architecture Design — 1800's Queen St. Modernization"
          },
          title: 'Architecture and Interior Design',
          body: 'Projects spanned residential modernization, sculpture gallery design, and community revitalization — each combining precision engineering with creative expression. Physical models and 3D visualizations explored the relationship between form, function, and user experience across a range of scales and programs.'
        },
        {
          id: 'technical-drawing',
          asset: {
            type: 'image',
            src: '/career/projects/interiors-architecture/floor-plan-&-cross-section.jpg',
            width: 1920,
            height: 1242,
            alt: 'Interior & Architecture Design — Technical Drawing'
          },
          title: 'Technical Drawing and 3D Modeling',
          body: 'Developed technical drawing skills and mastered Revit, Fusion 360, and Blender to produce axonometric models, floor plans, and cross-sections. Physical models reinforced the relationship between material, structure, and space — skills that directly translate to design system architecture and component hierarchy in software.'
        }
      ]
    },
    parents: {
      clientId: 'ocad-university',
      staffIds: ['tony']
    }
  },
  {
    id: 'industrial-design',
    basic: {
      title: '3D Modeling and Industrial Design',
      subtitle:
        'Hobby-driven 3D modeling and printing, from a full server rack to custom PC hardware and everyday objects.',
      desc: 'Hobby-driven 3D modeling in Fusion 360 and Blender — custom prints for PC hardware, water cooling, and everyday objects. Projects range from a full IKEA Bekant server rack integrating NAS, SFF servers, and a UPS in a furniture-native form factor to custom PC cases, water blocks, keyfobs, and trophies. The same principle as software throughout: model the object around how it is actually used.',
      role: 'Industrial Designer',
      category: 'featured',
      startDate: fromZonedTime('2021-01-01', appTimeZone)
    },
    extended: {
      duties: ['design engineering'],
      win: '3D-modeled a complete home server rack from scratch.',
      impact:
        'Built a functional home lab that serves LLMs and Docker apps — designed, modeled, and fabricated entirely from scratch.',
      skills: [
        '3D Modeling',
        'Industrial Design',
        'Fusion 360',
        'Blender',
        '3D Printing',
        'Fabrication',
        'Product Design'
      ],
      tools: ['Fusion 360', 'Blender', '3D Printing', 'Industrial Design']
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/industrial-design/cf6d4327-aaba-47f1-83bc-4ad2aa772854.PNG',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — Bekant Server Rack (Installed)'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/modern-build_2024-dec-15_11-10-28pm-000_customizedview2748624882.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — Small Form Factor PC Build'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/modern-build_2024-dec-15_11-10-52pm-000_customizedview25809979503.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — Small Form Factor PC Build (Detail)'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/eos_1_a_2024-dec-15_11-32-28pm-000_customizedview18216312656.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — EOS Acrylic Laser Cut PC Case'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/mjolnir_3_2024-dec-15_11-48-20pm-000_customizedview1631237819.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — Mjolnir 3D Printed PC Case'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/eos_block_2024-nov-27_04-57-07am-000_customizedview5928134866.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — EOS CPU Water Block'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/zx-1_mount_2024-dec-15_11-15-23pm-000_customizedview13614885543.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — Nouvolo CPU Block to Iquinix ZX-1 Case Mount'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/case_-_evolv_shift_2_2024-dec-15_11-12-54pm-000_customizedview31469564511.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — Evolv Shift 2 Case Cover'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/redux-assy_2024-dec-15_11-37-14pm-000_customizedview18606186293.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — Magic the Gathering Redux Card Case'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/redux-assy_2024-dec-15_11-37-06pm-000_customizedview18606186293.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — Magic the Gathering Redux Card Case with Insert'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/desk-organizer-redux_2024-dec-15_11-36-28pm-000_customizedview7294577484.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — Desk Organizer Redux'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/macbook_stand_2024-dec-15_11-09-37pm-000_customizedview6170979262.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — MacBook Stand'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/hue-mount_2024-dec-15_11-13-59pm-000_customizedview18169488883.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — Philips Hue Lightbar Mount for Vivo Desk Pole'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/light_pole_mount_-_screw_based_2024-dec-15_11-39-06pm-000_customizedview10171845343.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — Generic Mount for Vivo Desk Monitor Pole'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/koolance_-_fitting_-_90_degree_-_low_profile_2024-dec-15_11-35-21pm-000_customizedview10262692848.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — Koolance Fitting 90 Degree Low Profile'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/vandal_switch_2024-dec-15_11-11-49pm-000_customizedview19737110002.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — Anti-Vandal Switch'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/qm-ornament_2024-dec-15_11-41-51pm-000_customizedview39273023891.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — Quantum Mob Logo Ornament'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/keyfob_2024-dec-15_11-41-34pm-000_customizedview3517011434.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — Quantum Mob Logo Keyfob'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/trophy_-_tech_tank_2024-dec-15_11-07-40pm-000_customizedview13777747030.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — TechTank Sashimis Sports Trophy'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/burger_press_2024-dec-15_11-36-02pm-000_customizedview3640923189.png',
          width: 1200,
          height: 1200,
          alt: '3D Modeling — Burger Press'
        }
      ],
      stories: [
        {
          id: 'bekant-server-rack',
          asset: {
            type: 'image',
            src: '/career/projects/industrial-design/Bekant_Cabinet_2026-May-10_02-26-22PM-000_CustomizedView10916433213.png',
            width: 1200,
            height: 1200,
            alt: '3D Modeling — Bekant Server Rack for NAS and SFF Servers'
          },
          title: 'IKEA Bekant Home Server Rack',
          body: 'Modeled a complete home server rack inside an IKEA Bekant cabinet, custom-fitting a NAS, small-form-factor servers, a UPS, and all cabling into a furniture-native form factor. The result is a working home lab that serves LLMs and Docker apps while reading as furniture, not equipment. The same principle as software throughout: model the object around how it is actually used.'
        },
        {
          id: 'pc-water-cooling',
          asset: {
            type: 'image',
            src: '/career/projects/industrial-design/eos_block_2024-dec-15_11-50-39pm-000_customizedview34151560115.png',
            width: 1200,
            height: 1200,
            alt: '3D Modeling — EOS CPU Water Block with Pump'
          },
          title: 'Custom PC Cases and Water-Cooling Parts',
          body: 'Designed and 3D-printed a family of PC hardware in Fusion 360 and Blender: the Mjolnir printed case, the EOS acrylic laser-cut case and its CPU water block, and mounts adapting a Nouvolo block and Koolance fittings to a compact chassis. Each part solves a real fitment problem rather than a purely aesthetic one, prototyped and refined for function first.'
        }
      ]
    },
    parents: {
      clientId: 'tkodev',
      staffIds: ['tony']
    }
  }
]

const projectEntryById = keyBy(projectEntries, (projectEntry) => projectEntry.id)
const projectEntriesByCategory = groupBy(
  projectEntries,
  (projectEntry) => projectEntry.basic.category
)

export { projectEntries, projectEntriesByCategory, projectEntryById }
