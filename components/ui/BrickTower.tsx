import { useRouter } from "next/router";
import {
  BrickRProps,
  BrickVProps,
  BrickZProps,
  LintelProps,
  MortarProps,
} from "../materials/props";

export default function BrickTower() {
  const router = useRouter();

  return (
    <div className="relative max-h-[600px]">
      <img
        src="/brick-tower.svg"
        alt="Tower Diagram"
        className="max-h-[600px] object-contain"
      />
      {[
        {
          id: BrickRProps.slug,
          lineFromId: BrickRProps.lineFromId!,
          top: "10%",
          left: "30%",
        },
        {
          id: BrickVProps.slug,
          lineFromId: BrickVProps.lineFromId!,
          top: "25%",
          left: "50%",
        },
        {
          id: BrickZProps.slug,
          lineFromId: BrickZProps.lineFromId!,
          top: "45%",
          left: "20%",
        },
        {
          id: MortarProps.slug,
          lineFromId: MortarProps.lineFromId!,
          top: "60%",
          left: "40%",
        },
        {
          id: LintelProps.slug,
          lineFromId: LintelProps.lineFromId!,
          top: "80%",
          left: "55%",
        },
      ].map((brick) => (
        <img
          key={brick.id}
          id={brick.lineFromId}
          src={`/materials/${brick.id}.png`}
          alt={brick.id}
          onClick={() => router.push(`/materials/${brick.id}`)}
          className="w-10 h-10 absolute cursor-pointer animate-pulse-fast"
          style={{ top: brick.top, left: brick.left }}
        />
      ))}
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
    </div>
  );
}
