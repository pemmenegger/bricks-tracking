// context/TimelineContext.tsx
import React, { createContext, useContext, useState } from "react";

type HighlightRange = {
  from: number;
  to: number;
  color: string;
  area: "full" | "bottom";
};

type TimelineContextType = {
  highlightRanges: HighlightRange[];
  setHighlightRanges: (ranges: HighlightRange[]) => void;
};

const TimelineContext = createContext<TimelineContextType | undefined>(
  undefined
);

export const useTimeline = () => {
  const context = useContext(TimelineContext);
  if (!context)
    throw new Error("useTimeline must be used within a TimelineProvider");
  return context;
};

export const TimelineProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [highlightRanges, setHighlightRanges] = useState<HighlightRange[]>([
    { from: 1900, to: 2000, color: "#e6d460", area: "full" },
    { from: 1850, to: 1880, color: "#ff7f50", area: "bottom" },
  ]);

  return (
    <TimelineContext.Provider value={{ highlightRanges, setHighlightRanges }}>
      {children}
    </TimelineContext.Provider>
  );
};
