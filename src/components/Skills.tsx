import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/data/skills";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="min-h-screen py-10 md:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 flex">
      <div className="max-w-7xl mx-auto w-full" ref={ref}>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-electric uppercase tracking-widest mb-2">What I Work With</p>
          <h2 className="text-4xl font-bold mb-4">
            Tools I <span className="text-gradient">build with</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Technologies I use to turn ideas into working products.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-8 md:space-y-12 text-left">
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
                className="uppercase tracking-wide text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-muted-foreground/80 lg:w-72 lg:flex-shrink-0"
              >
                {category.title}
              </motion.h3>

              {/* Skills grid - icon + label pairs */}
              <motion.div
                className="flex flex-wrap gap-x-3 gap-y-3 md:gap-x-4 md:gap-y-4 items-center"
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
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: (categoryIndex * 0.2) + (index * 0.05) + 0.3,
                      type: "spring",
                      bounce: 0.4,
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
