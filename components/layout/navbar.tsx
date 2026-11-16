
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Heritage", href: "/#heritage" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="relative z-50 w-full bg-white">
      <div className="mx-auto flex max-w-360 flex-col items-center px-5 pt-4 pb-3">

        {/* Logo */}
        <Link
          href="/"
          aria-label="Ijebu Descendant home"
          className="relative"
        >
          <Image
            src="/images/logo.png"
            alt="Ijebu Descendant"
            width={110}
            height={90}
            priority
            className="h-16.25 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="mt-4 hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative pb-1 text-[12px] font-medium transition-colors duration-200
                ${
                  isActive(link.href)
                    ? "text-[#F5A900] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[#F5A900]"
                    : "text-[#222222] hover:text-[#F5A900]"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="absolute right-5 top-8 md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <button
                  type="button"
                  aria-label="Open navigation menu"
                  className="flex h-10 w-10 items-center justify-center text-[#163F33]"
                >
                  <Menu size={23} strokeWidth={1.7} />
                </button>
              }
            />

            <SheetContent side="right" className="w-70 bg-white">
              <SheetHeader>
                <SheetTitle className="text-left text-[#163F33]">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`border-b border-gray-100 px-2 py-4 text-sm font-medium transition-colors
                      ${
                        isActive(link.href)
                          ? "text-[#F5A900]"
                          : "text-[#222222] hover:text-[#F5A900]"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
