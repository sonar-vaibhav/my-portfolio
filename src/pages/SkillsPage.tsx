import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const SkillsPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Skills & Tech Stack | Vaibhav Sonar</title>
        <meta name="description" content="Full-stack developer tech stack: React, Node.js, TypeScript, MongoDB, Express, PHP, MySQL, Tailwind CSS, and more. Vaibhav Sonar — BE Computer Engineering at DPU, Pimpri." />
        <link rel="canonical" href="https://vaibhavsonar.vercel.app/skills" />
        <meta property="og:title" content="Skills & Tech Stack | Vaibhav Sonar" />
        <meta property="og:url" content="https://vaibhavsonar.vercel.app/skills" />
        <meta name="twitter:title" content="Skills & Tech Stack | Vaibhav Sonar" />
      </Helmet>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default SkillsPage;
