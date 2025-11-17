import svgPaths from "./svg-t59eik9kn9";
import imgNogi1 from "figma:asset/50cf040298886599a0afea3ca6109248227e8465.png";
import imgImage1 from "figma:asset/f397b94399c71f8e3b1ced7561632643307f98a6.png";
import imgImage12 from "figma:asset/69f762d2138e51c4da2486a7f90d2912da75401a.png";
import imgLogo from "figma:asset/b025eeb040b6632a12aab9d5ac5b052792444c3c.png";
import imgImage15 from "figma:asset/6c66e06c2e33b9cfa775ad9929dad21b4101ee33.png";
import imgImage16 from "figma:asset/ecf367235e54c6594e90b9e062176e7d140ef768.png";
import imgImage18 from "figma:asset/703bf41d44185b07b87443a01d7ea3f6e08aaf24.png";
import imgImage17 from "figma:asset/4c9117e3b8a144160d7b34f8b38f4cfb1fdcdd10.png";
import imgImage19 from "figma:asset/fbb1c38ed169aa78ef982cf60f1d341a500f7b3a.png";
import imgImage24 from "figma:asset/eecbff5705ec05eaa1fccb7222d3de2c5bb04dc8.png";
import imgImage20 from "figma:asset/ac2bc2172c056e135f5dc5acb30285cf288cd1d7.png";
import imgImage9 from "figma:asset/780d693801afb2eb197e9e11178a45d5bc1c16c5.png";
import imgImage10 from "figma:asset/46b19e2cd8a92c08210973da66ad6a6c868d81ba.png";
import imgImage11 from "figma:asset/adf1df3309d9358faabe493a7bfbedbe835c1c6f.png";
import imgImage13 from "figma:asset/121952bd0357bf1058d3a94831d6e298af56b93b.png";
import imgImage14 from "figma:asset/398ae2fb5a609cfab0a8f6092636db6e5fd16243.png";

function Picture() {
  return (
    <div
      className="overflow-clip relative rounded-[1000px] shrink-0 size-[200px]"
      data-name="picture"
    >
      <div
        className="[background-size:100%_149.79%] absolute bg-[6.58%_24.79%] bg-no-repeat inset-0"
        data-name="nogi 1"
        style={{ backgroundImage: `url('${imgNogi1}')` }}
      />
    </div>
  );
}

function Frame84() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <div
        className="bg-clip-text bg-gradient-to-r font-['GT_Flexa:Bold',_sans-serif] from-[#a478e8] leading-[0] not-italic relative shrink-0 text-[24px] text-left to-[#516cf7] w-full"
        style={{ WebkitTextFillColor: "transparent" }}
      >
        <p className="block leading-[32px]">Senior Product Designer</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="flex flex-col font-['GT_Flexa:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2e2e48] text-[40px] text-left w-full">
        <p className="block leading-[48px]">Noga Enbar</p>
      </div>
      <Frame84 />
    </div>
  );
}

function HeaderText() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Header_text"
    >
      <Text />
    </div>
  );
}

function HeaderContianer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="header_contianer"
    >
      <Picture />
      <HeaderText />
    </div>
  );
}

function Divider() {
  return (
    <div
      className="h-[0.5px] overflow-clip relative shrink-0 w-[304px]"
      data-name="Divider"
    >
      <div className="absolute border-[#e2e6ee] border-[7px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BasicMail() {
  return (
    <div className="absolute inset-[18.75%]" data-name="basic/mail">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g id="basic/mail">
          <path
            d={svgPaths.p3f7be870}
            fill="var(--fill-0, #79819A)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon() {
  return (
    <div
      className="overflow-clip relative rounded-[100px] shrink-0 size-10"
      data-name="Featured icon"
    >
      <div
        className="absolute bg-[#e2e6ee] inset-0 rounded-[100px]"
        data-name="Rectangle"
      />
      <BasicMail />
    </div>
  );
}

function Text1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left"
      data-name="Text"
    >
      <div
        className="font-['GT_Flexa:Lite',_sans-serif] min-w-full relative shrink-0 text-[#79819a] text-[16px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[24px]">Email</p>
      </div>
      <div className="font-['GT_Flexa:Light',_sans-serif] relative shrink-0 text-[#47516b] text-[20px] text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          noga.enbar.design@gmail.com
        </p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[18px] items-center justify-start p-0 relative shrink-0"
      data-name="Row"
    >
      <FeaturedIcon />
      <Text1 />
    </div>
  );
}

function BasicLink02() {
  return (
    <div className="absolute inset-[18.75%]" data-name="basic/link_02">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g id="basic/link_02">
          <path
            d={svgPaths.p23782800}
            fill="var(--fill-0, #79819A)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon1() {
  return (
    <div
      className="overflow-clip relative rounded-[100px] shrink-0 size-10"
      data-name="Featured icon"
    >
      <div
        className="absolute bg-[#e2e6ee] inset-0 rounded-[100px]"
        data-name="Rectangle"
      />
      <BasicLink02 />
    </div>
  );
}

function Text2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Lite',_sans-serif] relative shrink-0 text-[#79819a] text-[16px] w-full">
        <p className="block leading-[24px]">Website</p>
      </div>
      <a
        className="block font-['GT_Flexa:Light',_sans-serif] relative shrink-0 text-[#47516b] text-[20px] w-full"
        href="https://fj.debugged-pro.com/"
      >
        <p className="block cursor-pointer leading-[24px]">Fusion Journey</p>
      </a>
    </div>
  );
}

function Row1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[18px] items-center justify-start p-0 relative shrink-0"
      data-name="Row"
    >
      <FeaturedIcon1 />
      <Text2 />
    </div>
  );
}

function BasicPhone() {
  return (
    <div className="absolute inset-[18.75%]" data-name="basic/phone">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g id="basic/phone">
          <path
            d={svgPaths.p33f13600}
            fill="var(--fill-0, #79819A)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon2() {
  return (
    <div
      className="overflow-clip relative rounded-[100px] shrink-0 size-10"
      data-name="Featured icon"
    >
      <div
        className="absolute bg-[#e2e6ee] inset-0 rounded-[100px]"
        data-name="Rectangle"
      />
      <BasicPhone />
    </div>
  );
}

function Text3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Lite',_sans-serif] relative shrink-0 text-[#79819a] text-[16px] w-full">
        <p className="block leading-[24px]">Phone</p>
      </div>
      <div className="font-['GT_Flexa:Light',_sans-serif] relative shrink-0 text-[#47516b] text-[20px] w-full">
        <p className="block leading-[24px] whitespace-pre-wrap">{`(+49)  15734640308`}</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[18px] items-center justify-start p-0 relative shrink-0"
      data-name="Row"
    >
      <FeaturedIcon2 />
      <Text3 />
    </div>
  );
}

