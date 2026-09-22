export interface Project {
    id: string;
    title: string;
    tagline: string;
    category: 'Full-Stack' | 'Backend' | 'AI / ML' | 'Computer Vision' | 'Java';
    tags: string[];
    shortDesc: string;
    problem: string;
    solution: string;
    impact?: string;
    features?: string[];
    github: string;
    demo?: string;
    featured: boolean;
    isFoundation?: boolean;

    backgroundImage: string;
    backgroundColor: string;
}

export interface JourneyEvent {
    year: string;
    title: string;
    subtitle: string;
    description: string;
    cmd: string;
    status: 'COMPLETED' | 'IN_PROGRESS' | 'FUTURE';
}

export const systemProfile = {
    command: "npx whoami --detailed",
    bio: "I'm a Computer Science student focused on backend engineering and artificial intelligence. I enjoy building scalable software, exploring modern technologies, and solving real-world problems through practical projects.",
    philosophy: [
        "Build clean software.",
        "Solve real problems.",
        "Keep learning."
    ],
    currentFocus: [
        "Backend Engineering",
        "Artificial Intelligence",
        "Full-Stack Development",
        "Data Structures & Algorithms"
    ],
    futureGoals: [
        "Become a Software Engineer",
        "Contribute to impactful products",
        "Build my own technology company"
    ],
    details: [
        { label: "Identity", value: "Arpit Srivastava" },
        { label: "Education", value: "B.TECH CSE (AI/ML) · 2024–2028" },
        { label: "Location", value: "India 🇮🇳" },
        { label: "Focus", value: "Backend Engineering & AI" },
        { label: "Main Stack", value: "Node.js / Python / Java / React" },
        { label: "Active Build", value: "ORBIQ v1.0.5" }
    ]
};

export const techArsenal = {
    marquee: ["Python", "Java", "Docker", "FastAPI", "MongoDB", "Next.js", "React", "Express", "Node.js", "PostgreSQL", "Git", "TypeScript"],
    categories: [
        {
            cmd: "$ tech --backend",
            skills: ["Node.js", "Express", "Python", "FastAPI", "Java", "REST APIs", "PostgreSQL", "MongoDB"]
        },
        {
            cmd: "$ tech --tools",
            skills: ["Docker", "Git / GitHub", "React", "TypeScript", "Razorpay"]
        }
    ]
};

