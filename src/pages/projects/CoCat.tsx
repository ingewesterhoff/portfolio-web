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

export function CoCat() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const carouselImages = [
    "https://images.unsplash.com/photo-1577349516274-37ff88a53627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBzbWFydCUyMGZlZWRlcnxlbnwxfHx8fDE3NjEyMjk5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1555861496-0666c8981751?w=600",
    "https://images.unsplash.com/photo-1613228833227-c2136f89fca1?w=600",
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
            COCAT
          </h1>
          <div className="w-14 sm:w-16 md:w-20 h-1 bg-gradient-to-r from-[#c4a9ff] to-transparent mb-6 sm:mb-7 md:mb-8 shadow-[0_0_10px_rgba(196,169,255,0.5)]" />
          <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-[#ede6f7] leading-[1.8]">
            A smart cat feeder app designed for busy singles who
            are often away from home. CoCat lets users feed
            their cat remotely, receive notifications, and
            monitor their pet's well-being—ensuring peace of
            mind even when they're not around.
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
                  alt={`CoCat project image ${index + 1}`}
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
              { label: "Tools", value: "Figma, Illustrator" },
              { label: "Skills", value: "UX/UI Design" },
              { label: "Team", value: "Individual" },
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
                Busy cat owners who work long hours worry about
                their pets being alone all day. They want to
                ensure their cats are fed on schedule and feel
                connected to them, but traditional feeders offer
                no visibility or interaction. This creates
                anxiety and makes owners feel disconnected from
                their pets' daily lives.
              </p>

              <div className="flex flex-col gap-6">
                <h3 className="font-['Outfit',sans-serif] font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#c4a9ff] tracking-[2px] sm:tracking-[2.2px] md:tracking-[2.4px] uppercase leading-[1.2] break-words">
                  Current Situation
                </h3>
                <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#ede6f7] leading-[1.8]">
                  Cat owners rely on basic automatic feeders
                  with timers but have no way to check on their
                  pets, adjust feeding times remotely, or see if
                  their cat actually ate. This leads to worry
                  and guilt about leaving pets home alone.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="font-['Outfit',sans-serif] font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#c4a9ff] tracking-[2px] sm:tracking-[2.2px] md:tracking-[2.4px] uppercase leading-[1.2] break-words">
                  Desired Situation
                </h3>
                <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#ede6f7] leading-[1.8]">
                  Owners can check in on their cats anytime
                  through live video, dispense food remotely,
                  manage feeding schedules, and receive
                  notifications. They feel connected to their
                  pets throughout the day and have peace of mind
                  knowing their cats are cared for.
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
                      I coordinated the prototype's dashboard
                      and navigation while leading the team,
                      ensuring smooth collaboration throughout
                      the project. As the visual designer, I
                      created all the illustrations, posters,
                      and style elements—work that won us the
                      best brand prize.
                    </p>
                    <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#ede6f7] leading-[1.8]">
                      I learned a lot by using Figma to create
                      interactions between multiple elements and
                      ensured a user-friendly interface by
                      testing with our target audience of busy
                      singles aged 25–35 who are frequently away
                      from home. The project was particularly
                      relevant during the COVID-19 pandemic,
                      when more people adopted cats and needed
                      reliable care solutions.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="font-['Outfit',sans-serif] font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#c4a9ff] tracking-[2px] sm:tracking-[2.2px] md:tracking-[2.4px] uppercase leading-[1.2] break-words">
                    Dashboard & Navigation
                  </h3>
                  <div className="flex flex-col gap-5">
                    <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#ede6f7] leading-[1.8]">
                      I designed the app's dashboard and
                      navigation with several key features in
                      mind. The dashboard displays the feeder
                      status at a glance, while the navigation
                      provides quick access to essential
                      features like scheduling and live feeds.
                    </p>
                    <div>
                      <h4 className="font-['Outfit',sans-serif] font-bold text-[16px] sm:text-[17px] md:text-[18px] text-[#c4a9ff] tracking-[1.6px] sm:tracking-[1.7px] md:tracking-[1.8px] uppercase mb-3 leading-[1.2]">
                        Key Features:
                      </h4>
                      <ul className="space-y-2 pl-5">
                        <li className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#ede6f7] leading-[1.8] list-disc">
                          <span className="font-bold">
                            Minimalist Start Screen:
                          </span>{" "}
                          Clean design for better usability
                        </li>
                        <li className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#ede6f7] leading-[1.8] list-disc">
                          <span className="font-bold">
                            Expandable Features:
                          </span>{" "}
                          Users control which content is
                          displayed
                        </li>
                        <li className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#ede6f7] leading-[1.8] list-disc">
                          <span className="font-bold">
                            Widget Shortcuts:
                          </span>{" "}
                          Quick access to essential functions
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="font-['Outfit',sans-serif] font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#c4a9ff] tracking-[2px] sm:tracking-[2.2px] md:tracking-[2.4px] uppercase leading-[1.2] break-words">
                    Design Goal
                  </h3>
                  <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#ede6f7] leading-[1.8]">
                    The design focused on providing an
                    intuitive, simple user experience with easy
                    navigation and clear notifications, ensuring
                    users could manage their cat's feeding
                    remotely with confidence.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="font-['Outfit',sans-serif] font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#c4a9ff] tracking-[2px] sm:tracking-[2.2px] md:tracking-[2.4px] uppercase leading-[1.2] break-words">
                    My Challenges
                  </h3>
                  <div className="flex flex-col gap-5">
                    <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#ede6f7] leading-[1.8]">
                      The main challenge was designing an
                      interface that felt both functional and
                      emotionally engaging. Users needed quick
                      access to feeding controls during busy
                      moments, but the app also needed to
                      provide moments of joy and connection with
                      their pets.
                    </p>
                    <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] text-[#ede6f7] leading-[1.8]">
                      Balancing simplicity with rich features
                      required careful prioritization and
                      multiple rounds of user testing to get
                      right.
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