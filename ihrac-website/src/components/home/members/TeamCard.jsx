import { CheckCircle2 } from "lucide-react";

const TeamCard = ({ member, onOpen }) => {
  return (
    <button
      type="button"
      onClick={() => onOpen(member)}
      className="group flex w-full flex-col overflow-hidden rounded-lg bg-white text-left shadow-[0_4px_12px_rgba(11,31,58,0.08)] ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(11,31,58,0.14)] hover:ring-[#D4AF37]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] sm:rounded-xl"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0B1F3A]">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
        />
        {/* Adjusted gradient depth for multi-line text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/50 to-transparent" />

        {/* Scaled-down overlay padding and centered text for 10-column layouts */}
        <div className="absolute bottom-0 left-0 right-0 p-1.5 text-center sm:p-2">
          <h3 className="text-[10px] font-semibold leading-tight text-[#D4AF37] break-words sm:text-[11px] group-hover:text-white transition-colors duration-300">
            {member.name}
          </h3>
        </div>
      </div>
    </button>
  );
};

export default TeamCard;