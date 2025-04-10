import {
  BrickRTheme,
  BrickVTheme,
  BrickZTheme,
  LintelTheme,
  MortarTheme,
} from "./themes";
import { TimelineColoredRange } from "@/components/layout/Timeline";

export interface MaterialProps {
  title: string;
  subtitle: string;
  lineFromId?: string;
  lineToId?: string;
  cardImageSrc?: string;
  timelineColoredRanges: TimelineColoredRange[];
}

export interface MaterialWithVideoProps extends MaterialProps {
  thumbnailSrc: string;
  videoSrc: string;
}

export const InsiemeProps: MaterialWithVideoProps = {
  title: "INSIEME",
  subtitle: "En_25_50_04",
  timelineColoredRanges: [],
  thumbnailSrc: "/materials/brick-r-thumbnail.png",
  videoSrc: "/example.webm",
};

export const BrickRProps: MaterialWithVideoProps = {
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
  thumbnailSrc: "/materials/brick-r-thumbnail.png",
  videoSrc: "/example.webm",
};

export const BrickVProps: MaterialWithVideoProps = {
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
  thumbnailSrc: "/materials/brick-r-thumbnail.png",
  videoSrc: "/example.webm",
};

export const BrickZProps: MaterialWithVideoProps = {
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
  thumbnailSrc: "/materials/brick-r-thumbnail.png",
  videoSrc: "/example.webm",
};

export const MortarProps: MaterialWithVideoProps = {
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
  thumbnailSrc: "/materials/brick-r-thumbnail.png",
  videoSrc: "/example.webm",
};

export const LintelProps: MaterialWithVideoProps = {
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
  thumbnailSrc: "/materials/brick-r-thumbnail.png",
  videoSrc: "/example.webm",
};
