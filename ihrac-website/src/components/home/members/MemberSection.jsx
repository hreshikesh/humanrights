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
      <section id="leadership" className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 bg-[#D4AF37]/10 blur-[70px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B1F3A] shadow-sm sm:px-4 sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              Our Members
            </div>


            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm lg:text-base">
              Dedicated individuals working across the nation to uphold justice, equality, and human dignity through collective action.
            </p>

            <div className="mx-auto mt-5 h-[3px] w-14 rounded-full bg-[#D4AF37]" />
          </motion.div>

          {/*
            Mobile:  4 columns  → grid-cols-4
            Desktop: 6 columns  → lg:grid-cols-6
          */}
          <div className="mt-10 grid grid-cols-10 gap-2 sm:mt-14 sm:gap-3 lg:grid-cols-12 lg:gap-4">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.04 }}
              >
                <TeamCard member={member} onOpen={setSelected} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full view modal */}
      {/* <AnimatePresence>
        {selected && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.name} profile`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061426]/92 p-4 backdrop-blur-md sm:p-6"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#0B1F3A] text-white transition-all hover:rotate-90 hover:bg-[#D4AF37] hover:text-[#0B1F3A] sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-[#D4AF37]/35 bg-white shadow-2xl sm:max-w-md"
            >
              <div className="relative aspect-[3/4] max-h-[70vh] bg-[#0B1F3A]">
                <img
                  src={selected.image}
                  alt="member"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
              </div>

              <div className="bg-white p-5 sm:p-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1F3A] text-[10px] font-black text-[#D4AF37]">
                    I
                  </div>
                  <span className="text-xs font-bold tracking-wider text-[#0B1F3A]">
                    IHRAC 
                  </span>
                </div>

          

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
};

export default MemberSection;