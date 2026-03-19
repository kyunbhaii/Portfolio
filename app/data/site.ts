export const profile = {
  name: "Vikramaditya Mishra",
  email: "vikrmadityamishra@gmail.com",
  githubUrl: "https://github.com/kyunbhaii",
  xUrl: "https://x.com/kyunbhaii",
  linkedInUrl: "https://www.linkedin.com/in/scmvikram/",
  resumeUrl: "/resume.pdf",
} as const;

export const footerLinks = [
  { label: "X", href: profile.xUrl, external: true },
  { label: "LinkedIn", href: profile.linkedInUrl, external: true },
  { label: "GitHub", href: profile.githubUrl, external: true },
  { label: "Email", href: `mailto:${profile.email}`, external: true },
  { label: "Resume", href: profile.resumeUrl, external: true },
] as const;
