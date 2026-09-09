// src/components/videoGallery/independenceDay/IndependenceDayVideos.jsx
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

import {
  independenceDayVideos,
  getVideoPoster,
  getVideoSrc,
} from "./independenceDayVideoData";

const AUTO_MS = 4000;

const IndependenceDayVideos = ({ videos = independenceDayVideos }) => {
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(null);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);

  const len = videos?.length || 0;
// Preload all video thumbnails so carousel navigation stays smooth
useEffect(() => {
  videos?.forEach((v) => {
    const src = typeof v === "string" ? v : v.src;
    const poster =
      (typeof v === "object" && v.poster) ||
      getVideoPoster(src);

    if (poster) {
      const img = new Image();
      img.src = poster;
    }
  });
}, [videos]);
  const go = useCallback(
    (dir) => {
      if (!len) return;
      setCurrent((c) => (c + dir + len) % len);
    },
    [len]
  );

  const openAt = useCallback(
    (index) => {
      const v = videos[index];
      if (!v) return;
      const src = typeof v === "string" ? v : v.src;
      const poster = (typeof v === "object" && v.poster) || getVideoPoster(src);
      setActive({ index, src: getVideoSrc(src), poster });
    },
    [videos]
  );

  // Auto-play Carousel
  useEffect(() => {
    if (!len || paused || active) return;
    const t = setInterval(() => go(1), AUTO_MS);
    return () => clearInterval(t);
  }, [len, paused, active, go]);

  // Modal Keyboard Controls & Scroll Lock
  useEffect(() => {
    if (!active) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") openAt((active.index + 1) % len);
      if (e.key === "ArrowLeft") openAt((active.index - 1 + len) % len);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, len, openAt]);

  // Touch Swiping Logic
  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  if (!len) return null;

  // Track holds 3 items: Prev, Current, Next
  const getItem = (offset) => {
    const i = (current + offset + len) % len;
    const v = videos[i];
    const src = typeof v === "string" ? v : v.src;
    return {
      index: i,
      src,
      poster: (typeof v === "object" && v.poster) || getVideoPoster(src),
    };
  };

  const track = [-1, 0, 1].map(getItem);

  return (
    <>
      <section
        id="independenceDayVideos"
        className="relative overflow-hidden rounded-3xl bg-slate-50/50 border border-slate-200/80 py-12 sm:py-16 shadow-sm w-full"
      >
        {/* Decorative Background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FFF8E7]/90 via-slate-50 to-white" />
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#FF9933]/12 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#D4AF37]/18 blur-[110px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#138808]/08 blur-[90px]" />

        {/* Tricolor Header Strip */}
        <div className="absolute inset-x-0 top-0 z-20 flex h-1 sm:h-1.5">
          <div className="flex-1 bg-[#FF9933]" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-[#138808]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-8 max-w-2xl text-center sm:mb-12 px-4"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B1F3A] shadow-sm sm:text-xs">
            
              Independence Day 
            </div>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-[#FF9933] via-[#0B1F3A] to-[#138808] bg-clip-text text-transparent">
                Freedom in Motion
              </span>
            </h2>

            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Watch our 15th August celebrations — tap any film to play fullscreen.
            </p>
          </motion.div>

          {/* Carousel Area */}
          <div
            className="relative w-full overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Carousel Track */}
            <div className="flex items-center justify-center gap-2 sm:gap-6 lg:gap-8 min-h-[160px] sm:min-h-[300px] lg:min-h-[360px] w-full px-2">
              <AnimatePresence mode="popLayout" initial={false}>
                {track.map((item, slot) => {
                  const isCenter = slot === 1;

                  return (
                  <motion.button
  key={item.index}
  type="button"
  initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: isCenter ? 1 : 0.4,
                        scale: isCenter ? 1 : 0.85,
                        zIndex: isCenter ? 10 : 0,
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
  type: "spring",
  stiffness: 380,
  damping: 32,
  mass: 0.8,
}}
                      onClick={() => {
                        // Click center to play, click sides to navigate
                        if (isCenter) openAt(item.index);
                        else go(slot === 0 ? -1 : 1);
                      }}
                      className={`
                        relative shrink-0 overflow-hidden rounded-xl border bg-white p-1 shadow-lg transition-all focus:outline-none
                        ${isCenter
                          ? "w-[75vw] sm:w-[500px] lg:w-[600px] border-[#D4AF37]/50 shadow-[#D4AF37]/20 sm:rounded-3xl sm:p-2 cursor-pointer"
                          : "w-[12vw] sm:w-[150px] lg:w-[220px] border-slate-200 cursor-pointer"
                        }
                      `}
                    >
                      <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-[#0B1F3A] sm:rounded-2xl">
                       <img
  src={item.poster || undefined}
  alt="Video Thumbnail"
  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
  loading="eager"
  decoding="async"
/>

                        <div className="absolute inset-0 bg-[#0B1F3A]/20 transition-colors hover:bg-[#0B1F3A]/40" />

                        {/* Play Button - Only on Center Card */}
                        {isCenter && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#D4AF37] text-[#0B1F3A] shadow-xl hover:scale-110 transition-transform">
                              <Play className="ml-1 h-4 w-4 sm:h-6 sm:w-6 fill-[#0B1F3A]" strokeWidth={0} />
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Bottom Controls */}
            <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1F3A] shadow-sm transition hover:border-[#D4AF37] hover:bg-[#D4AF37]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-1.5 sm:gap-2">
                {videos.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-[#D4AF37]" : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(1)}
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1F3A] shadow-sm transition hover:border-[#D4AF37] hover:bg-[#D4AF37]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Fullscreen Video Modal Container */}
      {/* Fullscreen / Lightbox Video Modal — centered, clears navbar */}
      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Play Independence Day video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061426]/92 backdrop-blur-md"
            style={{
              /* push content below fixed navbar (~72–80px) */
              paddingTop: "5.5rem",
              paddingBottom: "1.5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
            onClick={() => setActive(null)}
          >
            {/* Soft dim — click outside closes */}
            <div className="absolute inset-0" aria-hidden />

            {/* Close — below nav, top-right of viewport content */}
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-4 z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#0B1F3A]/90 text-white shadow-lg transition hover:rotate-90 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B1F3A] sm:right-6"
              style={{ top: "5.75rem" }}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev / Next — vertical center of modal area */}
            {len > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous video"
                  className="absolute left-2 z-[110] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0B1F3A]/80 text-white hover:bg-[#D4AF37] hover:text-[#0B1F3A] sm:left-4 sm:h-11 sm:w-11"
                  style={{ top: "55%" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    openAt((active.index - 1 + len) % len);
                  }}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next video"
                  className="absolute right-2 z-[110] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0B1F3A]/80 text-white hover:bg-[#D4AF37] hover:text-[#0B1F3A] sm:right-4 sm:h-11 sm:w-11"
                  style={{ top: "55%" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    openAt((active.index + 1) % len);
                  }}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {/* Compact centered player card */}
            <motion.div
              key={active.src}
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 8 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-[105] mx-auto w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
            >
              {/* Tricolor accent on frame */}
              <div className="mb-0 flex h-1 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                <span className="flex-1 bg-[#FF9933]" />
                <span className="flex-1 bg-white" />
                <span className="flex-1 bg-[#138808]" />
              </div>

              <div className="overflow-hidden rounded-b-xl border border-[#D4AF37]/35 border-t-0 bg-black shadow-2xl sm:rounded-b-2xl">
                {/*
            Smaller player:
            - max height leaves room under nav
            - object-contain keeps portrait/landscape centered
          */}
                <div className="relative mx-auto flex max-h-[min(70vh,520px)] w-full items-center justify-center bg-black">
                  <video
                    key={active.src}
                    src={active.src}
                    poster={active.poster || undefined}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[min(70vh,520px)] w-full object-contain"
                  >
                    Your browser does not support video playback.
                  </video>
                </div>
              </div>

              <p className="mt-3 text-center text-[11px] font-semibold tracking-wider text-white/70">
                {active.index + 1} / {len}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default IndependenceDayVideos;