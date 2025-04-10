import InfoWithVideo from "@/components/ui/InfoWithVideo";
import InfoCard from "@/components/ui/InfoCard";
import MaterialButton from "@/components/ui/MaterialButton";
import React from "react";
import {
  BrickRCementTheme,
  BrickRSawdustTheme,
  BrickRTheme,
  BrickZTheme,
} from "./themes";
import { BrickRProps } from "./props";

// const BrickRCement: React.FC = () => {
//   return (
//     <InfoCard
//       title="CEMENT"
//       subtitle="En_25_50_04"
//       theme={BrickRCementTheme}
//       info={[
//         {
//           label: "Category",
//           value: <p>Masonry</p>,
//         },
//         {
//           label: "Materials",
//           value: <p>-</p>,
//         },
//         {
//           label: "Weight Unit",
//           value: <p>kg/m3</p>,
//         },
//         {
//           label: "Quantity",
//           value: <p>4</p>,
//         },
//         {
//           label: "Total Weight",
//           value: <p>4 kg</p>,
//         },
//         {
//           label: "Supplier",
//           value: <p>Best Supplier</p>,
//         },
//       ]}
//       imageSrc="/materials/brick-z-map.png"
//     />
//   );
// };

// const BrickRSawdust: React.FC = () => {
//   return (
//     <InfoCard
//       title="SAWDUST"
//       subtitle="En_25_50_04"
//       theme={BrickRSawdustTheme}
//       info={[
//         {
//           label: "Category",
//           value: <p>Masonry</p>,
//         },
//         {
//           label: "Materials",
//           value: <p>-</p>,
//         },
//         {
//           label: "Dimension",
//           value: <p>-</p>,
//         },
//         {
//           label: "Quantity",
//           value: <p>4</p>,
//         },

//         {
//           label: "Supplier",
//           value: <p>Better Supplier</p>,
//         },
//       ]}
//       imageSrc="/materials/brick-r-map.png"
//     />
//   );
// };

export default function BrickR() {
  return (
    <InfoWithVideo
      materialProps={BrickRProps}
      materialTheme={BrickRTheme}
      info={[
        {
          label: "Category",
          value: <p>Masonry</p>,
        },
        {
          label: "Materials",
          value: (
            <div className="flex flex-col gap-2">
              <MaterialButton {...BrickRCementTheme} label={"CEMENT"} />
              <MaterialButton {...BrickRSawdustTheme} label={"SAWDUST"} />
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
      ]}
    />
  );
}
