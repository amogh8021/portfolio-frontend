import { motion } from "framer-motion";
import {
  Github,
  Star,
  GitFork,
  Users,
  BookOpen,
  ExternalLink,
} from "lucide-react";

import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { useGithub } from "../../hooks/useGithub";

export default function GitHub() {
  const { user, stats, loading, error } = useGithub();

  if (loading) {
    return (
      <section id="github" className="section-pad">
        <div className="container-px">
          <SectionHeading
            eyebrow="GitHub"
            title={
              <>
                Building in public.
                <br />
                <span className="text-ink/40">
                  Loading repositories...
                </span>
              </>
            }
          />

          <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-36 animate-pulse rounded-2xl bg-paper-200"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !user || !stats) {
    return (
      <section id="github" className="section-pad">
        <div className="container-px text-center">
          <p className="text-red-500">
            Failed to load GitHub profile.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="github"
      className="section-pad relative bg-paper-200/40"
    >
      <div className="container-px">

        <SectionHeading
          eyebrow="GitHub"
          title={
            <>
              Every commit is
              <br />
              <span className="text-ink/40">
                another move on the board.
              </span>
            </>
          }
          description="Live data fetched directly from GitHub."
        />

        {/* Profile */}

        <Reveal>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-3xl border border-ink/8 bg-paper-50 p-8"
          >

            <div className="flex flex-col items-center gap-6 md:flex-row">

              <img
                src={user.avatar_url}
                alt={user.name}
                className="h-28 w-28 rounded-full border-4 border-gold/20 object-cover"
              />

              <div className="flex-1">

                <h3 className="font-serif text-3xl text-ink">
                  {user.name}
                </h3>

                <p className="mt-2 text-ink/55">
                  @{user.login}
                </p>

                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-gold transition-colors hover:text-gold-light"
                >
                  <Github className="h-5 w-5" />

                  View GitHub Profile

                  <ExternalLink className="h-4 w-4" />
                </a>

              </div>

            </div>

          </motion.div>

        </Reveal>
                {/* Statistics */}

        <Reveal delay={0.1}>

          <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">

            {[
              {
                label: "Repositories",
                value: user.public_repos,
                icon: BookOpen,
              },
              {
                label: "Followers",
                value: user.followers,
                icon: Users,
              },
              {
                label: "Following",
                value: user.following,
                icon: Github,
              },
              {
                label: "Total Stars",
                value: stats.totalStars,
                icon: Star,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.45,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="group rounded-2xl border border-ink/8 bg-paper-50 p-6 transition-all duration-300 hover:border-gold/40 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-sm uppercase tracking-wider text-ink/45">
                        {item.label}
                      </p>

                      <h3 className="mt-3 font-serif text-4xl text-ink">
                        {item.value}
                      </h3>

                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-paper">

                      <Icon className="h-7 w-7" />

                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>

        </Reveal>

        {/* Languages */}

        <Reveal delay={0.2}>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 rounded-3xl border border-ink/8 bg-paper-50 p-8"
          >

            <div className="mb-8 flex items-center justify-between">

              <h3 className="font-serif text-2xl text-ink">
                Most Used Languages
              </h3>

              <span className="text-sm text-ink/40">
                Based on repositories
              </span>

            </div>

            <div className="space-y-6">

              {stats.languages.map((language, index) => (

                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >

                  <div className="mb-2 flex justify-between">

                    <span className="font-medium text-ink">
                      {language.name}
                    </span>

                    <span className="text-sm text-ink/45">
                      {language.percentage}%
                    </span>

                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-paper-200">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${language.percentage}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: index * 0.08,
                      }}
                      className="h-full rounded-full bg-gold"
                    />

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </Reveal>
                {/* Featured Repositories */}

        <Reveal delay={0.25}>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16"
          >

            <h3 className="mb-8 font-serif text-3xl text-ink">
              Featured Repositories
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              {stats.featuredRepos.map((repo, index) => (

                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group rounded-2xl border border-ink/8 bg-paper-50 p-6 transition-all duration-300 hover:border-gold/40 hover:shadow-xl"
                >

                  <div className="flex items-start justify-between">

                    <h4 className="font-serif text-xl text-ink group-hover:text-gold transition-colors">

                      {repo.name}

                    </h4>

                    <ExternalLink className="h-5 w-5 text-ink/30 transition group-hover:text-gold" />

                  </div>

                  <p className="mt-4 min-h-[48px] text-sm leading-7 text-ink/60">

                    {repo.description || "No description available."}

                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-ink/45">

                    {repo.language && (
                      <span className="rounded-full bg-gold/10 px-3 py-1 text-gold">
                        {repo.language}
                      </span>
                    )}

                    <span className="flex items-center gap-1">

                      <Star className="h-4 w-4" />

                      {repo.stargazers_count}

                    </span>

                    <span className="flex items-center gap-1">

                      <GitFork className="h-4 w-4" />

                      {repo.forks_count}

                    </span>

                  </div>

                </motion.a>

              ))}

            </div>

          </motion.div>

        </Reveal>

    

        <Reveal delay={0.35}>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 rounded-3xl border border-gold/20 bg-gradient-to-r from-paper-50 to-paper p-10 text-center"
          >

            <Github className="mx-auto h-14 w-14 text-gold" />

            <h3 className="mt-6 font-serif text-4xl text-ink">

              Building in Public

            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/60">

              Every project reflects another step in my journey as a
              software engineer. From backend APIs to full-stack
              applications, each repository represents continuous
              learning, problem solving, and a commitment to writing
              clean, maintainable code.

            </p>

            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-medium text-ink transition-all duration-300 hover:scale-105 hover:bg-gold/90"
            >

              <Github className="h-3 w-3" />

              Explore My GitHub

              <ExternalLink className="h-3 w-3" />

            </a>

          </motion.div>

        </Reveal>

      </div>

    </section>

  );
}