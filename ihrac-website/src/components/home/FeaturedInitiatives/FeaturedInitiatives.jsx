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
    <section id="initiatives" className="relative bg-white py-16 sm:py-24 lg:py-28">
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

      

      </div>
    </section>
  );
};

export default FeaturedInitiatives;