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

     
    </motion.div>
  );
};

export default GalleryImage;