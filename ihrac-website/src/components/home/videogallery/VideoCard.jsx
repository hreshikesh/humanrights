import { motion } from "framer-motion";
import { Play, Clock, Sparkles } from "lucide-react";

const VideoCard = ({
  thumbnail,
  title,
  category,
  duration,
  featured,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl sm:rounded-[28px] border border-slate-200/80 bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-end cursor-pointer h-[340px] sm:h-[400px] lg:h-[440px] flex-none w-[78vw] sm:w-[48%] md:w-[38%] lg:w-[26.8%] snap-start select-none"
    >
      {/* Thumbnail Image */}
      <img
        src={thumbnail}
        alt={title}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Shimmer Light Streak Glare Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transform transition-transform duration-1000 ease-in-out" />

      {/* Dynamic Gold Border Glow on Hover */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-[28px] border-2 border-transparent group-hover:border-[#D4AF37]/60 transition-colors duration-500 pointer-events-none z-20" />

      {/* Multi-tier Gradient Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/45 to-transparent z-10" />

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37] text-[#0B1F3A] text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-lg">
          <Sparkles size={12} className="animate-pulse" />
          Featured
        </div>
      )}

      {/* Center Floating Pulsing Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="relative flex items-center justify-center">
          {/* Outer Pulsing Aura */}
          <div className="absolute inset-0 rounded-full bg-[#D4AF37]/40 blur-md group-hover:scale-150 transition-transform duration-500 animate-ping opacity-75" />
          
          <div className="relative flex h-14 w-14 sm:h-18 sm:w-18 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37]">
            <Play 
              className="ml-0.5 text-white group-hover:text-[#0B1F3A] transition-colors duration-300 w-6 h-6 sm:w-8 sm:h-8" 
              fill="currentColor" 
            />
          </div>
        </div>
      </div>

      {/* Card Content Footer */}
      <div className="relative z-20 p-4 sm:p-6">
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="inline-block rounded-full bg-[#D4AF37]/90 backdrop-blur-sm px-3 py-1 text-[10px] sm:text-xs font-extrabold text-[#0B1F3A] shadow-sm truncate">
            {category}
          </span>

          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-slate-200 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shrink-0">
            <Clock className="text-[#D4AF37]" size={12} />
            <span>{duration}</span>
          </div>
        </div>

        <h3 className="text-sm sm:text-lg font-extrabold text-white tracking-tight leading-snug line-clamp-2 group-hover:text-[#D4AF37] transition-colors duration-300">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default VideoCard;