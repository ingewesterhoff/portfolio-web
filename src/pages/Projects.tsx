import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SiteFooter } from "../components/SiteFooter";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Projects() {
  const projects = [
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
    {
      title: "Tune In",
      client: "Theater Rotterdam",
      team: "Academic",
      image:
        "https://images.unsplash.com/photo-1668246636537-fdb8b26b495b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMHRoZWF0ZXIlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzYyNzg4NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "/projects/tunein",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#261e35] from-[39.904%] to-[#312545] to-[80.769%] text-white">
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-[188px] pt-40 sm:pt-44 md:pt-48 pb-24 sm:pb-28 md:pb-32 relative overflow-hidden">
        {/* Animated background elements */}
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
          className="absolute top-32 right-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#c4a9ff]/5 rounded-full blur-3xl"
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
          className="absolute bottom-32 left-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#c4a9ff]/5 rounded-full blur-3xl"
        />

        {/* Header */}
        <div className="mb-24 sm:mb-28 md:mb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 px-2 sm:px-0"
          >
            <h1 className="font-['Big_Shoulders_Display',sans-serif] font-bold text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px] xl:text-[100px] text-[#c4a9ff] tracking-[2.5px] sm:tracking-[3px] md:tracking-[5px] lg:tracking-[7px] xl:tracking-[8px] uppercase leading-[0.95] drop-shadow-[0_0_25px_rgba(196,169,255,0.4)] break-words hyphens-auto">
              PROJECTS
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex-1 h-[2px] sm:h-[2.5px] md:h-[3px] bg-gradient-to-r from-[#c4a9ff] to-transparent shadow-[0_0_10px_rgba(196,169,255,0.3)] origin-left min-w-[40px]"
            />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-5 md:gap-6 max-w-[1600px] mx-auto relative z-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={project.link}
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}