import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaSnowflake } from "react-icons/fa";
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
  FaCoffee,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiSupabase,
  SiGit,
  SiPostman,
  SiPython,
  SiCplusplus,
  SiC,
} from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "PROGRAMMING LANGUAGES",
      skills: [
        { Icon: SiC, name: "C", color: "text-gray-500", level: 70 },
        { Icon: SiCplusplus, name: "C++", color: "text-blue-500", level: 75 },
        { Icon: FaCoffee, name: "Java", color: "text-orange-500", level: 80 },
        { Icon: SiPython, name: "Python", color: "text-green-500", level: 85 },
        { Icon: FaJs, name: "JavaScript", color: "text-yellow-400", level: 92 },
        // { Icon: SiTypescript, name: "TypeScript", color: "text-blue-600", level: 88 },
      ]
    },
    {
      title: "FRONTEND",
      skills: [
        { Icon: FaHtml5, name: "HTML", color: "text-orange-500", level: 95 },
        { Icon: FaCss3Alt, name: "CSS", color: "text-blue-500", level: 92 },
        { Icon: FaReact, name: "React", color: "text-blue-400", level: 90 },
        { Icon: SiTailwindcss, name: "Tailwind", color: "text-electric", level: 90 },
        { Icon: FaBootstrap, name: "Bootstrap", color: "text-purple-500", level: 85 },
        // { Icon: SiRedux, name: "Redux", color: "text-purple-500", level: 85 },
      ]
    },
    {
      title: "BACKEND",
      skills: [
        { Icon: FaPhp, name: "PHP", color: "text-purple-500", level: 85 },
        { Icon: FaNodeJs, name: "Node.js", color: "text-green-500", level: 88 },
        { Icon: SiExpress, name: "Express", color: "text-foreground", level: 85 },
      ]
    },
    {
      title: "DATABASES",
      skills: [
        { Icon: SiMysql, name: "MySQL", color: "text-blue-500", level: 85 },
        { Icon: SiMongodb, name: "MongoDB", color: "text-green-500", level: 80 },
        { Icon: SiSupabase, name: "Supabase", color: "text-green-500", level: 85 },
      ]
    },
    {
      title: "TOOLS",
      skills: [
        { Icon: SiGit, name: "Git", color: "text-red-500", level: 88 },
        { Icon: FaGithub, name: "GitHub", color: "text-foreground", level: 88 },
        { Icon: SiPostman, name: "Postman", color: "text-orange-500", level: 85 },
        // { Icon: FaGithub, name: "VS Code", color: "text-blue-500", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-10 md:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 flex">
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

        

        {/* Skills Categories - Layout matching the image */}
        <div className="space-y-8 md:space-y-12 text-left ">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              {/* Category Title - Left side */}
            <motion.h3
              className="uppercase tracking-wide text-base sm:text-lg md:text-xl lg:text-3xl font-extrabold text-muted-foreground/80 lg:w-72 lg:flex-shrink-0"
                layoutId={`category-title-${category.title}`}
              >
                {category.title}
              </motion.h3>

            {/* Skills grid - icon + label pairs */}
            <motion.div
              className="flex flex-wrap gap-x-3 gap-y-3 md:gap-x-4 md:gap-y-4 items-center"
                layoutId={`skills-row-${category.title}`}
                transition={{
                  type: "spring",
                  bounce: 0.15,
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                  className="group relative flex items-center gap-1"
                    layoutId={`tech-icon-${skill.name}`}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: (categoryIndex * 0.2) + (index * 0.05) + 0.3,
                      type: "spring",
                      bounce: 0.4,
                      layout: {
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }
                    }}
                  whileHover={{ scale: 1.05, z: 50 }}
                  >
                  <motion.div
                    className={`text-3xl ${skill.color} w-8 h-8 md:w-12 md:h-12 flex items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    <skill.Icon className="w-5 h-5 md:w-7 md:h-7" />
                  </motion.div>
                  <h4 className="font-semibold text-xs sm:text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;