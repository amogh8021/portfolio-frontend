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
    return () => { clearTimeout(t); clearTimeout(t2); };
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
        <Timeline />
        <GitHub />
        <Achievements />
        <Contact />
        <Footer moveCount={moveCount} />
      </motion.main>

      {/* Chess quote toast */}
      <AnimatePresence>
        {quote && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 left-1/2 z-[120] max-w-md rounded-full border border-ink/10 bg-paper-50/95 px-6 py-3 text-center text-sm text-ink/70 shadow-lg backdrop-blur-md"
          >
            <span className="font-serif italic">{quote}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
