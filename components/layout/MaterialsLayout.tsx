import Header from "@/components/layout/Header";
import Timeline from "@/components/layout/Timeline";
import { TimelineProvider } from "@/context/TimelineContext";
import { useRouter } from "next/router";
import BrickTower from "./BrickTower";

export default function MaterialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <TimelineProvider>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-1 p-4">
          <div className="flex gap-6">
            {/* Left Tower with Clickable Bricks */}
            <div className="w-1/3 flex justify-center">
              <BrickTower />
            </div>

            {children}
          </div>

          <style jsx>{`
            @keyframes pulse-fast {
              0%,
              100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.2);
              }
            }
            .animate-pulse-fast {
              animation: pulse-fast 3s infinite;
            }
          `}</style>
        </main>
        <Timeline />
      </div>
    </TimelineProvider>
  );
}
