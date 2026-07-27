import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";

const LeaderCard = ({
  image,
  name,
  designation,
  message,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200/80 flex flex-col justify-between"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/4.5] sm:h-[420px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/30 to-transparent" />

        {/* Name Plate & Designation */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 backdrop-blur-md bg-white/10 border-t border-white/10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            {name}
          </h3>

          <div className="flex items-center gap-2 mt-1.5">
            <BadgeCheck
              size={16}
              className="text-[#D4AF37] shrink-0"
            />
            <span className="uppercase tracking-wider text-[#D4AF37] text-xs sm:text-sm font-semibold truncate">
              {designation}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow bg-white">
        <div>
          {/* Animated Gold Divider Line */}
          <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-5 group-hover:w-28 transition-all duration-500" />

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic line-clamp-4 sm:line-clamp-none">
            "{message}"
          </p>
        </div>

        <button className="mt-6 sm:mt-8 inline-flex items-center gap-2 font-bold text-xs sm:text-sm text-[#0B1F3A] group-hover:text-[#D4AF37] transition-colors">
          <span>Read Full Vision</span>
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1.5 transition-transform"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default LeaderCard;