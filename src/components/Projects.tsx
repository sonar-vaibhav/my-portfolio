import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      "title": "EZRooms – Rental Accommodation System",
      "description": "A full-stack web application for students and property managers to find and manage rental accommodations.",
      "longDescription": "EZRooms is a full-stack rental accommodation platform tailored for students and property managers. It includes real-time room availability, user authentication, role-based access, admin dashboard, property search with filters, review and rating system, favorites, and reporting feature. Integrated with Google Maps API for location-based property searches. Backend optimized with PHP & MySQL for scalable and efficient data management.",
      "image": "/project-cards/ezrooms.png",
      "technologies": ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      "githubUrl": "https://github.com/sonar-vaibhav/rental-accommodation-system",
      "liveUrl": "",
      "features": [
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
      "title": "Procurement Management System – DPU",
      "description": "A live project in development for Dr. D. Y. Patil Institute of Technology to manage procurement workflows.",
      "longDescription": "The Procurement Management System is an ongoing live project built for DPU’s internal operations to streamline procurement and approval workflows. It will provide modules for requisition requests, approvals, vendor management, and purchase tracking. The system is being developed with a focus on automation, efficiency, and secure role-based access to handle different stakeholders in the procurement lifecycle.",
      "image": "/project-cards/image.png",
      "technologies": ["React", "TailwindCSS", ".NET"],
      "githubUrl": "https://github.com/sonar-vaibhav/dpu-procurement-portal",
      "liveUrl": "https://dpu-procurement-portal.vercel.app/",
      "features": [
        "Role-based user access for staff, faculty, and admins",
        "Requisition request and approval workflow",
        "Vendor and purchase order management",
        "Tracking and auditing of procurement lifecycle",
        "Responsive UI with TailwindCSS",
        "Secure backend API powered by .NET (under development)"
      ]
    },
    {
      "title": "MailCraft – AI Email Assistant",
      "description": "A Chrome extension that helps users write, rephrase, and polish emails using AI, directly inside Gmail.",
      "longDescription": "MailCraft is a productivity-focused Chrome extension that integrates AI assistance into Gmail’s compose window. It allows users to instantly rewrite subject lines and email bodies in different tones (formal, casual, persuasive) and even apply custom prompts with inline commands. Designed with a smooth UI that blends seamlessly into Gmail, MailCraft empowers professionals, students, and teams to write impactful and clear emails faster. It securely handles API key storage using Chrome Storage API, ensuring privacy while leveraging Google Gemini AI for high-quality rephrasings.",
      "image": "/project-cards/mailcraft.png",
      "technologies": ["HTML", "CSS", "JavaScript", "Chrome Extensions API", "Google Gemini AI"],
      "githubUrl": "https://github.com/sonar-vaibhav/mailcraft-ai",
      "liveUrl": "",
      "features": [
        "AI-powered rewriting of email subject and body in real-time",
        "Tone selection dropdown (formal, casual, persuasive)",
        "Custom inline prompts with !@# syntax",
        "Seamless integration inside Gmail compose window",
        "Secure API key storage using Chrome Storage API"
      ]
    }

    // {
    //   title: "Task Management App",
    //   description: "A collaborative task management application with real-time updates",
    //   longDescription: "A modern task management application that enables teams to collaborate effectively with real-time updates, drag-and-drop functionality, and comprehensive project tracking. Features include team management, deadline tracking, and progress visualization.",
    //   image: "/api/placeholder/400/250",
    //   technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    //   githubUrl: "https://github.com/vaibhavsonar/task-manager",
    //   liveUrl: "https://taskmanager-demo.vercel.app",
    //   features: [
    //     "Real-time collaboration with Socket.io",
    //     "Drag and drop task organization",
    //     "Team member management",
    //     "Progress tracking and analytics",
    //     "Deadline notifications",
    //     "File attachments and comments"
    //   ]
    // },
    // {
    //   title: "Social Media Dashboard",
    //   description: "Analytics dashboard for social media management",
    //   longDescription: "A comprehensive social media analytics dashboard that aggregates data from multiple platforms, provides detailed insights, and enables content scheduling. Built with modern data visualization libraries and responsive design principles.",
    //   image: "/api/placeholder/400/250",
    //   technologies: ["React", "Chart.js", "Firebase", "Tailwind CSS", "API Integration"],
    //   githubUrl: "https://github.com/vaibhavsonar/social-dashboard",
    //   liveUrl: "https://social-dashboard-demo.vercel.app",
    //   features: [
    //     "Multi-platform social media integration",
    //     "Real-time analytics and reporting",
    //     "Content scheduling and publishing",
    //     "Engagement metrics visualization",
    //     "Custom dashboard widgets",
    //     "Export reports in multiple formats"
    //   ]
    // },
    // {
    //   title: "Weather Forecast App",
    //   description: "Beautiful weather app with location-based forecasts",
    //   longDescription: "An elegant weather forecasting application featuring location-based weather data, 7-day forecasts, interactive maps, and beautiful animations. Utilizes geolocation API and integrates with multiple weather service providers for accurate data.",
    //   image: "/api/placeholder/400/250",
    //   technologies: ["React", "OpenWeather API", "Geolocation", "CSS Animations"],
    //   githubUrl: "https://github.com/vaibhavsonar/weather-app",
    //   liveUrl: "https://weather-forecast-demo.vercel.app",
    //   features: [
    //     "Location-based weather detection",
    //     "7-day detailed forecast",
    //     "Interactive weather maps",
    //     "Hourly weather predictions",
    //     "Weather alerts and notifications",
    //     "Beautiful animated weather icons"
    //   ]
    // },
    // {
    //   title: "Portfolio Website",
    //   description: "Personal portfolio website with modern animations",
    //   longDescription: "A modern, fully responsive portfolio website showcasing projects, skills, and experience. Features smooth animations, interactive elements, and optimized performance. Built with cutting-edge technologies and design principles.",
    //   image: "/api/placeholder/400/250",
    //   technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    //   githubUrl: "https://github.com/vaibhavsonar/portfolio",
    //   liveUrl: "https://vaibhavsonar.dev",
    //   features: [
    //     "Smooth scroll animations",
    //     "Interactive project showcases",
    //     "Responsive design for all devices",
    //     "Contact form integration",
    //     "SEO optimization",
    //     "Fast loading performance"
    //   ]
    // },
    // {
    //   title: "Blog Platform",
    //   description: "Full-stack blog platform with CMS functionality",
    //   longDescription: "A complete blogging platform with content management system, user authentication, comment system, and SEO optimization. Features include rich text editor, image uploads, category management, and social sharing capabilities.",
    //   image: "/api/placeholder/400/250",
    //   technologies: ["Next.js", "Sanity CMS", "Vercel", "SEO", "Authentication"],
    //   githubUrl: "https://github.com/vaibhavsonar/blog-platform",
    //   liveUrl: "https://blog-demo.vercel.app",
    //   features: [
    //     "Rich text editor with media support",
    //     "User authentication and profiles",
    //     "Comment system with moderation",
    //     "SEO optimization and meta tags",
    //     "Social media sharing",
    //     "Content categorization and tagging"
    //   ]
    // }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here’s what I’ve built so far — a collection of projects that showcase my journey across diverse tech stacks. I’m constantly learning and creating, so more projects will be added soon.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-card rounded-2xl overflow-hidden tech-border hover:shadow-glow transition-all duration-300 h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-tech pb-[56.25%]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-electric opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary rounded text-xs font-medium tech-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="tech-border hover:bg-primary/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, "_blank");
                        }}
                      >
                        <FaGithub className="mr-2" />
                      </Button>

                      {project.liveUrl && (
                        <Button
                          variant="secondary"
                          size="sm"
                          className="tech-border hover:bg-electric/10"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, "_blank");
                          }}
                        >
                          <FaExternalLinkAlt className="mr-2" />
                        </Button>
                      )}

                    </div>

                    <Button
                      variant="default"
                      size="sm"
                      className="bg-gradient-primary hover:shadow-glow"
                      onClick={() => setSelectedProject(index)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Modal Content */}
              <motion.div
                className="relative bg-card rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto tech-border shadow-glow"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: "spring", bounce: 0.3 }}
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes className="text-xl" />
                </button>

                {/* Modal Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gradient mb-4">
                      {projects[selectedProject].title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                      {projects[selectedProject].longDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-semibold text-gradient-electric mb-4">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {projects[selectedProject].features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xl font-semibold text-gradient mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-2 bg-secondary rounded-lg font-medium tech-border hover:shadow-electric transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      className="bg-gradient-primary hover:shadow-glow flex-1"
                      onClick={() => window.open(projects[selectedProject].githubUrl, "_blank")}
                    >
                      <FaGithub className="mr-2" />
                      View Source Code
                    </Button>
                    {projects[selectedProject].liveUrl && (
                      <Button
                        variant="outline"
                        className="tech-border hover:bg-electric/10 flex-1"
                        onClick={() => window.open(projects[selectedProject].liveUrl, "_blank")}
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;