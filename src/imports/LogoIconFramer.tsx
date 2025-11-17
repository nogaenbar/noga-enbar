import imgFramerLogo from "figma:asset/f7507404e37ba330fedad4eefd424c70f4cefce1.png";

export default function LogoIconFramer() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative size-full"
      data-name="Logo icon_framer"
    >
      <div
        className="w-full h-full bg-[50%_50%] bg-no-repeat bg-contain"
        data-name="framer logo"
        style={{ backgroundImage: `url('${imgFramerLogo}')` }}
      />
    </div>
  );
}