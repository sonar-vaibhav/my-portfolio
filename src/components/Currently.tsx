import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Currently = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    { label: "Building", text: "Full-stack applications and experimenting with AI-powered products." },
    { label: "Exploring", text: "Better product experiences, scalable backend patterns, and modern web technologies." },
    { label: "Always", text: "Looking for interesting problems worth building around." },
  ];

  return (
    <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          className="bg-card/60 backdrop-blur-sm rounded-2xl tech-border p-8 lg:p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-electric"></span>
            </span>
            <h2 className="text-2xl font-bold text-gradient-electric">Currently</h2>
          </div>

          <div className="space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              >
                <span className="text-sm font-semibold text-primary uppercase tracking-wide sm:w-28 flex-shrink-0">
                  {item.label}
                </span>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Currently;
