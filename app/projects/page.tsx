"use client";

import { useState } from "react";
import BackButton from "../components/BackButton";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects, projectCategories, projects } from "../data/projects";

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState<(typeof projectCategories)[number]>("All");
    const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState<number | null>(null);

    const filteredProjects = projects.filter(project => 
        activeFilter === "All" || project.category === activeFilter
    );
    const nonFeaturedProjects = filteredProjects.filter((project) => !project.featured);

    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 py-12 relative overflow-hidden soft-grid">
            <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,var(--page-glow),transparent_58%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto fade-up">

                {/* ================= Header ================= */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center mb-10">
                    <div className="justify-self-start">
                        <BackButton />
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-center">Projects</h1>

                    <div aria-hidden="true" className="justify-self-end w-[4.5rem]"></div>
                </div>

                <section className="featured-panel rounded-3xl p-6 sm:p-8 mb-12 relative overflow-hidden">
                    <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,var(--page-glow),transparent_58%)] pointer-events-none" />
                    <div className="relative z-10 max-w-3xl">
                        <p className="section-kicker projects-kicker mb-4">Project Archive</p>
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight theme-copy-strong mb-4">
                            Generative AI systems, model experiments, and applied AI projects built with real implementation depth.
                        </h2>
                        <p className="theme-copy leading-relaxed text-sm sm:text-base max-w-2xl">
                            This page brings together the projects that best reflect how I build with GenAI, explore LLM workflows, work on open-source AI ideas, and experiment across model architecture, retrieval, and computer vision.
                        </p>
                    </div>
                </section>

                {/* ================= Filter Tags ================= */}
                <div className="soft-panel rounded-2xl p-4 sm:p-5 mb-12">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm font-medium theme-copy-strong">Browse by category</p>
                            <p className="text-xs theme-copy mt-1">Switch between themes without losing the portfolio narrative.</p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {projectCategories.map((category, idx) => {
                                const distanceFromHovered =
                                    hoveredCategoryIndex === null ? null : Math.abs(hoveredCategoryIndex - idx);
                                const scaleClass =
                                    distanceFromHovered === 0
                                        ? "scale-[1.06]"
                                        : distanceFromHovered === 1
                                            ? "scale-[1.03]"
                                            : "scale-100";
                                const isActive = activeFilter === category;

                                return (
                                    <button
                                        key={category}
                                        onClick={() => setActiveFilter(category)}
                                        onMouseEnter={() => setHoveredCategoryIndex(idx)}
                                        onMouseLeave={() => setHoveredCategoryIndex(null)}
                                        className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-250 ease-out border ${
                                            isActive
                                                ? "theme-filter-active"
                                                : "theme-filter-idle"
                                        } ${scaleClass} focus-visible:outline-none focus-visible:border-[color:rgb(var(--accent-rgb)/0.5)] focus-visible:ring-2 focus-visible:ring-[color:rgb(var(--accent-rgb)/0.15)]`}
                                    >
                                        {category}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* ================= Projects Grid ================= */}
                <div className="w-full">
                    {activeFilter === "All" ? (
                        <>
                            {/* Featured Projects Section */}
                            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 mt-8 fade-up" style={{ animationDelay: '0ms' }}>
                                <div>
                                    <p className="section-kicker projects-kicker mb-2">Highlighted Work</p>
                                    <h2 className="text-2xl font-bold tracking-tight theme-copy-strong">
                                        Featured Projects
                                    </h2>
                                </div>
                                <p className="text-sm theme-copy max-w-xl">
                                    The most representative work for structured retrieval, system design, and end-to-end AI engineering.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                                {featuredProjects.map((project, idx) => (
                                    <div key={project.title} style={{ animationDelay: `${(idx + 1) * 100}ms` }} className="animate-[fadeUp_0.4s_ease-out_both] h-full flex">
                                        <ProjectCard
                                            title={project.title}
                                            description={project.description}
                                            details={project.details}
                                            impact={project.impact}
                                            techStack={project.techStack}
                                            githubUrl={project.githubUrl}
                                            projectUrl={project.projectUrl}
                                            featuredText="Featured"
                                            date={project.date}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Other Projects Section */}
                            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 mt-16 fade-up" style={{ animationDelay: '300ms' }}>
                                <div>
                                    <p className="section-kicker projects-kicker mb-2">Broader Exploration</p>
                                    <h2 className="text-2xl font-bold tracking-tight theme-copy-strong">
                                        Other Projects
                                    </h2>
                                </div>
                                <p className="text-sm theme-copy max-w-xl">
                                    Additional projects across model architecture, computer vision, and applied ML experimentation.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                                {nonFeaturedProjects.map((project, idx) => (
                                    <div key={project.title} style={{ animationDelay: `${(idx + 4) * 100}ms` }} className="animate-[fadeUp_0.4s_ease-out_both] h-full flex">
                                        <ProjectCard
                                            title={project.title}
                                            description={project.description}
                                            details={project.details}
                                            impact={project.impact}
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
                        <>
                            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 mt-8">
                                <div>
                                    <p className="section-kicker projects-kicker mb-2">Filtered View</p>
                                    <h2 className="text-2xl font-bold tracking-tight theme-copy-strong">
                                        {activeFilter} Projects
                                    </h2>
                                </div>
                                <p className="text-sm theme-copy max-w-xl">
                                    A focused view of projects in the selected category.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mt-8">
                                {filteredProjects.map((project, idx) => (
                                    <div key={project.title} style={{ animationDelay: `${idx * 100}ms` }} className="animate-[fadeUp_0.4s_ease-out_both] h-full flex">
                                        <ProjectCard
                                            title={project.title}
                                            description={project.description}
                                            details={project.details}
                                            impact={project.impact}
                                            techStack={project.techStack}
                                            githubUrl={project.githubUrl}
                                            projectUrl={project.projectUrl}
                                            date={project.date}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}
