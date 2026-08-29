// SectionHeader.jsx
import { motion } from "framer-motion";

const SectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold uppercase tracking-[3px] text-[#D4AF37] mb-4">
        <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
        Our Working Sectors
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] tracking-tight leading-[1.15]">
        Empowering Communities Across{" "}
        <span className="text-[#D4AF37]">48 Areas</span> of Development
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-slate-600">
        Our organization works across multiple sectors including environmental protection, education, healthcare, women empowerment, human rights, rural development and many other initiatives.
      </p>
    </motion.div>
  );
};

export default SectionHeader;