export const projectsData: Project[] = [
    {
        id: "orbiq-workspace",
        title: "ORBIQ Productivity Workspace",
        tagline: "Modern productivity workspace with intelligent task management, collaboration, and subscription-based team workflows.",
        category: "Full-Stack",
        tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Razorpay", "Nodemailer"],
        shortDesc: "Full-stack productivity platform featuring AI assistance, secure authentication, collaborative workspaces, and subscription management.",
        problem: "Modern teams often rely on multiple disconnected tools for planning, collaboration, and task tracking, leading to fragmented workflows, reduced visibility, and lower productivity.",
        solution: "Developed a scalable MERN-based productivity workspace that unifies task management, AI-powered assistance, secure authentication, subscription billing, and collaborative workflows.",
        impact: "Centralizes productivity, collaboration, and subscription management into a unified workspace.",
        features: [
            "AI Assistant (HORIZON)",
            "Workspace & Task Management",
            "Secure Authentication (JWT)",
            "Razorpay Subscription System",
            "Email Verification & Password Reset"
        ],
        github: "https://github.com/ArpitVentures/orbiq-by-arpit",
        demo: "https://orbiq-by-arpit.vercel.app",
        featured: true,

        backgroundImage: "/projects/orbiq.png",
        backgroundColor: "#07152B"
    },
    {
        id: "financial-risk-fraud-detection",
        title: "Machine Learning-Based Financial Risk Assessment and Fraud Detection Framework",
        tagline: "Machine learning framework for assessing financial risk and detecting potentially fraudulent transactions.",
        category: "AI / ML",
        tags: ["Python", "Machine Learning", "Scikit-Learn", "Data Analysis"],
        shortDesc: "Machine learning-based system designed to assess financial risk and identify potentially fraudulent patterns in financial data.",
        problem: "Financial systems need reliable ways to assess risk and identify suspicious patterns in transaction and financial data.",
        solution: "Developing a machine learning framework that combines data processing, predictive modeling, and fraud detection to support financial risk assessment.",
        impact: "Aims to provide data-driven risk insights and assist in identifying potentially fraudulent activity.",
        github: "https://github.com/ArpitSrivastava28/financial-risk-fraud-framework",
        featured: true,

        backgroundImage: "/projects/financial-risk.png",
        backgroundColor: "#06191A"
    },
    {
        id: "focus-guard-vision",
        title: "FocusGuard Distraction Tracker",
        tagline: "Real-time facial landmark tracking and fatigue detection system.",
        category: "Computer Vision",
        tags: ["Python", "OpenCV", "PyTorch", "Tailwind CSS"],
        shortDesc: "Computer vision application running locally to monitor fatigue, eye strain, and distraction during work sessions.",
        problem: "Remote engineers and students face undetected fatigue and focus loss during long computer sessions.",
        solution: "Implemented local OpenCV facial landmark tracking to provide real-time focus feedback without external video transmission.",
        github: "https://github.com/ArpitVentures/focus-guard-vision",
        featured: false,

        backgroundImage: "/projects/focusguard.png",
        backgroundColor: "#061426"
    },
    {
        id: "arpit-os-portfolio",
        title: "ARPIT.OS Terminal Portfolio",
        tagline: "Operating system & CLI themed developer portfolio.",
        category: "Full-Stack",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        shortDesc: "Interactive developer portfolio built with an authentic terminal/OS aesthetic, motion triggers, and responsive layout.",
        problem: "Generic portfolio websites fail to represent software engineering fundamentals and technical personality.",
        solution: "Architected a custom CLI-themed interface mimicking operating system commands and fast keyboard navigation.",
        github: "https://github.com/ArpitVentures/arpit-portfolio",
        demo: "https://arpitsrivastava.dev",
        featured: false,

        backgroundImage: "/projects/arpit-os.png",
        backgroundColor: "#071016"
    },
    {
        id: "expense-tracker-java",
        title: "Java Expense Tracker",
        tagline: "Personal expense management application built with Java.",
        category: "Java",
        tags: ["Java", "OOP", "Collections", "File Handling"],
        shortDesc: "Console-based application for recording income and expenses, tracking balances, and managing monthly spending using OOP principles.",
        problem: "Managing daily expenses manually makes it difficult to understand spending habits and maintain budgets.",
        solution: "Built a Java application that organizes financial records, categorizes transactions, and calculates balances through a simple CLI.",
        github: "https://github.com/ArpitVentures/Java-Expense-Tracker",
        featured: false,
        isFoundation: true,

        backgroundImage: "/projects/java-expense.png",
        backgroundColor: "#1A0B04"
    },
    {
        id: "student-management-java",
        title: "Student Management System",
        tagline: "Student record management system using Java.",
        category: "Java",
        tags: ["Java", "OOP", "CRUD", "Collections"],
        shortDesc: "Java-based application for managing student information, supporting record creation, updates, searching, and deletion through a structured menu interface.",
        problem: "Managing student records manually becomes inefficient as the number of students grows.",
        solution: "Developed a CRUD-based Java application that stores and manages student information while strengthening object-oriented design.",
        github: "https://github.com/ArpitVentures/Student_Management_System",
        featured: false,
        isFoundation: true,

        backgroundImage: "/projects/student-management.png",
        backgroundColor: "#071326"
    },
    {
        id: "notes-manager-java",
        title: "Java Notes Manager",
        tagline: "Lightweight notes management application built with Java.",
        category: "Java",
        tags: ["Java", "File Handling", "OOP", "Collections"],
        shortDesc: "Console application for creating, viewing, editing, and deleting notes while practicing file handling and clean application structure.",
        problem: "Quickly organizing personal notes without relying on external software can be difficult for simple use cases.",
        solution: "Built a lightweight Java notes manager that stores and retrieves notes efficiently using Java file operations.",
        github: "https://github.com/ArpitVentures/Notes_Manager_System",
        featured: false,
        isFoundation: true,

        backgroundImage: "/projects/java-notes.png",
        backgroundColor: "#10091F"
    }
];

export const journeyEvents: JourneyEvent[] = [
    {
        year: "2024",
        title: "Started B.TECH CSE (AI/ML)",
        subtitle: "Computer Science Fundamentals",
        description: "Began my CS degree focused on core programming, object-oriented concepts, and problem-solving fundamentals.",
        cmd: "$ init --education",
        status: "IN_PROGRESS"
    },
    {
        year: "2025",
        title: "Java Console Projects",
        subtitle: "Logic & Data Structures",
        description: "Built command-line tools and console applications in Java to strengthen algorithms, memory logic, and clean code principles.",
        cmd: "$ javac App.java",
        status: "COMPLETED"
    },
    {
        year: "2026",
        title: "ORBIQ Productivity Workspace",
        subtitle: "Full-Stack SaaS Application",
        description: "Built and deployed a complete productivity SaaS platform featuring AI assistance, Razorpay billing, and team workspaces.",
        cmd: "$ npm run dev --orbiq",
        status: "COMPLETED"
    },
    {
        year: "2026",
        title: "Software Developer Intern @ W3Villa",
        subtitle: "Software Development Experience",
        description: "Worked on full-stack application development, REST APIs, backend logic, database operations, and software development workflows.",
        cmd: "$ sudo service internship start",
        status: "COMPLETED"
    },
    {
        year: "2026",
        title: "VISION",
        subtitle: "Personal AI Assistant Project",
        description: "Building VISION as my current AI-focused project, exploring intelligent assistance, system interaction, and practical AI applications.",
        cmd: "$ vision --initialize",
        status: "IN_PROGRESS"
    },
    {
        year: "Future",
        title: "Software Engineer",
        subtitle: "Building Scalable Systems",
        description: "Targeting high-impact backend engineering roles to architect reliable software used by thousands of people.",
        cmd: "$ deploy --career",
        status: "FUTURE"
    }
];

export const contactInfo = {
    personalEmail: "arpitsrivastava1101@gmail.com",
    businessEmail: "geniusbillionairearpit@gmail.com",
    github: "https://github.com/ArpitVentures",
    linkedin: "https://www.linkedin.com/in/arpit-srivastava-wd",
    location: "India 🇮🇳",
};