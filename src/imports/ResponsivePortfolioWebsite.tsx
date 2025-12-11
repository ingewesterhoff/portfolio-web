import svgPaths from "./svg-unxwga02e2";
import imgImageWithFallback from "figma:asset/ca78a149b98c2df90822c8fce221a8e193ac0da8.png";
import imgImageWithFallback1 from "figma:asset/a5053c6af550eadc15a69d716078cceb31eb9405.png";

function Container() {
  return (
    <div
      className="absolute bg-[rgba(196,169,255,0.05)] blur-3xl filter left-[175px] rounded-[3.93113e+07px] size-[179.982px] top-[119.99px]"
      data-name="Container"
    />
  );
}

function Icon() {
  return (
    <div
      className="absolute left-0 size-[18.745px] top-[1.12px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 19"
      >
        <g id="Icon">
          <path
            d={svgPaths.p2bd567c0}
            id="Vector"
            stroke="var(--stroke-0, #C4A9FF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.56209"
          />
        </g>
      </svg>
    </div>
  );
}

function MadeInChina() {
  return (
    <div
      className="absolute h-[20.997px] left-[26.23px] top-0 w-[101.396px]"
      data-name="MadeInChina"
    >
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#c4a9ff] text-[14px] text-nowrap top-[-0.83px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Back to Projects
      </p>
    </div>
  );
}

function Link() {
  return (
    <div
      className="absolute h-[20.997px] left-[22.5px] top-[164.99px] w-[127.628px]"
      data-name="Link"
    >
      <Icon />
      <MadeInChina />
    </div>
  );
}

function Heading() {
  return (
    <div
      className="absolute h-[33.591px] left-0 shadow-[0px_0px_50px_0px_rgba(196,169,255,0.4)] top-0 w-[347.48px]"
      data-name="Heading 1"
    >
      <p className="absolute font-['Big_Shoulders_Display:Bold',sans-serif] font-bold leading-[33.6px] left-0 text-[#c4a9ff] text-[32px] text-nowrap top-[-1.51px] tracking-[2px] uppercase whitespace-pre">
        MADE IN CHINA
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="absolute bg-gradient-to-b from-[#c4a9ff] h-[3.734px] left-0 shadow-[0px_0px_10px_0px_rgba(196,169,255,0.5)] to-[rgba(0,0,0,0)] top-[52.34px] w-[52.483px]"
      data-name="Container"
    />
  );
}

function Paragraph() {
  return (
    <div
      className="absolute h-[80.948px] left-0 top-[78.57px] w-[347.48px]"
      data-name="Paragraph"
    >
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#ede6f7] text-[15px] top-[-0.31px] w-[339px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        An interactive exhibit exploring the global influence of
        Chinese ceramics through visual comparison of 14 object
        pairs.
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="absolute h-[159.516px] left-[22.5px] top-[235.92px] w-[347.48px]"
      data-name="Container"
    >
      <Heading />
      <Container1 />
      <Paragraph />
    </div>
  );
}

function ImageErrorLoadingImage() {
  return (
    <div
      className="absolute left-[129.49px] size-[87.996px] top-[53.58px]"
      data-name="Image (Error loading image)"
    />
  );
}

function ImageWithFallback() {
  return (
    <div
      className="absolute bg-gray-100 h-[195.176px] left-0 rounded-[20px] top-0 w-[346.986px]"
      data-name="ImageWithFallback"
    >
      <ImageErrorLoadingImage />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div
      className="absolute h-[195.176px] left-[346.99px] rounded-[20px] top-0 w-[346.986px]"
      data-name="ImageWithFallback"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full"
        src={imgImageWithFallback}
      />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div
      className="absolute h-[195.176px] left-[693.97px] rounded-[20px] top-0 w-[346.986px]"
      data-name="ImageWithFallback"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full"
        src={imgImageWithFallback1}
      />
    </div>
  );
}

