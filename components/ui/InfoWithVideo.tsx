import React, { FC, useEffect, useRef, useState } from "react";
import InfoCard, { InfoCardProps } from "@/components/ui/InfoCard";
import PlayButton from "@/components/ui/PlayButton";
import { useVideoOverlay } from "@/context/VideoOverlayContext";
import { MaterialWithVideoProps } from "../materials/props";
import { MaterialTheme } from "../materials/themes";
import { InfoItem } from "./InfoCard";

interface InfoWithVideoProps {
  materialProps: MaterialWithVideoProps;
  materialTheme: MaterialTheme;
  info: InfoItem[];
}

const InfoWithVideo: FC<InfoWithVideoProps> = ({
  materialProps,
  materialTheme,
  info = [],
}) => {
  const { openVideo } = useVideoOverlay();

  const infoCardRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (infoCardRef.current) {
        setCardHeight(infoCardRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="flex flex-row gap-4 items-start">
      <div className="w-[240px]" id={materialProps.lineToId}>
        <div ref={infoCardRef}>
          <InfoCard
            materialProps={materialProps}
            materialTheme={materialTheme}
            info={info}
          />
        </div>
      </div>
      <div
        className={`flex-grow rounded-xl overflow-hidden border border-3 shadow-sm ${materialTheme.borderColor}`}
        style={{ height: cardHeight ?? "auto" }}
      >
        <div className="relative h-full w-full flex items-center justify-center bg-black">
          <img
            src={materialProps.thumbnailSrc}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span onClick={() => openVideo(materialProps.videoSrc)}>
              <PlayButton primaryColor={materialTheme.colorValue} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoWithVideo;
