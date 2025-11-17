import svgPaths from "./svg-06ttkf9fyk";

function InverseFavicon() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="inverse_favicon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 60 60"
      >
        <g clipPath="url(#clip0_5_33)" id="inverse_favicon">
          <rect fill="#7EAAFF" height="60" width="60" />
          <g filter="url(#filter0_dd_5_33)" id="Vector">
            <path d={svgPaths.p20e1db00} fill="var(--fill-0, #303030)" />
            <path d={svgPaths.p3faebc70} fill="var(--fill-0, #303030)" />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="84.8047"
            id="filter0_dd_5_33"
            width="76.1328"
            x="-10.8203"
            y="-12.6953"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-5" dy="5" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.165023 0 0 0 0 0.354318 0 0 0 0 0.72 0 0 0 0.7 0"
            />
            <feBlend
              in2="BackgroundImageFix"
              mode="multiply"
              result="effect1_dropShadow_5_33"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="5" dy="-5" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.89775 0 0 0 0 0.92638 0 0 0 0 1 0 0 0 0.5 0"
            />
            <feBlend
              in2="effect1_dropShadow_5_33"
              mode="hard-light"
              result="effect2_dropShadow_5_33"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_5_33"
              mode="normal"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_5_33">
            <rect fill="white" height="60" width="60" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function LogoIconInverse() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start overflow-clip p-0 relative rounded-xl size-full"
      data-name="Logo icon_inverse"
    >
      <InverseFavicon />
    </div>
  );
}