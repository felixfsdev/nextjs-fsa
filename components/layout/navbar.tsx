"use client";

import { Flame, Menu } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/ui/theme-toggle";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

type NavbarProps = {
  navLinks: { label: string; path: string }[];
  children?: React.ReactNode;
};

export default function Navbar({ navLinks, children }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between p-2 border-b bg-background/80 backdrop-blur">
      <div className="flex p-2">
        <Link href="/" className="hover:text-primary">
          <Flame className="size-6 stroke-1 mr-2" />
        </Link>
        <ul className="hidden md:flex gap-4 ml-4 items-center">
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
        <NavDrawer navLinks={navLinks} />
      </div>
    </nav>
  );
}

function NavDrawer({
  navLinks,
}: {
  navLinks: { label: string; path: string }[];
}) {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="md:hidden">
        <Menu className="stroke-1 mr-2" />
      </DrawerTrigger>
      <DrawerContent className="z-150">
        <DrawerHeader>
          <DrawerTitle>Links</DrawerTitle>
          <ul className="flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className="hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
