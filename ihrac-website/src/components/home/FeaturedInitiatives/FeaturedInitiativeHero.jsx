import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FeaturedInitiativeHero = ({ image, category, title, description, number }) => {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -2 }}
      className="group relative block overflow-hidden rounded-xl sm:rounded-2xl border border-[#0B1F3A]/10 aspect-[4/3] sm:aspect-[16/9]"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/35 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-9 text-white">
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <span className="text-[10px] sm:text-xs font-mono text-[#D4AF37]">{number}</span>
          <span className="h-px w-4 bg-[#D4AF37]/60" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[2px] text-[#D4AF37]">
            {category}
          </span>
        </div>

        <h3 className="text-lg sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug max-w-xl">
          {title}
        </h3>

        <p className="mt-2 sm:mt-3 text-slate-300 text-xs sm:text-base leading-relaxed max-w-lg hidden sm:block">
          {description}
        </p>

        <div className="mt-3 sm:mt-6 inline-flex items-center gap-1.5 text-[11px] sm:text-sm font-bold text-white">
          <span className="border-b border-white/40 group-hover:border-white transition-colors">
            Read the initiative
          </span>
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </motion.a>
  );
};

export default FeaturedInitiativeHero;