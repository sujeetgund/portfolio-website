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
    "Final-year Integrated M.Tech in AI at VIT Bhopal, currently building production AI systems at Divam Technologies.",
    "I specialize in agentic architectures — LangGraph multi-agent workflows with HITL checkpoints, hybrid RAG with pgvector, and FastAPI backends on Google Cloud Run. The kind of systems that handle real workloads, not just demos.",
    "Outside work, I ship ambitious side projects: an email processing SaaS, an anonymous geo-social platform, and tooling that pushes LLM orchestration further than most tutorials go.",
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
    location: "Remote",
    roles: [
      {
        title: "GenAI Developer Intern",
        startDate: "2026-04-01",
        endDate: null,
        description:
          "Led GenAI development across real-time voice AI, multi-agent graph workflows, and enterprise RAG systems from concept to production AWS deployment.",
        bulletPoints: [
          "Architected multi-agent state graphs using LangGraph to automate complex decision workflows in [Publie.ai](https://publie.ai) — implemented intent routing (**<200ms decision latency**) and HITL checkpoints yielding an **85%+ autonomous resolution rate**.",
          "Engineered real-time voice & chat agents integrating Meta Cloud API, LiveKit, and Plivo for [OmniAgent](https://omni-agent.publie.ai) — built resilient webhook pipelines with BullMQ queues guaranteeing **sub-second response latency** and **zero-drop event delivery under high concurrent (~1200rps)** traffic.",
          "Built context-aware lead capture agent for [Newton On Mars](https://newtononmars.com) using hybrid RAG over live site content — accelerated client technical discovery and automated PRD draft generation (**~70% reduction in onboarding time**).",
        ],
      },
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: "GroundedAI — Self-Correcting Multi-Source Agentic RAG",
    slug: "grounded-ai",
    description:
      "A self-evaluating agentic RAG platform powered by LangGraph, Reciprocal Rank Fusion (RRF) pgvector + tsvector hybrid search, and local zero-cost DeBERTa v3 NLI faithfulness scoring to eliminate hallucinations (94.2% grounding precision).",
    tech: [
      "LangGraph",
      "FastAPI",
      "pgvector",
      "Python",
      "Next.js 16",
      "Cross-Encoder DeBERTa",
      "Redis",
      "Tavily API",
    ],
    github: "https://github.com/sujeetgund/grounded-ai",
    live: "",
  },
  {
    title: "rzp Merchant — AI-Native E-Commerce & Agentic Commerce (MCP/ACP)",
    slug: "rzp-merchant",
    description:
      "An autonomous e-commerce platform implementing Model Context Protocol (MCP) and Agentic Commerce Protocol (ACP), allowing external AI agents to discover, basket-optimize, and execute transactions via Razorpay under 3-tier security mandates.",
    tech: [
      "Next.js 16",
      "LangGraph.js",
      "Gemini 2.5 Flash",
      "Razorpay SDK",
      "MCP Protocol",
      "Drizzle ORM",
      "pgvector",
      "Better Auth",
    ],
    github: "https://github.com/sujeetgund/rzp-merchant",
    live: "",
  },
  {
    title: "MailMind — Agentic Email Processing & HITL Orchestration Engine",
    slug: "mailmind",
    description:
      "An event-driven email processing agent built with LangGraph and Resend Inbound APIs. Features intent classification (96.5% accuracy), RAG auto-drafting, and PostgreSQL-persisted Human-in-the-Loop (HITL) approval checkpoints yielding an 88% operational time reduction.",
    tech: [
      "LangGraph",
      "FastAPI",
      "Resend Webhooks",
      "ChatGroq",
      "FAISS",
      "PostgreSQL",
      "Next.js 16",
      "Docker",
    ],
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
    category: "AI & ML",
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
    issuer: "Amazon Web Services (AWS)",
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
