import { motion } from "framer-motion";
import { BadgeCheck, Quote } from "lucide-react";

const LeaderCard = ({
  image,
  name,
  designation,
  message,
  index = 0,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_-18px_rgba(11,31,58,0.22)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_18px_40px_-18px_rgba(11,31,58,0.28)]"
    >
      <div className="grid h-full grid-cols-1 sm:grid-cols-[220px_1fr]">
        {/* Portrait */}
        <div className="relative h-72 sm:h-full overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/75 via-[#0B1F3A]/10 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#0B1F3A]/10" />

          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B1F3A] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              Council Leader
            </span>
          </div>

          {/* mobile name block */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:hidden">
            <h3 className="text-xl font-bold leading-tight text-white">
              {name}
            </h3>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F4D77A]">
              {designation}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col p-5 sm:p-6 lg:p-7">
          {/* desktop name block */}
          <div className="hidden border-b border-slate-100 pb-4 sm:block">
            <h3 className="text-2xl font-bold leading-tight text-[#0B1F3A]">
              {name}
            </h3>

            <div className="mt-2 flex items-start gap-2">
              <BadgeCheck size={16} className="mt-0.5 shrink-0 text-[#D4AF37]" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {designation}
              </p>
            </div>
          </div>

          <div className="relative mt-5 flex-1">
            <Quote className="absolute right-0 top-0 h-10 w-10 text-[#D4AF37]/15" />

            <div className="border-l-4 border-[#D4AF37] pl-4 sm:pl-5">
              <p className="pr-4 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                {message}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Human Rights Leadership
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-sm font-bold text-[#0B1F3A]">
              I
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default LeaderCard;