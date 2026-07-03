import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Em, PageHeader, Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { education } from "@/data/experience";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who I am: an electrical engineering student at Penn State from Astana, Kazakhstan — building robots, distributed systems, and products.",
};

const story: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "It started with a robot",
    paragraphs: [
      "I grew up in Astana, Kazakhstan, and went through the physics and mathematics track at Nazarbayev Intellectual School — the country's most competitive secondary program. The thing that actually set the direction, though, was competition robotics. As the drivetrain engineer for FTC Team xCellence #22934, I learned that a robot is a full-stack argument: mechanical choices constrain the software, software choices expose the mechanics, and the scoreboard doesn't care which layer failed.",
      "That season ended with five awards, including first place at the FTC Kazakhstan Regional and the Innovation in Engineering Award at the First Global Challenge. A year earlier, a two-person team and an autonomous LEGO EV3 robot had taken us to a top-3 national finish at the World Robot Olympiad. Somewhere between tuning PID loops at midnight and redesigning a claw so drivers couldn't misalign it, engineering stopped being a subject and became the way I think.",
    ],
  },
  {
    heading: "Building the community, not just the robot",
    paragraphs: [
      "Competition taught me something else: access matters. With teammates, I co-founded RoboFusion, a student organization promoting FIRST robotics across Kazakhstan. We doubled our school's FLL and FTC participation in a year, partnered with TechnoGirls to reach gender parity on our teams, and expanded to four more schools. I spoke about robotics to 434 students at an international education conference and taught hands-on master classes at Nazarbayev University for students from rural schools.",
      "That instinct hasn't gone away — at Penn State I serve as treasurer of the 100-member ACM chapter, sit on the Engineering Undergraduate Council, and mentor first-year international students through the Kazakh Student Association.",
    ],
  },
  {
    heading: "Hardware that has to be right",
    paragraphs: [
      "At Penn State I study electrical engineering with a minor in engineering entrepreneurship, and I gravitate toward the work where correctness is non-negotiable. In the CASA-Goes Lab I build perception and control pipelines for autonomous robots — and then try to break them, systematically, across 100+ simulation runs, before the hardware gets a chance to. At Wabtec's locomotive plant in Astana, I routed wiring for the ES44ACi's control cabin in Siemens NX and caught a documentation error that would have caused incorrect assembly on production locomotives — my first approved Product Change Request.",
      "The same instinct drives my personal projects. DKVS is a replicated key-value store written from scratch in C++20 — an original Raft implementation with a CRC-checked write-ahead log — because I wanted to understand what replication actually costs when nothing is abstracted away. EvalForge is a benchmarking platform for LLMs that refuses to report a number without a confidence interval.",
    ],
  },
  {
    heading: "Products, because engineering should ship",
    paragraphs: [
      "The entrepreneurship minor isn't decorative. I founded Chronos, an AI scheduling platform for students, and took it through Penn State's LaunchBox accelerator programs — 30+ customer discovery interviews, a beta cohort, $2,000 in competitive funding, and 100+ active users. Building alone from zero teaches a kind of engineering judgment that coursework can't: every architecture decision has a cost you personally pay.",
      "What motivates me is the full loop — from the physics of a signal to the system that ships. I want to build software for systems that interact with the physical world and have to be trusted: robots, infrastructure, transportation, tooling for AI. That's the work I'm looking for as a software engineer.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About"
        title={
          <>
            From Astana to autonomous systems — a story about{" "}
            <Em>feedback loops</Em>.
          </>
        }
        lede="Engineer, builder, researcher. Electrical engineering at Penn State, class of December 2027 — currently interning at Wabtec, researching autonomous systems, and shipping my own products."
      />

      <div className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_280px]">
          <div className="max-w-2xl space-y-14">
            {story.map((block, i) => (
              <Reveal key={block.heading}>
                <section>
                  <div className="flex items-baseline gap-4">
                    <span className="microlabel">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                      {block.heading}
                    </h2>
                  </div>
                  <div className="mt-5 space-y-4">
                    {block.paragraphs.map((p) => (
                      <p key={p.slice(0, 32)} className="leading-relaxed text-muted">
                        {p}
                      </p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>

          <aside className="lg:pt-2">
            <Reveal>
              <div className="sticky top-24 space-y-8">
                <div>
                  <p className="microlabel">Quick facts</p>
                  <ul className="mt-4 space-y-3 text-sm">
                    {[
                      ["Based in", "University Park, PA"],
                      ["From", "Astana, Kazakhstan"],
                      ["Degree", "B.S. Electrical Engineering"],
                      ["Minor", "Engineering Entrepreneurship"],
                      ["Graduating", "December 2027"],
                      ["Languages", "English · Kazakh · Russian"],
                    ].map(([k, v]) => (
                      <li
                        key={k}
                        className="flex justify-between gap-4 border-b border-line pb-3"
                      >
                        <span className="text-faint">{k}</span>
                        <span className="text-right text-fg">{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="microlabel">Keep reading</p>
                  <ul className="mt-4 space-y-2.5">
                    {[
                      { href: "/experience", label: "Experience timeline" },
                      { href: "/research", label: "Research" },
                      { href: "/projects", label: "Projects" },
                      { href: "/leadership", label: "Leadership" },
                    ].map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="group flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
                        >
                          {l.label}
                          <ArrowRight
                            size={13}
                            aria-hidden
                            className="transition-transform group-hover:translate-x-0.5"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>

      <Section index="—" title="Education" className="mt-12">
        <div className="space-y-0">
          {education.map((e) => (
            <Reveal key={e.school}>
              <div className="grid gap-2 border-b border-line py-7 md:grid-cols-[200px_1fr] md:gap-10">
                <p className="font-mono text-[12px] text-faint">{e.period}</p>
                <div>
                  <h3 className="font-semibold tracking-tight">{e.school}</h3>
                  <p className="mt-1 text-sm text-muted">{e.credential}</p>
                  <p className="mt-1 text-[13px] text-faint">{e.location}</p>
                  <ul className="mt-3 space-y-1.5">
                    {e.details.map((d) => (
                      <li key={d.slice(0, 24)} className="text-sm leading-relaxed text-muted">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
