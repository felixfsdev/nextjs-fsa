import Navbar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import SignOutBtn from "./_components/sign-out-btn";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import YourRooms from "./_components/your-rooms";

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
      <main className="flex-1 overflow-hidden">
        <div className="flex gap-2 p-2 w-full h-full min-w-xl">
          <div className="flex flex-2 border h-full flex-col p-4 gap-2 overflow-y-auto">
            <Suspense
              fallback={
                <p className="w-full text-center">Loading your rooms...</p>
              }
            >
              <YourRooms />
            </Suspense>
          </div>
          <div className="flex-3 border overflow-y-auto">{children}</div>
        </div>
      </main>
    </div>
  );
}
