import Link from 'next/link';
import BoxActionLink from './components/BoxActionLink';
import InlineAccentLink from './components/InlineAccentLink';
import ProjectCard from './components/ProjectCard';
import SectionHeading from './components/SectionHeading';
import SkillCard from './components/SkillCard';
import ThemeToggleButton from './components/ThemeToggleButton';
import { TimelineItem, TimelineSection } from './components/Timeline';
import Typewriter from './components/Typewriter';
import UtilityTextLink from './components/UtilityTextLink';
import { featuredProjects } from './data/projects';
import { achievements, education, experiences, primarySkillGroups, profile, secondarySkillGroups } from './data/site';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 py-12 relative overflow-hidden soft-grid">

      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,var(--page-glow),transparent_52%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto fade-up relative z-10">

        {/* ================= Intro ================= */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-20 mt-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-semibold mb-4 tracking-tight leading-none">
              {profile.name}
            </h1>
            <p className="theme-editorial-accent text-lg sm:text-xl font-medium font-mono min-h-[1.75rem] mb-5">
              <Typewriter text="AI Engineer | Generative AI | LLM" speed={60} delay={400} />
            </p>
            <p className="text-sm sm:text-base theme-muted leading-relaxed max-w-2xl">
              Building GenAI systems, open-source AI projects, and exploring LLM workflows with a focus on experimentation, reliability, and real-world impact.
            </p>
          </div>

          {/* GitHub + Resume — top right, aligned with name, plain text style */}
          <div className="flex items-center gap-6 shrink-0 mt-1 sm:pt-8">
              <UtilityTextLink
                href={profile.githubUrl}
                external
                className="text-sm font-mono"
              >
                GitHub
              </UtilityTextLink>
              <UtilityTextLink
                href={profile.resumeUrl}
                external
                className="text-sm font-mono"
              >
                Resume
              </UtilityTextLink>
              <ThemeToggleButton className="shrink-0" />
          </div>
        </div>

        {/* ================= About ================= */}
        <section id="about" className="mb-16 fade-up delay-1">
          <SectionHeading title="About" className="mb-5" />

          <div className="editorial-panel rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] xl:gap-10">
              <div className="xl:pr-10 xl:border-r theme-border-soft">
                <p className="text-lg sm:text-[1.45rem] leading-relaxed theme-copy-strong max-w-2xl">
                  <span className="theme-copy-strong font-medium">AI/ML Engineer</span> focused on building production-grade <span className="theme-copy-strong font-medium">Retrieval-Augmented Generation systems</span> and intelligent workflows for real-world, high-stakes domains.
                </p>
              </div>

              <div className="theme-copy space-y-4 leading-relaxed max-w-2xl">
                <p>
                  I work across the full stack of modern AI, <span className="theme-copy-strong font-medium">LangChain, LangGraph, MCP, Vector Databases,</span> and <span className="theme-copy-strong font-medium">Pydantic</span>, with a focus on structured retrieval, evaluation frameworks, and reliable <span className="theme-copy-strong font-medium">LLM</span> reasoning pipelines.
                </p>
                <p>
                  I care about systems that work under constraints, not just demos that work on clean data. You can find me on <InlineAccentLink href={profile.xUrl}>X</InlineAccentLink> and <InlineAccentLink href={profile.linkedInUrl}>LinkedIn</InlineAccentLink>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Experience ================= */}
        <TimelineSection id="experience" title="Experience" className="fade-up delay-2 section-divider">
          {experiences.map((experience) => (
            <TimelineItem key={`${experience.company}-${experience.role}`}>
              <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="theme-accent theme-hover-foreground font-mono text-xl font-semibold transition-colors duration-300">{experience.company}</h3>
                  <p className="theme-copy-strong mt-1">{experience.role}</p>
                </div>
                <p className="theme-date mt-2 font-mono text-sm whitespace-nowrap sm:mt-0">{experience.date}</p>
              </div>

              <ul className="mt-4 space-y-2 text-sm theme-copy">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start">
                    <span className="mr-2 text-gray-600">{"•"}</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </TimelineSection>

        {/* ================= Featured Projects ================= */}
        <section id="projects" className="mt-20 fade-up delay-3 section-divider">
          <SectionHeading title="Featured Projects" />

          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <div key={project.title}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  details={project.details}
                  impact={project.impact}
                  techStack={project.techStack}
                  githubUrl={project.githubUrl}
                  projectUrl={project.projectUrl}
                  date={project.date}
                  dateLayout="inline"
                />
              </div>
            ))}
          </div>

          {/* ================= CTA ================= */}
          <div className="flex justify-center mt-10">
            <Link
              href="/projects"
              className="theme-cta-light-hover relative px-8 py-3 border theme-border-subtle rounded-xl theme-copy-strong overflow-hidden group transition-all duration-300 ease-out hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-[0.98]"
            >
              <span className="theme-cta-fill absolute inset-0 w-0 group-hover:w-full transition-all duration-300 ease-out" />

              <span className="theme-cta-label relative z-10 flex items-center gap-2">
                View All Projects →
              </span>
            </Link>
          </div>

        </section>

        {/* ================= Skills ================= */}
        <section id="skills" className="mt-20 fade-up delay-4 section-divider">
          <SectionHeading title="Skills" className="mb-8" />

          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {primarySkillGroups.map((s) => (
                <SkillCard key={s.title} title={s.title} skills={s.skills} />
              ))}
            </div>

            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl w-full">
                {secondarySkillGroups.map((s) => (
                  <SkillCard key={s.title} title={s.title} skills={s.skills} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= Achievements ================= */}
        <TimelineSection id="achievements" title="Achievements" className="mt-20 fade-up delay-5 section-divider">
          {achievements.map((achievement) => (
            <TimelineItem key={achievement.title}>
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="theme-accent theme-hover-foreground font-mono text-xl font-semibold transition-colors duration-300">{achievement.title}</h3>
                </div>
                {achievement.href && achievement.linkLabel ? (
                  <BoxActionLink
                    href={achievement.href}
                    external
                    className="ml-auto mt-2 shrink-0 px-3 py-1.5 text-xs sm:mt-0"
                  >
                    {achievement.linkLabel}
                  </BoxActionLink>
                ) : null}
              </div>
              <ul className="mt-2 space-y-2 text-sm theme-copy">
                {achievement.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start">
                    <span className="mr-2 text-gray-600">{"•"}</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </TimelineSection>

        {/* ================= Education ================= */}
        <TimelineSection id="education" title="Education" className="mt-20 fade-up delay-5 section-divider">
          {education.map((entry) => (
            <TimelineItem key={entry.institution}>
              <div className="mb-2 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="theme-accent theme-hover-foreground font-mono text-xl font-semibold transition-colors duration-300">{entry.institution}</h3>
                  <p className="theme-copy-strong mt-1">{entry.degree}</p>
                </div>
                <p className="theme-date mt-2 font-mono text-sm whitespace-nowrap sm:mt-0">{entry.date}</p>
              </div>
            </TimelineItem>
          ))}
        </TimelineSection>



      </div>
    </main>
  );
}
