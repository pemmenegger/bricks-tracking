import React, { use } from "react";
import MaterialsLayout from "@/components/layout/MaterialsLayout";
import MaterialButton from "@/components/ui/MaterialButton";
import InfoWithVideo from "@/components/ui/InfoWithVideo";
import {
  BrickRTheme,
  BrickVTheme,
  BrickZTheme,
  LintelTheme,
  MortarTheme,
} from "@/components/materials/themes";
import { useRouter } from "next/router";

export default function Bricks() {
  const router = useRouter();

  return (
    <MaterialsLayout>
      <InfoWithVideo
        infoCardProps={{
          title: "INSIEME",
          subtitle: "En_25_50_04",
          theme: {
            textColor: "text-white",
            bgColor: "bg-gray",
            borderColor: "border-gray",
          },
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
                    label={"BRICK_R"}
                    theme={BrickRTheme}
                    onClick={() => router.push("/materials/brick-r")}
                  />
                  <MaterialButton
                    label="BRICK_V"
                    theme={BrickVTheme}
                    onClick={() => router.push("/materials/brick-v")}
                  />
                  <MaterialButton
                    label="BRICK_Z"
                    theme={BrickZTheme}
                    onClick={() => router.push("/materials/brick-z")}
                  />
                  <MaterialButton
                    label="MORTAR"
                    theme={MortarTheme}
                    onClick={() => router.push("/materials/mortar")}
                  />
                  <MaterialButton
                    label="LINTEL"
                    theme={LintelTheme}
                    onClick={() => router.push("/materials/lintel")}
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
              imageSrc="materials/brick-r-map.png"
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
    </MaterialsLayout>
  );
}
