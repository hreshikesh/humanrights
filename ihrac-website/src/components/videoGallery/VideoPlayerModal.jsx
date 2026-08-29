// src/components/videoGallery/VideoPlayerModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

const VideoPlayerModal = ({ video, onClose }) => {
  useEffect(() => {
    if (!video) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#0B1F3A]/95 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, y: 16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 16, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-black border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close video"
              className="absolute top-3 right-3 z-20 h-10 w-10 rounded-full bg-[#0B1F3A]/85 border border-white/15 text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0B1F3A] transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cloudinary / direct MP4 player */}
            <div className="relative w-full aspect-video bg-black">
              <video
                key={video.videoUrl}
                src={video.videoUrl}
                poster={video.thumbnailUrl}
                controls
                autoPlay
                playsInline
                className="absolute inset-0 h-full w-full object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoPlayerModal;