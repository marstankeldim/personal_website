import type { Metadata } from "next";
import { Em, PageHeader, Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { awards, leadership } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "ACM treasurer, student government, peer mentoring, and co-founding a robotics organization that doubled STEM participation in Kazakhstan.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        kicker="Leadership"
        title={
          <>
            Teams run on <Em>trust</Em> — someone has to build it.
          </>
        }
        lede="From managing a chapter budget to co-founding a robotics organization that doubled participation — leading, mentoring, and community-building alongside the engineering."
      />

      <div className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {leadership.map((item, i) => (
            <Reveal key={`${item.organization}-${item.role}`} delay={Math.min(i * 0.04, 0.2)}>
              <div className="flex h-full flex-col rounded-lg border border-line bg-bg-elevated p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-semibold tracking-tight">{item.role}</h2>
                  <span className="shrink-0 font-mono text-[11px] text-faint">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{item.organization}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {item.summary}
                </p>
                {item.bullets && (
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((b) => (
                      <li
                        key={b.slice(0, 32)}
                        className="flex gap-3 text-[13.5px] leading-relaxed text-muted"
                      >
                        <span className="mt-[8px] h-px w-3.5 shrink-0 bg-accent" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Section index="—" title="Awards & recognition" className="mt-16">
        <div className="overflow-hidden rounded-lg border border-line">
          {awards.map((award, i) => (
            <Reveal key={award.title} delay={Math.min(i * 0.03, 0.15)}>
              <div
                className={`grid gap-1 px-6 py-5 sm:grid-cols-[64px_1fr_auto] sm:items-baseline sm:gap-6 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <span className="font-mono text-[12px] text-faint">
                  {award.year}
                </span>
                <div>
                  <p className="font-medium tracking-tight">{award.title}</p>
                  <p className="mt-0.5 text-sm text-muted">
                    {award.issuer}
                    {award.detail && (
                      <span className="text-faint"> — {award.detail}</span>
                    )}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