function BasicLocation() {
  return (
    <div className="absolute inset-[18.75%]" data-name="basic/location">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g id="basic/location">
          <path
            d={svgPaths.p107d7c80}
            fill="var(--fill-0, #79819A)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon3() {
  return (
    <div
      className="overflow-clip relative rounded-[100px] shrink-0 size-10"
      data-name="Featured icon"
    >
      <div
        className="absolute bg-[#e2e6ee] inset-0 rounded-[100px]"
        data-name="Rectangle"
      />
      <BasicLocation />
    </div>
  );
}

function Text4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Lite',_sans-serif] relative shrink-0 text-[#79819a] text-[16px] w-full">
        <p className="block leading-[24px]">Address</p>
      </div>
      <div className="font-['GT_Flexa:Light',_sans-serif] relative shrink-0 text-[#47516b] text-[20px] w-full">
        <p className="block leading-[24px]">Berlin, Germany</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[18px] items-center justify-start p-0 relative shrink-0"
      data-name="Row"
    >
      <FeaturedIcon3 />
      <Text4 />
    </div>
  );
}

function Infos() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Infos"
    >
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function Linkedin() {
  return (
    <div className="relative shrink-0 size-10" data-name="linkedin">
      <div className="absolute bottom-[-25%] left-[-20%] right-[-20%] top-[-15%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 56 56"
        >
          <g filter="url(#filter0_d_1_564)" id="linkedin">
            <rect
              fill="var(--fill-0, #0077B5)"
              height="40"
              rx="20"
              width="40"
              x="8"
              y="6"
            />
            <path
              d={svgPaths.p22e08500}
              fill="var(--fill-0, white)"
              id="Icon"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="56"
              id="filter0_d_1_564"
              width="56"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_564"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_564"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[280px]"
      data-name="Text"
    >
      <div
        className="font-['GT_Flexa:Lite',_sans-serif] min-w-full relative shrink-0 text-[#79819a] text-[16px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[24px]">Linkedin</p>
      </div>
      <a
        className="[white-space-collapse:collapse] block font-['GT_Flexa:Light',_sans-serif] relative shrink-0 text-[#47516b] text-[20px] text-nowrap"
        href="https://www.linkedin.com/in/noga-inbar/"
      >
        <p className="block cursor-pointer leading-[24px] whitespace-pre">
          noga-inbar
        </p>
      </a>
    </div>
  );
}

function Row4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[18px] items-center justify-start p-0 relative shrink-0"
      data-name="Row"
    >
      <Linkedin />
      <Text5 />
    </div>
  );
}

function Linkedin1() {
  return (
    <div className="relative shrink-0 size-10" data-name="linkedin">
      <div className="absolute bottom-[-25%] left-[-20%] right-[-20%] top-[-15%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 56 56"
        >
          <g filter="url(#filter0_d_1_539)" id="linkedin">
            <rect
              fill="var(--fill-0, #EA4C89)"
              height="40"
              rx="20"
              width="40"
              x="8"
              y="6"
            />
            <path
              d={svgPaths.p13567500}
              fill="var(--fill-0, white)"
              id="Icon"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="56"
              id="filter0_d_1_539"
              width="56"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_539"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_539"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[280px]"
      data-name="Text"
    >
      <div
        className="font-['GT_Flexa:Lite',_sans-serif] min-w-full relative shrink-0 text-[#79819a] text-[16px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[24px]">Dribbble</p>
      </div>
      <a
        className="[white-space-collapse:collapse] block font-['GT_Flexa:Light',_sans-serif] relative shrink-0 text-[#47516b] text-[20px] text-nowrap"
        href="https://dribbble.com/FusionJourney"
      >
        <p className="block cursor-pointer leading-[24px] whitespace-pre">
          @FusionJourney
        </p>
      </a>
    </div>
  );
}

function Row5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[18px] items-center justify-start p-0 relative shrink-0"
      data-name="Row"
    >
      <Linkedin1 />
      <Text6 />
    </div>
  );
}

function SocialIcon() {
  return (
    <div className="relative shrink-0 size-10" data-name="Social icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="Social icon">
          <rect
            fill="url(#paint0_radial_1_558)"
            height="40"
            rx="20"
            width="40"
          />
          <rect
            fill="url(#paint1_radial_1_558)"
            fillOpacity="0.2"
            height="40"
            rx="20"
            width="40"
          />
          <path
            d={svgPaths.p1d51e480}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
        <defs>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(2.58876 39.1237) scale(50.7852)"
            gradientUnits="userSpaceOnUse"
            id="paint0_radial_1_558"
            r="1"
          >
            <stop offset="0.09" stopColor="#FA8F21" />
            <stop offset="0.78" stopColor="#D82D7E" />
          </radialGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(20 38.75) scale(31.25)"
            gradientUnits="userSpaceOnUse"
            id="paint1_radial_1_558"
            r="1"
          >
            <stop offset="0.713542" stopColor="#8C3AAA" stopOpacity="0" />
            <stop offset="1" stopColor="#8C3AAA" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[280px]"
      data-name="Text"
    >
      <div
        className="font-['GT_Flexa:Lite',_sans-serif] min-w-full relative shrink-0 text-[#79819a] text-[16px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[24px]">Instagram</p>
      </div>
      <a
        className="[white-space-collapse:collapse] block font-['GT_Flexa:Light',_sans-serif] relative shrink-0 text-[#47516b] text-[20px] text-nowrap"
        href="https://www.instagram.com/nogsinbar/"
      >
        <p className="block cursor-pointer leading-[24px] whitespace-pre">
          @nogsinbar
        </p>
      </a>
    </div>
  );
}

function Row6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[18px] items-center justify-start p-0 relative shrink-0"
      data-name="Row"
    >
      <SocialIcon />
      <Text7 />
    </div>
  );
}

function Infos1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Infos"
    >
      <Row4 />
      <Row5 />
      <Row6 />
    </div>
  );
}

function Socials() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Socials"
    >
      <div className="font-['GT_Flexa:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#79819a] text-[16px] text-left w-full">
        <p className="block leading-[24px]">Socials</p>
      </div>
      <Infos1 />
    </div>
  );
}

function Linkedin2() {
  return (
    <div className="relative shrink-0 size-10" data-name="linkedin">
      <div className="absolute bottom-[-25%] left-[-20%] right-[-20%] top-[-15%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 56 56"
        >
          <g filter="url(#filter0_d_1_542)" id="linkedin">
            <rect
              fill="var(--fill-0, #EFE2F9)"
              height="40"
              rx="20"
              width="40"
              x="8"
              y="6"
            />
            <path
              d={svgPaths.p297dcf00}
              fill="var(--fill-0, #9251F7)"
              id="Vector"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="56"
              id="filter0_d_1_542"
              width="56"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_542"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_542"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#9251f7] text-[16px] text-left w-full">
        <p className="block leading-[24px]">Design</p>
      </div>
    </div>
  );
}

function Row7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[18px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Row"
    >
      <Linkedin2 />
      <Text8 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="box-border content-stretch flex flex-col font-['GT_Flexa:Light',_sans-serif] gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#9251f7] text-[20px] text-left text-nowrap">
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          Design Strategy
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          User research
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          Design Thinking workshops
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          From idea to MVP
        </p>
      </div>
      <div className="leading-[24px] relative shrink-0 whitespace-pre">
        <p className="block mb-0">{`Product Design `}</p>
        <p className="block">(Full-stack)</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">{`Wireframing & Prototyping`}</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">{`Usability & Concept testing`}</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          Design consultancy
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          Training teams/designers
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          Illustration
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          Brand Design
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          Typography
        </p>
      </div>
    </div>
  );
}

