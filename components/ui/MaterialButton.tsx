import React from "react";
import { useRouter } from "next/router";

interface MaterialButtonProps {
  label: string;
  bgColorClass: string;
  textColorClass: string;
  toPath?: string;
}

const MaterialButton: React.FC<MaterialButtonProps> = ({
  label,
  bgColorClass,
  textColorClass,
  toPath,
}) => {
  const router = useRouter();
  return (
    <button
      onClick={toPath ? () => router.push(toPath) : undefined}
      className={`text-center h-[18px] flex items-center justify-center rounded-md shadow-md font-bold text-sm tracking-widest uppercase ${bgColorClass} ${textColorClass}`}
    >
      {label}
    </button>
  );
};

export default MaterialButton;
