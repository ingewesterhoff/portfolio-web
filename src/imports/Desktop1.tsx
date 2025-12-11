import imgRectangle28 from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";
import { imgRectangle27 } from "./svg-bv187";

function MaskGroup() {
  return (
    <div
      className="absolute contents left-[188px] top-[218px]"
      data-name="Mask group"
    >
      <div
        className="absolute h-[417px] left-[188px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1064px_410px] top-[218px] w-[450.577px]"
        style={{ maskImage: `url('${imgRectangle27}')` }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgRectangle28}
        />
      </div>
    </div>
  );
}

function RecentWorkCard() {
  return (
    <div
      className="absolute contents left-[188px] top-[218px]"
      data-name="Recent work card"
    >
      <div className="absolute bg-[#261e35] h-[410px] left-[188px] rounded-[50px] top-[218px] w-[1064px]" />
      <MaskGroup />
    </div>
  );
}

function ViewProject() {
  return (
    <div
      className="box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-[20px] relative rounded-[100px] shrink-0"
      data-name="View project"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#e5daff] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
      <p className="font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[27.5px] relative shrink-0 text-[#e5daff] text-[18px] text-center text-nowrap tracking-[1.8px] uppercase whitespace-pre">
        view project
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start left-[715.53px] top-[294px] w-[446.065px]">
      <p className="font-['Outfit:Black',_sans-serif] font-black h-[34px] leading-[27.5px] relative shrink-0 text-[40px] text-white tracking-[4px] uppercase w-full">
        Tune In
      </p>
      <p
        className="font-['Roboto:Regular',_sans-serif] font-normal h-[110px] leading-[27.5px] relative shrink-0 text-[18px] text-white w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Tune In is an interactive soundboard installation for
        Theater Rotterdam. By stepping on colorful tiles, young
        adults trigger sounds and lights, creating a playful and
        accessible first connection with theater.
      </p>
      <ViewProject />
    </div>
  );
}

function RecentWork() {
  return (
    <div
      className="absolute contents left-[188px] top-[80px]"
      data-name="Recent work"
    >
      <div className="absolute flex flex-col font-['Outfit:Black',_sans-serif] font-black h-[68px] justify-center leading-[0] left-[188px] text-[#c4a9ff] text-[40px] top-[114px] tracking-[4px] translate-y-[-50%] uppercase w-[359.662px]">
        <p className="leading-[27.5px]">RECENT WORK</p>
      </div>
      <div className="absolute bg-[#261e35] h-[4px] left-[622.59px] rounded-[2px] top-[114px] w-[629.408px]" />
      <div className="absolute bg-[#c4a9ff] h-[4px] left-[1087.15px] rounded-[2px] top-[114px] w-[164.845px]" />
    </div>
  );
}

function RecentWork1() {
  return (
    <div
      className="absolute contents left-[188px] top-[80px]"
      data-name="Recent work"
    >
      <RecentWorkCard />
      <Frame />
      <RecentWork />
    </div>
  );
}

function RecentWork2() {
  return (
    <div
      className="absolute h-[748px] left-0 top-[841px] w-[1440px]"
      data-name="Recent work"
    >
      <RecentWork1 />
    </div>
  );
}

function Footer() {
  return (
    <div
      className="absolute h-[410px] left-0 top-[1589px] w-[1440px]"
      data-name="Footer"
    >
      <div
        className="absolute bg-[#261e35] h-[410px] left-0 top-0 w-[1447px]"
        data-name="Footer"
      />
    </div>
  );
}

function MenuItems() {
  return (
    <div
      className="absolute contents font-['Outfit:Regular',_sans-serif] font-normal leading-[27.5px] right-[187px] text-[#ede6f7] text-[20px] top-[63px]"
      data-name="menu items"
    >
      <p className="absolute h-[27px] right-[670px] top-[63px] translate-x-[100%] w-[58px]">
        about
      </p>
      <p className="absolute h-[27px] right-[542px] top-[63px] translate-x-[100%] w-[83px]">
        my work
      </p>
      <p className="absolute h-[27px] right-[406px] top-[63px] translate-x-[100%] w-[80px]">
        creative
      </p>
      <p className="absolute h-[27px] right-[261px] top-[63px] translate-x-[100%] w-[74px]">
        contact
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div
      className="absolute bg-[#c4a9ff] box-border content-stretch flex gap-[10px] h-[68.08px] items-center justify-center left-[601px] px-[50px] py-[20px] rounded-[100px] top-[624px]"
      data-name="contact"
    >
      <p className="font-['Outfit:SemiBold',_sans-serif] font-semibold leading-[27.5px] relative shrink-0 text-[#261e35] text-[18px] text-center text-nowrap tracking-[1.8px] uppercase whitespace-pre">
        Contact me
      </p>
    </div>
  );
}

export default function Desktop() {
  return (
    <div
      className="bg-gradient-to-b from-[#261e35] from-[39.904%] relative size-full to-[#312545] to-[80.769%]"
      data-name="Desktop - 1"
    >
      <RecentWork2 />
      <Footer />
      <div className="absolute bg-[#313131] h-[841px] left-0 right-0 top-0" />
      <p className="absolute font-['Outfit:Bold',_sans-serif] font-bold h-[27px] leading-[27.5px] left-[188px] text-[#ede6f7] text-[20px] top-[63px] tracking-[2px] uppercase w-[255px]">
        Inge Westerhoff
      </p>
      <MenuItems />
      <Contact />
      <p className="absolute font-['Big_Shoulders_Display:Bold',_sans-serif] font-bold h-[298px] leading-none left-[720.5px] text-[#ede6f7] text-[150px] text-center top-[277px] translate-x-[-50%] uppercase w-[627px]">
        Inge Westerhoff
      </p>
    </div>
  );
}