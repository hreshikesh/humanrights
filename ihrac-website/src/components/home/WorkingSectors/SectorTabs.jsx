const SectorTabs = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="flex justify-center mt-10 sm:mt-12 mb-12 sm:mb-16">
      <div className="bg-slate-200/80 backdrop-blur-md rounded-full p-1.5 sm:p-2 flex gap-1.5 sm:gap-2 shadow-inner border border-slate-300/60">
        {["primary", "secondary"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-sm font-bold tracking-wide ${
              activeTab === tab
                ? "bg-[#0B1F3A] text-white shadow-md scale-[1.02]"
                : "text-slate-600 hover:text-[#0B1F3A]"
            }`}
          >
            {tab === "primary"
              ? "Primary Sectors"
              : "Secondary Sectors"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectorTabs;