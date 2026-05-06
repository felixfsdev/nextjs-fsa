import { Flame } from "lucide-react";
import Link from "next/link";

type NavbarProps = {
  navLinks: { label: string; path: string }[];
  children?: React.ReactNode;
};

export default function Navbar({ navLinks, children }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="flex">
        <Flame className="size-6 stroke-1 mr-2" />
        <ul className="flex gap-4 ml-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path} className="hover:text-primary">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>{children}</div>
    </nav>
  );
}
