import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClaimLens | Vikramaditya Mishra",
  description:
    "ClaimLens case study: a structured insurance RAG system with deterministic clause parsing, reranking, validation, and grounded reasoning.",
};

export default function ClaimLensLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
