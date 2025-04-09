import React from "react";

export default function PlayButton({ primaryColor }: { primaryColor: string }) {
  return (
    <svg
      width="85"
      height="85"
      viewBox="0 0 85 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <circle
          cx="42.5"
          cy="42.5"
          r="38.5"
          fill="white"
          fillOpacity="0.8"
          shapeRendering="crispEdges"
        />
        <circle
          cx="42.5"
          cy="42.5"
          r="37"
          stroke={primaryColor}
          strokeWidth="3"
          shapeRendering="crispEdges"
        />
      </g>
      <g transform="translate(0, 4)">
        <path
          d="M62.8711 34.3818C66.9826 36.088 66.9826 41.912 62.8711 43.6182L32.9164 56.0485C29.6238 57.4148 26 54.9951 26 51.4303V26.5697C26 23.0049 29.6238 20.5852 32.9164 21.9515L62.8711 34.3818Z"
          fill={primaryColor}
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="85"
          height="85"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
