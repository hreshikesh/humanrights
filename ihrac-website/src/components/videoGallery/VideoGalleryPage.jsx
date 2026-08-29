// VideoGalleryPage.jsx
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tv, Film } from "lucide-react";
import TiltedScroll from "./TiltedScroll";
import VideoPlayerModal from "./VideoPlayerModal";
import VideoCard from "./VideoCard";
import { videoLinks } from "./videoGalleryData";
import { parseVideoLink } from "./videoParser";
import { generateBentoLayout } from "./bentoLayout";

const VideoGalleryPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Automatically parse simplified video URLs on mount
  const parsedVideos = useMemo(() => {
    return videoLinks.map((link, idx) => parseVideoLink(link, idx));
  }, []);

  // Compute clean layout configuration based on current item count
  const bentoLayouts = useMemo(() => {
    return generateBentoLayout(parsedVideos.length);
  }, [parsedVideos]);

  return (
    <main className="relative bg-slate-50 py-24 sm:py-32 overflow-hidden select-none">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#D4AF37]/15 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#0B1F3A]/10 blur-[140px] pointer-events-none" />

      {/* Grid Pattern Background overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0B1F3A 1px, transparent 1px), linear-gradient(90deg, #0B1F3A 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 backdrop-blur-sm px-4 sm:px-5 py-2 text-xs font-bold uppercase tracking-[2.5px] text-[#D4AF37] mb-4 shadow-sm">
            <Tv className="w-3.5 h-3.5 animate-pulse" />
            Media & Broadcasts
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] tracking-tight leading-none">
            Stories of <span className="text-[#D4AF37]">Hope & Restructuring</span>
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            Watch ground impact footage, awareness campaigns, and community success briefings documented directly from our active sectors across India.
          </p>
        </motion.div>

        {/* 3D Tilted Bento Grid */}
        <TiltedScroll>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[220px] sm:auto-rows-[260px]">
            {parsedVideos.map((video, idx) => {
              const config = bentoLayouts[idx] || { cols: "col-span-12 md:col-span-4", rows: "row-span-1 h-full" };
              return (
                <div key={video.id} className={`${config.cols} ${config.rows}`}>
                  <VideoCard
                    thumbnail={video.thumbnailUrl}
                    title={video.title}
                    category={video.category}
                    duration="04:20"
                    onClick={() => setSelectedVideo(video)}
                  />
                </div>
              );
            })}
          </div>
        </TiltedScroll>

        {/* Dynamic Highlight Footer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 sm:mt-28 relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0B1F3A] via-[#122b4d] to-[#0B1F3A] border border-[#D4AF37]/30 shadow-xl"
        >
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#D4AF37]/20 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-[100px] pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#b8941f] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
                <Film className="w-8 h-8 sm:w-10 sm:h-10 text-[#0B1F3A]" strokeWidth={2.5} />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[3px] font-bold text-[#D4AF37] mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Broadcast Network
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  Our Documented <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f3e5b5]">Impact Journeys</span>
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
                  Real records of real actions. Our video broadcast system captures live activities straight from ground operations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal Stage */}
      <VideoPlayerModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </main>
  );
};

export default VideoGalleryPage;