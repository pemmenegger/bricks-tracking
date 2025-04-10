import Link from "next/link";
import { useVideoOverlay } from "@/context/VideoOverlayContext";
import { useEffect } from "react";
import { useLineDrawer } from "@/context/LineDrawerContext";

export default function Home() {
  const { openVideo } = useVideoOverlay();

  const { clearLines } = useLineDrawer();
  useEffect(() => {
    clearLines();
  }, []);

  return (
    <main className="min-h-screen flex">
      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <button
          className="w-40 h-40 rounded-full bg-white shadow-md flex items-center justify-center text-center text-black font-bold tracking-widest"
          onClick={() => openVideo("/example.webm")}
        >
          <span>
            WATCH
            <br />
            FULL
            <br />
            MOVIE
          </span>
        </button>
      </div>

      <div className="w-1/2 bg-white flex items-center justify-center">
        <Link href="/materials">
          <button className="w-40 h-40 rounded-full bg-gray shadow-md flex items-center justify-center text-center text-black font-bold tracking-widest">
            <span>
              EXPLORE
              <br />
              MATERIAL
              <br />
              STORIES
            </span>
          </button>
        </Link>
      </div>
    </main>
  );
}
