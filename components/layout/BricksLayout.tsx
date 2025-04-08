import Header from "@/components/layout/Header";
import Timeline from "@/components/layout/Timeline";
import { TimelineProvider, useTimeline } from "@/context/TimelineContext";

function TimelineWrapper() {
  const { highlightRanges } = useTimeline();
  return <Timeline highlightRanges={highlightRanges} />;
}

export default function InsiemeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TimelineProvider>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-1">{children}</main> 
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
