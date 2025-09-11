import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github, Linkedin, Twitter, Mail, Link as LinkIcon, Phone, ExternalLink } from 'lucide-react';

const profileImage = PlaceHolderImages.find(p => p.id === 'profile-headshot');

export const profileData = {
  name: 'Sujeet Gund',
  title: 'AI Engineer specializing in building Machine Learning applications and intelligent systems.',
  location: 'Bhopal, Madhya Pradesh, IN',
  resumeUrl: 'https://sujeetgund.github.io/sujeetgund/RESUME.pdf',
  image: {
    src: profileImage?.imageUrl || 'https://picsum.photos/seed/100/400/400',
    hint: profileImage?.imageHint || 'professional headshot',
  },
  contacts: [
    {
      label: 'Email',
      value: 'mailto:sujeetgund@gmail.com',
      icon: Mail,
    },
     {
      label: 'Phone',
      value: 'tel:+919999999999',
      icon: Phone,
    },
    {
      label: 'Website',
      value: 'https://sujeetgund.in',
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
    title: 'IPDR Graph Engine - AI-Powered Investigative Platform',
    period: 'CIIS Hackathon, Sept 2025',
    slug: 'ipdr-graph-engine',
    description:
      'A web-based investigative platform that transforms complex telecommunications IPDR data into actionable intelligence through ML-powered anomaly detection (94.16% accuracy) and interactive visualizations.',
    tech: [],
    github: 'https://github.com/sujeetgund/ipdr-graph-engine',
    live: 'https://ipdr-graph-engine.vercel.app/',
  },
  {
    title: 'FastAPI RAG Service',
    period: 'HackRx 6.0, Jul 2025',
    slug: 'fastapi-rag-service',
    description:
      'A high-performance document question-answering service built with FastAPI and LangChain, implementing Retrieval-Augmented Generation (RAG) for intelligent document analysis.',
    tech: [],
    github: 'https://github.com/sujeetgund/fastapi-rag-service',
    live: 'https://hackrx-rag-app.onrender.com/docs',
  },
  {
    title: 'PhishDetector - Phishing Website Detection System',
    period: 'Jun 25 - Jul 25',
    slug: 'phishdetector',
    description:
      'An end-to-end ML system that detects phishing websites with 97.11% accuracy, protecting users from fraudulent sites through real-time API inference.',
    tech: [],
    github: 'https://github.com/sujeetgund/phishdetector',
    live: '',
  },
  {
    title: 'LaptopWise - AI-powered Laptop Price Estimation',
    period: 'May 25 - Jun 25',
    description:
      'An intelligent web app that estimates laptop prices using a custom ML model and the Gemini API, all deployed in a scalable, containerized architecture.',
    tech: [],
    github: 'https://github.com/sujeetgund/laptopwise',
    live: 'https://laptopwise.sujeetgund.com',
  },
  {
    title: 'Subscription Tracker API - RESTful Management System',
    period: 'Apr 25 - May 25',
    slug: 'subscription-tracker',
    description:
      'A scalable RESTful API for managing user subscriptions, featuring JWT authentication, full CRUD operations, and automated renewal notifications in a containerized environment.',
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
    url: 'https://coursera.org/verify/RSR0JIUKTTW4'
  },
  {
    name: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI',
    year: 'Jul 23',
    url: 'https://www.coursera.org/verify/M98N3YQCSD2U'
  },
  {
    name: 'AWS Cloud Essentials',
    issuer: 'Amazon Web Services (AWS)',
    year: 'Jun 23',
    url: 'https://www.credly.com/badges/430abe70-f242-4db2-b47a-42542fbc0335/public_url'
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
