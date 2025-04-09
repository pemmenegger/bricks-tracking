// pages/materials/[materialName].tsx

import BrickR from "@/components/materials/BrickR";
import BrickV from "@/components/materials/BrickV";
import BrickZ from "@/components/materials/BrickZ";
import Mortar from "@/components/materials/Mortar";
import Lintel from "@/components/materials/Lintel";
import MaterialsLayout from "@/components/layout/MaterialsLayout";
import { useRouter } from "next/router";
import React from "react";

const MaterialMap: Record<string, React.FC> = {
  "brick-r": BrickR,
  "brick-v": BrickV,
  "brick-z": BrickZ,
  mortar: Mortar,
  lintel: Lintel,
};

export default function MaterialPage() {
  const router = useRouter();
  const { materialName } = router.query;

  const MaterialComponent = MaterialMap[materialName as string];

  if (!MaterialComponent) {
    return <div>Unknown material</div>;
  }

  return (
    <MaterialsLayout>
      <MaterialComponent />
    </MaterialsLayout>
  );
}
