import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { aboutFeatures } from "./aboutData";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col"
    >
      {/* Subtitle Badge */}
      <div className="inline-flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
        <span className="text-[#0B1F3A] uppercase tracking-[2px] font-bold text-xs sm:text-sm">
          Who We Are
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.15]">
        Building a Better Society Through Human Rights
      </h2>

      {/* Description */}
      <p className="mt-6 text-slate-600 leading-relaxed text-base sm:text-lg">
        The International Human Rights Action Council is officially committed to protecting fundamental human rights, empowering vulnerable communities, promoting absolute equality, and fostering sustainable national development across 48 core working sectors.
      </p>

      <div className="grid grid-cols-3 gap-2 sm:gap-6 mt-8">
  {aboutFeatures.map((item, index) => (
    <FeatureCard key={index} {...item} />
  ))}
</div>

      {/* Action Buttons */}
      {/* <div className="flex flex-wrap items-center gap-4 mt-10">
        <Link
          to="/about"
          className="bg-[#0B1F3A] hover:bg-[#15325c] text-white px-7 py-3.5 rounded-md font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Learn More
        </Link>

        <Link
          to="/contact"
          className="border-2 border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white px-7 py-3.5 rounded-md font-bold uppercase tracking-wider text-sm transition-all duration-300 flex items-center gap-2 group"
        >
          Contact Us
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div> */}
    </motion.div>
  );
};

export default AboutContent;