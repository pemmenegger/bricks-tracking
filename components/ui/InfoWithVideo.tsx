import React, { FC, useEffect, useRef, useState } from "react";
import InfoCard, { InfoCardProps } from "@/components/ui/InfoCard";
import PlayButton from "@/components/ui/PlayButton";
import { useVideoOverlay } from "@/context/VideoOverlayContext";

interface InfoWithVideoProps {
  infoCardProps: InfoCardProps;
  thumbnailSrc: string;
  videoSrc: string;
}

const InfoWithVideo: FC<InfoWithVideoProps> = ({
  infoCardProps,
  thumbnailSrc,
  videoSrc,
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
      <div className="w-[240px]">
        <div ref={infoCardRef}>
          <InfoCard {...infoCardProps} />
        </div>
      </div>
      <div
        className={`flex-grow rounded-xl overflow-hidden border border-3 shadow-sm ${infoCardProps.theme.borderColor}`}
        style={{ height: cardHeight ?? "auto" }}
      >
        <div className="relative h-full w-full flex items-center justify-center bg-black">
          <img
            src={thumbnailSrc}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span onClick={() => openVideo(videoSrc)}>
              <PlayButton primaryColor={infoCardProps.theme.colorValue} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoWithVideo;
