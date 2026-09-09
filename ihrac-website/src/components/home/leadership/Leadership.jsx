import { motion } from "framer-motion";
import LeaderCard from "./LeaderCard";
import LeadershipQuote from "./LeadershipQuote";
import { leadershipData } from "./leadershipData";

const Leadership = () => {
  return (
    <section id="leadership" className="py-12 lg:py-12 bg-slate-50 relative overflow-hidden scroll-mt-24">
      {/* Ambient Pattern & Glow Background */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,#0B1F3A_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Header */}
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
              Our Leadership
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.15]">
            Visionary Leaders Committed to Human Rights
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Meet the dedicated leaders guiding the International Human Rights Action Council with integrity, compassion, and a shared vision for creating meaningful change.
          </p>
        </motion.div>

        {/* 3-Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mt-16 sm:mt-20">
          {leadershipData.map((leader, index) => (
            <LeaderCard
              key={leader.id}
              {...leader}
              index={index}
            />
          ))}
        </div>

        {/* Quote Banner */}
        <LeadershipQuote />

      </div>
    </section>
  );
};

export default Leadership;