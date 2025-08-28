import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaGithub,
  FaFigma,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { Icon: FaReact, name: "React", color: "text-blue-400", level: 90 },
    { Icon: SiNextdotjs, name: "Next.js", color: "text-foreground", level: 85 },
    { Icon: FaNodeJs, name: "Node.js", color: "text-green", level: 88 },
    { Icon: SiExpress, name: "Express", color: "text-foreground", level: 85 },
    { Icon: SiMongodb, name: "MongoDB", color: "text-green", level: 80 },
    { Icon: SiMysql, name: "MySQL", color: "text-blue-500", level: 82 },
    { Icon: FaPhp, name: "PHP", color: "text-purple", level: 75 },
    { Icon: FaJs, name: "JavaScript", color: "text-yellow-400", level: 92 },
    { Icon: FaGithub, name: "GitHub", color: "text-foreground", level: 88 },
    { Icon: FaFigma, name: "Figma", color: "text-purple", level: 78 },
    { Icon: FaBootstrap, name: "Bootstrap", color: "text-purple", level: 85 },
    { Icon: SiTailwindcss, name: "Tailwind", color: "text-electric", level: 90 },
    { Icon: FaHtml5, name: "HTML5", color: "text-orange-500", level: 95 },
    { Icon: FaCss3Alt, name: "CSS3", color: "text-blue-500", level: 92 },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I love working with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                z: 50
              }}
            >
              <div className="bg-card rounded-2xl p-6 tech-border hover:shadow-glow transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Skill Icon */}
                  <motion.div
                    className={`text-4xl ${skill.color} group-hover:animate-pulse`}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: "spring", bounce: 0.6 }}
                  >
                    <skill.Icon />
                  </motion.div>
                  
                  {/* Skill Name */}
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  
                  {/* Skill Level Bar */}
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-muted-foreground">Proficiency</span>
                      <span className="text-xs text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="bg-gradient-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-primary opacity-0 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="bg-card rounded-2xl p-8 tech-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gradient-electric">
              What I Bring to the Table
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A versatile skill set spanning frontend and backend development, with a passion for 
              creating seamless user experiences. I stay current with the latest technologies and 
              best practices to deliver high-quality, maintainable code.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;