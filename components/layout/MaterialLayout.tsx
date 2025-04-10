import React, { FC, useEffect, useRef, useState } from "react";
import InfoCard from "@/components/ui/InfoCard";
import PlayButton from "@/components/ui/PlayButton";
import { useVideoOverlay } from "@/context/VideoOverlayContext";
import { MaterialTheme } from "../materials/themes";
import { MaterialProps, MaterialVideoProps } from "../materials/props";
import { InfoItem } from "@/components/ui/InfoCard";
import Layout from "./Layout";

interface MaterialLayoutProps {
  materialProps: MaterialProps;
  materialVideoProps: MaterialVideoProps;
  materialTheme: MaterialTheme;
  materialInfo: InfoItem[];
}

const MaterialLayout: FC<MaterialLayoutProps> = ({
  materialProps,
  materialVideoProps,
  materialTheme,
  materialInfo = [],
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
    <Layout>
      <div className="flex flex-row gap-4 items-start">
        <div className="w-[240px]" id={materialProps.lineToId}>
          <div ref={infoCardRef}>
            <InfoCard
              materialProps={materialProps}
              materialTheme={materialTheme}
              materialInfo={materialInfo}
            />
          </div>
        </div>
        <div
          className={`flex-grow rounded-xl overflow-hidden border border-3 shadow-sm ${materialTheme.borderColor}`}
          style={{ height: cardHeight ?? "auto" }}
        >
          <div className="relative h-full w-full flex items-center justify-center bg-black">
            <img
              src={materialVideoProps.thumbnailSrc}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span onClick={() => openVideo(materialVideoProps.videoSrc)}>
                <PlayButton primaryColor={materialTheme.colorValue} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MaterialLayout;
