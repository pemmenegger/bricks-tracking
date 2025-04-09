import React from "react";
import { useTimeline } from "@/context/TimelineContext";

export type TimelineColoredRange = {
  startYear: number;
  endYear: number;
  bgColorClass: string;
  area: "full" | "top" | "bottom";
};

const Timeline: React.FC = () => {
  const { highlightRanges } = useTimeline();

  const startYear = 1800;
  const endYear = 2050;
  const yearSpan = endYear - startYear;
  const totalSteps = yearSpan / 10;
  const paddingPercent = 2;

  const years = Array.from(
    { length: totalSteps + 1 },
    (_, i) => startYear + i * 10
  );

  const getCenterPercent = (year: number) => {
    const i = (year - startYear) / 10;
    const stepFraction = i / totalSteps;
    return paddingPercent + stepFraction * (100 - 2 * paddingPercent);
  };

  const getRangeStyle = (range: TimelineColoredRange) => {
    const leftPercent = getCenterPercent(range.startYear);
    const rightPercent = getCenterPercent(range.endYear);
    const widthPercent = rightPercent - leftPercent;

    const baseStyle: React.CSSProperties = {
      position: "absolute",
      left: `${leftPercent}%`,
      width: `${widthPercent}%`,
      opacity: 0.6,
    };

    switch (range.area) {
      case "top":
        return { ...baseStyle, height: "50%", top: 0 };
      case "bottom":
        return { ...baseStyle, height: "50%", bottom: 0 };
      default:
        return { ...baseStyle, height: "100%", top: 0 };
    }
  };

  return (
    <div className="w-full bg-gray">
      <div className="relative w-full h-[100px]">
        {highlightRanges.map((range, idx) => (
          <div
            key={idx}
            className={range.bgColorClass}
            style={getRangeStyle(range)}
          />
        ))}

        <div className="absolute top-1/2 left-0 right-0 h-1 bg-white z-10 -translate-y-1/2" />

        {years.map((year) => {
          const leftPercent = getCenterPercent(year);
          const isMajorYear = year % 50 === 0;

          return (
            <div
              key={year}
              className="absolute z-20 flex flex-col items-center"
              style={{ left: `${leftPercent}%`, top: "50%" }}
            >
              <div
                className={`relative rounded-full bg-white -translate-x-1/2 -translate-y-1/2 ${
                  isMajorYear ? "w-[26px] h-[26px]" : "w-[16px] h-[16px]"
                }`}
              >
                <span
                  className={`absolute left-[13px] top-[36px] -translate-x-1/2 text-s whitespace-nowrap text-white ${
                    isMajorYear ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {year}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
