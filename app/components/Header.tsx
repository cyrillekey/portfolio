"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme()!;

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navItems = [
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 flex items-center justify-between border-b border-border/50 bg-background/80 backdrop-blur-md">
      <Link
        href="/"
        className="font-display text-xs md:text-sm tracking-[0.2em] text-foreground/60 uppercase hover:text-foreground transition-colors z-[61]"
      >
        Portfolio
      </Link>

      <nav className="hidden md:flex items-center gap-6 lg:gap-8">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="link-underline text-xs lg:text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <button
          onClick={toggleTheme}
          className="p-2 text-foreground/60 hover:text-foreground transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>
      </nav>

      <div className="flex md:hidden items-center gap-1 z-[61]">
        <button
          onClick={toggleTheme}
          className="p-2 text-foreground/60 hover:text-foreground transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-foreground/60 hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed md:hidden inset-0 z-[60]">
          <div className="absolute inset-0 bg-background" />
          <div className="relative h-full flex flex-col">
            <div className="flex items-center justify-end px-4 py-4  border-foreground/5"></div>
            <div className="flex flex-col items-center justify-center gap-8 py-20 z-[999] bg-background">
              {navItems.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-3xl text-foreground/80 hover:text-foreground transition-colors"
                  style={{
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: `all 0.3s ease-out ${i * 80 + 100}ms`,
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div
                className="flex flex-col items-center gap-6 mt-8"
                style={{
                  opacity: 1,
                  transition: `all 0.3s ease-out ${navItems.length * 80 + 100}ms`,
                }}
              >
                <span className="text-xs text-foreground/40 tracking-widest uppercase">
                  Social
                </span>
                <a
                  href="https://github.com/cyrillekey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-foreground/70 hover:text-foreground link-underline"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/cyrilleotieno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-foreground/70 hover:text-foreground link-underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
