import imgLogoIconFramer from "figma:asset/f7507404e37ba330fedad4eefd424c70f4cefce1.png";

export default function LogoIconFramer() {
  return (
    <div
      className="box-border flex items-center justify-center size-full"
      data-name="Logo icon_framer"
    >
      <img
        src={imgLogoIconFramer}
        alt="Framer logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
}