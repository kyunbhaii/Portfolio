import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Vikramaditya Mishra",
  description:
    "Project archive covering RAG systems, model experiments, retrieval engineering, and applied AI implementations by Vikramaditya Mishra.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
