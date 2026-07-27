import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import SectionHeader from "./SectionHeader";
import EventCard from "./EventCard";
import { events } from "./eventsData";

const LatestEvents = () => {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* Background Decorations */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#0B1F3A]/10 blur-[140px]" />


        <SectionHeader />

        {/* Timeline */}

        <div className="relative mx-auto mt-20 max-w-7xl">

          {/* Vertical Line */}

          <div className="absolute left-[90px] top-0 hidden h-full w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#0B1F3A]/30 to-transparent lg:block" />

          <div className="space-y-12">

            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}

          </div>

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >

          <h3 className="text-3xl font-bold text-[#0B1F3A]">

            Be Part of Our Next Initiative

          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">

            Participate in our upcoming awareness campaigns,
            healthcare programs, environmental drives,
            leadership workshops, and community welfare
            initiatives that create lasting social impact.

          </p>

          <button className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#0B1F3A] px-8 py-4 font-semibold text-white transition hover:bg-[#123C68]">

            View All Events

            <ArrowRight
              size={20}
              className="transition group-hover:translate-x-2"
            />

          </button>

        </motion.div>


    </section>
  );
};

export default LatestEvents;