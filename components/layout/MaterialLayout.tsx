import React, { FC, useEffect, useRef, useState } from "react";
import InfoCard from "@/components/ui/InfoCard";
import PlayButton from "@/components/ui/PlayButton";
import { useVideoOverlay } from "@/context/VideoOverlayContext";
import Layout from "./Layout";
import { MaterialContent } from "../materials/content";

interface MaterialLayoutProps {
  materialContent: MaterialContent;
}

const MaterialLayout: FC<MaterialLayoutProps> = ({ materialContent }) => {
  const { openVideo } = useVideoOverlay();

  // const infoCardRef = useRef<HTMLDivElement>(null);
  // const [cardHeight, setCardHeight] = useState<number | null>(null);

  // useEffect(() => {
  //   const updateHeight = () => {
  //     if (infoCardRef.current) {
  //       setCardHeight(infoCardRef.current.offsetHeight);
  //     }
  //   };

  //   updateHeight();
  //   window.addEventListener("resize", updateHeight);
  //   return () => window.removeEventListener("resize", updateHeight);
  // }, []);

  const { videoProps, theme } = materialContent;

  if (!videoProps) {
    return <div>No video available</div>;
  }

  return (
    <Layout>
      <div className="flex flex-row gap-4 items-start">
        {/* <div ref={infoCardRef}> */}
        <InfoCard materialContent={materialContent} />
        {/* </div> */}
        <div
          className={`flex-grow rounded-xl overflow-hidden border border-3 shadow-sm ${theme.borderColor}`}
          // style={{ height: cardHeight ?? "auto" }}
        >
          <div className="relative h-full w-full flex items-center justify-center bg-black">
            <img
              src={videoProps.thumbnailSrc}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span onClick={() => openVideo(videoProps.videoSrc)}>
                <PlayButton primaryColor={theme.colorValue} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MaterialLayout;
