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
        "System Design",
        "Cloud Computing"
    ],
    futureGoals: [
        "Become a Software Engineer",
        "Contribute to impactful products",
        "Build my own technology company"
    ],
    details: [
        { label: "Identity", value: "Arpit Srivastava" },
        { label: "Education", value: "B.Tech CSE (AI/ML) · 2024–2028" },
        { label: "Location", value: "India 🇮🇳" },
        { label: "Focus", value: "Backend Engineering & AI" },
        { label: "Main Stack", value: "React / Node.js / Express / MongoDB / Python / Java" },
        { label: "Building", value: "AI-Based Academic Warning System" }
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
        github: "https://github.com/ArpitVentures/frd-mini-project",
        demo: "https://orbiq.vercel.app",
        featured: true
    },
    {
        id: "academic-warning-system",
        title: "AI Academic Performance Early Warning System",
        tagline: "Predictive analytics platform that identifies academically at-risk students using machine learning.",
        category: "AI / ML",
        tags: ["Python", "FastAPI", "Next.js", "MongoDB", "Scikit-Learn"],
        shortDesc: "Machine learning system that analyzes academic data to identify at-risk students and provide early intervention insights.",
        problem: "Educational institutions struggle to identify struggling students before end-of-term failures occur.",
        solution: "Designed an AI-powered academic monitoring platform that combines machine learning models with an interactive dashboard.",
        impact: "Provides educators with early academic risk insights to support timely interventions.",
        github: "https://github.com/ArpitVentures/academic-warning-system",
        featured: true
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
        github: "https://github.com/ArpitVentures/focus-guard",
        featured: false
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
        github: "https://github.com/ArpitVentures/my-portfolio",
        demo: "https://arpitsrivastava.dev",
        featured: false
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
        github: "https://github.com/ArpitVentures/expense-tracker-java",
        featured: false,
        isFoundation: true
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
        github: "https://github.com/ArpitVentures/student-management-java",
        featured: false,
        isFoundation: true
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
        github: "https://github.com/ArpitVentures/notes-manager-java",
        featured: false,
        isFoundation: true
    }
];

export const journeyEvents: JourneyEvent[] = [
    {
        year: "2024",
        title: "Started B.Tech CSE (AI/ML)",
        subtitle: "Computer Science Fundamentals",
        description: "Began my CS degree focused on core programming, object-oriented concepts, and problem-solving fundamentals.",
        cmd: "$ init --education",
        status: "COMPLETED"
    },
    {
        year: "2024",
        title: "Java Console Projects",
        subtitle: "Logic & Data Structures",
        description: "Built command-line tools and console applications in Java to strengthen algorithms, memory logic, and clean code principles.",
        cmd: "$ javac App.java",
        status: "COMPLETED"
    },
    {
        year: "2025",
        title: "ORBIQ Productivity Workspace",
        subtitle: "Full-Stack SaaS Application",
        description: "Built and deployed a complete productivity SaaS platform featuring AI assistance, Razorpay billing, and team workspaces.",
        cmd: "$ npm run dev --orbiq",
        status: "COMPLETED"
    },
    {
        year: "2025",
        title: "Software Developer Intern @ W3Villa",
        subtitle: "Real-World Engineering Experience",
        description: "Worked on client projects, REST API development, code optimization, and industry engineering practices.",
        cmd: "$ sudo service internship start",
        status: "COMPLETED"
    },
    {
        year: "2026",
        title: "Academic Warning System",
        subtitle: "AI/ML Predictive Risk Pipeline",
        description: "Developing an AI-driven academic monitoring platform to detect student failure risks early using machine learning.",
        cmd: "$ python train_model.py",
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
    linkedin: "https://www.linkedin.com/in/arpit-srivastava-a60326310/",
    location: "India 🇮🇳",
};