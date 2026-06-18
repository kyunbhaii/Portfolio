export const profile = {
  name: "Vikramaditya Mishra",
  email: "vikrmadityamishra@gmail.com",
  githubUrl: "https://github.com/kyunbhaii",
  xUrl: "https://x.com/kyunbhaii",
  linkedInUrl: "https://www.linkedin.com/in/scmvikram/",
  resumeUrl: "https://drive.google.com/file/d/1jv-lTSarV3YJL_6e-bdASMQMAG2hLD5D/view?usp=sharing",
  siteUrl: "https://vikramaditya-ai.vercel.app",
} as const;

export const footerLinks = [
  { label: "X", href: profile.xUrl, external: true },
  { label: "LinkedIn", href: profile.linkedInUrl, external: true },
  { label: "GitHub", href: profile.githubUrl, external: true },
  { label: "Email", href: `mailto:${profile.email}`, external: true },
  { label: "Resume", href: profile.resumeUrl, external: true },
] as const;

export type ExperienceEntry = {
  company: string;
  role: string;
  date: string;
  bullets: string[];
};

export type AchievementEntry = {
  title: string;
  bullets: string[];
  href?: string;
  linkLabel?: string;
};

export type EducationEntry = {
  institution: string;
  degree: string;
  date: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    company: "Neurapex AI",
    role: "AI Research Engineer",
    date: "Jun 2026 – Present",
    bullets: [
      "Working on research and development of multimodal AI systems for understanding and reasoning over 3D medical scans.",
      "Exploring medical vision-language architectures, representation learning techniques, and methods for integrating volumetric imaging data with large language models.",
      "Investigating approaches for building generalized models that can transfer across multiple medical imaging modalities rather than being restricted to a single scan type.",
    ],
  },
  {
    company: "VRCYN",
    role: "Data Science Intern",
    date: "Dec 2024 – May 2025",
    bullets: [
      "Assisted in preparing, cleaning, and structuring customer feedback datasets (chat logs and surveys) using Python, NLTK, spaCy, and SQL.",
      "Explored and implemented NLP techniques, including LSTM-based sentiment analysis, keyword extraction, and basic topic modeling to identify customer pain points and satisfaction drivers.",
      "Contributed to insights that supported data-driven discussions for improving product features, customer experience, and internal decision-making.",
    ],
  },
];

export const achievements: AchievementEntry[] = [
  {
    title: "IFERP | Conference",
    href: "https://github.com/kyunbhaii/Real-Time-Sign-Language-Detection-CNN-",
    linkLabel: "GitHub ↗",
    bullets: [
      'Paper accepted at IFERP International Conference on "Real-Time Sign Language Detection Using CNN and OpenCV" (2024).',
    ],
  },
  {
    title: "GDSC | AI/ML Team",
    bullets: [
      "Team member at Google Developer Student Clubs.",
      "Helped organize multiple technical and ML-focused events under GDSC.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    institution: "Indian Institute of Technology Patna",
    degree: "Master of Technology in AI and DSE",
    date: "Jan 2026 – Present",
  },
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    date: "Aug 2020 – Aug 2024",
  },
];

export const primarySkillGroups: SkillGroup[] = [
  { title: "AI Systems", skills: ["LangGraph", "MCP", "LangChain", "RAG", "Vector DBs"] },
  { title: "Machine Learning", skills: ["PyTorch", "TF", "Sklearn", "YOLO"] },
  { title: "Data & Analysis", skills: ["Pandas", "NumPy", "Matplotlib"] },
];

export const secondarySkillGroups: SkillGroup[] = [
  { title: "Backend", skills: ["FastAPI", "Docker", "Git"] },
  { title: "Languages", skills: ["Python", "SQL", "C++"] },
];
