import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaReact, FaNodeJs, FaJs, FaGithub, FaFigma, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiSupabase, SiGit, SiPostman } from "react-icons/si";

const planets = [
  { name: "React", detail: "Component architecture", Icon: FaReact, orbit: "orbit-one", color: "text-cyan-400", position: "planet-react" },
  { name: "TypeScript", detail: "Reliable interfaces", Icon: SiTypescript, orbit: "orbit-one", color: "text-blue-400", position: "planet-typescript" },
  { name: "Next.js", detail: "Fast, flexible products", Icon: SiNextdotjs, orbit: "orbit-two", color: "text-foreground", position: "planet-next" },
  { name: "Node.js", detail: "Practical backend systems", Icon: FaNodeJs, orbit: "orbit-two", color: "text-lime-400", position: "planet-node" },
  { name: "Tailwind", detail: "Intentional visual systems", Icon: SiTailwindcss, orbit: "orbit-three", color: "text-sky-400", position: "planet-tailwind" },
  { name: "Supabase", detail: "Connected data layers", Icon: SiSupabase, orbit: "orbit-three", color: "text-emerald-400", position: "planet-supabase" },
  { name: "GitHub", detail: "Shipping with confidence", Icon: FaGithub, orbit: "orbit-three", color: "text-foreground", position: "planet-github" },
];

const constellation = [
  { name: "JavaScript", Icon: FaJs, color: "text-yellow-300" },
  { name: "Express", Icon: SiExpress, color: "text-foreground" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-emerald-400" },
  { name: "Git", Icon: SiGit, color: "text-orange-400" },
  { name: "Figma", Icon: FaFigma, color: "text-pink-400" },
  { name: "HTML / CSS", Icon: FaHtml5, color: "text-orange-500" },
  { name: "Postman", Icon: SiPostman, color: "text-orange-400" },
  { name: "CSS", Icon: FaCss3Alt, color: "text-blue-400" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState(planets[0]);

  return (
    <section id="skills" className="border-t border-border px-5 py-24 sm:px-8 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">04 / My toolkit</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">A small universe of tools.</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">The technologies I reach for when turning a loose idea into something clear, useful, and real.</p>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_280px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="solar-system relative mx-auto aspect-square w-full max-w-[580px]"
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="solar-core">
              <div className="solar-core-inner">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Vaibhav</span>
                <strong className="mt-2 block text-sm font-medium">building<br />with intent</strong>
              </div>
            </div>
            {planets.map((planet) => (
              <button
                key={planet.name}
                type="button"
                onClick={() => setSelected(planet)}
                className={`planet ${planet.position} group ${selected.name === planet.name ? "planet-active" : ""}`}
                aria-label={`Select ${planet.name}`}
              >
                <span className={`planet-icon ${planet.color}`}><planet.Icon /></span>
                <span className="planet-label">{planet.name}</span>
              </button>
            ))}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="border-l border-border pl-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Currently exploring</p>
            <div className="mt-5 flex items-center gap-4">
              <span className={`text-3xl ${selected.color}`}><selected.Icon /></span>
              <div><h3 className="text-xl font-semibold">{selected.name}</h3><p className="mt-1 text-sm text-muted-foreground">{selected.detail}</p></div>
            </div>
            <div className="my-7 h-px bg-border" />
            <p className="text-sm leading-6 text-muted-foreground">Click a planet to explore the tools behind my work.</p>
            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
              {constellation.map(({ name, Icon, color }) => <span key={name} className="flex items-center gap-2 text-xs text-muted-foreground"><Icon className={`text-base ${color}`} />{name}</span>)}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Skills;

/* Add these rules to the global stylesheet if the project does not already define the orbit classes. */
