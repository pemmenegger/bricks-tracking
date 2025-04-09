import { createContext, useContext, useState, ReactNode } from "react";

type VideoOverlayContextType = {
  openVideo: (src: string) => void;
  closeVideo: () => void;
  videoSrc: string | null;
  isOpen: boolean;
};

const VideoOverlayContext = createContext<VideoOverlayContextType | undefined>(
  undefined
);

export const VideoOverlayProvider = ({ children }: { children: ReactNode }) => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const isOpen = videoSrc !== null;

  const openVideo = (src: string) => setVideoSrc(src);
  const closeVideo = () => setVideoSrc(null);

  return (
    <VideoOverlayContext.Provider
      value={{ openVideo, closeVideo, videoSrc, isOpen }}
    >
      {children}
    </VideoOverlayContext.Provider>
  );
};

export const useVideoOverlay = () => {
  const context = useContext(VideoOverlayContext);
  if (!context)
    throw new Error(
      "useVideoOverlay must be used within a VideoOverlayProvider"
    );
  return context;
};
