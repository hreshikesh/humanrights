import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SectorCard = ({
  icon: Icon,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      whileTap={{
        y: -6,
        scale: 1.01,
      }}
      className="group relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 p-5 sm:p-8 shadow-sm hover:shadow-xl active:shadow-xl hover:border-[#D4AF37]/50 active:border-[#D4AF37]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
    >
      {/* Top Gold Border Accent Line */}
      <div className="absolute top-0 left-0 h-1 w-0 bg-[#D4AF37] group-hover:w-full group-active:w-full transition-all duration-500" />

      <div>
        {/* Icon Container */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#0B1F3A]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#0B1F3A] group-active:bg-[#0B1F3A] transition-colors duration-300 shadow-sm">
          <Icon
            size={22}
            className="text-[#0B1F3A] group-hover:text-[#D4AF37] group-active:text-[#D4AF37] transition-colors duration-300 sm:w-[30px] sm:h-[30px]"
          />
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-[#0B1F3A] mb-2 sm:mb-4 tracking-tight leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">
          {description}
        </p>
      </div>

      {/* Action Button */}
      <button className="mt-5 sm:mt-8 inline-flex items-center gap-1.5 sm:gap-2 font-bold text-xs sm:text-sm text-[#0B1F3A] group-hover:text-[#D4AF37] group-active:text-[#D4AF37] transition-colors">
        <span>Learn More</span>
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1.5 group-active:translate-x-1.5"
        />
      </button>
    </motion.div>
  );
};

export default SectorCard;