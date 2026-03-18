"use client";

import Link from "next/link";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        title: "ClaimLens",
        description: "Built a production-grade RAG pipeline for insurance policy analysis across multi-insurer documents.",
        details: [
            "Built a production-grade Retrieval-Augmented Generation (RAG) pipeline for insurance policy analysis across multi-insurer documents.",
            "Implemented a deterministic clause splitter parsing legal PDFs into atomic clause chunks across 5 structural formats with canonical clause IDs and duplicate detection.",
            "Designed a two-stage retrieval architecture using embeddings + FAISS (Top-40) with cross-encoder reranking (Top-5), achieving Recall@20: 0.93, MRR: 0.89 on single-clause queries.",
            "Developed a multi-clause evaluation framework with stage-wise diagnostics, achieving Coverage@20: 0.87, Full Recall@20: 0.60, and MRR: 0.77 on composite multi-hop queries.",
            "Developed an LLM reasoning engine with strict Pydantic schema validation, citation grounding, and JSON retry logic returning structured answers with confidence and clause citations."
        ],
        techStack: ["LangChain", "FAISS", "RAG", "LLM"],
        githubUrl: "https://github.com/kyunbhaii/ClaimLens-ET-Hackathon",
        projectUrl: "/projects/claimlens",
        date: "Jan 2026 – Mar 2026",
        category: "AI/RAG"
    },
    {
        title: "Insurance-Aware RAG",
        description: "Advanced RAG system for extracting and reasoning over complex insurance policy clauses.",
        details: [
            "Implemented deterministic clause splitting with stable canonical IDs (e.g., ICICILombard_p8_Grace_Period_1) to ensure perfect evaluation traceability and prevent vector overwrites.",
            "Built a two-stage retrieval pipeline: high-recall dense FAISS retrieval using BGE embeddings followed by cross-encoder reranking for precision evidence surfacing.",
            "Enforced strict Pydantic schema validation (RAGResponse, Citation) as a structural firewall, rejecting hallucinated citations and logically contradictory LLM outputs."
        ],
        techStack: ["FAISS", "BM25", "Cross-Encoder", "RAG"],
        githubUrl: "https://github.com/kyunbhaii/Insurance-Aware-RAG",
        date: "Jan 2026 – Feb 2026",
        category: "AI/RAG"
    },
    {
        title: "GPT From Scratch",
        description: "Built a decoder-only transformer language model from scratch in PyTorch.",
        details: [
            "Built a decoder-only transformer language model from scratch, implementing multi-head self-attention, positional embeddings, feed-forward layers, and layer normalization across 6 transformer blocks with 384-dimensional embeddings.",
            "Trained a character-level transformer on 200K tokens of structured Shakespearean dialogue (20K+ lines) with speaker annotations, modeling long-context dependencies (256-token window) and generating coherent multi-turn text using the AdamW optimizer, achieving training loss 1.5 and validation loss 1.8.",
            "Optimized the training pipeline with gradient clipping, dropout (0.2), and efficient batching (64 sequences, 256-token context), reducing overfitting while improving validation stability."
        ],
        techStack: ["PyTorch", "Transformers", "NLP"],
        githubUrl: "https://github.com/kyunbhaii/GPT-from-Scratch",
        date: "Oct 2025 – Nov 2025",
        category: "Architecture"
    },
    {
        title: "Footfall Counting System",
        description: "Real-time system to detect, track, and count people in video streams.",
        details: [
            "Built using YOLOv8 for detection and BoT-SORT for long-term ID tracking with adaptive trip-wire logic, motion filtering, and cooldown logic enabling accurate directional counts (entries vs exits).",
            "Achieved strong performance: mAP@0.5: 98.2%, Precision: 91.9%, Recall: 95.4%, and ID Stability: 96.3%."
        ],
        techStack: ["YOLO", "OpenCV", "Tracking"],
        githubUrl: "https://github.com/kyunbhaii/FootFall-Counting-YOLOv-BoT-SORT",
        date: "May 2025 – Jul 2025",
        category: "Vision"
    },
    {
        title: "Hand Glove Detection",
        description: "Custom YOLOv8-based model for detecting and classifying gloved vs bare hands in safety-critical environments.",
        details: [
            "Synthesized and preprocessed a custom annotated classification dataset covering gloved and bare-hand instances across varied lighting and backgrounds.",
            "Trained and evaluated a lightweight YOLOv8 nano model, optimizing for real-time inference speed without sacrificing detection accuracy."
        ],
        techStack: ["YOLOv8", "Computer Vision", "PyTorch"],
        githubUrl: "https://github.com/kyunbhaii/Hand-Glove-Detection",
        date: "Jul 2025 – Aug 2025",
        category: "Vision"
    },
    {
        title: "Real-Time Sign Language Recognition",
        description: "Tracks hand movements & interprets signs from video using a combined CNN + LSTM architecture for spatial and temporal action recognition.",
        details: [
            "Captured spatial features natively via CNN layers.",
            "Processed temporal sequential actions utilizing LSTM networks."
        ],
        techStack: ["CNN", "LSTM", "OpenCV", "TensorFlow"],
        githubUrl: "https://github.com/kyunbhaii/Real-Time-Sign-Language-Detection-CNN-",
        date: "Jan 2024 – Apr 2024",
        category: "Vision"
    }
];

