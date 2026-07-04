import { useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  FileDown,
  ArrowRight,
} from 'lucide-react';
import { profile } from '../../data/content';
import Reveal from '../Reveal';

const API_URL =
  'https://portfolio-backend1-u4ay.onrender.com/api/contact';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const [sent, setSent] = useState(false);

  const [error, setError] = useState('');

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    setSent(false);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            'Unable to send your message.'
        );
      }

      setSent(true);

      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(
          'Something went wrong. Please try again.'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-pad relative bg-ink text-paper"
    >
      <div
        className="grid-texture-dark pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(201,162,39,0.06), transparent 60%)',
        }}
        aria-hidden
      />

      <div className="container-px relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold" />

              <span className="text-xs font-medium uppercase tracking-widest text-paper/50">
                Contact
              </span>

              <span className="h-px w-8 bg-gold" />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="heading-lg mt-5 text-paper">
              Ready for the
              <br />
              <span className="text-gold">
                next move?
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 text-lg font-light leading-relaxed text-paper/60">
              If you have an internship opportunity,
              freelance project, collaboration,
              or simply want to connect,
              I would love to hear from you.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-xl">
          <Reveal delay={0.2}>
           <form
  onSubmit={handleSubmit}
  className="space-y-5"
>
                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium uppercase tracking-widest text-paper/40"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-paper/10 bg-transparent px-4 py-3 text-paper placeholder-paper/30 transition-all duration-300 focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium uppercase tracking-widest text-paper/40"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-paper/10 bg-transparent px-4 py-3 text-paper placeholder-paper/30 transition-all duration-300 focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium uppercase tracking-widest text-paper/40"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  placeholder="Tell me about your opportunity..."
                  className="w-full resize-none rounded-lg border border-paper/10 bg-transparent px-4 py-3 text-paper placeholder-paper/30 transition-all duration-300 focus:border-gold focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    Move Sent Successfully
                  </>
                ) : (
                  <>
                    Send Message

                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>

              {sent && (
                <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-center">
                  <p className="text-sm text-green-300">
                    ✅ Thank you for reaching out.
                    <br />
                    Your message has been delivered successfully.
                    I'll get back to you soon.
                  </p>
                </div>
              )}

             {error && (
  <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center">
    <p className="text-sm text-red-300">
      ❌ {error}
    </p>
  </div>
)}

</form>
          </Reveal>
                    <Reveal delay={0.3}>
            <div className="mt-10">
              <div className="flex flex-wrap items-center justify-center gap-6">

                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-sm text-paper/60 transition-all duration-300 hover:text-gold hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-paper/60 transition-all duration-300 hover:text-gold hover:-translate-y-0.5"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-paper/60 transition-all duration-300 hover:text-gold hover:-translate-y-0.5"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-paper/60 transition-all duration-300 hover:text-gold hover:-translate-y-0.5"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Resume</span>
                </a>

              </div>

              <div className="mt-10 border-t border-paper/10 pt-8 text-center">

                <p className="text-sm leading-relaxed text-paper/45">

                  Every meaningful collaboration begins with a single move.
                  <br />

                  Whether it's an internship, a full-time opportunity,
                  freelance work, or simply a conversation about software,
                  I'd be happy to connect.

                </p>

              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
