import InfoWithVideo from "@/components/ui/InfoWithVideo";
import MaterialButton from "@/components/ui/MaterialButton";
import React from "react";
import { BrickVTheme } from "./themes";
import { BrickVProps } from "./props";

export default function BrickV() {
  return (
    <InfoWithVideo
      materialProps={BrickVProps}
      materialTheme={BrickVTheme}
      info={[
        {
          label: "Category",
          value: <p>Art Installation</p>,
        },
        {
          label: "Materials",
          value: (
            <div className="flex flex-col gap-2">
              <MaterialButton label={BrickVProps.title} {...BrickVTheme} />
            </div>
          ),
        },
      ]}
    />
  );
}
