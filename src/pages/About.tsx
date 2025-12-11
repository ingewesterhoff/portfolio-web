import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Linkedin, Mail } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

export function About() {
  const skills = [
    "ILLUSTRATOR",
    "FIGMA",
    "PHOTOSHOP",
    "INDESIGN",
  ];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex(
        (prev) => (prev + 1) % skills.length,
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#261e35] from-[39.904%] to-[#312545] to-[80.769%] text-white">
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-[188px] pt-40 sm:pt-44 md:pt-48 pb-24 sm:pb-28 md:pb-32 relative overflow-hidden">
        {/* Decorative background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-32 right-10 w-96 h-96 bg-[#c4a9ff]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 left-10 w-96 h-96 bg-[#c4a9ff]/5 rounded-full blur-3xl"
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 sm:mb-28 md:mb-32 relative z-10"
        >
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 px-2 sm:px-0">
            <h1 className="font-['Big_Shoulders_Display',sans-serif] font-bold text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px] xl:text-[100px] text-[#c4a9ff] tracking-[2.5px] sm:tracking-[3px] md:tracking-[5px] lg:tracking-[7px] xl:tracking-[8px] uppercase leading-[0.95] drop-shadow-[0_0_25px_rgba(196,169,255,0.4)] break-words hyphens-auto">
              ABOUT
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex-1 h-[2px] sm:h-[2.5px] md:h-[3px] bg-gradient-to-r from-[#c4a9ff] to-transparent shadow-[0_0_10px_rgba(196,169,255,0.3)] origin-left"
            />
          </div>
        </motion.div>

        {/* Hero Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 sm:mb-28 md:mb-32 max-w-4xl mx-auto relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group lg:order-1 max-w-xs sm:max-w-sm mx-auto"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-[#c4a9ff]/20 to-transparent rounded-[50px] blur-3xl"
              />
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.4 }}
              >
                <ImageWithFallback
                  src=""
                  alt="Inge Westerhoff"
                  className="relative w-full aspect-[3/4] object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_80px_rgba(196,169,255,0.3)] transition-all duration-500"
                />
              </motion.div>
            </motion.div>

            {/* Bio Content */}
            <div className="lg:order-2 space-y-6 sm:space-y-8">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-['Big_Shoulders_Display',sans-serif] font-bold text-[36px] sm:text-[45px] md:text-[55px] lg:text-[70px] text-[#c4a9ff] tracking-[2.5px] sm:tracking-[3.5px] md:tracking-[4.5px] lg:tracking-[6px] uppercase leading-[1.05] drop-shadow-[0_0_25px_rgba(196,169,255,0.5)] mb-6 sm:mb-7 md:mb-8"
              >
                HI THERE!
              </motion.h2>
              <div className="space-y-5 sm:space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-['Roboto',sans-serif] text-[16px] sm:text-[17px] md:text-[18px] text-[#ede6f7] leading-[26px] sm:leading-[28px] md:leading-[30px]"
                >
                  I'm Inge Westerhoff, a 23 year old designer
                  based in Utrecht/Rotterdam. I'm currently a
                  Communicaton and multimedia design (CMD)
                  student in Rotterdam.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="font-['Roboto',sans-serif] text-[16px] sm:text-[17px] md:text-[18px] text-[#ede6f7] leading-[26px] sm:leading-[28px] md:leading-[30px]"
                >
                  I am most interested in visual design and
                  interaction design. I've worked with Figma,
                  Framer, Adobe Illustrator, Adobe Photoshop,
                  Adobe Indesign and Adobe After Effects.
                </motion.p>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4 sm:gap-6 pt-2 sm:pt-4 items-center"
              >
                <motion.a
                  href="https://linkedin.com/in/inge-westerhoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative text-white hover:text-[#C4A9FF] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-[#c4a9ff]/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-300" />
                  <Linkedin className="relative h-7 w-7 sm:h-8 sm:w-8" />
                </motion.a>
                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="group relative text-white hover:text-[#C4A9FF] transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-[#c4a9ff]/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-300" />
                    <Mail className="relative h-7 w-7 sm:h-8 sm:w-8" />
                  </motion.div>
                </Link>
                <motion.a
                  href="YOUR_SHAREPOINT_OR_ONEDRIVE_LINK_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#c4a9ff] hover:bg-[#E5DAFF] text-[#261e35] rounded-[100px] font-['Outfit',sans-serif] font-bold text-[14px] sm:text-[16px] tracking-[1.4px] sm:tracking-[1.6px] uppercase transition-all duration-300 hover:shadow-[0_10px_40px_rgba(196,169,255,0.6)] shadow-[0_5px_20px_rgba(196,169,255,0.4)]"
                >
                  View Resume
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Values - Improved Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20 sm:mb-24 md:mb-28 max-w-7xl mx-auto relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14">
            {/* Meaning Card */}
            <div className="group relative bg-gradient-to-br from-[#261e35] to-[#312545] p-8 sm:p-10 lg:p-12 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#312545] shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:border-[#c4a9ff]/30 hover:shadow-[0_20px_60px_rgba(196,169,255,0.15)] transition-all duration-500 min-w-0">
              <div className="relative">
                <h3 className="font-['Outfit',sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[36px] text-[#c4a9ff] tracking-[2.5px] sm:tracking-[3px] uppercase mb-5 sm:mb-6 leading-[1.1]">
                  Meaning
                </h3>
                <p className="font-['Roboto',sans-serif] text-[17px] sm:text-[18px] lg:text-[19px] text-[#ede6f7] leading-[28px] sm:leading-[30px] lg:leading-[32px]">
                  For me meaning is about personal growth and
                  striving for a higher purpose. I feel most
                  fulfilled when my work aligns with my values
                  and I can make a positive impact.
                </p>
              </div>
            </div>

            {/* Creativity Card */}
            <div className="group relative bg-gradient-to-br from-[#261e35] to-[#312545] p-8 sm:p-10 lg:p-12 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#312545] shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:border-[#c4a9ff]/30 hover:shadow-[0_20px_60px_rgba(196,169,255,0.15)] transition-all duration-500 min-w-0">
              <div className="relative">
                <h3 className="font-['Outfit',sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[36px] text-[#c4a9ff] tracking-[2.5px] sm:tracking-[3px] uppercase mb-5 sm:mb-6 leading-[1.1]">
                  Creativity
                </h3>
                <p className="font-['Roboto',sans-serif] text-[17px] sm:text-[18px] lg:text-[19px] text-[#ede6f7] leading-[28px] sm:leading-[30px] lg:leading-[32px]">
                  To me, creativity means exploring new paths
                  and crafting fresh ideas. I truly come alive
                  when I'm given the space to innovate and
                  uncover new perspectives. Creativity, for me,
                  is the key to growth and renewal.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated Skills Showcase - Full animation with particles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20 sm:mb-24 md:mb-28 text-center relative z-10"
        >
          <div className="relative py-20 sm:py-24 md:py-28">
            {/* Spreading purple glow - not contained */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300vw] h-[300vw] max-w-[1200px] max-h-[1200px] bg-[#c4a9ff]/10 blur-[150px] pointer-events-none" />

            {/* Particle effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#c4a9ff] rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    x: [0, i % 2 === 0 ? 50 : -50],
                    y: [0, i % 2 === 0 ? -30 : 30],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Text container */}
            <div className="relative h-[70px] sm:h-[90px] md:h-[110px] lg:h-[130px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSkillIndex}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  className="absolute"
                >
                  <span className="font-['Big_Shoulders_Display',sans-serif] font-bold text-[40px] sm:text-[55px] md:text-[70px] lg:text-[85px] text-[#c4a9ff] tracking-[2px] sm:tracking-[3px] md:tracking-[4px] uppercase leading-none drop-shadow-[0_0_50px_rgba(196,169,255,0.8)] px-4 whitespace-nowrap">
                    {skills[currentSkillIndex]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Journey Section - Enhanced Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16 sm:mb-20 md:mb-24 max-w-6xl mx-auto relative z-10"
        >
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12 sm:mb-14 md:mb-16">
            <h2 className="font-['Big_Shoulders_Display',sans-serif] font-bold text-[28px] sm:text-[35px] md:text-[45px] lg:text-[55px] xl:text-[60px] text-[#c4a9ff] tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] lg:tracking-[3.5px] xl:tracking-[4px] uppercase leading-[0.95] drop-shadow-[0_0_20px_rgba(196,169,255,0.3)] break-words hyphens-auto">
              MY JOURNEY
            </h2>
            <div className="flex-1 h-[2px] sm:h-[2.5px] md:h-[3px] bg-gradient-to-r from-[#c4a9ff] to-transparent shadow-[0_0_10px_rgba(196,169,255,0.3)]" />
          </div>

          <div className="space-y-12 sm:space-y-14 md:space-y-16">
            {/* London Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
              <div className="relative group px-2 sm:px-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c4a9ff]/20 to-transparent rounded-[30px] sm:rounded-[40px] md:rounded-[50px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600"
                  alt="London"
                  className="relative w-full aspect-[4/3] object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(196,169,255,0.2)] transition-all duration-500"
                />
              </div>
              <div className="px-2 sm:px-0">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#c4a9ff]/10 rounded-[15px] sm:rounded-[20px] border border-[#c4a9ff]/20 mb-3 sm:mb-4">
                <p className="font-['Roboto',sans-serif] text-[12px] sm:text-[14px] text-[#c4a9ff] tracking-[1.2px] sm:tracking-[1.4px] uppercase">
                  London
                </p>
              </div>
              <h3 className="font-['Outfit',sans-serif] font-bold text-[22px] sm:text-[25px] md:text-[28px] text-white tracking-[2.2px] sm:tracking-[2.5px] md:tracking-[2.8px] uppercase mb-3 sm:mb-4 leading-[1.2]">
                English for the Arts
              </h3>
              <p className="font-['Roboto',sans-serif] text-[14px] sm:text-[15px] md:text-[16px] text-[#c4a9ff] mb-3 sm:mb-4">
                London EF
              </p>
              <p className="font-['Roboto',sans-serif] text-[16px] sm:text-[17px] md:text-[18px] text-[#ede6f7] leading-[26px] sm:leading-[28px] md:leading-[30px]">
                I spent a transformative period in London,
                studying English for the arts. This experience
                shaped how I see the world and gave me new
                ways to conceptualize and execute new ideas.
                It was during this time that I really began to
                develop my unique creative voice.
              </p>
              </div>
            </div>

            {/* Rotterdam Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
              <div className="relative group px-2 sm:px-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c4a9ff]/20 to-transparent rounded-[30px] sm:rounded-[40px] md:rounded-[50px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600"
                  alt="Rotterdam"
                  className="relative w-full aspect-[4/3] object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(196,169,255,0.2)] transition-all duration-500"
                />
              </div>
              <div className="px-2 sm:px-0">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#c4a9ff]/10 rounded-[15px] sm:rounded-[20px] border border-[#c4a9ff]/20 mb-3 sm:mb-4">
                <p className="font-['Roboto',sans-serif] text-[12px] sm:text-[14px] text-[#c4a9ff] tracking-[1.2px] sm:tracking-[1.4px] uppercase">
                  Rotterdam
                </p>
              </div>
              <h3 className="font-['Outfit',sans-serif] font-bold text-[22px] sm:text-[25px] md:text-[28px] text-white tracking-[2.2px] sm:tracking-[2.5px] md:tracking-[2.8px] uppercase mb-3 sm:mb-4 leading-[1.2]">
                CMD Rotterdam
              </h3>
              <p className="font-['Roboto',sans-serif] text-[14px] sm:text-[15px] md:text-[16px] text-[#c4a9ff] mb-3 sm:mb-4">
                Hogeschool Rotterdam
              </p>
              <p className="font-['Roboto',sans-serif] text-[16px] sm:text-[17px] md:text-[18px] text-[#ede6f7] leading-[26px] sm:leading-[28px] md:leading-[30px]">
                As a CMD Rotterdam student, I’m developing myself as a visual designer who combines creativity with practical problem-solving. In my studies, I work on projects ranging from interface design to visual storytelling, which helps me sharpen my skills in tools like Figma and Adobe Illustrator. CMD gives me the space to experiment, receive feedback, and translate ideas into clear, well-designed concepts. It’s where I’m building the foundation for the visual design career I want to pursue.
              </p>
              </div>
            </div>

            {/* MCW Creative Agency Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
              <div className="relative group px-2 sm:px-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c4a9ff]/20 to-transparent rounded-[30px] sm:rounded-[40px] md:rounded-[50px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1666698809123-44e998e93f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMG9mZmljZXxlbnwxfHx8fDE3NjExODY0ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="MCW Creative Agency"
                  className="relative w-full aspect-[4/3] object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(196,169,255,0.2)] transition-all duration-500"
                />
              </div>
              <div className="px-2 sm:px-0">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#c4a9ff]/10 rounded-[15px] sm:rounded-[20px] border border-[#c4a9ff]/20 mb-3 sm:mb-4">
                <p className="font-['Roboto',sans-serif] text-[12px] sm:text-[14px] text-[#c4a9ff] tracking-[1.2px] sm:tracking-[1.4px] uppercase">
                  Rotterdam
                </p>
              </div>
              <h3 className="font-['Outfit',sans-serif] font-bold text-[22px] sm:text-[25px] md:text-[28px] text-white tracking-[2.2px] sm:tracking-[2.5px] md:tracking-[2.8px] uppercase mb-3 sm:mb-4 leading-[1.2]">
                Internship
              </h3>
              <p className="font-['Roboto',sans-serif] text-[14px] sm:text-[15px] md:text-[16px] text-[#c4a9ff] mb-3 sm:mb-4">
                MCW Creative Agency
              </p>
              <p className="font-['Roboto',sans-serif] text-[16px] sm:text-[17px] md:text-[18px] text-[#ede6f7] leading-[26px] sm:leading-[28px] md:leading-[30px]">
                During my internship at MCW Creative Agency in
                Rotterdam, I gained hands-on experience
                working on real-world projects for diverse
                clients. This opportunity allowed me to apply
                my design skills in a professional setting,
                collaborate with experienced creatives, and
                learn the dynamics of working in a fast-paced
                agency environment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <SiteFooter />
    </div>
  );
}