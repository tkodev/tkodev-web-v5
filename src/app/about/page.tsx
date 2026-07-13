import {
  ApertureIcon,
  BlocksIcon,
  ContactIcon,
  GitBranchIcon,
  IdCardIcon,
  LocateFixedIcon,
  MailIcon
} from 'lucide-react'
import { Reveal } from '@/components/atoms/reveal'
import { AboutDetails } from '@/components/organisms/about-details'
import { AboutHero } from '@/components/organisms/about-hero'
import { AboutMethod } from '@/components/organisms/about-method'
import { AboutProcess } from '@/components/organisms/about-process'
import { GlobalContact } from '@/components/organisms/global-contact'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'
import { personEntryById } from '@/constants/profile'
import { appdata } from '@/constants/system'
import { createMetadata } from '@/utils/system'

const metadata = createMetadata({
  title: 'Tony Ko / About',
  description:
    'Design was the first language I spoke fluently. How I work, my process, and the details.',
  path: '/about',
  image: { url: `${appdata.url}/images/ograph/about.png`, width: 1200, height: 630 }
})

const AboutPage = () => {
  // render vars
  const tony = personEntryById['tony']

  // jsx
  return (
    <Main>
      <Section id="about-hero">
        <AboutHero
          hudProps={{
            title: 'A.0 / About //',
            subtitle: '// Identity File',
            accent1: '[ Profile Loaded ]',
            accent2: '[ Signal Clear ]',
            cta: 'Open Record'
          }}
          introProps={{
            subtitle: 'About',
            title: 'Design was my first language',
            desc: 'I build where taste meets engineering: the judgment of what to \nmake, and the craft to ship it so the seams never show.'
          }}
        />
      </Section>
      <Section id="method" height="auto" width="md">
        <Reveal className="size-full">
          <AboutMethod
            statementProps={{
              subtitle: 'A.1 / Method //',
              title: 'How I Work',
              children:
                "I get uncomfortable when design and engineering aren't talking. \n\nNot because disagreement is bad. But when the person writing the spec has never opened a pull request, and the person opening pull requests has never sat next to a user, something important gets lost between the idea and the thing that ships. \n\nI've spent most of my career in that gap. Sitting across from designers in Figma and across from engineers in a terminal. Building the component library and the component. Writing the accessibility brief and implementing the focus trap."
            }}
          />
        </Reveal>
      </Section>
      <Section id="process" height="auto" width="lg">
        <AboutProcess
          subtitle="A.2 / Process //"
          processEntries={[
            {
              id: 'discovery',
              title: 'Constraints Before Concepts',
              desc: 'I start with the people closest to the problem and the constraints they actually live with: the hardware spec, the legacy contract, the thing that must never break. Then I prototype the riskiest assumption first, because an architectural decision is cheapest to change the week before it gets made.',
              label: 'Discovery',
              icon: LocateFixedIcon
            },
            {
              id: 'system',
              title: 'Design the System, Not the Screen',
              desc: 'A screen is one instance; the system is what has to survive the next fifty. I work the token layer, the primitives, and the component contract in Figma and in code at the same time, so the design file and the repo stay two views of one source of truth rather than two opinions drifting apart.',
              label: 'System',
              icon: BlocksIcon
            },
            {
              id: 'refine',
              title: 'Refine Until It Disappears',
              desc: 'The last stretch goes to what nobody writes a ticket for: the focus ring, the empty state, the frame that drops under ten thousand data points. Done is not when the feature works, it is when the seams stop showing, and that is the distance between a demo and something people trust.',
              label: 'Refine',
              icon: ApertureIcon
            }
          ]}
        />
      </Section>
      <Section id="details" height="auto" width="md">
        <Reveal className="size-full">
          <AboutDetails
            statementProps={{
              subtitle: 'A.3 / Origin //',
              title: 'The Details',
              children:
                "I started in interior design. Forty-something client projects across residential and commercial. You learn quickly that people rarely know what they want until they're standing in the wrong version. \n\nI believe taste is a technical skill. You can develop it. It improves your judgment about what to build, how to build it, and when to stop."
            }}
          />
        </Reveal>
      </Section>
      <Section id="contact" height="auto" width="lg">
        <GlobalContact
          boardProps={{ subtitle: 'A.4 / Contact //' }}
          title="Get in Touch"
          channelEntries={[
            { href: `mailto:${tony.extended?.email}`, icon: MailIcon, label: 'tony@tko.dev' },
            { href: tony.extended?.linkedin ?? '#', icon: ContactIcon, label: 'LinkedIn' },
            { href: tony.extended?.resume ?? '#', icon: IdCardIcon, label: 'Resume' },
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
