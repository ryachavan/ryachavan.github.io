"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./ui/glass-card";
import { siteConfig } from "@/config/site";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-glow-cyan inline-block">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <GlassCard tilt={false} className="p-6 sm:p-8 md:p-12 border-white/10">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="flex-1 space-y-6 text-neutral-300 text-lg leading-relaxed">
                <p>
                  I am a student developer focused on building practical, real-world web applications. I work primarily with React and Next.js, creating responsive interfaces with clean structure and strong attention to performance.
                </p>
                <p>
                  Beyond writing code, I take interest in how applications are structured, deployed, and maintained. I have experience working with version control, databases, and hosting workflows, and I aim to understand the full lifecycle of a project rather than just isolated features.
                </p>
                <p>
                  I actively build and experiment outside academic coursework to push my practical understanding further. I am continuously strengthening my fundamentals, improving problem-solving skills, and building projects that reflect real-world standards.
                </p>
              </div>

              <div className="w-full md:w-auto flex flex-col gap-4">
                <div className="flex gap-4 justify-center md:justify-start">
                  <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="p-4 glass rounded-full hover:bg-white/10 transition-colors interactive text-cyan-400 hover:text-cyan-300">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="p-4 glass rounded-full hover:bg-white/10 transition-colors interactive text-cyan-400 hover:text-cyan-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href={siteConfig.socials.email} className="p-4 glass rounded-full hover:bg-white/10 transition-colors interactive text-cyan-400 hover:text-cyan-300">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>

                <a
                  href="/resume_v2.pdf"
                  target="_blank"
                  className="mt-4 flex items-center justify-center gap-2 glass px-6 py-4 rounded-full font-medium hover:bg-white/10 transition-colors interactive border border-white/10 text-white"
                >
                  <FileText className="w-5 h-5" /> Download Resume
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