function ImageErrorLoadingImage1() {
  return (
    <div
      className="absolute left-[129.49px] size-[87.996px] top-[53.58px]"
      data-name="Image (Error loading image)"
    />
  );
}

function ImageWithFallback3() {
  return (
    <div
      className="absolute bg-gray-100 h-[195.176px] left-[1040.96px] rounded-[20px] top-0 w-[346.986px]"
      data-name="ImageWithFallback"
    >
      <ImageErrorLoadingImage1 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div
      className="absolute h-[195.176px] left-[1387.94px] rounded-[20px] top-0 w-[346.986px]"
      data-name="ImageWithFallback"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full"
        src={imgImageWithFallback}
      />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="h-[201.254px] relative shrink-0 w-full"
      data-name="Container"
    >
      <ImageWithFallback />
      <ImageWithFallback1 />
      <ImageWithFallback2 />
      <ImageWithFallback3 />
      <ImageWithFallback4 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-[201.254px] items-start left-0 overflow-clip py-0 top-0 w-[347.48px]"
      data-name="Container"
    >
      <Container3 />
    </div>
  );
}

function Button() {
  return (
    <div
      className="absolute left-0 size-[15.999px] top-0"
      data-name="Button"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0px] left-[8px] not-italic text-[0px] text-[rgba(0,0,0,0)] text-center top-[8px] translate-x-[-50%] w-0">
        1
      </p>
    </div>
  );
}

function ListItem() {
  return (
    <div
      className="absolute left-[141.76px] size-[15.999px] top-[8.4px]"
      data-name="List Item"
    >
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="absolute left-0 size-[15.999px] top-0"
      data-name="Button"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0px] left-[8px] not-italic text-[0px] text-[rgba(0,0,0,0)] text-center top-[8px] translate-x-[-50%] w-0">
        2
      </p>
    </div>
  );
}

function ListItem1() {
  return (
    <div
      className="absolute left-[165.74px] size-[15.999px] top-[8.4px]"
      data-name="List Item"
    >
      <Button1 />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="absolute left-0 size-[15.999px] top-0"
      data-name="Button"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0px] left-[8px] not-italic text-[0px] text-[rgba(0,0,0,0)] text-center top-[8px] translate-x-[-50%] w-0">
        3
      </p>
    </div>
  );
}

function ListItem2() {
  return (
    <div
      className="absolute left-[189.72px] size-[15.999px] top-[8.4px]"
      data-name="List Item"
    >
      <Button2 />
    </div>
  );
}

function List() {
  return (
    <div
      className="absolute h-[24.402px] left-0 top-[208.85px] w-[347.48px]"
      data-name="List"
    >
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="relative shrink-0 size-[19.99px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d={svgPaths.p14310c0}
            id="Vector"
            stroke="var(--stroke-0, #C4A9FF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66582"
          />
        </g>
      </svg>
    </div>
  );
}

function PrevArrow() {
  return (
    <div
      className="absolute bg-[rgba(196,169,255,0.2)] content-stretch flex items-center justify-center left-[11.99px] rounded-[15.999px] size-[31.998px] top-[84.63px]"
      data-name="PrevArrow4"
    >
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div
      className="relative shrink-0 size-[19.99px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d={svgPaths.p3663a680}
            id="Vector"
            stroke="var(--stroke-0, #C4A9FF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66582"
          />
        </g>
      </svg>
    </div>
  );
}

function NextArrow() {
  return (
    <div
      className="absolute bg-[rgba(196,169,255,0.2)] content-stretch flex items-center justify-center left-[303.49px] rounded-[15.999px] size-[31.998px] top-[84.63px]"
      data-name="NextArrow4"
    >
      <Icon2 />
    </div>
  );
}

function N() {
  return (
    <div
      className="absolute h-[201.254px] left-[22.5px] top-[440.44px] w-[347.48px]"
      data-name="n21"
    >
      <Container4 />
      <List />
      <PrevArrow />
      <NextArrow />
    </div>
  );
}

