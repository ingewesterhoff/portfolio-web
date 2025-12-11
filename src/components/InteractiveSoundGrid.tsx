import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  type: "particle" | "note";
  color: string;
}

const tiles = [
  { color: "#ee3400", name: "red" },
  { color: "#b20de9", name: "purple" },
  { color: "#ffffff", name: "white" },
  { color: "#29b8ff", name: "cyan" },
  { color: "#d5ff00", name: "lime" },
  { color: "#6be5a4", name: "mint" },
  { color: "#3004ff", name: "blue" },
  { color: "#c4005a", name: "pink" },
  { color: "#6c1790", name: "violet" },
];

const musicNotes = ["♪", "♫", "♬", "♩", "♭", "♯"];

export function InteractiveSoundGrid() {
  const [hoveredTile, setHoveredTile] = useState<number | null>(
    null,
  );
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleMouseEnter = (index: number, color: string) => {
    setHoveredTile(index);

    // Generate particles and music notes that fly across the entire screen
    const newParticles: Particle[] = [];
    for (let i = 0; i < 24; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: Math.random() * 200 - 50, // -50 to 150 for full screen coverage
        y: Math.random() * 200 - 50,
        type: i < 18 ? "particle" : "note",
        color: color,
      });
    }
    setParticles(newParticles);

    // Clear particles after animation
    setTimeout(() => setParticles([]), 2500);
  };

  const handleMouseLeave = () => {
    setHoveredTile(null);
  };

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden p-6 sm:p-8 md:p-10">
      {/* Particles Container - Full screen */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 0,
            }}
            animate={{
              x: `${particle.x}vw`,
              y: `${particle.y}vh`,
              opacity: 0,
              scale: particle.type === "particle" ? 1 : 1.5,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2 + Math.random() * 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute pointer-events-none z-50 will-change-transform"
            style={{ left: "50%", top: "50%" }}
          >
            {particle.type === "particle" ? (
              <div
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                style={{
                  backgroundColor: particle.color,
                  boxShadow: `0 0 6px ${particle.color}`,
                }}
              />
            ) : (
              <span
                className="text-[18px] sm:text-[22px] md:text-[28px]"
                style={{
                  color: particle.color,
                  textShadow: `0 0 8px ${particle.color}`,
                }}
              >
                {
                  musicNotes[
                    Math.floor(
                      Math.random() * musicNotes.length,
                    )
                  ]
                }
              </span>
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Grid Container - fully responsive and perfectly square */}
      <div className="grid grid-cols-3 gap-[8px] sm:gap-[10px] md:gap-[12px] relative z-10 w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] mx-auto">
        {tiles.map((tile, index) => (
          <motion.div
            key={index}
            className="cursor-pointer relative aspect-square w-full"
            style={{
              backgroundColor:
                hoveredTile === index ? tile.color : tile.color,
              opacity: hoveredTile === index ? 1 : 0.4,
              boxShadow:
                hoveredTile === index
                  ? `0 0 20px ${tile.color}, 0 0 40px ${tile.color}80, 0 0 60px ${tile.color}60`
                  : "none",
            }}
            onMouseEnter={() =>
              handleMouseEnter(index, tile.color)
            }
            onMouseLeave={handleMouseLeave}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}