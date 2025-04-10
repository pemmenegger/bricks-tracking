import React, { createContext, useContext, useState } from "react";
import LineDrawer from "@/components/LineDrawer";

interface Line {
  fromId: string;
  toId: string;
  color: string;
}

interface LineDrawerContextType {
  addLine: (fromId: string, toId: string, color: string) => void;
  clearLines: () => void;
  replaceWithLine: (fromId: string, toId: string, color: string) => void;
  setLines: React.Dispatch<React.SetStateAction<Line[]>>;
}

const LineDrawerContext = createContext<LineDrawerContextType | undefined>(
  undefined
);

export const useLineDrawer = () => {
  const context = useContext(LineDrawerContext);
  if (!context) {
    throw new Error("useLineDrawer must be used within a LineDrawerProvider");
  }
  return context;
};

export const LineDrawerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lines, setLines] = useState<Line[]>([]);

  const addLine = (fromId: string, toId: string, color: string) => {
    setLines((prev) => [...prev, { fromId, toId, color }]);
  };

  const clearLines = () => {
    setLines([]);
  };

  const replaceWithLine = (fromId: string, toId: string, color: string) => {
    setLines([{ fromId, toId, color }]);
  };

  return (
    <LineDrawerContext.Provider
      value={{ addLine, clearLines, replaceWithLine, setLines }}
    >
      {children}
      <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50">
        {lines.map((line, index) => (
          <LineDrawer
            key={index}
            fromId={line.fromId}
            toId={line.toId}
            color={line.color}
          />
        ))}
      </div>
    </LineDrawerContext.Provider>
  );
};
