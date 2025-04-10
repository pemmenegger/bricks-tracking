import { useRouter } from "next/router";
import { useEffect } from "react";
import React from "react";
import { useTimeline } from "@/context/TimelineContext";
import { useLineDrawer } from "@/context/LineDrawerContext";
import { MaterialContentMap } from "@/components/materials/content";
import MaterialLayout from "@/components/layout/MaterialLayout";

export default function MaterialPage() {
  const { setHighlightRanges } = useTimeline();
  const { setLines } = useLineDrawer();
  const router = useRouter();
  const { materialName } = router.query;

  const materialContent = MaterialContentMap[materialName as string];

  useEffect(() => {
    setHighlightRanges(materialContent.props.timelineColoredRanges || []);

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

  if (!materialContent.videoProps!) {
    return <div>No video</div>;
  }

  return <MaterialLayout materialContent={materialContent} />;
}
