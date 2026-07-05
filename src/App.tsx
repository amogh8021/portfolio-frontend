import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Timeline from './components/sections/Timeline';
import GitHub from './components/sections/GitHub';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import { useEasterEggs } from './hooks/useEasterEggs';
import { chessQuotes } from './data/content';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const { boardFlipped, flipBoard, moveCount } = useEasterEggs();
  const [quote, setQuote] = useState<string | null>(null);

  // Random chess quote toast on visit
  useEffect(() => {
    if (!loaded) return;
    const t = setTimeout(() => {
      setQuote(chessQuotes[Math.floor(Math.random() * chessQuotes.length)]);
    }, 1200);
    const t2 = setTimeout(() => setQuote(null), 7000);
    return () => { 
      clearTimeout(t); 
      clearTimeout(t2); 
    };
  }, [loaded]);

  return (
    <>
      <AnimatePresence>
        {!loaded && <Loader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      <Cursor />
      <ScrollProgress />
      <Navbar onLogoFlip={flipBoard} />

      <motion.main
        animate={{ rotate: boardFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'center center' }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        
       
        <GitHub />
        
       
        <Timeline />
        
        <Achievements />
        <Contact />
        <Footer moveCount={moveCount} />
      </motion.main>

      {/* ================= Chess Quote Toast ================= */}
      <AnimatePresence>
        {quote && (
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.95,
              x: "-50%",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              x: "-50%",
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.95,
              x: "-50%",
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed bottom-6 left-1/2 z-[120] hidden max-w-lg items-center gap-3 rounded-2xl border border-gold/20 bg-paper/95 px-5 py-4 shadow-2xl backdrop-blur-xl md:flex"
          >
            {/* Chess Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-xl text-gold">
              ♞
            </div>

            <div>
              <p className="font-serif italic leading-relaxed text-ink/75">
                {quote}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                Daily Chess Thought
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}