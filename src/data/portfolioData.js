export const personalData = {
  name: "Satya Prem",
  title: "Software Engineering Student | Backend & Full-Stack Developer | DSA",
  headline: "Building scalable software with backend, full-stack and AI systems.",
  tagline: "Fourth-year B.Tech CSE student with hands-on experience in C++, Java, Python, DSA, DBMS, REST APIs, and full-stack development, building practical products with Node.js, Express.js, Flask, FastAPI, React.js, MongoDB, and MySQL.",
  email: "satyaprem619@gmail.com",
  phone: "+91-9931798085",
  location: "Jabalpur, MP · India",
  github: "https://github.com/SATYA-PREM",
  linkedin: "https://www.linkedin.com/in/satya-prem-3852033a9/",
  portfolio: "https://satya-prem.vercel.app/",
  resume: "/resume.pdf"
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" }
];

export const heroStats = [
  { value: "10+", label: "Projects Built" },
  { value: "4", label: "Internships" },
  { value: "GATE '26", label: "Qualified CSE" },
  { value: "8.1", label: "CGPA (SRIT)" }
];

export const heroNodes = [
  { label: "C++ / Java", isCore: false, style: { left: '8%', top: '15%', animationDelay: '0s' } },
  { label: "Node.js", isCore: false, style: { right: '10%', top: '20%', animationDelay: '-1s' } },
  { label: "React.js", isCore: false, style: { left: '12%', bottom: '22%', animationDelay: '-2s' } },
  { label: "MongoDB", isCore: false, style: { right: '14%', bottom: '25%', animationDelay: '-3s' } },
  { label: "SP", subLabel: "Full-Stack", isCore: true, style: {} }
];

export const aboutData = {
  bio: [
    "I am a **fourth-year B.Tech Computer Science student** at Shri Ram Institute of Technology, Jabalpur, with a strong foundation in **Data Structures, Algorithms, DBMS, and System Design**.",
    "Driven by problem-solving and software architecture, I specialize in building **high-performance backend services, RESTful APIs, microservices**, and **AI-powered applications**.",
    "Qualified **GATE 2026 (CSE)** with a CGPA of **8.1/10**. Experienced across 4 internships in full-stack, AI engineering, and software development."
  ],
  profileItems: [
    { label: "Degree", value: "B.Tech CSE (2022–2026)" },
    { label: "Institution", value: "SRIT Jabalpur (CGPA 8.1)" },
    { label: "GATE Exam", value: "Qualified CSE 2026" },
    { label: "Primary Stack", value: "Node.js, React, Express, Python" },
    { label: "Databases", value: "MySQL, MongoDB, PostgreSQL" },
    { label: "Focus Areas", value: "Backend Systems, APIs, AI Integration" }
  ]
};

export const skillsCategories = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["C", "C++", "Java", "Python", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"]
  },
  {
    title: "Frontend Development",
    icon: "layout",
    skills: ["React.js", "Redux Toolkit", "Tailwind CSS", "Bootstrap", "Responsive Web Design"]
  },
  {
    title: "Backend & APIs",
    icon: "server",
    skills: ["Node.js", "Express.js", "Flask", "FastAPI", "RESTful APIs", "JWT", "OAuth 2.0"]
  },
  {
    title: "Databases & Storage",
    icon: "database",
    skills: ["MySQL", "MongoDB", "SQLite", "Supabase", "Mongoose", "Prisma ORM"]
  },
  {
    title: "AI, ML & GenAI",
    icon: "cpu",
    skills: ["Pandas", "NumPy", "Scikit-Learn", "OpenAI API", "Google Gemini API", "LangChain"]
  },
  {
    title: "DevOps, Cloud & Tools",
    icon: "tool",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Render", "Postman", "VS Code", "Figma"]
  }
];

