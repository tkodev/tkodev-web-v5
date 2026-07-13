import { fromZonedTime } from 'date-fns-tz'
import groupBy from 'lodash/groupBy'
import keyBy from 'lodash/keyBy'
import { type ProjectEntry } from '@/types/career'
import { appTimeZone } from './date'

/** Every project, newest first; the source of truth for works surfaces and home cards. */
const projectEntries: ProjectEntry[] = [
  {
    id: 'tkodev-web',
    basic: {
      title: 'tko.dev',
      subtitle:
        'Portfolio built from scratch — semantic token architecture, cinematic boot sequence, WebGL field, full Framer Motion reveal system.',
      desc: 'A personal portfolio built entirely from scratch — no template, no component-library skin. A semantic design-token architecture underpins a monochrome, dark-first command surface, a cinematic boot sequence and a Framer Motion layer choreograph every reveal, and a WebGL contour field animates the underlay. Presented as a declassified engineering dossier: the work is the evidence, the interface is the instrument around it. Built with Claude Code without ever ceding design ownership.',
      role: 'Design Engineer',
      category: 'featured',
      startDate: fromZonedTime('2025-03-01', appTimeZone)
    },
    extended: {
      duties: ['software engineering', 'design engineering'],
      win: 'Designed and shipped a cinematic portfolio, end to end.',
      impact:
        'A live production site demonstrating full-stack design engineering: from semantic token architecture to Framer Motion choreography to a WebGL contour field in the underlay.',
      skills: [
        'Design Systems',
        'Semantic Tokens',
        'Animation',
        'WebGL',
        'Motion Design',
        'Next.js',
        'TypeScript'
      ],
      tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebGL', 'Claude Code']
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/tkodev-web/tkodev-works-featured.png',
          width: 2880,
          height: 1620,
          alt: 'tko.dev — Selected Works'
        },
        {
          type: 'image',
          src: '/career/projects/tkodev-web/tkodev-experience.png',
          width: 2880,
          height: 1620,
          alt: 'tko.dev — Experience Service Record'
        },
        {
          type: 'image',
          src: '/career/projects/tkodev-web/tkodev-about.png',
          width: 2880,
          height: 1620,
          alt: 'tko.dev — About Identity File'
        },
        {
          type: 'image',
          src: '/career/projects/tkodev-web/tkodev-about-method.png',
          width: 2880,
          height: 1620,
          alt: 'tko.dev — About Method and Process'
        },
        {
          type: 'image',
          src: '/career/projects/tkodev-web/tkodev-detail-figure.png',
          width: 2880,
          height: 1620,
          alt: 'tko.dev — Work Detail Annotated Figure'
        },
        {
          type: 'image',
          src: '/career/projects/tkodev-web/tkodev-mobile-1.png',
          width: 1920,
          height: 1080,
          alt: 'tko.dev — Mobile: work detail, about, and process'
        },
        {
          type: 'image',
          src: '/career/projects/tkodev-web/tkodev-mobile-2.png',
          width: 1920,
          height: 1080,
          alt: 'tko.dev — Mobile: experience, works, and home heroes'
        }
      ],
      stories: [
        {
          id: 'cinematic-portfolio-system',
          asset: {
            type: 'image',
            src: '/career/projects/tkodev-web/tkodev-home.png',
            width: 2880,
            height: 1620,
            alt: 'tko.dev — Cinematic Portfolio Homepage'
          },
          title: 'Semantic Token Architecture and Cinematic Boot Sequence',
          body: 'Designed and shipped the portfolio as its own proof of work: a cinematic interface built from scratch, not a template or component-library skin. The homepage is the first signal, but the deeper system is semantic token architecture, a cinematic boot sequence, Framer Motion choreography, a WebGL contour field, and an interaction language that makes the site feel like a live engineering dossier.'
        },
        {
          id: 'works-index',
          asset: {
            type: 'image',
            src: '/career/projects/tkodev-web/tkodev-works.png',
            width: 2880,
            height: 1620,
            alt: 'tko.dev — Works Index'
          },
          title: 'Work Index as Visual Evidence',
          body: 'Built the works page around the portfolio intent: the work is the content, and the interface is the instrument around it. Project media, HUD framing, shuffled main-image tiles, featured cards, and archive groupings make the range legible quickly while still letting each project expand into a deeper case-study narrative.'
        },
        {
          id: 'project-dossier',
          asset: {
            type: 'image',
            src: '/career/projects/tkodev-web/tkodev-works-detail.png',
            width: 2880,
            height: 1620,
            alt: 'tko.dev — Project Dossier'
          },
          title: 'Case Study System and Authored Data',
          body: 'Modeled the portfolio around structured career constants rather than page-specific copy: each project carries metadata, stats, story assets, visuals, collaborators, and client relationships. The project dossier view proves that architecture by turning the same data into cinematic hero tiles, story sections, evidence plates, next-project navigation, metadata, and SEO.'
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
        'Social media scheduler owned PRD through a working build — Next.js, Supabase, TanStack Query, Zod.',
      desc: 'Social media scheduling app with full-cycle product ownership from PRD through a working full-stack build, in active development. Next.js App Router, Supabase (Auth, Database, Storage), TanStack Query, React Hook Form with Zod, shadcn/ui, Radix UI, and Framer Motion. Built with Claude Code.',
      role: 'Design Engineer',
      category: 'featured',
      startDate: fromZonedTime('2026-03-01', appTimeZone)
    },
    extended: {
      duties: ['product thinking', 'software engineering'],
      win: 'Turned feed planning into a working full-stack product.',
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
          id: 'product-positioning',
          asset: {
            type: 'image',
            src: '/career/projects/gridflow-app/SCR-20260712-qfst.png',
            width: 1988,
            height: 1810,
            alt: 'Gridflow marketing landing page — "Plan your grid as a whole"'
          },
          title: 'Product Thesis Before Product Surface',
          body: 'Defined the product around a creator insight: the feed is judged as a whole composition, but most tools still treat posts as isolated units. The landing page is evidence of that framing — organize, plan, publish — and of the core question Gridflow answers: does this post belong here? I designed and built the marketing surface on the same Next.js system as the app, so positioning, interface language, and implementation all point at the same product idea.'
        },
        {
          id: 'full-product-walkthrough',
          asset: {
            type: 'video',
            src: '/career/projects/gridflow-app/gridflow-mobile.mp4',
            width: 1920,
            height: 1080,
            alt: 'Gridflow walkthrough — plan, library, tag sets, settings, subscription tiers, and profile switching, responsive across desktop and mobile'
          },
          title: 'A Complete Product, Not a Demo Screen',
          body: 'Built the app as a real product loop: plan a grid, manage a library of saved imagery, maintain tag sets, switch profiles, and configure subscription settings from one responsive interface. The walkthrough matters because it shows the breadth of ownership — product model, IA, full-stack data flows, responsive components, and mobile drag-to-reorder all working together instead of one polished mockup pretending to be a product.'
        },
        {
          id: 'grid-validation',
          asset: {
            type: 'image',
            src: '/career/projects/gridflow-app/SCR-20260712-qehb.png',
            width: 2108,
            height: 1370,
            alt: 'Gridflow Plan workspace — live profile grid with Pattern and Clash validation badges'
          },
          title: 'Turning Taste Into Product Logic',
          body: 'Built the Plan workspace around the thing creators actually evaluate: the relationship between posts. The grid flags repeated patterns and neighbouring clashes inline, translating a subjective visual judgment into product feedback the user can act on. The screenshot supports the systems story: dnd-kit reordering, optimistic UI, and validation rules read the whole composition so the interface can answer instantly when the feed starts to drift.'
        }
      ],
      visuals: [
        {
          type: 'image',
          src: '/career/projects/gridflow-app/SCR-20260712-qejc.jpeg',
          width: 2110,
          height: 1282,
          alt: 'Gridflow Library — saved-imagery moodboard collections and tag sets'
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
          src: '/career/projects/techtank-next/www.techtankto.com_(1080p).png',
          width: 1920,
          height: 1080,
          alt: 'TechTank Toronto — Website Redesign (Desktop)'
        },
        {
          type: 'image',
          src: '/career/projects/techtank-next/techtankto-mobile-1.png',
          width: 1920,
          height: 1080,
          alt: 'TechTank Toronto — Website Redesign (Mobile)'
        }
      ],
      stories: [
        {
          id: 'community-homepage',
          asset: {
            type: 'image',
            src: '/career/projects/techtank-next/next.techtankto.com_(iPad%20Pro).png',
            width: 2732,
            height: 2048,
            alt: 'TechTank Toronto — Community Homepage'
          },
          title: 'Community Homepage and Conversion Path',
          body: 'Owned the TechTank rebuild from product framing through shipped code, turning a volunteer-run meetup presence into a clear community platform. The homepage establishes the promise, proof points, and primary paths into the organization; behind it are the information architecture, responsive component system, and analytics hooks needed to make the community measurable.'
        },
        {
          id: 'event-archive',
          asset: {
            type: 'image',
            src: '/career/projects/techtank-next/next.techtankto.com_(iPad%20Pro)%20(2).png',
            width: 2732,
            height: 2048,
            alt: 'TechTank Toronto — Event Archive'
          },
          title: 'Structured Event Archive and Analytics',
          body: 'Designed and built the event archive as the operational memory of the community: years of talks, socials, coffee chats, sports events, and experiments become searchable, filterable, and maintainable. The screenshot shows the public interface, but the value is the content model and admin-friendly structure that let organizers keep the program alive without rebuilding pages by hand.'
        },
        {
          id: 'role-based-onboarding',
          asset: {
            type: 'image',
            src: '/career/projects/techtank-next/next.techtankto.com_(iPad%20Pro)%20(1).png',
            width: 2732,
            height: 2048,
            alt: 'TechTank Toronto — Get Involved Role Paths'
          },
          title: 'Role-Based Onboarding Funnels',
          body: 'Mapped community growth into role-based funnels for speakers, hosts, sponsors, and volunteers. Each path translates a vague "I want to help" into expectations, benefits, and a next step, reflecting the product work behind the site: clarify the audience, reduce ambiguity, and convert goodwill into active participation.'
        }
      ]
    },
    parents: {
      clientId: 'techtank-to',
      staffIds: ['tony']
    }
  },
  {
    id: 'approved-by-acca',
    basic: {
      title: 'Approved by Acca',
      subtitle:
        'Conversion-focused marketing site for a Toronto mortgage agent — scaffolded in v0, shipped on Next.js and shadcn.',
      desc: 'A dark, editorial marketing site for Acca Chan, a Toronto mortgage agent with a former-banker background. The build turns a personal brand into a clear conversion path: a positioning hero, service breakdown, a plain-language "how it works" flow, lender proof, reviews, and an FAQ, all pointed at booking a free loan assessment. Scaffolded in v0, then designed and built out on Next.js and shadcn/ui, and deployed on Vercel with Claude Code.',
      role: 'Design Engineer',
      category: 'active',
      startDate: fromZonedTime('2026-07-01', appTimeZone)
    },
    extended: {
      duties: ['design engineering', 'software engineering'],
      win: "Shipped a mortgage agent's brand and marketing site end to end.",
      skills: [
        'Landing Page Design',
        'Brand Design',
        'Conversion Optimization',
        'Next.js',
        'TypeScript',
        'shadcn/ui',
        'Responsive Design'
      ],
      tools: ['Next.js', 'TypeScript', 'shadcn/ui', 'Tailwind CSS', 'v0', 'Vercel', 'Claude Code']
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/approved-by-acca/www.approvedbyacca.ca_(1080p).png',
          width: 3840,
          height: 2160,
          alt: 'Approved by Acca — Mortgage Agent Landing Page'
        }
      ]
    },
    parents: {
      clientId: 'acca-chan',
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
      stories: [
        {
          id: 'grafana-dashboard',
          asset: {
            type: 'image',
            src: '/career/projects/loblaw-perfect-experience/grafana.png',
            width: 1040,
            height: 581,
            alt: 'Loblaw Perfect Experience — Grafana Dashboard'
          },
          title: 'Grafana Dashboard Proof of Concept',
          body: 'Defined the SDK architecture, data flow, and Grafana proof of concept that made the observability program concrete for Loblaw Digital leaders. The dashboard turns raw OpenTelemetry output into operational signals such as memory pressure, request throughput, signups, and client-side load percentiles, giving multiple lines of business a shared language for performance.'
        },
        {
          id: 'trace-diagnostics',
          asset: {
            type: 'image',
            src: '/career/projects/loblaw-perfect-experience/traces.png',
            width: 1227,
            height: 690,
            alt: 'Loblaw Perfect Experience — Distributed Traces'
          },
          title: 'Distributed Trace Diagnostics',
          body: 'Built the trace-enrichment layer that carries useful state across server rendering, browser work, and BFF calls in divergent Next.js applications. The trace view is the evidence: nested operations, service boundaries, span timing, and error points become visible without forcing every line of business to reinvent instrumentation.'
        },
        {
          id: 'storefront-instrumentation',
          asset: {
            type: 'image',
            src: '/career/projects/loblaw-perfect-experience/desktop.png',
            width: 3840,
            height: 2160,
            alt: 'Loblaw Perfect Experience — Shoppers Drug Mart Storefront'
          },
          title: 'Storefront Instrumentation at Scale',
          body: 'Shaped the SDK around real commerce surfaces instead of a clean-room demo: divergent Next.js versions, browser and server runtimes, and line-of-business requirements all had to fit one instrumentation model. The Shoppers storefront anchors the story because it proves the abstraction on a production-scale experience with frontend performance, traces, errors, and SLO signals flowing into VictoriaMetrics, Tempo, and Grafana.'
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
        { title: 'Real-time data points', value: '10,000+' },
        { title: 'Data refresh tolerance', value: '<1s' },
        { title: 'Embedded delivery', value: '18mo' }
      ]
    },
    media: {
      visuals: [
        {
          type: 'image',
          src: '/career/projects/beyond-mpd-olympus/2.png',
          width: 1177,
          height: 657,
          alt: 'Beyond MPD — Design System and Engineering Feedback Loop'
        },
        {
          type: 'image',
          src: '/career/projects/beyond-mpd-olympus/4-rollover.png',
          width: 906,
          height: 509,
          alt: 'Beyond MPD — Global Deployment Readiness'
        },
        {
          type: 'image',
          src: '/career/projects/beyond-mpd-olympus/beyond.png',
          width: 1920,
          height: 1080,
          alt: 'Beyond MPD — Discovery and Constraint Mapping'
        },
        {
          type: 'image',
          src: '/career/projects/beyond-mpd-olympus/olympus.png',
          width: 3600,
          height: 1994,
          alt: 'Beyond MPD — Event-Driven Architecture'
        }
      ],
      stories: [
        {
          id: 'ramp-control',
          asset: {
            type: 'image',
            src: '/career/projects/beyond-mpd-olympus/1.png',
            width: 1060,
            height: 590,
            alt: 'Beyond MPD — Ramp Control Interface'
          },
          title: 'Ramp Control and Real-Time Telemetry',
          body: 'Led front-end discovery and implementation for control surfaces where the interface is part of the safety system, not a dashboard afterthought. The ramp view combines pressure targets, choke state, bit and hole depth, flow readings, and live curves; the deeper work is SVG telemetry, coordinate precision, and subsecond updates that match active rig constraints.'
        },
        {
          id: 'advanced-tripping',
          asset: {
            type: 'image',
            src: '/career/projects/beyond-mpd-olympus/3-advanced.png',
            width: 1319,
            height: 729,
            alt: 'Beyond MPD — Advanced Tripping Configuration'
          },
          title: 'Advanced Tripping Configuration',
          body: 'Co-developed the tripping workflow from client engineering requirements through usable controls, balancing dense field data with operator comprehension. The advanced table supports depth-based pressure and speed targets, validation, and edit states while live gauges keep pressure, hookload, trip speed, block height, and flow readings visible during configuration.'
        },
        {
          id: 'basic-tripping',
          asset: {
            type: 'image',
            src: '/career/projects/beyond-mpd-olympus/3-basic.png',
            width: 1350,
            height: 756,
            alt: 'Beyond MPD — Basic Tripping Controls'
          },
          title: 'Basic Tripping Controls',
          body: 'Translated the same safety-critical model into a basic mode for operators who need fast control over static pressure, dynamic pressure, and hookload thresholds. This is where product judgment and engineering constraints meet: preserve the rig visualization and live gauges, reduce the input surface, and keep the workflow dependable under field pressure.'
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
          src: '/career/projects/paypower-prepaid-mastercard/paypower-mobile-2.png',
          width: 1920,
          height: 1080,
          alt: 'PayPower Mastercard App — Remote Identity Verification'
        },
        {
          type: 'image',
          src: '/career/projects/paypower-prepaid-mastercard/paypower-mobile-3.png',
          width: 1920,
          height: 1080,
          alt: 'PayPower Mastercard App — Card Activation and Multi-Card Management'
        }
      ],
      stories: [
        {
          id: 'white-label-platform',
          asset: {
            type: 'image',
            src: '/career/projects/paypower-prepaid-mastercard/paypower.png',
            width: 1920,
            height: 1080,
            alt: 'PayPower Mastercard App — Product Overview'
          },
          title: 'White-Label Platform Strategy',
          body: 'Led the React Native work and business case that turned PayPower from a single-client prepaid app into a reusable white-label platform for reloadable Mastercard programs. The product overview supports the story, but the win is strategic: configurable branding, shared account flows, and a mobile foundation strong enough to help secure three new client engagements.'
        },
        {
          id: 'mobile-redesign',
          asset: {
            type: 'image',
            src: '/career/projects/paypower-prepaid-mastercard/paypower-overview.png',
            width: 1920,
            height: 1080,
            alt: 'PayPower Mastercard App — Mobile Screens Overview'
          },
          title: 'Mobile Redesign and Financial Workflows',
          body: 'Led the UX-focused mobile redesign while pushing the platform forward under the hood. The screen set shows account, card, and payment flows, but the experience is backed by a Redux-to-tRPC migration, multi-currency support, and big-integer financial calculations that protect precision in prepaid-card transactions.'
        },
        {
          id: 'account-dashboard',
          asset: {
            type: 'image',
            src: '/career/projects/paypower-prepaid-mastercard/paypower-mobile-1.png',
            width: 1920,
            height: 1080,
            alt: 'PayPower Mastercard App — Account Onboarding and Card Dashboard'
          },
          title: 'Account Onboarding and Card Dashboard',
          body: 'Built the everyday account surfaces customers rely on after launch: onboarding, balance review, pending and posted transactions, bill payment, reloads, and card actions. These screens are user-facing proof of the platform work beneath them, where shared flows, configuration points, CI/CD, Sentry, and Mixpanel made releases reliable across iOS, Android, and web.'
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
          body: 'Led system design for Aeroplan’s first cross-browser shopping extension, turning a browser-specific problem into one consistent product across Chrome, Firefox, Safari, and Edge. The architecture normalized extension APIs, content script injection, permissions, and background lifecycle differences so the team could ship one reliable earning experience instead of four fragile implementations.'
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
          body: 'Solved the hard loyalty-program problem beneath the UI: retailer data, browser security boundaries, affiliate redirects, and reward attribution all had to survive real shopping behavior. I implemented an SWR-backed data layer for retailer updates and a multi-domain session tracker that preserved purchase attribution across redirects, affiliate hops, and multi-tab checkout flows.'
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
          body: 'Owned the delivery shape alongside the product owner: PRDs, estimates, client expectations, and the caching strategy needed to support hundreds of retail sites. The multi-level cache reduced backend load while keeping activation and offer states responsive, turning a first-of-its-kind browser extension into a shippable product for a national loyalty platform.'
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
          src: '/career/projects/aeroplan-estore/aeroplan-retailers.png',
          width: 1920,
          height: 1080,
          alt: 'Aeroplan eStore — Retailers Intro'
        },
        {
          type: 'image',
          src: '/career/projects/aeroplan-estore/aeroplan-dyson.png',
          width: 1920,
          height: 1080,
          alt: 'Aeroplan eStore — Dyson Retailer'
        },
        {
          type: 'image',
          src: '/career/projects/aeroplan-estore/aeroplan-mobile-deals.png',
          width: 430,
          height: 930,
          alt: 'Aeroplan eStore — Mobile Deals'
        },
        {
          type: 'image',
          src: '/career/projects/aeroplan-estore/aeroplan-mobile-1.png',
          width: 1920,
          height: 1080,
          alt: 'Aeroplan eStore — Mobile Experience'
        }
      ],
      stories: [
        {
          id: 'initial-architecture',
          asset: {
            type: 'image',
            src: '/career/projects/aeroplan-estore/aeroplan-for-you.png',
            width: 1920,
            height: 1080,
            alt: 'Aeroplan eStore — Initial Architecture and MVP'
          },
          title: 'Initial Architecture and MVP',
          body: 'Led the initial Aeroplan eStore build across front-end architecture, Redux state management, and the Node.js server model. This first engagement established the foundation that later redesigns, accessibility work, and catalog extensions could build on, and it created enough client trust to propose and win the next two Aeroplan engagements.'
        },
        {
          id: 'retailer-catalog',
          asset: {
            type: 'image',
            src: '/career/projects/aeroplan-estore/aeroplan-listing.png',
            width: 1920,
            height: 1080,
            alt: 'Aeroplan eStore — Retailers Listing'
          },
          title: 'Retailer and Catalog Redesign',
          body: 'Spearheaded the retailer and catalog redesign for a high-traffic national loyalty platform, turning the eStore into a more scalable shopping surface. The work combined componentized React, Redux state architecture, whitelabel theming, localization, Air Canada API integrations, and binary-masked item variant indexing so retailer and product data could stay fast, accurate, and extensible.'
        },
        {
          id: 'accessibility',
          asset: {
            type: 'image',
            src: '/career/projects/aeroplan-estore/aeroplan-cart.png',
            width: 1920,
            height: 1080,
            alt: 'Aeroplan eStore — AODA Accessibility Compliance'
          },
          title: 'Accessibility Compliance — AODA AA / WCAG 2.0',
          body: 'Led five engineers through a full AODA/WCAG 2.0 AA accessibility overhaul across the React/Redux application. The engagement covered structural semantics, focus management, ARIA roles, keyboard navigation, colour contrast, and regression protection, with 80%+ test coverage across critical components using React Testing Library and Jest.'
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
          src: '/career/projects/rocmar-dashboard/rocmar-home.png',
          width: 1920,
          height: 1080,
          alt: 'RocMar Employee Dashboard — Home'
        }
      ],
      stories: [
        {
          id: 'data-integrations',
          asset: {
            type: 'image',
            src: '/career/projects/rocmar-dashboard/rocmar-overview.png',
            width: 1920,
            height: 1080,
            alt: 'RocMar Employee Dashboard — Data Integration Overview'
          },
          title: 'Data Integration, Auth, and SVG Visualization',
          body: 'Owned the full-stack data layer for a productivity dashboard that pulled employee activity from four OAuth/OIDC-backed integrations. I designed the auth flow with Passport.js, normalized years of historical activity into Postgres, and used optimized SQL plus SVG visualization to turn millions of records into readable productivity signals.'
        },
        {
          id: 'design-system',
          asset: {
            type: 'image',
            src: '/career/projects/rocmar-dashboard/rocmar.png',
            width: 1920,
            height: 1080,
            alt: 'RocMar Employee Dashboard — Interface Design'
          },
          title: 'Figma-to-Production Dashboard System',
          body: 'Designed the full interface and design system in Figma, then carried it into production as the sole owner of the dashboard experience. The UI work was not surface polish: reusable components, typography, color semantics, and interaction patterns made a dense operational tool feel coherent for an architectural engineering firm.'
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
      category: 'featured',
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
      category: 'featured',
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
          src: '/career/projects/air-miles-rewards-portal/airmiles-offers.png',
          width: 1920,
          height: 1080,
          alt: 'Air Miles Landing Portal — Offers'
        },
        {
          type: 'image',
          src: '/career/projects/air-miles-rewards-portal/airmiles-ways.png',
          width: 1920,
          height: 1080,
          alt: 'Air Miles Landing Portal — 6 Ways to Earn'
        }
      ],
      stories: [
        {
          id: 'landing-portal-components',
          asset: {
            type: 'image',
            src: '/career/projects/air-miles-rewards-portal/airmiles.png',
            width: 1920,
            height: 1080,
            alt: 'Air Miles Landing Portal'
          },
          title: 'Component Work Inside a National Loyalty Platform',
          body: 'Built React components for the Air Miles landing portal inside a large-team monorepo, where consistency mattered as much as speed. The landing page supports the story because it shows the public surface, but the work underneath was shared-component discipline: BEM SASS, Lerna-published packages, accessibility requirements, and implementation that had to fit an existing enterprise design and release system.'
        },
        {
          id: 'partner-finder',
          asset: {
            type: 'image',
            src: '/career/projects/air-miles-rewards-portal/airmiles-partners.png',
            width: 1920,
            height: 1080,
            alt: 'Air Miles Landing Portal — Partner Finder'
          },
          title: 'Partner Discovery and Loyalty Navigation',
          body: 'Implemented portal surfaces that helped collectors understand where and how to earn rewards across a broad partner network. The partner finder screenshot is evidence of the product problem: make a dense loyalty ecosystem feel browsable, branded, and dependable while preserving reusable front-end patterns that other teams could extend without fracturing the experience.'
        },
        {
          id: 'earn-education',
          asset: {
            type: 'image',
            src: '/career/projects/air-miles-rewards-portal/airmiles-earn.png',
            width: 1920,
            height: 1080,
            alt: 'Air Miles Landing Portal — How to Earn'
          },
          title: 'Accessible Education for Reward Mechanics',
          body: 'Turned reward mechanics into clear, accessible interface sections that could explain earning paths without overwhelming the user. The How to Earn screen supports the story because it shows the balance the work required: brand expression, AODA/WCAG 2.0 AA compliance, responsive component behavior, and Jest/Nock-backed confidence in a shared codebase.'
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
          src: '/career/projects/moda-match/modamatch.png',
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
          src: '/career/projects/cardinal-meats/cardinal.png',
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
          src: '/career/projects/weiser/weiser.png',
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
          src: '/career/projects/ccpa/ccpa.png',
          width: 1920,
          height: 1080,
          alt: 'Canada Chiropractic Protective Association — Website & CMS'
        },
        {
          type: 'video',
          src: '/career/projects/ccpa/CCPAinfographic-short.mp4',
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
          src: '/career/projects/canada-dry-enter-pin/canadadry.png',
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
          src: '/career/projects/canada-dry/canadadry.png',
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
          src: '/career/projects/monogram/monogram.png',
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
          src: '/career/projects/parents-canada/parents.png',
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
          src: '/career/projects/toffifee-spin-to-win/toff7026-short.mp4',
          width: 2400,
          height: 1748,
          alt: 'Toffifee — Spin to Win Contest'
        },
        {
          type: 'video',
          src: '/career/projects/toffifee-spin-to-win/toff7026.mp4',
          width: 2400,
          height: 1748,
          alt: 'Toffifee — Spin to Win Contest (Full)'
        },
        {
          type: 'video',
          src: '/career/projects/toffifee-spin-to-win/toff7026-spin.mp4',
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
          src: '/career/projects/bring-your-toyota-home/byth7040-short.mp4',
          width: 1146,
          height: 850,
          alt: 'Toyota — Bring Your Toyota Home Contest'
        },
        {
          type: 'video',
          src: '/career/projects/bring-your-toyota-home/byth7040-long.mp4',
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
          src: '/career/projects/toyota-make-a-date/toyota.webp',
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
          src: '/career/projects/baby-jogger/babyjogger.png',
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
          src: '/career/projects/early-software-engineering/early-mobile-1.png',
          width: 1920,
          height: 1080,
          alt: 'Early Software Engineering — Mobile Project Mockups'
        },
        {
          type: 'image',
          src: '/career/projects/early-software-engineering/early-mobile-2.png',
          width: 1920,
          height: 1080,
          alt: 'Early Software Engineering — Mobile App Interfaces'
        },
        {
          type: 'image',
          src: '/career/projects/early-software-engineering/early-mobile-3.png',
          width: 1920,
          height: 1080,
          alt: 'Early Software Engineering — Mobile Game and Utility Apps'
        }
      ],
      stories: [
        {
          id: 'full-stack-foundation',
          asset: {
            type: 'image',
            src: '/career/projects/early-software-engineering/mockup-mobile-m (1).jpg',
            width: 2677,
            height: 1506,
            alt: 'Early Software Engineering — Full-Stack Foundation'
          },
          title: 'Full-Stack JavaScript Foundation',
          body: 'Used the FreeCodeCamp curriculum as a self-directed bridge from design into engineering, turning JavaScript, DOM manipulation, Node.js, OAuth, algorithms, and data structures into shipped interface work. The mobile mockups support the story because this was never just tutorial completion: each exercise became a finished product surface, proving I could learn the system, shape the experience, and carry it through to working code.'
        },
        {
          id: 'design-meets-engineering',
          asset: {
            type: 'image',
            src: '/career/projects/early-software-engineering/mockup-mobile-m (3).jpg',
            width: 2677,
            height: 1506,
            alt: 'Early Software Engineering — Design Meets Engineering'
          },
          title: 'Design Background Applied to Engineering',
          body: 'Brought an OCAD design background into the code from the beginning, treating layout, hierarchy, interaction, and polish as engineering requirements rather than decoration. These early screens show the pattern that kept showing up later in client work: start with the user experience, understand the constraints underneath it, and make the implementation feel intentional instead of assembled.'
        },
        {
          id: 'game-and-utility-apps',
          asset: {
            type: 'image',
            src: '/career/projects/early-software-engineering/mockup-mobile-game-m.jpg',
            width: 2628,
            height: 1478,
            alt: 'Early Software Engineering — Game and Utility Apps'
          },
          title: 'Game Logic, Timers, and Everyday Tools',
          body: 'Built small games and utility apps to practice the product behavior that still matters in larger systems: state, timing, input handling, conditional logic, feedback loops, and error recovery. Tic Tac Toe, Simon Says, the Pomodoro timer, calculator, and weather widget became a compact proving ground for the same muscle used later on production teams: translate an expected experience into dependable interface logic.'
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
          src: '/career/projects/web10-era/1.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — Sony Ericsson Phone Theme'
        },
        {
          type: 'image',
          src: '/career/projects/web10-era/12.jpg',
          width: 1920,
          height: 1080,
          alt: 'Web 1.0 Era — AsianAvenue Theme'
        },
        {
          type: 'image',
          src: '/career/projects/web10-era/11.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — Zuup Theme & Abstract Art'
        },
        {
          type: 'image',
          src: '/career/projects/web10-era/8.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — Zuup Theme'
        },
        {
          type: 'image',
          src: '/career/projects/web10-era/9.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — Naha Sushi Flash Website'
        },
        {
          type: 'image',
          src: '/career/projects/web10-era/5.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — Mousepad Photoshop Design'
        },
        {
          type: 'image',
          src: '/career/projects/web10-era/4.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — Train Illustration'
        },
        {
          type: 'image',
          src: '/career/projects/web10-era/3.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — Alienware Illustration'
        },
        {
          type: 'image',
          src: '/career/projects/web10-era/10.jpg',
          width: 1920,
          height: 1500,
          alt: 'Web 1.0 Era — ABC Cakes Business Cards'
        }
      ],
      stories: [
        {
          id: 'pixel-perfect-design',
          asset: {
            type: 'image',
            src: '/career/projects/web10-era/6.jpg',
            width: 1920,
            height: 1500,
            alt: 'Web 1.0 Era — PixelInfinity.ca Theme'
          },
          title: 'Pixel-Perfect Layouts Before Modern CSS',
          body: 'Taught myself web design by turning Photoshop compositions into live interfaces with sliced assets, table-based HTML, and hand-written CSS before grid, flexbox, component libraries, or responsive tooling existed. The PixelInfinity layout is the evidence, but the story is the foundation: I learned to think in systems early — visual hierarchy, asset weight, browser quirks, and production constraints all had to be solved by hand.'
        },
        {
          id: 'platform-themes',
          asset: {
            type: 'image',
            src: '/career/projects/web10-era/7.jpg',
            width: 1920,
            height: 1500,
            alt: 'Web 1.0 Era — Xanga Theme'
          },
          title: 'Custom Platform Themes and Constraint Hacking',
          body: 'Designed custom themes for Xanga, Zuup, Sony Ericsson phones, and Winamp by working inside whatever markup, image slots, browser behavior, and file-size limits each platform allowed. These themes show the early design instinct underneath the later portfolio: understand the host system, find the seams, and use visual craft to make a constrained environment feel personal and intentional.'
        },
        {
          id: 'xanga-theme-variant',
          asset: {
            type: 'image',
            src: '/career/projects/web10-era/2.jpg',
            width: 1920,
            height: 1500,
            alt: 'Web 1.0 Era — Xanga Theme (Variant)'
          },
          title: 'Identity Systems for Social Platforms',
          body: 'Built full visual identities for early social spaces like Xanga, where a profile was less a feed and more a self-authored website. The variant supports the story because it shows more than decoration: color, layout, typography, illustration, and mood all working together inside platform constraints. Long before formal design systems, I was already shaping reusable visual language around identity, audience, and atmosphere.'
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
          src: '/career/projects/interiors-architecture/floor-plan-&-cross-section.jpg',
          width: 1920,
          height: 1242,
          alt: 'Interior & Architecture Design — Technical Drawing'
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
          id: 'queen-street-modernization',
          asset: {
            type: 'image',
            src: '/career/projects/interiors-architecture/Overview.jpg',
            width: 1920,
            height: 1080,
            alt: "Interior & Architecture Design — 1800's Queen St. Modernization"
          },
          title: 'Modernizing a Historic Queen Street Shell',
          body: 'Developed a residential modernization concept for an 1800s Queen Street building, using the exterior shell as a constraint rather than a blank canvas. The overview image supports the story because it shows the design problem at full scale: preserve the character of the envelope, introduce a contemporary interior language, and make the old structure feel deliberate instead of merely inherited.'
        },
        {
          id: 'spatial-planning-cutaway',
          asset: {
            type: 'image',
            src: '/career/projects/interiors-architecture/Overview-Cutaway-2.jpg',
            width: 1920,
            height: 1080,
            alt: "Interior & Architecture Design — 1800's Queen St. Modernization Cutaway"
          },
          title: 'Cutaway Thinking and Spatial Hierarchy',
          body: 'Used cutaway views to reason through how people, light, circulation, and program would move through the renovated volume. This is where the project becomes more than a render: the section exposes decisions about openness, privacy, vertical relationships, and sightlines. It speaks to the design sense behind the portfolio — not software engineering, but the ability to organize complexity into a legible experience.'
        },
        {
          id: 'material-and-volume-study',
          asset: {
            type: 'image',
            src: '/career/projects/interiors-architecture/Overview-Cutaway-1.jpg',
            width: 1920,
            height: 1080,
            alt: "Interior & Architecture Design — 1800's Queen St. Modernization Volume Study"
          },
          title: 'Material, Volume, and Atmosphere',
          body: 'Refined the interior as a relationship between mass, void, texture, and daylight rather than a collection of decorated rooms. The second cutaway shows that design judgment at a quieter level: how surfaces meet, how volumes stack, and how a space can feel calm while still carrying architectural tension. It is portfolio evidence of taste — proportion, restraint, and spatial composition under real constraints.'
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
      desc: 'Hobby-driven 3D modeling in Fusion 360 and Blender — custom prints for PC hardware, water cooling, furniture integration, and everyday objects. Projects range from a full IKEA Bekant server rack integrating NAS, SFF servers, and a UPS in a furniture-native form factor to custom PC cases, water blocks, keyfobs, and trophies. Less a software-engineering chapter than a record of design sense: proportion, fit, material awareness, constraint-solving, and the instinct to make functional objects feel considered.',
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
          width: 1920,
          height: 1080,
          alt: '3D Modeling — Bekant Server Rack (Installed)'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/trophy_-_tech_tank_2024-dec-15_11-07-40pm-000_customizedview13777747030.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — TechTank Sashimis Sports Trophy'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/qm-ornament_2024-dec-15_11-41-51pm-000_customizedview39273023891.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — Quantum Mob Logo Ornament'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/keyfob_2024-dec-15_11-41-34pm-000_customizedview3517011434.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — Quantum Mob Logo Keyfob'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/modern-build_2024-dec-15_11-10-28pm-000_customizedview2748624882.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — Small Form Factor PC Build'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/modern-build_2024-dec-15_11-10-52pm-000_customizedview25809979503.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — Small Form Factor PC Build (Detail)'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/eos_1_a_2024-dec-15_11-32-28pm-000_customizedview18216312656.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — EOS Acrylic Laser Cut PC Case'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/mjolnir_3_2024-dec-15_11-48-20pm-000_customizedview1631237819.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — Mjolnir 3D Printed PC Case'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/eos_block_2024-nov-27_04-57-07am-000_customizedview5928134866.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — EOS CPU Water Block'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/zx-1_mount_2024-dec-15_11-15-23pm-000_customizedview13614885543.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — Nouvolo CPU Block to Iquinix ZX-1 Case Mount'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/case_-_evolv_shift_2_2024-dec-15_11-12-54pm-000_customizedview31469564511.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — Evolv Shift 2 Case Cover'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/redux-assy_2024-dec-15_11-37-14pm-000_customizedview18606186293.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — Magic the Gathering Redux Card Case'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/redux-assy_2024-dec-15_11-37-06pm-000_customizedview18606186293.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — Magic the Gathering Redux Card Case with Insert'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/desk-organizer-redux_2024-dec-15_11-36-28pm-000_customizedview7294577484.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — Desk Organizer Redux'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/macbook_stand_2024-dec-15_11-09-37pm-000_customizedview6170979262.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — MacBook Stand'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/hue-mount_2024-dec-15_11-13-59pm-000_customizedview18169488883.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — Philips Hue Lightbar Mount for Vivo Desk Pole'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/light_pole_mount_-_screw_based_2024-dec-15_11-39-06pm-000_customizedview10171845343.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — Generic Mount for Vivo Desk Monitor Pole'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/koolance_-_fitting_-_90_degree_-_low_profile_2024-dec-15_11-35-21pm-000_customizedview10262692848.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — Koolance Fitting 90 Degree Low Profile'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/vandal_switch_2024-dec-15_11-11-49pm-000_customizedview19737110002.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — Anti-Vandal Switch'
        },
        {
          type: 'image',
          src: '/career/projects/industrial-design/burger_press_2024-dec-15_11-36-02pm-000_customizedview3640923189.png',
          width: 1920,
          height: 1080,
          alt: '3D Modeling — Burger Press'
        }
      ],
      stories: [
        {
          id: 'bekant-server-rack',
          asset: {
            type: 'image',
            src: '/career/projects/industrial-design/Bekant_Cabinet_2026-May-10_02-26-22PM-000_CustomizedView10916433213.png',
            width: 1920,
            height: 1080,
            alt: '3D Modeling — Bekant Server Rack for NAS and SFF Servers'
          },
          title: 'Furniture-Native Infrastructure Design',
          body: 'Designed and modeled a complete home server rack around a real spatial constraint: make a NAS, small-form-factor servers, a UPS, airflow, cabling, and service access disappear inside an IKEA Bekant cabinet without compromising function. The render supports the story because the value is not the cabinet itself — it is the design judgment behind it: proportion, concealment, serviceability, and making technical equipment feel calm enough to live in a room.'
        },
        {
          id: 'pc-water-cooling',
          asset: {
            type: 'image',
            src: '/career/projects/industrial-design/eos_block_2024-dec-15_11-50-39pm-000_customizedview34151560115.png',
            width: 1920,
            height: 1080,
            alt: '3D Modeling — EOS CPU Water Block with Pump'
          },
          title: 'Fitment, Fabrication, and Iteration',
          body: 'Used Fusion 360, Blender, laser-cutting constraints, and 3D printing to turn hardware problems into manufacturable parts: compact PC cases, water-cooling blocks, adapter mounts, fittings, desk accessories, trophies, keyfobs, and everyday objects. The screenshots show the range, but the portfolio signal is taste under constraint: measure carefully, prototype honestly, refine the geometry, and keep every visual decision accountable to how the object is held, installed, seen, and used.'
        }
      ]
    },
    parents: {
      clientId: 'tkodev',
      staffIds: ['tony']
    }
  }
]

/** `projectEntries` keyed by `id` for direct lookup. */
const projectEntryById = keyBy(projectEntries, (projectEntry) => projectEntry.id)
/** `projectEntries` grouped by their `basic.category`. */
const projectEntriesByCategory = groupBy(
  projectEntries,
  (projectEntry) => projectEntry.basic.category
)

export { projectEntries, projectEntriesByCategory, projectEntryById }
