import React from "react";
import { MaterialTheme } from "../materials/themes";

interface MaterialButtonProps {
  label: string;
  theme: MaterialTheme;
  onClick?: () => void;
}

const MaterialButton: React.FC<MaterialButtonProps> = ({
  label,
  theme,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-center h-[18px] flex items-center justify-center rounded-md shadow-md font-bold text-sm tracking-widest uppercase ${theme.bgColor} ${theme.textColor}`}
    >
      {label}
    </button>
  );
};

export default MaterialButton;
