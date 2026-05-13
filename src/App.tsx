import React from 'react';
import { motion } from 'framer-motion';

// =========================
// Data
// =========================

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
};

type Experience = {
  company: string;
  role: string;
  duration: string;
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
      'A subscription management app that helps users track recurring payments, receive reminders, and optimize spending.',
    tags: ['UX Research', 'Wireframing', 'UI Design', 'Prototyping'],
  },
  {
    title: 'MoveIn',
    category: 'Rental Discovery App',
    description:
      'A PG and co-living discovery app for searching, comparing, and booking accommodations.',
    tags: ['Search UX', 'Filters', 'Mobile UI'],
  },
  {
    title: 'HRMS',
    category: 'B2B Dashboard',
    description:
      'A human resource management system for simplifying internal employee workflows.',
    tags: ['Dashboard UX', 'Information Architecture'],
  },
];

const EXPERIENCES: Experience[] = [
  {
    company: 'LMES',
    role: 'UI/UX Designer Intern',
    duration: 'Feb 2026 – May 2026',
    description:
      'Redesigned internal tools, simplified workflows, and created wireframes, high-fidelity UI, and interactive prototypes in Figma.',
    tags: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'Developer Handoff',
    ],
  },
  {
    company: 'Regami Solutions',
    role: 'UI/UX Designer Intern',
    duration: 'Jun 2025 – Feb 2026',
    description:
      'Conducted user research, usability testing, and designed responsive web and mobile interfaces.',
    tags: [
      'Usability Testing',
      'Responsive Design',
      'Figma',
      'Information Architecture',
      'High-Fidelity UI',
    ],
  },
];

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Core UX Skills',
    description: 'Research-driven methods for solving user problems.',
    items: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
  },
  {
    title: 'Design Principles',
    description: 'Visual foundations that ensure clarity and accessibility.',
    items: ['Typography', 'Accessibility', 'Responsive Design', 'Design Systems'],
  },
  {
    title: 'AI Toolkit',
    description: 'AI-assisted tools that accelerate exploration and iteration.',
    items: ['Figma Make', 'Google Stitch', 'Lovable', 'ChatGPT (Iteration)'],
  },
];

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
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
  { value: '2', label: 'Internships' },
  { value: '3+', label: 'Case Studies' },
  { value: '10+', label: 'Tools' },
];

// =========================
// Animation helpers
// =========================

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const floatAnimation = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

// =========================
// UI Components
// =========================

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div className="mb-8 sm:mb-10" {...fadeUp}>
      <p className="text-sm uppercase tracking-[0.25em] text-red-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
    </motion.div>
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
  const className = primary
    ? 'inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-3 font-medium text-white transition hover:bg-red-400'
    : 'inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10';

  const handleClick = () => {
    if (href.startsWith('mailto:')) {
      window.location.href = href;
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}

// =========================
// Main Component
// =========================

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-red-500/30">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.08),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.03),transparent_25%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            Thirunavukarasu<span className="text-red-500">.</span>
          </a>

          <nav className="hidden gap-8 text-sm text-zinc-400 md:flex">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2 }}
                className="relative transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-red-400 after:transition-all hover:after:w-full"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.15),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-red-400">
              UI/UX Designer · Chennai
            </p>

            <motion.h1
              {...fadeUp}
              className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
            >
              Hi, I'm Thirunavukarasu.
              <br />
              Designing products that feel simple, useful, and elegant.
            </motion.h1>

            <motion.p
              {...fadeUp}
              className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg"
            >
              I craft user-centered web and mobile experiences through research,
              interaction design, and AI-powered workflows.
            </motion.p>

            <motion.div
              {...fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-3 font-medium text-white transition hover:bg-red-400"
              >
                View Projects
              </a>
              <ExternalButton href={LINKS.portfolio}>Visit Portfolio</ExternalButton>
              <ExternalButton href={LINKS.resume}>Download Resume</ExternalButton>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp}
            {...floatAnimation}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-2xl shadow-red-500/5"
          >
            <div className="grid gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl bg-neutral-900/80 p-5 transition duration-300 hover:bg-neutral-900"
                >
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <p className="text-sm text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading eyebrow="Featured Work" title="Selected Case Studies" />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <motion.article
              key={project.title}
              {...fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-lg shadow-black/20"
            >
              <p className="text-sm text-red-400">{project.category}</p>
              <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
          <SectionHeading
            eyebrow="About Me"
            title="Turning complex problems into intuitive experiences."
          />
          <motion.div {...fadeUp} className="space-y-6 leading-8 text-zinc-400">
            <p>
              Creative and detail-oriented UI/UX Designer with hands-on experience
              designing user-centered web and mobile applications.
            </p>
            <p>
              Skilled in research, wireframing, prototyping, usability testing,
              and visual design using Figma and AI-powered tools.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Experience" title="Internship Experience" />
          <div className="grid gap-8 md:grid-cols-2">
            {EXPERIENCES.map((item) => (
              <motion.article
                key={item.company}
                {...fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-lg shadow-black/20"
              >
                <p className="text-sm text-red-400">{item.duration}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.role}</h3>
                <p className="mt-1 text-zinc-300">{item.company}</p>
                <p className="mt-4 leading-7 text-zinc-400">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="border-y border-white/10 bg-[#050505] py-12 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="My Skills"
            title="Skills That Drive Meaningful Design"
          />
          <div className="space-y-6">
            {SKILL_GROUPS.map((group) => (
              <motion.div
                key={group.title}
                {...fadeUp}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-lg shadow-black/20"
              >
                <h3 className="text-2xl font-semibold">{group.title}</h3>
                <p className="mt-2 text-zinc-400">{group.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ y: -2, scale: 1.03 }}
                      className="rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-200"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.06),transparent_40%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Something Meaningful"
          />
          <p className="mx-auto max-w-2xl leading-8 text-zinc-400">
            Available for UI/UX design opportunities, freelance projects, and
            collaborations.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
