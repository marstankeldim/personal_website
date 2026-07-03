import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Em, PageHeader, Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { researchAreas, researchInterests } from "@/data/research";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Undergraduate research in autonomous systems with assurances — ROS perception and control pipelines, simulation-first validation, and discrete event systems.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        kicker="Research"
        title={
          <>
            Autonomy you can <Em>trust</Em>, not just demo.
          </>
        }
        lede="My research sits at the intersection of robotics and rigor: building perception and control systems for autonomous robots, then validating — empirically and formally — that they behave when the world doesn't cooperate."
      />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="space-y-20 pb-8">
          {researchAreas.map((area, i) => (
            <Reveal key={area.title}>
              <section className="grid gap-8 border-t border-line pt-12 lg:grid-cols-[280px_1fr] lg:gap-16">
                <div>
                  <span className="microlabel">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
                    {area.title}
                  </h2>
                  {area.organization && (
                    <p className="mt-3 text-sm text-muted">{area.organization}</p>
                  )}
                  {area.role && (
                    <p className="mt-1 text-sm text-muted">{area.role}</p>
                  )}
                  {area.period && (
                    <p className="mt-1 font-mono text-[12px] text-faint">
                      {area.period}
                    </p>
                  )}
                </div>
                <div className="max-w-2xl">
                  <div className="space-y-4">
                    {area.body.map((p) => (
                      <p key={p.slice(0, 32)} className="leading-relaxed text-muted">
                        {p}
                      </p>
                    ))}
                  </div>
                  {area.bullets && (
                    <ul className="mt-6 space-y-2.5">
                      {area.bullets.map((b) => (
                        <li
                          key={b.slice(0, 32)}
                          className="flex gap-3 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-[9px] h-px w-4 shrink-0 bg-accent" aria-hidden />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {area.tech && (
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {area.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-line px-2 py-0.5 font-mono text-[10.5px] text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>

      <Section index="03" title="Interests & directions">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <ul className="max-w-2xl space-y-4">
            {researchInterests.map((interest) => (
              <Reveal key={interest.slice(0, 24)}>
                <li className="flex gap-4 border-b border-line pb-4 leading-relaxed text-muted">
                  <span className="mt-[11px] h-px w-5 shrink-0 bg-accent" aria-hidden />
                  {interest}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <div className="h-fit rounded-lg border border-line p-6">
              <p className="microlabel">Scholarly identity</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                No publications yet — the goal is to change that. Research
                identifier registered and ready:
              </p>
              <a
                href={links.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-3 inline-block font-mono text-[13px] text-fg"
              >
                ORCID 0009-0005-2036-9088
              </a>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Related engineering work:
              </p>
              <Link
                href="/projects/dkvs"
                className="group mt-2 flex items-center gap-1.5 text-sm font-medium text-fg"
              >
                DKVS — distributed consensus in practice
                <ArrowRight
                  size={13}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
