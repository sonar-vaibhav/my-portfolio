import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const educationData = [
  { year: "2024 — 2027", degree: "Bachelor of Engineering", field: "Computer Engineering", institution: "Dr. D. Y. Patil Institute of Technology, Pimpri, Pune", result: "CGPA 9.33" },
  { year: "2021 — 2024", degree: "Diploma", field: "Computer Engineering", institution: "SSVPS B.S. Deore Polytechnic, Dhule", result: "92.86%" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="about" className="border-t border-border px-5 py-24 sm:px-8 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">01 / About</p><h2 className="mt-5 max-w-sm text-4xl font-semibold leading-tight sm:text-5xl">A practical developer with a curious mind.</h2></div>
          <div><p className="max-w-2xl text-xl leading-8 text-foreground">I care about the details that make software feel simple: clear structure, useful interfaces, and technology that serves people rather than distracting them.</p><p className="mt-6 max-w-2xl leading-7 text-muted-foreground">I&apos;m a Computer Engineering student with hands-on experience across React, Node.js, PHP, MongoDB, and AI-powered products. From university procurement workflows to tools that live inside Gmail, I build things that are meant to be used.</p><div className="mt-16 grid gap-8 border-t border-border pt-6 sm:grid-cols-2">{educationData.map((edu) => <div key={edu.year}><p className="font-mono text-xs text-primary">{edu.year}</p><h3 className="mt-3 text-lg font-medium">{edu.degree}</h3><p className="mt-1 text-sm text-muted-foreground">{edu.field}</p><p className="mt-4 text-sm leading-6 text-muted-foreground">{edu.institution}</p><p className="mt-3 text-sm font-medium text-accent">{edu.result}</p></div>)}</div></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
