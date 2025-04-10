import InfoWithVideo from "@/components/ui/InfoWithVideo";
import MaterialButton from "@/components/ui/MaterialButton";
import React from "react";
import { MortarTheme } from "./themes";
import { MortarProps } from "./props";

export default function Mortar() {
  return (
    <InfoWithVideo
      materialProps={MortarProps}
      materialTheme={MortarTheme}
      info={[
        {
          label: "Category",
          value: <p>Art Installation</p>,
        },
        {
          label: "Materials",
          value: (
            <div className="flex flex-col gap-2">
              <MaterialButton {...MortarTheme} label={MortarProps.title} />
            </div>
          ),
        },
      ]}
    />
  );
}
