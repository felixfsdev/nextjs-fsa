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
      <Navbar navLinks={[{ label: "Home", path: "/" }]}>
        <a href="https://github.com/felixfsdev/">
          <Button className="bg-black text-white hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300">
            <SiGithub className="size-4 mr-2" />
            GitHub
          </Button>
        </a>
      </Navbar>
      <main className="flex-1">{children}</main>
    </div>
  );
}