function Infos2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Infos"
    >
      <Row7 />
      <Frame96 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d={svgPaths.p15782c80}
            fill="var(--fill-0, #516CF7)"
            id="Icon_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Linkedin3() {
  return (
    <div
      className="bg-[#e1e7fe] box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded-[100px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] shrink-0 size-10"
      data-name="linkedin"
    >
      <Icon />
    </div>
  );
}

function Text9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#516cf7] text-[16px] text-left w-full">
        <p className="block leading-[24px]">Development</p>
      </div>
    </div>
  );
}

function Row8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[18px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Row"
    >
      <Linkedin3 />
      <Text9 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="box-border content-stretch flex flex-col font-['GT_Flexa:Light',_sans-serif] gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#516cf7] text-[20px] text-left text-nowrap">
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">{`Strong - HTML & CSS`}</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">{`Familiar - JS, React, Git & CMS`}</p>
      </div>
      <div className="leading-[24px] relative shrink-0 whitespace-pre">
        <p className="block mb-0">{`Ensuring fluent communication `}</p>
        <p className="block">{`between Design & Development`}</p>
      </div>
    </div>
  );
}

function Infos3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Infos"
    >
      <Row8 />
      <Frame101 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">
      <Infos2 />
      <Infos3 />
    </div>
  );
}

function Skills() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="skills"
    >
      <div className="font-['GT_Flexa:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#79819a] text-[16px] text-left w-full">
        <p className="block leading-[24px]">Skills</p>
      </div>
      <Frame97 />
    </div>
  );
}

function Divider2() {
  return <div className="h-[0.5px] shrink-0 w-[304px]" data-name="Divider" />;
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Divider />
      <div
        className="flex flex-col font-['GT_Flexa:Lite',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#47516b] text-[32px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[40px]">
          I am deeply interested in what we love and value, and how design can
          improve our lives.
        </p>
      </div>
      <div
        className="flex flex-col font-['GT_Flexa:Lite',_sans-serif] justify-center leading-[32px] min-w-full not-italic relative shrink-0 text-[#47516b] text-[24px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="mb-0">
          <span>{`I am a versatile Product Designer with illustration skills and front-end coding knowledge, `}</span>
          <span className="font-['GT_Flexa:Light',_sans-serif] not-italic">
            passionate about
          </span>
          <span>{` human-focused designs. `}</span>
        </p>
        <p className="block">{`My experience spans startups, NGOs, and tech for good sectors. Passionate about human behavior, I apply diverse approaches to enhance user experiences. `}</p>
      </div>
      <div
        className="h-[0.5px] relative shrink-0 w-[304px]"
        data-name="divider"
      >
        <div className="absolute border-[#e2e6ee] border-[7px] border-solid inset-0 pointer-events-none" />
      </div>
      <Infos />
      <Divider />
      <Socials />
      <div
        className="h-[0.5px] relative shrink-0 w-[304px]"
        data-name="divider"
      >
        <div className="absolute border-[#e2e6ee] border-[7px] border-solid inset-0 pointer-events-none" />
      </div>
      <Skills />
      <Divider2 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-10 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content_container"
    >
      <HeaderContianer />
      <Container />
    </div>
  );
}

function Aside() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2.5 h-[2445px] items-start justify-start left-0 overflow-clip px-[50px] py-[58px] top-0 w-[445px]"
      data-name="Aside"
    >
      <ContentContainer />
    </div>
  );
}

function MiscDot04L() {
  return (
    <div className="absolute inset-[18.75%]" data-name="misc/dot_04_l">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g id="misc/dot_04_l">
          <path
            d={svgPaths.p5332d00}
            fill="url(#paint0_linear_1_517)"
            id="Icon"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_517"
            x1="7.29199"
            x2="17.7087"
            y1="7.2915"
            y2="7.2915"
          >
            <stop stopColor="#A478E8" />
            <stop offset="1" stopColor="#516CF7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function StepIconBase() {
  return (
    <div
      className="bg-[#ffffff] overflow-clip relative rounded-[100px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05),0px_6px_24px_0px_rgba(0,0,0,0.04)] shrink-0 size-10"
      data-name="_Step icon base"
    >
      <div className="absolute bg-[#ffffff] inset-0" data-name="Background" />
      <MiscDot04L />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Divider3() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-[0.5px]"
      data-name="Divider"
    >
      <div className="absolute border border-[#e2e6ee] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function StepIconWrap() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-center justify-start p-0 relative shrink-0"
      data-name="Step icon wrap"
    >
      <StepIconBase />
      <Divider3 />
    </div>
  );
}

function StepIconContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-center p-0 relative self-stretch shrink-0 w-[87px]"
      data-name="_Step icon container"
    >
      <StepIconWrap />
    </div>
  );
}

function MiscDot04L1() {
  return (
    <div className="relative shrink-0 size-4" data-name="misc/dot_04_l">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="misc/dot_04_l">
          <path
            d={svgPaths.p2633caf0}
            fill="var(--fill-0, #2E2E48)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function StepIconBase1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center overflow-clip p-[2px] relative rounded-[100px] shrink-0"
      data-name="_Step icon base"
    >
      <MiscDot04L1 />
    </div>
  );
}

function Divider4() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-[0.5px]"
      data-name="Divider"
    >
      <div className="absolute border-2 border-[#e2e6ee] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function StepIconWrap1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative self-stretch shrink-0"
      data-name="Step icon wrap"
    >
      <StepIconBase1 />
      <Divider4 />
    </div>
  );
}

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

function LogoIcon() {
  return (
    <div
      className="bg-[#2d2d2d] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-0.5 py-px relative rounded-xl shrink-0 size-[60px]"
      data-name="Logo icon"
    >
      <FjLogo />
    </div>
  );
}

function Frame92() {
  return (
    <div className="relative shrink-0 size-1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4 4"
      >
        <g id="Frame 92">
          <path d={svgPaths.pd67f380} fill="var(--fill-0, #D9DFE8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BasicLocation1() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="basic/location">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="basic/location">
          <path
            d={svgPaths.p34b14280}
            fill="var(--fill-0, #79819A)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0"
      data-name="Location"
    >
      <BasicLocation1 />
      <div className="flex flex-col font-['GT_Flexa:Lite',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#79819a] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Remote</p>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['GT_Flexa:Lite',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#47516b] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Mar 2022 - Present
        </p>
      </div>
      <Frame92 />
      <Location />
    </div>
  );
}

function Content() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-between p-0 relative self-stretch shrink-0"
      data-name="Content"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['GT_Flexa:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2e2e48] text-[24px] text-left text-nowrap"
        href="https://fj.debugged-pro.com/"
      >
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block cursor-pointer leading-[32px] whitespace-pre">
          Fusion Journey
        </p>
      </a>
      <Frame91 />
    </div>
  );
}

function CompanyAndRole() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Company and role"
    >
      <LogoIcon />
      <Content />
    </div>
  );
}

function Experience() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative rounded shrink-0 w-[367px]"
      data-name="Experience"
    >
      <CompanyAndRole />
    </div>
  );
}

