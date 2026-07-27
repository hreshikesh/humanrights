import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const achievements = [
  "Government Registered",
  "Human Rights Advocacy",
  "Community Empowerment",
  "Sustainable Development",
];

const AchievementStrip = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-16 bg-white/90 backdrop-blur-md rounded-2xl p-5 sm:p-8 border border-slate-200/80 shadow-sm max-w-5xl mx-auto"
    >
      {/* Grid layout ensuring strictly 2 items per row on mobile, expanding to 4 on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ y: -2, scale: 1.01 }}
            className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-[#D4AF37]/50 active:border-[#D4AF37]/50 transition-all duration-300 group cursor-pointer shadow-sm"
          >
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-active:bg-[#D4AF37] transition-colors duration-300 shadow-sm">
              <CheckCircle2
                className="text-[#D4AF37] group-hover:text-[#0B1F3A] group-active:text-[#0B1F3A] transition-colors duration-300"
                size={16}
              />
            </div>
            <span className="font-bold text-xs sm:text-sm text-[#0B1F3A] tracking-wide leading-tight">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AchievementStrip;