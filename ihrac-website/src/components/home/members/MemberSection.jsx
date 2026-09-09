import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import TeamCard from "./TeamCard";
import { teamMembers } from "./member";

const MemberSection = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return undefined;

    const prev = document.body.style.overflow;
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <>
      <section id="leadership" className="relative overflow-hidden bg-slate-50/50 py-14 sm:py-20 lg:py-24">
        {/* Subtle grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 bg-[#D4AF37]/10 blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B1F3A] shadow-sm sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
              Our Members
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-[#0B1F3A] sm:text-3xl lg:text-4xl">
              Dedicated Team Members
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm lg:text-base">
              Dedicated individuals working across the nation to uphold justice, equality, and human dignity through collective action.
            </p>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#D4AF37]" />
          </motion.div>

          {/* Optimized Responsive Grid (2 cols mobile, 3 sm, 4 md, 6 desktop) */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-10 lg:gap-5">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id || i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (i % 6) * 0.03 }}
              >
                <TeamCard member={member} onOpen={setSelected} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full View Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selected.name ? `${selected.name} profile` : "Member profile"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061426]/90 p-4 backdrop-blur-md sm:p-6"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 12 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#0B1F3A] shadow-2xl sm:max-w-md"
            >
              {/* Close Button */}
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#0B1F3A]/80 text-white backdrop-blur-sm transition-all hover:rotate-90 hover:bg-[#D4AF37] hover:text-[#0B1F3A]"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full max-h-[65vh] overflow-hidden bg-slate-900">
                {selected.image ? (
                  <img
                    src={selected.image}
                    alt={selected.name || "Member profile"}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-slate-400">
                    No image available
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
              </div>

              {/* Footer details */}
              <div className="p-4 sm:p-5 text-white">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 sm:text-xl">
                      {selected.name || "Team Member"}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#D4AF37] font-medium">
                      IHRAC Active Member
                    </p>
                  </div>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#D4AF37]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MemberSection;