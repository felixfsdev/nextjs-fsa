"use client";

import { Flame, Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/ui/theme-toggle";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type NavItem =
  | { type: "link"; label: string; path: string }
  | {
      type: "dropdown";
      label: string;
      links: { label: string; path: string }[];
    };

type NavbarProps = {
  navLinks: NavItem[];
  children?: React.ReactNode;
};

export default function Navbar({ navLinks, children }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between p-2 border-b bg-background/80 backdrop-blur">
      <div className="flex p-2 items-center">
        <NavDrawer navLinks={navLinks} />
        <h1 className="text-foreground text-xl font-bold">fsa</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex ml-4">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navLinks.map((item, idx) => {
                if (item.type === "link") {
                  return (
                    <NavigationMenuItem key={idx}>
                      <Link
                        href={item.path}
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={idx}>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-2 p-2 min-w-50">
                        {item.links.map((sub) => (
                          <li key={sub.path}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={sub.path}
                                className="block rounded-md p-2 hover:bg-accent"
                              >
                                {sub.label}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {children}
        <ThemeToggle />
      </div>
    </nav>
  );
}

function NavDrawer({ navLinks }: { navLinks: NavItem[] }) {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="md:hidden">
        <Menu className="stroke-1 mr-2 hover:text-primary transition-colors duration-100" />
      </DrawerTrigger>

      <DrawerContent className="text-foreground">
        <DrawerHeader className="gap-2">
          <DrawerClose asChild>
            <Button variant="ghost" size="icon">
              <X className="size-6" />
            </Button>
          </DrawerClose>
          <DrawerTitle className="text-2xl font-bold">Links</DrawerTitle>
          {navLinks.map((item, idx) => {
            if (item.type === "link") {
              return (
                <Link key={idx} href={item.path} className="hover:text-primary">
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={idx} className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold my-2">{item.label}</h2>
                <div className="ml-2 flex flex-col gap-2">
                  {item.links.map((sub) => (
                    <Link
                      key={sub.path}
                      href={sub.path}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
