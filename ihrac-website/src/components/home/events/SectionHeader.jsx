import { motion } from "framer-motion";

const SectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
        Latest Events
      </span>

      <h2 className="mt-6 text-5xl font-bold text-[#0B1F3A]">
        Join Our Upcoming & Recent Activities
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Stay informed about our awareness campaigns,
        community outreach programs, environmental
        initiatives, healthcare camps, workshops,
        and leadership events.
      </p>
    </motion.div>
  );
};

export default SectionHeader;