import imgBuilderIoLogo from "figma:asset/85c51c9a8a9b7eabce9b22fe1ad46a6b84b0f1ab.png";

export default function LogoIconBuilderIo() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative size-full"
      data-name="Logo icon_builder-io"
    >
      <div
        className="[background-size:100%_100%] aspect-square basis-0 bg-[50%_50%] bg-no-repeat grow min-h-px min-w-px shrink-0"
        data-name="builder io logo"
        style={{ backgroundImage: `url('${imgBuilderIoLogo}')` }}
      />
    </div>
  );
}