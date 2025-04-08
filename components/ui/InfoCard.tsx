import React, { FC, ReactNode } from "react";

interface InfoItem {
  label: string;
  value: ReactNode;
}

export interface InfoCardProps {
  title: string;
  subtitle: string;
  mainColor: string;
  info: InfoItem[];
  imageSrc?: string;
  className?: string;
}

const InfoCard: FC<InfoCardProps> = ({
  title,
  subtitle,
  mainColor,
  info = [],
  imageSrc,
  className = "",
}) => {
  return (
    <div
      className={`rounded-xl border border-3 w-[240px] shadow-sm ${className} border-${mainColor}`}
    >
      <div className={`mx-auto w-2/3  py-1 rounded-b-xl bg-${mainColor}`}>
        <p className="text-white text-lg font-bold text-center">{title}</p>
      </div>

      {subtitle && (
        <div className="text-xs text-center text-gray-600 my-2">{subtitle}</div>
      )}

      <div className="space-y-2 w-full px-4 pb-4">
        {info.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-start text-sm"
          >
            <div className=" text-sm text-gray-600 font-semibold w-full mr-2 sm:w-1/3">
              {item.label}
            </div>
            <div className="text-sm text-gray-600 w-full sm:w-2/3">
              {item.value}
            </div>
          </div>
        ))}
        {imageSrc && (
          <div className="mt-4 w-full">
            <img
              src={imageSrc}
              alt={`Image for ${title}`}
              className="w-full h-auto rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
