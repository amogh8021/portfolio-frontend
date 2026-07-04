import { useEffect, useState } from "react";
import {
  getGithubRepos,
  getGithubUser,
  GithubRepo,
  GithubUser,
} from "../services/githubfetch";

export interface GithubStats {
  totalStars: number;
  totalForks: number;
  languages: {
    name: string;
    count: number;
    percentage: number;
  }[];
  featuredRepos: GithubRepo[];
}

export function useGithub() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [stats, setStats] = useState<GithubStats | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function loadGithub() {
      try {
        setLoading(true);

        const [profile, repos] = await Promise.all([
          getGithubUser(),
          getGithubRepos(),
        ]);

        // -----------------------------
        // Total Stars
        // -----------------------------

        const totalStars = repos.reduce(
          (sum, repo) => sum + repo.stargazers_count,
          0
        );

        // -----------------------------
        // Total Forks
        // -----------------------------

        const totalForks = repos.reduce(
          (sum, repo) => sum + repo.forks_count,
          0
        );

        // -----------------------------
        // Languages
        // -----------------------------

        const languageMap: Record<string, number> = {};

        repos.forEach((repo) => {
          if (!repo.language) return;

          languageMap[repo.language] =
            (languageMap[repo.language] || 0) + 1;
        });

        const totalLanguageRepos = Object.values(languageMap).reduce(
          (a, b) => a + b,
          0
        );

        const languages = Object.entries(languageMap)
          .map(([name, count]) => ({
            name,
            count,
            percentage: Math.round((count / totalLanguageRepos) * 100),
          }))
          .sort((a, b) => b.count - a.count);

        // -----------------------------
        // Featured Repositories
        // -----------------------------

        const featuredRepos = [...repos]
          .sort((a, b) => {
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }

            return (
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
            );
          })
          .slice(0, 6);

        setUser(profile);

        setStats({
          totalStars,
          totalForks,
          languages,
          featuredRepos,
        });
      } catch (err) {
        console.error(err);

        setError("Unable to load GitHub data.");
      } finally {
        setLoading(false);
      }
    }

    loadGithub();
  }, []);

  return {
    user,
    stats,
    loading,
    error,
  };
}