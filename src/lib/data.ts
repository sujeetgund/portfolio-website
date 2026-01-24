import { Github, Linkedin, Mail } from "lucide-react";

export const profileData = {
  name: "Sujeet Gund",
  title:
    "AI Engineering Student specializing in Machine Learning, LLMs, and intelligent system development.",
  location: "Bhopal, Madhya Pradesh, IN",
  resumeUrl: "/resume",
  image: {
    src: "/Sujeet Gund.jpg",
    hint: "Sujeet Gund",
  },
  contacts: [
    {
      label: "Email",
      value: "mailto:sujeetgund@gmail.com",
      icon: Mail,
    },
    //  {
    //   label: 'Phone',
    //   value: 'tel:+919999999999',
    //   icon: Phone,
    // },
    // {
    //   label: "Website",
    //   value: "https://sujeetgund.in",
    //   icon: GlobeIcon,
    // },
    {
      label: "LinkedIn",
      value: "https://linkedin.com/in/sujeetgund",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "https://github.com/sujeetgund",
      icon: Github,
    },
  ],
};

export const aboutData = {
  summary:
    "I'm an AI Engineering student at VIT Bhopal, specializing in Machine Learning, Deep Learning, and Generative AI.  \nI build end-to-end AI systems — from data preprocessing and model development to scalable deployment using modern tools like FastAPI, LangChain, and cloud platforms. \n\nMy work focuses on practical, real-world problem solving, with hands-on experience in LLMs, agentic AI, and production-ready ML pipelines. I enjoy creating intelligent, efficient systems that deliver measurable impact.",
};

export const experienceData = [
  {
    company: "The Eureka Club, VIT Bhopal University",
    location: "Bhopal, India",
    role: "Technical Club Member",
    period: "Jul 2024 - Feb 2025",
    description:
      "Collaborated with fellow members to develop innovative project ideas and solutions. Improved problem-solving and teamwork skills through active participation in club activities. Contributed to organizing events that fostered peer learning and networking within the university's tech community.",
  },
];

export const projectsData = [
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
    tech: ["FastAPI", "LangChain", "Pydantic", "FAISS", "Gemini API", "Docker"],
    github: "https://github.com/sujeetgund/fastapi-rag-service",
    live: "https://hackrx-rag-app.onrender.com/docs",
  },
  {
    title: "PhishDetector - Phishing Website Detection System",
    slug: "phishdetector",
    description:
      "An end-to-end ML system that detects phishing websites with 97.11% accuracy, protecting users from fraudulent sites through real-time API inference.",
    tech: ["FastAPI", "scikit-learn", "pandas", "Docker"],
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
      "SQL",
      "Machine Learning",
      "NLP",
      "Generative AI (LLMs)",
      "Agentic AI",
    ],
  },
  {
    category: "Frameworks & Tools",
    skills: [
      "PyTorch",
      "TensorFlow",
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
      "Version Control",
    ],
  },
];

export const certificationsData = [
  {
    name: "Complete Data Science, Machine Learning, DL, NLP Bootcamp",
    issuer: "Udemy",
    year: "Dec 25",
    url: "https://www.udemy.com/certificate/UC-e84ea371-05b8-45d4-92fc-4853e8f8d642/",
  },
  {
    name: "Applied Machine Learning in Python",
    issuer: "University of Michigan",
    year: "Dec 24",
    url: "https://coursera.org/verify/RSR0JIUKTTW4",
  },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    year: "Jul 23",
    url: "https://www.coursera.org/verify/M98N3YQCSD2U",
  },
  {
    name: "AWS Cloud Essentials",
    issuer: "Amazon Web Services (AWS)",
    year: "Jun 23",
    url: "https://www.credly.com/badges/430abe70-f242-4db2-b47a-42542fbc0335/public_url",
  },
];

export const educationData = [
  {
    institution: "VIT Bhopal University",
    degree: "Integrated M.Tech in Artificial Intelligence",
    period: "2023 - 2028",
    details: "CGPA: 9.29 (as of Dec 2025)",
  },
];

export const cardNavData = {
  logo: "/logo.svg",
  logoAlt: "Sujeet Gund",
  items: [
    {
      label: "Projects",
      bgColor: "#1a1a2e",
      textColor: "#ffffff",
      links: [
        {
          label: "IPDR Graph Engine",
          href: "/projects/ipdr-graph-engine",
          ariaLabel: "View IPDR Graph Engine project",
        },
        {
          label: "FastAPI RAG Service",
          href: "/projects/fastapi-rag-service",
          ariaLabel: "View FastAPI RAG Service project",
        },
        {
          label: "PhishDetector",
          href: "/projects/phishdetector",
          ariaLabel: "View PhishDetector project",
        },
      ],
    },
    {
      label: "Resources",
      bgColor: "#16213e",
      textColor: "#ffffff",
      links: [
        { label: "Skills", href: "#skills", ariaLabel: "View skills section" },
        {
          label: "Certifications",
          href: "/certifications",
          ariaLabel: "View certifications",
        },
        { label: "Resume", href: "/resume", ariaLabel: "Download resume" },
      ],
    },
    {
      label: "Connect",
      bgColor: "#0f172a",
      textColor: "#ffffff",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/sujeetgund",
          ariaLabel: "Visit GitHub profile",
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/sujeetgund",
          ariaLabel: "Visit LinkedIn profile",
        },
        {
          label: "Email",
          href: "mailto:sujeetgund@gmail.com",
          ariaLabel: "Send email",
        },
      ],
    },
  ],
};
