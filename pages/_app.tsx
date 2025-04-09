import "@/styles/globals.css";
import { VideoOverlayProvider } from "@/context/VideoOverlayContext";
import VideoOverlay from "@/components/layout/VideoOverlay";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VideoOverlayProvider>
      <Component {...pageProps} />;
      <VideoOverlay />
    </VideoOverlayProvider>
  );
}