export const experienceData = [
  {
    role: "Backend & Full-Stack Developer",
    company: "CodeForCareer",
    period: "2025 – Present",
    type: "Internship / Technical Project",
    description: "Built scalable placement & coding preparation platform powering mock assessments, analytics dashboards, and practice environments.",
    highlights: [
      "Designed and implemented RESTful API endpoints using Node.js, Express, and MongoDB.",
      "Integrated authentication with JWT and secure password hashing with Bcrypt.",
      "Engineered real-time dashboard analytics tracking student performance metrics."
    ],
    tech: ["Node.js", "Express", "React", "MongoDB", "Tailwind CSS"]
  },
  {
    role: "AI & Full-Stack Developer Intern",
    company: "LearnWise AI",
    period: "2024",
    type: "Internship",
    description: "Developed adaptive AI learning assistant & career mentoring system using Google Gemini API and FastAPI.",
    highlights: [
      "Engineered LLM-prompting pipeline to generate tailored learning pathways based on user skill gaps.",
      "Built high-speed asynchronous REST APIs using FastAPI and Pydantic.",
      "Reduced AI response latency by 35% through response streaming and intelligent prompt caching."
    ],
    tech: ["Python", "FastAPI", "Google Gemini API", "React", "Tailwind"]
  },
  {
    role: "Software Developer Intern",
    company: "Bireena Medico",
    period: "2024",
    type: "Internship",
    description: "Architected Hospital & Pharmacy Management System streamlining inventory, appointments, and patient billing.",
    highlights: [
      "Designed relational database schema in MySQL handling multi-role access control (Admin, Doctor, Pharmacist).",
      "Created dynamic billing and prescription generator using React and Node.js backend.",
      "Optimized query response times by 40% using indexed SQL queries."
    ],
    tech: ["Node.js", "Express", "React", "MySQL", "REST APIs"]
  },
  {
    role: "Web Development Intern",
    company: "NetSage AI",
    period: "2024",
    type: "Internship",
    description: "Created automated network troubleshooting & assistant interface with responsive dashboards.",
    highlights: [
      "Built interactive web application interfacing with network diagnostics utilities.",
      "Designed dark-mode UI with customizable metrics charts and status indicators."
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "Flask", "Python"]
  }
];

export const projectsData = [
  {
    id: "product-intelligence",
    title: "Product Intelligence Platform",
    subtitle: "AI-Powered Product Analytics",
    description: "Real-time analytics engine empowering product teams to track user events, generate cohort insights, and leverage generative AI for automated metric reporting.",
    featured: true,
    tags: ["React", "Node.js", "Express", "MongoDB", "AI Analytics"],
    liveUrl: "https://net-sage-ai-rho.vercel.app/assistant",
    githubUrl: "https://github.com/SATYA-PREM/Product-Intelligence-Platform-AI-Powered-Product-Analytics-"
  },
  {
    id: "netsage-ai",
    title: "NetSage AI",
    subtitle: "Network Troubleshooting & AI Assistant",
    description: "Smart network diagnostics tool and interactive AI assistant for diagnosing connectivity, monitoring latency, and receiving automated network repair steps.",
    featured: true,
    tags: ["React", "Flask", "Python", "OpenAI / Gemini", "Vercel"],
    liveUrl: "https://net-sage-ai-rho.vercel.app/assistant",
    githubUrl: "https://github.com/SATYA-PREM/NetSage-AI"
  },
  {
    id: "ai-path-recommender",
    title: "AI Path Recommender",
    subtitle: "Adaptive Career & Skill Roadmap Generator",
    description: "Intelligent career path navigation tool analyzing current skills to chart optimized learning milestones, course suggestions, and target milestones.",
    featured: true,
    tags: ["React", "FastAPI", "Tailwind CSS", "Gemini API"],
    liveUrl: "https://ai-path-recomender-satya.vercel.app/",
    githubUrl: "https://github.com/SATYA-PREM/AI-PATH-RECOMENDER-PUBLIC"
  },
  {
    id: "codeforcareer",
    title: "CodeForCareer",
    subtitle: "Placement & Coding Prep Platform",
    description: "Full-stack learning & assessment platform with subject modules, practice code problems, mock tests, and progress tracking for CSE candidates.",
    featured: false,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://satya-prem.vercel.app/",
    githubUrl: "https://github.com/SATYA-PREM"
  },
  {
    id: "bireena-medico",
    title: "Bireena Medico",
    subtitle: "Hospital & Pharmacy Management System",
    description: "Comprehensive medical ERP streamlining patient records, doctor scheduling, pharmacy inventory, and digital prescription generation.",
    featured: false,
    tags: ["React", "Node.js", "MySQL", "Express"],
    liveUrl: "https://satya-prem.vercel.app/",
    githubUrl: "https://github.com/SATYA-PREM"
  },
  {
    id: "learnwise-ai",
    title: "LearnWise AI",
    subtitle: "GenAI Adaptive Learning & Career Mentor",
    description: "AI-driven education platform delivering personalized study schedules, dynamic quizzes, and instant query resolution using GenAI models.",
    featured: false,
    tags: ["Python", "FastAPI", "React", "Google Gemini API"],
    liveUrl: "https://satya-prem.vercel.app/",
    githubUrl: "https://github.com/SATYA-PREM"
  }
];

