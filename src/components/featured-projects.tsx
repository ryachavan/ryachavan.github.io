import { getFeaturedRepos, getContributedRepos } from "@/lib/github";
import { GlassCard } from "./ui/glass-card";
import { Star, ExternalLink, Github, GitPullRequest } from "lucide-react";
import { MagneticButton } from "./ui/magnetic-button";

function RepoCard({
  repo,
  index,
  contributed = false,
}: {
  repo: Awaited<ReturnType<typeof getFeaturedRepos>>[number];
  index: number;
  contributed?: boolean;
}) {
  return (
    <GlassCard
      tilt={true}
      delay={index * 0.1}
      className="flex flex-col h-full border-white/10 hover:border-purple-500/30"
    >
      <div className="flex-1">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2 min-w-0">
            <h3 className="text-xl font-bold text-white line-clamp-1 group-hover:text-cyan-400 transition-colors">
              {repo.name}
            </h3>
            {contributed && (
              <span className="shrink-0 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                <GitPullRequest className="w-2.5 h-2.5" />
                contrib
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 text-neutral-400 shrink-0 ml-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors interactive"
            >
              <Github className="w-5 h-5" />
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors interactive"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-neutral-300 text-sm mb-6 line-clamp-3 leading-relaxed">
          {repo.description || "No description provided."}
        </p>
      </div>

      <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
        <div className="flex items-center gap-4">
          {repo.language && (
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1 hover:text-white transition-colors">
            <Star className="w-4 h-4" /> {repo.stargazers_count}
          </span>
        </div>
      </div>
    </GlassCard>
  );
}

export async function FeaturedProjects() {
  const [repos, contributed] = await Promise.all([
    getFeaturedRepos(),
    getContributedRepos(),
  ]);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-glow-purple inline-block">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* My Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {repos.map((repo, index) => (
            <RepoCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>

        {/* Contributions — only rendered when the array is non-empty */}
        {contributed.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-white/10" />
              <span className="flex items-center gap-2 text-sm font-medium text-amber-400/80 uppercase tracking-widest">
                <GitPullRequest className="w-4 h-4" />
                Contributions
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {contributed.map((repo, index) => (
                <RepoCard
                  key={repo.id}
                  repo={repo}
                  index={index}
                  contributed
                />
              ))}
            </div>
          </>
        )}

        <div className="flex justify-center">
          <MagneticButton as="a" href="/projects">
            View All Projects
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
