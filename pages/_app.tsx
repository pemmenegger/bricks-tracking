import "@/styles/globals.css";
import { VideoOverlayProvider } from "@/context/VideoOverlayContext";
import { LineDrawerProvider } from "@/context/LineDrawerContext";
import VideoOverlay from "@/components/layout/VideoOverlay";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VideoOverlayProvider>
      <LineDrawerProvider>
        <Component {...pageProps} />
      </LineDrawerProvider>
      <VideoOverlay />
    </VideoOverlayProvider>
  );
}
