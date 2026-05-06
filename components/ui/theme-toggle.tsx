"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Contrast, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

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
      <Moon className="size-6 stroke-1 hover:text-primary transition-all duration-100" />
    ) : theme === "dark" ? (
      <Sun className="size-6 stroke-1 hover:text-primary transition-all duration-100" />
    ) : (
      <Contrast className="size-6 stroke-1 hover:text-primary transition-all duration-100" />
    );

  return <button onClick={toggleTheme}>{icon}</button>;
}
