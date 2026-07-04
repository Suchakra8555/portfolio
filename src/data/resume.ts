import type { Resume } from './resume.types'

export const resume: Resume = {
  basics: {
    name: 'Suchakra Kumar Gattu',
    initials: 'SG',
    title: 'Software Engineer',
    summary:
      'Software Engineer with experience in AI infrastructure, Voice AI platforms, LLM inference optimization, and MLOps. Skilled in designing production-scale telephony systems, optimizing LLM serving pipelines, and building scalable AI applications with a strong focus on low latency, scalability, and production deployment.',
    location: 'Hyderabad, Telangana',
    email: 'suchakrakumargattu@gmail.com',
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      leetcode: 'https://leetcode.com',
    },
  },

  about: {
    headline:
      "Hi, I'm Suchakra — a Software Engineer building production-scale Voice AI and LLM infrastructure.",
    paragraphs: [
      "I'm a Software Engineer at CloudAngles, where I build the infrastructure behind a production Voice AI platform — from SIP trunking and call routing to the LLM inference and Text-to-Speech pipeline that powers real-time conversations. My day-to-day work sits at the intersection of telephony, machine learning, and systems engineering: reducing latency, scaling inference, and keeping everything observable in production.",
      "Concretely, I've engineered the end-to-end telephony infrastructure for an enterprise Voice AI platform, integrating SIP trunking, Speech-to-Text, LLM inference, and Text-to-Speech into a single production-ready pipeline, and brought end-to-end voice conversation latency down to roughly 1.15 seconds through inference and pipeline optimization. I've also integrated Dynamo for self-hosted LLM inference and reworked the prefill and decode phases of the serving pipeline to improve throughput.",
      "Before that, as a Software Engineer Trainee, I architected a scalable LLM fine-tuning platform — staging, a model hub, and deployment — and built a multi-technique fine-tuning framework supporting LoRA, QLoRA, SFT, and full fine-tuning. I designed end-to-end MLOps pipelines with automated data management, versioning, and model tracking, worked on model optimization through quantization and cross-runtime conversion across llama.cpp, ONNX, and TensorRT, and built evaluation pipelines for RAG applications, all monitored through a Prometheus and Grafana stack.",
      "Earlier, as a GenAI Developer Intern, I built a centralized monitoring dashboard for internal AI products, integrated computer vision models with Roboflow, and built AI agents with LangGraph to automate enterprise workflows. That progression — from agent prototypes, to fine-tuning infrastructure, to production voice AI systems — is what lets me take an AI system from a research idea all the way to a deployed, low-latency, monitored product.",
      "I care about building AI systems that are not just clever, but dependable — low-latency under real traffic, observable when something goes wrong, and genuinely useful to the people who rely on them.",
    ],
    highlights: [
      'Voice AI & Telephony Infrastructure',
      'LLM Inference Optimization',
      'LLM Fine-tuning (LoRA/QLoRA/SFT)',
      'MLOps & Infrastructure',
      'RAG & Agentic Systems',
    ],
  },

  skills: [
    { category: 'Programming Languages', items: ['Python', 'Java', 'JavaScript', 'C'] },
    {
      category: 'AI / Machine Learning',
      items: [
        'PyTorch',
        'TensorFlow',
        'Transformers',
        'LoRA',
        'QLoRA',
        'SFT',
        'RAG',
        'LangChain',
        'LangGraph',
      ],
    },
    { category: 'Voice AI', items: ['SIP', 'Telephony', 'STT', 'TTS', 'Voice Agents'] },
    { category: 'Backend', items: ['FastAPI', 'Flask', 'Django', 'Node.js', 'Express.js'] },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
    {
      category: 'MLOps / Infrastructure',
      items: [
        'Docker',
        'MLflow',
        'Prometheus',
        'Grafana',
        'cAdvisor',
        'Node Exporter',
        'ONNX',
        'TensorRT',
        'llama.cpp',
        'Dynamo',
      ],
    },
  ],

  experience: [
    {
      id: 'cloudangles-swe',
      role: 'Software Engineer',
      company: 'CloudAngles, Hyderabad',
      logo: '/cloudangles.svg',
      logoBg: '#101114',
      start: 'May 2026',
      end: 'Present',
      bullets: [
        'Engineered the complete telephony infrastructure for an enterprise Voice AI platform, integrating SIP trunking, call routing, Speech-to-Text (STT), LLM inference, and Text-to-Speech (TTS) into a production-ready pipeline',
        'Designed and implemented scalable SIP workflows supporting reliable inbound and outbound AI voice calls',
        'Reduced end-to-end voice conversation latency to approximately 1.15 seconds through inference and pipeline optimization, significantly improving real-time conversational experience',
        'Integrated Dynamo for self-hosted LLM inference, improving execution efficiency through optimized inference scheduling',
        'Analyzed and optimized the LLM prefill and decode phases, refactoring the inference pipeline to improve throughput and reduce response latency',
        'Collaborated with cross-functional engineering teams to deploy scalable AI infrastructure and production-ready voice automation services',
      ],
    },
    {
      id: 'cloudangles-swe-trainee',
      role: 'Software Engineer Trainee',
      company: 'CloudAngles, Hyderabad',
      logo: '/cloudangles.svg',
      logoBg: '#101114',
      start: 'Aug 2025',
      end: 'Apr 2026',
      bullets: [
        'Architected scalable infrastructure for an LLM fine-tuning platform including staging environments, model hub, deployment pipelines, and experiment management',
        'Developed a fine-tuning framework supporting LoRA, QLoRA, Supervised Fine-Tuning (SFT), and Full Fine-Tuning',
        'Built automated MLOps pipelines for dataset management, experiment tracking, model versioning, and deployment workflows',
        'Developed model optimization pipelines including quantization and runtime conversion using llama.cpp, ONNX, and TensorRT',
        'Implemented evaluation pipelines for RAG applications including hallucination detection, answer relevance, and context scoring',
        'Integrated Prometheus, Grafana, cAdvisor, and Node Exporter to enable production monitoring and system observability',
      ],
    },
    {
      id: 'cloudangles-genai-intern',
      role: 'GenAI Developer Intern',
      company: 'CloudAngles, Hyderabad',
      logo: '/cloudangles.svg',
      logoBg: '#101114',
      start: 'Mar 2025',
      end: 'Jul 2025',
      bullets: [
        'Developed a centralized system monitoring dashboard for internal AI products',
        'Integrated customized computer vision models with Roboflow for dynamic image classification',
        'Built AI agents using LangGraph to automate enterprise workflows',
        'Developed reusable UI components for chatbot and AI agent creation platforms',
      ],
    },
    {
      id: 'prathibha-sde-intern',
      role: 'SDE Intern',
      company: 'Prathibha Innovations, Hyderabad (Remote)',
      logo: '/Default_company.jpg',
      start: 'Dec 2024',
      end: 'Jan 2025',
      bullets: [
        'Developed a custom user management system using Express.js',
        'Configured Prisma ORM for scalable and maintainable database operations',
      ],
    },
  ],

  projects: [
    {
      id: 'voice-agents-platform',
      title: 'Voice AI Platform',
      description:
        'Leading the telephony and inference infrastructure for an enterprise Voice AI platform at CloudAngles, from SIP trunking through Speech-to-Text, LLM inference, and Text-to-Speech.',
      bullets: [
        'Engineered the complete telephony pipeline: SIP trunking, call routing, STT, LLM inference, and TTS',
        'Reduced end-to-end voice conversation latency to approximately 1.15 seconds through inference and pipeline optimization',
        'Integrated Dynamo for self-hosted LLM inference with optimized inference scheduling',
        'Optimized the LLM prefill and decode phases to improve throughput and reduce response latency',
      ],
      banner: '/VoiceAgents-Platform-Banner.jpg',
      tags: ['Voice AI', 'SIP', 'Telephony', 'LLM Inference'],
      sourceType: 'led-at-company',
    },
    {
      id: 'llmops-platform',
      title: 'LLMOps Platform',
      description:
        'Architected the infrastructure for a scalable LLM fine-tuning and deployment platform at CloudAngles as a Software Engineer Trainee, covering staging, model hub, and deployment.',
      bullets: [
        'Multi-technique fine-tuning framework supporting LoRA, QLoRA, SFT, and full fine-tuning',
        'End-to-end MLOps pipelines with automated data management, versioning, and model tracking (FTI pipeline)',
        'Model optimization via quantization and cross-runtime conversion (llama.cpp, ONNX, TensorRT) for edge deployment',
        'Full observability stack with Prometheus, Grafana, cAdvisor, and Node Exporter',
      ],
      banner: '/llmops-platform-lead-banner.jpg',
      tags: ['LLM', 'MLOps', 'Fine-tuning', 'Docker'],
      sourceType: 'resume',
    },
    {
      id: 'employee-attrition-predictor',
      title: 'Employee Attrition Predictor',
      description:
        'A machine learning web application for predicting employee attrition, giving HR teams actionable retention insights.',
      bullets: [
        'Developed a machine learning web application for predicting employee attrition using Flask',
        'Applied feature engineering and feature selection techniques to improve prediction accuracy',
        'Built an end-to-end prediction pipeline providing HR teams with actionable employee retention insights',
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
      title: 'In-House LLM Summarization Application',
      description:
        'An enterprise text summarization application built on DistilBART, fine-tuned for automated document summarization.',
      bullets: [
        'Developed an enterprise text summarization application using DistilBART',
        'Fine-tuned transformer models on custom datasets for improved summarization quality',
        'Built an automated document summarization workflow for enterprise knowledge management',
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
      logo: '/KMEC.png',
      years: '2021 - 2025',
      cgpa: '8.14',
      coursework: [
        'Machine Learning',
        'Advanced Machine Learning',
        'Deep Learning',
        'Operating Systems',
        'Computer Networks',
        'Database Management Systems',
        'Data Structures and Algorithms',
        'Image Processing',
        'Information Retrieval',
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
