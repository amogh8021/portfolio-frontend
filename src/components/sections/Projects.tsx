import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Plus, X } from 'lucide-react';
import { projects, type Project } from '../../data/content';
import SectionHeading from '../SectionHeading';

const accentMap = {
  gold: { text: 'text-gold', bg: 'bg-gold', border: 'border-gold/30', soft: 'bg-gold/8' },
  forest: { text: 'text-forest', bg: 'bg-forest', border: 'border-forest/30', soft: 'bg-forest/8' },
  ink: { text: 'text-ink', bg: 'bg-ink', border: 'border-ink/30', soft: 'bg-ink/5' },
};

const statusLabel: Record<Project['status'], string> = {
  shipped: 'Shipped',
  'in-progress': 'In Progress',
  planned: 'On the Board',
};

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const a = accentMap[project.accent];
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-paper-50 transition-all duration-500 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_20px_60px_-20px_rgba(17,17,17,0.15)]"
    >
      {/* 8x8 grid hover overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(201,162,39,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,162,39,0.05) 1px, transparent 1px)',
          backgroundSize: 'calc(100% / 8) calc(100% / 8)',
        }}
        aria-hidden
      />

      {/* Top — visual band */}
      <div className={`relative h-44 overflow-hidden ${a.soft}`}>
        <div className="grid-texture absolute inset-0 opacity-40" aria-hidden />
        <div className="absolute inset-0 flex items-center justify-between px-8">
          <div>
            <span className={`inline-flex items-center gap-1.5 rounded-full ${a.soft} px-3 py-1 text-xs font-medium ${a.text}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${a.bg}`} />
              {statusLabel[project.status]}
            </span>
          </div>
          <span className="font-mono text-6xl font-light text-ink/8">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="relative flex flex-1 flex-col p-8">
        <h3 className="font-serif text-3xl font-medium text-ink">{project.name}</h3>
        <p className={`mt-1 text-sm font-medium ${a.text}`}>{project.tagline}</p>
        <p className="body-md mt-4 flex-1">{project.problem}</p>

        {/* Tech stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((t) => (
            <span key={t} className="rounded-md border border-ink/10 px-2.5 py-1 font-mono text-xs text-ink/60">
              {t}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="rounded-md border border-ink/10 px-2.5 py-1 font-mono text-xs text-ink/40">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={onOpen}
            className="group/btn inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-gold"
          >
            <Plus className="h-4 w-4 transition-transform group-hover/btn:rotate-90" />
            View details
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/50 transition-colors hover:text-ink"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
          {project.live && project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/50 transition-colors hover:text-ink"
            >
              <ArrowUpRight className="h-4 w-4" />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const a = accentMap[project.accent];
  return (
    <motion.div
      className="fixed inset-0 z-[150] flex items-start justify-center overflow-y-auto bg-ink/40 p-4 backdrop-blur-sm md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative my-8 w-full max-w-3xl rounded-2xl bg-paper-50 shadow-2xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink/60 transition-colors hover:bg-ink hover:text-paper"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className={`h-32 rounded-t-2xl ${a.soft}`}>
          <div className="grid-texture h-full w-full rounded-t-2xl opacity-40" aria-hidden />
        </div>

        <div className="p-8 md:p-10">
          <span className={`inline-flex items-center gap-1.5 rounded-full ${a.soft} px-3 py-1 text-xs font-medium ${a.text}`}>
            {statusLabel[project.status]}
          </span>
          <h3 className="heading-md mt-4">{project.name}</h3>
          <p className={`mt-1 text-base font-medium ${a.text}`}>{project.tagline}</p>

          <div className="mt-8 space-y-7">
            {[
              ['Problem', project.problem],
              ['Solution', project.solution],
              ['Architecture', project.architecture],
            ].map(([label, text]) => (
              <div key={label}>
                <p className="eyebrow mb-2">{label}</p>
                <p className="body-md">{text}</p>
              </div>
            ))}

            {/* Features */}
            <div>
              <p className="eyebrow mb-3">Features</p>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink/70">
                    <span className={`mt-1.5 h-1 w-1 flex-shrink-0 rounded-full ${a.bg}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div>
              <p className="eyebrow mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <span key={t} className="rounded-md border border-ink/10 bg-paper px-3 py-1.5 font-mono text-xs text-ink/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges + Lessons */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-ink/8 p-5">
                <p className="eyebrow mb-2">Challenges</p>
                <p className="text-sm leading-relaxed text-ink/70">{project.challenges}</p>
              </div>
              <div className="rounded-xl border border-ink/8 p-5">
                <p className="eyebrow mb-2">Lessons Learned</p>
                <p className="text-sm leading-relaxed text-ink/70">{project.lessons}</p>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 border-t border-ink/8 pt-6">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              )}
              {project.live && project.live !== '#' && (
                <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">
                  <ArrowUpRight className="h-4 w-4" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-px">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Positions I have played<br />
              <span className="text-ink/40">and what they taught me.</span>
            </>
          }
          description="Each project is a game — a problem on the board, a sequence of moves, and a result worth studying afterward."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
