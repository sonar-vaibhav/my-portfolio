export interface Project {
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  whatIBuilt: string;
  contribution: string;
  challenges: string;
  image: string;
  technologies: string[];
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
}

export const projects: Project[] = [
  {
    title: "EZRooms – Rental Accommodation System",
    description: "A full-stack web application for students and property managers to find and manage rental accommodations.",
    longDescription: "EZRooms is a full-stack rental accommodation platform tailored for students and property managers. It includes real-time room availability, user authentication, role-based access, admin dashboard, property search with filters, review and rating system, favorites, and reporting feature. Integrated with Google Maps API for location-based property searches. Backend optimized with PHP & MySQL for scalable and efficient data management.",
    problem: "Students moving to new cities struggle to find verified rental accommodations. Existing platforms are cluttered, lack trust signals, and don't cater specifically to student needs like proximity to college and budget constraints.",
    whatIBuilt: "A complete rental platform with role-based access for students, property owners, and admins — featuring real-time availability, advanced search filters, reviews, ratings, and Google Maps integration.",
    contribution: "Designed and built the entire application end-to-end — from database schema and backend APIs in PHP/MySQL to the responsive frontend with Bootstrap. Implemented role-based access control, the review system, and Google Maps integration.",
    challenges: "Designing a role-based access system that cleanly separates students, owners, and admins while keeping the UX intuitive. Optimizing MySQL queries for fast property searches with multiple filter combinations.",
    image: "/project-cards/ezrooms.png",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    tags: ["PERSONAL", "FULL-STACK"],
    githubUrl: "https://github.com/sonar-vaibhav/rental-accommodation-system",
    liveUrl: "",
    features: [
      "Role-based access control for students, owners, and admins",
      "User authentication and profile management",
      "Admin dashboard with reporting system",
      "Property search with advanced filters",
      "Reviews and ratings for rooms and managers",
      "Favorite room bookmarking",
      "Google Maps API integration"
    ]
  },
  {
    title: "Procurement Management System – DPU",
    description: "A live project in development for Dr. D. Y. Patil Institute of Technology to manage procurement workflows.",
    longDescription: "The Procurement Management System is an ongoing live project built for DPU's internal operations to streamline procurement and approval workflows. It provides modules for requisition requests, approvals, vendor management, and purchase tracking. The system is being developed with a focus on automation, efficiency, and secure role-based access to handle different stakeholders in the procurement lifecycle.",
    problem: "DPU's procurement process was manual and paper-heavy — requisitions, approvals, and vendor tracking were done through forms and spreadsheets, causing delays and lack of transparency.",
    whatIBuilt: "A procurement portal with requisition workflows, multi-level approvals, vendor management, and purchase order tracking — designed for staff, faculty, and admins with role-based access.",
    contribution: "Building the React frontend with TailwindCSS, implementing the requisition and approval workflow UI, and integrating with the .NET backend API being developed by the team.",
    challenges: "Modeling a multi-level approval workflow that different stakeholders can track in real time. Ensuring the UI stays clean and usable despite the complexity of procurement rules.",
    image: "/project-cards/prcuremgt.png",
    technologies: ["React", "TailwindCSS", ".NET"],
    tags: ["REAL-WORLD", "COLLABORATION"],
    githubUrl: "https://github.com/sonar-vaibhav/dpu-procurement-portal",
    liveUrl: "https://dpu-procurement-portal.vercel.app/",
    features: [
      "Role-based user access for staff, faculty, and admins",
      "Requisition request and approval workflow",
      "Vendor and purchase order management",
      "Tracking and auditing of procurement lifecycle",
      "Responsive UI with TailwindCSS",
      "Secure backend API powered by .NET (under development)"
    ]
  },
  {
    title: "Team Envisioners Website",
    description: "An official website built for Team Envisioners club to showcase their vision, activities, and member information.",
    longDescription: "The Team Envisioners Website is a modern and responsive website developed to represent the club's activities, objectives, and members. Designed with a clean UI using React and TailwindCSS, it highlights the club's events, core team, and initiatives. The website integrates EmailJS for seamless contact and inquiry handling, making it easier for visitors to reach out. This project also serves as the club's digital identity, contributing to its outreach and growth.",
    problem: "Team Envisioners, a college club, had no online presence. Events, team info, and contact were scattered across informal channels, making outreach and onboarding difficult.",
    whatIBuilt: "A clean, responsive club website with event highlights, core team profiles, and an EmailJS-powered contact form — serving as the club's digital identity.",
    contribution: "Built the entire website from scratch — designed the UI in React and TailwindCSS, implemented the event and team sections, and integrated EmailJS for the contact form.",
    challenges: "Creating a design that feels modern and represents the club's identity while keeping it simple enough for non-technical club members to understand and maintain.",
    image: "/project-cards/team_env.png",
    technologies: ["React", "TailwindCSS", "EmailJS"],
    tags: ["COLLABORATION", "COLLEGE"],
    githubUrl: "",
    liveUrl: "https://team-envisioners.vercel.app/",
    features: [
      "Core team and event highlight sections",
      "Contact form with EmailJS integration",
      "Clean UI built with React and TailwindCSS",
      "Mobile-friendly and accessible design",
      "Responsive website showcasing club activities and members",
    ]
  },
  {
    title: "MailCraft – AI Email Assistant",
    description: "A Chrome extension that helps users write, rephrase, and polish emails using AI, directly inside Gmail.",
    longDescription: "MailCraft is a productivity-focused Chrome extension that integrates AI assistance into Gmail's compose window. It allows users to instantly rewrite subject lines and email bodies in different tones (formal, casual, persuasive) and even apply custom prompts with inline commands. Designed with a smooth UI that blends seamlessly into Gmail, MailCraft empowers professionals, students, and teams to write impactful and clear emails faster. It securely handles API key storage using Chrome Storage API, ensuring privacy while leveraging Google Gemini AI for high-quality rephrasings.",
    problem: "Writing clear, well-toned emails takes time and effort. Most people struggle with phrasing, tone consistency, and rewriting — especially when sending important or professional emails.",
    whatIBuilt: "A Chrome extension that injects AI-powered rewriting directly into Gmail's compose window — with tone selection, custom inline prompts, and secure API key handling.",
    contribution: "Built the entire extension — the content script that integrates with Gmail's DOM, the popup UI for tone selection, Chrome Storage API integration for secure key management, and the Gemini AI integration for rephrasing.",
    challenges: "Injecting UI into Gmail's complex, frequently-changing DOM without breaking the native experience. Handling API key storage securely while keeping the extension lightweight and fast.",
    image: "/project-cards/mailcraft.png",
    technologies: ["HTML", "CSS", "JavaScript", "Chrome Extensions API", "Google Gemini AI"],
    tags: ["EXPERIMENT", "AI"],
    githubUrl: "https://github.com/sonar-vaibhav/mailcraft-ai",
    liveUrl: "",
    features: [
      "AI-powered rewriting of email subject and body in real-time",
      "Tone selection dropdown (formal, casual, persuasive)",
      "Custom inline prompts with !@# syntax",
      "Seamless integration inside Gmail compose window",
      "Secure API key storage using Chrome Storage API"
    ]
  },
  {
    title: "OrderEase – Restaurant Order Management System",
    description: "A full-stack web application to manage in-house and takeaway orders for small to mid-scale restaurants.",
    longDescription: "OrderEase is a full-stack restaurant order management platform that streamlines in-house and takeaway orders. It features real-time order tracking, a mobile-responsive customer interface, unique Order ID generation, secure payment integration with Razorpay, and a restaurant dashboard for monitoring order status and analyzing order flow. Built with React, Node.js, Express.js, MongoDB, and Tailwind CSS.",
    problem: "Small and mid-scale restaurants rely on manual order-taking, leading to errors, missed orders, and no real-time visibility into order status or flow.",
    whatIBuilt: "A full-stack order management platform with a customer-facing ordering interface, real-time order tracking, Razorpay payment integration, and a restaurant dashboard for monitoring and analytics.",
    contribution: "Built the entire MERN stack application — the React frontend, Node.js/Express REST API, MongoDB data models, Razorpay payment integration, and the restaurant dashboard.",
    challenges: "Designing a real-time order flow that works reliably for both customers and restaurant staff. Integrating Razorpay payments securely while keeping the checkout flow smooth.",
    image: "/project-cards/order-ease.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Razorpay API"],
    tags: ["PERSONAL", "FULL-STACK"],
    githubUrl: "https://github.com/sonar-vaibhav/order-ease",
    liveUrl: "https://order-ease-i1t7.onrender.com/",
    features: [
      "Full-stack order management for small to mid-scale restaurants",
      "Mobile-responsive customer interface",
      "Real-time order tracking and status updates",
      "Unique Order ID generation for each order",
      "Secure payment integration with Razorpay",
      "Restaurant dashboard for monitoring orders and flow analysis"
    ]
  },
  {
    title: "DhanSarthi – AI-Powered Personal Finance Mentor",
    description: "An AI-driven personal finance application that helps users manage expenses, loans, savings goals, and tax planning with smart insights.",
    longDescription: "DhanSarthi is an AI-powered personal finance platform designed for young earners to track expenses, analyze loans, plan savings goals, and receive tax-saving guidance. The system combines structured financial data with an AI mentor that provides personalized insights using contextual memory. Users can manage daily expenses through a calendar view, monitor EMIs and loan risks, track savings goals with progress updates, and get intelligent nudges for better money habits.",
    problem: "Young earners often lack structured financial guidance — they struggle to track expenses, understand loan risks, plan savings, and make tax-efficient decisions without expensive advisors.",
    whatIBuilt: "An AI-powered finance platform with calendar-based expense tracking, a loan analyzer with EMI and risk assessment, savings goal tracking, and an AI mentor that gives personalized financial insights using contextual memory.",
    contribution: "Built the full MERN stack application — React frontend, Node.js/Express backend, MongoDB models, and the Gemini AI integration for the contextual finance mentor. Designed the expense calendar, loan analyzer, and savings goal modules.",
    challenges: "Building an AI mentor that provides genuinely useful, contextual financial advice rather than generic responses. Structuring financial data so the AI can reason about spending patterns, loan risk, and savings progress.",
    image: "/project-cards/dhansarthi.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Gemini API"],
    tags: ["HACKATHON", "AI", "FINTECH"],
    githubUrl: "https://github.com/sonar-vaibhav/dhansarthi",
    liveUrl: "",
    features: [
      "Calendar-based expense and income tracking",
      "Loan analyzer with EMI tracking and risk assessment",
      "Savings goal planning with progress updates",
      "AI mentor with contextual memory for personalized insights",
      "Tax-saving guidance and intelligent money nudges"
    ]
  }
];
