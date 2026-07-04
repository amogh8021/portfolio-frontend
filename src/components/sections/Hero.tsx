import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileDown } from 'lucide-react';
import { heroHeadlines, profile } from '../../data/content';
import { King } from '../chess/Pieces';

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Rotating subtitle
  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % heroHeadlines.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  // Mouse parallax
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  // Particles generator array
  const particles = Array.from({ length: 10 });

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      
      {/* BACKGROUND LAYERS & TEXTURES */}
      <div className="board-texture pointer-events-none absolute inset-0 opacity-50" />
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 70% 40%, rgba(201,162,39,0.05), transparent 60%)',
        }}
      />

      {/* 7. BACKGROUND PARTICLES (Subtle floating gold dots) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-gold/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-px relative grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-7">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1 text-xs text-gold"
          >
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            Open for Internship Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-serif text-5xl md:text-6xl text-ink"
          >
            Hi, I’m <span className="text-gold">{profile.name}</span>
          </motion.h1>

          {/* Rotating subtitle */}
          <div className="mt-5 min-h-[1.2em] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-lg text-ink/60"
              >
                {heroHeadlines[idx]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/60"
          >
            Backend-focused Software Engineer specializing in{' '}
            <span className="text-ink font-medium">Java, Spring Boot, React</span>{' '}
            and system design. I build scalable applications, APIs, and
            full-stack products with clean architecture.
          </motion.p>

          {/* Tech stack pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {['Java', 'Spring Boot', 'React', 'TypeScript', 'MySQL'].map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-xs text-ink/70"
              >
                {t}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary group">
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a href={profile.resumeUrl} className="btn-secondary group" download>
              <FileDown className="h-4 w-4" />
              Download Resume
            </a>

            <a
              href="#contact"
              className="text-sm text-ink/60 underline underline-offset-4 hover:text-gold"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative hidden h-[620px] lg:col-span-5 lg:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex h-full w-full items-center justify-center"
            style={{
              transform: `translate(${mouse.x * 12}px, ${mouse.y * 12}px)`,
            }}
          >
            
            {/* 2. AMBIENT GLOW (Softer, luxurious radial glow) */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.65, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[420px] w-[420px] rounded-full bg-gold/10 blur-[130px]"
            />

            {/* 5. RINGS VISIBILITY UPGRADED (Opacity 5% -> 8%) */}
            {/* Decorative Ring */}
            <div className="absolute h-[380px] w-[380px] rounded-full border border-gold/8" />
            {/* Secondary Ring */}
            <div className="absolute h-[480px] w-[480px] rounded-full border border-ink/8" />

            {/* 6. CHESS KING BEHIND IMAGE (Silhouette with 5% opacity) */}
            <div className="absolute z-0 flex items-center justify-center opacity-[0.05]">
              <King className="h-[420px] w-[420px] text-gold" />
            </div>

            {/* BONUS: FLOATING TECH LABELS WITH 20% OPACITY */}
            <div className="absolute inset-0 pointer-events-none font-mono text-xs text-gold/20 select-none z-10">
              <motion.span animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-[15%] left-[10%]">Java</motion.span>
              <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-[20%] left-[5%]">React</motion.span>
              <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 5.5, repeat: Infinity }} className="absolute top-[20%] right-[5%]">Spring</motion.span>
              <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 6.5, repeat: Infinity }} className="absolute bottom-[25%] right-[10%]">MySQL</motion.span>
            </div>

            {/* 1, 3, 8, 9. IMAGE CONTAINER UPGRADED (Bigger 365px, 8s Slow Animation, Luxury Border, Zoom Crop) */}
            <motion.div
              animate={{
                y: [-6, 6, -6],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute z-20 flex h-[365px] w-[365px] items-center justify-center overflow-hidden rounded-full border border-white/90 shadow-[0_0_120px_rgba(201,162,39,0.18)]"
            >
              <img 
                src="/hero/heroImage.png" 
                alt={profile.name}
                className="h-full w-full object-cover scale-110" // scale-110 zooms into the image slightly for Chest Up crop
              />
            </motion.div>

            {/* 4. CODE PANEL OVERLAP (Apple Style Bottom-Right Overlap) */}
            <motion.div
              animate={{
                y: [4, -4, 4],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-12 right-2 z-30 hidden xl:flex flex-col gap-1 rounded-lg border border-ink/10 bg-white/70 backdrop-blur-md p-3 shadow-xl max-w-[180px] font-mono text-[10px] text-ink/70"
            >
              <div className="flex gap-1.5 border-b border-ink/5 pb-1.5 mb-1">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                <span className="h-2 w-2 rounded-full bg-green-400/70" />
              </div>
              <p className="text-gold font-medium">@StrategyEngine</p>
              <p>Move move = new Move("e4");</p>
              <p className="text-emerald-600">// King Checkmate</p>
            </motion.div>

            {/* Accent Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 220 }}
              transition={{
                duration: 1,
                delay: 0.8,
              }}
              className="absolute top-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
            />
          </motion.div>
        </div>
      </div>

      {/* 10. UPGRADED SCROLL INDICATOR (More subtle, luxury touch) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/30 hover:text-gold/60 transition-colors duration-300 cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>
        <motion.div 
          className="flex h-7 w-4 justify-center rounded-full border border-ink/20 pt-1"
        >
          <motion.div 
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="h-1.5 w-1 rounded-full bg-ink/40"
          />
        </motion.div>
      </motion.div>

      {/* MOBILE FALLBACK HERO TEXT */}
      <div className="mt-12 block lg:hidden text-center w-full">
        <h2 className="font-serif text-3xl text-ink">
          {profile.name}
        </h2>
        <p className="mt-3 text-sm text-ink/60">
          Backend Developer • Java • Spring Boot • React
        </p>
      </div>

      {/* SOFT BACKGROUND ACCENT BLOBS */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[400px] w-[400px] rounded-full bg-gold/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-ink/5 blur-[120px]" />

    </section>
  );
}