import svgPaths from "./svg-y7mlrkoyyc";

function FjLogo() {
  return (
    <div className="relative shrink-0 size-10" data-name="FJ_logo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g clipPath="url(#clip0_1_567)" id="FJ_logo">
          <path
            d={svgPaths.p23b26780}
            fill="var(--fill-0, #FAFAFA)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_567">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function LogoIconFusionJourney() {
  return (
    <div
      className="bg-[#2d2d2d] relative rounded-xl size-full"
      data-name="Logo icon_fusion_journey"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-0.5 py-px relative size-full">
          <FjLogo />
        </div>
      </div>
    </div>
  );
}