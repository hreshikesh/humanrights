import React from "react";
import { CheckCircle2 } from "lucide-react";

const TeamCard = ({ member }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_25px_rgba(11,31,58,0.08)] ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(11,31,58,0.15)]">
      {/* Photo with gradient overlay */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0B1F3A]">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/95 via-[#0B1F3A]/30 to-transparent" />

        {/* Name & Designation overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-left">
          <h3 className="text-sm sm:text-base font-black  text-white tracking-wide">
            {member.name}
          </h3>
          <div className="mt-1 flex items-center gap-1 text-[#D4AF37]">
            <CheckCircle2 className="h-3 w-3 shrink-0" />
            <span className="text-[9px] sm:text-[10px]  uppercase tracking-wider leading-tight text-[#D4AF37]">
              {member.role}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="flex items-center justify-between gap-2 bg-white px-3 py-2.5 sm:px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0B1F3A] text-[9px] font-black text-[#D4AF37]">
            I
          </div>
          <span className="text-xs font-bold text-[#0B1F3A] tracking-wider">
            IHRAC
          </span>
        </div>

        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          OFFICIAL
        </span>
      </div>
    </article>
  );
};

export default TeamCard;