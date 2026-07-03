"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Command, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const primary = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
];

const secondary = [
  { href: "/leadership", label: "Leadership" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  // The menu remembers which path it was opened on, so navigating anywhere
  // closes it by derivation — no effect needed.
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const open = openForPath === pathname;

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:px-8"
      >
        <Link
          href="/"
          className="font-mono text-[13px] font-medium tracking-tight text-fg transition-colors hover:text-accent"
        >
          ayan<span className="text-accent">.</span>ospan
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-md px-3 py-1.5 text-[13.5px] transition-colors ${
                isActive(item.href)
                  ? "text-fg"
                  : "text-muted hover:bg-accent-soft hover:text-fg"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
            aria-label="Open command palette"
            className="hidden h-8 items-center gap-1.5 rounded-md border border-line px-2.5 font-mono text-[11px] text-muted transition-colors hover:border-line-strong hover:text-fg md:flex"
          >
            <Command size={11} aria-hidden />
            <span>K</span>
          </button>
          <ThemeToggle />
          <Link
            href="/resume"
            className="hidden h-8 items-center rounded-md bg-fg px-3.5 text-[13px] font-medium text-bg transition-opacity hover:opacity-85 md:flex"
          >
            Resume
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpenForPath(open ? null : pathname)}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:text-fg md:hidden"
          >
            {open ? <X size={17} aria-hidden /> : <Menu size={17} aria-hidden />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-x-0 top-14 bottom-0 z-40 overflow-y-auto border-t border-line bg-bg md:hidden">
          <div className="mx-auto max-w-6xl px-5 py-6">
            <ul className="flex flex-col">
              {[...primary, ...secondary].map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`flex items-baseline gap-4 border-b border-line py-4 text-lg ${
                      isActive(item.href) ? "text-fg" : "text-muted"
                    }`}
                  >
                    <span className="font-mono text-[11px] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
