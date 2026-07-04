import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pawn } from "./chess/Pieces";

export default function Loader({
  onDone,
}: {
  onDone: () => void;
}) {
  const [stage, setStage] = useState<
    "move" | "text" | "logo" | "done"
  >("move");

  useEffect(() => {
    const t1 = setTimeout(() => setStage("text"), 1400);
    const t2 = setTimeout(() => setStage("logo"), 2500);
    const t3 = setTimeout(() => setStage("done"), 3800);
    const t4 = setTimeout(() => onDone(), 4300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onDone]);

  // Chess square dimensions based on responsive screens
  // sm breakpoint (640px) par h-10 w-10 hai, fallback me h-8 w-8 hai.
  const squareSizeCls = "h-8 w-8 sm:h-10 sm:w-10";

  return (
    <AnimatePresence>
      {stage !== "done" && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center overflow-hidden bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background */}
          <div className="absolute inset-0 grid-texture-dark opacity-[0.06]" />

          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [0.08, 0.14, 0.08],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            style={{
              background:
                "radial-gradient(circle at center, rgba(201,162,39,.18), transparent 70%)",
            }}
          />

          <div className="relative flex flex-col items-center">

            {/* Chess Board Container */}
            <div className="relative">
              <div className="grid grid-cols-8 overflow-hidden rounded-md border border-paper/10 shadow-2xl">
                {Array.from({ length: 64 }).map((_, i) => {
                  const row = Math.floor(i / 8);
                  const col = i % 8;
                  const light = (row + col) % 2 === 0;

                  return (
                    <div
                      key={i}
                      className={`${squareSizeCls} ${
                        light ? "bg-[#2b2b2b]" : "bg-[#1f1f1f]"
                      }`}
                    />
                  );
                })}
              </div>

              {/* 1. ACCURATE GOLD HIGHLIGHT (Moves to e4 target: row index 4, col index 4) */}
              <motion.div
                className="absolute rounded-sm bg-gold/20 h-8 w-8 sm:h-10 sm:w-10"
                style={{
                  // Start target: 4th index column (e-file)
                  left: "calc(4 * 100% / 8)",
                }}
                initial={{ top: "calc(6 * 100% / 8)" }} // Starts at e2
                animate={{
                  top: "calc(4 * 100% / 8)", // Animates to e4
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* 2. ACCURATE PAWN (Starts at e2, moves exactly 2 squares up to e4) */}
              <motion.div
                className="absolute text-gold flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 z-10"
                style={{
                  left: "calc(4 * 100% / 8)", // 5th column (e-file)
                }}
                initial={{
                  top: "calc(6 * 100% / 8)", // Row 7 from index 0 (White pawn start line)
                  opacity: 0,
                }}
                animate={{
                  top: "calc(4 * 100% / 8)", // Moves up 2 blocks to row index 4 (e4)
                  opacity: [0, 1, 1],
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Pawn className="h-[80%] w-[80%] drop-shadow-[0_0_15px_rgba(201,162,39,.5)]" />
              </motion.div>
            </div>

            {/* Chess Notation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: stage !== "move" ? 1 : 0,
                y: stage !== "move" ? 0 : 15,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mt-10 font-mono text-sm tracking-[0.3em] text-gold"
            >
              1. e4
            </motion.div>

            {/* Motto Section */}
            <div className="min-h-[160px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {stage !== "move" && (
                  <motion.div
                    className="mt-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.h2
                      className="max-w-xl font-serif text-3xl leading-tight text-paper sm:text-4xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      Every Great Product
                    </motion.h2>

                    <motion.h2
                      className="mt-2 font-serif text-3xl text-paper sm:text-4xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Begins With
                    </motion.h2>

                    <motion.h2
                      className="mt-2 font-serif text-3xl text-gold sm:text-4xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      The Right Move.
                    </motion.h2>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Gold Divider */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: stage === "logo" ? 160 : 0,
                opacity: stage === "logo" ? 1 : 0,
              }}
              transition={{ duration: 0.6 }}
              className="mt-4 h-px bg-gold"
            />

            {/* Name Reveal */}
            <div className="min-h-[120px] flex items-center justify-center">
              <AnimatePresence>
                {stage === "logo" && (
                  <motion.div
                    className="mt-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.h1
                      className="font-serif text-4xl font-light tracking-tight text-paper sm:text-5xl"
                      initial={{ letterSpacing: "0.3em", opacity: 0 }}
                      animate={{ letterSpacing: "0.02em", opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      Amogh Shrivastav
                    </motion.h1>

                    <motion.p
                      className="mt-4 text-xs uppercase tracking-[0.45em] text-paper/45"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Java Full Stack Developer
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Loading Indicator */}
            <motion.div
              className="mt-6 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: stage === "logo" ? 1 : 0 }}
              transition={{ delay: 0.3 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-2 w-2 rounded-full bg-gold"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}