function Frame88() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left">
      <div className="flex flex-col font-['GT_Flexa:Bold',_sans-serif] justify-center relative shrink-0 text-[#79819a] text-[24px] text-nowrap">
        <p className="block leading-[32px] whitespace-pre">
          Product Design Lead
        </p>
      </div>
      <div
        className="css-1psc9z flex flex-col font-['GT_Flexa:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[#47516b] text-[20px]"
        style={{ width: "min-content" }}
      >
        <ul className="css-ed5n1g list-disc">
          <li className="mb-2 ms-[30px]">
            <span className="leading-[24px]">
              Led end-to-end design for health tech projects, creating a
              platform for the Ministry of Health that enhanced communication
              with 9.8 million citizens, elevating its public image.
            </span>
          </li>
          <li className="mb-2 ms-[30px]">
            <span className="leading-[24px]">
              Managed design processes for projects democratising corporate
              event planning, utilising analytics to transform how companies
              assess event impact.
            </span>
          </li>
          <li className="mb-2 ms-[30px]">
            <span className="leading-[24px]">
              Contributed to launching a nationwide app empowering parents of
              newborn babies, increasing trust and adoption rates as the
              platform continues to grow.
            </span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[24px]">
              Set KPIs and drove processes based on data insights, built entire
              design systems from scratch, future-proofing them while leading
              and training design and product teams.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-start justify-start min-h-px min-w-px pb-8 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Content"
    >
      <Experience />
      <Frame88 />
    </div>
  );
}

function Component1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-0 relative shrink-0 w-full"
      data-name="1"
    >
      <StepIconWrap1 />
      <Content1 />
    </div>
  );
}

function MiscDot04L2() {
  return (
    <div className="relative shrink-0 size-4" data-name="misc/dot_04_l">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="misc/dot_04_l">
          <path
            d={svgPaths.p2633caf0}
            fill="var(--fill-0, #2E2E48)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function StepIconBase2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center overflow-clip p-[2px] relative rounded-[100px] shrink-0"
      data-name="_Step icon base"
    >
      <MiscDot04L2 />
    </div>
  );
}

function Divider5() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-[0.5px]"
      data-name="Divider"
    >
      <div className="absolute border-2 border-[#e2e6ee] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function StepIconWrap2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative self-stretch shrink-0"
      data-name="Step icon wrap"
    >
      <StepIconBase2 />
      <Divider5 />
    </div>
  );
}

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

function LogoIcon1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl shrink-0 size-[60px]"
      data-name="Logo icon"
    >
      <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-0.5 py-px relative size-[60px]">
        <Frame90 />
      </div>
      <div className="absolute border border-[#e2e6ee] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}

function Frame93() {
  return (
    <div className="relative shrink-0 size-1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4 4"
      >
        <g id="Frame 92">
          <path d={svgPaths.pd67f380} fill="var(--fill-0, #D9DFE8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BasicLocation2() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="basic/location">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="basic/location">
          <path
            d={svgPaths.p34b14280}
            fill="var(--fill-0, #79819A)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Location1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0"
      data-name="Location"
    >
      <BasicLocation2 />
      <div className="flex flex-col font-['GT_Flexa:Lite',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#79819a] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Remote</p>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['GT_Flexa:Lite',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#47516b] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Jul 2019 - Feb 2022
        </p>
      </div>
      <Frame93 />
      <Location1 />
    </div>
  );
}

function Content2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-between p-0 relative self-stretch shrink-0"
      data-name="Content"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['GT_Flexa:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2e2e48] text-[24px] text-left text-nowrap"
        href="https://www.listenwithaudrey.com/"
      >
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block cursor-pointer leading-[32px] whitespace-pre">
          Listen with Audrey
        </p>
      </a>
      <Frame94 />
    </div>
  );
}

function CompanyAndRole1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Company and role"
    >
      <LogoIcon1 />
      <Content2 />
    </div>
  );
}

function Experience1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative rounded shrink-0 w-[367px]"
      data-name="Experience"
    >
      <CompanyAndRole1 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left">
      <div className="flex flex-col font-['GT_Flexa:Bold',_sans-serif] justify-center relative shrink-0 text-[#79819a] text-[24px] text-nowrap">
        <p className="block leading-[32px] whitespace-pre">
          Product Design Lead
        </p>
      </div>
      <div
        className="flex flex-col font-['GT_Flexa:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[#47516b] text-[20px]"
        style={{ width: "min-content" }}
      >
        <ul className="css-ed5n1g list-disc">
          <li className="mb-2 ms-[30px]">
            <span className="leading-[24px]">
              Led design workshops and conducted extensive user research,
              utilising qualitative and quantitative interviews to shape Audrey
              into a platform enhancing workplace culture and mental health
              through shared audiobook experiences.
            </span>
          </li>
          <li className="mb-2 ms-[30px]">
            <span className="leading-[24px]">
              Designed Audrey from prototype to final product, leveraging
              findings that 70% of audiobook listeners reported feeling less
              stressed and 67% felt cheered up, increasing empathy and reducing
              loneliness.
            </span>
          </li>
          <li className="mb-2 ms-[30px]">
            <span className="leading-[24px]">{`Managed design and development, addressing issues like the 'Great Resignation' and 'quiet quitting,' promoting connection and well-being in remote teams through Audrey's focus on audiobooks.`}</span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[24px]">{`Created Audrey's brand language, marketing website, and overall look and feel, ensuring a cohesive user experience.`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-start justify-start min-h-px min-w-px pb-8 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Content"
    >
      <Experience1 />
      <Frame89 />
    </div>
  );
}

function Component2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-0 relative shrink-0 w-full"
      data-name="2"
    >
      <StepIconWrap2 />
      <Content3 />
    </div>
  );
}

function MiscDot04L3() {
  return (
    <div className="relative shrink-0 size-4" data-name="misc/dot_04_l">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="misc/dot_04_l">
          <path
            d={svgPaths.p2633caf0}
            fill="var(--fill-0, #2E2E48)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function StepIconBase3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center overflow-clip p-[2px] relative rounded-[100px] shrink-0"
      data-name="_Step icon base"
    >
      <MiscDot04L3 />
    </div>
  );
}

function Divider6() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-[0.5px]"
      data-name="Divider"
    >
      <div className="absolute border-2 border-[#e2e6ee] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function StepIconWrap3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative self-stretch shrink-0"
      data-name="Step icon wrap"
    >
      <StepIconBase3 />
      <Divider6 />
    </div>
  );
}

function LogoIcon2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-0.5 py-px relative rounded-xl shrink-0 size-[60px]"
      data-name="Logo icon"
    >
      <div
        className="bg-center bg-cover bg-no-repeat shrink-0 size-[61px]"
        data-name="image 1"
        style={{ backgroundImage: `url('${imgImage1}')` }}
      />
    </div>
  );
}

