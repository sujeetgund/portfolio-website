import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github, Linkedin, Twitter, Mail, Link as LinkIcon, Phone } from 'lucide-react';

const profileImage = PlaceHolderImages.find(p => p.id === 'profile-headshot');

export const profileData = {
  name: 'Sujeet Gund',
  title: 'AI Engineer specializing in building Machine Learning applications and intelligent systems.',
  location: 'Bhopal, Madhya Pradesh, IN',
  image: {
    src: profileImage?.imageUrl || 'https://picsum.photos/seed/100/400/400',
    hint: profileImage?.imageHint || 'professional headshot',
  },
  contacts: [
    {
      label: 'Email',
      value: 'mailto:sujeetgund@email.com',
      icon: Mail,
    },
     {
      label: 'Phone',
      value: 'tel:+919999999999',
      icon: Phone,
    },
    {
      label: 'Website',
      value: 'https://sujeetgund.com',
      icon: LinkIcon,
    },
    {
      label: 'LinkedIn',
      value: 'https://linkedin.com/in/sujeetgund',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: 'https://github.com/sujeetgund',
      icon: Github,
    },
  ],
};

export const aboutData = {
  summary:
    "I'm an AI Engineering student at VIT Bhopal University, specializing in Machine Learning, Deep Learning, and Generative AI. My projects demonstrate proficiency in end-to-end ML pipeline development, from data preprocessing to production deployment. I have hands-on experience with cutting-edge technologies like LLMs and Agentic AI, and I'm passionate about building intelligent systems that solve real-world problems using modern tools and frameworks.",
};

export const experienceData = [
  {
    company: 'The Eureka Club, VIT Bhopal University',
    location: 'Bhopal, India',
    role: 'Technical Club Member',
    period: 'Jul 24 - Feb 25',
    description:
      "Collaborated with fellow members to develop innovative project ideas and solutions. Improved problem-solving and teamwork skills through active participation in club activities. Contributed to organizing events that fostered peer learning and networking within the university's tech community.",
  },
];

export const projectsData = [
  {
    title: 'FastAPI RAG Service',
    period: 'HackRx 6.0, 2025',
    slug: 'fastapi-rag-service',
    description:
      'A high-performance document question-answering service built with FastAPI and LangChain, implementing Retrieval-Augmented Generation (RAG) for intelligent document analysis.',
    tech: [],
    github: 'https://github.com/sujeetgund/fastapi-rag-service',
    live: 'https://hackrx-rag-app.onrender.com/docs',
  },
  {
    title: 'IPDR Graph Engine - AI-Powered Investigative Platform',
    period: 'CIIS 2025 Hackathon',
    slug: 'ipdr-graph-engine',
    description:
      'A web-based investigative platform that transforms complex telecommunications IPDR data into actionable intelligence through ML-powered anomaly detection (94.16% accuracy) and interactive visualizations.',
    tech: [],
    github: 'https://github.com/sujeetgund/ipdr-graph-engine',
    live: 'https://ipdr-graph-engine.vercel.app/',
  },
  {
    title: 'PhishDetector - Phishing Website Detection System',
    period: 'Jun 25 - Jul 25',
    slug: 'phishdetector',
    description:
      'Developed a robust ML solution to detect phishing websites using URL and metadata features. Trained multiple models (Random Forest, SVC, KNN, Logistic Regression, Ridge) and identified the best-performing one (Random Forest: 97.11% accuracy). Deployed a real-time inference API using FastAPI and containerized it with Docker for scalable deployment.',
    tech: [],
    github: 'https://github.com/sujeetgund/phishdetector',
    live: '',
  },
  {
    title: 'LaptopWise - AI-powered Laptop Price Estimation',
    period: 'May 25 - Jun 25',
    description:
      'Developed a web application that estimates laptop prices using custom ML model and Gemini API. Built the ML model in Python, trained it on real-world hardware specifications, and deployed it via FastAPI. Containerized the solution with Docker and integrated it into a Next.js front end for production ready deployment.',
    tech: [],
    github: 'https://github.com/sujeetgund/laptopwise',
    live: 'https://laptopwise.sujeetgund.com',
  },
  {
    title: 'Subscription Tracker API - RESTful Management System',
    period: 'Apr 25 - May 25',
    slug: 'subscription-tracker',
    description:
      'Developed a scalable RESTful API with JWT authentication, comprehensive CRUD operations, and automated renewal notifications. Engineered robust backend infrastructure using Node.js with modular API design. Deployed containerized architecture using Docker, enabling seamless CI/CD pipeline integration and 99.9% uptime.',
    tech: [],
    github: 'https://github.com/sujeetgund/subscription-tracker',
    live: '',
  },
];

export const skillsData = [
  {
    category: 'Programming & ML',
    skills: ['Python', 'SQL', 'Machine Learning', 'NLP', 'Generative AI (LLMs)', 'Agentic AI'],
  },
  {
    category: 'Frameworks & Tools',
    skills: ['Next.js', 'Docker', 'Git', 'MongoDB', 'AWS', 'GCP', 'FastAPI'],
  },
  {
    category: 'Development & Deployment',
    skills: ['Model Deployment', 'API Integration', 'Containerization', 'Version Control'],
  },
];

export const certificationsData = [
  {
    name: 'Applied Machine Learning in Python',
    issuer: 'University of Michigan',
    year: 'Dec 24',
  },
  {
    name: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI',
    year: 'Jul 23',
  },
  {
    name: 'AWS Cloud Essentials',
    issuer: 'Amazon Web Services (AWS)',
    year: 'Jun 23',
  },
];

export const educationData = [
  {
    institution: 'VIT Bhopal University',
    degree: 'Integrated M.Tech in Artificial Intelligence',
    period: '2023 - 2028',
    details: 'CGPA: 9.26 | Relevant Coursework: Data Science, Machine Learning, Deep Learning, Statistics, Algorithms',
  },
];
