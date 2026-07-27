import { motion } from "framer-motion";

const stats = [
  {
    number: "48+",
    title: "Working Sectors",
    desc: "Targeted developmental focus",
  },
  {
    number: "100+",
    title: "Active Programs",
    desc: "Grassroots outreach initiatives",
  },
  {
    number: "1000+",
    title: "Lives Impacted",
    desc: "Empowering communities",
  },
  {
    number: "Nationwide",
    title: "Presence",
    desc: "Operational across regions",
  },
];

const HeroStats = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full [perspective:1200px]">
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        whileHover={{
          y: -4,
          rotateX: 2,
          rotateY: -1,
          scale: 1.01,
        }}
        className="
          relative
          overflow-hidden
          rounded-[28px]
          border border-white/15
          bg-gradient-to-br
          from-[#0B1F3A]
          via-[#10284A]
          to-[#183A66]
          backdrop-blur-2xl
          shadow-[0_25px_60px_rgba(0,0,0,0.6)]
          ring-1
          ring-white/10
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-4
          sm:gap-6
          p-5
          sm:p-8
          transform-gpu
          before:absolute
          before:top-0
          before:left-0
          before:h-px
          before:w-full
          before:bg-gradient-to-r
          before:from-transparent
          before:via-white/60
          before:to-transparent
        "
      >
        {/* Cinematic Shimmer Accent Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/15 rounded-bl-full pointer-events-none blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4AF37]/10 rounded-tr-full pointer-events-none blur-2xl" />

        {stats.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ y: -4 }}
            whileTap={{ y: -4 }}
            className="flex flex-col justify-between p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/50 active:border-[#D4AF37]/50 transition-all duration-300 group"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#D4AF37] tracking-tight group-hover:scale-105 group-active:scale-105 transition-transform origin-left">
                {item.number}
              </h3>
              <p className="text-white font-bold text-xs sm:text-sm mt-2 tracking-wide">
                {item.title}
              </p>
            </div>
            <p className="text-slate-300 text-[11px] sm:text-xs mt-2 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroStats;