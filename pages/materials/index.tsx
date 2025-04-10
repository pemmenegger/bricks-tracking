import React, { use } from "react";
import MaterialsLayout from "@/components/layout/MaterialsLayout";
import MaterialButton from "@/components/ui/MaterialButton";
import InfoWithVideo from "@/components/ui/InfoWithVideo";
import {
  BrickRTheme,
  BrickVTheme,
  BrickZTheme,
  InsiemeTheme,
  LintelTheme,
  MortarTheme,
} from "@/components/materials/themes";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLineDrawer } from "@/context/LineDrawerContext";
import { InsiemeProps } from "@/components/materials/props";

export default function Insieme() {
  const router = useRouter();

  const { clearLines } = useLineDrawer();
  useEffect(() => {
    clearLines();
  }, []);

  return (
    <MaterialsLayout>
      <InfoWithVideo
        materialProps={InsiemeProps}
        materialTheme={InsiemeTheme}
        info={[
          {
            label: "Category",
            value: <p>Art Installation</p>,
          },
          {
            label: "Materials",
            value: (
              <div className="flex flex-col gap-2">
                <MaterialButton
                  {...BrickRTheme}
                  label={"BRICK_R"}
                  onClick={() => router.push("/materials/brick-r")}
                />
                <MaterialButton
                  {...BrickVTheme}
                  label="BRICK_V"
                  onClick={() => router.push("/materials/brick-v")}
                />
                <MaterialButton
                  {...BrickZTheme}
                  label="BRICK_Z"
                  onClick={() => router.push("/materials/brick-z")}
                />
                <MaterialButton
                  {...MortarTheme}
                  label="MORTAR"
                  onClick={() => router.push("/materials/mortar")}
                />
                <MaterialButton
                  {...LintelTheme}
                  label="LINTEL"
                  onClick={() => router.push("/materials/lintel")}
                />
              </div>
            ),
          },
          {
            label: "Dimensions",
            value: <div>H 400cm, L 150cm</div>,
          },
          {
            label: "Weight",
            value: <div>-</div>,
          },
        ]}
      />
    </MaterialsLayout>
  );
}
