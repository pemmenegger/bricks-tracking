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
            textColorClass: "text-white",
            bgColorClass: "bg-gray",
            borderColor: "border-gray",
            colorValue: "var(--color-gray)",
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
          ],
        }}
        thumbnailSrc="/materials/brick-r-thumbnail.png"
        videoSrc="/example.webm"
      />
    </MaterialsLayout>
  );
}
