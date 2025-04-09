import React from "react";

interface MaterialButtonProps {
  label: string;
  bgColor: string;
  textColor: string;
  onClick?: () => void;
}

const MaterialButton: React.FC<MaterialButtonProps> = ({
  label,
  bgColor,
  textColor,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-center h-[18px] flex items-center justify-center rounded-md shadow-md font-bold text-sm tracking-widest uppercase ${bgColor} ${textColor}`}
    >
      {label}
    </button>
  );
};

export default MaterialButton;
