// DomeShowcase.jsx
import { motion } from "framer-motion";
import { Globe2, Hand, HandFist, ArrowRight } from "lucide-react";
import DomeGallery from "./DomeGallery";
import { domeImages } from "./galleryPageData";

const DomeShowcase = () => {
  return (
    <section
      id="dome-showcase"
      className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden"
    >
      {/* Soft Background Blur Effects */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#D4AF37]/15 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#0B1F3A]/10 blur-[140px] pointer-events-none" />

      {/* Subtle grid pattern */}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] leading-tight tracking-tight">
            A World of{" "}
            <span className="text-[#D4AF37]">Impact</span>{" "}
            in Every Direction
          </h2>

        
          {/* Interaction Hint Pill */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs text-slate-600 shadow-sm">
            <Hand className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span className="font-medium">Drag to rotate • Click any image to enlarge</span>
          </div>
        </motion.div>

        {/* Dome Gallery Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl shadow-[#0B1F3A]/20 bg-[#0B1F3A]"
        >
          {/* Gold decorative corners */}
          <div className="absolute top-4 left-4 z-30 w-10 h-10 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-lg pointer-events-none" />
          <div className="absolute top-4 right-4 z-30 w-10 h-10 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-4 left-4 z-30 w-10 h-10 border-b-2 border-l-2 border-[#D4AF37] rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-4 right-4 z-30 w-10 h-10 border-b-2 border-r-2 border-[#D4AF37] rounded-br-lg pointer-events-none" />

          <DomeGallery
            images={domeImages}
            fit={0.65}
            maxVerticalRotationDeg={5}
            dragSensitivity={22}
            dragDampening={0.5}
            grayscale={false}
            overlayBlurColor="#0B1F3A"
            imageBorderRadius="16px"
            openedImageBorderRadius="24px"
            openedImageWidth="420px"
            openedImageHeight="420px"
          />
        </motion.div>

        {/* Bottom Highlight — Serving 40+ Sectors CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 sm:mt-12 relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0B1F3A] via-[#122b4d] to-[#0B1F3A] border border-[#D4AF37]/30 shadow-xl"
        >
          {/* Decorative gold blur */}
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#D4AF37]/20 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-[100px] pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 p-6 sm:p-8 lg:p-10">
            {/* Left: Icon + Text */}
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              {/* Big Gold Icon */}
              <div className="shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#b8941f] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
                <HandFist className="w-8 h-8 sm:w-10 sm:h-10 text-[#0B1F3A]" strokeWidth={2.5} />
              </div>

              <div>
              

                {/* Main Highlight */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  Serving{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f3e5b5]">
                    40+ Sectors
                  </span>{" "}
               
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
                  From healthcare and education to environment and rural welfare — driving change in every field we touch.
                </p>
              </div>
            </div>

       
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DomeShowcase;