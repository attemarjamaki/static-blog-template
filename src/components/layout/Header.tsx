"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const navItems = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="py-8 px-4 container mx-auto">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <div className="text-2xl font-semibold">Creed Thoughts</div>
        </Link>

        {/* navItems on desktop */}
        <div className="hidden gap-8 md:flex text-lg">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.title}
            </Link>
          ))}
        </div>

        {/* hamburger menu on mobile */}
        <div className="flex items-center justify-center md:hidden">
          <button onClick={toggleMenu}>
            <Menu />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed bg-white inset-0 z-50 flex flex-col">
          <div className="flex justify-between items-center pt-8 px-4">
            <Link href="/" onClick={toggleMenu}>
              <div className="flex items-center">
                <span className="text-2xl font-semibold mb-2">
                  Creed Thoughts
                </span>
              </div>
            </Link>
            <button onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col pt-4 px-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className="py-4 rounded-md text-lg text-center"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
