// All portfolio content is sourced from this file.
// Keep this file as the single source of truth.

export const profile = {
  name: "Sai Nutan",
  fullName: "Sai Nutan.N",
  role: "Computer Science Engineering Undergraduate",
  tagline:
    "Computer Science Engineering undergraduate building practical backend, machine learning, and Generative AI solutions.",
  location: "Hyderabad, Telangana, India",
  email: "sainutan665@gmail.com",
  linkedin: "http://www.linkedin.com/in/sai-nutan-291817290",
  github: "https://github.com/SaiNutan07",
};

export const heroSupport = [
  "Backend engineering with Java, Spring Boot, REST APIs, SQL, and PostgreSQL.",
  "Hands-on experience with Generative AI, RAG, LLMs, LangChain, and vector databases.",
  "Focused on practical problem-solving, continuous learning, and building reliable software solutions.",
];

export const stats = [
  { value: "8.4", label: "CGPA" },
  { value: "150+", label: "Students led" },
  { value: "10+", label: "Technical events" },
  { value: "3", label: "Featured projects" },
];

export const about = {
  paragraphs: [
    "I'm a Computer Science Engineering undergraduate at CMR Technical Campus with an 8.4 CGPA, building a strong foundation in software engineering, data structures, algorithms, databases, and object-oriented programming.",
    "My interests sit at the intersection of backend engineering, machine learning, and Generative AI. I enjoy building REST APIs with Java and Spring Boot, working with SQL and PostgreSQL, and developing RAG-based applications using LLMs, LangChain, and vector databases.",
    "I also serve as Chairperson of my IEEE Student Branch, where I lead a community of 150+ students and organize technical workshops, hackathons, and industry interaction sessions.",
  ],
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "SQL", "C++"],
  },
  {
    category: "Backend Development",
    skills: [
      "Spring Boot",
      "FastAPI",
      "REST APIs",
      "Microservices Architecture",
      "API Integration",
    ],
  },
  {
    category: "AI & Intelligent Automation",
    skills: [
      "Generative AI",
      "RAG",
      "LLMs",
      "Vector Databases",
    ],
  },
  {
    category: "Core CS Fundamentals",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
    ],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "Version Control Workflows"],
  },
];

export type Project = {
  id: string;
  title: string;
  problem: string;
  approach: string[];
  technologies: string[];
  outcome: string;
  github?: string;
  paper?: { label: string; url: string };
  domain: "backend" | "ai" | "ml";
};

export const projects: Project[] = [
  {
    id: "genai-knowledge-assistant",
    title: "GenAI Knowledge Assistant",
    domain: "ai",
    problem:
      "Finding useful information across documents can require manually searching through large amounts of content.",
    approach: [
      "Built a Generative AI-powered knowledge assistant using LLMs, LangChain, FastAPI, and vector databases.",
      "Implemented Retrieval-Augmented Generation (RAG) for accurate and context-aware information retrieval.",
      "Developed document ingestion, semantic search, and conversational AI capabilities.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "LLMs",
      "Vector Databases",
    ],
    outcome:
      "A Generative AI knowledge assistant capable of retrieving relevant context from documents and providing conversational responses.",
  },

  {
    id: "adaptive-voting-ensemble",
    title: "Adaptive Voting Ensemble for Breast Cancer Classification",
    domain: "ml",
    problem:
      "Medical classification tasks can benefit from combining multiple machine learning models rather than relying on a single classifier.",
    approach: [
      "Developed an ensemble machine learning model for breast cancer diagnosis using adaptive voting techniques.",
      "Integrated Random Forest, SVM, Decision Tree, and Logistic Regression classifiers.",
      "Built the machine learning pipeline using Python and Scikit-learn to improve prediction accuracy.",
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Ensemble Learning",
      "Data Analytics",
    ],
    outcome:
      "An adaptive ensemble-based approach for breast cancer classification using multiple complementary machine learning models.",
  },

  {
    id: "multi-agent-erp-assistant",
    title: "Explainable Multi-Agent ERP Knowledge Assistant",
    domain: "ai",
    problem:
      "ERP systems contain information across multiple business functions, making it difficult to provide focused and transparent answers to natural-language queries.",
    approach: [
      "Developed a multi-agent RAG-based ERP assistant with a coordinator that routes natural-language queries to specialized agents.",
      "Implemented specialized agents for Sales, Inventory, HR, and Procurement.",
      "Integrated retrieval and specialized agents to generate context-aware responses.",
      "Implemented an explainability and data-lineage layer to improve transparency of generated results.",
    ],
    technologies: [
      "Generative AI",
      "RAG",
      "LLMs",
      "Multi-Agent AI",
      "Vector Databases",
    ],
    outcome:
      "Achieved 100% answer correctness, retrieval relevance, and agent-routing accuracy, with 92.79% grounding/faithfulness during evaluation.",
  },
];

