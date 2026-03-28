import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { AchievementsSection } from "@/components/achievements-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects />
      <AchievementsSection />
      <AboutSection />
    </main>
  );
}
