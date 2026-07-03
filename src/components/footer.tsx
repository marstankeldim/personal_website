import Link from "next/link";
import { links } from "@/lib/site";

const sitemap = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
  { href: "/leadership", label: "Leadership" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

const social = [
  { href: links.github, label: "GitHub" },
  { href: links.linkedin, label: "LinkedIn" },
  { href: links.x, label: "X / Twitter" },
  { href: `mailto:${links.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-mono text-[13px] text-fg">
              ayan<span className="text-accent">.</span>ospan
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Building at the layer where hardware meets software — where a
              control loop is only as good as the code running it, and code
              has to answer to physics.
            </p>
          </div>
          <div className="flex gap-16">
            <nav aria-label="Site">
              <p className="microlabel">Site</p>
              <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5 md:grid-cols-1">
                {sitemap.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Elsewhere">
              <p className="microlabel">Elsewhere</p>
              <ul className="mt-4 space-y-2.5">
                {social.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-faint">
            © {new Date().getFullYear()} Ayan Ospan
          </p>
          <p className="font-mono text-[11px] tracking-wide text-faint">
            Next.js · static export · Cloudflare Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
