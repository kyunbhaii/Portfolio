import Link from 'next/link';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import Typewriter from './components/Typewriter';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 relative overflow-hidden">

      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00e5bf] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto fade-up relative z-10">

        {/* ================= Intro ================= */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 mt-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
              Vikramaditya Mishra
            </h1>
            <p className="text-lg sm:text-xl text-[#00e5bf]/90 font-medium font-mono min-h-[1.75rem]">
              <Typewriter text="AI Engineer | Generative AI | LLM" speed={60} delay={400} />
            </p>
          </div>
        </div>

        {/* ================= About ================= */}
        <section id="about" className="mb-14 fade-up delay-1">
          <h2 className="text-2xl font-semibold mb-5 flex items-center gap-3 tracking-tight">
            <span className="w-1.5 h-6 bg-[#00e5bf] rounded-full shadow-[0_0_10px_rgba(0,229,191,0.6)]"></span>
            About
          </h2>

          <div className="text-gray-400 space-y-4 leading-relaxed">
            <p>
              I am a passionate <span className="text-gray-200 font-medium">AI/ML Engineer</span> and student with a focus on building scalable, high-impact <span className="text-gray-200 font-medium">Generative AI solutions</span>.
            </p>
            <p>
              My technical expertise revolves around architecting intelligent workflows using <span className="text-gray-200 font-medium">AI Agents, LangChain, LangGraph, NLP,</span> and <span className="text-gray-200 font-medium">Vector Databases</span>. I specialize in turning complex data into production-ready <span className="text-gray-200 font-medium">RAG Systems</span> and robust <span className="text-gray-200 font-medium">Machine Learning Applications</span>.
            </p>
            <p>
              When I'm not coding, you can find me exploring the latest <span className="text-gray-200 font-medium">AI research papers</span>, experimenting with new <span className="text-gray-200 font-medium">open-source models</span>, or sharing my thoughts and discussing new technologies on <a href="https://x.com/kyunbhaii" target="_blank" rel="noopener noreferrer" className="text-gray-200 font-medium relative group inline-block transition-colors hover:text-[#00e5bf]">X<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#00e5bf] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span></a> and <a href="https://www.linkedin.com/in/vikramaditya-mishra-8a9a4b210/" target="_blank" rel="noopener noreferrer" className="text-gray-200 font-medium relative group inline-block transition-colors hover:text-[#00e5bf]">LinkedIn<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#00e5bf] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span></a>.
            </p>
          </div>
        </section>

        {/* ================= Experience ================= */}
        <section id="experience" className="fade-up delay-2">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 tracking-tight">
            <span className="w-1.5 h-6 bg-[#00e5bf] rounded-full shadow-[0_0_10px_rgba(0,229,191,0.6)]"></span>
            Experience
          </h2>
          <div className="border border-gray-800 p-6 sm:p-8 rounded-2xl bg-[#0a0a0a]/50">
            <div className="relative border-l-2 border-gray-800 ml-3 pl-6 space-y-10 py-2">
              <div className="relative group">
                <span className="w-3 h-3 absolute -left-[31px] rounded-full bg-[#00e5bf] shadow-[0_0_10px_rgba(0,229,191,0.6)] mt-1.5 group-hover:scale-125 transition-transform duration-300"></span>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#00e5bf] font-mono group-hover:text-white transition-colors duration-300">VRCYN</h3>
                    <p className="text-gray-200 mt-1">Data Science Intern</p>
                  </div>
                  <p className="text-[#00e5bf] font-mono text-sm mt-2 sm:mt-0 whitespace-nowrap">Dec 2024 – May 2025</p>
                </div>

                <ul className="mt-4 space-y-2 text-gray-400 text-sm">
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
        <section id="projects" className="mt-20 fade-up delay-3">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 tracking-tight">
            <span className="w-1.5 h-6 bg-[#00e5bf] rounded-full shadow-[0_0_10px_rgba(0,229,191,0.6)]"></span>
            Featured Projects
          </h2>

          <div className="border border-gray-800 p-6 sm:p-8 rounded-2xl bg-[#0a0a0a]/50">
            <div className="space-y-6">

              <ProjectCard
                title="ClaimLens"
                description="Built a production-grade Retrieval-Augmented Generation (RAG) pipeline for insurance policy analysis across multi-insurer documents."
                details={[
                  "Implemented a deterministic clause splitter parsing legal PDFs into atomic clause chunks across 5 structural formats with canonical clause IDs and duplicate detection.",
                  "Designed a two-stage retrieval architecture using embeddings + FAISS (Top-40) with cross-encoder reranking (Top-5), achieving Recall@20: 0.93, MRR: 0.89 on single-clause queries.",
                  "Developed a multi-clause evaluation framework with stage-wise diagnostics, achieving Coverage@20: 0.87, Full Recall@20: 0.60, and MRR: 0.77 on composite multi-hop queries.",
                  "Developed an LLM reasoning engine with strict Pydantic schema validation, citation grounding, and JSON retry logic returning structured answers with confidence and clause citations."
                ]}
                techStack={["LangChain", "FAISS", "RAG", "LLM"]}
                githubUrl="https://github.com/kyunbhaii/ClaimLens-ET-Hackathon"
                projectUrl="/projects/claimlens"
                date="Jan 2026 – Mar 2026"
                dateLayout="inline"
              />

              <ProjectCard
                title="Insurance-Aware RAG"
                description="Advanced RAG system for extracting and reasoning over complex insurance policy clauses."
                details={[
                  "Implemented deterministic clause splitting with stable canonical IDs for perfect evaluation traceability.",
                  "Built two-stage retrieval: high-recall FAISS dense retrieval + cross-encoder reranking for precision evidence surfacing.",
                  "Enforced strict Pydantic schemas (RAGResponse, Citation) rejecting hallucinated citations and contradictory LLM outputs."
                ]}
                techStack={["FAISS", "BGE", "Cross-Encoder", "LangChain"]}
                githubUrl="https://github.com/kyunbhaii/Insurance-Aware-RAG"
                date="Jan 2026 – Feb 2026"
                dateLayout="inline"
              />

            </div>
          </div>

          {/* ================= CTA ================= */}
          <div className="flex justify-center mt-10">
            <Link
              href="/projects"
              className="relative px-8 py-3 border border-gray-700 rounded-xl text-gray-300 overflow-hidden group transition-all duration-300 ease-out hover:border-[#00e5bf] hover:text-[#00e5bf] hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-[#00e5bf]/10 w-0 group-hover:w-full transition-all duration-300 ease-out" />

              <span className="relative z-10 flex items-center gap-2">
                View All Projects →
              </span>
            </Link>
          </div>

        </section>

        {/* ================= Skills ================= */}
        <section id="skills" className="mt-20 fade-up delay-4">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3 tracking-tight">
            <span className="w-1.5 h-6 bg-[#00e5bf] rounded-full shadow-[0_0_10px_rgba(0,229,191,0.6)]"></span>
            Skills
          </h2>

          <div className="border border-gray-800 p-6 sm:p-8 rounded-2xl">
            <div className="space-y-6">

              {/* Row 1 */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "AI Systems", skills: ["RAG", "LangChain", "Vector DBs"] },
                  { title: "Machine Learning", skills: ["PyTorch", "TF", "Sklearn", "YOLO"] },
                  { title: "Data & Analysis", skills: ["Pandas", "NumPy", "Matplotlib"] }
                ].map((s) => (
                  <SkillCard key={s.title} title={s.title} skills={s.skills} />
                ))}
              </div>

              {/* Row 2 */}
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
          </div>
        </section>

        {/* ================= Achievements ================= */}
        <section id="achievements" className="mt-20 fade-up delay-5">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 tracking-tight">
            <span className="w-1.5 h-6 bg-[#00e5bf] rounded-full shadow-[0_0_10px_rgba(0,229,191,0.6)]"></span>
            Achievements
          </h2>

          <div className="border border-gray-800 p-6 sm:p-8 rounded-2xl bg-[#0a0a0a]/50">
            <div className="relative border-l-2 border-gray-800 ml-3 pl-6 space-y-10 py-2">

              {/* IFERP */}
              <div className="relative group">
                <span className="w-3 h-3 absolute -left-[31px] rounded-full bg-[#00e5bf] shadow-[0_0_10px_rgba(0,229,191,0.6)] mt-1.5 group-hover:scale-125 transition-transform duration-300"></span>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#00e5bf] font-mono group-hover:text-white transition-colors duration-300">IFERP | Conference</h3>
                  </div>
                  <a
                    href="https://github.com/kyunbhaii/Real-Time-Sign-Language-Detection-CNN-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-xs border border-gray-700 px-3 py-1.5 rounded hover:border-[#00e5bf] hover:text-[#00e5bf] transition overflow-hidden ml-auto shrink-0 mt-2 sm:mt-0"
                  >
                    <span className="absolute inset-0 bg-[#00e5bf]/10 w-0 group-hover:w-full transition-all duration-300 ease-out" />
                    <span className="relative z-10">GitHub ↗</span>
                  </a>
                </div>
                <ul className="mt-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-600">{"•"}</span>
                    <span>Paper accepted at IFERP International Conference on "Real-Time Sign Language Detection Using CNN and OpenCV" (2024).</span>
                  </li>
                </ul>
              </div>

              {/* GDSC */}
              <div className="relative group">
                <span className="w-3 h-3 absolute -left-[31px] rounded-full bg-[#00e5bf] shadow-[0_0_10px_rgba(0,229,191,0.6)] mt-1.5 group-hover:scale-125 transition-transform duration-300"></span>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#00e5bf] font-mono group-hover:text-white transition-colors duration-300">GDSC | AI/ML Lead</h3>
                  </div>
                </div>
                <ul className="mt-2 space-y-2 text-gray-400 text-sm">
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
        <section id="education" className="mt-20 fade-up delay-5">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 tracking-tight">
            <span className="w-1.5 h-6 bg-[#00e5bf] rounded-full shadow-[0_0_10px_rgba(0,229,191,0.6)]"></span>
            Education
          </h2>

          <div className="border border-gray-800 p-6 sm:p-8 rounded-2xl bg-[#0a0a0a]/50">
            <div className="relative border-l-2 border-gray-800 ml-3 pl-6 space-y-10 py-2">

              <div className="relative group">
                <span className="w-3 h-3 absolute -left-[31px] rounded-full bg-[#00e5bf] shadow-[0_0_10px_rgba(0,229,191,0.6)] mt-1.5 group-hover:scale-125 transition-transform duration-300"></span>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-[#00e5bf] font-mono group-hover:text-white transition-colors duration-300">Indian Institute of Technology Patna</h3>
                    <p className="text-gray-200 mt-1">Master of Technology in AI and DSE</p>
                  </div>
                  <p className="text-[#00e5bf] font-mono text-sm mt-2 sm:mt-0 whitespace-nowrap">Jan 2026 – Present</p>
                </div>
              </div>

              <div className="relative group">
                <span className="w-3 h-3 absolute -left-[31px] rounded-full bg-[#00e5bf] shadow-[0_0_10px_rgba(0,229,191,0.6)] mt-1.5 group-hover:scale-125 transition-transform duration-300"></span>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-[#00e5bf] font-mono group-hover:text-white transition-colors duration-300">Lovely Professional University</h3>
                    <p className="text-gray-200 mt-1">Bachelor of Technology in Computer Science and Engineering</p>
                  </div>
                  <p className="text-[#00e5bf] font-mono text-sm mt-2 sm:mt-0 whitespace-nowrap">Aug 2020 – Aug 2024</p>
                </div>
              </div>

            </div>
          </div>
        </section>



      </div>
    </main>
  );
}