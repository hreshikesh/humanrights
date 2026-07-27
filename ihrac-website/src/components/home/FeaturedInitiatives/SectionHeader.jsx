import { motion } from "framer-motion";

const SectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="h-px w-10 bg-[#D4AF37]" />
        <span className="text-[#D4AF37] font-bold uppercase tracking-[3px] text-xs sm:text-sm">
          Featured Initiatives
        </span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#0B1F3A] tracking-tight leading-[1.2]">
        Creating Impact Through Action
      </h2>

      <p className="mt-4 sm:mt-5 text-sm sm:text-lg leading-relaxed text-slate-600 max-w-2xl">
        Every initiative reflects our commitment to protecting human rights, empowering communities, and fostering sustainable development across India.
      </p>
    </motion.div>
  );
};

export default SectionHeader;