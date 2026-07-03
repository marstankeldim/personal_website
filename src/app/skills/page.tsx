import type { Metadata } from "next";
import { Em, PageHeader } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { humanLanguages, skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Languages, distributed systems, embedded, robotics, AI engineering, and hardware — every skill traced to the project it comes from.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        kicker="Skills"
        title={
          <>
            Every skill here is <Em>traceable</Em>.
          </>
        }
        lede="No keyword soup. Each entry names the project, job, or lab where it was earned — hover the context to see where a skill actually shipped."
      />

      <div className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={Math.min(i * 0.04, 0.2)}>
              <section className="flex h-full flex-col rounded-lg border border-line bg-bg-elevated p-6 md:p-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-semibold tracking-tight">{group.title}</h2>
                </div>
                <p className="mt-2 text-[13px] italic leading-relaxed text-faint">
                  {group.note}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-baseline justify-between gap-4 border-b border-line pb-2.5 last:border-0"
                    >
                      <span className="text-sm text-fg">{skill.name}</span>
                      {skill.context && (
                        <span className="text-right font-mono text-[10.5px] leading-tight text-faint">
                          {skill.context}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <section className="flex h-full flex-col rounded-lg border border-line bg-bg-elevated p-6 md:p-7">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] text-faint">
                  {String(skillGroups.length + 1).padStart(2, "0")}
                </span>
                <h2 className="font-semibold tracking-tight">Human Languages</h2>
              </div>
              <p className="mt-2 text-[13px] italic leading-relaxed text-faint">
                Three languages, three writing systems.
              </p>
              <ul className="mt-5 space-y-2.5">
                {humanLanguages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-baseline justify-between gap-4 border-b border-line pb-2.5 last:border-0"
                  >
                    <span className="text-sm text-fg">{lang.name}</span>
                    <span className="font-mono text-[10.5px] text-faint">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>
      </div>
    </>
  );
}
