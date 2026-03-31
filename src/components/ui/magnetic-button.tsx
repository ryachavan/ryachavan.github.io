"use client";

import { motion } from "framer-motion";
import { useState, useRef, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "button" | "a";
  href?: string;
  target?: string;
}

export function MagneticButton({
  children,
  className,
  onClick,
  as = "button",
  href,
  target,
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Don't use Next.js Link for external links, target="_blank", or statically hosted files like PDFs
  const isInternalLink = as === "a" && href?.startsWith("/") && target !== "_blank" && !href?.match(/\.(pdf|png|jpg|jpeg|svg|gif)$/i);
  const Component: any = isInternalLink ? Link : as;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <Component
        href={href}
        target={target}
        onClick={onClick}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass hover:bg-white/10 transition-colors duration-300 interactive group/btn overflow-hidden",
          className
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
        <span className="relative z-10 font-medium tracking-wide flex items-center justify-center gap-2">
          {children}
        </span>
      </Component>
    </motion.div>
  );
}
