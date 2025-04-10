import React from "react";
import MaterialLayout from "@/components/layout/MaterialLayout";
import MaterialButton from "@/components/ui/MaterialButton";
import {
  BrickRTheme,
  BrickVTheme,
  BrickZTheme,
  InsiemeTheme,
  LintelTheme,
  MortarTheme,
} from "@/components/materials/themes";
import {
  BrickRProps,
  BrickVProps,
  BrickZProps,
  LintelProps,
  MortarProps,
} from "@/components/materials/props";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLineDrawer } from "@/context/LineDrawerContext";
import { InsiemeProps, InsiemeVideoProps } from "@/components/materials/props";

export default function Insieme() {
  const router = useRouter();

  const { clearLines } = useLineDrawer();
  useEffect(() => {
    clearLines();
  }, []);

  return (
    <MaterialLayout
      materialProps={InsiemeProps}
      materialVideoProps={InsiemeVideoProps}
      materialTheme={InsiemeTheme}
      materialInfo={[
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
      ]}
    />
  );
}
