import MaterialButton from "@/components/ui/MaterialButton";
import {
  BrickRTheme,
  BrickZTheme,
  BrickRCementTheme,
  BrickRSawdustTheme,
  BrickVTheme,
  LintelTheme,
  MortarTheme,
} from "./themes";
import {
  BrickRProps,
  BrickZProps,
  BrickRCementProps,
  BrickRSawdustProps,
  BrickVProps,
  LintelProps,
  MortarProps,
} from "./props";
import React, { ReactNode } from "react";

export interface MaterialInfoItem {
  label: string;
  value: ReactNode;
}

export const InsiemeInfos: MaterialInfoItem[] = [
  {
    label: "Category",
    value: <p>Art Installation</p>,
  },
  {
    label: "Materials",
    value: (
      <div className="flex flex-col gap-2">
        <MaterialButton
          label={BrickRProps.title}
          bgColorClass={BrickRTheme.bgColorClass}
          textColorClass={BrickRTheme.textColorClass}
          toPath={BrickRProps.path}
        />
        <MaterialButton
          label={BrickVProps.title}
          bgColorClass={BrickVTheme.bgColorClass}
          textColorClass={BrickVTheme.textColorClass}
          toPath={BrickVProps.path}
        />
        <MaterialButton
          label={BrickZProps.title}
          bgColorClass={BrickZTheme.bgColorClass}
          textColorClass={BrickZTheme.textColorClass}
          toPath={BrickZProps.path}
        />
        <MaterialButton
          label={MortarProps.title}
          bgColorClass={MortarTheme.bgColorClass}
          textColorClass={MortarTheme.textColorClass}
          toPath={MortarProps.path}
        />
        <MaterialButton
          label={LintelProps.title}
          bgColorClass={LintelTheme.bgColorClass}
          textColorClass={LintelTheme.textColorClass}
          toPath={LintelProps.path}
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
];

export const BrickRInfos: MaterialInfoItem[] = [
  {
    label: "Category",
    value: <p>Masonry</p>,
  },
  {
    label: "Materials",
    value: (
      <div className="flex flex-col gap-2">
        <MaterialButton
          label={BrickRCementProps.title}
          bgColorClass={BrickRCementTheme.bgColorClass}
          textColorClass={BrickRCementTheme.textColorClass}
          toPath={BrickRCementProps.path}
        />
        <MaterialButton
          label={BrickRSawdustProps.title}
          bgColorClass={BrickRSawdustTheme.bgColorClass}
          textColorClass={BrickRSawdustTheme.textColorClass}
          toPath={BrickRSawdustProps.path}
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
];

export const BrickRCementInfos: MaterialInfoItem[] = [
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
];

export const BrickRSawdustInfos: MaterialInfoItem[] = [
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
];

export const BrickVInfos: MaterialInfoItem[] = [
  {
    label: "Category",
    value: <p>Art Installation</p>,
  },
  {
    label: "Materials",
    value: (
      <div className="flex flex-col gap-2">
        <MaterialButton
          label={BrickVProps.title}
          bgColorClass={BrickVTheme.bgColorClass}
          textColorClass={BrickVTheme.textColorClass}
          toPath={BrickVProps.path}
        />
      </div>
    ),
  },
];

export const BrickZInfos: MaterialInfoItem[] = [
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
];

export const LintelInfos: MaterialInfoItem[] = [
  {
    label: "Category",
    value: <p>Art Installation</p>,
  },
  {
    label: "Materials",
    value: (
      <div className="flex flex-col gap-2">
        <MaterialButton
          label={LintelProps.title}
          bgColorClass={LintelTheme.bgColorClass}
          textColorClass={LintelTheme.textColorClass}
          toPath={LintelProps.path}
        />
      </div>
    ),
  },
];

export const MortarInfos: MaterialInfoItem[] = [
  {
    label: "Category",
    value: <p>Art Installation</p>,
  },
  {
    label: "Materials",
    value: (
      <div className="flex flex-col gap-2">
        <MaterialButton
          label={MortarProps.title}
          bgColorClass={MortarTheme.bgColorClass}
          textColorClass={MortarTheme.textColorClass}
          toPath={MortarProps.path}
        />
      </div>
    ),
  },
];
