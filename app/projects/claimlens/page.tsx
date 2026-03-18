import BackButton from '../../components/BackButton';

export default function ClaimLensPage() {
    return (
        <main className="min-h-screen bg-black text-white px-6 py-12">

            {/* Outer container */}
            <div className="max-w-7xl mx-auto fade-up">

                {/* 📄 Page Box */}
                <div className="bg-neutral-950 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,255,150,0.03)]">

                    {/* ================= Top Nav ================= */}
                    <div className="mb-10 flex justify-between items-center">
                        <BackButton />

                        <a
                            href="https://github.com/kyunbhaii/ClaimLens-ET-Hackathon"
                            target="_blank"
                            className="relative overflow-hidden group text-sm border border-gray-700 px-3 py-1 rounded hover:border-[#00e5bf] hover:text-[#00e5bf] transition"
                        >
                            <span className="absolute inset-0 bg-[#00e5bf]/10 w-0 group-hover:w-full transition-all duration-300 ease-out" />
                            <span className="relative z-10">GitHub ↗</span>
                        </a>
                    </div>

                    {/* ================= Hero ================= */}
                    <h1 className="text-4xl font-bold mb-3 tracking-tight">ClaimLens</h1>

                    <p className="text-gray-500 text-sm mb-6">
                        Case Study • RAG Systems • Retrieval Engineering
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed mb-12">
                        Built a production-grade RAG system for insurance policy analysis using deterministic clause parsing,
                        hybrid retrieval, and structured LLM reasoning to achieve reliable and grounded outputs.
                    </p>

                    {/* ================= Overview ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-3">Overview</h2>

                        <p className="text-gray-400 leading-relaxed">
                            ClaimLens is designed as a structured retrieval system rather than a black-box RAG pipeline.
                            It enforces deterministic parsing, strict validation, and evaluation-driven design to ensure
                            reliable and grounded outputs in legal document reasoning.
                        </p>
                    </section>

                    {/* ================= System Architecture ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-3">System Architecture</h2>

                        <ul className="text-gray-400 space-y-2 leading-relaxed">
                            <li>• Ingestion → Page-level document loading</li>
                            <li>• Clause Splitter → Deterministic clause extraction</li>
                            <li>• Retriever → Dense retrieval (FAISS)</li>
                            <li>• Reranker → Cross-Encoder ranking refinement</li>
                            <li>• Reasoner → LLM with strict schema validation</li>
                            <li>• Pipeline → End-to-end orchestration</li>
                        </ul>
                    </section>

                    {/* ================= Architecture Flow ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-4">Architecture Flow</h2>

                        <div className="border border-gray-800 p-6 rounded-xl overflow-x-auto">
                            <div className="flex items-center gap-3 text-sm text-gray-300 min-w-max">

                                {[
                                    "Query",
                                    "Clause Splitter",
                                    "Retriever",
                                    "Reranker",
                                    "LLM Reasoner",
                                    "Structured Output"
                                ].map((step, idx) => (
                                    <div key={step} className="flex items-center gap-3">

                                        <div
                                            className={`px-4 py-2 rounded-lg border ${step === "Structured Output"
                                                ? "border-[#00e5bf] text-[#00e5bf]"
                                                : "border-gray-700"
                                                }`}
                                        >
                                            {step}
                                        </div>

                                        {idx < 5 && <span className="text-gray-500">→</span>}
                                    </div>
                                ))}

                            </div>
                        </div>
                    </section>

                    {/* ================= Key Engineering Decisions ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-4">Key Engineering Decisions</h2>

                        <div className="space-y-4">

                            <div>
                                <h3 className="font-semibold">Deterministic Clause Parsing</h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    Replaced naive chunking with structured clause extraction to ensure stable retrieval units.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold">Canonical Clause IDs</h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    Enabled traceability and reproducible evaluation across retrieval experiments.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold">Fail-Fast Design</h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    Explicit error handling prevents silent failures and improves system reliability.
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* ================= Retrieval ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-3">Retrieval Pipeline</h2>

                        <ul className="text-gray-400 space-y-2">
                            <li>• Dense Retrieval (FAISS + BGE embeddings)</li>
                            <li>• Top-K = 40 candidate generation</li>
                            <li>• Cross-Encoder reranking → Top 5</li>
                            <li>• Eliminated manual hybrid weighting</li>
                        </ul>
                    </section>

                    {/* ================= Reasoning ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-3">Reasoning & Validation</h2>

                        <ul className="text-gray-400 space-y-2">
                            <li>• Strict JSON schema enforcement (Pydantic)</li>
                            <li>• Citation grounding constraints</li>
                            <li>• Retry mechanism on validation failure</li>
                        </ul>
                    </section>

                    {/* ================= Differentiation ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-4">What Makes This Different</h2>

                        <div className="grid md:grid-cols-2 gap-4">

                            <div className="border border-gray-800 p-4 rounded-xl">
                                <h3 className="text-red-400 font-semibold">Typical RAG</h3>
                                <ul className="text-gray-400 text-sm mt-2 space-y-1">
                                    <li>• Token-based chunking</li>
                                    <li>• Weak evaluation</li>
                                    <li>• Hallucination prone</li>
                                </ul>
                            </div>

                            <div className="border border-gray-800 p-4 rounded-xl">
                                <h3 className="text-[#00e5bf] font-semibold">ClaimLens</h3>
                                <ul className="text-gray-400 text-sm mt-2 space-y-1">
                                    <li>• Deterministic clause parsing</li>
                                    <li>• Canonical IDs</li>
                                    <li>• Strict validation</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                    {/* ================= Evaluation ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-4">Evaluation</h2>

                        <div className="border border-gray-800 p-6 rounded-xl flex gap-10">
                            <div>
                                <p className="text-sm text-gray-400">Recall@20</p>
                                <p className="text-3xl font-bold text-[#00e5bf]">0.93</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">MRR</p>
                                <p className="text-3xl font-bold text-[#00e5bf]">0.89</p>
                            </div>
                        </div>
                    </section>

                    {/* ================= Challenges ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-3">Challenges</h2>

                        <ul className="text-gray-400 space-y-2">
                            <li>• Handling inconsistent clause structures across insurers</li>
                            <li>• Reducing noise from dense retrieval</li>
                            <li>• Enforcing strict schema validation on LLM outputs</li>
                        </ul>
                    </section>

                    {/* ================= Key Insight ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-3">Key Insight</h2>

                        <div className="border border-gray-800 p-5 rounded-xl">
                            <p className="text-gray-400">
                                Treating retrieval as a deterministic engineering system instead of a heuristic pipeline
                                significantly improves reliability, evaluation consistency, and real-world usability.
                            </p>
                        </div>
                    </section>

                    {/* ================= Why It Matters ================= */}
                    <section>
                        <h2 className="text-xl font-semibold mb-3">Why This Matters</h2>

                        <p className="text-gray-400">
                            ClaimLens demonstrates how structured retrieval and strict validation can transform RAG systems
                            into reliable, production-ready solutions for complex domains like legal document understanding.
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}