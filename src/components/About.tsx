import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationData = [
    {
      year: "2024 - 2027",
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      institution: "Dr. D. Y. Patil Institute of Technology, Pimpri, Pune",
      description: "CGPA : 9.33"
    },
    {
      year: "2021 - 2024",
      degree: "Diploma",
      field: "Computer Engineering",
      institution: "SSVPS B.S. Deore Polytechnic, Dhule",
      description: "Percentage : 92.86%"
    }
  ];

  return (
    <section id="about" className="min-h-screen py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-electric uppercase tracking-widest mb-2">Who I Am</p>
          <h2 className="text-4xl font-bold">
            The person behind <span className="text-gradient">the work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - About Me Description */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-5">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Computer Engineering student and full-stack developer who <span className="text-foreground font-medium">learns by building</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy taking an idea, breaking down the problem, and turning it into something functional — from web applications and dashboards to AI-powered experiments.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most of my learning happens while building real projects, participating in hackathons, collaborating with teams, and exploring technologies beyond what I'm already comfortable with.
              </p>
              <p className="text-base text-muted-foreground/70 leading-relaxed italic border-l-2 border-primary/30 pl-4">
                Built, not just studied.
              </p>
            </div>
          </motion.div>

          {/* Right side - Education Timeline */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-muted-foreground/80 uppercase tracking-wide mb-6">Education</h3>
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
