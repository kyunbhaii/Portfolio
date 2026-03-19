'use client';

import BackButton from '../../components/BackButton';
import BoxActionLink from '../../components/BoxActionLink';
import { useState, useEffect } from 'react';
import {
    ClaimLensCallout,
    ClaimLensDiagramArrow,
    ClaimLensDiagramLanePanel,
    ClaimLensDiagramNode,
    ClaimLensDiagramShell,
    ClaimLensDiagramTagPanel,
    ClaimLensSectionHeading,
} from './components';

const systemArchitecturePoints = [
    'Ingestion → Page-level document loading',
    'Clause Splitter → Deterministic clause extraction',
    'Retriever → Dense retrieval (FAISS)',
    'Reranker → Cross-Encoder ranking refinement',
    'Reasoner → LLM with strict schema validation',
    'Pipeline → End-to-end orchestration',
];

const systemSurfaceNodes = [
    { title: "Experience Layer", subtitle: "Portfolio UI / user-facing interactions" },
    { title: "Service Layer", subtitle: "API orchestration and request handling" },
    { title: "ClaimLens Engine", subtitle: "Clause parsing, retrieval, reranking, reasoning", strong: true },
];

const systemSurfaceDataFoundation = [
    "Policy Documents",
    "Clause Store",
    "FAISS Index",
    "Metadata Cache",
];

const systemSurfaceModelRuntime = [
    "Embedding Model",
    "Cross-Encoder",
    "Validated LLM Output",
];

const reasoningFlowTopNodes = [
    { title: "Coverage Query", subtitle: "User asks about claim eligibility or policy terms" },
    { title: "Query Builder", subtitle: "Transforms the request into retrieval-friendly intent" },
    { title: "Pipeline Orchestrator", subtitle: "Coordinates retrieval, reranking, and answer assembly", strong: true },
];

const retrievalLaneItems = [
    "Deterministic clause parsing creates stable retrieval units",
    "Dense retrieval surfaces high-recall policy clauses",
    "Cross-encoder reranking compresses evidence to the strongest set",
];

const reasoningLaneItems = [
    "Grounded context is passed to the reasoning layer",
    "Strict schema validation rejects malformed answers",
    "Citation checks ensure outputs stay tied to policy clauses",
];

