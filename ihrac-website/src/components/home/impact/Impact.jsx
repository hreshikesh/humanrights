import { motion } from "framer-motion";
import { impactData } from "./impactData";
import ImpactCard from "./ImpactCard";
import AchievementStrip from "./AchievementStrip";

const Impact = () => {
  return (
    <section id="impact" className="py-1 lg:py-2 bg-slate-50 relative overflow-hidden">
      {/* Background Grid Pattern & Ambient Glow */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,#0B1F3A_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="uppercase tracking-[3px] text-[#0B1F3A] font-bold text-xs sm:text-sm">
              Our Impact
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.15]">
            Driving Positive Change Across Communities
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Through awareness, education, empowerment, and sustainable development initiatives, we continue working toward a more equitable society.
          </p>
        </motion.div>

        {/* Impact Cards Grid 
          - Updated to strictly 2 cards per row on mobile (`grid-cols-2`), adapting to 4 cards on desktop (`lg:grid-cols-4`).
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-16 justify-items-center">
          {impactData.map((item, index) => (
            <div key={item.id} className="w-full max-w-sm lg:max-w-none flex">
              <ImpactCard {...item} index={index} />
            </div>
          ))}
        </div>

        {/* Achievement Strip Footer */}
        <AchievementStrip />

      </div>
    </section>
  );
};

export default Impact;