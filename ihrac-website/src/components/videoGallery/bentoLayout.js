// bentoLayout.js
export const generateBentoLayout = (total) => {
  const layouts = [];
  
  if (total === 1) return [{ cols: "col-span-12", rows: "row-span-2 h-[450px]" }];
  if (total === 2) return [
    { cols: "col-span-12 md:col-span-8", rows: "row-span-2 h-[420px]" },
    { cols: "col-span-12 md:col-span-4", rows: "row-span-2 h-[420px]" }
  ];
  if (total === 3) return [
    { cols: "col-span-12 md:col-span-8", rows: "row-span-2 h-full" },
    { cols: "col-span-12 md:col-span-4", rows: "row-span-1 h-full" },
    { cols: "col-span-12 md:col-span-4", rows: "row-span-1 h-full" }
  ];

  // Map patterns (groups of 5)
  for (let i = 0; i < total; i++) {
    const cycle = i % 5;
    if (cycle === 0) layouts.push({ cols: "col-span-12 md:col-span-8", rows: "row-span-2 h-full" });
    else if (cycle === 1) layouts.push({ cols: "col-span-12 md:col-span-4", rows: "row-span-1 h-full" });
    else if (cycle === 2) layouts.push({ cols: "col-span-12 md:col-span-4", rows: "row-span-1 h-full" });
    else if (cycle === 3) layouts.push({ cols: "col-span-12 md:col-span-6", rows: "row-span-1 h-full" });
    else layouts.push({ cols: "col-span-12 md:col-span-6", rows: "row-span-1 h-full" });
  }

  // Auto balance edge counts
  const remainder = total % 5;
  if (remainder === 1) {
    layouts[total - 1] = { cols: "col-span-12", rows: "row-span-1 h-[260px]" };
  } else if (remainder === 4) {
    layouts[total - 1] = { cols: "col-span-12", rows: "row-span-1 h-full" };
  }

  return layouts;
};