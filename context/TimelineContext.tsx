import React, { createContext, useContext, useState } from "react";
import { timelineRange } from "@/components/ui/Timeline";

type TimelineContextType = {
  timelineRanges: timelineRange[];
  setTimelineRanges: React.Dispatch<React.SetStateAction<timelineRange[]>>;
  clearTimelineRanges: () => void;
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
  const [timelineRanges, setTimelineRanges] = useState<timelineRange[]>([]);

  const clearTimelineRanges = () => {
    setTimelineRanges([]);
  };

  return (
    <TimelineContext.Provider
      value={{
        timelineRanges,
        setTimelineRanges,
        clearTimelineRanges,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
};
