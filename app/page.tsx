import Link from 'next/link';
import BoxActionLink from './components/BoxActionLink';
import InlineAccentLink from './components/InlineAccentLink';
import ProjectCard from './components/ProjectCard';
import SectionHeading from './components/SectionHeading';
import SkillCard from './components/SkillCard';
import ThemeToggleButton from './components/ThemeToggleButton';
import Typewriter from './components/Typewriter';
import UtilityTextLink from './components/UtilityTextLink';
import { featuredProjects } from './data/projects';
import { profile } from './data/site';

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
        <section id="experience" className="fade-up delay-2 section-divider">
          <SectionHeading title="Experience" />
          <div className="featured-panel p-6 sm:p-8 rounded-[2rem]">
            <div className="relative border-l-2 theme-border-subtle ml-3 pl-6 space-y-10 py-2">
              <div className="relative group">
                <span className="timeline-node w-3 h-3 absolute -left-[31px] rounded-full mt-1.5 group-hover:scale-125 transition-transform duration-300"></span>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold theme-accent font-mono theme-hover-foreground transition-colors duration-300">VRCYN</h3>
                    <p className="theme-copy-strong mt-1">Data Science Intern</p>
                  </div>
                  <p className="theme-date font-mono text-sm mt-2 sm:mt-0 whitespace-nowrap">Dec 2024 – May 2025</p>
                </div>

                <ul className="mt-4 space-y-2 theme-copy text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-600">{"•"}</span>
                    <span>Assisted in preparing, cleaning, and structuring customer feedback datasets (chat logs and surveys) using Python, NLTK, spaCy, and SQL.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-600">{"•"}</span>
                    <span>Explored and implemented NLP techniques, including LSTM-based sentiment analysis, keyword extraction, and basic topic modeling to identify customer pain points and satisfaction drivers.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-600">{"•"}</span>
                    <span>Contributed to insights that supported data-driven discussions for improving product features, customer experience, and internal decision-making.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

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
              {[
                { title: "AI Systems", skills: ["RAG", "LangChain", "Vector DBs"] },
                { title: "Machine Learning", skills: ["PyTorch", "TF", "Sklearn", "YOLO"] },
                { title: "Data & Analysis", skills: ["Pandas", "NumPy", "Matplotlib"] }
              ].map((s) => (
                <SkillCard key={s.title} title={s.title} skills={s.skills} />
              ))}
            </div>

            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl w-full">
                {[
                  { title: "Backend", skills: ["FastAPI", "Docker", "Git"] },
                  { title: "Languages", skills: ["Python", "SQL", "C++"] }
                ].map((s) => (
                  <SkillCard key={s.title} title={s.title} skills={s.skills} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= Achievements ================= */}
        <section id="achievements" className="mt-20 fade-up delay-5 section-divider">
          <SectionHeading title="Achievements" />

          <div className="editorial-panel p-6 sm:p-8 rounded-[2rem]">
            <div className="relative border-l-2 theme-border-subtle ml-3 pl-6 space-y-10 py-2">

              <div className="group/item relative">
                <span className="timeline-node w-3 h-3 absolute -left-[31px] rounded-full mt-1.5 group-hover/item:scale-125 transition-transform duration-300"></span>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
                  <div>
                    <h3 className="text-xl font-semibold theme-accent font-mono theme-hover-foreground transition-colors duration-300">IFERP | Conference</h3>
                  </div>
                  <BoxActionLink
                    href="https://github.com/kyunbhaii/Real-Time-Sign-Language-Detection-CNN-"
                    external
                    className="text-xs px-3 py-1.5 ml-auto shrink-0 mt-2 sm:mt-0"
                  >
                    GitHub ↗
                  </BoxActionLink>
                </div>
                <ul className="mt-2 theme-copy text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-600">{"•"}</span>
                    <span>Paper accepted at IFERP International Conference on &quot;Real-Time Sign Language Detection Using CNN and OpenCV&quot; (2024).</span>
                  </li>
                </ul>
              </div>

              <div className="group/item relative">
                <span className="timeline-node w-3 h-3 absolute -left-[31px] rounded-full mt-1.5 group-hover/item:scale-125 transition-transform duration-300"></span>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold theme-accent font-mono theme-hover-foreground transition-colors duration-300">GDSC | AI/ML Lead</h3>
                  </div>
                </div>
                <ul className="mt-2 space-y-2 theme-copy text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-600">{"•"}</span>
                    <span>Executive member at Google Developer Student Clubs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-600">{"•"}</span>
                    <span>Helped organize multiple technical and ML-focused events under GDSC.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Education ================= */}
        <section id="education" className="mt-20 fade-up delay-5 section-divider">
          <SectionHeading title="Education" />

          <div className="editorial-panel p-6 sm:p-8 rounded-[2rem]">
            <div className="relative border-l-2 theme-border-subtle ml-3 pl-6 space-y-10 py-2">

              <div className="group/item relative">
                <span className="timeline-node w-3 h-3 absolute -left-[31px] rounded-full mt-1.5 group-hover/item:scale-125 transition-transform duration-300"></span>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold theme-accent font-mono theme-hover-foreground transition-colors duration-300">Indian Institute of Technology Patna</h3>
                    <p className="theme-copy-strong mt-1">Master of Technology in AI and DSE</p>
                  </div>
                  <p className="theme-date font-mono text-sm mt-2 sm:mt-0 whitespace-nowrap">Jan 2026 – Present</p>
                </div>
              </div>

              <div className="group/item relative">
                <span className="timeline-node w-3 h-3 absolute -left-[31px] rounded-full mt-1.5 group-hover/item:scale-125 transition-transform duration-300"></span>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold theme-accent font-mono theme-hover-foreground transition-colors duration-300">Lovely Professional University</h3>
                    <p className="theme-copy-strong mt-1">Bachelor of Technology in Computer Science and Engineering</p>
                  </div>
                  <p className="theme-date font-mono text-sm mt-2 sm:mt-0 whitespace-nowrap">Aug 2020 – Aug 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>



      </div>
    </main>
  );
}
