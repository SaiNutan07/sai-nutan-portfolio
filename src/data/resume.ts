// All content on this site is sourced directly from Sai Nutan's resume.
// Keep this file as the single source of truth — update here, not in components.

export const profile = {
  name: "Sai Nutan",
  fullName: "Sai Nutan N",
  role: "Computer Science Engineer",
  tagline:
    "Computer Science Engineer building practical solutions with Java, Backend Development & Generative AI.",
  location: "Hyderabad, India",
  email: "sainutan665@gmail.com",
  linkedin: "http://www.linkedin.com/in/sai-nutan-291817290",
  github: "https://github.com/SaiNutan07",
};

export const heroSupport = [
  "A Java and backend foundation — REST APIs, Spring Boot, and relational data.",
  "Hands-on with Generative AI — RAG pipelines, vector search, and LLM-backed apps.",
  "A systematic problem-solver who takes ownership, from architecture to debugging.",
];

export const stats = [
  { value: "8.5", label: "CGPA" },
  { value: "150+", label: "Students led" },
  { value: "10+", label: "Technical events" },
  { value: "5+", label: "Software applications" },
];

export const about = {
  paragraphs: [
    "I'm a Computer Science Engineering student at CMR Technical Campus, maintaining an 8.5 CGPA while building a solid foundation in data structures, algorithms, and object-oriented design.",
    "My focus sits at the intersection of backend engineering and applied AI — I like working through how a REST API should behave under real transaction states, and I'm just as comfortable wiring up a retrieval pipeline for an LLM. I learn a technology by building with it, not just reading about it.",
    "Outside of coursework, I chair my university's IEEE Student Branch, where I've learned that shipping something real is as much about coordinating people as it is about writing code.",
  ],
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Java", "SQL", "C++", "Visual Basic"],
  },
  {
    category: "CS Fundamentals",
    skills: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Functional Programming",
    ],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "REST APIs", "FastAPI", "API Integration", "Backend Development"],
  },
  {
    category: "AI / GenAI",
    skills: [
      "Python",
      "LangChain",
      "LLMs",
      "Retrieval-Augmented Generation",
      "Vector Databases",
      "Machine Learning",
      "Scikit-learn",
      "Data Analytics",
    ],
  },
  {
    category: "Frontend",
    skills: ["React.js"],
  },
  {
    category: "Tools & Practice",
    skills: ["GitHub", "Version Control", "Haskell Fundamentals"],
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
    title: "GenAI Internal Knowledge Assistant",
    domain: "ai",
    problem:
      "Finding answers buried in internal documents usually means manually searching through files rather than just asking a question.",
    approach: [
      "Built document ingestion so the assistant can index a knowledge base directly from source files.",
      "Implemented Retrieval-Augmented Generation (RAG) so responses are grounded in the actual documents rather than a model's memory.",
      "Added semantic search over a vector database, layered under a conversational interface.",
    ],
    technologies: ["Python", "FastAPI", "LangChain", "LLMs", "Vector Database", "React.js"],
    outcome:
      "A working GenAI-powered assistant that retrieves context-aware answers from ingested documents through natural conversation.",
  },
  {
    id: "payment-orchestration",
    title: "Payment Orchestration & Transaction Management System",
    domain: "backend",
    problem:
      "Payment flows need to move through well-defined states reliably, and failures need to be traceable rather than silent.",
    approach: [
      "Modeled transaction state management across an initiated → processing → success / failure workflow.",
      "Exposed the system through REST APIs built on Spring Boot, backed by PostgreSQL.",
      "Added transaction logging and monitoring to make debugging and operational reliability tractable.",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"],
    outcome:
      "A backend service that carries a payment transaction through its full lifecycle with traceable, loggable state transitions.",
  },
  {
    id: "breast-cancer-ensemble",
    title: "Adaptive Voting-Based Ensemble Learning for Breast Cancer Classification",
    domain: "ml",
    problem:
      "Single classification models can be inconsistent on medical diagnostic data; combining models can improve reliability.",
    approach: [
      "Integrated multiple classifiers — Random Forest, SVM, Decision Tree, and Logistic Regression.",
      "Designed an adaptive voting mechanism to combine their predictions rather than relying on any one model.",
      "Built and evaluated the pipeline in Python with Scikit-learn.",
    ],
    technologies: ["Python", "Machine Learning", "Scikit-learn", "Ensemble Learning", "Data Analytics"],
    outcome:
      "An ensemble model for breast cancer classification, published with DOI 10.48175/IJARSCT-32166.",
    paper: { label: "View publication (DOI)", url: "https://doi.org/10.48175/IJARSCT-32166" },
  },
];

export const leadership = {
  role: "Chairperson",
  organization: "IEEE Student Branch",
  org_full: "Institute of Electrical and Electronics Engineers (IEEE)",
  location: "Hyderabad, India",
  period: "Sep 2025 – Present",
  points: [
    "Led the IEEE Student Branch with 150+ student members.",
    "Organized 10+ technical workshops, hackathons, and industry interaction sessions.",
    "Collaborated with faculty advisors, industry professionals, and student volunteers to execute successful events and programs.",
    "Spearheaded collaborations with industry experts and academic leaders to deliver high-impact learning opportunities.",
  ],
};

export const achievements = [
  "Built 5+ end-to-end software applications using Java, SQL, REST APIs, and modern development practices.",
  "Automated repetitive workflows, reducing manual effort by 60%.",
  "Developed AI-powered applications integrating Large Language Models and Retrieval-Augmented Generation.",
  "Improved software execution efficiency by 40% through algorithm optimization and database design.",
];

export type Certification = {
  title: string;
  provider: string;
};

export const certifications: Certification[] = [
  { title: "Launchpad Micro Certifications — Java, SQL & GenAI", provider: "PwC" },
  { title: "Agentforce Specialist", provider: "Salesforce" },
  { title: "Advanced Product Quality Planning", provider: "Pyramid" },
  { title: "CCNA: Enterprise Networking, Security, and Automation", provider: "Cisco" },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science Engineering",
  institution: "CMR Technical Campus",
  location: "Hyderabad, India",
  period: "2023 – 2027",
  gpa: "CGPA: 8.5/10",
};

export const pillars = [
  {
    index: "01",
    title: "Problem Solving",
    description:
      "I break complex problems into manageable parts and work systematically toward practical solutions.",
  },
  {
    index: "02",
    title: "Technical Curiosity",
    description:
      "I enjoy learning new technologies and understanding how they can solve real problems.",
  },
  {
    index: "03",
    title: "Leadership",
    description:
      "My IEEE experience has strengthened my communication, coordination, and ownership.",
  },
  {
    index: "04",
    title: "Continuous Learning",
    description:
      "I actively build projects and explore emerging technologies such as Generative AI.",
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
