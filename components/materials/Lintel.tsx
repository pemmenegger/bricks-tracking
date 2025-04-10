import InfoWithVideo from "@/components/ui/InfoWithVideo";
import MaterialButton from "@/components/ui/MaterialButton";
import React from "react";
import { LintelTheme } from "./themes";
import { LintelProps } from "./props";

export default function Lintel() {
  return (
    <InfoWithVideo
      materialProps={LintelProps}
      materialTheme={LintelTheme}
      info={[
        {
          label: "Category",
          value: <p>Art Installation</p>,
        },
        {
          label: "Materials",
          value: (
            <div className="flex flex-col gap-2">
              <MaterialButton {...LintelTheme} label={LintelProps.title} />
            </div>
          ),
        },
      ]}
    />
  );
}
