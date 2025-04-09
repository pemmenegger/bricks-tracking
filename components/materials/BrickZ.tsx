import InfoWithVideo from "@/components/ui/InfoWithVideo";
import MaterialButton from "@/components/ui/MaterialButton";
import React from "react";
import { BrickZTheme } from "./themes";

export default function BrickZ() {
  return (
    <InfoWithVideo
      infoCardProps={{
        title: "BRICK Z",
        subtitle: "En_25_50_04",
        theme: BrickZTheme,
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
                  label={"Limestone"}
                  bgColorClass="bg-gray"
                  textColorClass="text-white"
                />
                <MaterialButton
                  label={"Granit"}
                  bgColorClass="bg-gray"
                  textColorClass="text-white"
                />
              </div>
            ),
          },
          {
            label: "Dimension",
            value: <p>-</p>,
          },
          {
            label: "Weight Unit",
            value: <p>-</p>,
          },
          {
            label: "Quantity",
            value: <p>4</p>,
          },
          {
            label: "Total Weight",
            value: <p>4 kg</p>,
          },
          {
            label: "Supplier",
            value: <p>Better Supplier</p>,
          },
        ],
        imageSrc: "/materials/brick-z-map.png",
      }}
      thumbnailSrc="/materials/brick-r-thumbnail.png"
      videoSrc="/example.webm"
    />
  );
}
