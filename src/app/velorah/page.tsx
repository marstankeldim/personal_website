import type { Metadata } from "next";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { VideoBackground } from "@/components/velorah/video-background";
import "./velorah.css";

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Velorah",
  description:
    "Velorah — a cinematic single-page hero study: fullscreen video, liquid-glass navigation, and Instrument Serif typography.",
};

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const display = { fontFamily: "var(--font-display)" } as const;

const navLinks = [
  { label: "Home", active: true },
  { label: "Studio", active: false },
  { label: "About", active: false },
  { label: "Journal", active: false },
  { label: "Reach Us", active: false },
];

export default function VelorahPage() {
  return (
    <div
      className={`velorah ${instrument.variable} relative flex min-h-svh flex-col overflow-hidden bg-v-bg text-v-fg antialiased`}
    >
      <VideoBackground src={VIDEO_SRC} />

      {/* Navigation */}
      <header className="relative z-10 mx-auto flex w-full max-w-7xl flex-row items-center justify-between px-8 py-6">
        <p className="text-3xl tracking-tight text-v-fg" style={display}>
          Design<sup className="text-xs">®</sup>
        </p>
        <nav aria-label="Design" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              aria-current={link.active ? "page" : undefined}
              className={`text-sm transition-colors ${
                link.active
                  ? "text-v-fg"
                  : "text-v-muted hover:text-v-fg"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="liquid-glass cursor-pointer rounded-full px-6 py-2.5 text-sm text-v-fg transition-transform duration-300 hover:scale-[1.03]"
        >
          Begin Journey
        </button>
      </header>

      {/* Hero */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-32 pb-40 text-center">
        <h1
          className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-balance sm:text-7xl md:text-8xl"
          style={display}
        >
          Where <em className="not-italic text-v-muted">dreams</em> rise{" "}
          <em className="not-italic text-v-muted">through the silence.</em>
        </h1>
        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-v-muted sm:text-lg">
          I am designing tools for deep thinkers, bold creators, and quiet
          rebels. Amid the chaos, I build digital spaces for sharp focus and
          inspired work.
        </p>
        <button
          type="button"
          className="liquid-glass animate-fade-rise-delay-2 mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-v-fg transition-transform duration-300 hover:scale-[1.03]"
        >
          Begin Journey
        </button>
      </main>

      {/* Provenance — the one addition beyond the spec, so the page reads as
          part of the portfolio rather than a real brand. */}
      <footer className="absolute inset-x-0 bottom-5 z-10 text-center">
        <p className="font-mono text-[11px] tracking-wide text-v-muted/80">
          A design study ·{" "}
          <Link
            href="/"
            className="underline decoration-v-muted/50 underline-offset-4 transition-colors hover:text-v-fg"
          >
            back to ayan-ospan.com
          </Link>
        </p>
      </footer>
    </div>
  );
}
