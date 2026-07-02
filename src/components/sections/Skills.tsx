import { motion } from 'framer-motion';
import { skillGroups } from '../../data/content';
import SectionHeading from '../SectionHeading';
import Reveal from '../Reveal';

const phaseIcons: Record<string, string> = {
  Opening: 'e4',
  Middlegame: 'Nf3',
  Position: 'O-O',
  Endgame: 'Qd1',
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative bg-paper-200/50">
      <div className="container-px">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              The phases of solving<br />
              <span className="text-ink/40">a software problem.</span>
            </>
          }
          description="Every project moves through phases. Here is how I think about the tools at each stage — the way a player thinks about opening, middlegame, and endgame."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.phase} delay={gi * 0.1}>
              <div className="group relative h-full bg-paper p-8 transition-colors duration-500 hover:bg-paper-50">
                {/* 8x8 grid hover overlay */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, rgba(201,162,39,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,162,39,0.06) 1px, transparent 1px)',
                    backgroundSize: 'calc(100% / 8) calc(100% / 8)',
                  }}
                  aria-hidden
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-gold">{phaseIcons[group.phase]}</span>
                      <h3 className="font-serif text-2xl font-medium text-ink">{group.phase}</h3>
                    </div>
                    <span className="font-mono text-xs text-ink/30">{group.items.length} pieces</span>
                  </div>
                  <p className="body-md mt-2">{group.subtitle}</p>

                  <div className="mt-8 space-y-5">
                    {group.items.map((item, ii) => (
                      <div key={item.name}>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-ink">{item.name}</span>
                          <span className="font-mono text-xs text-ink/40">{item.level}</span>
                        </div>
                        <div className="mt-2 h-px w-full bg-ink/10">
                          <motion.div
                            className="h-px bg-gold"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + ii * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
