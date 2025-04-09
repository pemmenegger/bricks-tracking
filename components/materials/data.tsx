import BrickR from "./BrickR";
import BrickV from "./BrickV";
import BrickZ from "./BrickZ";
import Lintel from "./Lintel";
import Mortar from "./Mortar";
import {
  BrickRTheme,
  BrickVTheme,
  BrickZTheme,
  LintelTheme,
  MaterialTheme,
  MortarTheme,
} from "./themes";
import { TimelineColoredRange } from "@/components/layout/Timeline";

export interface MaterialData {
  timelineColoredRanges: TimelineColoredRange[];
  theme: MaterialTheme;
  component: React.FC;
}

export const BrickRData: MaterialData = {
  timelineColoredRanges: [
    {
      startYear: 1900,
      endYear: 2030,
      bgColorClass: BrickRTheme.bgColor,
      area: "full",
    },
  ],
  theme: BrickRTheme,
  component: BrickR,
};

export const BrickVData: MaterialData = {
  timelineColoredRanges: [
    {
      startYear: 1850,
      endYear: 1930,
      bgColorClass: BrickVTheme.bgColor,
      area: "full",
    },
  ],
  theme: BrickVTheme,
  component: BrickV,
};

export const BrickZData: MaterialData = {
  timelineColoredRanges: [
    {
      startYear: 1920,
      endYear: 1990,
      bgColorClass: BrickZTheme.bgColor,
      area: "full",
    },
  ],
  theme: BrickZTheme,
  component: BrickZ,
};

export const MortarData: MaterialData = {
  timelineColoredRanges: [
    {
      startYear: 1950,
      endYear: 2010,
      bgColorClass: MortarTheme.bgColor,
      area: "full",
    },
  ],
  theme: MortarTheme,
  component: Mortar,
};

export const LintelData: MaterialData = {
  timelineColoredRanges: [
    {
      startYear: 1910,
      endYear: 1970,
      bgColorClass: LintelTheme.bgColor,
      area: "full",
    },
  ],
  theme: LintelTheme,
  component: Lintel,
};
