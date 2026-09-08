import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Currently from "@/components/Currently";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      {/* Site-wide themed background */}
      <Navigation />
      <Hero />
      <About />
      <Currently />
      <Skills />
      <Experience />
      <Projects />
      <Gallery />
      <Contact />
    </main>
  );
};

export default Index;
