import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import { teamMembers } from "./teamData";

const TeamSection = () => {
  return (
    <section  className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* Light grid like the screenshot */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 bg-[#D4AF37]/10 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header — matches first screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B1F3A] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            Our Team
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl lg:text-[44px]">
            People Behind the Mission
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Dedicated individuals working across the nation to uphold justice, equality, and human dignity through collective action.
          </p>

          <div className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-[#D4AF37]" />
        </motion.div>

        {/* 2 cols mobile (4 cards in 2 rows) · 4 cols desktop */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-5 lg:grid-cols-6 lg:gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;