function Frame95() {
  return (
    <div className="relative shrink-0 size-1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4 4"
      >
        <g id="Frame 92">
          <path d={svgPaths.pd67f380} fill="var(--fill-0, #D9DFE8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BasicLocation3() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="basic/location">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="basic/location">
          <path
            d={svgPaths.p34b14280}
            fill="var(--fill-0, #79819A)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Location2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0"
      data-name="Location"
    >
      <BasicLocation3 />
      <div className="flex flex-col font-['GT_Flexa:Lite',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#79819a] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">London, UK</p>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['GT_Flexa:Lite',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#47516b] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Apr 2018 - May 2019
        </p>
      </div>
      <Frame95 />
      <Location2 />
    </div>
  );
}

function Content4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-between p-0 relative self-stretch shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['GT_Flexa:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2e2e48] text-[24px] text-left text-nowrap">
        <p className="block leading-[32px] whitespace-pre">
          Guardian News Media
        </p>
      </div>
      <Frame102 />
    </div>
  );
}

function CompanyAndRole2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Company and role"
    >
      <LogoIcon2 />
      <Content4 />
    </div>
  );
}

function Experience2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative rounded shrink-0 w-[366px]"
      data-name="Experience"
    >
      <CompanyAndRole2 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left">
      <div className="flex flex-col font-['GT_Flexa:Bold',_sans-serif] justify-center relative shrink-0 text-[#79819a] text-[24px] text-nowrap">
        <p className="block leading-[32px] whitespace-pre">{`Freelance Product Designer `}</p>
      </div>
      <div
        className="css-1psc9z flex flex-col font-['GT_Flexa:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[#47516b] text-[20px]"
        style={{ width: "min-content" }}
      >
        <ul className="css-ed5n1g list-disc">
          <li className="mb-2 ms-[30px]">
            <span className="leading-[24px]">
              Spearheaded the redesign of the Daily Edition app interface,
              streamlining user journeys for enhanced usability.
            </span>
          </li>
          <li className="mb-2 ms-[30px]">
            <span className="leading-[24px]">
              Developed front-end user interfaces, ensuring seamless
              communication with stakeholders throughout the process.
            </span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[24px]">
              Crafted engaging graphics for articles featured on the Guardian
              web app and website, enriching the overall user experience.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-start justify-start min-h-px min-w-px pb-8 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Content"
    >
      <Experience2 />
      <Frame103 />
    </div>
  );
}

function Component3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-0 relative shrink-0 w-full"
      data-name="3"
    >
      <StepIconWrap3 />
      <Content5 />
    </div>
  );
}

function MiscDot04L4() {
  return (
    <div className="relative shrink-0 size-4" data-name="misc/dot_04_l">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="misc/dot_04_l">
          <path
            d={svgPaths.p2633caf0}
            fill="var(--fill-0, #2E2E48)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function StepIconBase4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center overflow-clip p-[2px] relative rounded-[100px] shrink-0"
      data-name="_Step icon base"
    >
      <MiscDot04L4 />
    </div>
  );
}

function Divider7() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-[0.5px]"
      data-name="Divider"
    >
      <div className="absolute border-2 border-[#e2e6ee] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function StepIconWrap4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative self-stretch shrink-0"
      data-name="Step icon wrap"
    >
      <StepIconBase4 />
      <Divider7 />
    </div>
  );
}

function LogoIcon3() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Logo icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 60 60"
      >
        <g id="Logo icon">
          <rect
            fill="var(--fill-0, white)"
            height="59"
            rx="11.5"
            width="59"
            x="0.5"
            y="0.5"
          />
          <rect
            height="59"
            rx="11.5"
            stroke="var(--stroke-0, #22C3F1)"
            width="59"
            x="0.5"
            y="0.5"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pf9cc200}
            fill="url(#paint0_linear_1_561)"
            fillRule="evenodd"
            id="Union"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_561"
            x1="31.1393"
            x2="28.422"
            y1="9.81432"
            y2="50.1857"
          >
            <stop stopColor="#009CF3" />
            <stop offset="1" stopColor="#16D6D9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame104() {
  return (
    <div className="relative shrink-0 size-1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4 4"
      >
        <g id="Frame 92">
          <path d={svgPaths.pd67f380} fill="var(--fill-0, #D9DFE8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BasicLocation4() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="basic/location">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="basic/location">
          <path
            d={svgPaths.p34b14280}
            fill="var(--fill-0, #79819A)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Location3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0"
      data-name="Location"
    >
      <BasicLocation4 />
      <div className="flex flex-col font-['GT_Flexa:Lite',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#79819a] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">London, UK</p>
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['GT_Flexa:Lite',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#47516b] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Aug 2016 - Mar 2018
        </p>
      </div>
      <Frame104 />
      <Location3 />
    </div>
  );
}

function Content6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-between p-0 relative self-stretch shrink-0"
      data-name="Content"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['GT_Flexa:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2e2e48] text-[24px] text-left text-nowrap"
        href="https://www.infactcoop.com/"
      >
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block cursor-pointer leading-[32px] whitespace-pre">
          Infact Co-Op
        </p>
      </a>
      <Frame105 />
    </div>
  );
}

function CompanyAndRole3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Company and role"
    >
      <LogoIcon3 />
      <Content6 />
    </div>
  );
}

function Experience3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative rounded shrink-0 w-[367px]"
      data-name="Experience"
    >
      <CompanyAndRole3 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left">
      <div className="flex flex-col font-['GT_Flexa:Bold',_sans-serif] justify-center relative shrink-0 text-[#79819a] text-[24px] text-nowrap">
        <p className="block leading-[32px] whitespace-pre">
          Product Designer and Co-founder
        </p>
      </div>
      <div
        className="css-1psc9z flex flex-col font-['GT_Flexa:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[#47516b] text-[20px]"
        style={{ width: "min-content" }}
      >
        <ul className="css-ed5n1g list-disc">
          <li className="mb-2 ms-[30px]">
            <span className="leading-[24px]">
              Co-founded and led InFact Digital Co-op, specialising in design
              thinking workshops for health tech, charities, and NGOs,
              emphasising tech for good.
            </span>
          </li>
          <li className="mb-2 ms-[30px]">
            <span className="leading-[24px]">
              Led design workshops and MVP ideation, branding, and marketing for
              projects with NHS England, Blue Cross, and the Law Centre Network.
            </span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[24px]">
              Championed co-operative-driven design and development, focusing on
              leveraging technology for social good and worker autonomy.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-start justify-start min-h-px min-w-px pb-8 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Content"
    >
      <Experience3 />
      <Frame106 />
    </div>
  );
}

function Component4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-0 relative shrink-0 w-full"
      data-name="4"
    >
      <StepIconWrap4 />
      <Content7 />
    </div>
  );
}

function MiscDot04L5() {
  return (
    <div className="relative shrink-0 size-4" data-name="misc/dot_04_l">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="misc/dot_04_l">
          <path
            d={svgPaths.p2633caf0}
            fill="var(--fill-0, #2E2E48)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function StepIconBase5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center overflow-clip p-[2px] relative rounded-[100px] shrink-0"
      data-name="_Step icon base"
    >
      <MiscDot04L5 />
    </div>
  );
}

function Divider8() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px overflow-clip shrink-0 w-[0.5px]"
      data-name="Divider"
    />
  );
}

