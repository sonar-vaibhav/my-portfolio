import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { projects, type Project } from "@/data/projects";

const tagColors: Record<string, string> = {
  PERSONAL: "text-electric border-electric/30 bg-electric/10",
  HACKATHON: "text-purple border-purple/30 bg-purple/10",
  "REAL-WORLD": "text-green border-green/30 bg-green/10",
  COLLABORATION: "text-primary border-primary/30 bg-primary/10",
  CLIENT: "text-orange-500 border-orange-500/30 bg-orange-500/10",
  COLLEGE: "text-blue-400 border-blue-400/30 bg-blue-400/10",
  EXPERIMENT: "text-pink-400 border-pink-400/30 bg-pink-400/10",
  AI: "text-electric border-electric/30 bg-electric/10",
  FINTECH: "text-green border-green/30 bg-green/10",
  "FULL-STACK": "text-primary border-primary/30 bg-primary/10",
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    if (selectedProject !== null) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [selectedProject]);

  const project = selectedProject !== null ? projects[selectedProject] : null;

  return (
    <section id="projects" className="min-h-screen py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-electric uppercase tracking-widest mb-2">What I've Built</p>
          <h2 className="text-4xl font-bold mb-4">
            Things I've <span className="text-gradient">built</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Here's what I've built so far — a collection of projects across different technologies, problems, and ideas. More are always on the way.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((p, index) => (
            <motion.div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden tech-border hover:shadow-glow transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(index)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"></div>
                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${tagColors[tag] || "text-muted-foreground border-border bg-secondary/80"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-gradient transition-all">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {p.description}
                </p>

                {/* Tech icons */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 bg-secondary/80 rounded text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {p.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-xs text-muted-foreground/60">
                      +{p.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  {p.githubUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-secondary"
                      aria-label={`View ${p.title} source code on GitHub`}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(p.githubUrl, "_blank", "noopener,noreferrer");
                      }}
                    >
                      <FaGithub className="" />
                    </Button>
                  )}
                  {p.liveUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-secondary"
                      aria-label={`View ${p.title} live demo`}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(p.liveUrl, "_blank", "noopener,noreferrer");
                      }}
                    >
                      <FaExternalLinkAlt className="" />
                    </Button>
                  )}
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-gradient-primary hover:shadow-glow ml-auto"
                    aria-label={`View details for ${p.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(index);
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && project && (
            <ProjectModal project={project} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Content */}
      <motion.div
        className="relative bg-card rounded-2xl p-6 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto tech-border shadow-glow"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ type: "spring", bounce: 0.3 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg transition-colors z-10"
          aria-label="Close project details modal"
          onClick={onClose}
        >
          <FaTimes className="text-xl" />
        </button>

        {/* Modal Content */}
        <div className="space-y-6">
          {/* Title + Tags */}
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${tagColors[tag] || "text-muted-foreground border-border bg-secondary"}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-gradient mb-3">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Problem → Build → Result Story */}
          <div className="space-y-4">
            <DetailSection title="The Problem" text={project.problem} />
            <DetailSection title="What I Built" text={project.whatIBuilt} />
            <DetailSection title="My Contribution" text={project.contribution} />
            <DetailSection title="Challenges & Interesting Parts" text={project.challenges} />
          </div>

          {/* Features */}
          {project.features.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold text-gradient-electric mb-4">
                Key Features
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, featureIndex) => (
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
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
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
            {project.githubUrl && (
              <Button
                className="bg-gradient-primary hover:shadow-glow w-full md:flex-1"
                aria-label={`View ${project.title} source code on GitHub`}
                onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
              >
                <FaGithub className="mr-2" />
                View Source Code
              </Button>
            )}

            {project.liveUrl && (
              <Button
                variant="outline"
                className="tech-border hover:bg-electric/10 w-full md:flex-1"
                aria-label={`View ${project.title} live demo`}
                onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const DetailSection = ({ title, text }: { title: string; text: string }) => (
  <div>
    <h4 className="text-sm font-semibold text-electric uppercase tracking-wide mb-1">{title}</h4>
    <p className="text-muted-foreground leading-relaxed text-sm">{text}</p>
  </div>
);

export default Projects;
