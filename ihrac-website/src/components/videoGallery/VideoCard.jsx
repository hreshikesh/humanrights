// src/components/videoGallery/VideoCard.jsx
import React from "react";
import { Play } from "lucide-react";

const VideoCard = ({ thumbnail, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      className="group relative w-full h-full min-h-[220px] rounded-[24px] overflow-hidden border border-[#D4AF37]/25 shadow-lg shadow-[#0B1F3A]/20 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#0B1F3A]/40 select-none bg-[#0B1F3A]"
    >
      {/* Thumbnail */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${thumbnail})` }}
      />

      {/* Soft dim always + a bit more on hover */}
      <div className="absolute inset-0 bg-[#0B1F3A]/25 transition-colors duration-500 group-hover:bg-[#0B1F3A]/55" />

      {/* Optional subtle bottom gradient for depth (no text) */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B1F3A]/50 to-transparent pointer-events-none" />

      {/* Center play — only visible on hover */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div
          className="
            flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center
            rounded-full bg-[#D4AF37] text-[#0B1F3A] shadow-xl shadow-black/30
            opacity-0 scale-90
            transition-all duration-300 ease-out
            group-hover:opacity-100 group-hover:scale-100
          "
        >
          <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-[#0B1F3A] ml-0.5" strokeWidth={0} />
        </div>
      </div>

      {/* Screen-reader only title */}
      <span className="sr-only">{title}</span>
    </div>
  );
};

export default VideoCard;