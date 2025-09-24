import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const performScroll = () => {
      const navEl = navRef.current;
      const offset = (navEl?.offsetHeight ?? 64) + 8;
      const rect = target.getBoundingClientRect();
      const targetY = window.scrollY + rect.top - offset;

      // Temporarily disable CSS smooth scroll to prevent double-smoothing conflicts
      const htmlEl = document.documentElement as HTMLElement;
      const previousBehavior = htmlEl.style.scrollBehavior;
      htmlEl.style.scrollBehavior = "auto";
      window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      // Restore after the scroll kicks in
      setTimeout(() => {
        htmlEl.style.scrollBehavior = previousBehavior;
      }, 400);
    };

    const isMobile = window.innerWidth < 768;
    if (isMobile && isMenuOpen) {
      setIsMenuOpen(false);
      // Wait for menu collapse/layout to settle before measuring
      setTimeout(performScroll, 300);
    } else {
      performScroll();
    }
  };

  return (
    <motion.nav
      className={`site-nav fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-primary/20 shadow-glow"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      ref={(el) => (navRef.current = el)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Logo */}
          <motion.div
            className="text-3xl font-bold text-gradient cursor-pointer font-irish"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("home")}
          >
            &nbsp;VS
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden pointer-events-auto">
            <motion.button
              className="p-2 rounded-lg hover:bg-secondary touch-manipulation"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(prev => !prev)}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <motion.div
          className="md:hidden px-4 pb-2 pointer-events-auto relative z-[100]"
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="mt-2 space-y-2 bg-background/90 backdrop-blur-md rounded-lg border border-primary/20 p-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors touch-manipulation ${
                  activeSection === item.id ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;