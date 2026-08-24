import type { Resume } from './resume.types'

export const resume: Resume = {
  basics: {
    name: 'Suchakra Kumar Gattu',
    initials: 'SG',
    title: 'LLMOps & Agentic Voice AI Engineer',
    summary:
      'LLMOps & Agentic Voice AI Engineer specializing in production-grade LLM operations, agentic AI voice systems, and telephony-grade audio pipelines. Expert in end-to-end LLMOps — model versioning, fine-tuning orchestration, inference optimization, evaluation harnesses, and production monitoring. Proven track record building agentic voice systems that orchestrate multi-step LLM reasoning with real-time STT/TTS pipelines, tool calling, and autonomous workflow execution for enterprise conversational AI platforms.',
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
      "Hi, I'm Suchakra — an LLMOps & Agentic Voice AI Engineer building production LLM operations, agentic AI voice systems, and low-latency inference infrastructure.",
    paragraphs: [
      "I'm an LLMOps & Agentic Voice AI Engineer at CloudAngles, where I build and operate the LLM inference infrastructure and agentic voice systems behind a production Voice AI platform — from SIP trunking and call routing through multi-agent orchestration, Speech-to-Text, LLM inference, and Text-to-Speech. My work spans the full LLMOps lifecycle: fine-tuning, versioning, deployment, inference optimization, and production monitoring — all serving agentic conversational AI workloads with real-time voice constraints.",
      "Concretely, I've engineered the complete telephony-grade audio pipeline for an enterprise Voice AI platform, wiring SIP trunking, STT, agentic LLM orchestration, and TTS into a single production-ready streaming system. I architected the agentic layer — implementing multi-step reasoning with tool calling, function invocation, and autonomous workflow execution — and brought end-to-end voice conversation latency down to roughly 1.15 seconds through streaming inference and pipeline optimization across the whole stack. I've also integrated Dynamo for self-hosted LLM inference and reworked the prefill and decode phases of the serving pipeline to improve throughput under real-time voice load.",
      'Before that, as a Software Engineer Trainee, I architected a scalable LLM fine-tuning platform — staging, a model hub, and deployment — and built a multi-technique fine-tuning framework supporting LoRA, QLoRA, SFT, DPO, PEFT, and full fine-tuning, the same techniques I now apply to adapting speech and language models. I designed end-to-end MLOps pipelines with automated data management, versioning, and model tracking, worked on model optimization through quantization and cross-runtime conversion across llama.cpp, ONNX, and TensorRT, and built offline evaluation and regression-testing pipelines for RAG applications covering hallucination detection, answer relevance, and context scoring — all monitored through a Prometheus and Grafana stack.',
      'Earlier, as a GenAI Developer Intern, I built a centralized monitoring dashboard for internal AI products, integrated computer vision models with Roboflow, and built agentic AI systems with LangGraph — implementing multi-agent orchestration, tool calling, and autonomous workflow execution. That progression — from agentic AI prototypes, to LLMOps infrastructure, to production agentic voice systems — is what lets me take an AI system from a research idea all the way to a deployed, low-latency, monitored product.',
      'I care about building AI systems that are not just clever, but dependable — low-latency under real traffic, measurable against a real evaluation harness, and genuinely useful to the people who rely on them.',
    ],
    highlights: [
      'Agentic AI Voice Systems & Multi-Agent Orchestration',
      'LLMOps & Model Operations',
      'Telephony & SIP Infrastructure',
      'Streaming & LLM Inference Optimization',
      'Fine-tuning (LoRA/QLoRA/SFT/DPO)',
      'RAG, Vector Databases & Embeddings',
      'Production Evaluation, Monitoring & Guardrails',
    ],
  },

  skills: [
    {
      category: 'Agentic AI & Voice Systems',
      items: [
        'Agentic AI Architecture',
        'Multi-Agent Orchestration',
        'Tool Calling & Function Invocation',
        'Agent State & Memory Management',
        'Autonomous Workflow Execution',
        'Voice Agent Design',
        'STT/ASR',
        'TTS',
        'SIP & Telephony',
        'Real-time Conversational Pipelines',
        'LangGraph',
        'Structured Output & JSON Mode',
      ],
    },
    {
      category: 'LLMOps & Model Operations',
      items: [
        'LLM Inference Optimization',
        'Model Versioning & Registry',
        'Fine-tuning Orchestration',
        'Prompt Engineering & Management',
        'Inference Scheduling (Dynamo)',
        'Model A/B Testing & Rollbacks',
        'Token Optimization & Cost Management',
        'Guardrails & Safety Layers',
        'Vector Databases & Embeddings',
        'RAG (Retrieval-Augmented Generation)',
        'Production Monitoring & Observability',
        'Offline Evaluation & Regression Testing',
        'CI/CD for ML Pipelines',
        'Model Deployment & Serving',
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
        'Embeddings',
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
        'RAG Evaluation Pipelines',
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
      items: ['Docker', 'Kubernetes', 'MLflow', 'Prometheus', 'Grafana', 'cAdvisor', 'Node Exporter', 'CI/CD', 'Git'],
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
        'Engineered the complete telephony-grade audio pipeline for an enterprise Agentic Voice AI platform, integrating SIP trunking, call routing, STT, agentic LLM orchestration with tool calling, and TTS into a production-ready streaming system',
        'Designed and implemented scalable SIP workflows supporting reliable inbound and outbound AI voice calls, handling real-time telephony audio end to end',
        'Architected the agentic layer — implementing multi-step reasoning, function invocation, and autonomous workflow execution for voice agents that dynamically adapt to user intent in real time',
        'Reduced end-to-end voice conversation latency to approximately 1.15 seconds through streaming inference and pipeline optimization across the STT/LLM/TTS stack, significantly improving real-time conversational quality',
        'Integrated Dynamo for self-hosted LLM inference, improving execution efficiency through optimized inference scheduling for low-latency streaming responses',
        'Analyzed and optimized the LLM prefill and decode phases, refactoring the inference pipeline to improve throughput and reduce response latency in a real-time voice context',
        'Built production LLMOps practices: model versioning, inference monitoring, A/B testing frameworks, prompt template management, and rollback mechanisms for agentic voice system releases',
        'Designed RESTful APIs for LLM inference endpoints and integrated vector databases (embeddings, RAG) for knowledge-grounded agentic responses with guardrails and safety layers',
        'Collaborated with cross-functional engineering teams to deploy scalable AI infrastructure and production-ready voice automation services via CI/CD pipelines',
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
        'Architected scalable LLMOps infrastructure for an LLM fine-tuning platform including staging environments, model hub, version-controlled deployment pipelines, and experiment management',
        'Developed a fine-tuning framework supporting LoRA, QLoRA, Supervised Fine-Tuning (SFT), Direct Preference Optimization (DPO), Parameter Efficient Fine-tuning (PEFT), and Full Fine-Tuning — directly applicable to fine-tuning and adapting speech and language models',
        'Built end-to-end LLMOps pipelines: dataset management, experiment tracking, model versioning, registry, deployment workflows, and automated rollback mechanisms',
        'Developed model optimization pipelines including quantization and runtime conversion using llama.cpp, ONNX, and TensorRT to improve inference speed for production deployment',
        'Implemented offline evaluation and regression-testing pipelines for RAG applications including hallucination detection, answer relevance, and context scoring — building the evaluation harness for model release gates',
        'Integrated Prometheus, Grafana, cAdvisor, and Node Exporter to enable production monitoring, inference latency tracking, and system observability across the LLMOps stack',
        'Implemented vector database integrations and embedding pipelines for retrieval-augmented generation (RAG) knowledge grounding',
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
        'Built agentic AI systems using LangGraph implementing multi-agent orchestration, tool calling, and autonomous workflow execution for enterprise use cases',
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
      id: 'agentic-voice-ai-platform',
      title: 'Agentic Voice AI Platform',
      description:
        'Led the architecture and delivery of an enterprise-grade agentic voice AI system at CloudAngles — multi-agent orchestration, real-time STT/TTS, and autonomous workflow execution over telephony.',
      bullets: [
        'Engineered the complete telephony-grade audio pipeline with agentic LLM orchestration: SIP trunking, call routing, STT, multi-step reasoning with tool calling, and TTS as one streaming system',
        'Architected multi-agent orchestration layer — implementing function invocation, agent state management, and autonomous workflow execution for voice agents that dynamically adapt to user intent',
        'Reduced end-to-end voice conversation latency to approximately 1.15 seconds through streaming inference and pipeline optimization across the agentic STT/LLM/TTS stack',
        'Built production LLMOps for agentic systems: model versioning, inference monitoring, prompt management, and automated rollback mechanisms for voice agent releases',
        'Integrated Dynamo for self-hosted LLM inference with optimized scheduling for low-latency agentic streaming responses',
      ],
      banner: '/VoiceAgents-Platform-Banner.jpg',
      tags: ['Agentic AI', 'Voice Agents', 'Multi-Agent Orchestration', 'LLMOps'],
      sourceType: 'led-at-company',
    },
    {
      id: 'llmops-platform',
      title: 'LLMOps Platform',
      description:
        'Architected the end-to-end LLMOps infrastructure for a scalable LLM fine-tuning, deployment, and monitoring platform at CloudAngles — covering staging, model hub, versioning, evaluation, and production observability.',
      bullets: [
        'Multi-technique fine-tuning orchestration framework supporting LoRA, QLoRA, SFT, DPO, PEFT, and full fine-tuning with automated experiment tracking',
        'End-to-end LLMOps pipelines with dataset versioning, model registry, deployment workflows, and automated rollback mechanisms',
        'Model optimization via quantization and cross-runtime conversion (llama.cpp, ONNX, TensorRT) for faster production inference',
        'Offline evaluation and regression-testing pipelines for RAG releases: hallucination detection, answer relevance, and context scoring — serving as model release quality gates',
        'Full production observability stack with Prometheus, Grafana, cAdvisor, and Node Exporter for inference latency tracking and system health monitoring',
      ],
      banner: '/llmops-platform-lead-banner.jpg',
      tags: ['LLMOps', 'Model Operations', 'Fine-tuning', 'Evaluation'],
      sourceType: 'resume',
    },
    {
      id: 'llm-eval-toolkit',
      title: 'LLM Eval Toolkit',
      description:
        'An open-source evaluation and regression-testing framework for LLM pipelines — automating quality gates for model releases across RAG and agentic workflows.',
      bullets: [
        'Built a modular evaluation framework covering hallucination detection, answer relevance, context scoring, and prompt template versioning for LLM pipelines',
        'Implemented automated regression testing gates that compare model versions across custom metric suites before production deployment',
        'Integrated with Prometheus and Grafana to expose inference latency, token usage, and evaluation score dashboards for real-time LLMOps observability',
        'Designed the toolkit to be extensible with custom evaluation prompts and metric plugins for RAG, summarization, and agentic task evaluation',
      ],
      banner: '/llmops-platform-lead-banner.jpg',
      tags: ['LLMOps', 'Model Evaluation', 'Regression Testing', 'Observability'],
      sourceType: 'resume',
    },
    {
      id: 'agentic-voice-pipeline',
      title: 'Agentic Voice Pipeline',
      description:
        'An open-source real-time agentic voice pipeline built with LangGraph and streaming STT/TTS — demonstrating multi-agent orchestration, tool calling, and autonomous workflow execution for voice agents.',
      bullets: [
        'Designed and built a modular agentic voice pipeline: streaming STT, LangGraph multi-agent orchestration with tool calling and function invocation, and streaming TTS',
        'Implemented agent state management and memory persistence across conversation turns for context-aware voice interactions',
        'Achieved sub-1.5s end-to-end voice latency through streaming inference, parallel agent execution, and optimized audio chunking',
        'Packaged as a reusable, open-source framework with pluggable STT/TTS providers and configurable agent toolchains for rapid prototyping',
      ],
      banner: '/VoiceAgents-Platform-Banner.jpg',
      tags: ['Agentic AI', 'Voice Agents', 'LangGraph', 'Streaming Inference'],
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
