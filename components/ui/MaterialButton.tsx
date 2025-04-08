import React from "react";

interface MateriaButtonProps {
  label: string;
  bgColor: string;
  textColor: string;
  onClick?: () => void;
}

const MateriaButton: React.FC<MateriaButtonProps> = ({
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

export default MateriaButton;
