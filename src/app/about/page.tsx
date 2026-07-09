import { type Metadata } from 'next'
import {
  ApertureIcon,
  BlocksIcon,
  ContactIcon,
  GitBranchIcon,
  IdCardIcon,
  LocateFixedIcon,
  MailIcon,
  PencilRulerIcon
} from 'lucide-react'
import { SectionAboutDetails } from '@/components/organisms/section-about-details'
import { SectionAboutHero } from '@/components/organisms/section-about-hero'
import { SectionAboutMethod } from '@/components/organisms/section-about-method'
import { SectionAboutProcess } from '@/components/organisms/section-about-process'
import { SectionContact } from '@/components/organisms/section-contact'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'
import { personEntryById } from '@/constants/profile'

const metadata: Metadata = {
  title: 'Tony Ko / About',
  description:
    'Design was the first language I spoke fluently. How I work, my process, and the details.'
}

const AboutPage = () => {
  // render vars
  const tony = personEntryById['tony']

  // jsx
  return (
    <Main>
      <Section id="about-hero">
        <SectionAboutHero
          hudProps={{
            title: '3.0 / About //',
            subtitle: '// Identity File',
            accent1: '[ Profile Loaded ]',
            accent2: '[ Signal Clear ]',
            cta: 'Read'
          }}
          introProps={{
            subtitle: 'About',
            title: 'Two disciplines \none hand'
          }}
        />
      </Section>
      <Section id="method" height="auto" width="md">
        <SectionAboutMethod
          statementProps={{
            title: 'How I Work',
            children:
              "I get uncomfortable when design and engineering aren't talking. \n\nNot because disagreement is bad. But when the person writing the spec has never opened a pull request, and the person opening pull requests has never sat next to a user, something important gets lost between the idea and the thing that ships. \n\nI've spent most of my career in that gap. Sitting across from designers in Figma and across from engineers in a terminal. Building the component library and the component. Writing the accessibility brief and implementing the focus trap."
          }}
        />
      </Section>
      <Section id="process" height="auto" width="lg">
        <SectionAboutProcess
          processEntries={[
            {
              id: 'discovery',
              title: 'Discovery First',
              desc: "I read the room before I pick up a tool. That means talking to the people closest to the problem, understanding what's already been tried, and getting clear on what success actually looks like.",
              label: 'Discovery',
              icon: LocateFixedIcon
            },
            {
              id: 'framing',
              title: 'Frame the Problem',
              desc: 'A problem stated well is half solved, and most of them arrive stated badly. I write the constraints down, name the tradeoffs out loud, and get agreement on what we are not building before anyone opens an editor.',
              label: 'Framing',
              icon: PencilRulerIcon
            },
            {
              id: 'build',
              title: 'Build to Learn',
              desc: 'The first version exists to answer a question, not to ship. I build the risky part first, put it in front of someone real, and let the thing itself settle the arguments a document never could.',
              label: 'Build',
              icon: BlocksIcon
            },
            {
              id: 'refine',
              title: 'Refine Until It Disappears',
              desc: 'The last stretch goes to the parts nobody lists in a ticket: the empty state, the focus ring, the frame that drops. Done means the seams stop showing, and that is the work that separates a demo from a product.',
              label: 'Refine',
              icon: ApertureIcon
            }
          ]}
          statementProps={{
            label: '// Process //',
            title: 'My Process',
            children: 'Four moves, in order, on every project. \nThe order is the part people skip.'
          }}
        />
      </Section>
      <Section id="details" height="auto" width="md">
        <SectionAboutDetails
          statementProps={{
            title: 'The Details',
            children:
              "I started in interior design. Forty-something client projects across residential and commercial. You learn quickly that people rarely know what they want until they're standing in the wrong version. \n\nI believe taste is a technical skill. You can develop it. It improves your judgment about what to build, how to build it, and when to stop."
          }}
        />
      </Section>
      <Section id="contact" height="auto" width="lg">
        <SectionContact
          boardProps={{ subtitle: '3.3 / Contact //' }}
          title="Get in Touch"
          channelEntries={[
            { href: `mailto:${tony.extended?.email}`, icon: MailIcon, label: 'tony@tko.dev' },
            { href: tony.extended?.linkedin ?? '#', icon: ContactIcon, label: 'LinkedIn' },
            { href: tony.extended?.resume ?? '#', icon: IdCardIcon, label: 'Resume 2026' },
            { href: tony.extended?.github ?? '#', icon: GitBranchIcon, label: 'GitHub' }
          ]}
          desc={
            "I'm based in Toronto, Canada. \nOpen to roles where engineering and product need to work closely together."
          }
        />
      </Section>
    </Main>
  )
}

export default AboutPage
export { metadata }
