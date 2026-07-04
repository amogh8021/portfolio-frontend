import { useEffect, useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
} from 'lucide-react';

import {
  profile,
  footerQuotes,
} from '../../data/content';

type FooterProps = {
  moveCount: number;
};

export default function Footer({
  moveCount,
}: FooterProps) {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(
      footerQuotes[
        Math.floor(
          Math.random() *
            footerQuotes.length
        )
      ]
    );
  }, []);

  return (
    <footer className="relative overflow-hidden bg-ink-900 text-paper">

      <div
        className="grid-texture-dark pointer-events-none absolute inset-0 opacity-20"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at top, rgba(201,162,39,.05), transparent 65%)',
        }}
        aria-hidden
      />

      <div className="container-px relative py-16">

        {/* Quote */}

        <div className="border-b border-paper/10 pb-14 text-center">

          <blockquote className="mx-auto max-w-3xl font-serif text-2xl font-light italic leading-relaxed text-paper/75">

            "{quote}"

          </blockquote>

          <p className="mt-5 text-xs uppercase tracking-[0.35em] text-gold/70">

            Final Position

          </p>

        </div>

        {/* Main Grid */}

        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-3">

          {/* About */}

          <div>

            <h3 className="font-serif text-xl text-paper">

              {profile.name}

            </h3>

            <p className="mt-2 text-sm text-paper/50">

              {profile.title}

            </p>

            <p className="mt-5 max-w-xs text-sm leading-7 text-paper/45">

              {profile.motto}

            </p>

          </div>

                    {/* Navigation */}

          <div>

            <p className="eyebrow mb-5 text-paper/40">
              Navigation
            </p>

            <ul className="space-y-3">

              {[
                ['About', '#about'],
                ['Skills', '#skills'],
                ['Projects', '#projects'],
                ['Strategic Moves', '#moves'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-2 text-sm text-paper/50 transition-all duration-300 hover:text-gold"
                  >
                    <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-5" />
                    {label}
                  </a>
                </li>
              ))}

            </ul>

            {/* Social Links */}

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href={`mailto:${profile.email}`}
                className="text-paper/40 transition-all duration-300 hover:text-gold hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/40 transition-all duration-300 hover:text-gold hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/40 transition-all duration-300 hover:text-gold hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/40 transition-all duration-300 hover:text-gold hover:-translate-y-1"
                aria-label="Resume"
              >
                <FileDown size={18} />
              </a>

            </div>

          </div>

          {/* Journey */}

          <div>

            <p className="eyebrow mb-5 text-paper/40">
              Journey Notation
            </p>

            <div className="space-y-3 font-mono text-xs">

              <div className="flex justify-between border-b border-paper/5 pb-2">
                <span className="text-gold">1. e4</span>
                <span className="text-paper/40">
                  Programming Fundamentals
                </span>
              </div>

              <div className="flex justify-between border-b border-paper/5 pb-2">
                <span className="text-gold">2. Nf3</span>
                <span className="text-paper/40">
                  Java
                </span>
              </div>

              <div className="flex justify-between border-b border-paper/5 pb-2">
                <span className="text-gold">3. Bb5</span>
                <span className="text-paper/40">
                  Spring Boot
                </span>
              </div>

              <div className="flex justify-between border-b border-paper/5 pb-2">
                <span className="text-gold">4. O-O</span>
                <span className="text-paper/40">
                  Full Stack Development
                </span>
              </div>

              <div className="flex justify-between border-b border-paper/5 pb-2">
                <span className="text-gold">5. Re1</span>
                <span className="text-paper/40">
                  Internship Journey
                </span>
              </div>

            </div>

            <div className="mt-8 rounded-xl border border-paper/10 bg-paper/5 p-5">

              <p className="text-xs uppercase tracking-[0.25em] text-paper/40">
                Tech Stack
              </p>

              <p className="mt-3 text-sm leading-7 text-paper/50">
                React • TypeScript • Spring Boot • Java •
                MySQL • Docker • Git • REST APIs
              </p>

            </div>

          </div>

        </div>

                {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 border-t border-paper/10 pt-8 md:flex-row">

          <div>

            <p className="text-sm text-paper/35">
              © {new Date().getFullYear()} {profile.name}.
              Built with React, TypeScript & Spring Boot.
            </p>

            <p className="mt-2 text-xs text-paper/25">
              Designed and developed from scratch with a focus on
              performance, accessibility, and clean engineering.
            </p>

          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">

            <div className="flex items-center gap-3">

              <span className="rounded-full border border-paper/10 px-3 py-1 font-mono text-xs text-paper/40">

                Move {moveCount}/40

              </span>

              <span className="h-4 w-px bg-paper/10" />

              <span className="text-xs text-paper/35">

                Press{' '}

                <kbd className="rounded border border-paper/20 bg-paper/5 px-1.5 py-0.5 font-mono text-[11px] text-paper/60">

                  C

                </kbd>

                {' '}to switch perspective

              </span>

            </div>

            <p className="text-xs italic text-gold/70">

              "The next move is yours."

            </p>

          </div>

        </div>

      </div>

    </footer>

  );

}