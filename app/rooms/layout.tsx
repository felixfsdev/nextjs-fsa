import Navbar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import SignOutBtn from "./_components/sign-out-btn";
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
      <Navbar navLinks={[{ type: "link", label: "Home", path: "/" }]}>
        {session === null ? (
          <>
            <Link href="/sign-in">
              <Button>Sign In</Button>
            </Link>
          </>
        ) : (
          <SignOutBtn />
        )}
      </Navbar>
      <main className="flex-1 md:py-4">{children}</main>
    </div>
  );
}
