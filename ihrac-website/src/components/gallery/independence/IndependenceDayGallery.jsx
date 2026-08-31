import { useEffect, useState, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { independenceDayImages, getThumb } from "./independenceDayData";

const AUTO_MS = 4500;

const IndependenceDayGallery = ({ images = independenceDayImages }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);

  const len = images?.length || 0;
  const go = useCallback(
    (dir) => {
      if (!len) return;
      setCurrent((c) => (c + dir + len) % len);
    },
    [len]
  );

  const goTo = (i) => setCurrent(i);

  // Autoplay carousel
  useEffect(() => {
    if (!len || paused || selected != null) return;
    const t = setInterval(() => go(1), AUTO_MS);
    return () => clearInterval(t);
  }, [len, paused, selected, go]);

  // Lightbox keys + scroll lock
  useEffect(() => {
    if (selected == null) return;
    const prev = document.body.style.overflow;
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") {
        const n = (selected.index + 1) % len;
        setSelected({ src: images[n], index: n });
      }
      if (e.key === "ArrowLeft") {
        const n = (selected.index - 1 + len) % len;
        setSelected({ src: images[n], index: n });
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, images, len]);

  if (!len) return null;

  // Side stack: next 3 after current (wrap)
  const sideCards = [1, 2, 3].map((offset) => {
    const i = (current + offset) % len;
    return { src: images[i], index: i };
  });

  const open = (index) => setSelected({ src: images[index], index });

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  return (
    <>
      <section
        id="independenceDay"
        className="relative overflow-hidden bg-slate-50 py-16 sm:py-24"
      >
        {/* White + gold festive wash */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FFF8E7]/80 via-slate-50 to-white" />
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#FF9933]/15 blur-[110px]" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#D4AF37]/20 blur-[120px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-full max-w-3xl -translate-x-1/2 bg-[#138808]/05 blur-[80px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#0B1F3A 1px, transparent 1px), linear-gradient(90deg, #0B1F3A 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Thin tricolor top */}
        <div className="absolute inset-x-0 top-0 z-20 flex h-1 sm:h-1.5">
          <div className="flex-1 bg-[#FF9933]" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-[#138808]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ——— Header + waving flag ——— */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-5 flex justify-center">
              <WavingFlag />
            </div>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-white/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B1F3A] shadow-sm sm:text-xs">
              15 August
            </div>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-[#FF9933] via-[#0B1F3A] to-[#138808] bg-clip-text text-transparent">
                Independence Day
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
              A living gallery of freedom — swipe the stage, explore the frames.
            </p>

            <div className="mx-auto mt-5 flex h-1 w-28 overflow-hidden rounded-full">
              <div className="flex-1 bg-[#FF9933]" />
              <div className="flex-1 bg-white ring-1 ring-slate-200" />
              <div className="flex-1 bg-[#138808]" />
            </div>
          </motion.div>

          {/* ——— Hybrid: Carousel stage + side layout ——— */}
          <div
            className="mt-12 sm:mt-16"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
              {/* MAIN CAROUSEL — 8 cols */}
              <div className="lg:col-span-8">
                <div
                  className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-white p-2 shadow-xl shadow-[#0B1F3A]/08 sm:rounded-3xl sm:p-3"
                  onTouchStart={onTouchStart}
                  onTouchEnd={onTouchEnd}
                >
                  {/* Tricolor strip on card */}
                  <div className="absolute inset-x-0 top-0 z-10 flex h-1 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                    <div className="flex-1 bg-[#FF9933]" />
                    <div className="flex-1 bg-white" />
                    <div className="flex-1 bg-[#138808]" />
                  </div>

                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#0B1F3A]/5 sm:rounded-2xl">
                    <AnimatePresence mode="wait">
                      <motion.button
                        key={current}
                        type="button"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.35 }}
                        onClick={() => open(current)}
                        className="absolute inset-0 block h-full w-full cursor-pointer"
                      >
                        <img
                          src={getThumb(images[current])}
                          alt=""
                          className="h-full w-full object-cover"
                          draggable={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/50 via-transparent to-transparent" />
                      </motion.button>
                    </AnimatePresence>

                    {/* Arrows */}
                    <button
                      type="button"
                      aria-label="Previous"
                      onClick={() => go(-1)}
                      className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#0B1F3A]/70 text-white backdrop-blur-sm transition hover:bg-[#D4AF37] hover:text-[#0B1F3A] sm:left-3 sm:h-11 sm:w-11"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next"
                      onClick={() => go(1)}
                      className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#0B1F3A]/70 text-white backdrop-blur-sm transition hover:bg-[#D4AF37] hover:text-[#0B1F3A] sm:right-3 sm:h-11 sm:w-11"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Counter */}
                    <div className="absolute bottom-3 right-3 z-20 rounded-full border border-white/20 bg-[#0B1F3A]/75 px-3 py-1 text-[10px] font-bold tracking-wider text-white backdrop-blur-md sm:text-xs">
                      {current + 1} / {len}
                    </div>
                  </div>
                </div>
              </div>

              {/* SIDE LAYOUT — stacked preview cards */}
              <div className="flex flex-row gap-3 overflow-x-auto pb-1 lg:col-span-4 lg:flex-col lg:gap-4 lg:overflow-visible lg:pb-0">
                {sideCards.map((card, idx) => (
                  <motion.button
                    key={`${card.index}-${idx}`}
                    type="button"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    onClick={() => goTo(card.index)}
                    onDoubleClick={() => open(card.index)}
                    className="group relative min-w-[140px] flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-md transition-all hover:-translate-y-0.5 hover:border-[#D4AF37]/50 hover:shadow-lg sm:min-w-[160px] lg:min-w-0"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl lg:aspect-[16/9]">
                      <img
                        src={getThumb(card.src)}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#0B1F3A]/0 transition group-hover:bg-[#0B1F3A]/15" />
                      <div className="absolute left-0 top-0 flex h-0.5 w-10 overflow-hidden">
                        <span className="flex-1 bg-[#FF9933]" />
                        <span className="flex-1 bg-white" />
                        <span className="flex-1 bg-[#138808]" />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* ——— Bottom thumbnail carousel strip ——— */}
            <div className="mt-5 sm:mt-6">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin sm:gap-3 sm:justify-center sm:flex-wrap sm:overflow-visible">
                {images.map((src, i) => {
                  const active = i === current;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => goTo(i)}
                      onDoubleClick={() => open(i)}
                      className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all sm:h-16 sm:w-24 sm:rounded-xl ${
                        active
                          ? "border-[#D4AF37] shadow-md shadow-[#D4AF37]/25 scale-105"
                          : "border-transparent opacity-70 hover:opacity-100 hover:border-slate-300"
                      }`}
                    >
                      <img
                        src={getThumb(src)}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                      {active && (
                        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />
                      )}
                    </button>
                  );
                })}
              </div>
              <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Click thumb · Double-click or open stage for full view
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1F3A]/92 p-3 backdrop-blur-md sm:p-6"
          >
            <div className="absolute inset-x-0 top-0 z-20 flex h-1.5">
              <div className="flex-1 bg-[#FF9933]" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-[#138808]" />
            </div>

            <button
              type="button"
              aria-label="Close"
              onClick={() => setSelected(null)}
              className="absolute right-3 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:rotate-90 hover:bg-[#D4AF37] hover:text-[#0B1F3A] sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="absolute left-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#D4AF37] hover:text-[#0B1F3A] sm:left-4 sm:h-12 sm:w-12"
              onClick={(e) => {
                e.stopPropagation();
                const n = (selected.index - 1 + len) % len;
                setSelected({ src: images[n], index: n });
              }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="absolute right-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#D4AF37] hover:text-[#0B1F3A] sm:right-4 sm:h-12 sm:w-12"
              onClick={(e) => {
                e.stopPropagation();
                const n = (selected.index + 1) % len;
                setSelected({ src: images[n], index: n });
              }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={selected.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-6xl overflow-hidden rounded-2xl border border-[#D4AF37]/35 shadow-2xl"
            >
              <img
                src={selected.src}
                alt="Independence Day"
                className="block max-h-[88vh] max-w-full object-contain bg-black"
              />
            </motion.div>

            <p className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs font-bold text-white">
              {selected.index + 1} / {len}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ——— Authentic Waving Indian Tricolor Flag ——— */
function WavingFlag() {
  return (
    <div className="relative inline-flex items-end gap-0">
     

      {/* Flag SVG */}
      <svg
        width="72"
        height="48"
        viewBox="0 0 90 60"
        className="origin-left animate-flag-wave drop-shadow-md"
        aria-hidden
      >
        {/* Saffron Band */}
        <rect width="90" height="20" fill="#FF9933" />
        {/* White Band */}
        <rect y="20" width="90" height="20" fill="#FFFFFF" />
        {/* India Green Band */}
        <rect y="40" width="90" height="20" fill="#138808" />

        {/* Ashoka Chakra (Navy Blue) */}
        <circle cx="45" cy="30" r="7.5" fill="none" stroke="#000080" strokeWidth="1.2" />
        <circle cx="45" cy="30" r="1.2" fill="#000080" />
        
        {/* 24 Spokes (12 diameter lines rotated by 15° increments) */}
        <g stroke="#000080" strokeWidth="0.6">
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="45"
              y1="22.5"
              x2="45"
              y2="37.5"
              transform={`rotate(${i * 15} 45 30)`}
            />
          ))}
        </g>
      </svg>

      <style>{`
        @keyframes flag-wave {
          0%, 100% { transform: skewY(0deg) translateY(0); }
          50% { transform: skewY(-4deg) translateY(-2px); }
        }
        .animate-flag-wave {
          animation: flag-wave 2.2s ease-in-out infinite;
          transform-origin: left center;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-flag-wave { animation: none; }
        }
      `}</style>
    </div>
  );
}

export default IndependenceDayGallery;