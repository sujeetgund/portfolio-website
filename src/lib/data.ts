import { VscGithub } from "react-icons/vsc";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";

export const profileData = {
  name: "Sujeet Gund",
  title: "GenAI Developer · M.Tech AI @ VIT Bhopal",
  subtitle: "Building agentic systems, RAG pipelines, and LLM-powered products.",
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

export const aboutData = {
  title: "Engineering intelligent systems from first principles to production",
  paragraphs: [
    "Final-year Integrated M.Tech in AI at VIT Bhopal, currently building production AI systems at Divam Technologies.",
    "I specialize in agentic architectures — LangGraph multi-agent workflows with HITL checkpoints, hybrid RAG with pgvector, and FastAPI backends on Google Cloud Run. The kind of systems that handle real workloads, not just demos.",
    "Outside work, I ship ambitious side projects: an email processing SaaS, an anonymous geo-social platform, and tooling that pushes LLM orchestration further than most tutorials go."
  ],
  stats: [
    { value: "15+", label: "Advanced AI Projects" },
    { value: "9.31", label: "University CGPA" },
    { value: "5+", label: "RAG Pipelines Built" }
  ]
};

export const experienceData = [
  {
    company: "Divam Technologies",
    location: "",
    role: "GenAI Developer",
    period: "Apr 2026 - Present",
    description: "Sole architect of Publie.ai, an AI-powered LinkedIn automation platform — built the FastAPI backend, LinkedIn OAuth + publishing API integration, BullMQ scheduled posting, and deployed the full stack on AWS. Also delivered a production LangGraph chat agent with pgvector RAG for an enterprise client.",
  },
];

export const projectsData = [
  {
    title: "LinkedIn Post Generator Agent System",
    slug: "linkedin-post-generator-agent-system",
    description:
      "A modular, multi-agent system built with Google ADK to generate authentic LinkedIn posts through phased orchestration: intent capture, storytelling, hashtag generation, full-post drafting, and optional image creation.",
    tech: [
      "Python",
      "FastAPI",
      "Google ADK",
      "Gemini API",
      "Cloudinary",
      "Agentic AI",
    ],
    github: "https://github.com/sujeetgund/linkedin-post-generator-agent",
    live: "",
  },
  {
    title: "IPDR Graph Engine - AI-Powered Investigative Platform",
    slug: "ipdr-graph-engine",
    description:
      "A web-based investigative platform that transforms complex telecommunications IPDR data into actionable intelligence through ML-powered anomaly detection (94.16% accuracy) and interactive visualizations.",
    tech: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "CatBoost",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Google Cloud",
    ],
    github: "https://github.com/sujeetgund/ipdr-graph-engine",
    live: "https://ipdr-graph-engine.vercel.app/",
  },
  {
    title: "FastAPI RAG Service",
    slug: "fastapi-rag-service",
    description:
      "A high-performance document question-answering service built with FastAPI and LangChain, implementing Retrieval-Augmented Generation (RAG) for intelligent document analysis.",
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "Pydantic",
      "FAISS",
      "Gemini API",
      "Docker",
    ],
    github: "https://github.com/sujeetgund/fastapi-rag-service",
    live: "https://hackrx-rag-app.onrender.com/docs",
  },
  {
    title: "PhishDetector - Phishing Website Detection System",
    slug: "phishdetector",
    description:
      "An end-to-end ML system that detects phishing websites with 97.11% accuracy, protecting users from fraudulent sites through real-time API inference.",
    tech: ["Python", "FastAPI", "scikit-learn", "pandas", "Docker"],
    github: "https://github.com/sujeetgund/phishing-website-detection",
    live: "",
  },
  {
    title: "Subscription Tracker API - RESTful Management System",
    slug: "subscription-tracker",
    description:
      "A scalable RESTful API for managing user subscriptions, featuring JWT authentication, full CRUD operations, and automated renewal notifications in a containerized environment.",
    tech: [
      "JavaScript (ES6+)",
      "ExpressJS",
      "MongoDB",
      "Docker",
      "JWT",
      "Arcjet",
    ],
    github: "https://github.com/sujeetgund/subscription-tracker",
    live: "",
  },
];

export const skillsData = [
  {
    category: "Languages & Databases",
    skills: ["Python", "TypeScript", "PostgreSQL", "MongoDB"],
  },
  {
    category: "AI & ML",
    skills: ["LangGraph", "LangChain", "RAG Systems", "pgvector", "PyTorch", "NLP", "Agentic AI"],
  },
  {
    category: "Backend & Infrastructure",
    skills: ["FastAPI", "Next.js", "Docker", "BullMQ", "AWS", "GCP", "GitHub Actions"],
  },
];

export const certificationsData = [
  {
    name: "Complete Data Science, Machine Learning, DL, NLP Bootcamp",
    issuer: "Udemy",
    year: "Dec 2025",
    url: "https://www.udemy.com/certificate/UC-e84ea371-05b8-45d4-92fc-4853e8f8d642/",
  },
  {
    name: "Applied Machine Learning in Python",
    issuer: "University of Michigan",
    year: "Dec 2024",
    url: "https://coursera.org/verify/RSR0JIUKTTW4",
  },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    year: "Jul 2023",
    url: "https://www.coursera.org/verify/M98N3YQCSD2U",
  },
  {
    name: "AWS Cloud Essentials",
    issuer: "Amazon Web Services (AWS)",
    year: "Jun 2023",
    url: "https://www.credly.com/badges/430abe70-f242-4db2-b47a-42542fbc0335/public_url",
  },
];

export const educationData = [
  {
    institution: "VIT Bhopal University",
    degree: "Integrated M.Tech in Artificial Intelligence",
    period: "Sep 2023 - Mar 2028",
    details: "CGPA: 9.31",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Education", href: "/#education" },
  { label: "Resume", href: "/resume" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/sujeetgund" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sujeetgund" },
  { label: "Email", href: "mailto:sujeetgund@gmail.com" },
];
