import svgPaths from "./svg-ri9spi4sip";

function Frame90() {
  return (
    <div className="relative shrink-0 size-10">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="Frame 90">
          <path
            d={svgPaths.pc3c6b70}
            fill="var(--fill-0, #333333)"
            id="audrey"
          />
        </g>
      </svg>
    </div>
  );
}

export default function LogoIconAudrey() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl size-full"
      data-name="Logo icon_audrey"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-0.5 py-px relative size-full">
          <Frame90 />
        </div>
      </div>
      <div className="absolute border border-[#e2e6ee] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}