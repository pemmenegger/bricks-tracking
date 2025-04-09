import React from "react";
import { MaterialTheme } from "../materials/themes";

interface MaterialButtonProps {
  label: string;
  bgColorClass: string;
  textColorClass: string;
  onClick?: () => void;
}

const MaterialButton: React.FC<MaterialButtonProps> = ({
  label,
  bgColorClass,
  textColorClass,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-center h-[18px] flex items-center justify-center rounded-md shadow-md font-bold text-sm tracking-widest uppercase ${bgColorClass} ${textColorClass}`}
    >
      {label}
    </button>
  );
};

export default MaterialButton;
