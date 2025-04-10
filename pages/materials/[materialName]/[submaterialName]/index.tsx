// import MaterialLayout from "@/components/layout/MaterialLayout";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import React from "react";
// import { useTimeline } from "@/context/TimelineContext";
// import { useLineDrawer } from "@/context/LineDrawerContext";
// import { MaterialContentMap, MaterialContent } from "..";

// function SubmaterialContent({
//   materialContent,
// }: {
//   materialContent: MaterialContent;
//   submaterial: MaterialContent;
// }) {
//   const { setHighlightRanges } = useTimeline();
//   const { setLines } = useLineDrawer();

//   useEffect(() => {
//     setHighlightRanges(materialContent.props.timelineColoredRanges || []);

//     const fromId = materialContent.props.lineFromId;
//     const toId = materialContent.props.lineToId;
//     const color = materialContent.theme.colorValue;
//     if (fromId && toId) {
//       setLines([{ fromId, toId, color }]);
//     }
//   }, [materialContent]);

//   return <materialContent.component />;
// }

// export default function SubmaterialPage() {
//   const router = useRouter();
//   const { materialName, submaterialName } = router.query;

//   const materialContent = MaterialContentMap[materialName as string];
//   const submaterial =
//     materialContent?.submaterials?.[submaterialName as string];

//   if (!materialContent || !submaterial) {
//     return <div>Unknown material</div>;
//   }

//   return (
//     <MaterialLayout>
//       <SubmaterialContent
//         materialContent={materialContent}
//         submaterial={submaterial}
//       />
//     </MaterialLayout>
//   );
// }
