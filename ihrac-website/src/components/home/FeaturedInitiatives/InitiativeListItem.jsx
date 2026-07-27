import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const InitiativeListItem = ({ image, category, title, description, number }) => {
  return (
    <motion.a
      href="#"
      className="group flex items-start gap-3 sm:gap-5 py-4 sm:py-6 border-b border-[#0B1F3A]/10 last:border-b-0"
    >
      <span className="font-mono text-xs sm:text-sm text-[#D4AF37] pt-0.5 shrink-0 w-5 sm:w-6">
        {number}
      </span>

      <div className="relative shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-[#0B1F3A]/10">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0 flex-1">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[1.5px] text-slate-400">
          {category}
        </span>
        <h4 className="mt-1 text-sm sm:text-lg font-bold text-[#0B1F3A] leading-snug line-clamp-2 group-hover:text-[#12345A] transition-colors">
          {title}
        </h4>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-1 sm:line-clamp-2">
          {description}
        </p>
      </div>

      <ArrowUpRight
        size={16}
        className="shrink-0 mt-1 text-slate-300 transition-all group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </motion.a>
  );
};

export default InitiativeListItem;