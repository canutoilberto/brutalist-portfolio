"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useMobile();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita hidratação incorreta
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm transition-colors duration-300">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="neo-brutalism-pink px-2 py-1 text-white">DEV</span>
          <span>NENO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden neo-brutalism"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && isMobile && (
          <div
            className="absolute top-16 left-0 right-0 bg-background border-b neo-brutalism"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium py-2 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
