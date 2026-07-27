import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import SectionHeader from "./SectionHeader";
import SectorTabs from "./SectorTabs";
import SectorGrid from "./SectorGrid";

import {
  primarySectors,
  secondarySectors,
} from "./sectorsData";

const WorkingSectors = () => {
  const [activeTab, setActiveTab] = useState("primary");

  const currentData =
    activeTab === "primary"
      ? primarySectors
      : secondarySectors;

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50">
      {/* Cinematic Background Ambient Lighting */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0B1F3A]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <SectionHeader />

        <SectorTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <SectorGrid data={currentData} />
          </motion.div>
        </AnimatePresence>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-sm sm:text-lg text-slate-600 max-w-xl mx-auto">
            Explore all initiatives that contribute to sustainable development and community welfare.
          </p>

          <button className="group mt-6 sm:mt-8 inline-flex items-center gap-3 rounded-full bg-[#0B1F3A] px-7 sm:px-9 py-3.5 sm:py-4 text-white text-sm sm:text-base font-bold shadow-lg shadow-[#0B1F3A]/20 transition-all hover:bg-[#154C79] hover:scale-105">
            <span>Explore All 48 Working Sectors</span>
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1.5"
            />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default WorkingSectors;