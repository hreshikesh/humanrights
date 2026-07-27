import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import SectionHeader from "./SectionHeader";
import FeaturedInitiativeHero from "./FeaturedInitiativeHero";
import InitiativeListItem from "./InitiativeListItem";
import { initiatives } from "./initiativesData";

// Splits the flat list into rows: each "large" item starts a new row,
// and subsequent small items belong to that row's list — until the next large item.
const groupInitiatives = (items) => {
  const rows = [];
  let current = null;

  items.forEach((item, i) => {
    const number = String(i + 1).padStart(2, "0");
    if (item.large || !current) {
      current = { hero: { ...item, number }, list: [] };
      rows.push(current);
    } else {
      current.list.push({ ...item, number });
    }
  });

  return rows;
};

const FeaturedInitiatives = () => {
  const rows = groupInitiatives(initiatives);

  return (
    <section className="relative bg-white py-16 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="mb-10 sm:mb-14">
          <SectionHeader />
        </div>

        <div className="flex flex-col gap-12 sm:gap-16">
          {rows.map((row, rowIndex) => (
            <div
              key={row.hero.id}
              className={`grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-14 ${
                rowIndex > 0 ? "pt-12 sm:pt-16 border-t border-[#0B1F3A]/10" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <FeaturedInitiativeHero {...row.hero} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col justify-center"
              >
                {row.list.length > 0 ? (
                  row.list.map((item) => (
                    <InitiativeListItem key={item.id} {...item} />
                  ))
                ) : (
                  <p className="text-sm text-slate-400 italic">
                    More programmes coming soon.
                  </p>
                )}
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 sm:mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-[#0B1F3A]/10 pt-8 sm:pt-10"
        >
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            Explore the full range of programmes driving change across every state we work in.
          </p>

          <button className="group inline-flex items-center gap-2.5 rounded-full bg-[#0B1F3A] px-6 sm:px-7 py-3 sm:py-3.5 text-white text-sm font-bold shadow-sm transition-colors hover:bg-[#12345A] shrink-0">
            <span>View all initiatives</span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedInitiatives;