import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
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

type IconState = 'idle' | 'exploding' | 'destroyed';

const TechOrbit = ({ useLayoutId = false }: TechOrbitProps) => {
  const [iconStates, setIconStates] = useState<Record<string, IconState>>({});
  const [removalAngles, setRemovalAngles] = useState<Record<string, number>>({});
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

  const isMobile = useIsMobile();

  const handleIconClick = (techName: string) => {
    // Capture current angle for this icon based on visible layout (include exploding to keep slot)
    const visibleForAngle = techIcons.filter((t) => {
      const state = iconStates[t.name] ?? 'idle';
      return state !== 'destroyed';
    });
    const idx = visibleForAngle.findIndex((t) => t.name === techName);
    if (idx >= 0 && visibleForAngle.length > 0) {
      const spacing = 360 / visibleForAngle.length;
      const angle = idx * spacing;
      setRemovalAngles((prev) => ({ ...prev, [techName]: angle }));
    }

    setIconStates((prev) => {
      const current = prev[techName] ?? 'idle';
      if (current !== 'idle') return prev;
      return { ...prev, [techName]: 'exploding' };
    });

    // Delay removal by mili-seconds
    setTimeout(() => {
      setIconStates((prev) => ({ ...prev, [techName]: 'destroyed' }));
    }, 300);
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
        {(() => {
          // Keep exploding icons in layout so gap fill is delayed by 2s
          const visibleIcons = techIcons.filter((t) => {
            const state = iconStates[t.name] ?? 'idle';
            return state !== 'destroyed';
          });
          return visibleIcons.map((tech, index) => {
            const totalIcons = visibleIcons.length;
            const spacingAngle = 360 / totalIcons;
            const angle = index * spacingAngle;
            const radius = isMobile ? 160 : 200;
            const state = iconStates[tech.name] ?? 'idle';

            return (
              <div
                key={tech.name}
                className="absolute top-1/2 left-1/2 w-12 h-12"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                  transformOrigin: "50% 50%",
                }}
              >
                {state === 'idle' && (
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
                )}
              </div>
            );
          });
        })()}

        {/* Explosions rendered at cached removal angles */}
        {techIcons
          .filter((t) => (iconStates[t.name] ?? 'idle') === 'exploding')
          .map((tech) => {
            const angle = removalAngles[tech.name] ?? 0;
            const radius = isMobile ? 160 : 200;
            return (
              <div
                key={`explosion-${tech.name}`}
                className={`absolute top-1/2 left-1/2 w-12 h-12 ${tech.color}`}
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                  transformOrigin: "50% 50%",
                }}
              >
                {Array.from({ length: 14 }).map((_, i, arr) => {
                  const angleDeg = (360 / arr.length) * i + Math.random() * 20 - 10;
                  const distance = 30 + Math.random() * 24; // px
                  const rad = (angleDeg * Math.PI) / 180;
                  const dx = Math.cos(rad) * distance;
                  const dy = Math.sin(rad) * distance;
                  const rot = -30 + Math.random() * 60;
                  const duration = 0.6 + Math.random() * 0.4;
                  const delay = Math.random() * 0.05;
                  return (
                    <motion.span
                      key={i}
                      className="absolute left-1/2 top-1/2"
                      style={{ width: 6, height: 6, marginLeft: -3, marginTop: -3, borderRadius: 2, backgroundColor: 'currentColor' }}
                      initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
                      animate={{ x: dx, y: dy, opacity: 0, scale: 0.9, rotate: rot }}
                      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
                    />
                  );
                })}
              </div>
            );
          })}
      </motion.div>
    </div>
  );
};

export default TechOrbit;