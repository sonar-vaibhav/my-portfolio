import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Web Development Intern",
      company: "Sumago Infotech Pvt. Ltd.",
      location: "Nashik, Maharashtra, India",
      period: "June 2024 - July 2024",
      type: "Remote",
      contributions: [
        "Worked across front-end and back-end using HTML, CSS, JavaScript, PHP, MySQL, and React.js.",
        "Built interactive, responsive UI components and improved my understanding of real-world development workflows.",
        "Gained hands-on experience with GitHub, debugging, and collaborating in a team environment."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "React.js"]
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-electric uppercase tracking-widest mb-2">Where I've Contributed</p>
          <h2 className="text-4xl font-bold mb-4">
            Experience & <span className="text-gradient">contribution</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Roles where I've learned by doing — building, debugging, and shipping real work.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative flex items-start mb-12 last:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Timeline Icon */}
              <motion.div
                className="absolute left-6 w-4 h-4 bg-gradient-primary rounded-full shadow-glow z-10"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", bounce: 0.6 }}
              />

              {/* Experience Card */}
              <motion.div
                className="ml-12 w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", bounce: 0.4 }}
              >
                <div className="bg-card rounded-2xl p-4 sm:p-6 lg:p-8 tech-border hover:shadow-glow transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                        <div className="flex items-center">
                          <FaBriefcase className="mr-2 text-electric" />
                          <span className="font-medium text-foreground">{exp.company}</span>
                        </div>
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="mr-2 text-purple" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <div className="flex items-center text-electric">
                        <FaCalendarAlt className="mr-2" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <span className="inline-block mt-1 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* What I Worked On */}
                  <div className="mb-6 pt-4">
                    <h4 className="text-lg font-semibold text-gradient-electric mb-3">
                      What I Worked On
                    </h4>
                    <ul className="space-y-2">
                      {exp.contributions.map((contribution, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.3 + achIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{contribution}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gradient mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary rounded-full text-sm font-medium tech-border hover:shadow-electric transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.3 + techIndex * 0.05
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
