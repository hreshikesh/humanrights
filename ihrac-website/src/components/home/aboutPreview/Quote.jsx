import { motion } from "framer-motion";
import { Quote as QuoteIcon } from "lucide-react";

const Quote = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-12  bg-gradient-to-r from-[#0B1F3A] via-[#122e52] to-[#0B1F3A] relative overflow-hidden text-white border-y border-[#D4AF37]/30 shadow-xl my-8"
    >
      {/* Decorative Background Elements */}
      <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Quote Icon Badge */}
        <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] mb-5 shadow-inner">
          <QuoteIcon size={24} />
        </div>

        {/* Main Quote Text */}
        <blockquote className="text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight leading-relaxed italic text-slate-100">
          &ldquo;Empowering communities by protecting dignity, equality, and justice for all.&rdquo;
        </blockquote>

        {/* Attribution / Subtitle */}
        <div className="mt-6 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[3px] text-[#D4AF37]">
            International Human Rights Action Council
          </span>
          <span className="w-8 h-[2px] bg-[#D4AF37]" />
        </div>
      </div>
    </motion.section>
  );
};

export default Quote;