import { motion } from "framer-motion";
import {
  FolderKanban,
  Code2,
  Server,
  Award,
} from "lucide-react";

import { achievements } from "../../data/content";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const icons = [
  FolderKanban,
  Code2,
  Server,
  Award,
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-pad relative overflow-hidden"
    >
      <div className="container-px">

        <SectionHeading
          eyebrow="Achievements"
          title={
            <>
              Numbers that reflect
              <br />
              <span className="text-ink/45">
                my engineering journey.
              </span>
            </>
          }
          description="Every project, solved problem, API, and certification represents practical experience gained through continuous learning."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => {
            const Icon = icons[index];

            return (
              <Reveal
                key={item.label}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-paper p-8 shadow-sm transition-all duration-300 hover:border-gold/30 hover:shadow-xl"
                >
                                    {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
                  </div>

                  <div className="relative">

                    {/* Icon */}
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10">
                      <Icon className="h-7 w-7 text-gold" />
                    </div>

                    {/* Number */}
                    <p className="text-5xl font-light tracking-tight text-ink">
                      {item.value}
                    </p>

                    {/* Label */}
                    <h3 className="mt-3 text-xl font-semibold text-ink">
                      {item.label}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-7 text-ink/60">
                      {item.detail}
                    </p>

                  </div>

                </motion.div>
              </Reveal>
            );
          })}
        </div>
                <Reveal delay={0.45}>
          <div className="mt-14 rounded-3xl border border-gold/20 bg-gradient-to-r from-gold/5 to-transparent p-8 text-center">

            <p className="mx-auto max-w-2xl text-sm italic leading-8 text-ink/65">
              Every number represents real work —
              building projects, solving problems,
              designing APIs, and continuously improving
              as a software engineer.
            </p>

          </div>
        </Reveal>

      </div>
    </section>
  );
}