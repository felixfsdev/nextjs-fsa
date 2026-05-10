import Navbar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function WithNavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

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
        ]}
      >
        {session === null ? (
          <Link href="/sign-up">
            <Button>Sign Up</Button>
          </Link>
        ) : (
          <Link href="/sign-out">
            <Button variant="outline">Sign Out</Button>
          </Link>
        )}
      </Navbar>
      <main className="flex-1">{children}</main>
    </div>
  );
}
