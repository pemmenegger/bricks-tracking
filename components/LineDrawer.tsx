import { useEffect, useState } from "react";

interface Props {
  fromId: string | null;
  toId: string | null;
  color: string;
}

interface Segment {
  top: number;
  left: number;
  width: number;
  height: number;
}

const PIXEL_SIZE = 3;

const LineDrawer: React.FC<Props> = ({ fromId, toId, color }) => {
  const [segments, setSegments] = useState<Segment[]>([]);

  const updateLines = () => {
    if (!fromId || !toId) return;

    const fromEl = document.getElementById(fromId);
    const toEl = document.getElementById(toId);
    if (!fromEl || !toEl) return;

    const fromRect = fromEl.getBoundingClientRect();
    const toRect = toEl.getBoundingClientRect();

    const fromX = fromRect.right;
    const fromY = fromRect.top + fromRect.height / 2;
    const toX = toRect.left;
    const toY = toRect.top + toRect.height / 2;

    const midX = (fromX + toX) / 2;

    const newSegments: Segment[] = [
      {
        top: fromY,
        left: fromX,
        width: midX - fromX,
        height: PIXEL_SIZE,
      },
      {
        top: Math.min(fromY, toY),
        left: midX,
        width: PIXEL_SIZE,
        height: Math.abs(toY - fromY),
      },
      {
        top: toY,
        left: midX,
        width: toX - midX,
        height: PIXEL_SIZE,
      },
    ];

    setSegments(newSegments);
  };

  useEffect(() => {
    updateLines();
    window.addEventListener("resize", updateLines);
    window.addEventListener("scroll", updateLines, true);
    return () => {
      window.removeEventListener("resize", updateLines);
      window.removeEventListener("scroll", updateLines, true);
    };
  }, [fromId, toId]);

  return (
    <>
      {segments.map((segment, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            backgroundColor: color,
            ...segment,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
};

export default LineDrawer;
