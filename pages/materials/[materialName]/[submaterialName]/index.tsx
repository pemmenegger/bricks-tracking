import { useRouter } from "next/router";
import { useEffect } from "react";
import React from "react";
import { useTimeline } from "@/context/TimelineContext";
import { useLineDrawer } from "@/context/LineDrawerContext";
import { MaterialContentMap } from "@/components/materials/content";
import SubmaterialLayout from "@/components/layout/SubmaterialLayout";

export default function SubmaterialPage() {
  const { setTimelineRanges } = useTimeline();
  const { setLines } = useLineDrawer();
  const router = useRouter();
  const { materialName, submaterialName } = router.query;

  const materialContent = MaterialContentMap[materialName as string];
  const submaterialContent =
    materialContent?.submaterials?.[submaterialName as string];

  useEffect(() => {
    if (!materialContent) return;

    if (materialContent.props.timelineRange) {
      const timelineRanges = [materialContent.props.timelineRange];

      if (materialContent.submaterials) {
        Object.entries(materialContent.submaterials).map(([_, submaterial]) => {
          if (submaterial.props.timelineRange) {
            timelineRanges.push(submaterial.props.timelineRange);
          }
        });
      }

      setTimelineRanges(timelineRanges);
    }

    const fromId = materialContent.props.lineFromId;
    const toId = materialContent.props.lineToId;
    const color = materialContent.theme.colorValue;
    if (fromId && toId) {
      setLines([{ fromId, toId, color }]);
    }
  }, [materialContent]);

  if (!materialContent) {
    return <div>Unknown material</div>;
  }

  if (!submaterialContent!) {
    return <div>Unknown submaterial</div>;
  }

  return (
    <SubmaterialLayout
      materialContent={materialContent}
      submaterialContent={submaterialContent}
    />
  );
}
