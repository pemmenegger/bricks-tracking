import React, { use } from "react";
import MaterialsLayout from "@/components/layout/MaterialsLayout";
import MaterialButton from "@/components/ui/MaterialButton";
import InfoWithVideo from "@/components/ui/InfoWithVideo";
import {
  BrickRTheme,
  BrickVTheme,
  BrickZTheme,
  LintelTheme,
  MortarTheme,
} from "@/components/materials/themes";
import { useRouter } from "next/router";

export default function Bricks() {
  const router = useRouter();

  return (
    <MaterialsLayout>
      <InfoWithVideo
        infoCardProps={{
          title: "INSIEME",
          subtitle: "En_25_50_04",
          theme: {
            textColor: "text-white",
            bgColor: "bg-gray",
            borderColor: "border-gray",
          },
          info: [
            {
              label: "Category",
              value: <p>Art Installation</p>,
            },
            {
              label: "Materials",
              value: (
                <div className="flex flex-col gap-2">
                  <MaterialButton
                    label={"BRICK_R"}
                    theme={BrickRTheme}
                    onClick={() => router.push("/materials/brick-r")}
                  />
                  <MaterialButton
                    label="BRICK_V"
                    theme={BrickVTheme}
                    onClick={() => router.push("/materials/brick-v")}
                  />
                  <MaterialButton
                    label="BRICK_Z"
                    theme={BrickZTheme}
                    onClick={() => router.push("/materials/brick-z")}
                  />
                  <MaterialButton
                    label="MORTAR"
                    theme={MortarTheme}
                    onClick={() => router.push("/materials/mortar")}
                  />
                  <MaterialButton
                    label="LINTEL"
                    theme={LintelTheme}
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
          ],
        }}
        videoSrc="/example.webm"
      />
    </MaterialsLayout>
  );
}
