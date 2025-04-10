import React from "react";
import MaterialLayout from "@/components/layout/MaterialLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLineDrawer } from "@/context/LineDrawerContext";
import { InsiemeProps, InsiemeVideoProps } from "@/components/materials/props";
import { MaterialContentMap } from "@/components/materials/content";

export default function Insieme() {
  const router = useRouter();

  const { clearLines } = useLineDrawer();
  useEffect(() => {
    clearLines();
  }, []);

  const insiemeContent = MaterialContentMap[InsiemeProps.slug];

  if (!insiemeContent) {
    return <div>Unknown material</div>;
  }

  return <MaterialLayout materialContent={insiemeContent} />;
}
