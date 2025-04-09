import InfoWithVideo from "@/components/ui/InfoWithVideo";
import InfoCard from "@/components/ui/InfoCard";
import MaterialButton from "@/components/ui/MaterialButton";
import React from "react";
import { BrickRCementTheme, BrickRSawdustTheme, BrickRTheme } from "./themes";

const BrickRCement: React.FC = () => {
  return (
    <InfoCard
      title="CEMENT"
      subtitle="En_25_50_04"
      theme={BrickRCementTheme}
      info={[
        {
          label: "Category",
          value: <p>Masonry</p>,
        },
        {
          label: "Materials",
          value: <p>-</p>,
        },
        {
          label: "Weight Unit",
          value: <p>kg/m3</p>,
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
          value: <p>Best Supplier</p>,
        },
      ]}
      imageSrc="/materials/brick-z-map.png"
    />
  );
};

const BrickRSawdust: React.FC = () => {
  return (
    <InfoCard
      title="SAWDUST"
      subtitle="En_25_50_04"
      theme={BrickRSawdustTheme}
      info={[
        {
          label: "Category",
          value: <p>Masonry</p>,
        },
        {
          label: "Materials",
          value: <p>-</p>,
        },
        {
          label: "Dimension",
          value: <p>-</p>,
        },
        {
          label: "Quantity",
          value: <p>4</p>,
        },

        {
          label: "Supplier",
          value: <p>Better Supplier</p>,
        },
      ]}
      imageSrc="/materials/brick-r-map.png"
    />
  );
};

export default function BrickR() {
  const title = "BRICK R";
  const theme = BrickRTheme;

  return (
    <InfoWithVideo
      infoCardProps={{
        title: title,
        subtitle: "En_25_50_04",
        theme: theme,
        info: [
          {
            label: "Category",
            value: <p>Masonry</p>,
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
      videoSrc="/example.webm"
    />
  );
}
