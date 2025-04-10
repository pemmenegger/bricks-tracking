import React, { FC, ReactNode } from "react";
import { MaterialProps } from "../materials/props";
import { MaterialTheme } from "../materials/themes";

export interface InfoItem {
  label: string;
  value: ReactNode;
}

export interface InfoCardProps {
  materialProps: MaterialProps;
  materialTheme: MaterialTheme;
  info: InfoItem[];
}

const InfoCard: FC<InfoCardProps> = ({
  materialProps,
  materialTheme,
  info = [],
}) => {
  return (
    <div
      className={`rounded-xl border border-3 w-[240px] shadow-sm ${materialTheme.borderColor}`}
    >
      <div
        className={`mx-auto w-2/3  py-1 rounded-b-xl ${materialTheme.bgColorClass}`}
      >
        <p
          className={`text-lg font-bold text-center ${materialTheme.textColorClass}`}
        >
          {materialProps.title}
        </p>
      </div>

      {materialProps.subtitle && (
        <div className="text-xs text-center text-gray-600 my-2">
          {materialProps.subtitle}
        </div>
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
        {materialProps.cardImageSrc && (
          <div className="mt-4 w-full">
            <img
              src={materialProps.cardImageSrc}
              alt={`Image for ${materialProps.title}`}
              className="w-full h-auto rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
