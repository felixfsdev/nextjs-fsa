import Navbar from "@/components/layout/navbar";
import { SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function WithNavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar navLinks={[{ label: "Home", path: "/" }]} />
      <main className="flex-1">{children}</main>
    </div>
  );
}
