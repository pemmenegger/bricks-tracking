import {
  BrickRProps,
  BrickVProps,
  BrickZProps,
  LintelProps,
  MortarProps,
  BrickRCementProps,
  BrickRSawdustProps,
  MaterialProps,
  BrickRVideoProps,
  BrickVVideoProps,
  BrickZVideoProps,
  MortarVideoProps,
  LintelVideoProps,
  MaterialVideoProps,
} from "@/components/materials/props";

import {
  BrickRCementTheme,
  BrickRSawdustTheme,
  BrickRTheme,
  BrickVTheme,
  BrickZTheme,
  LintelTheme,
  MortarTheme,
  MaterialTheme,
} from "@/components/materials/themes";
import {
  BrickRInfos,
  BrickVInfos,
  BrickZInfos,
  MortarInfos,
  LintelInfos,
  BrickRCementInfos,
  BrickRSawdustInfos,
  MaterialInfoItem,
} from "./infos";

export type MaterialContent = {
  props: MaterialProps;
  videoProps?: MaterialVideoProps;
  theme: MaterialTheme;
  infos: MaterialInfoItem[];
  submaterials?: Record<string, MaterialContent>;
};

export const MaterialContentMap: Record<string, MaterialContent> = {
  [BrickRProps.slug]: {
    props: BrickRProps,
    videoProps: BrickRVideoProps,
    theme: BrickRTheme,
    infos: BrickRInfos,
    submaterials: {
      [BrickRCementProps.slug]: {
        props: BrickRCementProps,
        theme: BrickRCementTheme,
        infos: BrickRCementInfos,
      },
      [BrickRSawdustProps.slug]: {
        props: BrickRSawdustProps,
        theme: BrickRSawdustTheme,
        infos: BrickRSawdustInfos,
      },
    },
  },
  [BrickVProps.slug]: {
    props: BrickVProps,
    videoProps: BrickVVideoProps,
    theme: BrickVTheme,
    infos: BrickVInfos,
  },
  [BrickZProps.slug]: {
    props: BrickZProps,
    videoProps: BrickZVideoProps,
    theme: BrickZTheme,
    infos: BrickZInfos,
  },
  [MortarProps.slug]: {
    props: MortarProps,
    videoProps: MortarVideoProps,
    theme: MortarTheme,
    infos: MortarInfos,
  },
  [LintelProps.slug]: {
    props: LintelProps,
    videoProps: LintelVideoProps,
    theme: LintelTheme,
    infos: LintelInfos,
  },
};
