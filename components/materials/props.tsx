import {
  BrickRTheme,
  BrickVTheme,
  BrickZTheme,
  LintelTheme,
  MortarTheme,
} from "./themes";
import { TimelineColoredRange } from "@/components/ui/Timeline";

export interface MaterialProps {
  slug: string;
  path: string;
  title: string;
  subtitle: string;
  lineFromId?: string;
  lineToId?: string;
  cardImageSrc?: string;
  timelineColoredRanges: TimelineColoredRange[];
}

export interface MaterialVideoProps {
  thumbnailSrc: string;
  videoSrc: string;
}

export const InsiemeProps: MaterialProps = {
  slug: "",
  path: "/materials",
  title: "INSIEME",
  subtitle: "En_25_50_04",
  timelineColoredRanges: [],
};

export const InsiemeVideoProps: MaterialVideoProps = {
  thumbnailSrc: "/materials/brick-r-thumbnail.png",
  videoSrc: "/example.webm",
};

export const BrickRProps: MaterialProps = {
  slug: "brick-r",
  path: "/materials/brick-r",
  title: "BRICK_R",
  subtitle: "En_25_50_04",
  lineFromId: "brick-r-line-from",
  lineToId: "brick-r-line-to",
  cardImageSrc: "/materials/brick-r-map.png",
  timelineColoredRanges: [
    {
      startYear: 1900,
      endYear: 2030,
      bgColorClass: BrickRTheme.bgColorClass,
      area: "full",
    },
  ],
};

export const BrickRVideoProps: MaterialVideoProps = {
  thumbnailSrc: "/materials/brick-r-thumbnail.png",
  videoSrc: "/example.webm",
};

export const BrickRCementProps: MaterialProps = {
  slug: "brick-r-cement",
  path: "/materials/brick-r/brick-r-cement",
  title: "CEMENT",
  subtitle: "En_25_50_04",
  lineFromId: BrickRProps.lineToId!,
  lineToId: "brick-r-cement-line-to",
  cardImageSrc: "/materials/brick-r-map.png",
  timelineColoredRanges: [
    {
      startYear: 1900,
      endYear: 2030,
      bgColorClass: BrickRTheme.bgColorClass,
      area: "full",
    },
  ],
};

export const BrickRSawdustProps: MaterialProps = {
  slug: "brick-r-sawdust",
  path: "/materials/brick-r/brick-r-sawdust",
  title: "SAWDUST",
  subtitle: "En_25_50_04",
  lineFromId: BrickRProps.lineToId!,
  lineToId: "brick-r-sawdust-line-to",
  cardImageSrc: "/materials/brick-r-map.png",
  timelineColoredRanges: [
    {
      startYear: 1900,
      endYear: 2030,
      bgColorClass: BrickRTheme.bgColorClass,
      area: "full",
    },
  ],
};

export const BrickVProps: MaterialProps = {
  slug: "brick-v",
  path: "/materials/brick-v",
  title: "BRICK_V",
  subtitle: "En_25_50_04",
  lineFromId: "brick-v-line-from",
  lineToId: "brick-v-line-to",
  timelineColoredRanges: [
    {
      startYear: 1850,
      endYear: 1930,
      bgColorClass: BrickVTheme.bgColorClass,
      area: "full",
    },
  ],
};

export const BrickVVideoProps: MaterialVideoProps = {
  thumbnailSrc: "/materials/brick-r-thumbnail.png",
  videoSrc: "/example.webm",
};

export const BrickZProps: MaterialProps = {
  slug: "brick-z",
  path: "/materials/brick-z",
  title: "BRICK_Z",
  subtitle: "En_25_50_04",
  lineFromId: "brick-z-line-from",
  lineToId: "brick-z-line-to",
  cardImageSrc: "/materials/brick-z-map.png",
  timelineColoredRanges: [
    {
      startYear: 1920,
      endYear: 1990,
      bgColorClass: BrickZTheme.bgColorClass,
      area: "full",
    },
  ],
};

export const BrickZVideoProps: MaterialVideoProps = {
  thumbnailSrc: "/materials/brick-r-thumbnail.png",
  videoSrc: "/example.webm",
};

export const MortarProps: MaterialProps = {
  slug: "mortar",
  path: "/materials/mortar",
  title: "MORTAR",
  subtitle: "En_25_50_04",
  lineFromId: "brick-mortar-line-from",
  lineToId: "brick-mortar-line-to",
  timelineColoredRanges: [
    {
      startYear: 1950,
      endYear: 2010,
      bgColorClass: MortarTheme.bgColorClass,
      area: "full",
    },
  ],
};

export const MortarVideoProps: MaterialVideoProps = {
  thumbnailSrc: "/materials/brick-r-thumbnail.png",
  videoSrc: "/example.webm",
};

export const LintelProps: MaterialProps = {
  slug: "lintel",
  path: "/materials/lintel",
  title: "LINTEL",
  subtitle: "En_25_50_04",
  lineFromId: "brick-lintel-line-from",
  lineToId: "brick-lintel-line-to",
  timelineColoredRanges: [
    {
      startYear: 1910,
      endYear: 1970,
      bgColorClass: LintelTheme.bgColorClass,
      area: "full",
    },
  ],
};

export const LintelVideoProps: MaterialVideoProps = {
  thumbnailSrc: "/materials/brick-r-thumbnail.png",
  videoSrc: "/example.webm",
};
