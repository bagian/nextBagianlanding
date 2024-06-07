import * as React from "react";
const SvgBlur = (props) => (
  <svg
    width={2474}
    height={1067}
    viewBox="0 0 2474 1067"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_f_91_1236)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1237.26 233.925C713.203 233.925 282.623 496.949 234.528 833.075H2240C2191.9 496.949 1761.32 233.925 1237.26 233.925Z"
        fill="#C7C6FD"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_91_1236"
        x={0.827835}
        y={0.225296}
        width={2472.87}
        height={1066.55}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={116.85}
          result="effect1_foregroundBlur_91_1236"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgBlur;
