import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import SectionHeader from "./SectionHeader";
import GalleryImage from "./GalleryImage";
import { galleryImages } from "./galleryData";

const PhotoGallery = () => {
  return (
    <section id="photoGallery" className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Background Blur Effects */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0B1F3A]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <SectionHeader />

        {/* Unique Bento / Gallery Grid Layout */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[260px]">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className={item.large ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}
            >
              <GalleryImage {...item} index={index} />
            </motion.div>
          ))}
        </div>

     

      </div>
    </section>
  );
};

export default PhotoGallery;