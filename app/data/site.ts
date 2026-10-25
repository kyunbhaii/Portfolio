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
    company: "Grant Thornton INDUS",
    role: "AI DevSecOps Engineer",
    date: "Jul 2026 – Present",
    bullets: [
      "Implemented a **multimodal AI triage pipeline** using **LangChain** and GPT-based models to process email bodies and image, PDF, and Word attachments, automate ServiceNow ticket creation and routing, and reduce estimated processing time from **15–20 minutes to 20–30 seconds per ticket** (~**98–99% reduction**).",
      "Built attachment-specific **image-analysis and document-extraction workflows**, combining email and attachment context with ServiceNow assignment-group knowledge to generate structured, ticket-ready JSON.",
      "Integrated **prompt-injection screening, sender-domain validation, and automated-email detection** into the triage workflow to strengthen security and improve routing reliability.",
      "Developed a **runbook assistant** using **Copilot Studio** and **SharePoint** to provide grounded answers from approved procedures through Microsoft Teams, with **Power Automate** synchronizing updated runbooks to the agent's knowledge repository.",
    ],
  },
  {
    company: "Neurapex AI",
    role: "AI Research Engineer",
    date: "Jun 2026 – Jul 2026",
    bullets: [
      "Built a Python pipeline for the **CT-RATE dataset**, automating NIfTI volume downloads, **Hounsfield Unit (HU) calibration**, three-window CT image generation (lung, soft tissue, bone), and VQA dataset preparation.",
      "Adapted **Google MedGemma 1.5 (4B)** for volumetric CT inference using custom slice selection, multi-window preprocessing, and batch inference; identified and corrected a preprocessing issue that could destroy diagnostic HU information.",
      "Investigated **M3D-LaMed and Hulu-Med 7B** for 3D medical vision-language tasks, examining volumetric preprocessing, visual tokenization, spatial pooling, and vision-language integration; implemented inference scripts and experimented with alternative input representations.",
      "Built a **radiology report evaluation framework** supporting **METEOR and BERTScore**, with per-volume scoring and JSON/CSV input support to evaluate generated reports against reference reports.",
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
  { title: "LLM / GenAI", skills: ["LLMs", "RAG", "AI Agents", "LangChain", "LangGraph", "MCP", "Copilot Studio"] },
  { title: "Machine Learning", skills: ["PyTorch", "TF", "Sklearn", "YOLO"] },
  { title: "Data & Analysis", skills: ["Pandas", "NumPy", "Matplotlib"] },
];

export const secondarySkillGroups: SkillGroup[] = [
  { title: "Backend", skills: ["FastAPI", "Docker", "Git"] },
  { title: "Languages", skills: ["Python", "SQL", "C++"] },
];
