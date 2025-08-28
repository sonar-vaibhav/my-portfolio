import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TechOrbit from "./TechOrbit";
import profileImage from "@/assets/profile-image.jpg";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaFileDownload 
} from "react-icons/fa";

const Hero = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:vaibhav@example.com";
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
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hello, I'm{" "}
              <span className="text-gradient">
                Vaibhav Sonar
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full-stack developer passionate about creating modern, scalable web applications
              with cutting-edge technologies and beautiful user experiences.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                onClick={() => window.open("https://github.com/vaibhavsonar", "_blank")}
              >
                <FaGithub className="mr-2 group-hover:animate-pulse" />
                GitHub
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                className="hover:shadow-electric transition-all duration-300 group"
                onClick={() => window.open("https://linkedin.com/in/vaibhavsonar", "_blank")}
              >
                <FaLinkedin className="mr-2 group-hover:animate-pulse" />
                LinkedIn
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="tech-border hover:bg-primary/10 transition-all duration-300 group"
                onClick={handleEmailClick}
              >
                <FaEnvelope className="mr-2 group-hover:animate-pulse" />
                Email
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="tech-border hover:bg-purple/10 transition-all duration-300 group"
                onClick={handleResumeClick}
              >
                <FaFileDownload className="mr-2 group-hover:animate-pulse" />
                Resume
              </Button>
              
              <Button
                size="lg"
                className="bg-gradient-electric hover:shadow-purple transition-all duration-300"
                onClick={scrollToContact}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image with tech orbit */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Profile Image */}
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
              >
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow ring-4 ring-primary/30">
                  <img
                    src={profileImage}
                    alt="Vaibhav Sonar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Tech Orbit Animation */}
              <TechOrbit />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;