'use client';

import BackButton from '../../components/BackButton';
import { useState, useEffect } from 'react';

export default function ClaimLensPage() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(Math.min(100, Math.round(pct)));
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <main className="min-h-screen bg-black text-white px-6 py-12">

            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-[2px] bg-gray-900 z-50">
                <div
                    className="h-full bg-[#00e5bf] shadow-[0_0_8px_rgba(0,229,191,0.6)] transition-all duration-150 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

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

                    <p className="text-gray-300 text-lg leading-relaxed mb-2">
                        Most RAG systems fail on real-world documents.
                    </p>
                    <p className="text-gray-400 text-base leading-relaxed mb-8">
                        ClaimLens solves this by replacing naive chunking with deterministic clause-level retrieval — built for insurance policies where precision isn&apos;t optional.
                    </p>

                    {/* Scroll Invite */}
                    <div className="flex flex-col items-start gap-2 mb-12">
                        <p className="text-[#00e5bf]/70 text-sm font-mono tracking-wide">Scroll to explore architecture, evaluation & insights ↓</p>
                        <div className="flex gap-1">
                            <span className="w-2 h-2 rounded-full bg-[#00e5bf]/40 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                            <span className="w-2 h-2 rounded-full bg-[#00e5bf]/60 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-2 h-2 rounded-full bg-[#00e5bf]/80 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </div>
                    </div>

                    {/* ================= Introduction ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-3 flex items-center gap-3"><span className="w-1 h-5 bg-[#00e5bf] rounded-full shadow-[0_0_8px_rgba(0,229,191,0.5)]"></span>Introduction</h2>

                        <p className="text-gray-400 leading-relaxed mb-4">
                            ClaimLens is a production-oriented Retrieval-Augmented Generation (RAG) system designed for insurance policy analysis, where accuracy and traceability are critical.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Traditional RAG pipelines often rely on heuristic chunking and loosely grounded outputs, which can lead to inconsistent retrieval and hallucinations. In domains like insurance, where decisions depend on precise clauses, this becomes a major limitation.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            This project focuses on treating retrieval and reasoning as structured, deterministic systems rather than black-box pipelines, ensuring that every output is grounded, traceable, and evaluable.
                        </p>
                    </section>

                    {/* ================= Problem & Motivation ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-3"><span className="w-1 h-5 bg-[#00e5bf] rounded-full shadow-[0_0_8px_rgba(0,229,191,0.5)]"></span>Problem & Motivation</h2>

                        <p className="text-gray-400 leading-relaxed mb-4">
                            Most RAG tutorials suggest a simple pipeline: chunk documents, embed them, and retrieve with an LLM.
                            This works well for clean text, but breaks down in real-world documents like insurance policies.
                        </p>

                        <p className="text-gray-400 leading-relaxed mb-4">
                            Insurance PDFs are structurally complex, with inconsistent numbering, repeated headings,
                            annexures, and noisy formatting. Naive token-based chunking ignores these structures,
                            often splitting clauses incorrectly or missing important context entirely.
                        </p>

                        <p className="text-gray-400 leading-relaxed mb-4">
                            The core problem wasn&apos;t retrieval — it was structure.
                        </p>

                        <p className="text-gray-400 leading-relaxed mb-4">
                            To address this, I designed a deterministic clause parser that:
                        </p>

                        <ul className="text-gray-400 space-y-2 mb-4">
                            <li>• Detects multiple clause formats (numbered, roman, alphabetic, definitions)</li>
                            <li>• Assigns canonical IDs to each clause for traceability</li>
                            <li>• Enforces fail-fast behavior to avoid silent parsing errors</li>
                        </ul>

                        <p className="text-gray-400 leading-relaxed mb-4">
                            This ensures that each retrieval unit maps directly to a real legal clause, improving both
                            retrieval accuracy and interpretability.
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                            While not perfect due to challenges like multi-column layouts and inconsistent formatting,
                            the system significantly outperforms naive chunking and provides a clear evaluation framework
                            to iteratively improve performance.
                        </p>
                    </section>

                    {/* ================= Overview ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-3 flex items-center gap-3"><span className="w-1 h-5 bg-[#00e5bf] rounded-full shadow-[0_0_8px_rgba(0,229,191,0.5)]"></span>Overview</h2>

                        <p className="text-gray-400 leading-relaxed mb-4">
                            ClaimLens is designed as a structured retrieval system rather than a naive RAG pipeline.
                        </p>

                        <p className="text-gray-400 mb-2">The system enforces:</p>
                        <ul className="text-gray-400 space-y-1 leading-relaxed mb-4">
                            <li>• Deterministic parsing for stable retrieval units</li>
                            <li>• Canonical identifiers for traceability</li>
                            <li>• Evaluation-driven design for measurable performance</li>
                        </ul>

                        <p className="text-gray-400 leading-relaxed">
                            The goal is to move from &quot;LLM-generated answers&quot; to reliable, reproducible decision support.
                        </p>
                    </section>

                    {/* ================= System Architecture ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-3 flex items-center gap-3"><span className="w-1 h-5 bg-[#00e5bf] rounded-full shadow-[0_0_8px_rgba(0,229,191,0.5)]"></span>System Architecture</h2>

                        <p className="text-gray-400 leading-relaxed mb-4">
                            The architecture is designed to separate concerns across ingestion, retrieval, ranking, and reasoning, ensuring each component is independently optimizable and testable.
                        </p>

                        <ul className="text-gray-400 space-y-2 leading-relaxed">
                            <li>• Ingestion → Page-level document loading</li>
                            <li>• Clause Splitter → Deterministic clause extraction</li>
                            <li>• Retriever → Dense retrieval (FAISS)</li>
                            <li>• Reranker → Cross-Encoder ranking refinement</li>
                            <li>• Reasoner → LLM with strict schema validation</li>
                            <li>• Pipeline → End-to-end orchestration</li>
                        </ul>
                    </section>

                    {/* ================= Design Constraints ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-3 flex items-center gap-3"><span className="w-1 h-5 bg-[#00e5bf] rounded-full shadow-[0_0_8px_rgba(0,229,191,0.5)]"></span>Design Constraints</h2>

                        <ul className="text-gray-400 space-y-2 leading-relaxed">
                            <li>• High precision required for legal clause interpretation</li>
                            <li>• Inconsistent document structures across insurers</li>
                            <li>• Need for traceable and explainable outputs</li>
                            <li>• Minimizing hallucinations in LLM reasoning</li>
                        </ul>
                    </section>

                    {/* ================= Architecture ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-3"><span className="w-1 h-5 bg-[#00e5bf] rounded-full shadow-[0_0_8px_rgba(0,229,191,0.5)]"></span>Architecture</h2>

                        {/* Outer ClaimLens AI container */}
                        <div className="border border-gray-700 rounded-xl p-5 bg-[#0a0a0a] mb-8">
                            <p className="text-xs text-[#00e5bf]/50 font-mono mb-4 text-center tracking-widest uppercase">ClaimLens AI</p>

                            {/* Inner system container */}
                            <div className="border border-[#00e5bf]/10 rounded-lg p-5 mb-4">

                                {/* Top row */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
                                    <div className="border border-[#00e5bf]/30 rounded-lg px-4 py-3 text-center min-w-[130px] bg-[#00e5bf]/[0.03]">
                                        <p className="text-[#00e5bf]/80 text-sm font-mono">Frontend</p>
                                        <p className="text-[#00e5bf]/40 text-xs font-mono">(React)</p>
                                    </div>
                                    <div className="text-[#00e5bf]/40 text-lg font-mono select-none rotate-90 sm:rotate-0">⇄</div>
                                    <div className="border border-[#00e5bf]/30 rounded-lg px-4 py-3 text-center min-w-[130px] bg-[#00e5bf]/[0.03]">
                                        <p className="text-[#00e5bf]/80 text-sm font-mono">Backend</p>
                                        <p className="text-[#00e5bf]/40 text-xs font-mono">(FastAPI)</p>
                                    </div>
                                    <div className="text-[#00e5bf]/40 text-lg font-mono select-none rotate-90 sm:rotate-0">⇄</div>
                                    <div className="border border-[#00e5bf]/50 rounded-lg px-4 py-3 text-center min-w-[150px] bg-[#00e5bf]/[0.06] shadow-[0_0_12px_rgba(0,229,191,0.08)]">
                                        <p className="text-[#00e5bf] text-sm font-mono">AI/ML Pipeline</p>
                                        <p className="text-[#00e5bf]/50 text-xs font-mono">(RAG + LLM)</p>
                                    </div>
                                </div>

                                {/* Down arrows */}
                                <div className="flex justify-center gap-[220px] sm:gap-[276px] mb-4 text-[#00e5bf]/30 text-sm font-mono select-none">
                                    <span>↓</span>
                                    <span>↓</span>
                                </div>

                                {/* Data Layer */}
                                <div className="border border-[#00e5bf]/10 rounded-lg p-4">
                                    <p className="text-xs text-[#00e5bf]/40 font-mono mb-3 text-center tracking-widest uppercase">Data Layer</p>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {[
                                            { name: "PostgreSQL", sub: "(pgvector)" },
                                            { name: "Redis", sub: "(Cache)" },
                                            { name: "FAISS/", sub: "pgvector" },
                                            { name: "S3", sub: "(Documents)" },
                                        ].map((item) => (
                                            <div key={item.name} className="border border-[#00e5bf]/30 rounded-md px-3 py-2 text-center min-w-[100px] bg-[#00e5bf]/[0.03]">
                                                <p className="text-[#00e5bf]/80 text-xs font-mono">{item.name}</p>
                                                <p className="text-[#00e5bf]/40 text-xs font-mono">{item.sub}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* LLM Providers */}
                            <div className="border border-[#00e5bf]/10 rounded-lg p-4">
                                <p className="text-xs text-[#00e5bf]/40 font-mono mb-3 text-center tracking-widest uppercase">LLM Providers</p>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {[
                                        { name: "Mock", sub: "(Dev)" },
                                        { name: "Ollama", sub: "(Local)" },
                                        { name: "AWS Bedrock", sub: "" },
                                    ].map((item) => (
                                        <div key={item.name} className="border border-[#00e5bf]/30 rounded-md px-4 py-2 text-center min-w-[110px] bg-[#00e5bf]/[0.03]">
                                            <p className="text-[#00e5bf]/80 text-xs font-mono">{item.name}</p>
                                            {item.sub && <p className="text-[#00e5bf]/40 text-xs font-mono">{item.sub}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ===== RAG Pipeline Flowchart ===== */}
                        <h3 className="text-base font-semibold mb-4 text-gray-300 flex items-center gap-2">
                            <span className="w-0.5 h-4 bg-[#00e5bf]/60 rounded-full"></span>
                            RAG Pipeline
                        </h3>

                        <div className="border border-gray-700 rounded-xl p-5 bg-[#0a0a0a] overflow-x-auto flex justify-center">
                            <div className="flex items-stretch gap-1 sm:gap-2">

                                {/* ── Spine: Raw Input → Query Builder → Pipeline ── */}
                                <div className="flex items-center gap-1 sm:gap-2">

                                    {/* Raw Clinical Input */}
                                    <div className="border border-[#00e5bf]/30 rounded-lg p-2 sm:p-3 text-center bg-[#00e5bf]/[0.03] w-28 sm:w-32 flex flex-col items-center justify-center min-h-[110px]">
                                        <p className="text-[#00e5bf]/80 text-xs sm:text-sm font-mono leading-tight">Raw Clinical Input</p>
                                        <p className="text-[#00e5bf]/40 text-[10px] sm:text-xs font-mono mt-2">(User Query)</p>
                                    </div>
                                    <span className="text-[#00e5bf]/30 font-mono text-sm select-none">→</span>

                                    {/* Query Builder Layer */}
                                    <div className="border border-[#00e5bf]/30 rounded-lg p-2 sm:p-3 text-center bg-[#00e5bf]/[0.03] w-28 sm:w-32 flex flex-col items-center justify-center min-h-[110px]">
                                        <p className="text-[#00e5bf]/80 text-xs sm:text-sm font-mono leading-tight">Query Builder</p>
                                        <p className="text-[#00e5bf]/40 text-[10px] sm:text-xs font-mono mt-2">(LLM Translation)</p>
                                    </div>
                                    <span className="text-[#00e5bf]/30 font-mono text-sm select-none">→</span>

                                    {/* Pipeline Layer */}
                                    <div className="border border-[#00e5bf]/50 rounded-lg p-2 sm:p-3 text-center bg-[#00e5bf]/[0.06] shadow-[0_0_12px_rgba(0,229,191,0.06)] w-28 sm:w-32 flex flex-col items-center justify-center min-h-[110px]">
                                        <p className="text-[#00e5bf] text-xs sm:text-sm font-mono leading-tight">Pipeline Layer</p>
                                        <p className="text-[#00e5bf]/50 text-[10px] sm:text-xs font-mono mt-2">(Orchestration)</p>
                                    </div>
                                </div>

                                {/* Fork connector — vertical bar splitting into two lanes */}
                                <div className="flex flex-col justify-center mx-1 select-none">
                                    <div className="flex items-center">
                                        <div className="w-2 sm:w-3 border-t border-[#00e5bf]/20"></div>
                                        <div className="h-[130px] sm:h-[140px] border-r border-[#00e5bf]/20"></div>
                                    </div>
                                </div>

                                {/* Two horizontal branches */}
                                <div className="flex flex-col gap-4 sm:gap-6 justify-center">

                                    {/* Top branch: Retriever lane */}
                                    <div className="flex items-center gap-1 sm:gap-2">
                                        <div className="flex items-center gap-0">
                                            <div className="w-2 sm:w-3 border-t border-[#00e5bf]/20"></div>
                                            <span className="text-[#00e5bf]/30 font-mono text-sm select-none">→</span>
                                        </div>
                                        <div className="border border-[#00e5bf]/30 rounded-lg p-2 sm:p-3 text-center bg-[#00e5bf]/[0.03] w-28 sm:w-32 flex flex-col items-center justify-center min-h-[110px]">
                                            <p className="text-[#00e5bf]/80 text-xs sm:text-sm font-mono leading-tight">Retriever Layer</p>
                                            <p className="text-[#00e5bf]/40 text-[10px] sm:text-xs font-mono mt-2 leading-tight">BM25 + Dense<br />↓<br />Cross-Encoder</p>
                                        </div>
                                        <span className="text-[#00e5bf]/30 font-mono text-sm select-none">→</span>
                                        <div className="border border-[#00e5bf]/30 rounded-lg p-2 sm:p-3 text-center bg-[#00e5bf]/[0.03] w-28 sm:w-32 flex flex-col items-center justify-center min-h-[110px]">
                                            <p className="text-[#00e5bf]/80 text-xs sm:text-sm font-mono leading-tight">Vector Store</p>
                                            <p className="text-[#00e5bf]/40 text-[10px] sm:text-xs font-mono mt-2">+ BM25 Index</p>
                                        </div>
                                    </div>

                                    {/* Bottom branch: Reasoning lane */}
                                    <div className="flex items-center gap-1 sm:gap-2">
                                        <div className="flex items-center gap-0">
                                            <div className="w-2 sm:w-3 border-t border-[#00e5bf]/20"></div>
                                            <span className="text-[#00e5bf]/30 font-mono text-sm select-none">→</span>
                                        </div>
                                        <div className="border border-[#00e5bf]/30 rounded-lg p-2 sm:p-3 text-center bg-[#00e5bf]/[0.03] w-28 sm:w-32 flex flex-col items-center justify-center min-h-[110px]">
                                            <p className="text-[#00e5bf]/80 text-xs sm:text-sm font-mono leading-tight">Reasoning Layer</p>
                                            <p className="text-[#00e5bf]/40 text-[10px] sm:text-xs font-mono mt-2 leading-tight">(LLM +<br />Validation)</p>
                                        </div>
                                        <span className="text-[#00e5bf]/30 font-mono text-sm select-none">→</span>
                                        <div className="border border-[#00e5bf]/30 rounded-lg p-2 sm:p-3 text-center bg-[#00e5bf]/[0.03] w-28 sm:w-32 flex flex-col items-center justify-center min-h-[110px]">
                                            <p className="text-[#00e5bf]/80 text-xs sm:text-sm font-mono leading-tight">Output Schema</p>
                                            <p className="text-[#00e5bf]/40 text-[10px] sm:text-xs font-mono mt-2">(Pydantic)</p>
                                        </div>
                                        <span className="text-[#00e5bf]/30 font-mono text-sm select-none">→</span>
                                        <div className="border border-[#00e5bf]/50 rounded-lg p-2 sm:p-3 text-center bg-[#00e5bf]/[0.06] shadow-[0_0_12px_rgba(0,229,191,0.06)] w-28 sm:w-32 flex flex-col items-center justify-center min-h-[110px]">
                                            <p className="text-[#00e5bf] text-xs sm:text-sm font-mono leading-tight">Structured Answer</p>
                                            <p className="text-[#00e5bf]/50 text-[10px] sm:text-xs font-mono mt-2">(RAGResponse)</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================= Key Engineering Decisions ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-3"><span className="w-1 h-5 bg-[#00e5bf] rounded-full shadow-[0_0_8px_rgba(0,229,191,0.5)]"></span>Key Engineering Decisions</h2>

                        <div className="space-y-6">

                            <div>
                                <h3 className="font-semibold">Deterministic Clause Parsing</h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    Moved from token-based chunking to deterministic clause parsing to ensure retrieval operates on semantically meaningful and stable units, improving both recall and interpretability.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold">Canonical Clause IDs</h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    Token-based chunks lacked identity across runs, making evaluation inconsistent. Introduced canonical clause identifiers so that retrieval experiments are reproducible and traceable across different queries and document versions.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold">Fail-Fast Design</h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    Silent failures in LLM pipelines produce unreliable outputs that are difficult to debug. Applied fail-fast validation with explicit error handling at each stage, ensuring that failures surface immediately and prevent cascading issues downstream.
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* ================= Retrieval ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-3 flex items-center gap-3"><span className="w-1 h-5 bg-[#00e5bf] rounded-full shadow-[0_0_8px_rgba(0,229,191,0.5)]"></span>Retrieval Pipeline</h2>

                        <ul className="text-gray-400 space-y-2">
                            <li>• Dense Retrieval (FAISS + BGE embeddings)</li>
                            <li>• Top-K = 40 candidate generation</li>
                            <li>• Cross-Encoder reranking → Top 5</li>
                            <li>• Eliminated manual hybrid weighting</li>
                        </ul>
                    </section>

                    {/* ================= Reasoning ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-3 flex items-center gap-3"><span className="w-1 h-5 bg-[#00e5bf] rounded-full shadow-[0_0_8px_rgba(0,229,191,0.5)]"></span>Reasoning & Validation</h2>

                        <ul className="text-gray-400 space-y-2">
                            <li>• Strict JSON schema enforcement (Pydantic)</li>
                            <li>• Citation grounding constraints</li>
                            <li>• Retry mechanism on validation failure</li>
                        </ul>
                    </section>

                    {/* ================= Differentiation ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-3"><span className="w-1 h-5 bg-[#00e5bf] rounded-full shadow-[0_0_8px_rgba(0,229,191,0.5)]"></span>What Makes This Different</h2>

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
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-3"><span className="w-1 h-5 bg-[#00e5bf] rounded-full shadow-[0_0_8px_rgba(0,229,191,0.5)]"></span>Evaluation</h2>

                        <p className="text-gray-400 leading-relaxed mb-4">
                            Evaluation was treated as a first-class component rather than an afterthought.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Metrics such as Recall@20 and MRR were used to measure retrieval effectiveness, ensuring that relevant clauses are consistently surfaced before reasoning.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            This enabled iterative improvements in retrieval quality instead of relying on subjective output inspection.
                        </p>

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

                    {/* ================= Trade-offs ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-3 flex items-center gap-3"><span className="w-1 h-5 bg-[#00e5bf] rounded-full shadow-[0_0_8px_rgba(0,229,191,0.5)]"></span>Trade-offs</h2>

                        <div className="border-l-2 border-[#00e5bf]/40 bg-[#00e5bf]/[0.03] rounded-r-xl pl-5 py-4 pr-4 space-y-3">
                            <p className="text-gray-400 text-sm">• Deterministic parsing increases complexity but improves consistency</p>
                            <p className="text-gray-400 text-sm">• Cross-encoder reranking improves accuracy at the cost of latency</p>
                            <p className="text-gray-400 text-sm">• Strict validation reduces flexibility but ensures reliability</p>
                        </div>
                    </section>

                    {/* ================= Challenges ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-3 flex items-center gap-3"><span className="w-1 h-5 bg-[#00e5bf] rounded-full shadow-[0_0_8px_rgba(0,229,191,0.5)]"></span>Challenges</h2>

                        <ul className="text-gray-400 space-y-2">
                            <li>• Handling inconsistent clause structures across insurers</li>
                            <li>• Reducing noise from dense retrieval</li>
                            <li>• Enforcing strict schema validation on LLM outputs</li>
                        </ul>
                    </section>

                    {/* ================= Future Improvements ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-3 flex items-center gap-3"><span className="w-1 h-5 bg-[#00e5bf] rounded-full shadow-[0_0_8px_rgba(0,229,191,0.5)]"></span>Future Improvements</h2>

                        <ul className="text-gray-400 space-y-2 leading-relaxed">
                            <li>• Adaptive retrieval based on query intent</li>
                            <li>• Learning-to-rank for dynamic reranking optimization</li>
                            <li>• Feedback loop for continuous evaluation improvement</li>
                            <li>• Integration with LangGraph for agentic workflows</li>
                        </ul>
                    </section>

                    {/* ================= What I Learned ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-3 flex items-center gap-3"><span className="w-1 h-5 bg-[#00e5bf] rounded-full shadow-[0_0_8px_rgba(0,229,191,0.5)]"></span>What I Learned</h2>

                        <div className="border-l-2 border-[#00e5bf]/40 bg-[#00e5bf]/[0.03] rounded-r-xl pl-5 py-4 pr-4 space-y-3">
                            <p className="text-gray-400 text-sm">• Retrieval quality is the primary bottleneck in RAG systems</p>
                            <p className="text-gray-400 text-sm">• Evaluation is essential for iterative improvement</p>
                            <p className="text-gray-400 text-sm">• Structure and constraints improve LLM reliability more than prompt tuning</p>
                        </div>
                    </section>

                    {/* ================= Key Insight ================= */}
                    <section className="mb-16">
                        <h2 className="text-xl font-semibold mb-3 flex items-center gap-3"><span className="w-1 h-5 bg-[#00e5bf] rounded-full shadow-[0_0_8px_rgba(0,229,191,0.5)]"></span>Key Insight</h2>

                        <div className="border-l-2 border-[#00e5bf] bg-[#00e5bf]/[0.05] rounded-r-xl pl-5 py-5 pr-4">
                            <p className="text-gray-300 leading-relaxed">
                                Reliable RAG systems are not achieved by better prompts, but by designing retrieval and reasoning as structured, deterministic pipelines with measurable performance.
                            </p>
                        </div>
                    </section>



                </div>
            </div>
        </main>
    );
}