function MadeInChina1() {
  return (
    <div
      className="h-[16.493px] relative shrink-0 w-full"
      data-name="MadeInChina"
    >
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[16.5px] left-0 text-[#c4a9ff] text-[11px] text-nowrap top-[0.17px] tracking-[1.1px] uppercase whitespace-pre">
        Year
      </p>
    </div>
  );
}

function MadeInChina2() {
  return (
    <div
      className="h-[20.997px] relative shrink-0 w-full"
      data-name="MadeInChina"
    >
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#ede6f7] text-[14px] text-nowrap top-[-0.83px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        2025
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="absolute bg-[rgba(38,30,53,0.6)] box-border content-stretch flex flex-col gap-[7.487px] h-[77.305px] items-start left-0 pb-[1.172px] pt-[16.164px] px-[16.164px] rounded-[18px] top-0 w-[166.235px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#312545] border-[1.172px] border-solid inset-0 pointer-events-none rounded-[18px]"
      />
      <MadeInChina1 />
      <MadeInChina2 />
    </div>
  );
}

function MadeInChina3() {
  return (
    <div
      className="h-[16.493px] relative shrink-0 w-full"
      data-name="MadeInChina"
    >
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[16.5px] left-0 text-[#c4a9ff] text-[11px] text-nowrap top-[0.17px] tracking-[1.1px] uppercase whitespace-pre">
        Tools
      </p>
    </div>
  );
}

function MadeInChina4() {
  return (
    <div
      className="h-[20.997px] relative shrink-0 w-full"
      data-name="MadeInChina"
    >
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#ede6f7] text-[14px] text-nowrap top-[-0.83px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Figma, BrightAuthor
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="absolute bg-[rgba(38,30,53,0.6)] box-border content-stretch flex flex-col gap-[7.487px] h-[77.305px] items-start left-[181.23px] pb-[1.172px] pt-[16.164px] px-[16.164px] rounded-[18px] top-0 w-[166.253px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#312545] border-[1.172px] border-solid inset-0 pointer-events-none rounded-[18px]"
      />
      <MadeInChina3 />
      <MadeInChina4 />
    </div>
  );
}

function MadeInChina5() {
  return (
    <div
      className="h-[16.493px] relative shrink-0 w-full"
      data-name="MadeInChina"
    >
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[16.5px] left-0 text-[#c4a9ff] text-[11px] text-nowrap top-[0.17px] tracking-[1.1px] uppercase whitespace-pre">
        Skills
      </p>
    </div>
  );
}

function MadeInChina6() {
  return (
    <div
      className="h-[20.997px] relative shrink-0 w-full"
      data-name="MadeInChina"
    >
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#ede6f7] text-[14px] text-nowrap top-[-0.83px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        UX/UI Design
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="absolute bg-[rgba(38,30,53,0.6)] box-border content-stretch flex flex-col gap-[7.487px] h-[77.305px] items-start left-0 pb-[1.172px] pt-[16.164px] px-[16.164px] rounded-[18px] top-[92.3px] w-[166.235px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#312545] border-[1.172px] border-solid inset-0 pointer-events-none rounded-[18px]"
      />
      <MadeInChina5 />
      <MadeInChina6 />
    </div>
  );
}

function MadeInChina7() {
  return (
    <div
      className="h-[16.493px] relative shrink-0 w-full"
      data-name="MadeInChina"
    >
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[16.5px] left-0 text-[#c4a9ff] text-[11px] text-nowrap top-[0.17px] tracking-[1.1px] uppercase whitespace-pre">
        Team
      </p>
    </div>
  );
}

function MadeInChina8() {
  return (
    <div
      className="h-[20.997px] relative shrink-0 w-full"
      data-name="MadeInChina"
    >
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#ede6f7] text-[14px] text-nowrap top-[-0.83px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        MCW Agency
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="absolute bg-[rgba(38,30,53,0.6)] box-border content-stretch flex flex-col gap-[7.487px] h-[77.305px] items-start left-[181.23px] pb-[1.172px] pt-[16.164px] px-[16.164px] rounded-[18px] top-[92.3px] w-[166.253px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#312545] border-[1.172px] border-solid inset-0 pointer-events-none rounded-[18px]"
      />
      <MadeInChina7 />
      <MadeInChina8 />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="absolute h-[169.603px] left-[22.5px] top-[701.68px] w-[347.48px]"
      data-name="Container"
    >
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Heading1() {
  return (
    <div
      className="h-[30.809px] relative shadow-[0px_0px_40px_0px_rgba(196,169,255,0.3)] shrink-0 w-[143.261px]"
      data-name="Heading 2"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30.809px] relative w-[143.261px]">
        <p className="absolute font-['Big_Shoulders_Display:Bold',sans-serif] font-bold leading-[30.8px] left-0 text-[#c4a9ff] text-[28px] text-nowrap top-[-0.34px] tracking-[2px] uppercase whitespace-pre">
          THE PROBLEM
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="basis-0 bg-gradient-to-b from-[#c4a9ff] grow h-[1.995px] min-h-px min-w-px relative shadow-[0px_0px_10px_0px_rgba(196,169,255,0.3)] shrink-0 to-[rgba(0,0,0,0)]"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[1.995px] w-full" />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="h-[30.809px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[11.24px] h-[30.809px] items-center px-[7.487px] py-0 relative w-full">
          <Heading1 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div
      className="h-[242.844px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#ede6f7] text-[15px] top-[-0.31px] w-[340px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        The Made in China exhibition needed to communicate the
        vast global influence of Chinese ceramic art and
        craftsmanship. Visitors needed an engaging way to
        understand not just what Chinese ceramics look like, but
        how they inspired and influenced ceramic traditions
        across different cultures. The challenge was making
        these complex cultural connections clear and accessible
        without overwhelming visitors with text.
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[37.49px] h-[311px] items-start left-[22px] top-[931.06px] w-[348px]"
      data-name="Container"
    >
      <Container11 />
      <Paragraph1 />
    </div>
  );
}

function Heading2() {
  return (
    <div
      className="h-[23.999px] relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#c4a9ff] text-[20px] text-nowrap top-[-0.17px] tracking-[2px] uppercase whitespace-pre">
        Current Situation
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div
      className="h-[161.896px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#ede6f7] text-[15px] top-[-0.31px] w-[344px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Museum visitors view ceramic objects in vitrines with
        lengthy text panels. The connections between Chinese
        originals and their global influences are difficult to
        see, requiring visitors to read extensively and mentally
        compare objects that may be far apart in the exhibition
        space.
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[18.745px] h-[204.64px] items-start left-0 top-[60px] w-[347.48px]"
      data-name="Container"
    >
      <Heading2 />
      <Paragraph2 />
    </div>
  );
}

function Heading3() {
  return (
    <div
      className="h-[23.999px] relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#c4a9ff] text-[20px] text-nowrap top-[-0.17px] tracking-[2px] uppercase whitespace-pre">
        Desired Situation
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div
      className="h-[188.879px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#ede6f7] text-[15px] top-[-0.31px] w-[342px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{`Visitors use an interactive installation to directly compare Chinese ceramics with their cultural descendants. They can zoom into details, see side-by-side comparisons, and quickly understand key characteristics—what's Chinese, what's unique to each culture—through visual exploration rather than text.`}</p>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[18.745px] h-[231.623px] items-start left-0 top-[302.13px] w-[347.48px]"
      data-name="Container"
    >
      <Heading3 />
      <Paragraph3 />
    </div>
  );
}

function Container15() {
  return (
    <div
      className="absolute h-[473.753px] left-[23px] top-[1219.06px] w-[347.48px]"
      data-name="Container"
    >
      <Container13 />
      <Container14 />
    </div>
  );
}

function Heading4() {
  return (
    <div
      className="h-[30.809px] relative shadow-[0px_0px_40px_0px_rgba(196,169,255,0.3)] shrink-0 w-[134.145px]"
      data-name="Heading 2"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30.809px] relative w-[134.145px]">
        <p className="absolute font-['Big_Shoulders_Display:Bold',sans-serif] font-bold leading-[30.8px] left-0 text-[#c4a9ff] text-[28px] text-nowrap top-[-0.34px] tracking-[2px] uppercase whitespace-pre">
          MY PROCESS
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="basis-0 bg-gradient-to-b from-[#c4a9ff] grow h-[1.995px] min-h-px min-w-px relative shadow-[0px_0px_10px_0px_rgba(196,169,255,0.3)] shrink-0 to-[rgba(0,0,0,0)]"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[1.995px] w-full" />
    </div>
  );
}

function Container17() {
  return (
    <div
      className="h-[30.809px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[11.24px] h-[30.809px] items-center px-[7.487px] py-0 relative w-full">
          <Heading4 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div
      className="absolute h-[23.999px] left-0 top-0 w-[347.48px]"
      data-name="Heading 3"
    >
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#c4a9ff] text-[20px] text-nowrap top-[-0.17px] tracking-[2px] uppercase whitespace-pre">
        My Contribution
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div
      className="absolute h-[242.844px] left-0 top-[42.74px] w-[347.48px]"
      data-name="Paragraph"
    >
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#ede6f7] text-[15px] top-[-0.31px] w-[337px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        As part of MCW Creative Agency, I designed and developed
        the complete interactive installation for the ceramics
        section. I created the information architecture for 14
        object pairs, structured the comparison system
        highlighting 3-4 key characteristics per object, and
        designed the zoom functionality that allows visitors to
        explore fine details. I focused on visual storytelling
        to minimize text dependency.
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div
      className="absolute h-[161.896px] left-0 top-[304.33px] w-[347.48px]"
      data-name="Paragraph"
    >
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#ede6f7] text-[15px] top-[-0.31px] w-[345px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{`I developed a dual-view system that presents both overview and detail photos simultaneously. Visitors can quickly identify differences through visual markers rather than reading lengthy descriptions. The interface emphasizes what is distinctly Chinese versus what reflects each object's cultural heritage.`}</p>
    </div>
  );
}

function Heading6() {
  return (
    <div
      className="absolute h-[23.999px] left-0 top-[496.21px] w-[347.48px]"
      data-name="Heading 3"
    >
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#c4a9ff] text-[20px] text-nowrap top-[-0.17px] tracking-[2px] uppercase whitespace-pre">
        My Challenges
      </p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div
      className="absolute h-[296.81px] left-0 top-[538.96px] w-[347.48px]"
      data-name="Paragraph"
    >
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#ede6f7] text-[15px] top-[-0.31px] w-[345px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        The biggest challenge was deciding which characteristics
        to highlight for each object. With limited space in the
        interactive, I had to distill complex cultural histories
        into 3-4 clear visual points that visitors could
        understand quickly. Balancing educational depth with
        accessibility required close collaboration with curators
        and multiple rounds of testing. Additionally, ensuring
        the zoom functionality remained smooth while displaying
        high-resolution ceramic details demanded careful
        technical optimization.
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="h-[835.768px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading5 />
      <Paragraph4 />
      <Paragraph5 />
      <Heading6 />
      <Paragraph6 />
    </div>
  );
}

function Container19() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[37.49px] h-[904px] items-start left-[18px] top-[1813.06px] w-[348px]"
      data-name="Container"
    >
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="h-[2892px] mb-[-115px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Container />
      <Link />
      <Container2 />
      <N />
      <Container9 />
      <Container12 />
      <Container15 />
      <Container19 />
    </div>
  );
}

function Heading7() {
  return (
    <div
      className="h-[35.001px] relative shadow-[0px_0px_40px_0px_rgba(196,169,255,0.3)] shrink-0 w-full"
      data-name="Heading 2"
    >
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[35px] left-0 text-[#c4a9ff] text-[28px] text-nowrap top-[-1.17px] tracking-[2.8px] uppercase whitespace-pre">
        Inge Westerhoff
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div
      className="h-[22.004px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="absolute font-['Roboto:Italic',sans-serif] font-normal italic leading-[22px] left-0 text-[15px] text-[rgba(237,230,247,0.8)] text-nowrap top-[-0.83px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        UX/UI Designer
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="h-[64.491px] relative shrink-0 w-[332.506px]"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.487px] h-[64.491px] items-start relative w-[332.506px]">
        <Heading7 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div
      className="h-[20.997px] relative shrink-0 w-[62.02px]"
      data-name="Link"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.997px] relative w-[62.02px]">
        <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#e5daff] text-[14px] text-nowrap top-[-0.83px] whitespace-pre">
          About Me
        </p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div
      className="h-[20.997px] relative shrink-0 w-[56.894px]"
      data-name="Link"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.997px] relative w-[56.894px]">
        <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#e5daff] text-[14px] text-nowrap top-[-0.83px] whitespace-pre">
          My Work
        </p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div
      className="h-[20.997px] relative shrink-0 w-[51.641px]"
      data-name="Link"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.997px] relative w-[51.641px]">
        <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#e5daff] text-[14px] text-nowrap top-[-0.83px] whitespace-pre">
          Contact
        </p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div
      className="h-[77.964px] relative shrink-0 w-[332.506px]"
      data-name="Navigation"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.487px] h-[77.964px] items-start relative w-[332.506px]">
        <Link1 />
        <Link2 />
        <Link3 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div
      className="absolute bg-[rgba(196,169,255,0.2)] blur-xl filter left-[11.25px] rounded-[3.93113e+07px] size-0 top-[11.25px]"
      data-name="Container"
    />
  );
}

