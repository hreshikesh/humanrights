import { ArrowRight, MapPin } from "lucide-react";
import EventDate from "./EventDate";
const EventCard = ({ event }) => {
  return (
    <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:grid-cols-[180px_1fr]">

      <EventDate
        date={event.date}
        month={event.month}
        year={event.year}
        status={event.status}
      />

      <div>

        <img
          src={event.image}
          alt={event.title}
          className="mb-6 h-56 w-full rounded-2xl object-cover"
        />

        <h3 className="text-2xl font-bold text-[#0B1F3A]">
          {event.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-slate-500">
          <MapPin size={18} />
          {event.location}
        </div>

        <p className="mt-5 leading-8 text-slate-600">
          {event.description}
        </p>

        <button className="group mt-6 flex items-center gap-2 font-semibold text-[#0B1F3A] hover:text-[#D4AF37]">

          {event.status === "Upcoming"
            ? "Register Interest"
            : "View Event"}

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-2"
          />

        </button>

      </div>

    </div>
  );
};
export default EventCard;