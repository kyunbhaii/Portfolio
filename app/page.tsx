import Link from 'next/link';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-5xl mx-auto fade-up">

        {/* ================= Intro ================= */}
        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          Vikramaditya Mishra
        </h1>

        <p className="text-lg text-green-400/90 font-medium mb-8">
          AI Engineer | Generative AI | LLM
        </p>

        {/* ================= Actions ================= */}
        <div className="flex flex-wrap gap-4 mb-12">

          {/* GitHub */}
          <a
            href="https://github.com/kyunbhaii"
            target="_blank"
            className="relative overflow-hidden group px-4 py-2 border border-gray-700 rounded-lg 
            text-gray-300 flex items-center gap-2
            transition-all duration-300 ease-out
            hover:border-green-400 hover:text-green-400
            hover:shadow-[0_0_12px_rgba(74,222,128,0.1)]
            active:scale-[0.98]"
          >
            <span className="absolute inset-0 bg-green-400/10 w-0 group-hover:w-full transition-all duration-300 ease-out" />
            <span className="relative z-10">GitHub</span>
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="relative overflow-hidden group px-4 py-2 border border-gray-700 rounded-lg 
            text-gray-300 flex items-center gap-2
            transition-all duration-300 ease-out
            hover:border-green-400 hover:text-green-400
            hover:shadow-[0_0_12px_rgba(74,222,128,0.1)]
            active:scale-[0.98]"
          >
            <span className="absolute inset-0 bg-green-400/10 w-0 group-hover:w-full transition-all duration-300 ease-out" />
            <span className="relative z-10">Resume</span>
          </a>

        </div>

        {/* ================= About ================= */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-5 flex items-center gap-3 tracking-tight">
            <span className="w-1.5 h-6 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.6)]"></span>
            About
          </h2>

          <div className="text-gray-400 space-y-4 leading-relaxed">
            <p>
              I am a passionate <span className="text-gray-200 font-medium">AI/ML Engineer</span> and student with a focus on building scalable, high-impact generative AI solutions.
            </p>
            <p>
              My technical expertise revolves around architecting intelligent workflows using <span className="text-gray-200 font-medium">AI Agents, LangChain, LangGraph, NLP,</span> and <span className="text-gray-200 font-medium">Vector Databases</span>. I specialize in turning complex data into production-ready RAG systems and robust machine learning applications.
            </p>
            <p>
              When I'm not coding, you can find me exploring the latest AI research papers, experimenting with new open-source models, or sharing my thoughts and discussing new technologies on Twitter and LinkedIn.
            </p>
          </div>
        </section>

        {/* ================= Experience ================= */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 tracking-tight">
            <span className="w-1.5 h-6 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.6)]"></span>
            Experience
          </h2>

          <div className="border border-gray-800 p-6 rounded-2xl 
            hover:border-gray-600 hover:bg-gray-900 
            hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]
            transition-all duration-300 ease-out"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">Data Science Intern</h3>
                <p className="text-gray-400 mt-1">VRCYN</p>
              </div>
              <p className="text-green-400 text-sm mt-2 sm:mt-0">Dec 2024 – May 2025</p>
            </div>

            <ul className="mt-4 space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Assisted in preparing, cleaning, and structuring customer feedback datasets (chat logs and surveys) using Python, NLTK, spaCy, and SQL.</span>
              </li>
              <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Explored and implemented NLP techniques, including LSTM-based sentiment analysis, keyword extraction, and basic topic modeling to identify customer pain points and satisfaction drivers.</span>
              </li>
              <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Contributed to insights that supported data-driven discussions for improving product features, customer experience, and internal decision-making.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ================= Featured Projects ================= */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 tracking-tight">
            <span className="w-1.5 h-6 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.6)]"></span>
            Featured Projects
          </h2>

          <div className="space-y-6">

            <ProjectCard
              title="ClaimLens"
              description="Built the core RAG and reasoning pipeline for an insurance policy analysis system."
              details={[
                "Hybrid retrieval (Dense + BM25 + Cross-Encoder) with structured reasoning.",
                "Performance metrics: Recall@20: 0.93 | MRR: 0.89"
              ]}
              techStack={["LangChain", "FAISS", "RAG", "LLM"]}
              githubUrl="https://github.com/kyunbhaii/ClaimLens-ET-Hackathon"
              projectUrl="/projects/claimlens"
              date="Jan 2026 – Mar 2026"
              dateLayout="inline"
            />

            <ProjectCard
              title="Insurance-Aware RAG"
              description="Modular RAG pipeline with deterministic clause parsing and hybrid retrieval."
              details={[
                "Configured deterministic clause parsing for accurate retrieval.",
                "Implemented hybrid dense and sparse search architecture."
              ]}
              techStack={["FAISS", "BM25", "Cross-Encoder", "RAG"]}
              githubUrl="https://github.com/kyunbhaii/Insurance-Aware-RAG"
              date="Jan 2026 – Feb 2026"
              dateLayout="inline"
            />

          </div>

          {/* ================= CTA ================= */}
          <div className="flex justify-center mt-10">
            <Link
              href="/projects"
              className="relative px-8 py-3 border border-gray-700 rounded-xl text-gray-300 overflow-hidden group transition-all duration-300 ease-out hover:border-green-400 hover:text-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-green-400/10 w-0 group-hover:w-full transition-all duration-300 ease-out" />

              <span className="relative z-10 flex items-center gap-2">
                View All Projects →
              </span>
            </Link>
          </div>

        </section>

        {/* ================= Skills ================= */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3 tracking-tight">
            <span className="w-1.5 h-6 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.6)]"></span>
            Skills
          </h2>

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
        </section>

{/* ================= Achievements ================= */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 tracking-tight">
            <span className="w-1.5 h-6 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.6)]"></span>
            Achievements
          </h2>

          <div className="space-y-6">
            {/* IFERP */}
            <div className="border border-gray-800 p-6 rounded-2xl hover:border-gray-600 hover:bg-gray-900 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 ease-out">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">IFERP | Conference</h3>
                </div>
                <a
                  href="https://github.com/kyunbhaii/Real-Time-Sign-Language-Detection-CNN-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-xs border border-gray-700 px-3 py-1.5 rounded hover:border-green-400 hover:text-green-400 transition overflow-hidden group ml-auto shrink-0 mt-2 sm:mt-0"
                >
                  <span className="absolute inset-0 bg-green-400/10 w-0 group-hover:w-full transition-all duration-300 ease-out" />
                  <span className="relative z-10">GitHub ↗</span>
                </a>
              </div>
              <ul className="mt-2 space-y-3 text-gray-400 text-sm">
                <li className="flex items-start">
                    <span className="mr-2 text-green-500/50">•</span>
                    <span>Paper accepted at IFERP International Conference on "Real-Time Sign Language Detection Using CNN and OpenCV" (2024).</span>
                </li>
              </ul>
            </div>

            {/* GDSC */}
            <div className="border border-gray-800 p-6 rounded-2xl hover:border-gray-600 hover:bg-gray-900 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 ease-out">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">GDSC | AI/ML Lead</h3>
                </div>
              </div>
              <ul className="mt-2 space-y-3 text-gray-400 text-sm">
                <li className="flex items-start">
                    <span className="mr-2 text-green-500/50">•</span>
                    <span>Executive member at Google Developer Student Clubs.</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-2 text-green-500/50">•</span>
                    <span>Helped organize multiple technical and ML-focused events under GDSC.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= Education ================= */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 tracking-tight">
            <span className="w-1.5 h-6 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.6)]"></span>
            Education
          </h2>

          <div className="space-y-6">
            <div className="border border-gray-800 p-6 rounded-2xl hover:border-gray-600 hover:bg-gray-900 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 ease-out">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Indian Institute of Technology Patna</h3>
                  <p className="text-gray-400 mt-1">Master of Technology in AI and DSE</p>
                </div>
                <p className="text-green-400 text-sm mt-2 sm:mt-0">Jan 2026 – Present</p>
              </div>
            </div>

            <div className="border border-gray-800 p-6 rounded-2xl hover:border-gray-600 hover:bg-gray-900 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 ease-out">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Lovely Professional University</h3>
                  <p className="text-gray-400 mt-1">Bachelor of Technology in Computer Science and Engineering</p>
                </div>
                <p className="text-green-400 text-sm mt-2 sm:mt-0 whitespace-nowrap">Aug 2020 – Aug 2024</p>
              </div>
            </div>
          </div>
        </section>

        

      </div>
    </main>
  );
}