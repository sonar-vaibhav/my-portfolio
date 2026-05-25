import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const ContactPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Vaibhav Sonar | Full-Stack Developer</title>
        <meta name="description" content="Get in touch with Vaibhav Sonar — MERN full-stack developer from PCMC, Pune, BE Computer Engineering at Dr. D. Y. Patil Institute of Technology, Pimpri. Hire me for web development, React projects, or collaboration." />
        <link rel="canonical" href="https://vaibhavsonar.vercel.app/contact" />
        <meta property="og:title" content="Contact Vaibhav Sonar | Full-Stack Developer" />
        <meta property="og:url" content="https://vaibhavsonar.vercel.app/contact" />
        <meta name="twitter:title" content="Contact Vaibhav Sonar | Full-Stack Developer" />
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

export default ContactPage;