export const internship = {
  role: "Software Engineering Intern",
  company: "OLIVE CRYPTO SOLUTIONS Pvt. Ltd.",
  location: "Hyderabad, India",
  period: "May 2026 – July 2026",
  points: [
    "Developed Java Spring Boot REST APIs for financial transaction validation, status management, reconciliation, and exception handling.",
    "Worked with SQL/PostgreSQL for transaction data management and backend processing.",
    "Built a prototype ML-assisted transaction anomaly detection module to identify unusual transaction patterns.",
    "Applied backend engineering and machine learning concepts to support financial transaction monitoring.",
  ],
};

export const leadership = {
  role: "Chairperson",
  organization: "IEEE Student Branch",
  org_full: "Institute of Electrical and Electronics Engineers (IEEE)",
  location: "Hyderabad, India",
  period: "Sep 2025 – Present",
  points: [
    "Led an IEEE Student Branch with 150+ student members.",
    "Organized 10+ technical workshops, hackathons, and industry interaction sessions.",
    "Collaborated with faculty advisors, industry professionals, and student volunteers to execute technical events and learning initiatives.",
  ],
};

export const achievements = [
  "Built practical backend and AI solutions using Java, Spring Boot, Python, REST APIs, SQL, RAG, and LLMs.",
  "Developed Generative AI applications using Retrieval-Augmented Generation and vector databases.",
  "Applied machine learning and ensemble learning techniques to real-world classification problems.",
  "Combined backend engineering and AI capabilities to build practical software solutions.",
];

export type Certification = {
  title: string;
  provider: string;
};

export const certifications: Certification[] = [
  {
    title: "PwC Launchpad – Micro Certifications: Java, SQL & Generative AI",
    provider: "PwC",
  },
  {
    title: "Salesforce Certified: Agentforce Specialist",
    provider: "Salesforce",
  },
  {
    title: "CCNA: Enterprise Networking, Security, and Automation",
    provider: "Cisco",
  },
  {
    title: "Artificial Intelligence Primer Certification",
    provider: "Infosys Springboard",
  },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science and Engineering",
  institution: "CMR Technical Campus",
  location: "Hyderabad, India",
  period: "2023 – 2027",
  gpa: "CGPA: 8.4/10",
};

export const schoolEducation = [
  {
    level: "12th Standard",
    institution: "Narayana Junior College",
    period: "2021 – 2023",
    result: "92%",
  },
  {
    level: "10th Standard",
    institution: "St. Peter's Grammar School",
    period: "2021",
    result: "CGPA: 9.7",
  },
];

export const pillars = [
  {
    index: "01",
    title: "Problem Solving",
    description:
      "I approach complex technical problems systematically and focus on building practical solutions.",
  },
  {
    index: "02",
    title: "Backend Engineering",
    description:
      "I enjoy designing APIs, transaction workflows, database interactions, and reliable backend services.",
  },
  {
    index: "03",
    title: "Generative AI",
    description:
      "I build practical AI applications using LLMs, RAG, vector databases, and multi-agent architectures.",
  },
  {
    index: "04",
    title: "Leadership",
    description:
      "My IEEE leadership experience has strengthened my communication, collaboration, coordination, and ownership.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];