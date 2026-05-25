import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const AboutPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Vaibhav Sonar | Full-Stack Developer Mumbai</title>
        <meta name="description" content="Learn about Vaibhav Sonar — BE Computer Engineering at Dr. D. Y. Patil Institute of Technology (DPU), Pimpri, and Diploma from SSVPS B.S. Deore Polytechnic, Dhule. MERN full-stack developer from PCMC, Pune." />
        <link rel="canonical" href="https://vaibhavsonar.vercel.app/about" />
        <meta property="og:title" content="About Vaibhav Sonar | Full-Stack Developer Mumbai" />
        <meta property="og:url" content="https://vaibhavsonar.vercel.app/about" />
        <meta name="twitter:title" content="About Vaibhav Sonar | Full-Stack Developer Mumbai" />
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

export default AboutPage;
