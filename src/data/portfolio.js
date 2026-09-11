export const profile = {
  name: 'Muhammed Basith',
  title: 'AI Engineer & Full-Stack Developer',
  tagline:
    'Recent B.Tech graduate in AI & Data Science building production-ready AI applications — RAG systems, computer vision, and full-stack web apps.',
  location: 'Kerala, India',
  email: 'muhammedbasi384@gmail.com',
  phone: '+91-8590699270',
  github: 'https://github.com/Basi467',
  linkedin: 'https://www.linkedin.com/in/basith456',
  resumeUrl: '/Muhammed_Basith_Resume.pdf',
}

export const education = {
  degree: 'Bachelor of Technology in Artificial Intelligence and Data Science',
  school: 'Ilahia College of Engineering and Technology, Mulavoor',
  years: '2022 – 2026',
}

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'AI / ML & Agents',
    items: [
      'OpenAI API',
      'Groq',
      'Whisper',
      'faster-whisper',
      'FAISS',
      'sentence-transformers',
      'YOLOv8',
      'OpenCV',
      'scikit-learn',
      'TensorFlow',
    ],
  },
  {
    category: 'Voice & Speech',
    items: ['Vosk', 'edge-tts', 'WebRTC VAD'],
  },
  {
    category: 'Web Development',
    items: ['React', 'FastAPI', 'Flask', 'REST API', 'Bootstrap'],
  },
  {
    category: 'Systems & Automation',
    items: ['Windows UI Automation', 'PyAutoGUI', 'Windows Task Scheduler'],
  },
  {
    category: 'Databases & DevOps',
    items: ['MongoDB', 'SQLite', 'Docker', 'Git', 'GitHub Actions', 'pytest'],
  },
  {
    category: 'APIs & Integrations',
    items: ['Google Calendar API', 'Gmail API', 'Spotify API'],
  },
]

export const spotlightProject = {
  title: 'Alexis',
  year: '2026',
  tagline:
    'A personal, always-listening Windows voice assistant with an agentic LLM core — not a chatbot wrapper, a real tool-calling agent that controls a live desktop.',
  shortDescription:
    'Alexis is a voice-first assistant that chains together speech recognition, an LLM agent with ~45 tools, and real OS-level control — GUI automation, screen understanding, document search, calendar/email integration — all orchestrated through a resumable multi-step tool-calling loop.',
  fullDescription:
    "Alexis is a personal voice assistant that runs continuously in the background on Windows: say the wake word, and it listens, transcribes, reasons over a large tool library, and acts — searching files, controlling other applications, checking your calendar and email, tracking job applications, or just answering a question. The interesting engineering isn't the voice interface itself; it's the agent underneath it — a tool-calling loop that can chain multiple actions in one turn, pause mid-plan to confirm a risky action, and resume the same plan afterward instead of starting over.",
  highlights: [
    {
      title: 'Agentic tool-calling loop',
      detail:
        '~45 tools, up to 12 chained steps per turn, with a resumable confirmation flow: a risky action (e.g. clicking something on screen) pauses the loop, and confirming resumes the exact same multi-step plan rather than discarding it. A chain of GUI actions only needs one confirmation, not one per click.',
    },
    {
      title: 'Retrieval-augmented document search',
      detail:
        'Chunked, embedded, FAISS-indexed search over local PDFs/DOCX/TXT, with incremental re-indexing (only changed files get re-embedded) and a similarity threshold tuned against real false-positive testing.',
    },
    {
      title: 'Cost-aware model routing',
      detail:
        'A larger model handles conversation, a smaller one handles cheap classification-style calls (yes/no, entity extraction, ranking), cutting token usage without touching response quality where it matters.',
    },
    {
      title: 'Real OS control, not sandboxed API calls',
      detail:
        'GUI automation via the Windows UI Automation tree (with vision-model fallback for apps without exposed control names), live screen understanding, and computer control.',
    },
    {
      title: 'Long-term memory',
      detail:
        'SQLite + FAISS across facts/preferences, a job-application tracker with three-tier company matching (exact → substring → semantic), and semantic search over past conversation history.',
    },
    {
      title: 'Production-grade reliability',
      detail:
        'A crash-recovery watchdog, an OS-level single-instance guard, hidden Windows Scheduled Tasks for alarms/reminders/email and calendar monitoring, and 49 automated tests covering the highest-risk logic (the agent loop, VAD gating, matching logic).',
    },
  ],
  techGroups: [
    { category: 'Speech', items: ['Vosk (wake word)', 'faster-whisper (STT)', 'edge-tts (TTS)', 'WebRTC VAD'] },
    { category: 'LLM / Agent', items: ['Groq (Llama-family models)', 'Two-tier model routing', 'Custom tool-calling agent loop'] },
    { category: 'Memory / RAG', items: ['SQLite', 'FAISS', 'sentence-transformers'] },
    { category: 'Systems Integration', items: ['Windows UI Automation', 'PyAutoGUI', 'Screen vision', 'Windows Task Scheduler'] },
    { category: 'Other', items: ['Google Calendar API', 'Gmail API', 'Spotify API', 'pytest'] },
  ],
  github: null,
  videos: [
    { label: 'Highlight Reel', youtubeId: '33iR7Q80nUw' },
    { label: 'Full Walkthrough', youtubeId: 'PHZhLCTt0OQ' },
  ],
}

