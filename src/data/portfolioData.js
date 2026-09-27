export const personalData = {
  name: "Satya Prem",
  title: "Backend / Software Engineer with AI Engineering Capability",
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
  { value: "100+", label: "DSA Solved" }
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
    "Qualified **GATE 2026 (CSE)**. Experienced across 4 internships in full-stack, AI engineering, and software development."
  ],
  profileItems: [
    { label: "Degree", value: "B.Tech CSE (2022–2026)" },
    { label: "Institution", value: "SRIT Jabalpur" },
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
    skills: ["C++", "C", "Java", "Python", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "Core Computer Science",
    icon: "terminal",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems (OS)",
      "Computer Networks (CN)",
      "Software Engineering"
    ]
  },
  {
    title: "Backend Development",
    icon: "server",
    skills: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "JWT", "RAG", "Spring Boot (Learning)"]
  },
  {
    title: "Frontend Development",
    icon: "layout",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["MongoDB", "MongoDB Atlas", "MySQL", "Supabase"]
  },
  {
    title: "AI/ML & Generative AI",
    icon: "cpu",
    skills: ["Gemini API", "RAG", "Embeddings", "AI Agents", "Scikit-learn", "NumPy", "Pandas"]
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS EC2", "S3", "IAM", "Docker", "GitHub Actions", "Vercel", "Render"]
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
    id: "codeforcareer",
    title: "CodeForCareer",
    subtitle: "Full-Stack Placement & Coding Platform",
    description: "Developed a full-stack placement and career acceleration platform with coding practice, structured learning paths, quizzes, project-based labs, mock interviews, and skill assessments to support end-to-end placement preparation. Implemented AI-powered ATS resume analysis using Gemini API, multi-language code execution, and secure JWT authentication with protected routes.",
    featured: true,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "Piston API", "JWT"],
    liveUrl: "https://codeforcareer.vercel.app/",
    githubUrl: "https://github.com/SATYA-PREM/Code4career"
  },
  {
    id: "product-intelligence",
    title: "Product Intelligence Platform",
    subtitle: "AI-Powered Product Analytics",
    description: "Building an AI-powered product intelligence platform with an end-to-end data pipeline for ingestion, validation, cleaning, preprocessing, AI analysis, embeddings, clustering, trend analysis, and feature prioritization. Implemented RAG-based retrieval and Gemini-powered AI agents to transform analyzed customer feedback into product insights, prioritized features, PRDs, user stories, roadmap recommendations, and reports.",
    featured: true,
    tags: ["AI/ML", "RAG", "Product Analytics", "Python", "FastAPI", "React"],
    liveUrl: "https://ai-driven-product.vercel.app/",
    githubUrl: "https://github.com/SATYA-PREM/Product-Intelligence-Platform-AI-Powered-Product-Analytics-"
  },
  {
    id: "learnwise-ai",
    title: "LearnWise AI",
    subtitle: "GenAI-Powered Adaptive Learning & Career Mentor",
    description: "Developed a GenAI-powered adaptive learning platform that generates personalized learning paths, diagnostic assessments, remedial plans, career simulations, and AI-powered resume analysis. Implemented Gemini-powered AI services for backward-designed roadmaps, learning diagnostics, career simulations, resume parsing, and context-aware AI mentoring with secure JWT authentication and REST APIs.",
    featured: true,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "FastAPI", "Python"],
    liveUrl: "https://ai-path-recomender-satya.vercel.app/",
    githubUrl: "https://github.com/SATYA-PREM/AI-PATH-RECOMENDER-PUBLIC"
  },
  {
    id: "netsage-ai",
    title: "NetSage AI",
    subtitle: "Smart Network Diagnostics & AI Assistant",
    description: "Smart network diagnostics application and interactive AI assistant for diagnosing network connectivity, monitoring latency, analyzing packet data, and delivering automated network repair steps.",
    featured: false,
    tags: ["React.js", "Flask", "Python", "OpenAI / Gemini", "Vercel"],
    liveUrl: "https://net-sage-ai-rho.vercel.app/assistant",
    githubUrl: "https://github.com/SATYA-PREM/NetSage-AI"
  },
  {
    id: "bireena-medico",
    title: "Bireena Medico",
    subtitle: "Hospital Management System",
    description: "Developing a multi-role hospital management system covering patient management, appointments, EMR, prescriptions, laboratory, pharmacy, billing, inventory, reports, and analytics. Implementing secure REST APIs with JWT authentication and role-based access control, along with responsive dashboards and real-time workflows for administrators, doctors, clinics, pharmacy, laboratory, and appointment operations.",
    featured: false,
    tags: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "Supabase", "JWT"],
    liveUrl: "https://hospital-management-system-five-khaki.vercel.app/",
    githubUrl: "https://github.com/SATYA-PREM/BIREENA-MEDICO/"
  },
  {
    id: "sampada-herbs",
    title: "Sampada Herbs & Spices",
    subtitle: "E-Commerce Storefront & Management System",
    description: "Full-featured e-commerce web platform built for high-quality spices, organic products, and herbal solutions with dynamic product catalogs, search, cart management, and seamless online shopping experience.",
    featured: false,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "E-Commerce"],
    liveUrl: "https://sampadastore.shop/",
    githubUrl: "https://github.com/SATYA-PREM"
  },
  {
    id: "smart-solar",
    title: "Smart Solar Solutions",
    subtitle: "Clean Energy Analytics & Service Portal",
    description: "Interactive platform and web portal for solar power estimations, energy efficiency analytics, installer connections, and renewable energy monitoring.",
    featured: false,
    tags: ["React.js", "Tailwind CSS", "Vite", "Web Analytics"],
    liveUrl: "https://smart-solar-solution.vercel.app/",
    githubUrl: "https://github.com/SATYA-PREM"
  },
  {
    id: "offline-ai",
    title: "Offline AI Assistant",
    subtitle: "Local Intelligence & Task Automation Assistant",
    description: "Lightweight, privacy-focused offline AI assistant providing fast local query processing, command execution, and automated assistant tools without requiring continuous internet connectivity.",
    featured: false,
    tags: ["Python", "FastAPI", "React.js", "Local LLM", "Offline AI"],
    liveUrl: "https://my-assistent-nine.vercel.app/",
    githubUrl: "https://github.com/SATYA-PREM/my-assistent"
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
    "Satya Prem is a 4th-year B.Tech CSE student at SRIT Jabalpur. He's a Software Developer focused on full-stack development, backend systems, REST APIs, databases, and AI. He has 10+ projects, 4 internships, and qualified GATE 2026 CSE."
  ],
  projects: [
    "Satya's key projects include:\n• CodeForCareer — Full-Stack Placement & Coding Platform\n• Product Intelligence Platform — AI-Powered Product Analytics\n• LearnWise AI — GenAI Adaptive Learning & Career Mentor\n• NetSage AI — Smart Network Diagnostics & Assistant\n• Bireena Medico — Hospital Management System\n• Sampada Herbs & Spices — E-Commerce Storefront\n• Smart Solar Solutions — Clean Energy Analytics Portal\n• Offline AI Assistant — Local Intelligence Assistant"
  ],
  skills: [
    "Satya's technical skills:\n• Programming Languages: C++, C, Java, Python, JavaScript, TypeScript, SQL\n• Core CS: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems (OS), Computer Networks (CN), Software Engineering\n• Backend Development: Node.js, Express.js, FastAPI, Flask, REST APIs, JWT, RAG, Spring Boot (Learning)\n• Frontend Development: React.js, HTML5, CSS3, Tailwind CSS, Next.js\n• Databases: MongoDB, MongoDB Atlas, MySQL, Supabase\n• AI/ML & Generative AI: Gemini API, RAG, Embeddings, AI Agents, Scikit-learn, NumPy, Pandas\n• Cloud & DevOps: AWS EC2, S3, IAM, Docker, GitHub Actions, Vercel, Render"
  ],
  contact: [
    "You can reach Satya directly via:\n• Email: satyaprem619@gmail.com\n• LinkedIn: linkedin.com/in/satya-prem-3852033a9/\n• GitHub: github.com/SATYA-PREM\n• Location: Jabalpur, MP, India"
  ],
  default: [
    "Satya Prem is a Software Engineer specializing in backend systems, React, Node.js, Python, and AI applications. Feel free to ask about his projects, skills, experience, or GATE qualification!"
  ]
};

