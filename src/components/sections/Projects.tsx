// src/components/Projects.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Plus, X, CheckCircle2 } from 'lucide-react';
import { projects, type Project } from '../../data/content';
import SectionHeading from '../SectionHeading';
import ImageCarousel from '../ImageCarousel'; 

const accentMap: Record<string, { text: string; bg: string; border: string; soft: string }> = {
  gold: { text: 'text-gold', bg: 'bg-gold', border: 'border-gold/30', soft: 'bg-gold/8' },
  forest: { text: 'text-forest', bg: 'bg-forest', border: 'border-forest/30', soft: 'bg-forest/8' },
  ink: { text: 'text-ink', bg: 'bg-ink', border: 'border-ink/30', soft: 'bg-ink/5' },
};

const statusLabel: Record<Project['status'], string> = {
  shipped: 'Shipped',
  'in-progress': 'In Progress',
  planned: 'On the Board',
};

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const a = accentMap[project.accent] || accentMap.gold;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="group overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* CARD IMAGE SECTION */}
      <div className="relative h-60 overflow-hidden">
        
        {/* Carousel hamesha background layer (z-0) par rahega */}
        <div className="absolute inset-0 z-0">
          <ImageCarousel 
            images={project.image} 
            alt={project.name} 
            accentColorClass={a.text} 
          />
        </div>

        {/* Gradient Overlay (z-10) taaki text smoothly visible ho */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 pointer-events-none z-10" />

        {/* Status & Category (z-20 aur pointer-events-none taaki slider drag break na ho) */}
        <div className="absolute left-6 top-6 flex gap-2 pointer-events-none z-20">
          <span className={`rounded-full ${a.soft} px-3 py-1 text-xs font-medium ${a.text} backdrop-blur-sm`}>
            {statusLabel[project.status]}
          </span>

          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Project Name & Tagline (z-20 par Fixed aur Watermark/Overlay text ki tarah) */}
        <div className="absolute bottom-5 left-6 pointer-events-none z-20">
          <h3 className="font-serif text-3xl text-white font-medium drop-shadow-md">
            {project.name}
          </h3>

          <p className="mt-1 text-sm text-white/80 drop-shadow-sm">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* LOWER TEXT SECTION (Jise aapne chhedne se mana kiya tha - untouched) */}
      <div className="p-7">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-ink/45">
            {project.duration}
          </span>

          <span className={`rounded-full ${a.soft} px-3 py-1 text-xs ${a.text}`}>
            #{String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="line-clamp-3 leading-relaxed text-ink/65">
          {project.problem}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-ink/10 bg-paper-100 p-3 text-center"
            >
              <p className={`text-xl font-semibold ${a.text}`}>
                {metric.value}
              </p>

              <p className="mt-1 text-[11px] uppercase tracking-wider text-ink/45">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-ink/10 bg-paper-100 px-3 py-1 text-xs font-medium text-ink/70"
            >
              {tech}
            </span>
          ))}

          {project.techStack.length > 5 && (
            <span className="rounded-full border border-ink/10 bg-paper-100 px-3 py-1 text-xs text-ink/40">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-all duration-300 hover:bg-gold hover:text-ink"
          >
            View Case Study
            <Plus className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ink/10 p-3 transition-all hover:border-gold hover:text-gold"
              >
                <Github className="h-4 w-4" />
              </a>
            )}

            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ink/10 p-3 transition-all hover:border-gold hover:text-gold"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const activeAccent = selectedProject ? (accentMap[selectedProject.accent] || accentMap.gold) : accentMap.gold;

  return (
    <section id="projects" className="section-pad bg-paper-100/50">
      <div className="container-px">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Selected <br />
              <span className="text-ink/40">Engineering Projects.</span>
            </>
          }
          description="A collection of backend systems, APIs, and full-stack products built with scalable architecture."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl max-h-[75vh] flex flex-col rounded-3xl bg-paper p-7 shadow-2xl border border-ink/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-6 top-6 rounded-full border border-ink/10 p-2 hover:bg-ink/5 transition-colors z-10 bg-paper"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Sticky Top Header */}
              <div className="mb-3 pr-10">
                <span className={`text-xs font-mono uppercase tracking-wider ${activeAccent.text}`}>
                  {selectedProject.category}
                </span>
                <h2 className="font-serif text-3xl text-ink mt-1.5">
                  {selectedProject.name}
                </h2>
                <p className="text-ink/60 mt-0.5 text-sm italic">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Scrollable Container */}
              <div className="flex-1 overflow-y-auto pr-2 my-3 space-y-5 max-h-[45vh] scrollbar-thin">
                
                {/* Problem */}
                <div className="border-t border-ink/5 pt-3.5">
                  <h4 className="font-serif text-base font-semibold text-ink mb-1">The Problem</h4>
                  <p className="text-ink/75 text-xs leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="border-t border-ink/5 pt-3.5">
                  <h4 className="font-serif text-base font-semibold text-ink mb-1">The Solution</h4>
                  <p className="text-ink/75 text-xs leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Architecture */}
                <div className="border-t border-ink/5 pt-3.5">
                  <h4 className="font-serif text-base font-semibold text-ink mb-1">System Architecture</h4>
                  <p className="text-ink/75 text-xs leading-relaxed">
                    {selectedProject.architecture}
                  </p>
                </div>

                {/* Key Features List */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="border-t border-ink/5 pt-3.5">
                    <h4 className="font-serif text-base font-semibold text-ink mb-1.5">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {selectedProject.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2 text-xs text-ink/75">
                          <CheckCircle2 className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${activeAccent.text}`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technical Challenges */}
                <div className="border-t border-ink/5 pt-3.5">
                  <h4 className="font-serif text-base font-semibold text-ink mb-1">Challenges & Blockers</h4>
                  <p className="text-ink/75 text-xs leading-relaxed">
                    {selectedProject.challenges}
                  </p>
                </div>

                {/* Key Lessons */}
                <div className="border-t border-ink/5 pt-3.5">
                  <h4 className="font-serif text-base font-semibold text-ink mb-1">Lessons Learned</h4>
                  <p className="text-ink/75 text-xs leading-relaxed">
                    {selectedProject.lessons}
                  </p>
                </div>
              </div>

              {/* Sticky Bottom Actions */}
              <div className="border-t border-ink/5 pt-3.5 flex gap-3 bg-paper">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-xs font-medium text-ink hover:border-gold hover:text-gold transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" /> Source Code
                  </a>
                )}
                {selectedProject.live && selectedProject.live !== "#" && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-medium text-ink hover:bg-gold/90 transition-colors"
                  >
                    Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}