function StepIconWrap5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative self-stretch shrink-0"
      data-name="Step icon wrap"
    >
      <StepIconBase5 />
      <Divider8 />
    </div>
  );
}

function LogoIcon4() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl shrink-0 size-[60px]"
      data-name="Logo icon"
    >
      <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-0.5 py-px relative size-[60px]">
        <div
          className="bg-center bg-cover bg-no-repeat rounded shrink-0 size-[60px]"
          data-name="image 12"
          style={{ backgroundImage: `url('${imgImage12}')` }}
        />
      </div>
      <div className="absolute border border-[#e2e6ee] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}

function Frame107() {
  return (
    <div className="relative shrink-0 size-1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4 4"
      >
        <g id="Frame 92">
          <path d={svgPaths.pd67f380} fill="var(--fill-0, #D9DFE8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BasicLocation5() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="basic/location">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="basic/location">
          <path
            d={svgPaths.p34b14280}
            fill="var(--fill-0, #79819A)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Location4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0"
      data-name="Location"
    >
      <BasicLocation5 />
      <div className="flex flex-col font-['GT_Flexa:Lite',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#79819a] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">London, UK</p>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['GT_Flexa:Lite',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#47516b] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Jan 2014 - Jun 2016
        </p>
      </div>
      <Frame107 />
      <Location4 />
    </div>
  );
}

function Content8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-between p-0 relative self-stretch shrink-0"
      data-name="Content"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['GT_Flexa:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2e2e48] text-[24px] text-left text-nowrap"
        href="https://www.foundersandcoders.com/"
      >
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block cursor-pointer leading-[32px] whitespace-pre">{`Founders & Coders`}</p>
      </a>
      <Frame108 />
    </div>
  );
}

function CompanyAndRole4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Company and role"
    >
      <LogoIcon4 />
      <Content8 />
    </div>
  );
}

function Experience4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative rounded shrink-0 w-[367px]"
      data-name="Experience"
    >
      <CompanyAndRole4 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left">
      <div className="flex flex-col font-['GT_Flexa:Bold',_sans-serif] justify-center relative shrink-0 text-[#79819a] text-[24px] text-nowrap">
        <p className="block leading-[32px] whitespace-pre">{`Designer, Design Thinking workshop facilitator & tutor`}</p>
      </div>
      <div
        className="css-1psc9z flex flex-col font-['GT_Flexa:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[#47516b] text-[20px]"
        style={{ width: "min-content" }}
      >
        <ul className="css-ed5n1g list-disc">
          <li className="mb-2 ms-[30px]">
            <span className="leading-[24px]">{`Developed the complete Founders & Coders brand, from logo to website, ensuring a cohesive identity.`}</span>
          </li>
          <li className="mb-2 ms-[30px]">
            <span className="leading-[24px]">
              Led design thinking sessions and sprints for internal teams and
              external clients, fostering innovation.
            </span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[24px]">
              Instructed full stack program students in design fundamentals,
              enhancing their skill sets.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-start justify-start min-h-px min-w-px pb-8 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Content"
    >
      <Experience4 />
      <Frame109 />
    </div>
  );
}

function Component5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-0 relative shrink-0 w-full"
      data-name="5"
    >
      <StepIconWrap5 />
      <Content9 />
    </div>
  );
}

function ExperienceList() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Experience_list"
    >
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="container"
    >
      <div className="flex flex-col font-['GT_Flexa:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#acb1c3] text-[32px] text-center text-nowrap">
        <p className="block leading-[40px] whitespace-pre">Experience</p>
      </div>
      <ExperienceList />
    </div>
  );
}

function ExperienceContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="experience_container"
    >
      <StepIconContainer />
      <Container1 />
    </div>
  );
}

function MiscDot04L6() {
  return (
    <div className="absolute inset-[18.75%]" data-name="misc/dot_04_l">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g id="misc/dot_04_l">
          <path
            d={svgPaths.p5332d00}
            fill="url(#paint0_linear_1_517)"
            id="Icon"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_517"
            x1="7.29199"
            x2="17.7087"
            y1="7.2915"
            y2="7.2915"
          >
            <stop stopColor="#A478E8" />
            <stop offset="1" stopColor="#516CF7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function StepIconBase6() {
  return (
    <div
      className="bg-[#ffffff] overflow-clip relative rounded-[100px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05),0px_6px_24px_0px_rgba(0,0,0,0.04)] shrink-0 size-10"
      data-name="_Step icon base"
    >
      <div className="absolute bg-[#ffffff] inset-0" data-name="Background" />
      <MiscDot04L6 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Divider9() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-[0.5px]"
      data-name="Divider"
    >
      <div className="absolute border border-[#e2e6ee] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function StepIconWrap6() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-center justify-start p-0 relative shrink-0"
      data-name="Step icon wrap"
    >
      <StepIconBase6 />
      <Divider9 />
    </div>
  );
}

function StepIconContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-center p-0 relative self-stretch shrink-0 w-[87px]"
      data-name="_Step icon container"
    >
      <StepIconWrap6 />
    </div>
  );
}

