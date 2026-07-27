import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const GalleryImage = ({
  image,
  title,
  category,
  large,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ y: -6, scale: 1.01 }}
      className="group relative overflow-hidden rounded-2xl sm:rounded-[28px] border border-slate-200/80 shadow-sm hover:shadow-2xl active:shadow-2xl transition-all duration-500 h-full w-full flex flex-col justify-end"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/95 via-[#0B1F3A]/40 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 flex flex-col justify-end h-full">
        {/* Category Pill */}
        <span className="self-start inline-block rounded-full bg-[#D4AF37] px-3.5 py-1.5 text-xs sm:text-sm font-bold text-[#0B1F3A] shadow-md">
          {category}
        </span>

        {/* Title */}
        <h3 className="mt-2 sm:mt-3 text-base sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug line-clamp-2">
          {title}
        </h3>

        {/* Action Link */}
        <button className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-[#D4AF37]">
          <span>View Image</span>
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-active:translate-x-1 group-active:-translate-y-1"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default GalleryImage;