// VideoPlayerModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { X, Tag, ExternalLink } from "lucide-react";
import { useEffect } from "react";

const VideoPlayerModal = ({ video, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!video) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#0B1F3A]/95 backdrop-blur-xl animate-fade"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-[#0B1F3A] border border-[#D4AF37]/35 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Close HUD trigger */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 h-10 w-10 rounded-full bg-[#0B1F3A]/80 border border-white/10 text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0B1F3A] transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Secure Video Player */}
          <div className="relative w-full aspect-video bg-black">
            <iframe
              src={video.embedUrl}
              title={video.title}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Footer controls context */}
          <div className="p-5 sm:p-6 bg-gradient-to-b from-[#0B1F3A] to-[#071629] border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#f3e5b5]">
                  <Tag className="w-3 h-3 text-[#D4AF37]" />
                  {video.category}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">
                  {video.platform} Stream
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                {video.title}
              </h3>
            </div>

            <a
              href={video.originalUrl}
              target="_blank"
              rel="noreferrer"
              className="group shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white text-xs font-bold uppercase tracking-wider hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
            >
              <span>View Source</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoPlayerModal;