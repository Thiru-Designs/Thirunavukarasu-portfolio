export default function ComicPortfolio() {
  const projects = [
    {
      category: 'Mobile App Case Study',
      title: 'SubZen',
      description:
        'A smart subscription tracking app designed to simplify recurring payment management and improve financial clarity.',
      tags: ['UX Research', 'Wireframing', 'UI Design'],
      color: 'bg-yellow-300',
      rotate: 'rotate-[-2deg]',
      text: 'text-black'
    },
    {
      category: 'Rental Discovery App',
      title: 'MoveIn',
      description:
        'A rental discovery experience focused on easier search, comparison, and booking for students and professionals.',
      tags: ['Mobile UX', 'Search Flow', 'Prototyping'],
      color: 'bg-cyan-400',
      rotate: 'rotate-[2deg]',
      text: 'text-black'
    },
    {
      category: 'B2B Dashboard',
      title: 'HRMS',
      description:
        'An HR management dashboard designed to simplify workflows, employee tracking, and operational tasks.',
      tags: ['Dashboard UX', 'Design System', 'B2B'],
      color: 'bg-pink-500',
      rotate: 'rotate-[-1deg]',
      text: 'text-white'
    }
  ]

  const skillGroups = [
    {
      title: 'Technical Skills',
      color: 'bg-cyan-400 text-black',
      skills: ['Figma', 'UI Design', 'Prototyping', 'Adobe Illustrator', 'Adobe Photoshop']
    },
    {
      title: 'AI Tools',
      color: 'bg-pink-500 text-white',
      skills: ['Figma Make', 'Google Stitch', 'Lovable', 'ChatGPT Ideation']
    },
    {
      title: 'Core UX Skills',
      color: 'bg-yellow-300 text-black',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Interaction Design', 'Information Architecture', 'Usability Testing']
    },
    {
      title: 'Design Principles',
      color: 'bg-purple-500 text-white',
      skills: ['Typography', 'Color Theory', 'Accessibility', 'Responsive Design', 'Design Systems']
    },
    {
      title: 'Collaboration & Process',
      color: 'bg-white text-black',
      skills: ['Design Thinking', 'Agile Scrum', 'Sprint Planning', 'Cross Functional Collaboration']
    }
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Urbanist:wght@400;500;600;700;800;900&display=swap');

        * {
          font-family: 'Urbanist', sans-serif;
        }

        h1, h2, h3 {
          font-family: 'Bangers', cursive;
          letter-spacing: 0.04em;
        }

        .paper-bg {
          position: relative;
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.06), transparent 30%),
            radial-gradient(circle at bottom right, rgba(255,255,255,0.03), transparent 35%),
            linear-gradient(180deg, #050505 0%, #0d0d0d 100%);
          background-attachment: fixed;
        }

        .paper-bg::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.32;
          background-image:
            repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.03) 0px,
              rgba(255,255,255,0.03) 1px,
              transparent 1px,
              transparent 4px
            );
          mix-blend-mode: soft-light;
          z-index: 2;
        }

        .paper-bg::after {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.28;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
          z-index: 2;
        }

        .paper-card {
          position: relative;
          overflow: hidden;
        }

        .paper-card::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.24;
          pointer-events: none;
          background-image:
            radial-gradient(rgba(0,0,0,0.24) 1px, transparent 1px),
            repeating-linear-gradient(
              45deg,
              rgba(0,0,0,0.06) 0px,
              rgba(0,0,0,0.06) 2px,
              transparent 2px,
              transparent 8px
            );
          background-size: 14px 14px, 100% 100%;
          mix-blend-mode: multiply;
        }
      `}</style>

      <main className="paper-bg min-h-screen overflow-hidden bg-[#050505] text-white">
        <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.18] mix-blend-overlay"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)',
            backgroundSize: '18px 18px'
          }}
        />

        <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '100% 4px'
          }}
        />
        {/* HERO */}
        <section className="relative overflow-hidden border-b-[6px] border-black bg-[#0b0b0b] px-5 py-10 lg:px-10">
          <div className="absolute left-[8%] top-[20%] hidden rotate-[-12deg] text-6xl text-yellow-300 opacity-80 lg:block">
            ✦
          </div>
          <div className="absolute right-[10%] top-[15%] hidden rotate-[10deg] text-7xl text-pink-500 opacity-80 lg:block">
            ⚡
          </div>
          <div className="absolute bottom-[12%] left-[18%] hidden rotate-[20deg] text-6xl text-cyan-400 opacity-70 lg:block">
            ✧
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
              <div className="max-w-3xl">
                <div className="inline-block rotate-[-2deg] border-[5px] border-black bg-yellow-300 px-6 py-3 text-lg font-black uppercase text-black shadow-[6px_6px_0px_#000]">
                  UI/UX Designer
                </div>

                <h1 className="mt-8 text-5xl uppercase leading-none text-yellow-300 drop-shadow-[5px_5px_0px_#000] sm:text-6xl lg:text-8xl">
                  Thirunavukarasu
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-200 lg:text-2xl">
                  I craft user-centered web and mobile experiences through research, interaction design, visual systems, and AI-powered workflows.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="https://drive.google.com/file/d/1vOwTPcLIrwaTQPQIxsipw0Yobrf1WjTl/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rotate-[2deg] border-[4px] border-black bg-pink-500 px-6 py-4 text-base font-black uppercase text-white shadow-[6px_6px_0px_#000]"
                  >
                    Resume
                  </a>

                  <a
                    href="https://www.behance.net/thiruk1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rotate-[-2deg] border-[4px] border-black bg-cyan-400 px-6 py-4 text-base font-black uppercase text-black shadow-[6px_6px_0px_#000]"
                  >
                    Behance
                  </a>

                  <a
                    href="https://www.linkedin.com/in/thirunavukarasu-k-1a7028299"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rotate-[2deg] border-[4px] border-black bg-purple-500 px-6 py-4 text-base font-black uppercase text-white shadow-[6px_6px_0px_#000]"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="paper-card relative rotate-[-2deg] border-[6px] border-black bg-cyan-400 p-5 md:p-8 text-black shadow-[10px_10px_0px_#000]">
                <div className="absolute -left-5 top-10 hidden text-5xl text-white lg:block">✦</div>
                <div className="absolute -right-5 bottom-8 hidden rotate-[20deg] text-6xl text-pink-500 lg:block">⚡</div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div className="rotate-[-2deg] border-[5px] border-black bg-[#f6f1e8] px-4 py-8 text-center shadow-[7px_7px_0px_#000] transition-all duration-300 hover:-translate-y-2">
                    <h3 className="text-5xl font-black leading-none">2</h3>
                    <p className="mt-4 text-lg font-black uppercase tracking-wide">Internships</p>
                  </div>

                  <div className="rotate-[2deg] border-[5px] border-black bg-pink-500 px-4 py-8 text-center text-white shadow-[7px_7px_0px_#000] transition-all duration-300 hover:-translate-y-2">
                    <h3 className="text-5xl font-black leading-none">3+</h3>
                    <p className="mt-4 text-lg font-black uppercase tracking-wide">Projects</p>
                  </div>

                  <div className="rotate-[-2deg] border-[5px] border-black bg-yellow-300 px-4 py-8 text-center shadow-[7px_7px_0px_#000] transition-all duration-300 hover:-translate-y-2">
                    <h3 className="text-5xl font-black leading-none">10+</h3>
                    <p className="mt-4 text-lg font-black uppercase tracking-wide">Tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="bg-[#101010] px-5 py-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="inline-block rotate-[-2deg] border-[5px] border-black bg-purple-500 px-6 py-3 text-lg font-black uppercase text-white shadow-[6px_6px_0px_#000]">
              Experience
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <div className="paper-card rotate-[-2deg] border-[6px] border-black bg-[#f4ead2] p-8 text-black shadow-[10px_10px_0px_#000]">
                <div className="mb-5 inline-block rotate-[-2deg] border-[4px] border-black bg-yellow-300 px-4 py-2 text-sm font-black uppercase shadow-[4px_4px_0px_#000]">
                  Feb 2025 — May 2025
                </div>
                <h3 className="text-4xl uppercase text-purple-600">LMES</h3>
                <p className="mt-3 text-xl font-black uppercase">UI/UX Designer Intern</p>
                
                <ul className="mt-8 space-y-4 text-lg font-semibold">
                  <li>• Redesigned internal tools and improved workflows</li>
                  <li>• Created wireframes and interactive prototypes</li>
                  <li>• Collaborated with developers and PMs</li>
                </ul>
              </div>

              <div className="paper-card rotate-[2deg] border-[6px] border-black bg-pink-500 p-8 text-white shadow-[10px_10px_0px_#000]">
                <div className="mb-5 inline-block rotate-[2deg] border-[4px] border-black bg-black px-4 py-2 text-sm font-black uppercase text-white shadow-[4px_4px_0px_#000]">
                  Jun 2024 — Jan 2025
                </div>
                <h3 className="text-4xl uppercase text-yellow-300">Regami Solutions</h3>
                <p className="mt-3 text-xl font-black uppercase">UI/UX Designer Intern</p>
                <ul className="mt-8 space-y-4 text-lg font-semibold">
                  <li>• Conducted UX research and usability testing</li>
                  <li>• Designed responsive web & mobile UI</li>
                  <li>• Built design systems in Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="bg-[#080808] px-5 py-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="inline-block rotate-[-2deg] border-[5px] border-black bg-pink-500 px-6 py-3 text-lg font-black uppercase text-white shadow-[6px_6px_0px_#000]">
              Featured Projects
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className={`${project.rotate} ${project.color} ${project.text} paper-card border-[6px] border-black p-7 shadow-[10px_10px_0px_#000]`}
                >
                  <h3 className="text-5xl uppercase">{project.title}</h3>

                  <p className="mt-5 text-lg font-semibold leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <div
                        key={tag}
                        className="border-[3px] border-black bg-white px-4 py-2 text-xs font-black uppercase text-black shadow-[4px_4px_0px_#000]"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="bg-[#050505] px-5 py-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 inline-block rotate-[-2deg] border-[5px] border-black bg-cyan-400 px-6 py-3 text-lg font-black uppercase text-black shadow-[6px_6px_0px_#000]">
              Skills & Expertise
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className={`${group.color} paper-card rotate-[-2deg] border-[5px] border-black p-6 shadow-[6px_6px_0px_#000]`}
                >
                  <h3 className="mb-5 text-2xl uppercase">{group.title}</h3>

                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="border-[3px] border-black bg-black/10 px-4 py-2 text-xs font-black uppercase shadow-[3px_3px_0px_#000]"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="bg-[#6d28d9] px-5 py-16 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-4xl uppercase lg:text-6xl">
                Let’s Work Together!
              </h2>

              <p className="mt-4 max-w-xl text-lg font-semibold text-white/90">
                Available for UI/UX opportunities, freelance projects, and collaborations.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:thiruk970@gmail.com"
                className="rotate-[-2deg] border-[5px] border-black bg-cyan-400 px-7 py-4 text-base font-black text-black shadow-[6px_6px_0px_#000]"
              >
                thiruk970@gmail.com
              </a>

              <a
                href="https://www.behance.net/thiruk1"
                target="_blank"
                rel="noopener noreferrer"
                className="rotate-[2deg] border-[5px] border-black bg-pink-500 px-7 py-4 text-base font-black uppercase text-white shadow-[6px_6px_0px_#000]"
              >
                Behance
              </a>

              <a
                href="https://www.linkedin.com/in/thirunavukarasu-k-1a7028299"
                target="_blank"
                rel="noopener noreferrer"
                className="rotate-[-2deg] border-[5px] border-black bg-yellow-300 px-7 py-4 text-base font-black uppercase text-black shadow-[6px_6px_0px_#000]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
