import { motion } from "framer-motion";
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

interface TechOrbitProps {
  useLayoutId?: boolean;
}

const TechOrbit = ({ useLayoutId = false }: TechOrbitProps) => {
  const techIcons = [
    // Programming Languages
    { Icon: SiC, color: "text-gray-500", name: "C" },
    { Icon: SiCplusplus, color: "text-blue-500", name: "C++" },
    { Icon: FaCoffee, color: "text-orange-500", name: "Java" },
    { Icon: SiPython, color: "text-green-500", name: "Python" },
    { Icon: FaJs, color: "text-yellow-400", name: "JavaScript" },
    { Icon: SiTypescript, color: "text-blue-600", name: "TypeScript" },

    // Frontend
    { Icon: FaHtml5, color: "text-orange-500", name: "HTML" },
    { Icon: FaCss3Alt, color: "text-blue-500", name: "CSS" },
    { Icon: FaReact, color: "text-blue-400", name: "React" },
    { Icon: SiTailwindcss, color: "text-electric", name: "Tailwind" },
    { Icon: FaBootstrap, color: "text-purple-500", name: "Bootstrap" },
    { Icon: SiRedux, color: "text-purple-500", name: "Redux" },
    { Icon: FaReact, color: "text-orange-600", name: "Zustand" },
    { Icon: SiSass, color: "text-pink-500", name: "SASS" },

    // Backend
    { Icon: FaPhp, color: "text-purple-500", name: "PHP" },
    { Icon: FaNodeJs, color: "text-green-500", name: "Node.js" },
    { Icon: SiExpress, color: "text-foreground", name: "Express" },

    // Databases
    { Icon: SiMysql, color: "text-blue-500", name: "MySQL" },
    { Icon: SiMongodb, color: "text-green-500", name: "MongoDB" },
    { Icon: SiSupabase, color: "text-green-500", name: "Supabase" },

    // Tools
    { Icon: SiGit, color: "text-red-500", name: "Git" },
    { Icon: FaGithub, color: "text-foreground", name: "GitHub" },
    { Icon: SiPostman, color: "text-orange-500", name: "Postman" },
    { Icon: FaGithub, color: "text-blue-500", name: "VS Code" },
  ];

  const handleIconClick = (techName: string) => {
    // You can customize what happens when an icon is clicked
    console.log(`${techName} icon clicked!`);

    // Examples of what you could do:
    // - Navigate to a specific section
    // - Show a tooltip with skill details
    // - Open a modal with more information
    // - Scroll to a specific project that uses this tech
    // - Play a sound effect
    // - Trigger additional animations
  };

  return (
    <div className="absolute inset-0 w-80 h-80 flex items-center justify-center">
      <motion.div
        className="relative w-80 h-80"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformOrigin: "50% 50%",
        }}
      >
        {techIcons.map((tech, index) => {
          // Calculate angle with proper spacing - add small gaps between icons
          const totalIcons = techIcons.length;
          const spacingAngle = 360 / totalIcons; // Even distribution
          const angle = index * spacingAngle;
          const radius = 150; // Distance from center

          return (
            <div
              key={tech.name}
              className="absolute top-1/2 left-1/2 w-12 h-12"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                transformOrigin: "50% 50%",
              }}
            >
              <motion.button
                layoutId={useLayoutId ? `tech-icon-${tech.name}` : undefined}
                className={`w-12 h-12 rounded-lg bg-card/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-glow hover:shadow-electric transition-all duration-300 ${tech.color} cursor-pointer focus:outline-none focus:ring-2 focus:ring-electric focus:ring-opacity-50`}
                whileHover={{
                  scale: 1.2,
                  boxShadow: "0 0 25px hsl(var(--electric) / 0.6)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => handleIconClick(tech.name)}
                transition={{
                  type: "spring",
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  layout: {
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
                title={`Click to learn more about ${tech.name}`}
              >
                <tech.Icon className="w-6 h-6" />
              </motion.button>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TechOrbit;