export const achievementsData = [
  {
    title: "Qualified GATE 2026 (CSE)",
    organization: "IIT / NTA",
    year: "2026",
    description: "Qualified Graduate Aptitude Test in Engineering in Computer Science & Information Technology, demonstrating core proficiency in Algorithms, Operating Systems, DBMS, Theory of Computation, and Computer Architecture."
  },
  {
    title: "500+ DSA Problems Solved",
    organization: "LeetCode & GeeksforGeeks",
    year: "2023–2025",
    description: "Solved over 500 algorithm & data structure problems focusing on Dynamic Programming, Graph Algorithms, Binary Search Trees, and System Design fundamentals."
  },
  {
    title: "Smart India Hackathon Participant",
    organization: "Ministry of Education, Govt. of India",
    year: "2024",
    description: "Led team to build prototype solution for automated inventory and crop management utilizing IoT sensor data and web analytics."
  },
  {
    title: "Full-Stack Development Certification",
    organization: "Udemy & Coursera",
    year: "2024",
    description: "Completed comprehensive practical specialization covering modern MERN stack development, secure authentication, and cloud deployment."
  }
];

export const chatKnowledge = {
  greet: [
    "Hi! I'm SP-Bot, Satya's portfolio assistant. Great to meet you!",
    "Hello! How can I help you learn about Satya's work and technical background?"
  ],
  who: [
    "Satya Prem is a 4th-year B.Tech CSE student at SRIT Jabalpur with CGPA 8.1. He's a Software Developer focused on full-stack development, backend systems, REST APIs, databases, and AI. He has 10+ projects, 4 internships, and qualified GATE 2026 CSE."
  ],
  projects: [
    "Satya's key projects include:\n• Product Intelligence Platform — AI-Powered Product Analytics\n• NetSage AI — Smart Network Diagnostics & Assistant\n• AI Path Recommender — Skill & Career Roadmap Generator\n• CodeForCareer — Full-Stack Placement Platform\n• Bireena Medico — Hospital Management System\n• LearnWise AI — GenAI Adaptive Learning Mentor"
  ],
  skills: [
    "Satya's tech stack:\n• Languages: C, C++, Java, Python, JavaScript, SQL\n• Frontend: React.js, Redux, Tailwind CSS, HTML5, CSS3\n• Backend: Node.js, Express, Flask, FastAPI, REST APIs, JWT, OAuth\n• Databases: MySQL, MongoDB, PostgreSQL, Supabase\n• AI/ML: Pandas, NumPy, Scikit-learn, OpenAI API, Gemini API\n• Tools: Git, Docker, Vercel, Postman, VS Code"
  ],
  contact: [
    "You can reach Satya directly via:\n• Email: satyaprem619@gmail.com\n• LinkedIn: linkedin.com/in/satya-prem-3852033a9/\n• GitHub: github.com/SATYA-PREM\n• Location: Jabalpur, MP, India"
  ],
  default: [
    "Satya Prem is a Software Engineer specializing in backend systems, React, Node.js, Python, and AI applications. Feel free to ask about his projects, skills, experience, or GATE qualification!"
  ]
};

