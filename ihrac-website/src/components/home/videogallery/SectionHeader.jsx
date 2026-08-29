import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center px-4"
    >


      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] tracking-tight leading-[1.15]">
        Watch Our Mission in Action
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-slate-600">
        Watch inspiring moments from our awareness campaigns, community service, leadership events, healthcare initiatives, and social welfare programs.
      </p>
      <Link
        to="/media-videos"
        className="inline-flex mt-5 items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold uppercase tracking-[3px] text-[#D4AF37] mb-4 shadow-sm backdrop-blur-sm transition-transform hover:scale-105"
      >

        More Videos
      </Link>
    </motion.div>
  );
};

export default SectionHeader;