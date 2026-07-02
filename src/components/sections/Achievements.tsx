import { motion } from 'framer-motion';
import { achievements } from '../../data/content';
import SectionHeading from '../SectionHeading';

export default function Achievements() {
  return (
    <section className="section-pad relative">
      <div className="container-px">
        <SectionHeading
          eyebrow="Achievements"
          title={
            <>
              Not certificates —<br />
              <span className="text-ink/40">positions earned.</span>
            </>
          }
          description="The things that matter are not paper. They are the habits, the problems, and the consistency that compound over time."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-paper-50 p-8 transition-colors duration-500 hover:bg-paper"
            >
              {/* 8x8 grid hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(201,162,39,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,162,39,0.05) 1px, transparent 1px)',
                  backgroundSize: 'calc(100% / 8) calc(100% / 8)',
                }}
                aria-hidden
              />
              <div className="relative">
                <p className="font-serif text-5xl font-light text-ink">{a.value}</p>
                <p className="mt-3 text-sm font-medium text-ink">{a.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/50">{a.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
