import BricksLayout from "@/components/layout/BricksLayout";
import InfoWithVideo from "@/components/ui/InfoWithVideo";
import MaterialButton from "@/components/ui/MaterialButton";
import { useParams } from "next/navigation";
import React from "react";

interface BrickTypeData {
  content: React.ReactNode;
}

const brickTypeData: Record<string, BrickTypeData> = {
  "brick-r": {
    content: (
      <InfoWithVideo
        infoCardProps={{
          title: "INSIEME",
          subtitle: "En_25_50_04",
          mainColor: "gray",
          info: [
            {
              label: "Category",
              value: <p>Art Installation</p>,
            },
            {
              label: "Materials",
              value: (
                <div className="flex flex-col gap-2">
                  <MaterialButton
                    label="BRICK_R"
                    bgColor="bg-clay"
                    textColor="text-white"
                  />
                </div>
              ),
            },
          ],
        }}
        videoSrc="/example.webm"
      />
    ),
  },
  "brick-v": {
    content: (
      <InfoWithVideo
        infoCardProps={{
          title: "INSIEME",
          subtitle: "En_25_50_04",
          mainColor: "gray",
          info: [
            {
              label: "Category",
              value: <p>Art Installation</p>,
            },
            {
              label: "Materials",
              value: (
                <div className="flex flex-col gap-2">
                  <MaterialButton
                    label="BRICK_R"
                    bgColor="bg-clay"
                    textColor="text-white"
                  />
                </div>
              ),
            },
          ],
        }}
        videoSrc="/example.webm"
      />
    ),
  },
  "brick-z": {
    content: (
      <InfoWithVideo
        infoCardProps={{
          title: "INSIEME",
          subtitle: "En_25_50_04",
          mainColor: "gray",
          info: [
            {
              label: "Category",
              value: <p>Art Installation</p>,
            },
            {
              label: "Materials",
              value: (
                <div className="flex flex-col gap-2">
                  <MaterialButton
                    label="BRICK_R"
                    bgColor="bg-clay"
                    textColor="text-white"
                  />
                </div>
              ),
            },
          ],
        }}
        videoSrc="/example.webm"
      />
    ),
  },
  mortar: {
    content: (
      <InfoWithVideo
        infoCardProps={{
          title: "INSIEME",
          subtitle: "En_25_50_04",
          mainColor: "gray",
          info: [
            {
              label: "Category",
              value: <p>Art Installation</p>,
            },
            {
              label: "Materials",
              value: (
                <div className="flex flex-col gap-2">
                  <MaterialButton
                    label="BRICK_R"
                    bgColor="bg-clay"
                    textColor="text-white"
                  />
                </div>
              ),
            },
          ],
        }}
        videoSrc="/example.webm"
      />
    ),
  },
  lintel: {
    content: (
      <InfoWithVideo
        infoCardProps={{
          title: "INSIEME",
          subtitle: "En_25_50_04",
          mainColor: "gray",
          info: [
            {
              label: "Category",
              value: <p>Art Installation</p>,
            },
            {
              label: "Materials",
              value: (
                <div className="flex flex-col gap-2">
                  <MaterialButton
                    label="BRICK_R"
                    bgColor="bg-clay"
                    textColor="text-white"
                  />
                </div>
              ),
            },
          ],
        }}
        videoSrc="/example.webm"
      />
    ),
  },
};

export default function BrickTypePage() {
  const params = useParams();
  const brickType = brickTypeData[params.type as string];

  if (!brickType) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold capitalize">Unknown</h1>
        <p className="mt-4 text-lg text-red-600">Unknown</p>
      </div>
    );
  }

  return <BricksLayout>{brickType.content}</BricksLayout>;
}
