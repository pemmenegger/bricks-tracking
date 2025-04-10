import MaterialsLayout from "@/components/layout/MaterialsLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import React from "react";
import { useTimeline } from "@/context/TimelineContext";
import { useLineDrawer } from "@/context/LineDrawerContext";
import BrickR from "@/components/materials/BrickR";
import BrickV from "@/components/materials/BrickV";
import BrickZ from "@/components/materials/BrickZ";
import Lintel from "@/components/materials/Lintel";
import Mortar from "@/components/materials/Mortar";
import {
  BrickRProps,
  BrickVProps,
  BrickZProps,
  LintelProps,
  MortarProps,
  MaterialProps,
} from "@/components/materials/props";
import {
  BrickRTheme,
  BrickVTheme,
  BrickZTheme,
  LintelTheme,
  MaterialTheme,
  MortarTheme,
} from "@/components/materials/themes";

export type MaterialContent = {
  props: MaterialProps;
  theme: MaterialTheme;
  component: React.FC;
};

const MaterialContentMap: Record<string, MaterialContent> = {
  "brick-r": {
    props: BrickRProps,
    theme: BrickRTheme,
    component: BrickR,
  },
  "brick-v": {
    props: BrickVProps,
    theme: BrickVTheme,
    component: BrickV,
  },
  "brick-z": {
    props: BrickZProps,
    theme: BrickZTheme,
    component: BrickZ,
  },
  mortar: {
    props: MortarProps,
    theme: MortarTheme,
    component: Mortar,
  },
  lintel: {
    props: LintelProps,
    theme: LintelTheme,
    component: Lintel,
  },
};

function MaterialContent({
  materialContent,
}: {
  materialContent: MaterialContent;
}) {
  const { setHighlightRanges } = useTimeline();
  const { setLines } = useLineDrawer();

  useEffect(() => {
    setHighlightRanges(materialContent.props.timelineColoredRanges || []);

    const fromId = materialContent.props.lineFromId;
    const toId = materialContent.props.lineToId;
    const color = materialContent.theme.colorValue;
    if (fromId && toId) {
      setLines([{ fromId, toId, color }]);
    }
  }, [materialContent]);

  return <materialContent.component />;
}

export default function MaterialPage() {
  const router = useRouter();
  const { materialName } = router.query;

  const materialContent = MaterialContentMap[materialName as string];

  if (!materialContent) {
    return <div>Unknown material</div>;
  }

  return (
    <MaterialsLayout>
      <MaterialContent materialContent={materialContent} />
    </MaterialsLayout>
  );
}
