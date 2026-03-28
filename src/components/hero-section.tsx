"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "./ui/magnetic-button";
import { ArrowRight, Github } from "lucide-react";
import { siteConfig, taglines } from "@/config/site";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(taglines[Math.floor(Math.random() * taglines.length)]);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none transform-gpu will-change-transform" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none transform-gpu will-change-transform" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel p-6 sm:p-8 md:p-12 rounded-3xl max-w-3xl w-full"
        >

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-glow-purple bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Arya Chavan</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-mono text-gray-300/80 tracking-wide text-base md:text-lg mb-6"
          >
            {role}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <MagneticButton as="a" href="/projects">
              View Projects <ArrowRight className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton as="a" href={siteConfig.socials.github} target="_blank" className="!bg-white/5 border border-white/10 hover:!bg-white/10">
              <Github className="w-5 h-5" /> GitHub
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
