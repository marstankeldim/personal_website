import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Em, PageHeader } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Internships, research, startup work, and leadership — from Wabtec locomotives to autonomous systems research at Penn State.",
};

const kindStyles: Record<string, string> = {
  Internship: "text-accent border-accent/30",
  Research: "text-accent border-accent/30",
  Startup: "text-accent border-accent/30",
  Work: "text-muted border-line-strong",
  Teaching: "text-muted border-line-strong",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        kicker="Experience"
        title={
          <>
            Places where the work had <Em>consequences</Em>.
          </>
        }
        lede="Internships, research, a startup, and the operational jobs that taught me how teams actually run — newest first."
      />

      <div className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <ol className="relative border-l border-line pl-8 md:pl-12">
          {experience.map((item, i) => (
            <Reveal key={`${item.company}-${item.role}`} delay={Math.min(i * 0.03, 0.15)}>
              <li className="relative pb-14 last:pb-0">
                {/* Timeline node */}
                <span
                  aria-hidden
                  className={`absolute top-1.5 -left-8 flex h-[9px] w-[9px] -translate-x-1/2 items-center justify-center rounded-full md:-left-12 ${
                    item.period.includes("Present")
                      ? "bg-accent"
                      : "border border-line-strong bg-bg"
                  }`}
                />
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <p className="font-mono text-[12px] text-faint">{item.period}</p>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] ${kindStyles[item.kind] ?? ""}`}
                  >
                    {item.kind}
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
                  {item.role}
                </h2>
                <p className="mt-1 text-[15px] text-muted">
                  {item.company}
                  {item.location && (
                    <span className="text-faint"> · {item.location}</span>
                  )}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                  {item.summary}
                </p>
                <ul className="mt-4 max-w-2xl space-y-2.5">
                  {item.bullets.map((b) => (
                    <li
                      key={b.slice(0, 32)}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-[9px] h-px w-4 shrink-0 bg-line-strong" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {item.tech && (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-line px-2 py-0.5 font-mono text-[10.5px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                {item.related?.map((slug) => (
                  <Link
                    key={slug}
                    href={`/projects/${slug}`}
                    className="link-underline mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-fg"
                  >
                    Read the project deep-dive{" "}
                    <ArrowRight size={13} aria-hidden />
                  </Link>
                ))}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </>
  );
}