function Icon3() {
  return (
    <div
      className="absolute left-0 size-[22.498px] top-0"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 23 23"
      >
        <g id="Icon">
          <path
            d={svgPaths.p26ae0800}
            id="Vector"
            stroke="var(--stroke-0, #E5DAFF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.87481"
          />
          <path
            d={svgPaths.p5571700}
            id="Vector_2"
            stroke="var(--stroke-0, #E5DAFF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.87481"
          />
          <path
            d={svgPaths.p226aa300}
            id="Vector_3"
            stroke="var(--stroke-0, #E5DAFF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.87481"
          />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div
      className="absolute left-0 size-[22.498px] top-0"
      data-name="Link"
    >
      <Container22 />
      <Icon3 />
    </div>
  );
}

function Container23() {
  return (
    <div
      className="absolute bg-[rgba(196,169,255,0.2)] blur-xl filter left-[11.25px] rounded-[3.93113e+07px] size-0 top-[11.25px]"
      data-name="Container"
    />
  );
}

function Icon4() {
  return (
    <div
      className="absolute left-0 size-[22.498px] top-0"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 23 23"
      >
        <g id="Icon">
          <path
            d={svgPaths.p1fb66280}
            id="Vector"
            stroke="var(--stroke-0, #E5DAFF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.87481"
          />
          <path
            d={svgPaths.p731c900}
            id="Vector_2"
            stroke="var(--stroke-0, #E5DAFF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.87481"
          />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div
      className="absolute left-[41.24px] size-[22.498px] top-0"
      data-name="Link"
    >
      <Container23 />
      <Icon4 />
    </div>
  );
}

