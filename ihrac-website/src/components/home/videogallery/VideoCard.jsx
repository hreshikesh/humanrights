import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Maximize2 } from "lucide-react";

const VideoCard = ({ videoUrl, index = 0 }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const openFullscreen = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-sm transition-all duration-300 hover:border-[#D4AF37]/40 hover:shadow-xl cursor-pointer"
      onClick={togglePlay}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={videoUrl}
        className="h-full w-full object-cover"
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Overlay — hides when playing */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-[#0B1F3A]/20 to-transparent transition-opacity duration-300 ${
          isPlaying
            ? "opacity-0 group-hover:opacity-100"
            : "opacity-100"
        }`}
      />

      {/* Center Play/Pause */}
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 ${
          isPlaying
            ? "opacity-0 group-hover:opacity-100"
            : "opacity-100"
        }`}
      >
        <div className="relative flex items-center justify-center">
          {/* Ping */}
          {!isPlaying && (
            <div className="absolute h-16 w-16 rounded-full bg-[#D4AF37]/30 animate-ping" />
          )}

          <div
            className={`relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/30 backdrop-blur-md shadow-lg transition-all duration-300 ${
              isPlaying
                ? "bg-white/20 hover:bg-white/30"
                : "bg-white/20 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37]"
            }`}
          >
            {isPlaying ? (
              <Pause
                className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                fill="currentColor"
              />
            ) : (
              <Play
                className="ml-0.5 h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-[#0B1F3A]"
                fill="currentColor"
              />
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen button */}
      <button
        onClick={openFullscreen}
        className={`absolute bottom-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm text-white transition-all duration-300 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#0B1F3A] ${
          isPlaying
            ? "opacity-0 group-hover:opacity-100"
            : "opacity-100"
        }`}
      >
        <Maximize2 size={16} />
      </button>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#D4AF37] transition-all duration-500 z-20" />
    </motion.div>
  );
};

export default VideoCard;