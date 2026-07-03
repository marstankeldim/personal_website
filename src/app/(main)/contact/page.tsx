import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Em, PageHeader } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch — email, LinkedIn, GitHub, or X. Open to Summer 2027 internship conversations in software, robotics, and controls.",
};

const channels = [
  {
    label: "Email",
    value: links.email,
    href: `mailto:${links.email}`,
    note: "Fastest for anything substantive — I read everything.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ayan-ospan",
    href: links.linkedin,
    note: "Recruiting, referrals, and professional conversations.",
  },
  {
    label: "GitHub",
    value: "github.com/marstankeldim",
    href: links.github,
    note: "The code — DKVS, EvalForge, Aqsha, EngStudy, JobMaster.",
  },
  {
    label: "X / Twitter",
    value: "@ayan_ospan",
    href: links.x,
    note: "Occasional engineering notes.",
  },
  {
    label: "Academic email",
    value: links.emailAcademic,
    href: `mailto:${links.emailAcademic}`,
    note: "For Penn State and research-related mail.",
  },
  {
    label: "ORCID",
    value: "0009-0005-2036-9088",
    href: links.orcid,
    note: "Researcher identifier.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title={
          <>
            The inbox is <Em>open</Em>.
          </>
        }
        lede="Open to conversations about Summer 2027 internships in software, robotics, or controls — and to anyone building something interesting with a feedback loop in it."
      />

      <div className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="max-w-3xl overflow-hidden rounded-lg border border-line">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={Math.min(i * 0.04, 0.2)}>
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`group grid gap-1 bg-bg-elevated px-6 py-5 transition-colors hover:bg-accent-soft sm:grid-cols-[140px_1fr_auto] sm:items-center sm:gap-6 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <span className="microlabel">{c.label}</span>
                <span>
                  <span className="font-mono text-[13.5px] text-fg">
                    {c.value}
                  </span>
                  <span className="mt-0.5 block text-[13px] text-muted">
                    {c.note}
                  </span>
                </span>
                <ArrowUpRight
                  size={15}
                  aria-hidden
                  className="hidden text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent sm:block"
                />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-faint">
            Based in University Park, Pennsylvania during the academic year.
            Time zone: US Eastern.
          </p>
        </Reveal>
      </div>
    </>
  );
}
