import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileDown } from 'lucide-react';
import { heroHeadlines, profile } from '../../data/content';
import { King } from '../chess/Pieces';

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroHeadlines.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Subtle board texture */}
      <div className="board-texture pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      {/* Grid texture */}
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      {/* Radial fade */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(201,162,39,0.04), transparent 60%)' }}
        aria-hidden
      />

      <div className="container-px relative grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Left — statement */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">{profile.title}</span>
          </motion.div>

          {/* Rotating headline */}
          <div className="mt-6 min-h-[1.1em] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={idx}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="heading-xl text-ink"
              >
                {heroHeadlines[idx]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="body-lg mt-8 max-w-xl"
          >
            Building software with strategy, precision and purpose. {profile.focus}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary group">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={profile.resumeUrl} className="btn-secondary group" download>
              <FileDown className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex items-center gap-3 text-ink/40"
          >
            <span className="text-xs uppercase tracking-widest">Scroll to begin</span>
            <motion.span
              className="h-8 w-px bg-ink/20"
              animate={{ scaleY: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top' }}
            />
          </motion.div>
        </div>

        {/* Right — king silhouette blending into code */}
        <div className="relative hidden h-[480px] lg:col-span-5 lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full"
          >
            {/* King silhouette */}
            <div className="absolute inset-0 flex items-center justify-center">
              <King className="h-72 w-72 text-ink/8" />
            </div>
            {/* Code overlay — fades in around the king */}
            <div className="absolute inset-0 flex items-center justify-center">
              <pre className="font-mono text-[10px] leading-relaxed text-ink/30 mask-fade-b">
{`@SpringBootApplication
public class Application {

  public static void main(String[] args) {
    // every move matters
    SpringApplication
      .run(Application.class, args);
  }

  @Bean
  Strategy strategy() {
    return new Strategy.Builder()
      .planFirst()
      .iterate()
      .build();
  }
}`}
              </pre>
            </div>
            {/* Gold accent line */}
            <motion.div
              className="absolute bottom-12 left-1/2 h-px bg-gold"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{ translateX: '-50%' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
