import { motion } from "framer-motion";

const SectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto px-4"
    >
    

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] tracking-tight leading-[1.15]">
        Capturing Moments of Change
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-slate-600">
        Explore photographs from our awareness campaigns, environmental initiatives, healthcare camps, leadership programs, and community welfare activities across India.
      </p>
        
    </motion.div>
  );
};

export default SectionHeader;