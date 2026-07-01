import type { Resume } from './resume.types'

export const resume: Resume = {
  basics: {
    name: 'Suchakra Kumar Gattu',
    initials: 'SG',
    title: 'AI Engineer',
    summary:
      'AI Engineer with hands-on experience in building scalable LLM systems, fine-tuning pipelines, and MLOps workflows. Skilled in model optimization, deployment, and monitoring, with a focus on delivering efficient and production-ready AI solutions.',
    location: 'Hyderabad, Telangana',
    email: 'suchakrakumargattu@gmail.com',
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      leetcode: 'https://leetcode.com',
    },
  },

  about: {
    headline: "Hi, I'm Suchakra — an AI Engineer building production-grade LLM systems.",
    paragraphs: [
      "I'm an AI Engineer at CloudAngles, where I design and build the infrastructure that takes large language models from a research idea to a reliable, production-ready system. My day-to-day work sits at the intersection of machine learning and systems engineering: fine-tuning frameworks, MLOps pipelines, model optimization, and the observability that keeps it all running.",
      "Concretely, I've architected a scalable LLM fine-tuning platform covering staging, a model hub, and deployment, and built a multi-technique fine-tuning framework supporting LoRA, QLoRA, SFT, and full fine-tuning. I design end-to-end MLOps pipelines with automated data management, versioning, and model tracking, and I work on model optimization — quantization and cross-runtime conversion across llama.cpp, ONNX, and TensorRT — to get models running efficiently at the edge. On the evaluation side, I build context management and hallucination-detection systems for RAG and agentic workflows, and I keep it all observable with a Prometheus and Grafana monitoring stack.",
      "Before this role, I worked as a GenAI Developer Intern building customized AI agents with LangGraph, integrating Roboflow for dynamic image classification, and developing reusable app-design components that automate how chatbots and agents get built. That, combined with a full-stack background (React, Node.js, Flask, FastAPI, Django) and a Computer Science degree specialized in AI & ML, is what lets me take an LLM system from a notebook experiment all the way to a deployed, monitored product.",
      "I care about building AI systems that are not just clever, but dependable — efficient under load, observable when something goes wrong, and genuinely useful to the people who rely on them.",
    ],
    highlights: [
      'LLM Fine-tuning (LoRA/QLoRA/SFT)',
      'MLOps & Infrastructure',
      'Model Optimization & Edge Deployment',
      'RAG & Agentic Systems',
      'Full-Stack Development',
    ],
  },

  skills: [
    { category: 'Programming Languages', items: ['C', 'Python', 'Java', 'JavaScript'] },
    {
      category: 'Web Development',
      items: [
        'HTML',
        'CSS',
        'React',
        'Flask',
        'Node.js',
        'Express.js',
        'Handlebars',
        'Jinja',
        'FastAPI',
        'Django',
      ],
    },
    { category: 'Databases', items: ['SQL', 'MongoDB'] },
    { category: 'Tools', items: ['Numpy', 'Pandas', 'TensorFlow', 'PyTorch', 'Docker'] },
  ],

  experience: [
    {
      id: 'cloudangles-swe-trainee',
      role: 'Software Engineer Trainee',
      company: 'CloudAngles, Hyderabad',
      start: 'Aug 2025',
      end: 'Present',
      bullets: [
        'Architected scalable infrastructure for an LLM fine-tuning platform (staging, model hub, deployment), improving system efficiency and reducing dependencies',
        'Built a multi-technique fine-tuning framework supporting LoRA, QLoRA, SFT, and full fine-tuning for flexible model optimization',
        'Designed end-to-end MLOps pipelines with automated data management, versioning, and model tracking (FTI pipeline)',
        'Developed model optimization pipelines including quantization and cross-runtime conversion (llama.cpp, ONNX, TensorRT) for efficient edge deployment',
        'Implemented evaluation and context management systems for RAG and agentic workflows, including hallucination detection and relevance scoring',
        'Integrated monitoring stack using Prometheus, Grafana, cAdvisor, and Node Exporter for real-time system observability',
      ],
    },
    {
      id: 'cloudangles-genai-intern',
      role: 'GenAI Developer Intern',
      company: 'CloudAngles, Hyderabad',
      start: 'Mar 2025',
      end: 'Jul 2025',
      bullets: [
        'Developed the system monitoring management system for the internal products',
        'Integrated customized models with Roboflow for dynamic image classification',
        'Developed customized AI agents using LangGraph, which leverages the customer experience',
        'Developed the customized app-design components which leverage the automation of building customized chatbots and agents',
      ],
    },
    {
      id: 'prathibha-sde-intern',
      role: 'SDE Intern',
      company: 'Prathibha Innovations, Hyderabad (Remote)',
      start: 'Dec 2024',
      end: 'Jan 2025',
      bullets: [
        'Developed the custom user management system using Express',
        'Configured Prisma ORM for better data management',
      ],
    },
  ],

  projects: [
    {
      id: 'llmops-platform',
      title: 'LLMOps Platform',
      description:
        'Currently leading the architecture of a scalable LLM fine-tuning and deployment platform at CloudAngles, covering staging, model hub, and deployment infrastructure.',
      bullets: [
        'Multi-technique fine-tuning framework supporting LoRA, QLoRA, SFT, and full fine-tuning',
        'End-to-end MLOps pipelines with automated data management, versioning, and model tracking (FTI pipeline)',
        'Model optimization via quantization and cross-runtime conversion (llama.cpp, ONNX, TensorRT) for edge deployment',
        'Full observability stack with Prometheus, Grafana, cAdvisor, and Node Exporter',
      ],
      banner: '/llmops-platform-lead-banner.jpg',
      tags: ['LLM', 'MLOps', 'Fine-tuning', 'Docker'],
      sourceType: 'led-at-company',
    },
    {
      id: 'voice-agents-platform',
      title: 'Voice Agents Platform',
      description:
        'Leading development of a customer-facing voice AI agents platform at CloudAngles, built around LangGraph and reusable app-design components.',
      bullets: [
        'Customized AI agents built with LangGraph to improve customer experience',
        'Dynamic image classification via Roboflow integration',
        'Reusable app-design components automating the build of customized chatbots and agents',
      ],
      banner: '/VoiceAgents-Platform-Banner.jpg',
      tags: ['LangGraph', 'Agents', 'Roboflow'],
      sourceType: 'led-at-company',
    },
    {
      id: 'employee-attrition-predictor',
      title: 'Employee Attrition Predictor',
      description:
        'A web application for real-time employee attrition predictions, providing actionable insights for HR management.',
      bullets: [
        'Strategic feature selection and engineering to improve prediction accuracy',
        'Predictive model built with advanced machine learning algorithms',
        'Deployed within the Flask framework',
      ],
      banner: '/Employee-Attrition-Predictor.jpg',
      tags: ['Flask', 'Machine Learning', 'HR Analytics'],
      sourceType: 'resume',
    },
    {
      id: 'e-navigation',
      title: 'E-Navigation',
      description:
        'A dynamic Android navigation application built on the MERN stack, focused on efficient, user-friendly routing.',
      bullets: [
        'Built with MongoDB, Express, React Native, and Node.js',
        "Implemented Dijkstra's algorithm for effective and efficient navigation",
        'User-friendly interface focused on interaction and experience',
      ],
      banner: '/E-Navigation-banner.jpg',
      tags: ['MERN', 'React Native', 'Algorithms'],
      sourceType: 'resume',
    },
    {
      id: 'in-house-llm-application',
      title: 'In-House LLM Application',
      description:
        'An in-house AI application using the DistilBART transformer model for efficient, fine-tuned text summarization.',
      bullets: [
        'Fine-tuned DistilBART on diverse datasets to improve accuracy and versatility',
        'Robust automatic text summarization solution for productivity and information management',
      ],
      tags: ['Transformers', 'NLP', 'Summarization'],
      sourceType: 'resume',
    },
  ],

  education: [
    {
      institution: 'Keshav Memorial Engineering College, Osmania University, Hyderabad',
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      specialization: 'AI & ML',
      years: '2021 - 2025',
      cgpa: '8.14',
      coursework: [
        'Machine Learning',
        'Advanced Machine Learning Algorithms',
        'Deep Learning Networks',
        'Data Mining',
        'Information Retrieval',
        'Image Processing',
        'Data Structures and Algorithms',
        'Advanced Data Structures',
        'Operating Systems',
        'Computer Networks',
        'Databases',
      ],
    },
  ],

  achievements: [
    {
      id: 'gold-medal-slste',
      title: 'Gold Medal — State Level Science Talent Search Examination (SLSTE)',
      description:
        'Achieved a gold medal in the State Level Science Talent Search Examination, reflecting a long-standing passion for science.',
    },
  ],
}
