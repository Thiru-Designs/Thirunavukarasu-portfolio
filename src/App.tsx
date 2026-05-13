type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
};

type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

const PROJECTS: Project[] = [
  {
    title: 'SubZen',
    category: 'Mobile App Case Study',
    description:
      'A subscription management app that helps users track recurring payments, receive smart reminders, and optimize spending.',
    tags: ['UX Research', 'Wireframing', 'UI Design', 'Prototyping'],
  },
  {
    title: 'MoveIn',
    category: 'Rental Discovery App',
    description:
      'A PG and co-living discovery app that helps users search, compare, and book accommodations based on location, amenities, and budget.',
    tags: ['UX Research', 'Search UX', 'Filters', 'Mobile UI'],
  },
  {
    title: 'HRMS',
    category: 'B2B Dashboard',
    description:
      'A human resource management system designed to simplify employee management and internal workflows.',
    tags: ['Dashboard UX', 'Information Architecture'],
  },
];

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Core UX Skills',
    description: 'Research-driven methods for solving real user problems.',
    items: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Interaction Design',
      'Information Architecture',
      'Usability Testing',
    ],
  },
  {
    title: 'Design Principles',
    description: 'Visual and accessibility fundamentals that ensure clarity.',
    items: [
      'Typography',
      'Color Theory',
      'Accessibility',
      'Responsive Design',
      'Design Systems',
    ],
  },
  {
    title: 'Collaboration & Process',
    description: 'Structured workflows that keep design and development aligned.',
    items: [
      'Design Thinking',
      'Agile (Scrum)',
      'Sprint Planning',
      'Cross-functional Collaboration',
    ],
  },
];

const AI_TOOLS = [
  'Figma Make',
  'Google Stitch',
  'Lovable',
  'ChatGPT (Iteration)',
];

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const LINKS = {
  email: 'mailto:thiruk970@gmail.com',
  portfolio: 'https://www.behance.net/thiruk1',
  resume:
    'https://drive.google.com/file/d/1vOwTPcLIrwaTQPQIxsipw0Yobrf1WjTl/view?usp=sharing',
};

const STATS = [
  { value: '2', label: 'UI/UX Internships' },
  { value: '3+', label: 'Case Studies' },
  { value: '10+', label: 'Tools' },
];

const primaryButton =
  'inline-flex w-full items-center justify-center rounded-full bg-red-500 px-6 py-3 font-medium text-white transition hover:bg-red-400 sm:w-auto';

const secondaryButton =
  'inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10 sm:w-auto';

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <p className="text-sm uppercase tracking-[0.25em] text-red-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
    </div>
  );
}

function ExternalButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const isMail = href.startsWith('mailto:');

  return (
    <a
      href={href}
      target={isMail ? undefined : '_blank'}
      rel={isMail ? undefined : 'noopener noreferrer'}
      className={primary ? primaryButton : secondaryButton}
    >
      {children}
    </a>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-950 text-white selection:bg-red-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a
            href="#home"
            className="max-w-[200px] text-base font-semibold tracking-tight sm:max-w-none sm:text-lg"
          >
            Thirunavukarasu<span className="text-red-500">.</span>
          </a>

          <nav className="hidden gap-8 text-sm text-zinc-400 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full border border-red-500/30 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10 sm:inline-flex"
          >
            Let&apos;s Talk
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.10),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:items-center md:py-24">
          <div className="order-1 md:order-1">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-red-400">
              UI/UX Designer · Chennai
            </p>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m Thirunavukarasu.
              <br />
              Designing products that feel simple, useful, and elegant.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              I craft user-centered web and mobile experiences through research,
              interaction design, and AI-powered workflows.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a href="#work" className={primaryButton}>
                View Projects
              </a>
              <ExternalButton href={LINKS.portfolio}>
                Visit Portfolio
              </ExternalButton>
              <ExternalButton href={LINKS.resume}>
                Download Resume
              </ExternalButton>
            </div>
          </div>

          <div className="order-2 md:order-2 relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-red-500/20 to-transparent blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:rounded-[2.5rem] sm:p-6">
              <div className="grid gap-4">
                <div className="rounded-3xl bg-neutral-900 p-4 sm:p-6">
                  <p className="text-sm text-zinc-400">Experience</p>
                  <p className="mt-2 text-3xl font-semibold sm:text-4xl">
                    {STATS[0].value}
                  </p>
                  <p className="text-zinc-400">{STATS[0].label}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {STATS.slice(1).map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-3xl bg-neutral-900 p-4 sm:p-6"
                    >
                      <p className="text-2xl font-semibold sm:text-3xl">
                        {stat.value}
                      </p>
                      <p className="text-sm text-zinc-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl bg-neutral-900 p-4 sm:p-6">
                  <p className="text-sm text-zinc-400">Core Tools</p>
                  <p className="mt-2 text-base font-medium leading-7 sm:text-lg sm:leading-8">
                    Figma · Lovable · Stitch · ChatGPT (Iteration)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected Case Studies"
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05] sm:p-8"
            >
              <p className="text-sm text-red-400">{project.category}</p>
              <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-red-400">
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Turning complex problems into intuitive experiences.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            <p>
              Creative and detail-oriented UI/UX Designer with hands-on
              experience designing user-centered web and mobile applications.
            </p>
            <p>
              Skilled in user research, wireframing, prototyping, usability
              testing, and visual design using Figma and AI-powered tools.
            </p>
            <p>
              My process combines design thinking, accessibility, responsive
              design, and close collaboration with developers.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="relative overflow-hidden border-y border-white/10 bg-[#050505] py-16 sm:py-20"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="My Skills"
            title="Skills That Drive Meaningful Design"
          />

          <div className="mb-12 grid gap-10 lg:grid-cols-2 lg:items-start">
            <p className="max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              A blend of user empathy, structured thinking, and modern AI tools
              to create intuitive and impactful digital experiences.
            </p>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
              <h3 className="text-2xl font-semibold">AI Toolkit</h3>
              <div className="mt-6 space-y-4">
                {AI_TOOLS.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="text-zinc-200">{tool}</span>
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              >
                <div className="grid gap-6 lg:grid-cols-[320px_1fr] lg:items-center">
                  <div>
                    <h3 className="text-2xl font-semibold sm:text-3xl">
                      {group.title}
                    </h3>
                    <p className="mt-3 leading-7 text-zinc-400">
                      {group.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Something Meaningful"
          />

          <p className="mx-auto max-w-2xl text-base text-zinc-400 sm:text-lg">
            Available for UI/UX design opportunities, freelance projects, and
            collaborations.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            <ExternalButton href={LINKS.email} primary>
              thiruk970@gmail.com
            </ExternalButton>
            <ExternalButton href={LINKS.portfolio}>
              Visit Portfolio
            </ExternalButton>
            <ExternalButton href={LINKS.resume}>
              Download Resume
            </ExternalButton>
          </div>
        </div>
      </section>
    </div>
  );
}
