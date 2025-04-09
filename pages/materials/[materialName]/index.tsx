import MaterialsLayout from "@/components/layout/MaterialsLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import React from "react";
import {
  BrickRData,
  BrickVData,
  BrickZData,
  LintelData,
  MaterialData,
  MortarData,
} from "@/components/materials/data";
import { useTimeline } from "@/context/TimelineContext";

const MaterialDataMap: Record<string, MaterialData> = {
  "brick-r": BrickRData,
  "brick-v": BrickVData,
  "brick-z": BrickZData,
  mortar: MortarData,
  lintel: LintelData,
};

function MaterialContent({ MaterialData }: { MaterialData: MaterialData }) {
  const { setHighlightRanges } = useTimeline();

  useEffect(() => {
    setHighlightRanges(MaterialData?.timelineColoredRanges || []);
  }, [MaterialData]);

  return <MaterialData.component />;
}

export default function MaterialPage() {
  const router = useRouter();
  const { materialName } = router.query;
  const MaterialData = MaterialDataMap[materialName as string];

  if (!MaterialData) {
    return <div>Unknown material</div>;
  }

  return (
    <MaterialsLayout>
      <MaterialContent MaterialData={MaterialData} />
    </MaterialsLayout>
  );
}
