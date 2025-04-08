import React from "react";
import BricksLayout from "@/components/layout/BricksLayout";
import InfoCard from "@/components/ui/InfoCard";
import MateriaButton from "@/components/ui/MaterialButton";
import InfoWithVideo from "@/components/ui/InfoWithVideo";

export default function Bricks() {
  const handleBrickClick = (brickType: any) => {
    console.log("Clicked:", brickType);
  };

  return (
    <BricksLayout>
      <main className="p-4">
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
                { id: "brick_r", top: "10%", left: "30%" },
                { id: "brick_v", top: "25%", left: "50%" },
                { id: "brick_z", top: "45%", left: "20%" },
                { id: "mortar", top: "60%", left: "40%" },
                { id: "lintel", top: "80%", left: "55%" },
              ].map((brick) => (
                <img
                  key={brick.id}
                  src={`/materials/${brick.id.toLowerCase()}.png`} // Adjust path if needed
                  alt={brick.id}
                  onClick={() => handleBrickClick(brick.id)}
                  className="w-10 h-10 absolute cursor-pointer animate-pulse-fast"
                  style={{ top: brick.top, left: brick.left }}
                />
              ))}
            </div>
          </div>

          {/* Right Info Panel - Now Horizontal */}
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
                      <MateriaButton
                        label="BRICK_R"
                        bgColor="bg-clay"
                        textColor="text-white"
                        onClick={() => handleBrickClick("BRICK_R")}
                      />
                      <MateriaButton
                        label="BRICK_V"
                        bgColor="bg-sun"
                        textColor="text-white"
                        onClick={() => handleBrickClick("BRICK_V")}
                      />
                      <MateriaButton
                        label="BRICK_Z"
                        bgColor="bg-peach"
                        textColor="text-white"
                        onClick={() => handleBrickClick("BRICK_Z")}
                      />
                      <MateriaButton
                        label="MORTAR"
                        bgColor="bg-white"
                        textColor="text-black"
                        onClick={() => handleBrickClick("MORTAR")}
                      />
                      <MateriaButton
                        label="LINTEL"
                        bgColor="bg-black"
                        textColor="text-white"
                        onClick={() => handleBrickClick("LINTEL")}
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
                      <MateriaButton
                        label="BRICK_R"
                        bgColor="bg-clay"
                        textColor="text-white"
                        onClick={() => handleBrickClick("BRICK_R")}
                      />
                      <MateriaButton
                        label="BRICK_V"
                        bgColor="bg-sun"
                        textColor="text-white"
                        onClick={() => handleBrickClick("BRICK_V")}
                      />
                      <MateriaButton
                        label="BRICK_Z"
                        bgColor="bg-peach"
                        textColor="text-white"
                        onClick={() => handleBrickClick("BRICK_Z")}
                      />
                      <MateriaButton
                        label="MORTAR"
                        bgColor="bg-white"
                        textColor="text-black"
                        onClick={() => handleBrickClick("MORTAR")}
                      />
                      <MateriaButton
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
    </BricksLayout>
  );
}
