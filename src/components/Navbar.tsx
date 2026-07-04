import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Download,
  ArrowUpRight,
} from "lucide-react";
import { profile } from "../data/content";

// 'Moves' ko badal kar 'Journey' kiya hai jo direct <Timeline /> component (id="journey") ko link karega
const links = [
  { label: "About", href: "#about", move: "e4" },
  { label: "Skills", href: "#skills", move: "Nf3" },
  { label: "Projects", href: "#projects", move: "Bb5" },
  { label: "Journey", href: "#journey", move: "O-O" }, // Recruiter-friendly update 🚀
  { label: "Contact", href: "#contact", move: "Qg7#" },
];

export default function Navbar({
  onLogoFlip,
}: {
  onLogoFlip: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  /* ---------------- Scroll Effect ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop - 120;
        const height = (section as HTMLElement).offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-x-0 top-0 z-[100]"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-gold/10 bg-paper/80 shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav
          className={`container-px flex items-center justify-between transition-all duration-500 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          {/* ---------------- Logo ---------------- */}
          <button
            onDoubleClick={onLogoFlip}
            className="group flex items-center gap-4"
          >
            <motion.div
              whileHover={{
                rotateY: 180,
                scale: 1.08,
              }}
              transition={{ duration: 0.6 }}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-ink text-gold shadow-lg"
            >
              ♔
            </motion.div>

            <div className="text-left">
              <h2 className="font-serif text-xl tracking-tight text-ink">
                Amogh
              </h2>

              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/45">
                Full Stack Developer
              </p>
            </div>
          </button>

          {/* ---------------- Desktop Links ---------------- */}
          <div className="hidden items-center gap-10 lg:flex">
            {links.map((item) => {
              const current = active === item.href.replace("#", "");

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative flex flex-col items-center"
                >
                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                      current
                        ? "text-gold"
                        : "text-ink/65 group-hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </span>

                  <span className="mt-1 font-mono text-[10px] text-ink/25 opacity-0 transition duration-300 group-hover:opacity-100">
                    {item.move}
                  </span>

                  <motion.span
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-2 h-[2px] rounded-full bg-gold ${
                      current ? "w-full" : "w-0"
                    }`}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 28,
                    }}
                  />
                </a>
              );
            })}
          </div>

          {/* ---------------- Right Side ---------------- */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-ink/10 p-2 transition hover:border-gold/40 hover:bg-gold/5"
            >
              <Github className="h-5 w-5 text-ink/70" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-ink/10 p-2 transition hover:border-gold/40 hover:bg-gold/5"
            >
              <Linkedin className="h-5 w-5 text-ink/70" />
            </a>

            <a
              href={profile.resumeUrl}
              className="group ml-2 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.03]"
            >
              <Download className="h-4 w-4" />
              Resume
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* ---------------- Mobile Button ---------------- */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-ink/10 p-2 transition hover:bg-paper-200 lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6 text-ink" />
            ) : (
              <Menu className="h-6 w-6 text-ink" />
            )}
          </button>
        </nav>
      </div>

      {/* ================= Mobile Menu ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden border-b border-gold/10 bg-paper/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-px py-6">
              <div className="space-y-1">
                {links.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    className="group flex items-center justify-between rounded-xl px-4 py-4 transition hover:bg-gold/5"
                  >
                    <div>
                      <p className="font-medium text-ink">
                        {item.label}
                      </p>

                      <p className="mt-1 font-mono text-xs text-gold">
                        {item.move}
                      </p>
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-ink/30 transition group-hover:text-gold" />
                  </motion.a>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-6">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink/10"
                >
                  <Github className="h-5 w-5 text-ink/70" />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink/10"
                >
                  <Linkedin className="h-5 w-5 text-ink/70" />
                </a>

                <a
                  href={profile.resumeUrl}
                  className="ml-auto inline-flex items-center gap-2 rounded-xl bg-gold px-4 py-3 text-sm font-medium text-white"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}