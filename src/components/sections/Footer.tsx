import { useEffect, useState } from 'react';
import { profile, footerQuotes } from '../../data/content';

export default function Footer({ moveCount }: { moveCount: number }) {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Random quote on every load/refresh
    setQuote(footerQuotes[Math.floor(Math.random() * footerQuotes.length)]);
  }, []);

  return (
    <footer className="relative bg-ink-900 text-paper/50">
      <div className="grid-texture-dark pointer-events-none absolute inset-0 opacity-20" aria-hidden />

      <div className="container-px relative py-16">
        {/* Top — quote */}
        <div className="border-b border-paper/10 pb-12 text-center">
          <p className="mx-auto max-w-2xl font-serif text-xl font-light italic leading-relaxed text-paper/70">
            "{quote}"
          </p>
        </div>

        {/* Middle — chess notation + links */}
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-serif text-lg font-medium text-paper">{profile.name}</p>
            <p className="mt-1 text-sm text-paper/40">{profile.title}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/40">
              {profile.motto}
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="eyebrow mb-4 text-paper/30">Navigate</p>
            <ul className="space-y-2.5 text-sm">
              {[
                ['About', '#about'],
                ['Skills', '#skills'],
                ['Projects', '#projects'],
                ['Strategic Moves', '#moves'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-paper/50 transition-colors hover:text-gold">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Chess notation easter egg */}
          <div>
            <p className="eyebrow mb-4 text-paper/30">Notation</p>
            <div className="space-y-1.5 font-mono text-xs text-paper/40">
              <p>1. e4 e5</p>
              <p>2. Nf3 Nc6</p>
              <p>3. Bb5 a6</p>
              <p>4. Ba4 Nf6</p>
              <p className="text-gold/60">5. O-O Be7</p>
              <p className="text-paper/20">... the game continues</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-paper/10 pt-8 md:flex-row">
          <p className="text-xs text-paper/30">
            © {new Date().getFullYear()} {profile.name}. All moves reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-paper/30">
              Move {moveCount}/40
            </span>
            <span className="h-3 w-px bg-paper/10" />
            <span className="text-xs text-paper/30">
              Press <kbd className="rounded border border-paper/20 px-1.5 py-0.5 font-mono text-[10px]">C</kbd> to flip the board
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
