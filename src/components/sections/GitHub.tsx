import { motion } from 'framer-motion';
import { Github, Star, GitFork, GitCommit } from 'lucide-react';
import { profile } from '../../data/content';
import SectionHeading from '../SectionHeading';
import Reveal from '../Reveal';

// Static representation — in production this would fetch from GitHub API
const contributionDays = Array.from({ length: 53 * 7 }, (_, i) => {
  const seed = (i * 7 + 13) % 5;
  return seed;
});

const topLanguages = [
  { name: 'Java', pct: 48, color: '#C9A227' },
  { name: 'TypeScript', pct: 22, color: '#3A5A40' },
  { name: 'JavaScript', pct: 15, color: '#111111' },
  { name: 'SQL', pct: 10, color: '#D4D4D4' },
  { name: 'Other', pct: 5, color: '#E5E5E5' },
];

const pinnedRepos = [
  { name: 'juttjao', desc: 'Hyperlocal sports community platform', stars: 24, forks: 3 },
  { name: 'bookstore', desc: 'Full-stack bookstore with Spring Boot + React', stars: 18, forks: 2 },
  { name: 'spring-auth-kit', desc: 'JWT auth starter with Spring Security', stars: 12, forks: 1 },
  { name: 'chess-engine', desc: 'Minimal chess move generator in Java', stars: 9, forks: 0 },
];

const recentActivity = [
  { type: 'commit', text: 'Pushed to juttjao/main', time: '2d ago' },
  { type: 'star', text: 'Starred spring-projects/spring-boot', time: '5d ago' },
  { type: 'commit', text: 'Updated auth flow in bookstore', time: '1w ago' },
  { type: 'fork', text: 'Forked supabase/supabase', time: '2w ago' },
];

const activityIcon = {
  commit: GitCommit,
  star: Star,
  fork: GitFork,
};

export default function GitHub() {
  return (
    <section id="github" className="section-pad relative bg-paper-200/50">
      <div className="container-px">
        <SectionHeading
          eyebrow="GitHub"
          title={
            <>
              The board, in public —<br />
              <span className="text-ink/40">every move is recorded.</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Contribution graph */}
          <Reveal className="lg:col-span-8">
            <div className="rounded-2xl border border-ink/8 bg-paper-50 p-6 md:p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-medium text-ink">Contributions</h3>
                <span className="font-mono text-xs text-ink/40">last 12 months</span>
              </div>
              <div className="mt-6 overflow-x-auto">
                <div
                  className="grid gap-1"
                  style={{ gridTemplateColumns: 'repeat(53, 1fr)', gridTemplateRows: 'repeat(7, 1fr)', gridAutoFlow: 'column' }}
                >
                  {contributionDays.map((level, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: Math.min(i * 0.002, 0.8) }}
                      className="h-2.5 w-2.5 rounded-[2px]"
                      style={{
                        backgroundColor:
                          level === 0 ? 'rgba(17,17,17,0.04)' :
                          level === 1 ? 'rgba(201,162,39,0.2)' :
                          level === 2 ? 'rgba(201,162,39,0.4)' :
                          level === 3 ? 'rgba(201,162,39,0.65)' :
                          'rgba(201,162,39,0.9)',
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-end gap-2 text-xs text-ink/40">
                <span>Less</span>
                {[0, 1, 2, 3, 4].map((l) => (
                  <span
                    key={l}
                    className="h-2.5 w-2.5 rounded-[2px]"
                    style={{
                      backgroundColor:
                        l === 0 ? 'rgba(17,17,17,0.04)' :
                        l === 1 ? 'rgba(201,162,39,0.2)' :
                        l === 2 ? 'rgba(201,162,39,0.4)' :
                        l === 3 ? 'rgba(201,162,39,0.65)' :
                        'rgba(201,162,39,0.9)',
                    }}
                  />
                ))}
                <span>More</span>
              </div>
            </div>
          </Reveal>

          {/* Top languages */}
          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="h-full rounded-2xl border border-ink/8 bg-paper-50 p-6 md:p-8">
              <h3 className="font-serif text-xl font-medium text-ink">Top Languages</h3>
              <div className="mt-6 flex h-2.5 w-full overflow-hidden rounded-full">
                {topLanguages.map((l) => (
                  <div key={l.name} style={{ width: `${l.pct}%`, backgroundColor: l.color }} />
                ))}
              </div>
              <ul className="mt-5 space-y-3">
                {topLanguages.map((l) => (
                  <li key={l.name} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-ink/70">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: l.color }} />
                      {l.name}
                    </span>
                    <span className="font-mono text-xs text-ink/40">{l.pct}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Pinned repos */}
          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="rounded-2xl border border-ink/8 bg-paper-50 p-6 md:p-8">
              <h3 className="font-serif text-xl font-medium text-ink">Pinned Projects</h3>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {pinnedRepos.map((r) => (
                  <a
                    key={r.name}
                    href={`${profile.github}/${r.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-ink/8 p-4 transition-all duration-300 hover:border-gold/40 hover:bg-gold/5"
                  >
                    <p className="font-mono text-sm font-medium text-ink group-hover:text-gold">{r.name}</p>
                    <p className="mt-1 text-xs text-ink/50">{r.desc}</p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-ink/40">
                      <span className="flex items-center gap-1"><Star className="h-3 w-3" /> {r.stars}</span>
                      <span className="flex items-center gap-1"><GitFork className="h-3 w-3" /> {r.forks}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Recent activity */}
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-ink/8 bg-paper-50 p-6 md:p-8">
              <h3 className="font-serif text-xl font-medium text-ink">Recent Activity</h3>
              <ul className="mt-6 space-y-4">
                {recentActivity.map((a, i) => {
                  const Icon = activityIcon[a.type as keyof typeof activityIcon];
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink/50">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <p className="text-sm text-ink/70">{a.text}</p>
                        <p className="font-mono text-xs text-ink/30">{a.time}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-gold"
              >
                <Github className="h-4 w-4" />
                View full profile
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
