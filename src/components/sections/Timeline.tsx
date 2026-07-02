import { motion } from 'framer-motion';
import { strategicMoves } from '../../data/content';

export default function Timeline() {
  return (
    <section id="moves" className="section-pad relative bg-ink text-paper">
      <div className="grid-texture-dark pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="container-px relative">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-widest text-paper/50">Strategic Moves</span>
          </div>
          <h2 className="heading-lg mt-5 text-paper">
            The moves that got me<br />
            <span className="text-paper/40">to this position.</span>
          </h2>
          <p className="mt-5 text-lg font-light leading-relaxed text-paper/60">
            A chess game is recorded in notation — each move a small decision that shapes everything after. Here is mine, so far.
          </p>
        </div>

        {/* Notation-style timeline */}
        <div className="mt-16 max-w-3xl">
          <div className="space-y-0">
            {strategicMoves.map((m, i) => (
              <motion.div
                key={m.move}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative grid grid-cols-[auto_1fr] gap-6 border-l border-paper/10 pb-10 pl-8 last:border-l-transparent last:pb-0"
              >
                {/* Node */}
                <div className="absolute left-0 top-0 flex h-4 w-4 -translate-x-1/2 items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-paper/20 transition-colors duration-300 group-hover:bg-gold" />
                </div>

                {/* Notation */}
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-gold">{m.move}.</span>
                  <span className="font-mono text-sm text-paper/40">{m.notation}</span>
                </div>

                {/* Content */}
                <div className="mt-2">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-2xl font-light text-paper">{m.title}</h3>
                    <span className="font-mono text-xs text-paper/30">{m.year}</span>
                  </div>
                  <p className="mt-2 text-base font-light leading-relaxed text-paper/50">{m.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 font-mono text-sm text-paper/30"
        >
          ... the game continues.
        </motion.p>
      </div>
    </section>
  );
}
