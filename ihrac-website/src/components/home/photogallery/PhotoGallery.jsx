import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import SectionHeader from "./SectionHeader";
import GalleryImage from "./GalleryImage";
import { galleryImages } from "./galleryData";

const PhotoGallery = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
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

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 lg:mt-24 text-center bg-white border border-slate-200/80 rounded-2xl sm:rounded-[32px] p-8 sm:p-12 shadow-sm relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-bl-full pointer-events-none" />

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
            Every Picture Tells a Story
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-lg leading-relaxed text-slate-600">
            From awareness campaigns and medical camps to environmental drives and community outreach programs, every event reflects our commitment to serving society.
          </p>

          <button className="group mt-8 sm:mt-10 inline-flex items-center gap-3 rounded-full bg-[#0B1F3A] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg shadow-[#0B1F3A]/20 transition-all hover:bg-[#123C68] hover:scale-105 active:scale-105">
            <span>View Complete Gallery</span>
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1.5 group-active:translate-x-1.5"
            />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default PhotoGallery;