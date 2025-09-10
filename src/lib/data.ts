import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const profileImage = PlaceHolderImages.find(p => p.id === 'profile-headshot');

export const profileData = {
  name: 'Alex Doe',
  title: 'Senior AI Engineer',
  location: 'San Francisco, CA',
  image: {
    src: profileImage?.imageUrl || 'https://picsum.photos/seed/100/400/400',
    hint: profileImage?.imageHint || 'professional headshot',
  },
  contacts: [
    {
      label: 'Email',
      value: 'mailto:alex.doe@email.com',
      icon: Mail,
    },
    {
      label: 'LinkedIn',
      value: 'https://linkedin.com/in/alex-doe',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: 'https://github.com/alex-doe',
      icon: Github,
    },
    {
      label: 'Twitter',
      value: 'https://twitter.com/alex-doe',
      icon: Twitter,
    },
  ],
};

export const aboutData = {
  summary:
    "I'm a passionate AI Engineer with over 8 years of experience in designing, developing, and deploying machine learning models at scale. My expertise lies in natural language processing (NLP) and computer vision, and I am driven by a desire to build intelligent systems that solve real-world problems. I thrive in collaborative environments and am always eager to learn and apply new technologies.",
};

export const experienceData = [
  {
    company: 'InnovateAI Corp',
    location: 'San Francisco, CA',
    role: 'Senior AI Engineer',
    period: '2020 - Present',
    description:
      'Led the development of a state-of-the-art NLP engine for sentiment analysis, improving accuracy by 15%. Deployed and managed machine learning models in production using Kubernetes and MLOps principles, reducing inference time by 30%.',
  },
  {
    company: 'DataDriven Solutions',
    location: 'Boston, MA',
    role: 'Machine Learning Engineer',
    period: '2018 - 2020',
    description:
      'Developed a recommendation system for an e-commerce platform, resulting in a 20% increase in user engagement. Worked on computer vision projects for image classification and object detection.',
  },
  {
    company: 'TechStart Inc.',
    location: 'Austin, TX',
    role: 'Software Engineer',
    period: '2016 - 2018',
    description:
      'Contributed to the development of a large-scale data processing pipeline using Apache Spark. Gained foundational experience in software development best practices and cloud computing on AWS.',
  },
];

export const projectsData = [
  {
    title: 'Generative Art Platform',
    description:
      'A web platform that uses generative adversarial networks (GANs) to create unique pieces of art based on user text prompts. The system is built with Python, TensorFlow, and a React frontend.',
    tech: ['TensorFlow', 'Python', 'React', 'Node.js', 'Google Cloud'],
    github: 'https://github.com/alex-doe/generative-art',
    live: 'https://generative-art.alex-doe.com',
  },
  {
    title: 'Real-time Object Detection App',
    description:
      'A mobile application that performs real-time object detection using a lightweight deep learning model (MobileNetV2). Optimized for on-device performance on Android and iOS.',
    tech: ['PyTorch', 'CoreML', 'Swift', 'Kotlin', 'Firebase'],
    github: 'https://github.com/alex-doe/object-detection-app',
    live: '',
  },
  {
    title: 'AI-Powered Chatbot',
    description:
      'A customer service chatbot for an e-commerce website, built using retrieval-augmented generation (RAG) techniques to provide accurate and context-aware responses. Integrated with a vector database for efficient document retrieval.',
    tech: ['LangChain', 'Hugging Face Transformers', 'Pinecone', 'FastAPI', 'Next.js'],
    github: 'https://github.com/alex-doe/ai-chatbot',
    live: 'https://chatbot.alex-doe.com',
  },
];

export const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Go', 'JavaScript/TypeScript', 'SQL', 'C++'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'LangChain', 'React/Next.js', 'Node.js'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Docker', 'Kubernetes', 'Google Cloud (GCP)', 'AWS', 'MLflow', 'Git & GitHub'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Pinecone', 'Weaviate'],
  },
];

export const certificationsData = [
  {
    name: 'Google Cloud Professional Machine Learning Engineer',
    issuer: 'Google Cloud',
    year: '2022',
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI (Coursera)',
    year: '2021',
  },
];

export const educationData = [
  {
    institution: 'Stanford University',
    degree: 'M.S. in Computer Science, specialization in AI',
    period: '2014 - 2016',
  },
  {
    institution: 'University of Texas at Austin',
    degree: 'B.S. in Computer Science',
    period: '2010 - 2014',
  },
];
