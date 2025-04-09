import React, { use } from "react";
import BricksLayout from "@/components/layout/BricksLayout";
import MaterialButton from "@/components/ui/MaterialButton";
import InfoWithVideo from "@/components/ui/InfoWithVideo";
import { useRouter } from "next/router";

export default function Bricks() {
  const router = useRouter();

  return (
    <BricksLayout>
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
                    onClick={() => router.push("/bricks/brick-r")}
                  />
                  <MaterialButton
                    label="BRICK_V"
                    bgColor="bg-sun"
                    textColor="text-white"
                    onClick={() => router.push("/bricks/brick-v")}
                  />
                  <MaterialButton
                    label="BRICK_Z"
                    bgColor="bg-peach"
                    textColor="text-white"
                    onClick={() => router.push("/bricks/brick-z")}
                  />
                  <MaterialButton
                    label="MORTAR"
                    bgColor="bg-white"
                    textColor="text-black"
                    onClick={() => router.push("/bricks/mortar")}
                  />
                  <MaterialButton
                    label="LINTEL"
                    bgColor="bg-black"
                    textColor="text-white"
                    onClick={() => router.push("/bricks/lintel")}
                  />
                </div>
              ),
            },
            {
              label: "Dimensions",
              value: <div>H 400cm, L 150cm</div>,
            },
            {
              label: "Weight",
              value: <div>-</div>,
            },
          ],
        }}
        videoSrc="/example.webm"
      />

      {/* <div className="w-2/3 flex gap-6">
            <InfoCard
              title="INSIEME"
              subtitle="En_25_50_04"
              mainColor="clay"
              info={[
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
                        onClick={() => handleBrickClick("BRICK_R")}
                      />
                      <MaterialButton
                        label="BRICK_V"
                        bgColor="bg-sun"
                        textColor="text-white"
                        onClick={() => handleBrickClick("BRICK_V")}
                      />
                      <MaterialButton
                        label="BRICK_Z"
                        bgColor="bg-peach"
                        textColor="text-white"
                        onClick={() => handleBrickClick("BRICK_Z")}
                      />
                      <MaterialButton
                        label="MORTAR"
                        bgColor="bg-white"
                        textColor="text-black"
                        onClick={() => handleBrickClick("MORTAR")}
                      />
                      <MaterialButton
                        label="LINTEL"
                        bgColor="bg-black"
                        textColor="text-white"
                        onClick={() => handleBrickClick("LINTEL")}
                      />
                    </div>
                  ),
                },
                { label: "Dimensions", value: <div>H 400cm, L 150cm</div> },
                { label: "Weight", value: <div>-</div> },
              ]}
            /> */}

      {/* <InfoCard
              title="INSIEME"
              subtitle="En_25_50_04"
              mainColor="black"
              info={[
                {
                  label: "Category",
                  value: <p>Art Installation</p>,
                },
                {
                  label: "Materials",
                  value: (
                    <div className="flex flex-col">
                      <div className="bg-clay text-white p-2 rounded">
                        BRICK_Z
                      </div>
                      <div className="bg-sun text-white p-2 rounded">
                        SAWDUST
                      </div>
                    </div>
                  ),
                },
                { label: "Dimensions", value: <div>H 400cm, L 150cm</div> },
                { label: "Weight", value: <div>-</div> },
              ]}
            />

            <InfoCard
              title="INSIEME"
              subtitle="En_25_50_04"
              mainColor="sun"
              info={[
                {
                  label: "Category",
                  value: <p>Art Installation</p>,
                },
                {
                  label: "Materials",
                  value: (
                    <div className="flex flex-col">
                      <p>BRICK_R</p>
                      <p>BRICK_V</p>
                      <p>BRICK_Z</p>
                      <p>MORTAR</p>
                      <p>BRICK_Y</p>
                    </div>
                  ),
                },
                { label: "Dimensions", value: <div>H 400cm, L 150cm</div> },
                { label: "Weight", value: <div>-</div> },
              ]}
              imageSrc="materials/brick_r_map.png"
            /> */}

      {/* <div className="flex-1 rounded-xl overflow-hidden shadow">
              <div className="relative">
                <video
                  className="w-full h-[300px] object-cover"
                  controls
                  poster="/brick-tower.jpg"
                >
                  <source src="/example.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div> */}
      {/* </div> */}
    </BricksLayout>
  );
}
