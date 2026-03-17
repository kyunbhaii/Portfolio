export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Intro */}
        <h1 className="text-4xl font-bold mb-4">
          Vikramaditya Mishra
        </h1>

        <p className="text-lg text-gray-400 mb-4">
          AI Engineer | RAG Systems | Agentic Workflows
        </p>

        <div className="flex gap-4 mb-8">
          <a
            href="https://github.com/kyunbhaii"
            target="_blank"
            className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
          >
            GitHub
          </a>

          <a
            href="#"
            className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
          >
            Resume
          </a>
        </div>

        {/* About */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p className="text-gray-400">
            I build AI systems focused on retrieval, reasoning, and real-world applications.
            Currently working on RAG pipelines, LangGraph-based workflows, and structured LLM systems.
          </p>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>

          {/* ClaimLens Project 1*/}
          <a
            href="https://github.com/kyunbhaii/ClaimLens-ET-Hackathon"
            target="_blank"
            className="block border border-gray-800 p-4 rounded-xl mb-4 hover:border-gray-600 hover:bg-gray-900 transition"
          >
            <h3 className="text-xl font-semibold">ClaimLens</h3>

            <p className="text-gray-400 mt-2">
              Clause-aware RAG system for insurance policy analysis with deterministic chunking and structured LLM reasoning.
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Recall@20: 0.93 | MRR: 0.89
            </p>
          </a>

        </section>

      </div>
    </main>
  );
}