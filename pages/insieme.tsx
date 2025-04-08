import React from "react";

export default function Insieme() {
  const handleBrickClick = (brickType) => {
    console.log("Clicked:", brickType);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <header className="flex justify-between items-center px-4 mb-4">
        <div className="text-gray-400 font-semibold">INSIEME</div>
        <div className="text-gray-400 font-semibold">FULL MOVIE</div>
      </header>

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
        <div className="w-2/3 flex gap-6">
          <div className="flex-1 bg-white p-4 rounded-xl shadow text-sm">
            <h2 className="text-lg font-bold mb-2">INSIEME</h2>
            <p>
              <strong>Category:</strong> Art Installation
            </p>
            <p>
              <strong>Materials:</strong>
            </p>
            <ul className="pl-4 flex flex-wrap gap-2 mt-1">
              <li>
                <span className="bg-[#eca65e] px-2 py-1 inline-block rounded text-xs">
                  BRICK_R
                </span>
              </li>
              <li>
                <span className="bg-[#df7e49] px-2 py-1 inline-block rounded text-xs">
                  BRICK_Y
                </span>
              </li>
              <li>
                <span className="bg-[#c76b4d] px-2 py-1 inline-block rounded text-xs">
                  BRICK_Z
                </span>
              </li>
              <li>
                <span className="bg-gray-300 px-2 py-1 inline-block rounded text-xs">
                  MORTAR
                </span>
              </li>
              <li>
                <span className="bg-black text-white px-2 py-1 inline-block rounded text-xs">
                  LINTEL
                </span>
              </li>
            </ul>
            <p className="mt-2">
              <strong>Dimensions:</strong> H: 400cm, L: 150cm
            </p>
            <p>
              <strong>Weight:</strong> —
            </p>
          </div>

          <div className="flex-1 rounded-xl overflow-hidden shadow">
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
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-10 border-t pt-4">
        <div className="w-full h-4 flex items-center justify-between relative">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full bg-white border border-gray-400 z-10"
            ></div>
          ))}
          <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gray-400 z-0" />
        </div>
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
  );
}
