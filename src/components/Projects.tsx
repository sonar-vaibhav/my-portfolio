import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
      "title": "Team Envisioners Website",
      "description": "An official website built for Team Envisioners club to showcase their vision, activities, and member information.",
      "longDescription": "The Team Envisioners Website is a modern and responsive website developed to represent the club’s activities, objectives, and members. Designed with a clean UI using React and TailwindCSS, it highlights the club’s events, core team, and initiatives. The website integrates EmailJS for seamless contact and inquiry handling, making it easier for visitors to reach out. This project also serves as the club’s digital identity, contributing to its outreach and growth.",
      "image": "/project-cards/team_env.png",
      "technologies": ["React", "TailwindCSS", "EmailJS"],
      "githubUrl": "",
      "liveUrl": "https://team-envisioners.vercel.app/",
      "features": [
        "Core team and event highlight sections",
        "Contact form with EmailJS integration",
        "Clean UI built with React and TailwindCSS",
        "Mobile-friendly and accessible design",
        "Responsive website showcasing club activities and members",
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
  ];

  // Toggle body class to hide navbar when modal is open
  useEffect(() => {
    const body = document.body;
    if (selectedProject !== null) {
      body.classList.add("modal-open");
    } else {
      body.classList.remove("modal-open");
    }
    return () => body.classList.remove("modal-open");
  }, [selectedProject]);

  return (
    <section id="projects" className="min-h-screen py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-justify">
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
                <div className="relative overflow-hidden pb-[56.25%]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-primary opacity-20"></div> */}
                  {/* <motion.div
                    className="absolute inset-0 bg-gradient-electric opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  /> */}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-[15px] lg:text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm lg:text-[15px] text-muted-foreground text-justify mb-4 line-clamp-3">
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
                      {project.githubUrl && (<Button
                        variant="secondary"
                        size="sm"
                        className="tech-border hover:bg-primary/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, "_blank");
                        }}
                      >
                        <FaGithub className="" />
                      </Button>
                      )}

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
                          <FaExternalLinkAlt className="" />
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
                    <h3 className="text-2xl font-bold text-gradient mb-4">
                      {projects[selectedProject].title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {projects[selectedProject].longDescription}
                    </p>
                  </div>

                  {/* Features */}
                  { projects[selectedProject].features.length > 0 && (
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
                  )}

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
                  <div className="flex flex-col md:flex-row gap-3 md:gap-4 pt-4">
                    {projects[selectedProject].githubUrl && (
                      <Button
                        className="bg-gradient-primary hover:shadow-glow w-full md:flex-1"
                        onClick={() => window.open(projects[selectedProject].githubUrl, "_blank")}
                      >
                        <FaGithub className="mr-2" />
                        View Source Code
                      </Button>
                    )}

                    {projects[selectedProject].liveUrl && (
                      <Button
                        variant="outline"
                        className="tech-border hover:bg-electric/10 w-full md:flex-1"
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