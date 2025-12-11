import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SiteFooter } from "../components/SiteFooter";
import { motion } from "motion/react";
import { useState } from "react";

export function Creative() {
  const [selectedImage, setSelectedImage] = useState<
    string | null
  >(null);

  const creativeImages = [
    "https://images.unsplash.com/photo-1704022810195-de7199db478c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGRlc2lnbnxlbnwxfHx8fDE3NjI4NTMxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1605007622396-30df096020b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NjI5MTU3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1654865433650-23e71f161b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc2Mjg1NTI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1736175549681-c24c552da1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwY29sb3JmdWx8ZW58MXx8fHwxNzYyODUyMTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1616782541155-9aafbfa7c97e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MjkzNzU2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1761746395517-17db0c59d495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHNrZXRjaCUyMGRyYXdwbmd8ZW58MXx8fHwxNzYyOTUzOTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1723242016990-bd6ac316b139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnQlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzYyODk3MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1752361902570-b9ae1a2fbfbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBtb2NrdXAlMjBjb25jZXB0fGVufDF8fHx8MTc2Mjk1MzkyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1716212128433-57719f2ac093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGV4cGVyaW1lbnQlMjBhcnR8ZW58MXx8fHwxNzYyODg1NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1607117982290-686bb46893df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXN1YWwlMjBhcnQlMjBwcm9qZWN0fGVufDF8fHx8MTc2Mjk1MzkyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1735827946198-09b6ea16c2db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMGNvbXBvc2l0aW9ufGVufDF8fHx8MTc2Mjk1MzkyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1649925773161-e9797244713d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBlcmltZW50YWwlMjBkZXNpZ258ZW58MXx8fHwxNzYyOTUzOTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
              CREATIVE DUMP
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden sm:block flex-1 h-[2px] sm:h-[2.5px] md:h-[3px] bg-gradient-to-r from-[#c4a9ff] to-transparent shadow-[0_0_10px_rgba(196,169,255,0.3)] origin-left"
            />
          </motion.div>
        </div>

        {/* Image Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-[1600px] mx-auto relative z-10">
          {creativeImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.1,
              }}
              className="w-full"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden cursor-pointer rounded-[16px] sm:rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_30px_rgba(196,169,255,0.2)] transition-shadow aspect-square"
                onClick={() => setSelectedImage(image)}
              >
                <ImageWithFallback
                  src={image}
                  alt={`Creative work ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20">
        <SiteFooter />
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full cursor-default"
          >
            <ImageWithFallback
              src={selectedImage}
              alt="Full screen preview"
              className="w-full max-h-[85vh] object-contain rounded-[20px] shadow-[0_30px_100px_rgba(196,169,255,0.3)]"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#c4a9ff]/20 hover:bg-[#c4a9ff]/30 backdrop-blur-sm border border-[#c4a9ff]/50 flex items-center justify-center transition-all"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}