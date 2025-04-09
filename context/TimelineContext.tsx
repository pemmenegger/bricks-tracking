import React, { createContext, useContext, useState } from "react";
import { TimelineColoredRange } from "@/components/layout/Timeline";

type TimelineContextType = {
  highlightRanges: TimelineColoredRange[];
  setHighlightRanges: (ranges: TimelineColoredRange[]) => void;
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
  const [highlightRanges, setHighlightRanges] = useState<
    TimelineColoredRange[]
  >([]);

  console.log("context Highlight Ranges:", highlightRanges);

  return (
    <TimelineContext.Provider value={{ highlightRanges, setHighlightRanges }}>
      {children}
    </TimelineContext.Provider>
  );
};
