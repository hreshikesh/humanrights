// SectorCard.jsx
import React from 'react';

const SectorCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group relative h-full w-[280px] sm:w-[320px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-lg select-none">
      {/* Left accent strip on hover */}
      <div className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-[#D4AF37] transition-all duration-300" />

      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B1F3A]/10 text-[#0B1F3A] group-hover:bg-[#0B1F3A] group-hover:text-[#D4AF37] transition-colors duration-300">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>

        <div className="min-w-0">
          <h3 className="text-sm sm:text-[15px] font-bold leading-tight text-[#0B1F3A]">
            {title}
          </h3>
          <p className="mt-1 text-[11px] sm:text-xs leading-5 text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectorCard;