import InfoWithVideo from "@/components/ui/InfoWithVideo";
import MaterialButton from "@/components/ui/MaterialButton";
import React from "react";
import { MortarTheme } from "./themes";

export default function Mortar() {
  const title = "MORTAR";
  const theme = MortarTheme;
  return (
    <InfoWithVideo
      infoCardProps={{
        title: title,
        subtitle: "En_25_50_04",
        theme: theme,
        info: [
          {
            label: "Category",
            value: <p>Art Installation</p>,
          },
          {
            label: "Materials",
            value: (
              <div className="flex flex-col gap-2">
                <MaterialButton {...MortarTheme} label={title} />
              </div>
            ),
          },
        ],
      }}
      thumbnailSrc="/materials/brick-r-thumbnail.png"
      videoSrc="/example.webm"
    />
  );
}
