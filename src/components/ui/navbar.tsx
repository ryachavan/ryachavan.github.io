"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/", sectionId: null },
  { name: "Skills", href: "/#skills", sectionId: "skills" },
  { name: "Projects", href: "/#projects", sectionId: "projects" },
  { name: "Achievements", href: "/#achievements", sectionId: "achievements" },
  { name: "About", href: "/#about", sectionId: "about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState("/");
  const [scrolled, setScrolled] = useState(false);

  // Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On non-home pages, match by pathname
  useEffect(() => {
    if (pathname !== "/") {
      setActiveHref(pathname);
    } else {
      setActiveHref("/");
    }
  }, [pathname]);

  // Intersection Observer: track which section is visible
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = links
      .map((l) => l.sectionId)
      .filter(Boolean) as string[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`/#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    const timer = setTimeout(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 200);

    // Reset to Home when scrolled to top
    const handleScroll = () => {
      if (window.scrollY < 100) setActiveHref("/");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        scrolled ? "w-[90%] max-w-2xl" : "w-[95%] max-w-3xl"
      )}
    >
      <div className="glass backdrop-blur-md bg-black/40 border border-white/10 rounded-full px-2 py-2 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,0,0,0.5)] max-w-full overflow-hidden">
        <div className="flex items-center justify-center w-full gap-1 sm:gap-2 overflow-x-auto no-scrollbar whitespace-nowrap px-1">
          {links.map((link) => {
            const isActive = activeHref === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-2 sm:px-4 py-2 text-[13px] sm:text-sm font-medium transition-colors hover:text-white interactive shrink-0"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <span
                  className={cn(
                    "relative z-10",
                    isActive ? "text-white" : "text-neutral-400"
                  )}
                >
                  {link.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
