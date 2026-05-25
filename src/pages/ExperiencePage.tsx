import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const ExperiencePage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Professional Experience | Vaibhav Sonar</title>
        <meta name="description" content="Web Development Intern at Sumago Infotech. Hands-on experience with HTML, CSS, JavaScript, PHP, MySQL, and React.js. Vaibhav Sonar — BE at DPU, Pimpri." />
        <link rel="canonical" href="https://vaibhavsonar.vercel.app/experience" />
        <meta property="og:title" content="Professional Experience | Vaibhav Sonar" />
        <meta property="og:url" content="https://vaibhavsonar.vercel.app/experience" />
        <meta name="twitter:title" content="Professional Experience | Vaibhav Sonar" />
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

export default ExperiencePage;
