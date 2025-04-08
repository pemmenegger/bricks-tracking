import React, { FC, useEffect, useRef, useState } from "react";
import InfoCard, { InfoCardProps } from "@/components/ui/InfoCard";

interface InfoWithVideoProps {
  infoCardProps: InfoCardProps;
  videoSrc: string;
}

const InfoWithVideo: FC<InfoWithVideoProps> = ({ infoCardProps, videoSrc }) => {
  const mainColor = infoCardProps.mainColor;
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
        className={`flex-grow rounded-xl overflow-hidden border border-3 shadow-sm border-${mainColor}`}
        style={{ height: cardHeight ?? "auto" }}
      >
        <div className="relative h-full flex items-center justify-center">
          <video
            style={{
              height: "100%",
              width: "auto",
              maxWidth: "100%",
            }}
            controls
          >
            <source src={videoSrc} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default InfoWithVideo;
