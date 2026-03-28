"use client";

import { motion, Variants } from "framer-motion";
import { GlassCard } from "./ui/glass-card";

const skills = [
  "React", "Next.js", "Node.js", "Tailwind CSS",
  "C/C++", "Java", "Python", "PostgreSQL",
  "Firebase", "Google ADK", "Google Cloud", "Supabase",
  "Git", "Figma", "Arduino", "ESP32"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-glow-purple inline-block">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            <motion.div key={skill} variants={itemVariants}>
              <GlassCard
                tilt={true}
                className="p-6 flex items-center justify-center text-center h-full hover:border-purple-500/50 transition-colors"
                disableAnimation={true}
              >
                <span className="font-semibold text-lg tracking-wide text-neutral-200">
                  {skill}
                </span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
