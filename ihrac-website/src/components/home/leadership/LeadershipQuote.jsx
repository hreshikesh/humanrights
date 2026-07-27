import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const LeadershipQuote = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="mt-20 lg:mt-24 bg-gradient-to-br from-[#0B1F3A] to-[#122b4d] rounded-2xl sm:rounded-[32px] p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-xl border border-white/10"
    >
      {/* Background Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

      <Quote
        size={60}
        className="absolute top-6 left-6 sm:top-8 sm:left-8 text-[#D4AF37] opacity-20"
      />

      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6 tracking-tight">
        Together We Build a Better Tomorrow
      </h3>

      <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
        Our commitment is to uphold human dignity, empower communities, and create a society built on justice, equality, compassion, and sustainable development.
      </p>
    </motion.div>
  );
};

export default LeadershipQuote;