import React, { FC } from "react";
import { MaterialContent } from "../materials/content";

export interface InfoCardProps {
  materialContent: MaterialContent;
}

const InfoCard: FC<InfoCardProps> = ({ materialContent }) => {
  const { props, theme, infos } = materialContent;
  return (
    <div className="w-[240px]" id={props.lineToId}>
      <div
        className={`rounded-xl border border-3 w-[240px] shadow-sm ${theme.borderColor}`}
      >
        <div
          className={`mx-auto w-2/3  py-1 rounded-b-xl ${theme.bgColorClass}`}
        >
          <p
            className={`text-lg font-bold text-center ${theme.textColorClass}`}
          >
            {props.title}
          </p>
        </div>

        {props.subtitle && (
          <div className="text-xs text-center text-gray-600 my-2">
            {props.subtitle}
          </div>
        )}

        <div className="space-y-2 w-full px-4 pb-4">
          {infos.map((item, idx) => (
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
          {props.cardImageSrc && (
            <div className="mt-4 w-full">
              <img
                src={props.cardImageSrc}
                alt={`Image for ${props.title}`}
                className="w-full h-auto rounded-md"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