const categories = ["All", "AI/RAG", "Architecture", "Vision"];

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = projects.filter(project => 
        activeFilter === "All" || project.category === activeFilter
    );

    return (
        <main className="min-h-screen bg-black text-white px-6 py-12">

            <div className="max-w-7xl mx-auto fade-up">

                {/* ================= Header ================= */}
                <div className="flex justify-between items-center mb-10">

                    <Link
                        href="/"
                        className="text-gray-400 hover:text-[#00e5bf] transition"
                    >
                        ← Back
                    </Link>

                    <h1 className="text-3xl font-bold tracking-tight">Projects</h1>

                    <div></div>
                </div>

                {/* ================= Filter Tags ================= */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeFilter === category 
                                ? "bg-[#00e5bf] text-black shadow-[0_0_12px_rgba(0,229,191,0.3)]" 
                                : "bg-gray-900 border border-gray-800 text-gray-400 hover:text-[#00e5bf] hover:border-[#00e5bf]"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* ================= Projects Grid ================= */}
                <div className="w-full">
                    {activeFilter === "All" ? (
                        <>
                            {/* Featured Projects Section */}
                            <h2 className="text-2xl font-bold mb-6 mt-8 tracking-tight fade-up" style={{ animationDelay: '0ms' }}>
                                Featured Projects
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                                {filteredProjects.slice(0, 2).map((project, idx) => (
                                    <div key={project.title} style={{ animationDelay: `${(idx + 1) * 100}ms` }} className="animate-[fadeUp_0.4s_ease-out_both] h-full flex">
                                        <ProjectCard
                                            title={project.title}
                                            description={project.description}
                                            details={project.details}
                                            techStack={project.techStack}
                                            githubUrl={project.githubUrl}
                                            projectUrl={project.projectUrl}
                                            date={project.date}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Other Projects Section */}
                            <h2 className="text-2xl font-bold mb-6 mt-16 tracking-tight fade-up" style={{ animationDelay: '300ms' }}>
                                Other Projects
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                                {filteredProjects.slice(2).map((project, idx) => (
                                    <div key={project.title} style={{ animationDelay: `${(idx + 4) * 100}ms` }} className="animate-[fadeUp_0.4s_ease-out_both] h-full flex">
                                        <ProjectCard
                                            title={project.title}
                                            description={project.description}
                                            details={project.details}
                                            techStack={project.techStack}
                                            githubUrl={project.githubUrl}
                                            projectUrl={project.projectUrl}
                                            date={project.date}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        /* Filtered Projects rendering */
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mt-8">
                            {filteredProjects.map((project, idx) => (
                                <div key={project.title} style={{ animationDelay: `${idx * 100}ms` }} className="animate-[fadeUp_0.4s_ease-out_both] h-full flex">
                                    <ProjectCard
                                        title={project.title}
                                        description={project.description}
                                        details={project.details}
                                        techStack={project.techStack}
                                        githubUrl={project.githubUrl}
                                        projectUrl={project.projectUrl}
                                        date={project.date}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}