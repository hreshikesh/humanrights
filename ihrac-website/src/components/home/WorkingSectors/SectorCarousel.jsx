// SectorCarousel.jsx
import React, { useMemo } from "react";
import SectorCard from "./SectorCard";

const SectorCarousel = ({ data = [] }) => {
  // To keep scrolling extremely fluid, divide large datasets into parallel offset lines
  const rows = useMemo(() => {
    if (data.length <= 5) return [data]; // Single row for Primary Sectors
    
    // Split 48 elements into 3 balanced rows
    const size = Math.ceil(data.length / 3);
    return [
      data.slice(0, size),
      data.slice(size, size * 2),
      data.slice(size * 2)
    ];
  }, [data]);

  return (
    <div className="flex flex-col gap-6 py-4 overflow-hidden w-full relative">
      {/* Soft gradient masks to fade the edges seamlessly */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

      {rows.map((rowItems, rowIndex) => {
        const isEven = rowIndex % 2 === 0;
        // Triple-clone content to guarantee smooth seamless visual loop coverage
        const clonedItems = [...rowItems, ...rowItems, ...rowItems];

        return (
          <div 
            key={rowIndex} 
            className="flex w-max relative overflow-hidden group"
          >
            <div
              className={`flex gap-6 transform-gpu ${
                isEven 
                  ? "animate-[marqueeLeft_35s_linear_infinite]" 
                  : "animate-[marqueeRight_35s_linear_infinite]"
              } group-hover:[animation-play-state:paused]`}
            >
              {clonedItems.map((sector, index) => (
                <SectorCard
                  key={`${sector.id}-${rowIndex}-${index}`}
                  icon={sector.icon}
                  title={sector.title}
                  description={sector.description}
                />
              ))}
            </div>
          </div>
        );
      })}

      {/* Hardware-accelerated CSS Keyframes */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }
        @keyframes marqueeRight {
          0% { transform: translate3d(-33.333%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
      `}</style>
    </div>
  );
};

export default SectorCarousel;