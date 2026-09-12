import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const position = window.scrollY + 140;
      const current = [...navItems].reverse().find(({ id }) => {
        const section = document.getElementById(id);
        return section && section.offsetTop <= position;
      });
      if (current) setActiveSection(current.id);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      ref={(element) => (navRef.current = element)}
      className={`site-nav fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${isScrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <button onClick={() => scrollToSection("home")} className="font-mono text-sm font-semibold tracking-[0.2em] text-foreground" aria-label="Go to home">
          VS<span className="text-primary">.</span>
        </button>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className={`relative py-2 text-sm transition-colors ${activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
              {item.label}
              {activeSection === item.id && <motion.span layoutId="active-nav" className="absolute -bottom-1 left-0 right-0 h-px bg-accent" />}
            </button>
          ))}
        </div>
        <button className="rounded-sm border border-border px-3 py-2 text-sm text-muted-foreground md:hidden" onClick={() => setIsMenuOpen((open) => !open)} aria-expanded={isMenuOpen} aria-label="Toggle navigation">
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
      {isMenuOpen && <div className="border-t border-border bg-background px-5 py-4 md:hidden"><div className="flex flex-col gap-1">{navItems.map((item) => <button key={item.id} onClick={() => scrollToSection(item.id)} className="px-2 py-3 text-left text-sm text-muted-foreground hover:text-primary">{item.label}</button>)}</div></div>}
    </motion.nav>
  );
};

export default Navigation;
