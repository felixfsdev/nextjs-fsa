import { Contrast, Flame, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import ThemeToggle from "../ui/theme-toggle";

type NavbarProps = {
  navLinks: { label: string; path: string }[];
  children?: React.ReactNode;
};

export default function Navbar({ navLinks, children }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="flex">
        <Link href="/" className="hover:text-primary">
          <Flame className="size-6 stroke-1 mr-2" />
        </Link>
        <ul className="flex gap-4 ml-4 items-center">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path} className="hover:text-primary">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2">
        {children}
        <ThemeToggle />
      </div>
    </nav>
  );
}
