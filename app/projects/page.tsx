"use client";

import Link from "next/link";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        title: "ClaimLens",
        description: "Built the core RAG and reasoning pipeline for an insurance policy analysis system.",
        details: [
            "Hybrid retrieval (Dense + BM25 + Cross-Encoder) with structured reasoning.",
            "Performance metrics: Recall@20: 0.93 | MRR: 0.89"
        ],
        techStack: ["LangChain", "FAISS", "RAG", "LLM"],
        githubUrl: "https://github.com/kyunbhaii/ClaimLens-ET-Hackathon",
        projectUrl: "/projects/claimlens",
        date: "Jan 2026 – Mar 2026",
        category: "AI/RAG"
    },
    {
        title: "Insurance-Aware RAG",
        description: "Modular RAG pipeline with deterministic clause parsing and hybrid retrieval.",
        details: [
            "Configured deterministic clause parsing for accurate retrieval.",
            "Implemented hybrid dense and sparse search architecture."
        ],
        techStack: ["FAISS", "BM25", "Cross-Encoder", "RAG"],
        githubUrl: "https://github.com/kyunbhaii/Insurance-Aware-RAG",
        date: "Jan 2026 – Feb 2026",
        category: "AI/RAG"
    },
    {
        title: "GPT From Scratch",
        description: "Decoder-only Transformer built from scratch in PyTorch.",
        details: [
            "Implemented multi-head self-attention and positional encoding.",
            "Trained on custom text dataset for next-token prediction."
        ],
        techStack: ["PyTorch", "Transformers", "NLP"],
        githubUrl: "https://github.com/kyunbhaii/GPT-from-Scratch",
        date: "Oct 2025 – Nov 2025",
        category: "Architecture"
    },
    {
        title: "Footfall Counting System",
        description: "Real-time detection and tracking using YOLO and BoT-SORT.",
        details: [
            "Integrated YOLO object detection with a high frame-rate.",
            "Applied BoT-SORT algorithm for consistent multi-object tracking."
        ],
        techStack: ["YOLO", "OpenCV", "Tracking"],
        githubUrl: "https://github.com/kyunbhaii/FootFall-Counting-YOLOv-BoT-SORT",
        date: "May 2025 – Jul 2025",
        category: "Vision"
    },
    {
        title: "Hand Glove Detection",
        description: "A custom YOLOv8-based model for detecting and classifying gloved vs bare hands in images.",
        details: [
            "Synthesized and preprocessed a custom classification dataset.",
            "Trained and evaluated a lightweight YOLOv8 nano model."
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