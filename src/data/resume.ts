import type { Resume } from './resume.types'

export const resume: Resume = {
  basics: {
    name: 'Suchakra Kumar Gattu',
    initials: 'SG',
    title: 'Software Engineer',
    summary:
      'Software Engineer specializing in Speech AI, telephony-grade audio pipelines, and LLM inference optimization. Experienced in building and shipping production Speech-to-Text (STT) and Text-to-Speech (TTS) pipelines for real-time voice platforms, tuning streaming inference for low latency, and building evaluation frameworks for model quality and regression testing.',
    location: 'Hyderabad, Telangana',
    phone: '+91 8555059710',
    email: 'suchakrakumargattu@gmail.com',
    resumeUrl: '/resume',
    links: {
      github: 'https://github.com/suchakra8555',
      linkedin: 'https://www.linkedin.com/in/suchakra-kumar-gattu',
      leetcode: 'https://leetcode.com/u/Suchakra_Kumar/',
    },
  },

  about: {
    headline:
      "Hi, I'm Suchakra — a Software Engineer building Speech AI, telephony-grade audio pipelines, and low-latency LLM inference.",
    paragraphs: [
      "I'm a Software Engineer at CloudAngles, where I build the speech and inference infrastructure behind a production Voice AI platform — from SIP trunking and call routing through Speech-to-Text, LLM inference, and Text-to-Speech. My day-to-day work sits at the intersection of telephony audio, machine learning, and systems engineering: shaving latency off the streaming path, scaling inference, and keeping everything observable in production.",
      "Concretely, I've engineered the complete telephony-grade audio pipeline for an enterprise Voice AI platform, wiring SIP trunking, STT, LLM inference, and TTS into a single production-ready streaming system, and brought end-to-end voice conversation latency down to roughly 1.15 seconds through streaming inference and pipeline optimization across the whole stack. I've also integrated Dynamo for self-hosted LLM inference and reworked the prefill and decode phases of the serving pipeline to improve throughput under real-time voice load.",
      'Before that, as a Software Engineer Trainee, I architected a scalable LLM fine-tuning platform — staging, a model hub, and deployment — and built a multi-technique fine-tuning framework supporting LoRA, QLoRA, SFT, DPO, PEFT, and full fine-tuning, the same techniques I now apply to adapting speech and language models. I designed end-to-end MLOps pipelines with automated data management, versioning, and model tracking, worked on model optimization through quantization and cross-runtime conversion across llama.cpp, ONNX, and TensorRT, and built offline evaluation and regression-testing pipelines for RAG applications covering hallucination detection, answer relevance, and context scoring — all monitored through a Prometheus and Grafana stack.',
      'Earlier, as a GenAI Developer Intern, I built a centralized monitoring dashboard for internal AI products, integrated computer vision models with Roboflow, and built AI agents with LangGraph to automate enterprise workflows. That progression — from agent prototypes, to fine-tuning infrastructure, to production speech systems — is what lets me take an AI system from a research idea all the way to a deployed, low-latency, monitored product.',
      'I care about building AI systems that are not just clever, but dependable — low-latency under real traffic, measurable against a real evaluation harness, and genuinely useful to the people who rely on them.',
    ],
    highlights: [
      'Speech AI (STT & TTS)',
      'Telephony & SIP Infrastructure',
      'Streaming & LLM Inference Optimization',
      'Fine-tuning (LoRA/QLoRA/SFT/DPO)',
      'Model Evaluation & MLOps',
    ],
  },

  skills: [
    {
      category: 'Speech & Voice AI',
      items: [
        'STT/ASR',
        'TTS',
        'SIP',
        'Telephony',
        'Streaming Audio Inference',
        'Voice Agents',
        'Real-time Conversational Pipelines',
      ],
    },
    {
      category: 'AI / Machine Learning',
      items: [
        'PyTorch',
        'TensorFlow',
        'Transformers',
        'LoRA',
        'QLoRA',
        'SFT',
        'DPO',
        'PEFT',
        'RAG',
        'LangChain',
        'LangGraph',
      ],
    },
    {
      category: 'Model Optimization & Evaluation',
      items: [
        'ONNX',
        'TensorRT',
        'llama.cpp',
        'Quantization',
        'Inference Scheduling (Dynamo)',
        'Offline Evaluation Pipelines',
        'Hallucination Detection',
        'Answer Relevance & Context Scoring',
      ],
    },
    {
      category: 'Programming Languages',
      items: ['Python', 'Java', 'JavaScript', 'C', 'TypeScript'],
    },
    {
      category: 'Backend',
      items: [
        'FastAPI',
        'Flask',
        'Django',
        'Node.js',
        'Express.js',
        'SQLAlchemy',
        'Alembic',
        'Prisma',
      ],
    },
    {
      category: 'Frontend',
      items: ['React', 'TanStack Router', 'TanStack Query', 'React Router'],
    },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
    {
      category: 'MLOps / Infrastructure',
      items: ['Docker', 'MLflow', 'Prometheus', 'Grafana', 'cAdvisor', 'Node Exporter'],
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
        'Engineered the complete telephony-grade audio pipeline for an enterprise Voice AI platform, integrating SIP trunking, call routing, Speech-to-Text (STT), LLM inference, and Text-to-Speech (TTS) into a production-ready streaming system',
        'Designed and implemented scalable SIP workflows supporting reliable inbound and outbound AI voice calls, handling real-time telephony audio end to end',
        'Reduced end-to-end voice conversation latency to approximately 1.15 seconds through streaming inference and pipeline optimization across the STT/LLM/TTS stack, significantly improving real-time conversational quality',
        'Integrated Dynamo for self-hosted LLM inference, improving execution efficiency through optimized inference scheduling for low-latency streaming responses',
        'Analyzed and optimized the LLM prefill and decode phases, refactoring the inference pipeline to improve throughput and reduce response latency in a real-time voice context',
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
        'Developed a fine-tuning framework supporting LoRA, QLoRA, Supervised Fine-Tuning (SFT), Direct Preference Optimization (DPO), Parameter Efficient Fine-tuning (PEFT), and Full Fine-Tuning — directly applicable to fine-tuning and adapting speech and language models',
        'Built automated MLOps pipelines for dataset management, experiment tracking, model versioning, and deployment workflows',
        'Developed model optimization pipelines including quantization and runtime conversion using llama.cpp, ONNX, and TensorRT to improve inference speed for production deployment',
        'Implemented evaluation pipelines for RAG applications including hallucination detection, answer relevance, and context scoring — built offline evaluation and regression-testing methodology for model releases',
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
        'Leading the telephony-grade audio and inference infrastructure for an enterprise Voice AI platform at CloudAngles, from SIP trunking through Speech-to-Text, LLM inference, and Text-to-Speech.',
      bullets: [
        'Engineered the complete telephony-grade audio pipeline: SIP trunking, call routing, STT, LLM inference, and TTS as one streaming system',
        'Reduced end-to-end voice conversation latency to approximately 1.15 seconds through streaming inference and pipeline optimization across the STT/LLM/TTS stack',
        'Integrated Dynamo for self-hosted LLM inference with optimized inference scheduling for low-latency streaming responses',
        'Optimized the LLM prefill and decode phases to improve throughput and reduce response latency under real-time voice load',
      ],
      banner: '/VoiceAgents-Platform-Banner.jpg',
      tags: ['Speech AI', 'STT / TTS', 'SIP & Telephony', 'Streaming Inference'],
      sourceType: 'led-at-company',
    },
    {
      id: 'llmops-platform',
      title: 'LLMOps Platform',
      description:
        'Architected the infrastructure for a scalable LLM fine-tuning and deployment platform at CloudAngles as a Software Engineer Trainee, covering staging, model hub, and deployment.',
      bullets: [
        'Multi-technique fine-tuning framework supporting LoRA, QLoRA, SFT, DPO, PEFT, and full fine-tuning',
        'End-to-end MLOps pipelines with automated data management, versioning, and model tracking (FTI pipeline)',
        'Model optimization via quantization and cross-runtime conversion (llama.cpp, ONNX, TensorRT) for faster production inference',
        'Offline evaluation and regression-testing pipelines for RAG releases: hallucination detection, answer relevance, and context scoring',
        'Full observability stack with Prometheus, Grafana, cAdvisor, and Node Exporter',
      ],
      banner: '/llmops-platform-lead-banner.jpg',
      tags: ['LLM', 'MLOps', 'Fine-tuning', 'Evaluation'],
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
