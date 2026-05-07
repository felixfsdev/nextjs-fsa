"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Contrast, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const iconVariants = {
  initial: { opacity: 0, y: -12, rotate: -20, scale: 0.85 },
  animate: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 280, damping: 24 },
  },
} as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = ["light", "dark", "system"];

  function toggleTheme() {
    const current = theme ?? "system";
    const next = themes[(themes.indexOf(current) + 1) % themes.length];
    setTheme(next);
  }

  const icon =
    theme === "light" ? (
      <Sun className="size-6 stroke-1 hover:text-primary transition-all duration-100" />
    ) : theme === "dark" ? (
      <Moon className="size-6 stroke-1 hover:text-primary transition-all duration-100" />
    ) : (
      <Contrast className="size-6 stroke-1 hover:text-primary transition-all duration-100" />
    );

  return (
    <motion.button
      aria-label="Toggle theme"
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-full bg-background/90 p-2 text-current transition-all duration-200  hover:bg-background"
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={theme ?? "system"}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="flex items-center justify-center"
        >
          {icon}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
