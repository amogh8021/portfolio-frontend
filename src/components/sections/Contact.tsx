import { useState } from 'react';
import { Mail, Github, Linkedin, FileDown, ArrowRight } from 'lucide-react';
import { profile } from '../../data/content';
import Reveal from '../Reveal';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section-pad relative bg-ink text-paper">
      <div className="grid-texture-dark pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,162,39,0.06), transparent 60%)' }}
        aria-hidden
      />

      <div className="container-px relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-medium uppercase tracking-widest text-paper/50">Contact</span>
              <span className="h-px w-8 bg-gold" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5 text-paper">
              Ready for the<br />
              <span className="text-gold">next move?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg font-light leading-relaxed text-paper/60">
              If you have a position worth playing, I would like to hear about it.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-xl">
          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-widest text-paper/40">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-paper/10 bg-transparent px-4 py-3 text-paper placeholder-paper/30 transition-colors focus:border-gold focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-widest text-paper/40">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-paper/10 bg-transparent px-4 py-3 text-paper placeholder-paper/30 transition-colors focus:border-gold focus:outline-none"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-widest text-paper/40">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-paper/10 bg-transparent px-4 py-3 text-paper placeholder-paper/30 transition-colors focus:border-gold focus:outline-none"
                  placeholder="Tell me about the position..."
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:bg-gold-light disabled:opacity-70"
              >
                {sent ? 'Move sent — I will reply soon.' : (
                  <>
                    Send Message
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </Reveal>

          {/* Direct links */}
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-gold">
                <Mail className="h-4 w-4" /> Email
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-gold">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-gold">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={profile.resumeUrl} download className="inline-flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-gold">
                <FileDown className="h-4 w-4" /> Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
