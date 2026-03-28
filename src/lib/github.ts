import { siteConfig } from "@/config/site";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  homepage: string;
  fork: boolean;
  topics: string[];
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=stars&per_page=100`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const repos: GitHubRepo[] = await res.json();
    return repos.filter((repo) => !repo.fork);
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

export async function getFeaturedRepos(): Promise<GitHubRepo[]> {
  const allRepos = await getGitHubRepos();

  // Filter for featured projects if configured, otherwise take top 3
  if (siteConfig.featuredProjects.length > 0) {
    const featured = allRepos.filter((repo) =>
      siteConfig.featuredProjects.includes(repo.name)
    );
    // If we found them, return them, otherwise fallback to top 3
    if (featured.length > 0) return featured.slice(0, 3);
  }

  return allRepos.slice(0, 3);
}

export async function getContributedRepos(): Promise<GitHubRepo[]> {
  const { contributedProjects } = siteConfig;
  if (!contributedProjects || contributedProjects.length === 0) return [];

  const results = await Promise.allSettled(
    contributedProjects.map(({ repoUrl }) => {
      // Convert https://github.com/owner/repo → api.github.com/repos/owner/repo
      const match = repoUrl.match(/github\.com\/([^/]+\/[^/]+)/);
      if (!match) return Promise.resolve(null);
      return fetch(`https://api.github.com/repos/${match[1]}`, {
        next: { revalidate: 3600 },
      }).then((r) => (r.ok ? (r.json() as Promise<GitHubRepo>) : null));
    })
  );

  return results
    .filter(
      (r): r is PromiseFulfilledResult<GitHubRepo> =>
        r.status === "fulfilled" && r.value !== null
    )
    .map((r) => r.value);
}
