export const personalData = {
  name: "Satya Prem",
  title: "Backend / Software Engineer with AI Engineering Capability",
  headline: "Building scalable software with Java, Spring Boot, REST APIs, and AI systems.",
  tagline: "Fourth-year B.Tech CSE student specializing in core backend systems (Java, Spring Boot, REST APIs, PostgreSQL, JPA/Hibernate, Spring Security, Redis) with AI engineering capability (Python, FastAPI, Gemini API, RAG).",
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
  { label: "Java / Spring Boot", isCore: false, style: { left: '6%', top: '15%', animationDelay: '0s' } },
  { label: "REST / PostgreSQL", isCore: false, style: { right: '6%', top: '20%', animationDelay: '-1s' } },
  { label: "Python / FastAPI", isCore: false, style: { left: '8%', bottom: '22%', animationDelay: '-2s' } },
  { label: "GenAI / RAG", isCore: false, style: { right: '10%', bottom: '25%', animationDelay: '-3s' } },
  { label: "SP", subLabel: "Backend & AI", isCore: true, style: {} }
];

export const aboutData = {
  bio: [
    "I am a **fourth-year B.Tech Computer Science student** at **Shri Ram Institute of Technology, Jabalpur**, with a strong foundation in **Data Structures, Algorithms, DBMS, and System Design**.",
    "Driven by backend engineering, I specialize in building high-performance services with **Java, Spring Boot, REST APIs, PostgreSQL, JPA/Hibernate, Spring Security**, and **Redis**.",
    "As my AI differentiator, I leverage **Python, FastAPI, Gemini API, Embeddings**, and **RAG** for intelligent systems. Qualified **GATE 2026 (CSE)**."
  ],
  profileItems: [
    { label: "Degree", value: "B.Tech CSE (2023–2027)" },
    { label: "Institution", value: "Shri Ram Institute of Technology, Jabalpur" },
    { label: "GATE Exam", value: "Qualified CSE 2026" },
    { label: "Primary Stack", value: "Java, Spring Boot, REST APIs, PostgreSQL, JPA/Hibernate" },
    { label: "AI Capability", value: "Python, FastAPI, Gemini API, Embeddings, RAG" },
    { label: "Security & Cloud", value: "Spring Security, Redis, Docker, AWS" }
  ]
};

export const skillsCategories = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["Java", "Python", "C++", "C", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "Core Computer Science",
    icon: "terminal",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems (OS)",
      "Computer Networks (CN)",
      "Software Engineering"
    ]
  },
  {
    title: "Backend Development (Primary)",
    icon: "server",
    skills: ["Java", "Spring Boot", "REST APIs", "JPA / Hibernate", "Spring Security", "Redis", "Node.js", "Express.js"]
  },
  {
    title: "Frontend Development",
    icon: "layout",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "MongoDB Atlas", "Supabase"]
  },
  {
    title: "AI/ML & Generative AI (Differentiator)",
    icon: "cpu",
    skills: ["Python", "FastAPI", "Gemini API", "LLM APIs", "Embeddings", "RAG", "AI Agents", "Scikit-learn", "NumPy", "Pandas"]
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["Docker", "AWS EC2", "S3", "IAM", "GitHub Actions", "Vercel", "Render"]
  }
];

