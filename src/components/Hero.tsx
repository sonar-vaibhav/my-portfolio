import { motion } from "framer-motion";
import { FaArrowDown, FaArrowUpRightFromSquare, FaGithub, FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="flex min-h-screen items-center px-5 pb-16 pt-28 sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-end gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.28em] text-primary">Full-stack developer · Pune, India</p>
          <h1 className="max-w-4xl text-6xl font-semibold leading-[0.95] text-foreground sm:text-8xl lg:text-[clamp(5rem,10vw,9.5rem)]">Building useful <span className="text-primary">digital</span> things.</h1>
          <div className="mt-10 flex max-w-2xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-base leading-7 text-muted-foreground">I&apos;m Vaibhav Sonar — a computer engineering student who turns real-world problems into thoughtful web products, AI tools, and reliable systems.</p>
            <button onClick={scrollToContact} className="group flex shrink-0 items-center gap-3 text-sm font-medium text-foreground"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-y-1"><FaArrowDown /></span>Let&apos;s talk</button>
          </div>
          <div className="mt-14 flex items-center gap-5 text-sm text-muted-foreground"><a href="https://github.com/sonar-vaibhav" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary"><FaGithub /> GitHub</a><a href="https://linkedin.com/in/sonar-vaibhav" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary"><FaLinkedin /> LinkedIn</a><a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary">Resume <FaArrowUpRightFromSquare className="text-xs" /></a></div>
        </motion.div>
        <motion.div className="hidden border-l border-border pl-8 lg:block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }}>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Currently</p>
          <p className="mt-4 text-2xl leading-tight text-foreground">Learning, shipping, and looking for the next meaningful problem to solve.</p>
          <div className="mt-16 border-t border-border pt-4 text-sm text-muted-foreground"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent" />Available for internships & collaborations</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
