"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  tilt?: boolean;
  disableAnimation?: boolean;
}

export function GlassCard({ children, className, delay = 0, tilt = false, disableAnimation = false }: GlassCardProps) {
  const InnerContent = (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </>
  );

  if (disableAnimation) {
    return (
      <div className={cn(
        "glass-panel rounded-2xl p-6 relative overflow-hidden group transition-all duration-300",
        "hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]",
        className
      )}>
        {InnerContent}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={tilt ? { y: -5, scale: 1.02 } : { y: -5 }}
      className={cn(
        "glass-panel rounded-2xl p-6 relative overflow-hidden group transition-all duration-300",
        "hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]",
        className
      )}
    >
      {InnerContent}
    </motion.div>
  );
}
