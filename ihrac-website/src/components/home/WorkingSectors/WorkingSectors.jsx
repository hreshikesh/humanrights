// WorkingSectors.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SectionHeader from "./SectionHeader";
import SectorTabs from "./SectorTabs";
import SectorCarousel from "./SectorCarousel";

import { primarySectors, secondarySectors } from "./sectorsData";

const WorkingSectors = () => {
  const [activeTab, setActiveTab] = useState("primary");

  const currentData = activeTab === "primary" ? primarySectors : secondarySectors;

  return (
    <section
      id="workingSectors"
      className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 scroll-mt-24"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0B1F3A]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader />

        <SectorTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-10"
          >
            <SectorCarousel data={currentData} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WorkingSectors;