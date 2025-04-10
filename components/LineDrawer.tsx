import { useEffect, useState, useCallback } from "react";

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

  const getElementCenterY = (rect: DOMRect) => rect.top + rect.height / 2;

  const calculateSegments = useCallback(() => {
    if (!fromId || !toId) return;

    const fromEl = document.getElementById(fromId);
    const toEl = document.getElementById(toId);
    if (!fromEl || !toEl) return;

    const fromRect = fromEl.getBoundingClientRect();
    const toRect = toEl.getBoundingClientRect();

    const fromX = fromRect.right;
    const fromY = getElementCenterY(fromRect);
    const toX = toRect.left;
    const toY = getElementCenterY(toRect);
    const midX = (fromX + toX) / 2;

    setSegments([
      {
        top: fromY - PIXEL_SIZE / 2,
        left: fromX,
        width: midX - fromX,
        height: PIXEL_SIZE,
      },
      {
        top: Math.min(fromY, toY),
        left: midX - PIXEL_SIZE / 2,
        width: PIXEL_SIZE,
        height: Math.abs(toY - fromY),
      },
      {
        top: toY - PIXEL_SIZE / 2,
        left: midX,
        width: toX - midX,
        height: PIXEL_SIZE,
      },
    ]);
  }, [fromId, toId]);

  useEffect(() => {
    let animationFrameId: number;

    const handleUpdate = () => {
      animationFrameId = requestAnimationFrame(calculateSegments);
    };

    handleUpdate();
    window.addEventListener("resize", handleUpdate);
    window.addEventListener("scroll", handleUpdate, true);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleUpdate);
      window.removeEventListener("scroll", handleUpdate, true);
    };
  }, [calculateSegments]);

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