function Container24() {
  return (
    <div
      className="h-[22.498px] relative shrink-0 w-[332.506px]"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22.498px] relative w-[332.506px]">
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[22.498px] h-[209.949px] items-start left-0 pl-[7.487px] pr-0 py-0 top-0 w-[347.48px]"
      data-name="Container"
    >
      <Container21 />
      <Navigation />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div
      className="absolute bg-[rgba(49,37,69,0.3)] border-[#312545] border-[1.172px] border-solid left-[23.74px] rounded-[20px] size-[299.995px] top-[239.93px]"
      data-name="Container"
    />
  );
}

function Container27() {
  return (
    <div
      className="h-[539.928px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Container25 />
      <Container26 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div
      className="h-[20.008px] relative shrink-0 w-[153.238px]"
      data-name="Paragraph"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.008px] relative w-[153.238px]">
        <p
          className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[13px] text-[rgba(237,230,247,0.5)] top-[0.34px] w-[154px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          © 2025 All rights reserved.
        </p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div
      className="h-[43.678px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#312545] border-[1.172px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex h-[43.678px] items-start justify-center pb-0 pl-0 pr-[0.018px] pt-[23.67px] relative w-full">
          <Paragraph8 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div
      className="h-[613.591px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[29.985px] h-[613.591px] items-start px-[22.498px] py-0 relative w-full">
          <Container27 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function SiteFooter() {
  return (
    <div
      className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#261e35] h-[765px] items-start mb-[-115px] pb-0 pt-[43px] px-0 relative shrink-0 to-[#1a1425] w-full"
      data-name="SiteFooter"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#312545] border-[1.172px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Container29 />
    </div>
  );
}

function MadeInChina9() {
  return (
    <div
      className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[#261e35] from-[39.904%] h-[3518px] items-start left-0 pb-[115px] pt-0 px-0 to-[#312545] to-[80.769%] top-[0.06px] w-[392px]"
      data-name="MadeInChina"
    >
      <Container20 />
      <SiteFooter />
    </div>
  );
}

function Container30() {
  return (
    <div
      className="absolute bg-[#261e35] border-[0px_0px_1.172px] border-[rgba(196,169,255,0.1)] border-solid h-[112.489px] left-0 top-0 w-[392.475px]"
      data-name="Container"
    />
  );
}

function Link6() {
  return (
    <div
      className="h-[20.997px] relative shrink-0 w-[161.237px]"
      data-name="Link"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.997px] relative w-[161.237px]">
        <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#ede6f7] text-[14px] text-nowrap top-[-0.83px] tracking-[2px] uppercase whitespace-pre">
          Inge Westerhoff
        </p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div
      className="h-[22.498px] overflow-clip relative shrink-0 w-full"
      data-name="Icon"
    >
      <div
        className="absolute inset-[20.83%_16.67%_79.17%_16.67%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-0.94px_-6.25%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 17 2"
          >
            <path
              d="M0.937407 0.937407H15.9359"
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.87481"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-1/2 left-[16.67%] right-[16.67%] top-1/2"
        data-name="Vector"
      >
        <div className="absolute inset-[-0.94px_-6.25%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 17 2"
          >
            <path
              d="M0.937407 0.937407H15.9359"
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.87481"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute inset-[79.17%_16.67%_20.83%_16.67%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-0.94px_-6.25%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 17 2"
          >
            <path
              d="M0.937407 0.937407H15.9359"
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.87481"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="relative shrink-0 size-[22.498px]"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[22.498px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div
      className="absolute content-stretch flex h-[22.498px] items-center justify-between left-[22.5px] top-[45px] w-[347.48px]"
      data-name="Container"
    >
      <Link6 />
      <Button3 />
    </div>
  );
}

function Navigation1() {
  return (
    <div
      className="absolute h-[112.489px] left-0 top-[0.06px] w-[392.475px]"
      data-name="Navigation"
    >
      <Container30 />
      <Container31 />
    </div>
  );
}

export default function ResponsivePortfolioWebsite() {
  return (
    <div
      className="bg-[#261e35] relative size-full"
      data-name="Responsive Portfolio Website"
    >
      <MadeInChina9 />
      <Navigation1 />
    </div>
  );
}