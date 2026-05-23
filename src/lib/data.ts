import { VscGithub } from "react-icons/vsc";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";

export const profileData = {
  name: "Sujeet Gund",
  title:
    "AI Engineering Student specializing in Machine Learning, LLMs, and intelligent system development.",
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
  title: "Engineering Intelligent Systems for the Real World",
  paragraphs: [
    "I'm an AI Engineering student at VIT Bhopal, specializing in Machine Learning, Deep Learning, and Generative AI. My passion lies in transforming complex data into actionable intelligence.",
    "I build end-to-end AI systems — from rigorous data preprocessing and custom model architecture to scalable deployment using modern tools like FastAPI, LangChain, and cloud platforms.",
    "My work focuses on practical problem solving. With hands-on experience in LLMs, agentic workflows, and production-ready ML pipelines, I thrive on creating efficient systems that deliver measurable impact."
  ],
  stats: [
    { value: "15+", label: "Advanced AI Projects" },
    { value: "9.3", label: "University CGPA" },
    { value: "100%", label: "Commitment to Innovation" }
  ]
};

export const experienceData = [
  {
    company: "Divam Technologies",
    location: "",
    role: "GenAI Developer",
    period: "Apr 2026 - Present",
    description: "Developing and optimizing GenAI solutions, leveraging LLMs and agentic AI frameworks to build scalable applications.",
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
    category: "Programming & ML",
    skills: [
      "Python",
      "PostgreSQL",
      "Machine Learning",
      "NLP",
      "RAG Systems",
      "Agentic AI",
    ],
  },
  {
    category: "Frameworks & Tools",
    skills: [
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "LangGraph",
      "FastAPI",
      "Docker",
      "Git",
      "Google ADK",
      "Langchain",
      "MongoDB",
      "AWS",
      "GCP",
    ],
  },
  {
    category: "Development & Deployment",
    skills: [
      "Model Deployment",
      "API Integration",
      "Containerization",
      "GitHub Actions",
      "Version Control",
    ],
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
    details: "CGPA: 9.24 (as of Feb 2026)",
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
