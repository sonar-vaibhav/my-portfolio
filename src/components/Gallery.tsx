import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { galleryItems } from "@/data/gallery";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-electric uppercase tracking-widest mb-2">Gallery</p>
          <h2 className="text-4xl font-bold mb-4">
            A look at <span className="text-gradient">the work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl overflow-hidden tech-border"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Link indicator on hover */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${item.title}`}
                  className="absolute inset-0 z-10"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