export const experienceData = [
  {
    role: "AI/ML Virtual Intern",
    company: "Infosys Springboard",
    period: "Aug 2026 – Present",
    type: "Virtual Internship",
    description: "Working on an AI-driven Product Intelligence platform focused on customer feedback analysis, product planning, feature prioritization, and requirements generation.",
    highlights: [
      "Building end-to-end AI data pipelines for customer feedback ingestion, sentiment analysis, and topic clustering.",
      "Developing core backend services using Java, Spring Boot, REST APIs, alongside Python FastAPI for LLM RAG pipelines."
    ],
    tech: ["Java", "Spring Boot", "Python", "FastAPI", "LLM", "RAG", "Product Analytics"]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Bireena Infotech",
    period: "Apr 2026 – Jul 2026",
    type: "Internship",
    description: "Developed a full-stack hospital management system covering patient records, appointment management, billing, authentication, and REST APIs for clinical and administrative workflows.",
    highlights: [
      "Engineered secure multi-role authentication & authorization (Admin, Doctor, Pharmacist) using Spring Security, JWT, and Node.js.",
      "Designed relational database models in PostgreSQL / MySQL and developed RESTful microservices for clinical operations."
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "MySQL", "React.js", "JWT"]
  },
  {
    role: "Web Development Intern",
    company: "Yashi IT Services",
    period: "Aug 2025 – Sep 2025",
    type: "Internship",
    description: "Developed responsive websites using HTML, CSS, JavaScript, and Tailwind CSS, while customizing Shopify and WordPress themes, plugins, and layouts.",
    highlights: [
      "Created custom responsive frontend components using HTML5, CSS3, JavaScript (ES6+), and Tailwind CSS.",
      "Configured and extended Shopify & WordPress eCommerce templates, plugins, and custom layout structures."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Shopify", "WordPress"]
  },
  {
    role: "Cisco Virtual Internship",
    company: "Cybersecurity, Networking & Artificial Intelligence",
    period: "2024, 2025 & 2026",
    type: "Virtual Internship",
    description: "Completed Cisco virtual internships in Cybersecurity, Networking, and Artificial Intelligence, gaining practical exposure through virtual labs, technical training, and hands-on assessments.",
    highlights: [
      "Gained practical exposure in network architecture, packet analysis, firewall configuration, and routing protocols.",
      "Completed hands-on labs and technical assessments covering cybersecurity fundamentals, AI tools, and network defense strategies."
    ],
    tech: ["Networking", "Cybersecurity", "AI", "Cisco Packet Tracer", "System Defense"]
  }
];

export const projectsData = [
  {
    id: "codeforcareer",
    title: "CodeForCareer",
    subtitle: "Full-Stack Placement & Coding Platform",
    description: "Developed a full-stack placement and career acceleration platform with coding practice, structured learning paths, quizzes, project-based labs, mock interviews, and skill assessments to support end-to-end placement preparation. Built backend services with Java, Spring Boot, Node.js, and REST APIs with AI-powered ATS resume analysis using Gemini API.",
    featured: true,
    tags: ["Java", "Spring Boot", "REST APIs", "React.js", "Node.js", "MongoDB", "Gemini API", "JWT"],
    liveUrl: "https://codeforcareer.vercel.app/",
    githubUrl: "https://github.com/SATYA-PREM/Code4career"
  },
  {
    id: "product-intelligence",
    title: "Product Intelligence Platform",
    subtitle: "AI-Powered Product Analytics",
    description: "Building an AI-powered product intelligence platform with an end-to-end data pipeline for ingestion, validation, cleaning, preprocessing, AI analysis, embeddings, clustering, trend analysis, and feature prioritization. Implemented RAG-based retrieval with Java & Spring Boot backend services and Gemini-powered FastAPI agents.",
    featured: true,
    tags: ["Java", "Spring Boot", "REST APIs", "Python", "FastAPI", "RAG", "PostgreSQL", "Gemini API"],
    liveUrl: "https://ai-driven-product.vercel.app/",
    githubUrl: "https://github.com/SATYA-PREM/Product-Intelligence-Platform-AI-Powered-Product-Analytics-"
  },
  {
    id: "learnwise-ai",
    title: "LearnWise AI",
    subtitle: "GenAI-Powered Adaptive Learning & Career Mentor",
    description: "Developed a GenAI-powered adaptive learning platform that generates personalized learning paths, diagnostic assessments, remedial plans, career simulations, and AI-powered resume analysis. Implemented Java Spring Boot REST APIs and Gemini-powered FastAPI AI services for roadmaps, diagnostics, and context-aware AI mentoring.",
    featured: true,
    tags: ["Java", "Spring Boot", "REST APIs", "Python", "FastAPI", "React.js", "Gemini API", "JWT"],
    liveUrl: "https://ai-path-recomender-satya.vercel.app/",
    githubUrl: "https://github.com/SATYA-PREM/AI-PATH-RECOMENDER-PUBLIC"
  },
  {
    id: "netsage-ai",
    title: "NetSage AI",
    subtitle: "Smart Network Diagnostics & AI Assistant",
    description: "Smart network diagnostics application and interactive AI assistant for diagnosing network connectivity, monitoring latency, analyzing packet data, and delivering automated network repair steps.",
    featured: false,
    tags: ["Python", "FastAPI", "React.js", "Flask", "OpenAI / Gemini", "Vercel"],
    liveUrl: "https://net-sage-ai-rho.vercel.app/assistant",
    githubUrl: "https://github.com/SATYA-PREM/NetSage-AI"
  },
  {
    id: "bireena-medico",
    title: "Bireena Medico",
    subtitle: "Hospital Management System",
    description: "Developing a multi-role hospital management system covering patient management, appointments, EMR, prescriptions, laboratory, pharmacy, billing, inventory, reports, and analytics. Implementing secure Java Spring Boot REST APIs with JWT authentication and role-based access control, along with responsive React dashboards.",
    featured: false,
    tags: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "React.js", "Node.js", "Supabase", "JWT"],
    liveUrl: "https://hospital-management-system-five-khaki.vercel.app/",
    githubUrl: "https://github.com/SATYA-PREM/BIREENA-MEDICO/"
  },
  {
    id: "sampada-herbs",
    title: "Sampada Herbs & Spices",
    subtitle: "E-Commerce Storefront & Management System",
    description: "Full-featured e-commerce web platform built for high-quality spices, organic products, and herbal solutions with dynamic product catalogs, search, cart management, and seamless online shopping experience.",
    featured: false,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "E-Commerce"],
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
    stat: "GATE",
    title: "2026 Qualified",
    subtitle: "Graduate Aptitude Test in Engineering",
    organization: "IIT / NTA",
    year: "2026",
    description: "Qualified Graduate Aptitude Test in Engineering in Computer Science & Information Technology."
  },
  {
    stat: "AWS",
    title: "Training Badge",
    subtitle: "Cloud Foundations",
    organization: "AWS Training & Certification",
    year: "2025",
    description: "Earned official AWS Cloud Foundations badge covering core cloud infrastructure, security, and services."
  },
  {
    stat: "2629",
    title: "Global Rank",
    subtitle: "TCS CodeVita Season 13",
    organization: "TCS CodeVita",
    year: "2025",
    description: "Achieved Global Rank 2629 in TCS CodeVita Season 13 competitive programming contest."
  },
  {
    stat: "100+",
    title: "LeetCode Solved",
    subtitle: "Data Structures & Algorithms",
    organization: "LeetCode",
    year: "2023–2026",
    description: "Solved 100+ algorithm & data structure problems focusing on Dynamic Programming, Graphs, and Trees."
  },
  {
    stat: "3+",
    title: "Professional Websites",
    subtitle: "Delivered and launched",
    organization: "Client Solutions",
    year: "2025–2026",
    description: "Delivered and launched 3+ live production client websites and e-commerce platforms."
  },
  {
    stat: "10+",
    title: "Projects Built",
    subtitle: "Web · AI · Security",
    organization: "Full-Stack & AI Systems",
    year: "2023–2026",
    description: "Architected and built 10+ software projects spanning full-stack, AI agents, and network utilities."
  },
  {
    stat: "4",
    title: "Internships",
    subtitle: "AI/ML · Web Dev · Cyber Security",
    organization: "Industry Experience",
    year: "2024–2026",
    description: "Completed 4 internships in AI/ML, Full-Stack Development, Web Development, and Cybersecurity."
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
    "Satya's technical skills:\n• Programming Languages: C++, C, Java, Python, JavaScript, TypeScript, SQL\n• Core CS: Data Structures & Algorithms, OOP, DBMS, Operating Systems (OS), Computer Networks (CN), Software Engineering\n• Backend Development: Node.js, Express.js, FastAPI, Flask, REST APIs, JWT, RAG, Spring Boot (Learning)\n• Frontend Development: React.js, HTML5, CSS3, Tailwind CSS, Next.js\n• Databases: MongoDB, MongoDB Atlas, MySQL, Supabase\n• AI/ML & Generative AI: Gemini API, RAG, Embeddings, AI Agents, Scikit-learn, NumPy, Pandas\n• Cloud & DevOps: AWS EC2, S3, IAM, Docker, GitHub Actions, Vercel, Render"
  ],
  contact: [
    "You can reach Satya directly via:\n• Email: satyaprem619@gmail.com\n• LinkedIn: linkedin.com/in/satya-prem-3852033a9/\n• GitHub: github.com/SATYA-PREM\n• Location: Jabalpur, MP, India"
  ],
  default: [
    "Satya Prem is a Software Engineer specializing in backend systems, React, Node.js, Python, and AI applications. Feel free to ask about his projects, skills, experience, or GATE qualification!"
  ]
};

