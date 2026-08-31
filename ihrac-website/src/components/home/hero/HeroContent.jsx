import { motion } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full">
      <div className="max-w-3xl">

        {/* Official Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#0B1F3A]/85 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
          Government Registered Non-Profit
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-5 text-white font-extrabold tracking-tight leading-[1.1] text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          International <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#D4AF37]">
            Human Rights
          </span> <br />
          Action Council
        </motion.h1>

        {/* Descriptive Text */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 sm:mt-6 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal"
        >
          Dedicated to safeguarding fundamental human rights, empowering vulnerable communities, promoting legal equality, and executing sustainable development strategies nationwide.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3.5"
        >
          <Link
            to="/#initiatives"
            className="bg-[#D4AF37] hover:bg-[#c29e30] text-[#0B1F3A] px-6 py-3.5 rounded-md font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-300 group"
          >
            Our Mission
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/#about"
            className="border-2 border-white/80 text-white hover:bg-white hover:text-[#0B1F3A] px-6 py-3.5 rounded-md font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            About Council
            <Info size={16} />
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default HeroContent;