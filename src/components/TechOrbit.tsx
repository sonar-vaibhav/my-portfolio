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
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

interface TechOrbitProps {
  useLayoutId?: boolean;
}

const TechOrbit = ({ useLayoutId = false }: TechOrbitProps) => {
  const techIcons = [
    { Icon: FaReact, color: "text-blue-400", name: "React" },
    { Icon: SiNextdotjs, color: "text-foreground", name: "Next.js" },
    { Icon: FaNodeJs, color: "text-green", name: "Node.js" },
    { Icon: SiExpress, color: "text-foreground", name: "Express" },
    { Icon: SiMongodb, color: "text-green", name: "MongoDB" },
    { Icon: SiMysql, color: "text-blue-500", name: "MySQL" },
    { Icon: FaPhp, color: "text-purple", name: "PHP" },
    { Icon: FaJs, color: "text-yellow-400", name: "JavaScript" },
    { Icon: FaGithub, color: "text-foreground", name: "GitHub" },
    { Icon: FaFigma, color: "text-purple", name: "Figma" },
    { Icon: FaBootstrap, color: "text-purple", name: "Bootstrap" },
    { Icon: SiTailwindcss, color: "text-electric", name: "Tailwind" },
    { Icon: FaHtml5, color: "text-orange-500", name: "HTML5" },
    { Icon: FaCss3Alt, color: "text-blue-500", name: "CSS3" },
  ];

  return (
    <div className="absolute inset-0 w-80 h-80">
      {techIcons.map((tech, index) => {
        const angle = (index * 360) / techIcons.length;
        const delay = index * 0.1;
        
        return (
          <motion.div
            key={tech.name}
            className="absolute top-1/2 left-1/2 w-12 h-12"
            style={{
              transformOrigin: "0 0",
            }}
            initial={{ 
              rotate: angle,
              x: -24,
              y: -24,
            }}
            animate={{
              rotate: [angle, angle + 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: delay,
            }}
          >
            <motion.div
              className="absolute"
              style={{
                left: "150px",
                top: "0px",
              }}
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay: delay,
              }}
              whileHover={{ scale: 1.3, zIndex: 10 }}
            >
              <motion.div
                layoutId={useLayoutId ? `tech-icon-${tech.name}` : undefined}
                className={`w-12 h-12 rounded-lg bg-card/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-glow hover:shadow-electric transition-all duration-300 ${tech.color}`}
                whileHover={{ 
                  scale: 1.2,
                  boxShadow: "0 0 25px hsl(var(--electric) / 0.6)",
                }}
              >
                <tech.Icon className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default TechOrbit;