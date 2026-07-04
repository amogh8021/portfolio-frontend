import { motion } from 'framer-motion';
import { strategicMoves } from '../../data/content';
import SectionHeading from '../SectionHeading';

export default function Timeline() {
  return (
    <section
      id="journey"
      className="section-pad relative overflow-hidden bg-ink text-paper"
    >
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,162,39,.12) 1px, transparent 1px),linear-gradient(90deg, rgba(201,162,39,.12) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Journey"
          title={
            <>
              Every developer has
              <br />
              <span className="text-paper/40">
                a sequence of moves.
              </span>
            </>
          }
          description="Like a chess game, every decision changes the position. These are the milestones that shaped my journey from learning programming to building full-stack applications."
        />

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-gold via-paper/20 to-transparent lg:left-1/2 lg:-translate-x-1/2" />
          
          {strategicMoves.map((m, i) => {
            const left = i % 2 === 0;

            return (
              <motion.div
                key={m.move}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative mb-16 flex ${
                  left ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                <div className="absolute left-5 top-10 z-20 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-ink shadow-lg shadow-gold/10">
                    <span className="font-mono text-xs text-gold">
                      {m.notation}
                    </span>
                  </div>
                </div>

                <div
                  className={`ml-16 w-full lg:ml-0 lg:w-[46%] ${
                    left ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-3xl border border-paper/10 bg-paper/5 p-8 backdrop-blur transition-all duration-500 hover:border-gold/40 hover:bg-paper/10 hover:-translate-y-1">
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(201,162,39,.05) 1px, transparent 1px),linear-gradient(to bottom, rgba(201,162,39,.05) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                    />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-xs text-gold">
                          Move {m.move}
                        </span>
                        <span className="font-mono text-xs text-paper/40">
                          {m.year}
                        </span>
                      </div>

                      <h3 className="mt-6 font-serif text-3xl text-paper">
                        {m.title}
                      </h3>

                      <p className="mt-4 leading-relaxed text-paper/60">
                        {m.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-24 flex flex-col items-center"
        >
          <div className="mb-8 grid grid-cols-8 overflow-hidden rounded-md border border-paper/10">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className={`h-3 w-3 ${
                  (Math.floor(i / 8) + i) % 2 === 0
                    ? 'bg-paper/10'
                    : 'bg-gold/20'
                }`}
              />
            ))}
          </div>

          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="font-serif text-3xl text-paper"
          >
            The Game Continues...
          </motion.p>

          <p className="mt-4 max-w-xl text-center text-base leading-relaxed text-paper/50">
            Every completed project prepares me for the next challenge.
            I'm currently building larger full-stack applications,
            sharpening my DSA skills, and preparing for software engineering internships.
          </p>

          <div className="mt-10 flex items-center gap-3">
            <span className="h-px w-12 bg-gold/50" />
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-paper/30">
              Next Move Loading...
            </span>
            <span className="h-px w-12 bg-gold/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}