const reasoningFlowBottomNodes = [
    { title: "Clause Evidence", subtitle: "Top-ranked passages retained for answer generation" },
    { title: "Validation Gate", subtitle: "Pydantic schema and retry logic enforce structure" },
    { title: "Structured Answer", subtitle: "Grounded response with confidence and citations", strong: true },
];

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
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 py-12">

            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-[2px] theme-progress-track z-50">
                <div
                    className="h-full bg-[#00e5bf] shadow-[0_0_8px_rgba(0,229,191,0.6)] transition-all duration-150 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Outer container */}
            <div className="max-w-7xl mx-auto fade-up">

                {/* 📄 Page Box */}
                <div className="bg-[var(--panel-strong)] border theme-border-soft rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgb(var(--accent-rgb)/0.06)]">

                    {/* ================= Top Nav ================= */}
                    <div className="mb-10 flex justify-between items-center">
                        <BackButton />

                        <BoxActionLink
                            href="https://github.com/kyunbhaii/ClaimLens-ET-Hackathon"
                            external
                            className="text-sm px-3 py-1"
                        >
                            GitHub ↗
                        </BoxActionLink>
                    </div>

                    {/* ================= Hero ================= */}
                    <h1 className="text-4xl font-bold mb-3 tracking-tight">ClaimLens</h1>

                    <p className="theme-copy text-sm mb-6">
                        Case Study • RAG Systems • Retrieval Engineering
                    </p>

                    <p className="theme-copy-strong text-lg leading-relaxed mb-2">
                        Most RAG systems fail on real-world documents.
                    </p>
                    <p className="theme-copy text-base leading-relaxed mb-8">
                        ClaimLens solves this by replacing naive chunking with deterministic clause-level retrieval — built for insurance policies where precision isn&apos;t optional.
                    </p>

                    {/* Scroll Invite */}
                    <div className="flex flex-col items-start gap-2 mb-12">
                        <p className="theme-claimlens-scroll-copy text-sm font-mono tracking-wide">Scroll to explore architecture, evaluation & insights ↓</p>
                        <div className="flex gap-1">
                            <span className="theme-claimlens-scroll-dot w-2 h-2 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                            <span className="theme-claimlens-scroll-dot theme-claimlens-scroll-dot-mid w-2 h-2 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="theme-claimlens-scroll-dot theme-claimlens-scroll-dot-strong w-2 h-2 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </div>
                    </div>

                    {/* ================= Introduction ================= */}
                    <section className="mb-16">
                        <ClaimLensSectionHeading title="Introduction" />

                        <p className="theme-copy leading-relaxed mb-4">
                            ClaimLens is a production-oriented Retrieval-Augmented Generation (RAG) system designed for insurance policy analysis, where accuracy and traceability are critical.
                        </p>
                        <p className="theme-copy leading-relaxed mb-4">
                            Traditional RAG pipelines often rely on heuristic chunking and loosely grounded outputs, which can lead to inconsistent retrieval and hallucinations. In domains like insurance, where decisions depend on precise clauses, this becomes a major limitation.
                        </p>
                        <p className="theme-copy leading-relaxed">
                            This project focuses on treating retrieval and reasoning as structured, deterministic systems rather than black-box pipelines, ensuring that every output is grounded, traceable, and evaluable.
                        </p>
                    </section>

                    {/* ================= Problem & Motivation ================= */}
                    <section className="mb-16">
                        <ClaimLensSectionHeading title="Problem & Motivation" className="mb-4" />

                        <p className="theme-copy leading-relaxed mb-4">
                            Most RAG tutorials suggest a simple pipeline: chunk documents, embed them, and retrieve with an LLM.
                            This works well for clean text, but breaks down in real-world documents like insurance policies.
                        </p>

                        <p className="theme-copy leading-relaxed mb-4">
                            Insurance PDFs are structurally complex, with inconsistent numbering, repeated headings,
                            annexures, and noisy formatting. Naive token-based chunking ignores these structures,
                            often splitting clauses incorrectly or missing important context entirely.
                        </p>

                        <p className="theme-copy leading-relaxed mb-4">
                            The core problem wasn&apos;t retrieval — it was structure.
                        </p>

                        <p className="theme-copy leading-relaxed mb-4">
                            To address this, I designed a deterministic clause parser that:
                        </p>

                        <ul className="theme-copy space-y-2 mb-4">
                            <li>• Detects multiple clause formats (numbered, roman, alphabetic, definitions)</li>
                            <li>• Assigns canonical IDs to each clause for traceability</li>
                            <li>• Enforces fail-fast behavior to avoid silent parsing errors</li>
                        </ul>

                        <p className="theme-copy leading-relaxed mb-4">
                            This ensures that each retrieval unit maps directly to a real legal clause, improving both
                            retrieval accuracy and interpretability.
                        </p>

                        <p className="theme-copy leading-relaxed">
                            While not perfect due to challenges like multi-column layouts and inconsistent formatting,
                            the system significantly outperforms naive chunking and provides a clear evaluation framework
                            to iteratively improve performance.
                        </p>
                    </section>

                    {/* ================= Overview ================= */}
                    <section className="mb-16">
                        <ClaimLensSectionHeading title="Overview" />

                        <p className="theme-copy leading-relaxed mb-4">
                            ClaimLens is designed as a structured retrieval system rather than a naive RAG pipeline.
                        </p>

                        <p className="theme-copy mb-2">The system enforces:</p>
                        <ul className="theme-copy space-y-1 leading-relaxed mb-4">
                            <li>• Deterministic parsing for stable retrieval units</li>
                            <li>• Canonical identifiers for traceability</li>
                            <li>• Evaluation-driven design for measurable performance</li>
                        </ul>

                        <p className="theme-copy leading-relaxed">
                            The goal is to move from &quot;LLM-generated answers&quot; to reliable, reproducible decision support.
                        </p>
                    </section>

                    {/* ================= System Architecture ================= */}
                    <section className="mb-16">
                        <ClaimLensSectionHeading title="System Architecture" />

                        <p className="theme-copy leading-relaxed mb-4">
                            The architecture is designed to separate concerns across ingestion, retrieval, ranking, and reasoning, ensuring each component is independently optimizable and testable.
                        </p>

                        <ul className="theme-copy space-y-2 leading-relaxed">
                            {systemArchitecturePoints.map((point) => (
                                <li key={point}>• {point}</li>
                            ))}
                        </ul>
                    </section>

                    {/* ================= Architecture ================= */}
                    <section className="mb-16">
                        <ClaimLensSectionHeading title="Architecture" className="mb-4" />
                        <p className="theme-copy leading-relaxed mb-6">
                            The two diagrams below translate the system description into a product view and an execution flow, making it easier to see how ClaimLens moves from a policy question to a grounded answer.
                        </p>

                        <ClaimLensDiagramShell
                            kicker="Diagram 01"
                            title="ClaimLens System Surface"
                            description="A high-level product view showing how the experience layer, service layer, and retrieval/reasoning engine work together."
                            className="bg-[radial-gradient(circle_at_top,var(--page-glow),transparent_45%),var(--panel-solid)] mb-8"
                        >

                            <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:justify-between">
                                {systemSurfaceNodes.map((item, idx) => (
                                    <div key={item.title} className="contents lg:contents">
                                        <ClaimLensDiagramNode title={item.title} subtitle={item.subtitle} strong={item.strong} className="flex-1" />
                                        {idx < 2 && (
                                            <ClaimLensDiagramArrow className="px-1" />
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="grid gap-4 mt-6 md:grid-cols-2">
                                <ClaimLensDiagramTagPanel title="Data Foundation" items={systemSurfaceDataFoundation} />
                                <ClaimLensDiagramTagPanel title="Model Runtime" items={systemSurfaceModelRuntime} />
                            </div>
                        </ClaimLensDiagramShell>

                        <ClaimLensDiagramShell
                            kicker="Diagram 02"
                            title="ClaimLens Retrieval and Reasoning Flow"
                            description="The query is normalized, routed through retrieval, and only then passed into a constrained reasoning layer for a grounded final answer."
                            className="bg-[linear-gradient(180deg,rgb(var(--accent-rgb)/0.06),transparent_24%),var(--panel-solid)]"
                        >

                            <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
                                {reasoningFlowTopNodes.map((item, idx) => (
                                    <div key={item.title} className="contents">
                                        <ClaimLensDiagramNode title={item.title} subtitle={item.subtitle} strong={item.strong} />
                                        {idx < 2 && (
                                            <ClaimLensDiagramArrow />
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="grid gap-4 mt-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center">
                                <ClaimLensDiagramLanePanel title="Retrieval Lane" items={retrievalLaneItems} />

                                <div className="hidden lg:flex items-center justify-center">
                                    <div className="claimlens-diagram-pill theme-claimlens-evidence rounded-full border border-[color:rgb(var(--accent-rgb)/0.2)] bg-[color:rgb(var(--accent-rgb)/0.05)] px-4 py-2 text-xs font-mono text-[color:rgb(var(--accent-rgb)/0.7)]">
                                        evidence pack
                                    </div>
                                </div>

                                <ClaimLensDiagramLanePanel title="Reasoning Lane" items={reasoningLaneItems} />
                            </div>

                            <div className="grid gap-3 mt-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
                                {reasoningFlowBottomNodes.map((item, idx) => (
                                    <div key={item.title} className="contents">
                                        <ClaimLensDiagramNode title={item.title} subtitle={item.subtitle} strong={item.strong} />
                                        {idx < 2 && (
                                            <ClaimLensDiagramArrow />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </ClaimLensDiagramShell>
                    </section>

                    {/* ================= Design Constraints ================= */}
                    <section className="mb-16">
                        <ClaimLensSectionHeading title="Design Constraints" />

                        <ul className="theme-copy space-y-2 leading-relaxed">
                            <li>• High precision required for legal clause interpretation</li>
                            <li>• Inconsistent document structures across insurers</li>
                            <li>• Need for traceable and explainable outputs</li>
                            <li>• Minimizing hallucinations in LLM reasoning</li>
                        </ul>
                    </section>

                    {/* ================= Key Engineering Decisions ================= */}
                    <section className="mb-16">
                        <ClaimLensSectionHeading title="Key Engineering Decisions" className="mb-4" />

                        <div className="space-y-6">

                            <div>
                                <h3 className="font-semibold">Deterministic Clause Parsing</h3>
                                <p className="theme-copy text-sm mt-1">
                                    Moved from token-based chunking to deterministic clause parsing to ensure retrieval operates on semantically meaningful and stable units, improving both recall and interpretability.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold">Canonical Clause IDs</h3>
                                <p className="theme-copy text-sm mt-1">
                                    Token-based chunks lacked identity across runs, making evaluation inconsistent. Introduced canonical clause identifiers so that retrieval experiments are reproducible and traceable across different queries and document versions.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold">Fail-Fast Design</h3>
                                <p className="theme-copy text-sm mt-1">
                                    Silent failures in LLM pipelines produce unreliable outputs that are difficult to debug. Applied fail-fast validation with explicit error handling at each stage, ensuring that failures surface immediately and prevent cascading issues downstream.
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* ================= Retrieval ================= */}
                    <section className="mb-16">
                        <ClaimLensSectionHeading title="Retrieval Pipeline" />

                        <ul className="theme-copy space-y-2">
                            <li>• Dense Retrieval (FAISS + BGE embeddings)</li>
                            <li>• Top-K = 40 candidate generation</li>
                            <li>• Cross-Encoder reranking → Top 5</li>
                            <li>• Eliminated manual hybrid weighting</li>
                        </ul>
                    </section>

                    {/* ================= Reasoning ================= */}
                    <section className="mb-16">
                        <ClaimLensSectionHeading title="Reasoning & Validation" />

                        <ul className="theme-copy space-y-2">
                            <li>• Strict JSON schema enforcement (Pydantic)</li>
                            <li>• Citation grounding constraints</li>
                            <li>• Retry mechanism on validation failure</li>
                        </ul>
                    </section>

                    {/* ================= Differentiation ================= */}
                    <section className="mb-16">
                        <ClaimLensSectionHeading title="What Makes This Different" className="mb-4" />

                        <div className="grid md:grid-cols-2 gap-4">

                            <div className="border theme-border-subtle p-4 rounded-xl">
                                <h3 className="text-red-400 font-semibold">Typical RAG</h3>
                                <ul className="theme-copy text-sm mt-2 space-y-1">
                                    <li>• Token-based chunking</li>
                                    <li>• Weak evaluation</li>
                                    <li>• Hallucination prone</li>
                                </ul>
                            </div>

                            <div className="border theme-border-subtle p-4 rounded-xl">
                                <h3 className="theme-claimlens-compare-title font-semibold">ClaimLens</h3>
                                <ul className="theme-copy text-sm mt-2 space-y-1">
                                    <li>• Deterministic clause parsing</li>
                                    <li>• Canonical IDs</li>
                                    <li>• Strict validation</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                    {/* ================= Evaluation ================= */}
                    <section className="mb-16">
                        <ClaimLensSectionHeading title="Evaluation" className="mb-4" />

                        <p className="theme-copy leading-relaxed mb-4">
                            Evaluation was treated as a first-class component rather than an afterthought.
                        </p>
                        <p className="theme-copy leading-relaxed mb-4">
                            Metrics such as Recall@20 and MRR were used to measure retrieval effectiveness, ensuring that relevant clauses are consistently surfaced before reasoning.
                        </p>
                        <p className="theme-copy leading-relaxed mb-6">
                            This enabled iterative improvements in retrieval quality instead of relying on subjective output inspection.
                        </p>

                        <div className="border theme-border-subtle p-6 rounded-xl flex gap-10">
                            <div>
                                <p className="text-sm theme-copy">Recall@20</p>
                                <p className="theme-claimlens-metric text-3xl font-bold">0.93</p>
                            </div>

                            <div>
                                <p className="text-sm theme-copy">MRR</p>
                                <p className="theme-claimlens-metric text-3xl font-bold">0.89</p>
                            </div>
                        </div>
                    </section>

                    {/* ================= Trade-offs ================= */}
                    <section className="mb-16">
                        <ClaimLensSectionHeading title="Trade-offs" />

                        <ClaimLensCallout>
                            <p className="theme-copy text-sm">• Deterministic parsing increases complexity but improves consistency</p>
                            <p className="theme-copy text-sm">• Cross-encoder reranking improves accuracy at the cost of latency</p>
                            <p className="theme-copy text-sm">• Strict validation reduces flexibility but ensures reliability</p>
                        </ClaimLensCallout>
                    </section>

                    {/* ================= Challenges ================= */}
                    <section className="mb-16">
                        <ClaimLensSectionHeading title="Challenges" />

                        <ul className="theme-copy space-y-2">
                            <li>• Handling inconsistent clause structures across insurers</li>
                            <li>• Reducing noise from dense retrieval</li>
                            <li>• Enforcing strict schema validation on LLM outputs</li>
                        </ul>
                    </section>

                    {/* ================= Future Improvements ================= */}
                    <section className="mb-16">
                        <ClaimLensSectionHeading title="Future Improvements" />

                        <ul className="theme-copy space-y-2 leading-relaxed">
                            <li>• Adaptive retrieval based on query intent</li>
                            <li>• Learning-to-rank for dynamic reranking optimization</li>
                            <li>• Feedback loop for continuous evaluation improvement</li>
                            <li>• Integration with LangGraph for agentic workflows</li>
                        </ul>
                    </section>

                    {/* ================= What I Learned ================= */}
                    <section className="mb-16">
                        <ClaimLensSectionHeading title="What I Learned" />

                        <ClaimLensCallout>
                            <p className="theme-copy text-sm">• Retrieval quality is the primary bottleneck in RAG systems</p>
                            <p className="theme-copy text-sm">• Evaluation is essential for iterative improvement</p>
                            <p className="theme-copy text-sm">• Structure and constraints improve LLM reliability more than prompt tuning</p>
                        </ClaimLensCallout>
                    </section>

                    {/* ================= Key Insight ================= */}
                    <section className="mb-16">
                        <ClaimLensSectionHeading title="Key Insight" />

                        <ClaimLensCallout strong>
                            <p className="theme-copy-strong leading-relaxed">
                                Reliable RAG systems are not achieved by better prompts, but by designing retrieval and reasoning as structured, deterministic pipelines with measurable performance.
                            </p>
                        </ClaimLensCallout>
                    </section>



                </div>
            </div>
        </main>
    );
}
