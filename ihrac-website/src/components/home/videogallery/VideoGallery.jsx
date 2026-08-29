import { motion } from "framer-motion";
import VideoCard from "./VideoCard";
import { videos } from "./videosData";
import SectionHeader from "./SectionHeader";
const VideoGallery = () => {
  return (
    <section
      id="videoGallery"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#0B1F3A_1px,transparent_1px),linear-gradient(to_bottom,#0B1F3A_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#0B1F3A]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        {/* Header */}
        <SectionHeader />
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 96, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-5 h-1 rounded-full bg-[#D4AF37]"
        />

        {/* Bento / Masonry Grid */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 auto-rows-[280px] sm:auto-rows-[320px] lg:auto-rows-[260px]">
          {videos.map((video, index) => {
            // Create visual variety
            const spanClass = getSpanClass(index, videos.length);

            return (
              <div key={video.id} className={spanClass}>
                <VideoCard {...video} index={index} />
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <div className="h-px flex-1 max-w-[100px] bg-slate-200" />
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            {videos.length} Videos • Click to Play
          </p>
          <div className="h-px flex-1 max-w-[100px] bg-slate-200" />
        </motion.div>
      </div>
    </section>
  );
};

// Creates a bento-style visual variety pattern
const getSpanClass = (index, total) => {
  const pattern = index % 6;

  switch (pattern) {
    case 0:
      // Large — spans 2 columns + 2 rows
      return "sm:col-span-2 sm:row-span-2 [&>div]:h-full";
    case 1:
      return "row-span-1 [&>div]:h-full";
    case 2:
      return "row-span-1 [&>div]:h-full";
    case 3:
      return "row-span-1 [&>div]:h-full";
    case 4:
      return "row-span-1 [&>div]:h-full";
    case 5:
      // Wide — spans 2 columns
      return "sm:col-span-2 row-span-1 [&>div]:h-full";
    default:
      return "[&>div]:h-full";
  }
};

export default VideoGallery;