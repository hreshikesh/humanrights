import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

/*
 * Add only your Cloudinary image links here.
 * The original URL is used for the full-screen preview.
 */

import { certificateImages } from "./certificates";
/*
 * Uses a smaller Cloudinary version inside the marquee.
 * This prevents large original images from slowing the page.
 */
const getThumbnail = (url) => {
  if (
    typeof url === "string" &&
    url.includes("res.cloudinary.com") &&
    url.includes("/image/upload/")
  ) {
    return url.replace(
      "/image/upload/",
      "/image/upload/f_auto,q_auto:eco,w_700,c_limit/"
    );
  }

  return url;
};

const Certificate = ({ images = certificateImages, speed = 35 }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  /*
   * Ensures the marquee remains visually full even when you
   * currently have only one or two certificate links.
   */
  const marqueeImages = useMemo(() => {
    if (!images.length) return [];

    const minimumCards = 8;
    const totalCards = Math.max(minimumCards, images.length);

    return Array.from({ length: totalCards }, (_, index) => ({
      src: images[index % images.length],
      originalIndex: index % images.length,
    }));
  }, [images]);

  /* Close modal with Escape and lock body scrolling. */
  useEffect(() => {
    if (!selectedImage) return undefined;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  if (!images.length) return null;

  return (
    <>
      <section
        id="certificate"
        className="relative overflow-hidden bg-slate-50 py-14 sm:py-20"
      >
        {/* Light grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0B1F3A 1px, transparent 1px), linear-gradient(90deg, #0B1F3A 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Theme glows */}
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#D4AF37]/15 blur-[110px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#0B1F3A]/10 blur-[120px]" />

        <div className="relative z-10">
          {/* Marquee edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-slate-50 to-transparent sm:w-24 lg:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-slate-50 to-transparent sm:w-24 lg:w-40" />

          <div
            className="certificate-marquee overflow-hidden py-5"
            style={{
              "--certificate-speed": `${speed}s`,
            }}
          >
            <div className="certificate-track">
              {/* First identical group */}
              <div className="certificate-group">
                {marqueeImages.map((item, index) => (
                  <CertificateCard
                    key={`first-${item.originalIndex}-${index}`}
                    image={item.src}
                    index={item.originalIndex}
                    onOpen={() => setSelectedImage(item.src)}
                  />
                ))}
              </div>

              {/* Second identical group creates seamless looping */}
              <div className="certificate-group" aria-hidden="true">
                {marqueeImages.map((item, index) => (
                  <CertificateCard
                    key={`second-${item.originalIndex}-${index}`}
                    image={item.src}
                    index={item.originalIndex}
                    onOpen={() => setSelectedImage(item.src)}
                    duplicate
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .certificate-track {
            display: flex;
            width: max-content;
            transform: translate3d(0, 0, 0);
            will-change: transform;
            animation: certificateMarquee
              var(--certificate-speed, 35s)
              linear
              infinite;
          }

          .certificate-group {
            display: flex;
            flex-shrink: 0;
            gap: 1rem;
            padding-right: 1rem;
          }

          .certificate-marquee:hover .certificate-track {
            animation-play-state: paused;
          }

          @keyframes certificateMarquee {
            from {
              transform: translate3d(0, 0, 0);
            }

            to {
              transform: translate3d(-50%, 0, 0);
            }
          }

          @media (min-width: 640px) {
            .certificate-group {
              gap: 1.5rem;
              padding-right: 1.5rem;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .certificate-track {
              animation-play-state: paused;
            }
          }
        `}</style>
      </section>

      {/* Full image preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Certificate preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061426]/95 p-4 backdrop-blur-md sm:p-8"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close certificate"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0B1F3A]/90 text-white shadow-xl transition-all duration-300 hover:rotate-90 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B1F3A] sm:right-7 sm:top-7"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 28,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-[90vh] max-w-6xl items-center justify-center overflow-hidden rounded-2xl border border-[#D4AF37]/40 bg-white p-1 shadow-2xl shadow-black/60 sm:rounded-3xl"
            >
              <img
                src={selectedImage}
                alt="Certificate preview"
                className="block max-h-[88vh] max-w-full rounded-[14px] object-contain sm:rounded-[20px]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const CertificateCard = ({
  image,
  index,
  onOpen,
  duplicate = false,
}) => {
  return (
    <button
      type="button"
      onClick={onOpen}
      tabIndex={duplicate ? -1 : 0}
      aria-label={`View certificate ${index + 1}`}
      className="
        group relative h-[175px] w-[245px] shrink-0
        overflow-hidden rounded-2xl border border-[#D4AF37]/25
        bg-white p-2
        shadow-[0_10px_30px_rgba(11,31,58,0.10)]
        transition-all duration-300
        hover:-translate-y-1 hover:border-[#D4AF37]/70
        hover:shadow-[0_18px_40px_rgba(11,31,58,0.20)]
        focus:outline-none focus-visible:ring-2
        focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2
        sm:h-[220px] sm:w-[315px] sm:rounded-3xl sm:p-3
      "
    >
      <img
        src={getThumbnail(image)}
        alt=""
        loading="lazy"
        decoding="async"
        draggable={false}
        className="h-full w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.02] sm:rounded-2xl"
      />

      {/* Subtle hover tint only—no text */}
      <div className="pointer-events-none absolute inset-0 bg-[#0B1F3A]/0 transition-colors duration-300 group-hover:bg-[#0B1F3A]/5" />

      {/* Gold bottom accent */}
      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-[2px] origin-center scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />
    </button>
  );
};

export default Certificate;