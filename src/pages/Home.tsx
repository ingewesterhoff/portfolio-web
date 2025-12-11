import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SiteFooter } from "../components/SiteFooter";
import { PortfolioButtonLink } from "../components/PortfolioButton";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "50%"],
  );
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0],
  );
  const glowScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.5],
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-[#261e35] from-[39.904%] to-[#312545] to-[80.769%]"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20 sm:pt-0 overflow-hidden">
        {/* Animated background glows */}
        <motion.div
          style={{ scale: glowScale }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-[#c4a9ff]/12 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-[#e5daff]/10 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-[#c4a9ff]/10 rounded-full blur-[120px] pointer-events-none"
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-['Big_Shoulders_Display',sans-serif] text-[60px] sm:text-[80px] md:text-[120px] lg:text-[150px] leading-none text-[#ede6f7] text-center uppercase mb-6 sm:mb-8 md:mb-12 drop-shadow-[0_0_30px_rgba(196,169,255,0.3)] font-bold px-4"
          >
            Inge
            <br />
            Westerhoff
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ opacity: heroOpacity }}
        >
          <PortfolioButtonLink to="/contact" variant="primary">
            Contact me
          </PortfolioButtonLink>
        </motion.div>
      </section>

      {/* Recent Work Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-[188px]">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12 sm:mb-14 md:mb-16 px-2 sm:px-0"
          >
            <h2 className="font-['Big_Shoulders_Display',sans-serif] text-[28px] sm:text-[36px] md:text-[46px] lg:text-[56px] xl:text-[60px] text-[#c4a9ff] tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] lg:tracking-[3.5px] xl:tracking-[4px] uppercase leading-[0.95] drop-shadow-[0_0_20px_rgba(196,169,255,0.3)] font-bold break-words hyphens-auto">
              RECENT WORK
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex-1 h-[2px] sm:h-[3px] bg-gradient-to-r from-[#c4a9ff] to-transparent shadow-[0_0_10px_rgba(196,169,255,0.3)] origin-left"
            />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-5 md:gap-6 max-w-[1600px] mx-auto relative z-10">
          {[
            {
              title: "Made In China",
              client: "Wereldmuseum Amsterdam",
              team: "Internship",
              image:
                "https://images.unsplash.com/photo-1758639353381-f6c8cc5886f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGV4aGliaXRpb258ZW58MXx8fHwxNzYyNzg4NDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              link: "/projects/madeinchina",
            },
            {
              title: "De Belevingsbox",
              client: "Dordrechts Museum",
              team: "Academic",
              image:
                "https://images.unsplash.com/photo-1761387225272-eb314d8307ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBleHBlcmllbmNlJTIwZGVzaWdufGVufDF8fHx8MTc2Mjc4ODQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              link: "/projects/belevingsbox",
            },
            {
              title: "CoCat",
              client: "WeAreReasonablePeople",
              team: "Academic",
              image:
                "https://images.unsplash.com/photo-1753685727886-9ea0036ba7bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHBldCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyNzg4NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              link: "/projects/cocat",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PortfolioButtonLink
                to={project.link}
                variant="unstyled"
                className="group block relative overflow-hidden aspect-[4/3] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_30px_rgba(196,169,255,0.15)] active:shadow-[0_6px_30px_rgba(196,169,255,0.15)] transition-shadow duration-300"
              >
                {/* Image */}
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#261e35]/75 md:opacity-0 md:group-hover:opacity-100 md:group-active:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 sm:p-8">
                  <h3 className="font-['Outfit',sans-serif] font-bold text-[18px] sm:text-[20px] md:text-[22px] text-white tracking-[1.5px] sm:tracking-[1.8px] uppercase mb-2 text-center">
                    {project.title}
                  </h3>
                  <p className="font-['Roboto',sans-serif] text-[14px] sm:text-[15px] md:text-[16px] text-[#e5daff] text-center mb-1">
                    {project.client}
                  </p>
                  <p className="font-['Roboto',sans-serif] text-[12px] sm:text-[13px] md:text-[14px] text-[#c4a9ff] text-center">
                    {project.team}
                  </p>
                </div>
              </PortfolioButtonLink>
            </motion.div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}