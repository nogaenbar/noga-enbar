import imgImage1 from "figma:asset/f397b94399c71f8e3b1ced7561632643307f98a6.png";

export default function LogoIconGuardian() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl size-full"
      data-name="Logo icon_guardian"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-0.5 py-px relative size-full">
          <div
            className="bg-center bg-cover bg-no-repeat shrink-0 size-[61px]"
            data-name="image 1"
            style={{ backgroundImage: `url('${imgImage1}')` }}
          />
        </div>
      </div>
    </div>
  );
}