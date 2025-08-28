import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SharedProfileOrbit from "./SharedProfileOrbit";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationData = [
    {
      year: "2020-2024",
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      institution: "University of Technology",
      description: "Specialized in full-stack development, algorithms, and software engineering principles."
    },
    {
      year: "2018-2020",
      degree: "Higher Secondary Certificate",
      field: "Science Stream",
      institution: "ABC College",
      description: "Focused on Mathematics, Physics, and Computer Science fundamentals."
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Profile image with animated tech orbit */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SharedProfileOrbit 
              layoutId="profile-orbit"
              useLayoutId={true}
              size="large"
            />
          </motion.div>

          {/* Right side - About content and education timeline */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* About Me Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gradient-electric">Who I Am</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I love building scalable applications that solve real-world problems and create 
                exceptional user experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong foundation in both frontend and backend technologies, I enjoy 
                the entire development process from concept to deployment. I'm always eager 
                to learn new technologies and improve my craft.
              </p>
            </div>

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
                      <p className="text-muted-foreground mb-3">{edu.institution}</p>
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