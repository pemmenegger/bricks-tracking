import Header from "@/components/layout/Header";
import Timeline from "@/components/layout/Timeline";
import { TimelineProvider, useTimeline } from "@/context/TimelineContext";
import { useRouter } from "next/router";

function TimelineWrapper() {
  const { highlightRanges } = useTimeline();
  return <Timeline highlightRanges={highlightRanges} />;
}

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
              <div className="relative max-h-[600px]">
                <img
                  src="/brick-tower.svg"
                  alt="Tower Diagram"
                  className="max-h-[600px] object-contain"
                />

                {/* Clickable Bricks */}
                {[
                  { id: "brick-r", top: "10%", left: "30%" },
                  { id: "brick-v", top: "25%", left: "50%" },
                  { id: "brick-z", top: "45%", left: "20%" },
                  { id: "mortar", top: "60%", left: "40%" },
                  { id: "lintel", top: "80%", left: "55%" },
                ].map((brick) => (
                  <img
                    key={brick.id}
                    src={`/materials/${brick.id.toLowerCase()}.png`} // Adjust path if needed
                    alt={brick.id}
                    onClick={() => router.push(`/materials/${brick.id}`)}
                    className="w-10 h-10 absolute cursor-pointer animate-pulse-fast"
                    style={{ top: brick.top, left: brick.left }}
                  />
                ))}
              </div>
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
        <TimelineWrapper />
      </div>
    </TimelineProvider>
  );
}

// "use client";

// import { useTimeline } from "@/context/TimelineContext";

// export default function ExampleChild() {
//   const { setHighlightRanges } = useTimeline();

//   const updateTimeline = () => {
//     setHighlightRanges([
//       { from: 1920, to: 1940, color: "#a1c4fd", area: "full" },
//     ]);
//   };

//   return <button onClick={updateTimeline}>Update Timeline</button>;
// }
