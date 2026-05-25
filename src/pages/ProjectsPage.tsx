import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const ProjectsPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects | Vaibhav Sonar Portfolio</title>
        <meta name="description" content="Explore 6 projects by Vaibhav Sonar — BE Computer Engineering student at Dr. D. Y. Patil Institute of Technology (DPU), Pimpri. EZRooms, MailCraft AI, DhanSarthi, OrderEase and more." />
        <link rel="canonical" href="https://vaibhavsonar.vercel.app/projects" />
        <meta property="og:title" content="Projects | Vaibhav Sonar Portfolio" />
        <meta property="og:url" content="https://vaibhavsonar.vercel.app/projects" />
        <meta name="twitter:title" content="Projects | Vaibhav Sonar Portfolio" />
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

export default ProjectsPage;
