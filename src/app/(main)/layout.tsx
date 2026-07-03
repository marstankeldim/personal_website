import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CommandPalette } from "@/components/command-palette";

/**
 * Chrome for the main site: nav, footer, command palette, skip link.
 * Routes outside this group (e.g. /velorah) render without it.
 */
export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="min-h-screen">
        {children}
      </main>
      <Footer />
      <CommandPalette />
    </>
  );
}
