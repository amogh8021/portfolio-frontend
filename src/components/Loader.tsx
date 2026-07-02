import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pawn } from './chess/Pieces';

export default function Loader({ onDone }: { onDone: () => void }) {
  const [stage, setStage] = useState<'move' | 'logo' | 'done'>('move');

  useEffect(() => {
    const t1 = setTimeout(() => setStage('logo'), 1400);
    const t2 = setTimeout(() => setStage('done'), 2400);
    const t3 = setTimeout(() => onDone(), 2900);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [onDone]);

  const squares = Array.from({ length: 8 });

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 8x8 mini board */}
          <div className="grid grid-cols-8 overflow-hidden rounded-sm border border-paper/10">
            {squares.map((_, i) => {
              const col = i;
              const isLight = col % 2 === 0;
              return (
                <div
                  key={i}
                  className={`h-6 w-6 sm:h-8 sm:w-8 ${isLight ? 'bg-ink-600' : 'bg-ink-700'}`}
                />
              );
            })}
          </div>

          {/* Pawn moving two squares */}
          <div className="relative mt-8 h-16 w-16">
            <motion.div
              className="absolute text-gold"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: [0, 0, 0],
                y: [0, 64, 64],
                opacity: [0, 1, 1],
              }}
              transition={{ duration: 1.2, times: [0, 0.6, 1], ease: [0.22, 1, 0.36, 1] }}
            >
              <Pawn className="h-16 w-16" />
            </motion.div>
          </div>

          <AnimatePresence>
            {stage === 'logo' && (
              <motion.div
                className="mt-10 text-center"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-serif text-2xl font-light tracking-tight text-paper">
                  Amogh Shrivastav
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-paper/40">
                  Java Full Stack Developer
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
