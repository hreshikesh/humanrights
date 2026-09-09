import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Film,
  ChevronDown,
  Shield,
} from "lucide-react";

import VideoPlayerModal from "../../videoGallery/VideoPlayerModal";
import VideoCard from "../../videoGallery/VideoCard";
import { videoLinks } from "../../videoGallery/videoGalleryData";
import { parseVideoLink } from "../../videoGallery/videoParser";
import { generateBentoLayout } from "../../videoGallery/bentoLayout";

import IndependenceDayVideos from "../../videoGallery/independenceDay/IndependenceDayVideos";
import SectionHeader from "./SectionHeader";

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const parsedVideos = useMemo(
    () =>
      (videoLinks || []).map((link, idx) =>
        parseVideoLink(link, idx)
      ),
    []
  );

  const marqueeVideos = useMemo(
    () => parsedVideos.slice(0, 8),
    [parsedVideos]
  );

  const bentoVideos = useMemo(
    () => parsedVideos.slice(8, 13),
    [parsedVideos]
  );

  const archiveVideos = useMemo(
    () => parsedVideos.slice(13),
    [parsedVideos]
  );

  const bentoLayouts = useMemo(
    () => generateBentoLayout(bentoVideos.length),
    [bentoVideos]
  );

  return (
    <section
      id="videoGallery"
      className="relative overflow-hidden bg-white"
    >
      {/* =========================================
          MAIN HOME SECTION HEADER
      ========================================= */}
      <div className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#0B1F3A_1px,transparent_1px),linear-gradient(to_bottom,#0B1F3A_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#0B1F3A]/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeader />

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-5 h-1 rounded-full bg-[#D4AF37]"
          />
        </div>
      </div>

      {/* =========================================
          INDEPENDENCE DAY VIDEOS
      ========================================= */}
      <section className="bg-white text-slate-900 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <IndependenceDayVideos />
        </div>
      </section>

      {/* =========================================
          RECENT OPERATIONAL HIGHLIGHTS
      ========================================= */}
      <section className="bg-[#FFFDF2] text-slate-900 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Globe className="w-5 h-5 text-[#D4AF37]" />

            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A]">
              Recent Operational Highlights
            </h2>
          </div>

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
              {[...marqueeVideos, ...marqueeVideos].map(
                (video, idx) => (
                  <div
                    key={`marquee-${video.id}-${idx}`}
                    className="w-56 sm:w-72 flex-shrink-0 h-36 sm:h-44 rounded-xl overflow-hidden cursor-pointer transform transition-transform hover:scale-105 shadow-md"
                  >
                    <VideoCard
                      thumbnail={video.thumbnailUrl}
                      title={video.title}
                      onClick={() => setSelectedVideo(video)}
                    />
                  </div>
                )
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          FEATURED FIELD OPERATIONS
      ========================================= */}
      <section className="bg-[#0B1F3A] text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <Film className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />

            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Featured Field Operations
            </h2>
          </div>

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

      {/* =========================================
          COMPLETE FIELD ARCHIVE
      ========================================= */}
      <section className="bg-slate-50 text-slate-900 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 sm:mb-8">

            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A]">
              Complete Field Archive
            </h2>

            <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-slate-200 text-slate-700">
              Showing{" "}
              {Math.min(
                visibleCount,
                archiveVideos.length
              )}{" "}
              of {archiveVideos.length}
            </span>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            {archiveVideos
              .slice(0, visibleCount)
              .map((video) => (
                <div
                  key={`archive-${video.id}`}
                  className="h-52 sm:h-56"
                >
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
                onClick={() =>
                  setVisibleCount((prev) => prev + 4)
                }
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#b8972e] text-slate-950 text-sm sm:text-base font-extrabold transition-all transform hover:scale-105 shadow-lg"
              >
                Load More

                <ChevronDown className="w-4 h-4" />
              </button>

            </div>
          )}

        </div>
      </section>

      {/* =========================================
          VIDEO PLAYER
      ========================================= */}
      <VideoPlayerModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

    </section>
  );
};

export default VideoGallery;