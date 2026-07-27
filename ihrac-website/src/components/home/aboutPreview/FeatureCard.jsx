import { motion } from "framer-motion";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="rounded-lg sm:rounded-xl border border-slate-200/80 bg-white p-3 sm:p-5 shadow-sm hover:shadow-xl active:shadow-xl hover:border-[#D4AF37]/50 active:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
    >
      <div>
        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg bg-[#0B1F3A] flex items-center justify-center mb-2.5 sm:mb-4 group-hover:bg-[#D4AF37] group-active:bg-[#D4AF37] transition-colors duration-300 shadow-sm">
          <Icon className="text-[#D4AF37] group-hover:text-[#0B1F3A] group-active:text-[#0B1F3A] transition-colors duration-300 w-4 h-4 sm:w-6 sm:h-6" />
        </div>

        <h3 className="text-xs sm:text-lg font-bold text-[#0B1F3A] mb-1 sm:mb-2 leading-tight sm:leading-snug line-clamp-2">
          {title}
        </h3>

        <p className="text-slate-600 text-[10px] sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
          {description}
        </p>
      </div>

      {/* Subtle Gold Bottom Accent line */}
      <div className="w-full h-[2px] bg-slate-100 group-hover:bg-[#D4AF37] group-active:bg-[#D4AF37] transition-colors duration-300 mt-3 sm:mt-5 rounded-full" />
    </motion.div>
  );
};

export default FeatureCard;