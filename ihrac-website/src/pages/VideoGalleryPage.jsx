import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Tv, Film, ChevronDown, Shield, Globe, Layers } from "lucide-react";

import VideoPlayerModal from "../components/videoGallery/VideoPlayerModal";
import VideoCard from "../components/videoGallery/VideoCard";
import { videoLinks } from "../components/videoGallery/videoGalleryData";
import { parseVideoLink } from "../components/videoGallery/videoParser";
import { generateBentoLayout } from "../components/videoGallery/bentoLayout";

import IndependenceDayVideos from "../components/videoGallery/independenceDay/IndependenceDayVideos.jsx";

const VideoGalleryPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);

  // Parse all videos with thumbnail extractors
  const parsedVideos = useMemo(
    () => (videoLinks || []).map((link, idx) => parseVideoLink(link, idx)),
    []
  );

  // Video Section Slices
  const marqueeVideos = useMemo(() => parsedVideos.slice(0, 8), [parsedVideos]);
  const bentoVideos = useMemo(() => parsedVideos.slice(8, 13), [parsedVideos]);
  const archiveVideos = useMemo(() => parsedVideos.slice(13), [parsedVideos]);

  const bentoLayouts = useMemo(
    () => generateBentoLayout(bentoVideos.length),
    [bentoVideos]
  );

  return (
    <main className="relative select-none overflow-x-hidden bg-slate-900">

      {/* =========================================================
          SECTION 1: HERO SECTION (THEME: DEEP BLUE #0B1F3A)
         ========================================================= */}
      <section className="relative bg-[#0B1F3A] text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#D4AF37]/20">
        <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-5 w-56 h-56 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4 sm:mb-6">
              <Shield className="w-3.5 h-3.5 shrink-0" />
              <span>Human Rights & Community Advocacy</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4 sm:mb-6">
              Championing Dignity Across <span className="text-[#D4AF37]">48 Key Sectors</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 leading-relaxed">
              Documenting ground operations, legal aid, social restructuring, and emergency response. Watch active media broadcasts and archived field operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: LATEST EVENTS / INDEPENDENCE DAY (THEME: PURE WHITE)
         ========================================================= */}
      <section className="bg-white text-slate-900 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <IndependenceDayVideos />
        </div>
      </section>

      {/* =========================================================
          SECTION 3: MARQUEE HIGHLIGHTS (THEME: SOFT GOLD / WARM ACCENT)
         ========================================================= */}
      <section className="bg-[#FFFDF2] text-slate-900 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Globe className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A]">Recent Operational Highlights</h2>
          </div>

          {/* Framer Motion Auto-Scrolling Marquee */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-white p-2 sm:p-4 border border-[#D4AF37]/20 shadow-sm">
            <motion.div
              className="flex gap-3 sm:gap-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
            >
              {[...marqueeVideos, ...marqueeVideos].map((video, idx) => (
                <div
                  key={`marquee-${video.id}-${idx}`}
                  className="w-56 sm:w-72 flex-shrink-0 h-36 sm:h-44 rounded-xl overflow-hidden cursor-pointer transform transition-transform hover:scale-105 shadow-md"
                  onClick={() => setSelectedVideo(video)}
                >
                  <VideoCard
                    thumbnail={video.thumbnailUrl}
                    title={video.title}
                    onClick={() => setSelectedVideo(video)}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: FEATURED BENTO GRID (THEME: DEEP BLUE #0B1F3A)
         ========================================================= */}
      <section className="bg-[#0B1F3A] text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <Film className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">Featured Field Operations</h2>
          </div>

          {/* Responsive Grid: Single column on mobile, Bento Layout on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 md:auto-rows-[240px]">
            {bentoVideos.map((video, idx) => {
              const config = bentoLayouts[idx] || {
                cols: "col-span-12 md:col-span-4",
                rows: "row-span-1 h-full",
              };

              return (
                <div
                  key={`bento-${video.id}`}
                  className={`${config.cols} ${config.rows} h-52 sm:h-60 md:h-full`}
                >
                  <VideoCard
                    thumbnail={video.thumbnailUrl}
                    title={video.title}
                    onClick={() => setSelectedVideo(video)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: COMPLETE FIELD ARCHIVE (THEME: LIGHT GRAY / SLATE-50)
         ========================================================= */}
      <section className="bg-slate-50 text-slate-900 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A]">Complete Field Archive</h2>
            <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-slate-200 text-slate-700">
              Showing {Math.min(visibleCount, archiveVideos.length)} of {archiveVideos.length}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {archiveVideos.slice(0, visibleCount).map((video) => (
              <div key={`archive-${video.id}`} className="h-52 sm:h-56">
                <VideoCard
                  thumbnail={video.thumbnailUrl}
                  title={video.title}
                  onClick={() => setSelectedVideo(video)}
                />
              </div>
            ))}
          </div>

          {visibleCount < archiveVideos.length && (
            <div className="mt-8 sm:mt-12 text-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 4)}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#b8972e] text-slate-950 text-sm sm:text-base font-extrabold transition-all transform hover:scale-105 shadow-lg"
              >
                Load More 
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoPlayerModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </main>
  );
};

export default VideoGalleryPage;