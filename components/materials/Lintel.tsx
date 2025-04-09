import InfoWithVideo from "@/components/ui/InfoWithVideo";
import MaterialButton from "@/components/ui/MaterialButton";
import React from "react";
import { LintelTheme } from "./themes";

export default function Lintel() {
  const title = "LINTEL";
  const theme = LintelTheme;
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
                <MaterialButton label={title} theme={theme} />
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
