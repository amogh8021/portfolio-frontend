import { motion } from 'framer-motion';
import { aboutParagraphs } from '../../data/content';
import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-px">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              I write code the way I play chess —<br />
              <span className="text-ink/40">one calculated move at a time.</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Story */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {aboutParagraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="body-lg">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Side — principles */}
          <div className="lg:col-span-5 lg:pl-8">
            <Reveal delay={0.2}>
              <div className="border-l border-ink/10 pl-6">
                <p className="eyebrow mb-6">Principles I play by</p>
                <ul className="space-y-5">
                  {[
                    ['Plan before you move', 'Sketch the architecture, list the failure modes, then open the editor.'],
                    ['Consider every reply', 'The obvious solution is often wrong. I look for the second and third reply before committing.'],
                    ['Break the position down', 'Large problems become small positions you can actually evaluate.'],
                    ['Stay calm in the endgame', 'A red build is a position to analyze, not a reason to panic.'],
                  ].map(([title, detail], i) => (
                    <motion.li
                      key={title}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * i }}
                      className="group"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-gold">{String(i + 1).padStart(2, '0')}</span>
                        <h3 className="font-serif text-lg font-medium text-ink">{title}</h3>
                      </div>
                      <p className="body-md mt-1.5 pl-8">{detail}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
