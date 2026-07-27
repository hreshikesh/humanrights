import SectorCard from "./SectorCard";

const SectorGrid = ({ data }) => {
  return (
    // Responsive Layout: 2 cards per row on mobile (grid-cols-2), 3 per row on desktop (xl:grid-cols-3)
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {data.map((sector, index) => (
        <SectorCard
          key={sector.id}
          {...sector}
          index={index}
        />
      ))}
    </div>
  );
};

export default SectorGrid;