import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SharedProfileOrbit from "./SharedProfileOrbit";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationData = [
    {
      year: "2024 - 2027",
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      institution: "Dr. D. Y. Patil Institute of Technology, Pimpri, Pune",
      description: "CGPA : 9.25"
    },
    {
      year: "2021 - 2024",
      degree: "Diploma",
      field: "Computer Engineering",
      institution: "Shri Shivaji Vidya Prasarak Sanstha's B. S. Deore Polytechnic, Dhule",
      description: "Percentage : 92.86%"
    }
  ];

  return (
    <section id="about" className="min-h-screen py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - About Me Description (visible on mobile too) */}
          <motion.div
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* About Me Description */}
            <div className="">
              <h3 className="text-2xl font-semibold text-gradient-electric pb-4">Who I Am</h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                I'm a passionate full-stack developer with expertise in modern web technologies.
                I love building scalable applications that solve real-world problems and create
                exceptional user experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                
                With a strong foundation in both frontend and backend technologies, I enjoy
                the entire development process from concept to deployment. I'm always eager
                to learn new technologies and improve my craft.
              </p>
            </div>
          </motion.div>

          {/* Right side - About content and education timeline */}
          <motion.div
            className="space-y-8 order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >

            {/* Education Timeline */}
            <div>
              <h3 className="text-2xl font-semibold text-gradient mb-6">Education</h3>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 pb-6 border-l-2 border-primary/30 last:border-l-0 last:pb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gradient-primary rounded-full shadow-glow"></div>

                    <div className="bg-card rounded-xl p-6 tech-border hover:shadow-glow transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-xl font-semibold text-primary">{edu.degree}</h4>
                        <span className="text-sm text-electric font-medium">{edu.year}</span>
                      </div>
                      <p className="text-lg text-purple mb-1">{edu.field}</p>
                      <p className="text-muted-foreground mb-3 text-sm">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;