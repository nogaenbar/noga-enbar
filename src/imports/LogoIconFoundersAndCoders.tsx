import imgImage12 from "figma:asset/69f762d2138e51c4da2486a7f90d2912da75401a.png";

export default function LogoIconFoundersAndCoders() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl size-full"
      data-name="Logo icon_founders and coders"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-0.5 py-px relative size-full">
          <div
            className="bg-center bg-cover bg-no-repeat rounded shrink-0 size-[60px]"
            data-name="image 12"
            style={{ backgroundImage: `url('${imgImage12}')` }}
          />
        </div>
      </div>
      <div className="absolute border border-[#e2e6ee] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}