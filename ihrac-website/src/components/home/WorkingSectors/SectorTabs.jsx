// SectorTabs.jsx
import { primarySectors, secondarySectors } from "./sectorsData";

const SectorTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mt-10 sm:mt-12 flex justify-center">
      <div className="inline-flex rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
        {[
          { key: "primary", label: "Primary Sectors", count: primarySectors.length },
          { key: "secondary", label: "All Sectors", count: secondarySectors.length },
        ].map((tab) => {
          const active = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                active
                  ? "bg-[#0B1F3A] text-white shadow-sm"
                  : "text-slate-600 hover:text-[#0B1F3A]"
              }`}
            >
              {tab.label}
              <span
                className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-bold ${
                  active
                    ? "bg-[#D4AF37] text-[#0B1F3A]"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SectorTabs;