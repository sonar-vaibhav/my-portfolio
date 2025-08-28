import { motion } from "framer-motion";
import TechOrbit from "./TechOrbit";
import profileImage from "@/assets/profile-image.jpg";

interface SharedProfileOrbitProps {
  layoutId: string;
  className?: string;
  imageClassName?: string;
  size?: "large" | "medium";
  useLayoutId?: boolean;
}

const SharedProfileOrbit = ({ 
  layoutId, 
  className = "", 
  imageClassName = "",
  size = "large",
  useLayoutId = false
}: SharedProfileOrbitProps) => {
  const isLarge = size === "large";
  const imageSize = isLarge ? "w-80 h-80" : "w-64 h-64";
  const borderRadius = isLarge ? "rounded-full" : "rounded-2xl";

  return (
    <motion.div
      layoutId={layoutId}
      className={`relative ${className}`}
      transition={{ type: "spring", bounce: 0.25, duration: 0.8 }}
    >
      {/* Profile Image */}
      <motion.div
        className="relative z-10"
        whileHover={{ scale: isLarge ? 1.05 : 1.02 }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
      >
        <div className={`${imageSize} ${borderRadius} overflow-hidden ${isLarge ? 'shadow-glow ring-4 ring-primary/30' : 'shadow-purple ring-4 ring-purple/30'} ${imageClassName}`}>
          <img
            src={profileImage}
            alt="Vaibhav Sonar"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Tech Orbit Animation */}
      <TechOrbit useLayoutId={useLayoutId} />
    </motion.div>
  );
};

export default SharedProfileOrbit;