export const projects = [
  {
    title: 'AI Multimodal RAG Assistant',
    year: '2026',
    tagline: 'Full-stack AI-powered multimedia question-answering system.',
    description: [
      'Built a full-stack AI application using React, FastAPI, and the OpenAI API for semantic question-answering over PDFs, audio, and video files.',
      'Integrated Whisper AI for multimedia transcription and implemented timestamp-aware retrieval with clickable playback navigation.',
      'Built a semantic vector search pipeline using FAISS, with automatic summarization, MongoDB persistence, Docker containerization, and CI/CD via GitHub Actions.',
    ],
    tech: ['React', 'FastAPI', 'OpenAI API', 'Whisper', 'FAISS', 'MongoDB', 'Docker', 'GitHub Actions', 'Python'],
    github: 'https://github.com/Basi467/AI_Multimedia_chatbot',
    featured: true,
  },
  {
    title: 'Smart Traffic Control System',
    year: '2025',
    tagline: 'A website-based Smart Traffic Control System.',
    description: [
      'Engineered an AI-powered traffic signal control system using YOLOv8, achieving 95%+ vehicle detection accuracy from traffic images.',
      'Implemented a dynamic signal timing algorithm that reduced simulated congestion by up to 40%.',
      'Developed a responsive Flask web dashboard to visualize real-time vehicle counts and signal states.',
    ],
    tech: ['Python', 'YOLOv8', 'OpenCV', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Basi467/Smart-Traffic-Control-System',
    featured: true,
  },
  {
    title: 'Green Harvest — Farmer Assistant',
    year: '2026',
    tagline: 'Flask-based Agricultural Decision Support System.',
    description: [
      'Developed an end-to-end agricultural support platform integrating ML models for crop recommendation, fertilizer suggestion, yield prediction, and disease detection.',
      'Implemented classification and regression models (Random Forest, Regression, CNN) to achieve high prediction accuracy across diverse agricultural datasets.',
      'Preprocessed large-scale soil, crop, and weather datasets to improve model accuracy and reduce prediction latency.',
    ],
    tech: ['Python', 'Flask', 'scikit-learn', 'TensorFlow', 'Pandas', 'OpenCV', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Basi467/green-harvest',
    featured: false,
  },
]

export const certifications = [
  {
    title: 'Front-End Development using Angular',
    org: 'Nest Digital',
    period: 'May – July 2025',
    mode: 'Offline',
    description:
      'Completed front-end development training focused on building responsive web interfaces using Angular, including API integration and component-based architecture.',
  },
]
