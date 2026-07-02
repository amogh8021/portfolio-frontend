import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/content';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Moves', href: '#moves' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onLogoFlip }: { onLogoFlip: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-[90]"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled ? 'bg-paper/80 backdrop-blur-md border-b border-ink/5' : 'bg-transparent'
        }`}
      >
        <nav
          className={`container-px flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'py-3' : 'py-5'
          }`}
        >
          {/* Logo — double click to flip board */}
          <button
            onDoubleClick={onLogoFlip}
            className="group flex items-center gap-2.5"
            aria-label="Amogh Shrivastav — home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink text-gold transition-transform duration-500 group-hover:rotate-180">
              <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M16 6.5c-.8 0-1.5.7-1.5 1.5 0 .3.1.6.3.8L13 11l-2-1.2c-.2-.1-.4 0-.4.2v2.4c0 .2.2.3.4.2L13 11.4l1.8 2.2-1.2 3.2h-3.1c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5h11c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5h-3.1l-1.2-3.2L19 11.4l2 1.2c.2.1.4 0 .4-.2V10c0-.2-.2-.3-.4-.2L19 11l-1.8-2.2c.2-.2.3-.5.3-.8 0-.8-.7-1.5-1.5-1.5z" />
              </svg>
            </span>
            <span className="font-serif text-lg font-medium tracking-tight text-ink">
              {profile.name.split(' ')[0]}
              <span className="text-gold">.</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline text-sm font-medium text-ink/70 transition-colors hover:text-ink">
              GitHub
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`h-px w-6 bg-ink transition-all ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-px w-6 bg-ink transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`h-px w-6 bg-ink transition-all ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-paper/95 backdrop-blur-md md:hidden"
          >
            <div className="container-px flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium text-ink/80"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
