import { CheckCircle2 } from "lucide-react";

const TeamCard = ({ member, onOpen }) => {
  return (
    <button
      type="button"
      onClick={() => onOpen(member)}
      className="group flex w-full flex-col overflow-hidden rounded-xl bg-white text-left shadow-[0_6px_20px_rgba(11,31,58,0.08)] ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(11,31,58,0.14)] hover:ring-[#D4AF37]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] sm:rounded-2xl"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0B1F3A]">
        <img
          src={member}
          alt="member"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/95 via-[#0B1F3A]/25 to-transparent" />

    
      </div>

     
    </button>
  );
};

export default TeamCard;