import { getGitHubRepos } from "@/lib/github";
import { GlassCard } from "@/components/ui/glass-card";
import { Star, ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Projects | Developer Portfolio",
  description: "View all my GitHub repositories and open-source contributions",
};

export default async function ProjectsPage() {
  const repos = await getGitHubRepos();

  return (
    <main className="min-h-screen pt-32 pb-24 relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow-purple inline-block">All Projects</h1>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
            </div>
            
            <p className="text-neutral-400 max-w-md">
              A complete collection of my public repositories, open-source contributions, and experimental projects fetched directly from GitHub.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {repos.map((repo, index) => (
            <GlassCard key={repo.id} tilt={true} delay={(index % 10) * 0.05} className="flex flex-col h-full border-white/10 hover:border-cyan-500/30">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-cyan-400 transition-colors">
                    {repo.name}
                  </h3>
                  <div className="flex items-center gap-3 text-neutral-400 shrink-0 ml-2">
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors interactive">
                      <Github className="w-4 h-4" />
                    </a>
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors interactive">
                        <ExternalLink className="w-4 h-4" />
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
                    <span className="flex items-center gap-1.5 focus-within:">
                      <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(176,38,255,0.8)]" />
                      <span className="truncate max-w-[80px]">{repo.language}</span>
                    </span>
                  )}
                  <span className="flex items-center gap-1 hover:text-white transition-colors">
                    <Star className="w-3.5 h-3.5" /> {repo.stargazers_count}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        
        {repos.length === 0 && (
          <div className="text-center py-20 text-neutral-400 glass-panel rounded-2xl">
            <p className="text-lg">No projects found for the configured GitHub user.</p>
          </div>
        )}
      </div>
    </main>
  );
}
