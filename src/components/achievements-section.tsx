"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./ui/glass-card";

const achievements = [
  {
    year: "2022",
    title: "Secondary School Certificate",
    organization: "Podar International School",
    description: "Completed secondary education with distinction.",
  },
  {
    year: "2024",
    title: "Higher Secondary Certificate",
    organization: "Narayana Junior College",
    description: "Completed Higher Secondary Education in the Science stream with a focus on Physics, Chemistry, Mathematics and Computer Science.",
  },
  {
    year: "2024",
    title: "BTech",
    organization: "Fr. Conceicao Rodrigues College of Engineering",
    description: "Started my journey in Computer Engineering.",
  },
  {
    year: "Aug 2025",
    title: "Documentation Head",
    organization: "Mozilla Campus Club CRCE",
    description: "Responsible for creating and maintaining technical documentation for various club events and initiatives.",
  },
  {
    year: "Sept 2025",
    title: "Hackathon Winner",
    organization: "Thakur College of Engineering & Technology",
    description: "Won my first hackathon for building an innovative solution.",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-glow-cyan inline-block">Experience & Achievements</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical line connecting timeline nodes */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {achievements.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } gap-8`}
              >
                {/* Timeline node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="absolute left-[19px] md:left-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.8)] z-10 md:-translate-x-1/2 ring-4 ring-black"
                />

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12"
                >
                  <GlassCard tilt={true} className="p-6">
                    <span className="text-cyan-400 font-mono text-sm tracking-widest font-bold mb-2 block text-glow-cyan">
                      {item.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-purple-300 font-medium mb-4 text-sm">
                      {item.organization}
                    </p>
                    <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </GlassCard>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
