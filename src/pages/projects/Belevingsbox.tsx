import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { SiteFooter } from "../../components/SiteFooter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useEffect } from "react";
import Slider from "react-slick";
import { CarouselStyles } from "../../components/CarouselStyles";

// Custom arrow components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button className="slick-next" onClick={onClick}>
      <ChevronRight />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button className="slick-prev" onClick={onClick}>
      <ChevronLeft />
    </button>
  );
}

export function Belevingsbox() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const carouselImages = [
    "https://images.unsplash.com/flagged/photo-1564161231394-4ace8c4aa680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aXNlbnNvcnklMjBtdXNldW0lMjBhcnR8ZW58MXx8fHwxNzYxMjI5OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1740598161630-881a4722b5c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBleHBlcmllbmNlJTIwZGVzaWdufGVufDF8fHx8MTc2MTIwODE0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1581093458791-9f3c3250a540?w=1200",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#261e35] from-[39.904%] to-[#312545] to-[80.769%] text-white">
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-[188px] pt-44 sm:pt-48 md:pt-52 lg:pt-56 pb-24 sm:pb-28 md:pb-32 relative">
        {/* Decorative background elements */}
        <div className="absolute top-32 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#c4a9ff]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#c4a9ff]/5 rounded-full blur-3xl" />

        {/* Back Button */}
        <div className="mb-12 sm:mb-14 md:mb-16 relative z-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-['Roboto',sans-serif] text-[14px] sm:text-[15px] text-[#c4a9ff] hover:text-[#e5daff] active:text-[#e5daff] transition-colors duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Title Section */}
        <div className="mb-12 sm:mb-14 md:mb-16 relative z-10 max-w-6xl mx-auto">
          <h1 className="font-['Big_Shoulders_Display',sans-serif] font-bold text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px] xl:text-[72px] text-[#c4a9ff] tracking-[2px] sm:tracking-[3px] md:tracking-[4px] lg:tracking-[5px] xl:tracking-[6px] uppercase leading-[1.05] drop-shadow-[0_0_25px_rgba(196,169,255,0.4)] mb-5 sm:mb-6 md:mb-7 break-words">
            DE BELEVINGSBOX
          </h1>
          <div className="w-14 sm:w-16 md:w-20 h-1 bg-gradient-to-r from-[#c4a9ff] to-transparent mb-6 sm:mb-7 md:mb-8 shadow-[0_0_10px_rgba(196,169,255,0.5)]" />
          <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-[#ede6f7] leading-[1.8]">
            A multisensory museum experience, where tactile art
            replicas, audio descriptions, scents, ambient
            sounds, and guide lines come together to make the
            art experience accessible, inclusive, and
            independent for visually impaired visitors.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="mb-16 sm:mb-20 md:mb-24 relative z-10">
          <CarouselStyles />
          <Slider {...sliderSettings}>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <ImageWithFallback
                  src={image}
                  alt={`Belevingsbox project image ${index + 1}`}
                  className="w-full aspect-[16/9] object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Project Info Grid */}
        <div className="max-w-6xl mx-auto mb-20 sm:mb-24 md:mb-28 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { label: "Year", value: "2024" },
              { label: "Tools", value: "Figma, HTML, Arduino" },
              {
                label: "Skills",
                value: "Immersive experience",
              },
              { label: "Team", value: "CMD Rotterdam" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="bg-[#261e35]/60 p-4 sm:p-5 md:p-6 rounded-[18px] sm:rounded-[22px] border border-[#312545] backdrop-blur-sm hover:border-[#c4a9ff]/30 transition-all duration-300 min-w-0"
              >
                <h3 className="font-['Outfit',sans-serif] font-bold text-[11px] sm:text-[12px] text-[#c4a9ff] tracking-[1.1px] sm:tracking-[1.2px] uppercase mb-2">
                  {item.label}
                </h3>
                <p className="font-['Roboto',sans-serif] text-[14px] sm:text-[15px] md:text-[16px] text-[#ede6f7] break-words">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Problem */}
        <div className="mb-20 sm:mb-24 md:mb-28 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 px-2 sm:px-0">
                <h2 className="font-['Big_Shoulders_Display',sans-serif] font-bold text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] text-[#c4a9ff] tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] lg:tracking-[3.5px] uppercase leading-[1.1] drop-shadow-[0_0_20px_rgba(196,169,255,0.3)] break-words">
                  THE PROBLEM
                </h2>
                <div className="flex-1 h-[2px] sm:h-[2.5px] md:h-[3px] bg-gradient-to-r from-[#c4a9ff] to-transparent shadow-[0_0_10px_rgba(196,169,255,0.3)] min-w-[40px]" />
              </div>

              <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#ede6f7] leading-[1.8]">
                How can the Dordrechts Museum create a
                meaningful art experience for people with
                dementia? Traditional museum visits rely heavily
                on visual observation and reading—approaches
                that can be overwhelming or ineffective for this
                audience. Museums need new ways to make art
                accessible and engaging through multisensory
                experiences that go beyond sight and text.
              </p>

              <div className="flex flex-col gap-6">
                <h3 className="font-['Outfit',sans-serif] font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#c4a9ff] tracking-[2px] sm:tracking-[2.2px] md:tracking-[2.4px] uppercase leading-[1.2] break-words">
                  Current Situation
                </h3>
                <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#ede6f7] leading-[1.8]">
                  Many museums and cultural institutions
                  struggle to create truly accessible art
                  experiences for people with dementia.
                  Traditional exhibitions rely heavily on visual
                  observation and reading, which can be
                  overwhelming or ineffective for this audience.
                  Caregivers and family members often feel
                  uncertain about how to facilitate meaningful
                  engagement with art.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="font-['Outfit',sans-serif] font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#c4a9ff] tracking-[2px] sm:tracking-[2.2px] md:tracking-[2.4px] uppercase leading-[1.2] break-words">
                  Desired Situation
                </h3>
                <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#ede6f7] leading-[1.8]">
                  A multisensory experience box engages people
                  with dementia through touch, sound, scent, and
                  light—activating different cognitive pathways
                  beyond visual processing. The installation
                  provides a structured yet flexible framework
                  that empowers caregivers to facilitate
                  meaningful art experiences confidently.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* My Process Section */}
        <div className="mb-16 sm:mb-20 md:mb-24 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-12">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 px-2 sm:px-0">
                <h2 className="font-['Big_Shoulders_Display',sans-serif] font-bold text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] text-[#c4a9ff] tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] lg:tracking-[3.5px] uppercase leading-[1.1] drop-shadow-[0_0_20px_rgba(196,169,255,0.3)] break-words">
                  MY PROCESS
                </h2>
                <div className="flex-1 h-[2px] md:h-[2.5px] bg-gradient-to-r from-[#c4a9ff] to-transparent shadow-[0_0_10px_rgba(196,169,255,0.3)] min-w-[30px]" />
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <h3 className="font-['Outfit',sans-serif] font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#c4a9ff] tracking-[2px] sm:tracking-[2.2px] md:tracking-[2.4px] uppercase leading-[1.2] break-words">
                    My Contribution
                  </h3>
                  <div className="flex flex-col gap-5">
                    <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#ede6f7] leading-[1.8]">
                      I led the design process from concept to
                      prototype. Working closely with our
                      sponsor, I translated their vision of
                      inclusive art experiences into a tangible
                      multisensory installation. I designed the
                      interface, coordinated the sensory
                      elements (touch, sound, scent, light), and
                      ensured accessibility for people with
                      dementia throughout every design decision.
                    </p>
                    <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#ede6f7] leading-[1.8]">
                      Beyond design, I conducted user research
                      sessions, prototype testing, and gathered
                      feedback to refine the experience. I
                      documented our process and created
                      presentation materials to communicate the
                      project's value to stakeholders.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="font-['Outfit',sans-serif] font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#c4a9ff] tracking-[2px] sm:tracking-[2.2px] md:tracking-[2.4px] uppercase leading-[1.2] break-words">
                    My Challenges
                  </h3>
                  <div className="flex flex-col gap-5">
                    <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#ede6f7] leading-[1.8]">
                      One of my biggest challenges was learning
                      how to use Premiere Pro and integrating
                      animation into the videos. I also faced
                      some difficulties with time management
                      while balancing all the creative tasks.
                    </p>
                    <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#ede6f7] leading-[1.8]">
                      Moving forward, I want to bring users in
                      earlier and explore co-creation to ensure
                      ideas develop directly from their input.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}