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
      <Navbar
        navLinks={[
          { type: "link", label: "Home", path: "/" },
          {
            type: "dropdown",
            label: "Sample Dropdown",
            links: [
              { label: "Sub Item 1", path: "/fake/1" },
              { label: "Sub Item 2", path: "/fake/2" },
            ],
          },
          { type: "link", label: "Sign Up", path: "/sign-up" },
        ]}
      />
      <main className="flex-1">{children}</main>
    </div>
  );
}