function Text10() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px items-center justify-center leading-[0] not-italic p-0 relative shrink-0 text-[16px] text-nowrap"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Bold',_sans-serif] relative shrink-0 text-[#47516b] text-left">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Figma</p>
      </div>
      <div className="font-['GT_Flexa:Light',_sans-serif] relative shrink-0 text-[#79819a] text-center">
        <p className="block leading-[16px] text-nowrap whitespace-pre">{` UI Design, prototyping `}</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div
      className="basis-0 bg-[#f7f9fc] grow h-40 min-h-px min-w-px relative rounded-tl-[4px] shrink-0"
      data-name="Card"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 h-40 items-center justify-center p-[8px] relative w-full">
          <div
            className="bg-center bg-cover bg-no-repeat rounded shrink-0 size-[60px]"
            data-name="Logo"
            style={{ backgroundImage: `url('${imgLogo}')` }}
          />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px items-center justify-center leading-[0] not-italic p-0 relative shrink-0 text-[16px] text-left text-nowrap"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Bold',_sans-serif] relative shrink-0 text-[#47516b]">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          Sketch
        </p>
      </div>
      <div className="font-['GT_Flexa:Light',_sans-serif] relative shrink-0 text-[#79819a]">
        <p className="block leading-[16px] text-nowrap whitespace-pre">{` UI Design, prototyping `}</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div
      className="basis-0 bg-[#f7f9fc] grow h-40 min-h-px min-w-px relative rounded-tr-[4px] shrink-0"
      data-name="Card"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 h-40 items-center justify-center p-[8px] relative w-full">
          <div
            className="bg-center bg-cover bg-no-repeat h-[54.212px] shrink-0 w-[60px]"
            data-name="image 15"
            style={{ backgroundImage: `url('${imgImage15}')` }}
          />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px items-center justify-center leading-[0] not-italic p-0 relative shrink-0 text-[16px] text-left text-nowrap"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Bold',_sans-serif] relative shrink-0 text-[#47516b]">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          Adobe XD
        </p>
      </div>
      <div className="font-['GT_Flexa:Light',_sans-serif] relative shrink-0 text-[#79819a]">
        <p className="block leading-[16px] text-nowrap whitespace-pre">{`prototyping `}</p>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div
      className="basis-0 bg-[#f7f9fc] grow h-40 min-h-px min-w-px relative rounded-bl-[4px] shrink-0"
      data-name="Card"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 h-40 items-center justify-center p-[8px] relative w-full">
          <div
            className="bg-center bg-cover bg-no-repeat h-[58.486px] rounded shrink-0 w-[60px]"
            data-name="image 16"
            style={{ backgroundImage: `url('${imgImage16}')` }}
          />
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px items-center justify-center leading-[0] not-italic p-0 relative shrink-0 text-[16px] text-left text-nowrap"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Bold',_sans-serif] relative shrink-0 text-[#47516b]">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          Invision
        </p>
      </div>
      <div className="font-['GT_Flexa:Light',_sans-serif] relative shrink-0 text-[#79819a]">
        <p className="block leading-[16px] text-nowrap whitespace-pre">{`prototyping `}</p>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div
      className="basis-0 bg-[#f7f9fc] grow h-40 min-h-px min-w-px relative rounded-bl-[4px] shrink-0"
      data-name="Card"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 h-40 items-center justify-center p-[8px] relative w-full">
          <div
            className="bg-center bg-cover bg-no-repeat rounded shrink-0 size-[60px]"
            data-name="image 18"
            style={{ backgroundImage: `url('${imgImage18}')` }}
          />
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Stack() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Stack"
    >
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Text14() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px items-center justify-center leading-[0] not-italic p-0 relative shrink-0 text-[16px] text-left text-nowrap"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Bold',_sans-serif] relative shrink-0 text-[#47516b]">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Maze</p>
      </div>
      <div className="font-['GT_Flexa:Light',_sans-serif] relative shrink-0 text-[#79819a]">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          User Testing
        </p>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div
      className="basis-0 bg-[#f7f9fc] grow h-40 min-h-px min-w-px relative shrink-0"
      data-name="Card"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 h-40 items-center justify-center p-[8px] relative w-full">
          <div
            className="bg-center bg-cover bg-no-repeat rounded shrink-0 size-[60px]"
            data-name="image 17"
            style={{ backgroundImage: `url('${imgImage17}')` }}
          />
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px items-center justify-center leading-[0] not-italic p-0 relative shrink-0 text-[16px] text-left text-nowrap"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Bold',_sans-serif] relative shrink-0 text-[#47516b]">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          ChatGPT
        </p>
      </div>
      <div className="font-['GT_Flexa:Light',_sans-serif] relative shrink-0 text-[#79819a]">
        <p className="block leading-[16px] text-nowrap whitespace-pre">{`AI Driven Copy-write & Design`}</p>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div
      className="basis-0 bg-[#f7f9fc] grow h-40 min-h-px min-w-px relative shrink-0"
      data-name="Card"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 h-40 items-center justify-center p-[8px] relative w-full">
          <div
            className="bg-center bg-cover bg-no-repeat shrink-0 size-[60px]"
            data-name="image 17"
            style={{ backgroundImage: `url('${imgImage19}')` }}
          />
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative rounded shrink-0 size-[60px]">
      <div
        className="bg-center bg-cover bg-no-repeat h-[33.333px] shrink-0 w-10"
        data-name="image 24"
        style={{ backgroundImage: `url('${imgImage24}')` }}
      />
    </div>
  );
}

function Text16() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px items-center justify-center leading-[0] not-italic p-0 relative shrink-0 text-[16px] text-left text-nowrap"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Bold',_sans-serif] relative shrink-0 text-[#47516b]">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          Midjourney
        </p>
      </div>
      <div className="font-['GT_Flexa:Light',_sans-serif] relative shrink-0 text-[#79819a]">
        <p className="block leading-[16px] text-nowrap whitespace-pre">{`AI Image generation `}</p>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div
      className="basis-0 bg-[#f7f9fc] grow h-40 min-h-px min-w-px relative shrink-0"
      data-name="Card"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 h-40 items-center justify-center p-[8px] relative w-full">
          <Frame98 />
          <Text16 />
        </div>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px items-center justify-center leading-[0] not-italic p-0 relative shrink-0 text-[16px] text-left text-nowrap"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Bold',_sans-serif] relative shrink-0 text-[#47516b]">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          Notion
        </p>
      </div>
      <div className="font-['GT_Flexa:Light',_sans-serif] relative shrink-0 text-[#79819a]">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          Project managment
        </p>
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div
      className="basis-0 bg-[#f7f9fc] grow h-40 min-h-px min-w-px relative rounded-br-[4px] shrink-0"
      data-name="Card"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 h-40 items-center justify-center p-[8px] relative w-full">
          <div
            className="bg-center bg-cover bg-no-repeat shrink-0 size-[60px]"
            data-name="image 20"
            style={{ backgroundImage: `url('${imgImage20}')` }}
          />
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function Stack1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Stack"
    >
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
    </div>
  );
}

function Content10() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Stack />
      <Stack1 />
    </div>
  );
}

function ToolsSection() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Tools section"
    >
      <Content10 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px pb-8 pt-0 px-0 relative shrink-0"
      data-name="container"
    >
      <div className="flex flex-col font-['GT_Flexa:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#acb1c3] text-[32px] text-center text-nowrap">
        <p className="block leading-[40px] whitespace-pre">Tools</p>
      </div>
      <ToolsSection />
    </div>
  );
}

function ToolsContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="tools_container"
    >
      <StepIconContainer1 />
      <Container2 />
    </div>
  );
}

function MiscDot04L7() {
  return (
    <div className="absolute inset-[18.75%]" data-name="misc/dot_04_l">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g id="misc/dot_04_l">
          <path
            d={svgPaths.p5332d00}
            fill="url(#paint0_linear_1_517)"
            id="Icon"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_517"
            x1="7.29199"
            x2="17.7087"
            y1="7.2915"
            y2="7.2915"
          >
            <stop stopColor="#A478E8" />
            <stop offset="1" stopColor="#516CF7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function StepIconBase7() {
  return (
    <div
      className="bg-[#ffffff] overflow-clip relative rounded-[100px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05),0px_6px_24px_0px_rgba(0,0,0,0.04)] shrink-0 size-10"
      data-name="_Step icon base"
    >
      <div className="absolute bg-[#ffffff] inset-0" data-name="Background" />
      <MiscDot04L7 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Divider10() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px overflow-clip shrink-0 w-[0.5px]"
      data-name="Divider"
    />
  );
}

function StepIconWrap7() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-center justify-start p-0 relative shrink-0"
      data-name="Step icon wrap"
    >
      <StepIconBase7 />
      <Divider10 />
    </div>
  );
}

function StepIconContainer2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-center p-0 relative self-stretch shrink-0 w-[87px]"
      data-name="_Step icon container"
    >
      <StepIconWrap7 />
    </div>
  );
}

function Text18() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Lite',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#79819a] text-[14px] text-left w-full">
        <p className="block mb-0">Advanced design systems course</p>
        <p className="block font-['GT_Flexa:Light',_sans-serif]">May 2023</p>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="font-['GT_Flexa:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#47516b] text-[16px] text-left w-full">
        <p className="block leading-[24px]">muse case labs GmbH</p>
      </div>
      <Text18 />
    </div>
  );
}

