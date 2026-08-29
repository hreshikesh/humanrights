// src/components/home/HumanRightsEmblem/HumanRightsEmblem.jsx
import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";


// Prefer WebP. Fallback: import fist from "../../../assets/human.svg";
import fistArt from "../../../assets/human.webp";

const HumanRightsEmblem = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.25, once: false });
  const reduceMotion = useReducedMotion();

  // Pause float when off-screen or user prefers reduced motion
  const floating = inView && !reduceMotion;

  return (
    <section
      id="humanRights"
      className="relative overflow-hidden bg-[#0B1F3A] py-20 lg:py-28"
    >
      {/* Cheap glows — no huge animated blurs */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-red-600/10 blur-[60px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 text-center lg:text-left"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[2.5px] text-[#D4AF37]">
     
              Core Mandate
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              Raised for{" "}
              <span className="text-[#D4AF37]">Human Rights</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Dignity, justice, and equality are non-negotiable. This emblem stands
              for every voice we defend across our national mission.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-bold text-slate-200">
           
              Justice · Equality · Collective Action
            </div>
          </motion.div>

          {/* Emblem stage */}
          <div className="lg:col-span-7 flex justify-center" ref={ref}>
            <div
              className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]"
              style={{ perspective: "900px" }}
            >
              {/* Static plate — not animated filters */}
              <div className="absolute inset-6 rounded-full bg-[#D4AF37]/5 blur-2xl" />

              <motion.div
                className="relative will-change-transform transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
                animate={
                  floating
                    ? {
                        y: [0, -12, 0],
                        rotateY: [-6, 6, -6],
                        rotateX: [4, 2, 4],
                      }
                    : { y: 0, rotateY: 0, rotateX: 0 }
                }
                transition={
                  floating
                    ? {
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : { duration: 0.3 }
                }
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.03,
                        rotateY: 10,
                        rotateX: -4,
                        transition: { type: "spring", stiffness: 220, damping: 18 },
                      }
                }
              >
                {/* Card frame */}
                <div className="overflow-hidden rounded-[28px] border border-[#D4AF37]/25 bg-black shadow-2xl shadow-black/50">
                  <img
                    src={fistArt}
                    alt="Human Rights — raised fist emblem"
                    width={420}
                    height={420}
                    decoding="async"
                    loading="lazy"
                    className="h-auto w-full object-contain select-none pointer-events-none"
                    draggable={false}
                  />
                </div>

                {/* Thin gold edge light */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-[#D4AF37]/20" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanRightsEmblem;