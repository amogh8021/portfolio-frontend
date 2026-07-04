import { motion } from "framer-motion";
import { FaJava, FaDatabase, FaCode, FaCss3 } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiSpringboot,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiHtml5,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

import { skillGroups } from "../../data/content";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const phaseIcons: Record<string, string> = {
  Preparation: "00",
  Opening: "e4",
  Middlegame: "Nf3",
  Endgame: "#",
};

const phaseColors: Record<string, string> = {
  Preparation: "from-slate-100 to-transparent",
  Opening: "from-gold/20 to-transparent",
  Middlegame: "from-sky-400/15 to-transparent",
  Endgame: "from-emerald-400/15 to-transparent",
};

const techIcons: Record<string, JSX.Element> = {
  Java: <FaJava className="text-[#f89820] text-xl" />,

  JavaScript: (
    <SiJavascript className="text-[#f7df1e] text-xl" />
  ),

  TypeScript: (
    <SiTypescript className="text-[#3178c6] text-xl" />
  ),

  SQL: <FaDatabase className="text-slate-500 text-lg" />,

  DSA: <FaCode className="text-gold text-lg" />,

  "Spring Boot": (
    <SiSpringboot className="text-[#6DB33F] text-xl" />
  ),

  "Spring Security": (
    <SiSpringboot className="text-[#6DB33F] text-xl" />
  ),

  "REST APIs": (
    <TbApi className="text-sky-500 text-xl" />
  ),

  "Hibernate / JPA": (
    <FaDatabase className="text-orange-500 text-lg" />
  ),

  MySQL: (
    <SiMysql className="text-[#00758F] text-xl" />
  ),

  React: (
    <SiReact className="text-sky-400 text-xl" />
  ),

  HTML5: (
    <SiHtml5 className="text-[#E34F26] text-xl" />
  ),

  CSS3: (
    <FaCss3 className="text-[#1572B6] text-xl" />
  ),

  "Tailwind CSS": (
    <SiTailwindcss className="text-cyan-400 text-xl" />
  ),

  "Framer Motion": (
    <div className="font-bold text-purple-500 text-lg">
      F
    </div>
  ),

  Git: (
    <SiGit className="text-[#F05032] text-xl" />
  ),

  GitHub: (
    <SiGithub className="text-xl text-ink" />
  ),

  Postman: (
    <SiPostman className="text-[#FF6C37] text-xl" />
  ),

  Docker: (
    <SiDocker className="text-[#2496ED] text-xl" />
  ),

  Deployment: (
    <span className="text-lg">☁️</span>
  ),
};

function getLevel(level: number) {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Intermediate";
  return "Learning";
}

function SkillCard({
  group,
  index,
}: {
  group: (typeof skillGroups)[0];
  index: number;
}) {
  return (
    <Reveal delay={index * 0.12}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.35 }}
        className="group relative overflow-hidden rounded-3xl border border-ink/8 bg-paper shadow-sm transition-all duration-500 hover:border-gold/20 hover:shadow-2xl"
      >
        {/* Top Gradient */}
        <div
          className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-r ${
            phaseColors[group.phase as keyof typeof phaseColors] || "from-slate-100 to-transparent"
          }`}
        />

        {/* Chess Grid */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(201,162,39,.05) 1px, transparent 1px),linear-gradient(to bottom, rgba(201,162,39,.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative p-8">

          {/* Header */}
          <div className="flex items-start justify-between">

            <div>

              <div className="flex items-center gap-3">

                <span className="rounded-full bg-gold/10 px-3 py-1 font-mono text-xs text-gold">
                  {phaseIcons[group.phase as keyof typeof phaseIcons] || "#"}
                </span>

                <span className="font-mono text-xs uppercase tracking-[0.3em] text-ink/40">
                  Phase
                </span>

              </div>

              <h3 className="mt-3 font-serif text-3xl text-ink">
                {group.phase}
              </h3>

              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/55">
                {group.subtitle}
              </p>

            </div>

            <span className="rounded-full border border-ink/10 px-3 py-1 font-mono text-xs text-ink/40">
              {group.items.length} Skills
            </span>

          </div>

          {/* Divider */}

          <div className="my-8 h-px bg-gradient-to-r from-gold/40 via-ink/10 to-transparent" />

          {/* Skills */}

          <div className="space-y-6">

            {group.items.map((item, i) => (

              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.35,
                }}
              >

                {/* Skill Header */}

                <div className="mb-2 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink/8 bg-paper-50 shadow-sm">
                      {techIcons[item.name as keyof typeof techIcons] || <FaCode className="text-gold text-lg" />}
                    </div>

                    <div>

                      <p className="font-medium text-ink">
                        {item.name}
                      </p>

                      <p className="text-xs text-ink/35">
                        {getLevel(item.level)}
                      </p>

                    </div>

                  </div>

                  <span className="font-mono text-sm text-gold">
                    {item.level}%
                  </span>

                </div>

                {/* Progress */}

                <div className="relative h-2 overflow-hidden rounded-full bg-ink/8">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative h-full rounded-full bg-gradient-to-r from-gold via-[#d8b74b] to-gold"
                  >

                    <motion.div
                      animate={{ x: [-30, 120] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                      }}
                      className="absolute inset-y-0 w-10 bg-white/30 blur-sm"
                    />

                  </motion.div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </motion.div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-pad relative overflow-hidden bg-paper-200/40"
    >
      {/* Background */}
      <div className="grid-texture absolute inset-0 opacity-[0.04]" />

      <div className="container-px relative">

        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              Every strong application
              <br />
              <span className="text-ink/40">
                is built one phase at a time.
              </span>
            </>
          }
          description="My workflow follows the same philosophy as chess—build a strong foundation, develop a clear strategy, execute carefully and finish cleanly. These are the technologies I rely on throughout that journey."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {skillGroups.map((group, index) => (
            <SkillCard
              key={group.phase}
              group={group}
              index={index}
            />
          ))}

        </div>

        {/* Bottom Quote */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mx-auto mt-20 max-w-4xl rounded-3xl border border-gold/15 bg-gradient-to-r from-gold/5 via-paper to-gold/5 p-10 text-center"
        >
          <p className="font-serif text-2xl leading-relaxed text-ink">
            "Tools don't build software.
            <br />
            Engineers do.
            <br />
            The tools simply help them think faster."
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <p className="mt-5 font-mono text-xs uppercase tracking-[0.35em] text-gold">
            CONTINUOUSLY LEARNING • CONTINUOUSLY IMPROVING
          </p>
        </motion.div>

      </div>
    </section>
  );
}