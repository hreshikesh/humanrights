const EventDate = ({
  date,
  month,
  year,
  status,
}) => {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-[#0B1F3A] p-8 text-white">

      <span className="text-sm tracking-[3px]">
        {month}
      </span>

      <h3 className="my-2 text-5xl font-bold">
        {date}
      </h3>

      <span className="text-lg">
        {year}
      </span>

      <span
        className={`mt-6 rounded-full px-4 py-2 text-sm font-semibold ${
          status === "Upcoming"
            ? "bg-green-500"
            : "bg-slate-600"
        }`}
      >
        {status}
      </span>

    </div>
  );
};

export default EventDate;