function Header() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[60.268px] rounded shrink-0 w-[60px]"
        data-name="image 9"
        style={{ backgroundImage: `url('${imgImage9}')` }}
      />
      <Frame99 />
    </div>
  );
}

function Card8() {
  return (
    <div
      className="basis-0 bg-[#f7f9fc] grow h-full min-h-px min-w-px relative rounded-bl-[4px] rounded-tl-[4px] shrink-0"
      data-name="Card"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center px-3 py-2 relative size-full">
          <Header />
        </div>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Lite',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#79819a] text-[14px] text-left w-full">
        <p className="block mb-0">Advanced UX course</p>
        <p className="block font-['GT_Flexa:Light',_sans-serif]">April 2020</p>
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="font-['GT_Flexa:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#47516b] text-[16px] text-left w-full">
        <p className="block leading-[24px]">UX Vision</p>
      </div>
      <Text19 />
    </div>
  );
}

function Header1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <div
        className="bg-center bg-cover bg-no-repeat relative rounded shrink-0 size-[60px]"
        data-name="image 10"
        style={{ backgroundImage: `url('${imgImage10}')` }}
      >
        <div className="absolute border-[#acb1c3] border-[0.2px] border-solid inset-0 pointer-events-none rounded" />
      </div>
      <Frame110 />
    </div>
  );
}

function Card9() {
  return (
    <div
      className="basis-0 bg-[#f7f9fc] grow h-full min-h-px min-w-px relative rounded-bl-[4px] rounded-tl-[4px] shrink-0"
      data-name="Card"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center px-3 py-2 relative size-full">
          <Header1 />
        </div>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Lite',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#79819a] text-[14px] text-left w-full">
        <p className="block mb-0">UX/UI Designer path</p>
        <p className="block font-['GT_Flexa:Light',_sans-serif]">2016-2017</p>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="font-['GT_Flexa:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#47516b] text-[16px] text-left w-full">
        <p className="block leading-[24px]">Career Foundry</p>
      </div>
      <Text20 />
    </div>
  );
}

function Header2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <div
        className="bg-center bg-cover bg-no-repeat rounded shrink-0 size-[60px]"
        data-name="image 11"
        style={{ backgroundImage: `url('${imgImage11}')` }}
      />
      <Frame111 />
    </div>
  );
}

function Card10() {
  return (
    <div
      className="basis-0 bg-[#f7f9fc] grow h-full min-h-px min-w-px relative rounded-bl-[4px] rounded-tl-[4px] shrink-0"
      data-name="Card"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center px-3 py-2 relative size-full">
          <Header2 />
        </div>
      </div>
    </div>
  );
}

function Stack2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Stack"
    >
      <Card8 />
      <Card9 />
      <Card10 />
    </div>
  );
}

function Content11() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 h-[120px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Stack2 />
    </div>
  );
}

function Text21() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Lite',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#79819a] text-[14px] text-left w-full">
        <p className="block mb-0">Full Stack Web Development</p>
        <p className="block">2015</p>
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="font-['GT_Flexa:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#47516b] text-[16px] text-left w-full">
        <p className="block leading-[24px]">{`Founders & Coders`}</p>
      </div>
      <Text21 />
    </div>
  );
}

function Header3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <div
        className="bg-center bg-cover bg-no-repeat relative rounded shrink-0 size-[60px]"
        data-name="image 12"
        style={{ backgroundImage: `url('${imgImage12}')` }}
      >
        <div className="absolute border-[#acb1c3] border-[0.2px] border-solid inset-0 pointer-events-none rounded" />
      </div>
      <Frame112 />
    </div>
  );
}

function Card11() {
  return (
    <div
      className="basis-0 bg-[#f7f9fc] grow h-full min-h-px min-w-px relative rounded-bl-[4px] rounded-tl-[4px] shrink-0"
      data-name="Card"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center px-3 py-2 relative size-full">
          <Header3 />
        </div>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Lite',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#79819a] text-[14px] text-left w-full">
        <p className="block mb-0">MA Fine Arts</p>
        <p className="block">2011-2013</p>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="font-['GT_Flexa:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#47516b] text-[16px] text-left w-full">
        <p className="block leading-[24px]">Royal College Of Art, London</p>
      </div>
      <Text22 />
    </div>
  );
}

function Header4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <div
        className="bg-center bg-cover bg-no-repeat rounded shrink-0 size-[60px]"
        data-name="image 13"
        style={{ backgroundImage: `url('${imgImage13}')` }}
      />
      <Frame113 />
    </div>
  );
}

function Card12() {
  return (
    <div
      className="basis-0 bg-[#f7f9fc] grow h-full min-h-px min-w-px relative rounded-bl-[4px] rounded-tl-[4px] shrink-0"
      data-name="Card"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center px-3 py-2 relative size-full">
          <Header4 />
        </div>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="font-['GT_Flexa:Lite',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#79819a] text-[14px] text-left w-full">
        <p className="block mb-0">BA Fine Arts</p>
        <p className="block font-['GT_Flexa:Light',_sans-serif]">2002-2007</p>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="font-['GT_Flexa:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#47516b] text-[16px] text-left w-full">
        <p className="block leading-[24px]">
          Nuova Accademia Di Belle Arti, Milan
        </p>
      </div>
      <Text23 />
    </div>
  );
}

function Header5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <div
        className="[background-size:217.79%_100%] bg-[49.92%_0%] bg-no-repeat h-[65.336px] rounded shrink-0 w-[60px]"
        data-name="image 14"
        style={{ backgroundImage: `url('${imgImage14}')` }}
      />
      <Frame114 />
    </div>
  );
}

function Card13() {
  return (
    <div
      className="basis-0 bg-[#f7f9fc] grow h-full min-h-px min-w-px relative rounded-bl-[4px] rounded-tl-[4px] shrink-0"
      data-name="Card"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center px-3 py-2 relative size-full">
          <Header5 />
        </div>
      </div>
    </div>
  );
}

function Stack3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Stack"
    >
      <Card11 />
      <Card12 />
      <Card13 />
    </div>
  );
}

function Content12() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 h-[120px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Stack3 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <Content11 />
      <Content12 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="container"
    >
      <div className="flex flex-col font-['GT_Flexa:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#acb1c3] text-[32px] text-center text-nowrap">
        <p className="block leading-[40px] whitespace-pre">Education</p>
      </div>
      <Frame100 />
    </div>
  );
}

function ToolsContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="tools_container"
    >
      <StepIconContainer2 />
      <Container3 />
    </div>
  );
}

function ContentContainer1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content_container"
    >
      <ExperienceContainer />
      <ToolsContainer />
      <ToolsContainer1 />
    </div>
  );
}

function MainContainer() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-[2444px] items-center justify-start pl-0 pr-[50px] py-0 top-0 w-[1267px]"
      data-name="main_container"
      style={{ left: "calc(25% + 29px)" }}
    >
      <ContentContainer1 />
    </div>
  );
}

export default function NogaEnbarCv() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Noga Enbar_CV">
      <Aside />
      <MainContainer />
    </div>
  );
}