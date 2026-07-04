

const USERNAME = "amogh8021";
const BASE_URL = `https://api.github.com/users/${USERNAME}`;

export interface GithubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
}

export async function getGithubUser(): Promise<GithubUser> {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Unable to fetch GitHub profile.");
  }

  return response.json();
}

export async function getGithubRepos(): Promise<GithubRepo[]> {
  const response = await fetch(
    `${BASE_URL}/repos?sort=updated&per_page=100`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch repositories.");
  }

  const repos: GithubRepo[] = await response.json();

  return repos.filter((repo) => !repo.fork);
}

