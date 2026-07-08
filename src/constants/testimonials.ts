import { fromZonedTime } from 'date-fns-tz'
import { type TestimonialEntry } from '@/types/career'
import { appTimeZone } from './date'

const testimonialEntries: TestimonialEntry[] = [
  {
    id: 'jaxToTony',
    basic: {
      desc: "I've had the privilege of working with Tony twice now. First as peers at Quantum Mob, and more recently when I led a project team at Badal.io and brought Tony on to spearhead the web development portion.\n\nTony is that rare breed of full-stack engineer who pairs elite technical skill with natural leadership. Organized, driven, and highly adaptable, he took total ownership of the web development team during our engagement. He successfully steered them through the delivery of a complex telemetry and observability solution across multiple applications for an external client, a massive technical challenge that he executed flawlessly.\n\nAs a leader, Tony excels at untangling complex, difficult problems and is relentless when it comes to unblocking his team so they can move forward efficiently. His organized, agile approach made my job as the project lead much easier; he communicated effortlessly, handled high-pressure deadlines with ease, and kept his team motivated and focused.\n\nWhether you need a top-tier engineer, a sharp technical lead, or someone to drive a complex product delivery across the finish line, I cannot recommend Tony highly enough. He's an incredible asset to any organization, and I truly hope to work with him for a third time in the future.",
      date: fromZonedTime('2026-05-25', appTimeZone)
    },
    parents: {
      relation: 'Jackson managed Tony directly',
      authorId: 'jax',
      recipientId: 'tony'
    }
  },
  {
    id: 'tarunToTony',
    basic: {
      desc: "I enjoyed working with Tony during our time at Quantum Mob, and I highly recommend him for his exceptional work as a software developer. He consistently demonstrated a strong work ethic, a performance-driven mindset, and top-notch skills. Tony was dedicated to his work and is a phenomenal team player who was approachable and always willing to help.\n\nAs a software developer, Tony deeply understands software development principles and practices. His technical skills were outstanding, consistently producing high-quality results for our clients. He is always eager to learn and adapt to new technologies, contributing to continuous improvement. Moreover, Tony also showed a passion for mentoring other developers and sharing his knowledge with others.\n\nTony would be valuable to any organization seeking a software developer. He is well-suited for a leadership role where he can contribute to the team's growth and the projects' success. I have no doubt that any company would be fortunate to have Tony on their team, and I wholeheartedly recommend him.",
      date: fromZonedTime('2023-04-24', appTimeZone)
    },
    parents: {
      relation: 'worked with Tony but on different teams',
      authorId: 'tarun',
      recipientId: 'tony'
    }
  },
  {
    id: 'harpreetToTony',
    basic: {
      desc: 'I had the pleasure of working with Tony for two years at Quantum Mob and I can confidently say that he is one of the most talented and knowledgeable software engineers I have ever had the pleasure of working with. Tony consistently demonstrated a deep understanding of programming concepts and was able to tackle even the most complex technical challenges with ease.\n\nWhat sets him apart is his insatiable curiosity to learn and innate creativity. He was always looking for ways to improve our processes, involved in decision-making, and providing thoughtful insights that helped the team make informed choices.\n\nHe actively participated in the planning and execution of various events, such as hackathons, weekly QM talks, and photo sessions. It was no surprise to learn that 3D printing was one of his hobbies. He demonstrated an exceptional grasp of emerging innovations, market trends, and technology, and he was never hesitant to acquire new skills or knowledge in these areas.\n\nI highly recommend Tony for any software engineering role. He would be an asset to any team lucky enough to have him onboard.',
      date: fromZonedTime('2023-04-24', appTimeZone)
    },
    parents: {
      relation: 'worked with Tony but on different teams',
      authorId: 'harpreet',
      recipientId: 'tony'
    }
  },
  {
    id: 'sebastienToTony',
    basic: {
      desc: "During his time at Quantum Mob, Tony established himself as a central figure in individual excellence, contribution to culture, and overall accountability. His ability to earn the trust of his peers, and drive his teams toward business and product goals resulted in the development of many strong client partnerships, as well as a group of coachees who were increasingly well-equipped to follow in his footsteps.\n\nTony's intuition as a consultant and advisor has blossomed over the course of the last three and a half years, and his ability to produce high-quality code, maintain a high standard of quality across his team, and still deliver valuable business outcomes has been unrivaled.\n\nTony has proven an invaluable asset within our research and development initiatives. His abilities on this front led to the rapid development of key strategic channel partnerships, and despite being an engineer, he was always perfectly aligned with the strategic objectives and opportunities within the partnership.\n\nCulturally, Tony has been a paragon of cultural excellence. Tony hosted meetups, organized engaging talks, and most importantly, was one of the most widely respected and trusted mentors across the organization. This trust was earned through Tony's reliability, honesty, and willingness to go above and beyond to support his colleagues.\n\nAny team that Tony is joining can expect a high degree of excellence, and the development of a culture of trust, self-improvement, and collaboration.",
      date: fromZonedTime('2023-04-21', appTimeZone)
    },
    parents: {
      relation: 'managed Tony directly',
      authorId: 'sebastien',
      recipientId: 'tony'
    }
  },
  {
    id: 'kavinduToTony',
    basic: {
      desc: "I have had the pleasure of working with Tony Ko since 2020 at Quantum Mob Inc., and I can confidently say that he is one of the most talented software engineers I have had the privilege of working with.\n\nTony is an exceptional problem-solver who approaches technical challenges with creativity and a deep understanding of the underlying systems. His technical expertise is extensive, and he is always eager to take on new challenges and learn new technologies.\n\nThroughout our time working together, I have been consistently impressed with Tony's ability to work collaboratively with other members of the team. He has a keen eye for detail and is always looking for ways to optimize code and processes to improve efficiency and reduce errors.\n\nIn addition to his technical prowess, Tony is an excellent communicator who is always willing to share his expertise with others. He is a true team player who consistently goes above and beyond to ensure the success of the project and the satisfaction of our clients.\n\nI highly recommend Tony Ko for any role that requires a highly skilled and motivated software engineer. His expertise and dedication would be an asset to any organization.",
      date: fromZonedTime('2023-04-19', appTimeZone)
    },
    parents: {
      relation: 'worked with Tony on the same team',
      authorId: 'kavindu',
      recipientId: 'tony'
    }
  },
  {
    id: 'stevenToTony',
    basic: {
      desc: "I had the great pleasure of working with Tony at Quantum Mob. My first project at the company was on a team augmentation assignment alongside Tony. It was immediately apparent to me that Tony was an exceptional Software Engineer: proactively consulting with the Product Owner and stakeholders to improve feature usability; optimizing site performance to significantly boost application speed; implementing architectures that slashed development time; and committing code so clean you could eat off of it.\n\nMore than once I saw Tony find himself in the unenviable position of working as the sole developer on a project that would typically have a team. No matter. Tony handled each such project masterfully - invariably delivering fully-featured and on-time; and always accompanied by lucid documentation to superfluously ease the transition to the next set of developers when a new challenging project was pleading for Tony's attention.\n\nDuring my time at Quantum Mob I observed Tony grow into a strong leader at the company with many organization-level responsibilities. To pick just one: He took full-ownership of our Quantum Talks - a recurring event in which a member of our team would present to the entire company on a topic chosen to promote learning and foster new ideas. It was Tony who scheduled the speakers, helped with topic ideation, maintained the schedule, sent the reminders and kept the wheels moving.\n\nTony is a proactive, highly-competent and well-balanced software engineer with strong leadership skills. He makes everyone better.",
      date: fromZonedTime('2022-05-08', appTimeZone)
    },
    parents: {
      relation: 'worked with Tony on the same team',
      authorId: 'steven',
      recipientId: 'tony'
    }
  },
  {
    id: 'andreaToTony',
    basic: {
      desc: "Tony is an amazing Software Engineer, dedicated to his work and very focused on delivering high-quality solutions. Tony is extremely organized which makes his documentation clear and his code easy to maintain.\n\nTony is also good at building a solid relationship with his clients and teammates. He brings a great vibe to the team as a reliable, easygoing and ethical person that helps to create a collaborative environment.\n\nI'm glad that I had the opportunity to work with Tony for over two years at Quantum Mob and I'm sure any team would be lucky to have him.",
      date: fromZonedTime('2021-11-05', appTimeZone)
    },
    parents: {
      relation: 'worked with Tony on the same team',
      authorId: 'andrea',
      recipientId: 'tony'
    }
  },
  {
    id: 'maritiaToTony',
    basic: {
      desc: "As a Digital Project Manager there is always some concern about properly vetting a candidates' skills, work ethic and working style.\n\nTony exceeded the project team's expectations in that in addition to being extremely agile and strong in Front End Development, he is also strong in Back End Development which aided in expediting the project timeline and exceeding client expectations. He holds a strong design background and advanced knowledge of technical systems on both Mac and PC, and possesses ability to fluidly alternate between them.\n\nOther qualities which he brought to the project and the team was a strong self-sufficiency, ability to manage his workload with minimal oversight, strong technical and communication competency, strong ability to work with cross-functional and cross-cultural teams and is extremely knowledgeable about the agile development process. His keen sense of UX and Design Patterns enabled him to fill gaps within the project team.\n\nTony is able to handle working on multiple concurrent and vastly varying projects with ease; and has always under-promised and over-delivered which makes him an extremely strong asset to any company or team.",
      date: fromZonedTime('2017-12-14', appTimeZone)
    },
    parents: {
      relation: 'managed Tony directly',
      authorId: 'maritia',
      recipientId: 'tony'
    }
  },
  {
    id: 'billieToTony',
    basic: {
      desc: 'Tony and I worked together on several web projects at Brandfire Marketing Group, where he was the front-end developer and I was the QA/project coordinator. Tony was meticulous in his work. For all the tasks he was required to do, he would complete them in a timely manner. He was not one to just "do the job", instead he went above and beyond to ensure the work was well optimized and documented in a way that was easy to read.\n\nIn addition, Tony\'s insightful ideas and willingness to learn made him a great teammate for us. We loved having him on our team! It was truly a pleasure working with Tony and I highly recommend him as an exceptionally talented developer.',
      date: fromZonedTime('2017-11-08', appTimeZone)
    },
    parents: {
      relation: 'worked with Tony on the same team',
      authorId: 'billie',
      recipientId: 'tony'
    }
  },
  {
    id: 'dirksenToTony',
    basic: {
      desc: 'When Tony joined us, we were looking for an intermediate front-end developer. He surpassed our wildest expectation by proving himself to be a high-calibre front-end developer and a competent back-end developer. Being a quick learner, he was able to master our unique technology stack and churning out quality code in no time. Giving general direction, he could work autonomously, yet he was forthcoming when hitting snags and worked with the team constructively to solve those problems. Tony is detail oriented, a thorough and diligent document writer. He will be a strong asset to any team.',
      date: fromZonedTime('2017-10-25', appTimeZone)
    },
    parents: {
      relation: 'managed Tony directly',
      authorId: 'dirksen',
      recipientId: 'tony'
    }
  },
  {
    id: 'tonyToJax',
    basic: {
      desc: "I worked with Jax in two very different roles: as his coach at Quantum Mob, and later as a platform lead on his team at Badal.io. That reversal gives me a view of him most people in his network don't have.\n\nAt Badal.io, Jax led a complex telemetry and observability delivery for Loblaw Digital — a multi-application engagement with a skeptical client org, multiple platform leads, and a mobile workstream without dedicated leadership. He took ownership of all of it. His calendar ran nine to five nearly every day: client syncs, PM meetings, cross-functional coordination, executive updates. He was the bridge between a guarded client and our technical team, managing expectations on both sides and building trust where there wasn't much to start with. He translated technical blockers into something executives could act on and made sure the team's work was represented accurately up the chain. The project landed. That's not a given in that kind of environment.\n\nWhat I also noticed: even with that load, he still showed up for his team. Noticed when morale was low. Did something about it. He knew what it looked like to have someone invest in you — I'd done that for him at QM — and he didn't keep it to himself.\n\nStrategic enough to manage up. Present enough to hold a team together. Technically grounded enough to know when the engineering needs protecting. I'd work under Jax again without hesitation.",
      date: fromZonedTime('2026-05-25', appTimeZone)
    },
    parents: {
      relation: 'Jackson managed Tony directly',
      authorId: 'tony',
      recipientId: 'jax'
    }
  },
  {
    id: 'tonyToTulio',
    basic: {
      desc: "I had the chance to work with Tulio on the MPD modernization project we delivered at TELUS Digital for our client, Beyond Energy. From the start, he worked closely with the client team and stakeholders to shape a clear vision and set a strong architectural foundation. His depth in software architecture was key to getting the project on the right track early.\n\nTulio designed an event-driven system that enabled communication across the PLC bus, the control software, and other systems. He also played a central role in the development of the choke control system, ensuring it was both precise and reliable. His work on the tripping interface stood out as well. He integrated advanced graphing modules with the design system to handle the real-time demands of oil rig operations, all while keeping usability in mind.\n\nWhat I appreciated most was how Tulio balanced strong technical leadership with practical decision-making. He was always looking for ways to make the system more resilient and to improve how the team worked together, whether through better testing strategies or architectural refinements. He's collaborative, detail-oriented, and dependable. I'd gladly work with him again and confidently recommend him.",
      date: fromZonedTime('2025-06-06', appTimeZone)
    },
    parents: {
      relation: 'worked on the same team',
      authorId: 'tony',
      recipientId: 'tulio'
    }
  },
  {
    id: 'tonyToSebastien',
    basic: {
      desc: "Sebastien Balda, also known as Seb, is truly exceptional and remarkably competent, playing multifaceted roles as my manager, a partner at the firm, and the VP of Delivery and Operations during our time at Quantum Mob. I had the privilege of working with Seb on diverse projects, including multinational Loyalty program apps (Aeroplan eStore & browser extension), cross-platform prepaid payment apps (PayPower), and various interactive real-time applications in architecture and retail.\n\nIn the capacity of a manager, Seb's commitment to understanding the team's morale was unparalleled. He demonstrated empathy while setting clear expectations, consistently checking in with the team and adapting his leadership style based on the team's tone. Seb's exceptional listening and coaching skills, combined with a wealth of mentorship derived from his extensive work with developers and clients, made him a unique and effective manager. He asks the right questions to guide our growth and he sets strong expectations on what to achieve. His approach to feedback, marked by fairness, accuracy, and an understanding of individual drives for growth, set a distinctive standard.\n\nAs a leader, Seb excelled in navigating challenging client situations and skillfully balancing client, company, and team needs. He collaborated with clients and teams to set realistic expectations for timelines and delivery, organizing cross-functional teams to meet critical deadlines and company goals. Seb's leadership extended beyond delivery management, he guided engineers on tough conversations to retain clients (and talent), showcasing his comprehensive skills. His strategic approach to client relationships, coupled with the above, has not only ensured the loyalty of existing clients but also paved the way for the continuous expansion of the client base.\n\nOne notable example of Seb's adept skills was his ability to connect our team's desire for coaching training with the company's needs. He not only provided us with the mental tools to run hackathons, company meetups, and talks but also facilitated training opportunities to enhance company processes. This strategic alignment not only improved our team's understanding but also forged strong client and partner relationships, showcasing Seb's ability to transform team assets into valuable contributions to the company.\n\nWorking with Seb was professionally enriching and a testament to his character. Honest, reliable, and well-spoken, Seb has highly earned the trust of our team. Not to mention, he is just easy going and great to chat with. I wholeheartedly recommend Seb for any delivery, operations, or leadership role. His extensive experience with diverse teams, clients, and partners makes him an invaluable asset to any company fortunate enough to have him.",
      date: fromZonedTime('2024-01-21', appTimeZone)
    },
    parents: {
      relation: "senior to Tony but didn't manage Tony directly",
      authorId: 'tony',
      recipientId: 'sebastien'
    }
  },
  {
    id: 'tonyToHarpreet',
    basic: {
      desc: "\"Stellar\" and \"Thorough\" come to mind when I think about Harpreet. Over the last 2 years, I've had the pleasure of working with Harpreet on several projects and marketing initiatives. As the Lead Product Designer, Harpreet has impressed me on several fronts.\n\nHarpreet's impeccable ability to distill client goals, features, expectations, UX, and audience research into great user experiences is unmatched. On many occasions, Harpreet's eye for design and direction has translated into great client praise, blowing away their expectations, exceeding their goals, and greatly improving the usability and conversion rates of client web, mobile, desktop, and industrial applications.\n\nI'm also impressed by Harpreet's ability to lead and consult as a team. He works with UX experts, client stakeholders, external designers, product managers, and various levels of software engineers, in a process we call a \"Product Sprint\". In this iterative process, Harpreet leads the team in a cycle of ideation and learning, aligning product strategy (ideas canvas, value prop) with design strategy (brainstorming, feedback, prototyping, user testing). Harpreet's leadership in this area is proven, extensive, and highly enables his team to arrive at optimal client solutions.\n\nIn addition, Harpreet is just great to talk to and work with. He's enthusiastic about design ideas, and the great outdoors, and he has a huge amount of trust and rapport among his peers. Thus, for any company looking for a solid Lead Product Designer with proven and extensive experience in the industry, I can wholeheartedly recommend Harpreet without hesitation.",
      date: fromZonedTime('2023-04-23', appTimeZone)
    },
    parents: {
      relation: 'worked with Harpreet but on different teams',
      authorId: 'tony',
      recipientId: 'harpreet'
    }
  },
  {
    id: 'tonyToKavindu',
    basic: {
      desc: "\"Experienced\" and \"methodical\" are phrases that come to mind when describing Kavindu. Since 2020, I've had the pleasure of working with Kavindu at Quantum Mob, on several project teams and initiatives.\n\nAs a Senior Manager, Kavindu's strong experience with Agile, past Technical Product Manager and Senior Software Engineer roles really came to shine. He communicates complex ideas with ease, helped clients and dev teams align on technical outcomes and expectations, and allowed us to focus and deliver quality work under tight deadlines.\n\nI'm also impressed by Kavindu's ability to handle some of our toughest clients effortlessly. That skill often takes years to develop among Product Managers, but it seems to come naturally to him. I was always in awe of Kavindu's ability to command a room of stakeholders and devs alike and get people on board with ideas.\n\nKavindu is very grounded and professional. His approach to problems, planning, and consultative work revolves around gathering requirements, research and understanding the expectations, outcomes and ideal state. He places great value on transparency and growth, guiding the team by improving processes within the engineering dept & initiatives.\n\nIn conclusion, I highly recommend Kavindu for any Technical Product Management position. He has been an invaluable member of our team at Quantum Mob, and it's no doubt that he'll be an asset to any org lucky enough to have him. He is an exceptional leader with excellent technical and project management skills and I'm confident of his ability to excel in his career.",
      date: fromZonedTime('2023-04-19', appTimeZone)
    },
    parents: {
      relation: 'worked with Kavindu but on different teams',
      authorId: 'tony',
      recipientId: 'kavindu'
    }
  },
  {
    id: 'tonyToTarun',
    basic: {
      desc: "'Passionate' and 'Driven' come to mind when I think about Tarun. I've had the pleasure of working with Tarun for about 2 years at Quantum Mob. During this time, we've worked together on marketing initiatives such as developer meetups and content creation (such as blogs, talks and case studies).\n\nWhile at Quantum Mob, he was a key part of our demand and lead generation strategy, and its execution, thus directly impacting revenue and growth. He also drove lead scoring and nurture campaigns which is truly impactful to us.\n\nTo add, what really impressed me is Tarun's mandate to understand & empathize, provide value wherever possible, and his great work ethic. Tarun looks to understand all facets while remaining data-driven, open to new opinions and experiences when working in tandem with leadership, and connects to both clients & developers in his goal to understand the audience. He exemplifies a great love and energy for his work & his peers and it shows.\n\nAs such, I can say with certainty that I love working with Tarun, he is a great motivator, a driver of success and, often the face of QM's company culture. He brings a lot of knowledge (!), great vibes (!!), and great stories of his experience in the industry and travels (!!!). Tarun brings us as a team together and I think I speak collectively for all Quantums when I say he's sorely missed. For a team that's looking for a solid Marketing Specialist, I highly recommend Tarun.",
      date: fromZonedTime('2023-02-02', appTimeZone)
    },
    parents: {
      relation: 'worked on the same team',
      authorId: 'tony',
      recipientId: 'tarun'
    }
  },
  {
    id: 'tonyToCarlos',
    basic: {
      desc: "'Deeply supportive' is the phrase that comes to mind when I think about Carlos. About 3 years ago, I started at Quantum Mob with Carlos joining shortly after. During this time, we worked together on the Aeroplan eStore, on company initiatives such as our Hackathons (3 times!) & Quantum Talks, and briefly, on the Air Miles landing website.\n\nAs a Software Engineer II, Carlos effortlessly juggles quality software engineering, client management and research for our projects. During that time, he was a key part of driving WCAG 2.0 AA accessibility compliance in two loyalty programs (Aeroplan and Air Miles), which is an impressive feat.\n\nHowever, his strengths go far beyond projects. Carlos proves his drive in the field by owning initiatives at QM, particularly our Hackathons and Quantum Talks. For that, he took ownership of execution and provided a great environment for our Quantums to invest in their own growth, and in our company culture.\n\nI can honestly say, with his great attitude and passion, that I had an amazing time working with Carlos. We all miss him and we wish him the best of luck. For a team that's looking for a proven software engineer that supports his team and company, I would recommend Carlos without hesitation.",
      date: fromZonedTime('2022-12-06', appTimeZone)
    },
    parents: {
      relation: 'worked on the same team',
      authorId: 'tony',
      recipientId: 'carlos'
    }
  },
  {
    id: 'tonyToJie',
    basic: {
      desc: "Jie is an exceptional Software Engineer who takes ownership of their projects seriously. I worked with Jie for about 6 months at QM on the new Aeroplan Shopping Button extension.\n\nDuring this time, Jie's depth of technical understanding and learning was what impressed me. With speed, he picked up on an entirely new tech stack, did research on new features, and really executed the tickets beautifully with one of our long term clients. He was able to connect with the various team members, offer his expertise, and managed tough client blockers.\n\nHe even visited our Toronto office, flying in from Winnipeg ✈️. In all, I highly recommend Jie if anyone's looking for a great Software Engineer.",
      date: fromZonedTime('2022-08-26', appTimeZone)
    },
    parents: {
      relation: "Tony was Jie's mentor",
      authorId: 'tony',
      recipientId: 'jie'
    }
  },
  {
    id: 'tonyToSteven',
    basic: {
      desc: "Steve is a great inspiration and an amazing mentor. I've had the pleasure of working with Steve directly for about 6 months~ on the new Aeroplan eStore application (Node, Redux & React). In addition, he was my coach for about the same time here at Quantum Mob.\n\nSince then, I've had the opportunity to work on some of the things Steve does on the regular (1:1's / mentorship, team leadership, client management, etc), and I can see the effort Steve puts in to make the project and himself approachable. He really takes ownership of the client outcomes and his relationship with his team. Thorough with code reviews, and yet empathetic. I'm very impressed with how he makes it look so easy and really glad to have worked with him.\n\nTo this day, I regularly look back at our discussions for guidance. Ex: \"What would Steve do?\". Not to mention, he's a great guy in general. He'll be sorely missed by QM and I highly recommend Steve to anyone looking for a great Sr. Soft Eng.",
      date: fromZonedTime('2022-05-07', appTimeZone)
    },
    parents: {
      relation: 'Tony reported to Steven directly',
      authorId: 'tony',
      recipientId: 'steven'
    }
  },
  {
    id: 'tonyToNikita',
    basic: {
      desc: 'Nikita is a brilliant Software Engineer who knows how to get things done. At QM, I worked with Nikita for 6 months on a large mobile application.\n\nWhat really impressed me about Nikita is his humble attitude and solid work ethic. He is very knowledgeable, but still approaches every problem with an open mindset, high energy, and presents well-researched solutions.\n\nNot to mention, he brings a lot of experience, good vibes (!), and climbing stories (!!) which will be sorely missed by the team. Without hesitation, I recommend Nikita to anyone looking for a great Software Engineer.',
      date: fromZonedTime('2022-04-02', appTimeZone)
    },
    parents: {
      relation: 'worked on the same team',
      authorId: 'tony',
      recipientId: 'nikita'
    }
  },
  {
    id: 'tonyToJustin',
    basic: {
      desc: "Justin is a top-notch Software Engineer with a passion for learning. I had the pleasure of working with Justin for over two years at Quantum Mob, collaborating on several projects. Since then, he's been a great friend of mine to pair and collab with.\n\nDuring our time at QM, I was impressed by Justin's analytical and out-of-the-box thinking. Justin and I would often chat on technical challenges, and his ability to turn complex problems into efficient and innovative code often surprised me. His drive to research conclusively into concepts is a skill all engineers strive for, but it seemed to come naturally to Justin.\n\nCouple that with his love for computers, Justin is a great asset to any team.",
      date: fromZonedTime('2022-03-21', appTimeZone)
    },
    parents: {
      relation: 'worked on the same team',
      authorId: 'tony',
      recipientId: 'justin'
    }
  },
  {
    id: 'tonyToAndrea',
    basic: {
      desc: 'Andrea is a talented and hardworking Software Engineer who really understands how to get the best out of people. I had the pleasure of working with Andrea for the past 2 years on multiple projects and Andrea has continually exceeded my expectations.\n\nWith her work ethic, her insightful contributions to many planning/client discussions and her willingness to take ownership of her work (ex: turning issues into progress) & team (ex: reaching out / pairing with peers consistently), Andrea is one of the key reasons the Quantum Mob team is strong and consistently puts out high-quality work.\n\nI highly recommend Andrea - keep it up & best of luck on your future endeavours!',
      date: fromZonedTime('2021-11-05', appTimeZone)
    },
    parents: {
      relation: 'worked on the same team',
      authorId: 'tony',
      recipientId: 'andrea'
    }
  },
  {
    id: 'tonyToMaritia',
    basic: {
      desc: "'Exceptionally organized' is the phrase that comes to mind when I think about Maritia.\n\nI had the opportunity to work with Maritia during my time at Brandfire as a Front End Developer. As a project manager, Maritia's ability to juggle multiple projects, while maintaining a energetic culture was unlike any I've seen before and greatly lead the productivity level of our team. I was particularly impressed by her commitment to proper process, agile methodologies and great client communications, even during the most testing of situations.\n\nMost importantly, Maritia is down to earth and relatable, due to her wide experience with digital and tech. If you love technology, movies, other nerdy things and, of course, informed project management (!), I highly recommend having Maritia as part of your team.",
      date: fromZonedTime('2017-10-25', appTimeZone)
    },
    parents: {
      relation: 'Tony reported to Maritia directly',
      authorId: 'tony',
      recipientId: 'maritia'
    }
  },
  {
    id: 'tonyToDirksen',
    basic: {
      desc: "It's rare that you come across experienced developers like Dirksen.\n\nDuring my time as Front End Developer at Brandfire, I had the pleasure of working with Dirksen on several projects. As a back end developer, Dirksen was the backbone of many of the projects I worked on. No matter how dense a problem may be, Dirksen also served as the level minded problem solver, coming up with clear logical solutions. That skill often takes quite a lot of patience, but it seemed to come perfectly nature to Dirksen.\n\nFrom database to CMS design, to obscure SQL query quirks, Dirksen's 'industry veteran' experience was very valuable in releasing solid products to public. Couple that with a love of the great outdoors, Dirksen would be an amazing asset to any team.",
      date: fromZonedTime('2017-10-25', appTimeZone)
    },
    parents: {
      relation: "senior to Tony but didn't manage Tony directly",
      authorId: 'tony',
      recipientId: 'dirksen'
    }
  },
  {
    id: 'tonyToBillie',
    basic: {
      desc: "'Multi-faceted' is what I would call Billie, if I were to describe him in a phrase.\n\nIt was a pleasure to work with Billie during my time at Brandfire as a Front End Developer. At Brandfire, Billie impressed me with his ability to juggle multiple roles - while not skipping a beat on any one of them. As a QA Developer, Billie worked closely with me and other teammates to resolve all issues in our code. This is where Billie's meticulous communication was especially valuable to pushing out a polished product. Simultaneously, Billie was a Project Coordinator AND also completed full site client projects on his own, an impressive feat as the client was very, very impressed with the results.\n\nThis, coupled with his hobbies in photography and music, make working with Billie a pleasure. He is a quick learner and has many hidden talents in tech that constantly surprise me! It's a rare trait(s). I highly recommend working with Billie if you want stuff done.",
      date: fromZonedTime('2017-10-25', appTimeZone)
    },
    parents: {
      relation: 'worked on the same team',
      authorId: 'tony',
      recipientId: 'billie'
    }
  }
]

export { testimonialEntries }
