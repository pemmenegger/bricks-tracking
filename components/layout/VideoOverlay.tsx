import { useEffect, useRef } from "react";
import { useVideoOverlay } from "@/context/VideoOverlayContext";

const VideoOverlay = () => {
  const { isOpen, videoSrc, closeVideo } = useVideoOverlay();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, [isOpen]);

  if (!isOpen || !videoSrc) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <div className="relative w-full h-full">
        <button
          onClick={closeVideo}
          className="absolute top-4 right-4 z-10 text-white text-3xl"
        >
          &times;
        </button>
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-contain"
          controls
          autoPlay
        />
      </div>
    </div>
  );
};

export default VideoOverlay;
