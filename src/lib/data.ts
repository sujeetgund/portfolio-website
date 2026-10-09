import { VscGithub } from "react-icons/vsc";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import type {
  ProfileData,
  AboutData,
  Experience,
  Project,
  SkillCategory,
  Certification,
  Education,
  NavLink,
  SiteConfig,
} from "@/types/data.types";

export const profileData: ProfileData = {
  name: "Sujeet Gund",
  title: "Agentic AI Engineer · M.Tech AI @ VIT Bhopal",
  subtitle:
    "Building autonomous agentic systems, production RAG pipelines, and LLM-powered infrastructure.",
  location: "Barshi, Maharashtra, IN",
  resumeUrl: "/resume",
  image: {
    src: "/sujeetgund.jpg",
    hint: "Sujeet Gund",
  },
  contacts: [
    {
      label: "Email",
      value: "mailto:sujeetgund@gmail.com",
      icon: MdEmail,
    },
    {
      label: "LinkedIn",
      value: "https://linkedin.com/in/sujeetgund",
      icon: ImLinkedin,
    },
    {
      label: "GitHub",
      value: "https://github.com/sujeetgund",
      icon: VscGithub,
    },
  ],
};

export const aboutData: AboutData = {
  title: "Engineering intelligent systems from first principles to production",
  paragraphs: [
    "Final-year Integrated M.Tech in AI at VIT Bhopal, with hands-on experience building production AI systems at Divam Technologies.",
    "I specialize in agentic architectures: LangGraph multi-agent workflows with HITL checkpoints, hybrid RAG with pgvector, and FastAPI backends deployed on AWS and GCP. I focus on building systems that handle real workloads, not just demos.",
    "Outside work, I ship ambitious side projects: an agentic email processing SaaS, an AI-native commerce engine, and open-source tools that push LLM orchestration beyond tutorial limits.",
  ],
  stats: [
    { value: "15+", label: "Advanced AI Projects" },
    { value: "9.33", label: "University CGPA" },
    { value: "5+", label: "RAG Pipelines Built" },
  ],
};

export const experienceData: Experience[] = [
  {
    company: "Divam Technologies",
    companyUrl: "https://divamtech.com",
    logo: "/divamtech.png",
    location: "Remote",
    roles: [
      {
        title: "GenAI Developer Intern",
        startDate: "2026-04-15",
        endDate: "2026-09-30",
        description:
          "Led end-to-end GenAI development across real-time voice infrastructure, multi-agent systems, and enterprise RAG pipelines deployed on AWS.",
        bulletPoints: [
          "Built a hybrid RAG system combining vector search with file-based lookup to improve factual precision on structured queries and reduce **retrieval latency by 10x (50-100 ms to <5 ms)**.",
          "Engineered an async user context pipeline that processes resumes, PDFs, and portfolio links using rolling summarization to compress **~15k raw tokens** into structured **2-3k token** context windows.",
          "Developed a WhatsApp voice agent using Deepgram, OpenAI, Cartesia, and LiveKit WebRTC with sentence-level speech streaming and Redis caching, cutting **time-to-first-audio from ~4s to <700ms** and **lookup silence to <1s**.",
          "Configured production AWS infrastructure with **GitHub Actions CI/CD** across **isolated dev/prod environments**, integrating LinkedIn OAuth, Razorpay payments, and automated WhatsApp notifications.",
        ],
      },
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: "GroundedAI",
    tagline: "Self-Correcting Multi-Source Agentic RAG",
    slug: "grounded-ai",
    description:
      "Eliminates LLM hallucinations across complex multi-source documents by combining hybrid RRF vector search with local NLI faithfulness verification (**94.2% grounding precision**).",
    tech: [
      "LangGraph",
      "FastAPI",
      "pgvector",
      "NLI DeBERTa v3",
      "Next.js",
      "Redis",
    ],
    github: "https://github.com/sujeetgund/grounded-ai",
    live: "",
  },
  {
    title: "rzp Merchant",
    tagline: "Autonomous Agentic Commerce Engine (MCP/ACP)",
    slug: "rzp-merchant",
    description:
      "Implements MCP enabling external AI agents to autonomously discover products, optimize baskets, and execute Razorpay transactions under multi-tier security mandates.",
    tech: [
      "Next.js",
      "LangGraph",
      "Gemini 2.5",
      "Razorpay SDK",
      "MCP",
      "pgvector",
    ],
    github: "https://github.com/sujeetgund/rzp-merchant",
    live: "",
  },
  {
    title: "MailMind",
    tagline: "Agentic Email Processing & HITL Engine",
    slug: "mailmind",
    description:
      "Automates inbox operations with intent classification (**96.5% accuracy**), RAG draft generation, and PostgreSQL-persisted Human-in-the-Loop approval checkpoints (**88% operational time reduction**).",
    tech: ["LangGraph", "FastAPI", "Resend", "Groq", "FAISS", "PostgreSQL"],
    github: "https://github.com/sujeetgund/mailmind",
    live: "",
  },
];

export const skillsData: SkillCategory[] = [
  {
    category: "Languages & Databases",
    skills: ["Python", "TypeScript", "PostgreSQL", "MongoDB"],
  },
  {
    category: "AI/ML",
    skills: [
      "LangGraph",
      "LangChain",
      "RAG Systems",
      "pgvector",
      "PyTorch",
      "NLP",
      "Agentic AI",
    ],
  },
  {
    category: "Backend & Infrastructure",
    skills: [
      "FastAPI",
      "Next.js",
      "Docker",
      "BullMQ",
      "AWS",
      "GCP",
      "GitHub Actions",
    ],
  },
];

export const certificationsData: Certification[] = [
  {
    name: "Building RAG Agents with LLMs",
    issuer: "NVIDIA",
    date: "2026-10-08",
    url: "https://learn.nvidia.com/certificates?id=d8hqtgKqSeqK8lHoQ5Z0GA",
  },
  {
    name: "Complete Data Science, Machine Learning, DL, NLP Bootcamp",
    issuer: "Udemy",
    date: "2025-12-01",
    url: "https://www.udemy.com/certificate/UC-e84ea371-05b8-45d4-92fc-4853e8f8d642/",
  },
  {
    name: "Applied Machine Learning in Python",
    issuer: "University of Michigan",
    date: "2024-12-01",
    url: "https://coursera.org/verify/RSR0JIUKTTW4",
  },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    date: "2023-07-01",
    url: "https://www.coursera.org/verify/M98N3YQCSD2U",
  },
  {
    name: "AWS Cloud Essentials",
    issuer: "Amazon Web Services",
    date: "2023-06-01",
    url: "https://www.credly.com/badges/430abe70-f242-4db2-b47a-42542fbc0335/public_url",
  },
];

export const educationData: Education[] = [
  {
    institution: "VIT Bhopal University",
    degree: "Integrated M.Tech in Artificial Intelligence",
    startDate: "2023-09-01",
    endDate: "2028-03-01",
    details: "CGPA: 9.33",
  },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Education", href: "/#education" },
  { label: "Resume", href: "/resume" },
];

export const siteConfig: SiteConfig = {
  title: "Sujeet Gund | Agentic AI Engineer",
  description: profileData.subtitle,
  siteUrl: process.env.SITE_URL || "https://sujeetgund.in",
  creator: "Sujeet Gund",
  twitterHandle: "@Sujeet_Gund",
  defaultKeywords: [
    "Agentic AI",
    "AI Engineer",
    "Sujeet Gund",
    "GenAI",
    "RAG Pipelines",
    "LLM Infrastructure",
  ],
};
