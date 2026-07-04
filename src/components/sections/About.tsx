import { motion } from "framer-motion";
import { aboutParagraphs } from "../../data/content";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const principles = [
  {
    move: "e4",
    title: "Understand First",
    detail: "Think before writing code.",
  },
  {
    move: "Nf3",
    title: "Keep It Simple",
    detail: "Readable code beats clever code.",
  },
  {
    move: "Bb5",
    title: "Build to Learn",
    detail: "Projects teach more than tutorials.",
  },
  {
    move: "O-O",
    title: "Debug Methodically",
    detail: "Every bug has a reason.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="container-px">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              I approach software
              <br />
              <span className="text-ink/45">
                like a long game of chess.
              </span>
            </>
          }
          description="Every feature is a move. Every project is another opportunity to think better, build cleaner, and learn faster."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
                    {/* Story */}
          <div className="lg:col-span-7">
            <div className="space-y-5">
              {aboutParagraphs.slice(0, 2).map((paragraph, index) => (
                <Reveal key={index} delay={index * 0.08}>
                  <p className="body-md leading-7 text-ink/75">
                    {paragraph}
                  </p>
                </Reveal>
              ))}

              <Reveal delay={0.2}>
                <p className="body-md leading-7 text-ink/75">
                  Outside of development, I enjoy playing chess because it
                  teaches patience, planning, and disciplined thinking. Those
                  same ideas influence how I approach software engineering.
                </p>
              </Reveal>
            </div>

            {/* Quote */}
            <Reveal delay={0.35}>
              <div className="mt-10 border-l-2 border-gold pl-5">
                <p className="font-serif text-lg italic leading-relaxed text-ink/65">
                  “Good software, like good chess, comes from understanding the
                  position before making the move.”
                </p>
              </div>
            </Reveal>
          </div>
                  {/* Engineering Principles */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-ink/10 bg-paper p-7 shadow-sm">
                <p className="eyebrow mb-6">Engineering Principles</p>

                <div className="space-y-5">
                  {principles.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/10 font-mono text-xs font-semibold text-gold">
                        {item.move}
                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-ink">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-ink/60">
                          {item.detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-gold/15 bg-gold/5 px-5 py-4">
                  <p className="text-sm italic leading-6 text-ink/65">
                    My goal is simple:
                    <span className="font-medium text-ink">
                      {" "}
                      build software that is clean, reliable, and genuinely
                      useful.
                    </span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}