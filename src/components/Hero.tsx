import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SharedProfileOrbit from "./SharedProfileOrbit";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload
} from "react-icons/fa";

const Hero = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:sonarvebs@gmail.com";
  };

  const handleResumeClick = () => {
    // This would open the resume PDF
    window.open("/resume.pdf", "_blank");
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hello, I'm{" "}
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
                Vaibhav Sonar
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8 text-justify"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A self-driven Full-Stack Developer passionate about solving real-world problems with clean, scalable, and modern web applications. Always exploring new technologies and turning ideas into impactful digital experiences.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* SVG Definitions for Squircle Clip Path */}
              <svg width={0} height={0} style={{ position: 'absolute' }}>
                <defs>
                  <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
                    <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
                  </clipPath>
                </defs>
              </svg>

              {/* Social Media Buttons Row */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {/* GitHub Button */}
                <div className="relative group">
                  <div
                    style={{ clipPath: 'url(#squircleClip)' }}
                    className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                    onClick={() => window.open("https://github.com/sonar-vaibhav", "_blank")}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  {/* Cool Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                    <span className="text-electric">🚀</span> GitHub
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                  </div>
                </div>

                {/* LinkedIn Button */}
                <div className="relative group">
                  <div
                    style={{ clipPath: 'url(#squircleClip)' }}
                    className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                    onClick={() => window.open("https://linkedin.com/in/sonar-vaibhav", "_blank")}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  {/* Cool Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                    <span className="text-electric">👋</span> Let's Connect
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                  </div>
                </div>

                {/* Email Button */}
                <div className="relative group">
                  <div
                    style={{ clipPath: 'url(#squircleClip)' }}
                    className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg border border-red-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                    onClick={handleEmailClick}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z" />
                    </svg>
                  </div>
                  {/* Cool Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                    <span className="text-electric">📧</span> Send me an email
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button
                  variant="outline"
                  size="lg"
                  className="tech-border hover:bg-purple/10 transition-all duration-300 group relative"
                  onClick={handleResumeClick}
                  title="Resume"
                >
                  <FaFileDownload className="mr-2 group-hover:animate-pulse" />
                  Resume
                  {/* Cool Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                    <span className="text-electric">📄</span> View my resume
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                  </div>
                </Button>

                <Button
                  size="lg"
                  className="bg-gradient-electric hover:shadow-purple transition-all duration-300 relative"
                  onClick={scrollToContact}
                  title="Contact Me"
                >
                  Contact Me
                  {/* Cool Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                    <span className="text-electric">💬</span> Let's start a conversation
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                  </div>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image with tech orbit */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <SharedProfileOrbit
              layoutId="profile-orbit"
              useLayoutId={true}
              size="large"
              className="lg:ml-auto"
              section="hero"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;