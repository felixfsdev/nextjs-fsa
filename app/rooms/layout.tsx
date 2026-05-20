import Navbar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import SignOutBtn from "./_components/sign-out-btn";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function RoomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session === null) {
    redirect("/sign-in");
  }

  return (
    <div className="h-dvh flex flex-col">
      <Navbar navLinks={[{ type: "link", label: "Rooms", path: "/rooms" }]}>
        <SignOutBtn />
      </Navbar>
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  );
}
