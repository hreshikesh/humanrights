// ImageGalleryHero.jsx
import { motion } from "framer-motion";
import { Camera, ArrowDown } from "lucide-react";
import InfiniteSpiral from "./InfiniteSpiral";
import { spiralImages } from "./galleryPageData";

const ImageGalleryHero = () => {
  const scrollToDome = () => {
    document.getElementById("dome-showcase")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1F3A] via-[#0d2444] to-[#0B1F3A] min-h-screen flex items-center py-20 lg:py-0">
      {/* Decorative Gold Orbs */}
      <div className="absolute top-20 -left-32 h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[150px] pointer-events-none" />

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
          
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight">
              See Our Story
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3e5b5] to-[#D4AF37]">
                Through Our Lens
              </span>
            </h1>

            {/* Divider */}
            <div className="mt-6 flex items-center gap-3 justify-center lg:justify-start">
              <div className="h-[2px] w-16 bg-gradient-to-r from-[#D4AF37] to-transparent" />
              <span className="text-xs uppercase tracking-[4px] text-[#D4AF37] font-semibold">
                Chronicles of Change
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Every image is a memory of change — captured during our healthcare drives, environmental missions, education programs, and countless welfare initiatives across every corner of India.
            </p>

            {/* Stats Row */}
            
            
          </motion.div>

          {/* RIGHT — Infinite Spiral */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative h-[500px] sm:h-[600px] lg:h-[650px] w-full"
          >
            {/* Gold ring frame */}
            <div className="absolute inset-0 rounded-full border border-[#D4AF37]/20 pointer-events-none" />
            <div className="absolute inset-8 rounded-full border border-[#D4AF37]/10 pointer-events-none" />

            {/* Spiral Container */}
            <div className="relative h-full w-full">
              <InfiniteSpiral
                items={spiralImages}
                animationMode="all"
                speed={0.5}
                radius={180}
                cardWidth={110}
                cardHeight={140}
                verticalSpacing={65}
                perspective={1100}
                cardRadius={14}
                centerScale={1.25}
                edgeBlur={5}
                cardsPerTurn={7}
                pauseOnHover
              />
            </div>

            {/* Center label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 hidden lg:block">
              <div className="text-center opacity-60">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mx-auto animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0B1F3A] pointer-events-none" />
    </section>
  );
};

export default ImageGalleryHero;