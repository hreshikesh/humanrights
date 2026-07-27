import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const InitiativeCard = ({
  image,
  title,
  category,
  description,
  large,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 w-full
      ${large ? "col-span-2 aspect-[16/10] sm:aspect-[21/9]" : "aspect-[4/5] sm:aspect-[4/5]"}`}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/20 to-transparent" />

      {/* Card Content */}
      <div className="absolute inset-0 z-10 p-3 sm:p-6 lg:p-7 text-white flex flex-col justify-end">
        {/* Category Pill */}
        <span className="self-start inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#D4AF37] text-[#0B1F3A] font-bold text-[9px] sm:text-xs mb-1.5 sm:mb-3">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-xs sm:text-lg lg:text-2xl font-bold tracking-tight leading-tight line-clamp-2">
          {title}
        </h3>

        {/* Description — hidden on small cards on mobile to reduce clutter */}
        <p className={`mt-1 sm:mt-2 text-slate-200 text-[10px] sm:text-sm leading-snug line-clamp-2
          ${large ? "block" : "hidden sm:line-clamp-2 sm:block"}`}>
          {description}
        </p>

        {/* Learn More — hidden on mobile for small cards, always shown for large */}
        <button className={`group/btn mt-2 sm:mt-4 inline-flex items-center gap-1 sm:gap-1.5 font-bold text-[10px] sm:text-sm text-[#D4AF37]
          ${large ? "flex" : "hidden sm:inline-flex"}`}>
          <span>Learn More</span>
          <ArrowRight
            size={13}
            className="transition-transform group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default InitiativeCard;