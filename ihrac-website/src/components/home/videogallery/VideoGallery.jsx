import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

import SectionHeader from "./SectionHeader";
import VideoCard from "./VideoCard";
import { videos } from "./videosData";

const VideoGallery = () => {
  const scrollRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Manual Scroll Handler
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.35; // Advance by approximately 1 card width
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Autoplay Engine
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;

        // Reset to start when reaching the end, or scroll forward
        if (scrollLeft >= maxScroll - 15) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const cardWidth = clientWidth * 0.28; // Step forward smoothly
          scrollRef.current.scrollTo({
            left: scrollLeft + cardWidth,
            behavior: "smooth",
          });
        }
      }
    }, 3500); // Moves every 3.5 seconds

    return () => clearInterval(interval);
  }, [isPlaying, isHovered]);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 lg:py-32">
      {/* Background Ambient Glows */}
      <div className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#0B1F3A]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header & Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 sm:mb-14">
          <div className="w-full md:w-auto">
            <SectionHeader />
          </div>

          {/* Slider Arrow Buttons & Autoplay Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* Autoplay Status / Toggle Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-slate-200 text-[#0B1F3A] hover:border-[#D4AF37] shadow-sm transition-all text-xs font-bold uppercase tracking-wider mr-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isPlaying && !isHovered ? "bg-emerald-400" : "bg-amber-400"} opacity-75`} />
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isPlaying && !isHovered ? "bg-emerald-500" : "bg-amber-500"}`} />
              </span>
              <span>{isPlaying ? (isHovered ? "Paused" : "Autoplay") : "Paused"}</span>
              {isPlaying && !isHovered ? <Pause size={14} /> : <Play size={14} />}
            </button>

            {/* Left Scroll */}
            <button
              onClick={() => scroll("left")}
              aria-label="Previous videos"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white hover:border-[#0B1F3A] shadow-md transition-all duration-300 active:scale-95"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Right Scroll */}
            <button
              onClick={() => scroll("right")}
              aria-label="Next videos"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white hover:border-[#0B1F3A] shadow-md transition-all duration-300 active:scale-95"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel Slider Track (Displays 3.5 Cards on Desktop) */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 pt-2 px-1 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {videos.map((video, index) => (
            <VideoCard key={video.id || index} {...video} />
          ))}
        </div>

        {/* Mobile Swipe Guidance Hint */}
        <p className="text-center text-xs text-slate-400 mt-1 sm:hidden font-semibold tracking-wide">
          ← Swipe or let it autoplay →
        </p>

        {/* Bottom Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-20 text-center bg-white border border-slate-200/80 rounded-2xl sm:rounded-[32px] p-6 sm:p-12 shadow-sm relative overflow-hidden group"
        >
          {/* Corner Accents */}
          <div className="absolute top-0 right-0 w-28 sm:w-36 h-28 sm:h-36 bg-[#D4AF37]/10 rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-28 sm:w-36 h-28 sm:h-36 bg-[#0B1F3A]/5 rounded-tr-full pointer-events-none" />

          <h3 className="text-xl sm:text-3xl font-black text-[#0B1F3A] tracking-tight">
            Watch the Impact We Create
          </h3>

          <p className="mx-auto mt-3 sm:mt-4 max-w-3xl text-xs sm:text-lg leading-relaxed text-slate-600">
            Explore inspiring videos from our awareness campaigns, healthcare camps, environmental initiatives, leadership programs, and community outreach activities across India.
          </p>

          <button className="group relative mt-6 sm:mt-10 inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#0B1F3A] px-6 py-3 sm:px-8 sm:py-4 font-bold text-white shadow-lg shadow-[#0B1F3A]/20 transition-all duration-300 hover:bg-[#123C68] hover:scale-105 active:scale-95">
            {/* Shimmer Light Streak */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            <span className="relative z-10 text-xs sm:text-base">View Complete Video Gallery</span>
            <ArrowRight
              size={16}
              className="relative z-10 transition-transform group-hover:translate-x-1 sm:w-5 sm:h-5"
            />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default VideoGallery;