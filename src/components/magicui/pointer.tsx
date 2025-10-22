"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PointerProps {
    children?: React.ReactNode;
    className?: string;
    image?: string; // allow passing image path
}

export function Pointer({ children, className, image = "/pointer.png" }: PointerProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767.98px)");
        const updateIsMobile = () => setIsMobile(mq.matches);
        updateIsMobile();
        mq.addEventListener("change", updateIsMobile);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            mq.removeEventListener("change", updateIsMobile);
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    if (isMobile) {
        return null;
    }

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className={cn(
                    "fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999]",
                    className
                )}
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    scale: isHovering ? 1.2 : 1,
                }}
                transition={{
                    type: "spring",
                    mass: 0.6,
                    stiffness: 150,
                    damping: 15,
                }}
            >
                {children || (
                    <img
                        src={image}
                        alt="Custom Cursor"
                        className="w-6 h-6"
                    />
                )}
            </motion.div>

            {/* Cursor ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.6 : 0.2,
                }}
                transition={{
                    type: "spring",
                    mass: 0.8,
                    stiffness: 100,
                    damping: 20,
                }}
            >
                <div className="w-full h-full rounded-full border-2 border-blue-500" />
            </motion.div>
        </>
    );
}
