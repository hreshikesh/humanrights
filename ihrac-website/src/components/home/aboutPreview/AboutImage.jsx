import { motion } from "framer-motion";
import mainImage from "../../../assets/about/about.webp";
import eventImage from "../../../assets/about/about2.webp";
import { ShieldCheck, Building2 } from "lucide-react";

const AboutImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative max-w-xl mb-10 mx-auto lg:max-w-none w-full py-6 sm:py-0"
    >
      {/* Main Image Container with Collage Elements */}
      <div className="relative p-2 sm:p-4 lg:p-0">
        
        {/* Main Image Frame */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 relative"
        >
          <img
            src={mainImage}
            alt="International Human Rights Action Council"
            className="w-full h-[340px] sm:h-[460px] lg:h-[540px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/50 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Secondary Overlay Image (Collage effect active on mobile too) */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          animate={{ y: [0, -6, 0] }}
          transition={{
            y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
          className="absolute -bottom-4 -right-1 sm:-bottom-8 sm:-right-6 lg:-bottom-10 lg:-right-8 w-32 sm:w-56 h-24 sm:h-36 rounded-xl border-2 sm:border-4 border-white shadow-2xl overflow-hidden z-20 cursor-pointer"
        >
          <motion.img
            src={eventImage}
            alt="Community Initiative"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 48+ Sectors Floating Card (Active on mobile collage) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 1.03, y: -4 }}
          className="absolute top-3 -left-2 sm:top-6 sm:-left-6 bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl shadow-xl p-2.5 sm:p-4 flex items-center gap-2 sm:gap-3.5 border border-slate-100 cursor-pointer z-20"
        >
          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-[#0B1F3A] flex items-center justify-center shrink-0 shadow-sm">
            <ShieldCheck className="text-[#D4AF37]" size={16} />
          </div>
          <div>
            <h3 className="text-base sm:text-2xl font-extrabold text-[#0B1F3A] leading-none">
              48+
            </h3>
            <p className="text-[9px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
              Working Sectors
            </p>
          </div>
        </motion.div>

        {/* Government Compliance Floating Card (Active on mobile collage) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          animate={{ y: [0, 6, 0] }}
          transition={{
            y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 1.03, y: -4 }}
          className="absolute bottom-6 -left-2 sm:bottom-12 sm:-left-6 bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl shadow-xl p-2.5 sm:p-4 flex items-center gap-2 sm:gap-3.5 border border-slate-100 cursor-pointer z-20"
        >
          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-[#D4AF37] flex items-center justify-center shrink-0 shadow-sm">
            <Building2 className="text-[#0B1F3A]" size={16} />
          </div>
          <div>
            <h4 className="font-bold text-[11px] sm:text-sm text-[#0B1F3A] leading-tight">
              Govt. of India
            </h4>
            <p className="text-[9px] sm:text-[11px] text-slate-500 font-medium">
              Registered
            </p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default AboutImage;