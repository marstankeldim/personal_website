import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Em, Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/data/projects";
import { links } from "@/lib/site";

const currently = [
  {
    label: "Engineer Intern @ Wabtec",
    detail:
      "Localizing the ES44ACi locomotive's auxiliary cabin — wire routing in Siemens NX, assembly documentation, and an approved PCR.",
    href: "/experience",
  },
  {
    label: "Researcher @ CASA-Goes Lab",
    detail:
      "Perception and control pipelines for autonomous robots — validated across 100+ simulation runs before hardware.",
    href: "/research",
  },
  {
    label: "Founder @ Chronos",
    detail:
      "An AI scheduling platform with 100+ users, funded by Happy Valley LaunchBox.",
    href: "/projects/chronos",
  },
  {
    label: "Building DKVS",
    detail:
      "A replicated key-value store in C++20 — Raft, write-ahead logging, and leader election from scratch.",
    href: "/projects/dkvs",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ————— Hero ————— */}
      <section className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-20 md:px-8 md:pt-36 md:pb-28">
          <Reveal>
            <p className="microlabel flex items-center gap-3">
              <span className="status-dot" aria-hidden />
              Electrical Engineering · Penn State · Class of 2027
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7 max-w-4xl text-[2.7rem]/[1.08] font-semibold tracking-tight text-balance sm:text-6xl/[1.06] md:text-7xl/[1.04]">
              Ayan Ospan builds at the layer where{" "}
              <Em>hardware</Em> meets <Em>software</Em>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Where a control loop is only as good as the code running it, and
              code has to answer to physics. Engineer intern at Wabtec,
              undergraduate researcher in autonomous systems, founder of
              Chronos — currently writing distributed systems in C++ and
              benchmarking infrastructure for LLMs.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="group flex h-11 items-center gap-2 rounded-md bg-fg px-5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
              >
                View projects
                <ArrowRight
                  size={15}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/resume"
                className="flex h-11 items-center rounded-md border border-line-strong px-5 text-sm font-medium text-fg transition-colors hover:border-fg"
              >
                Resume
              </Link>
              <Link
                href="/contact"
                className="flex h-11 items-center rounded-md border border-line-strong px-5 text-sm font-medium text-fg transition-colors hover:border-fg"
              >
                Contact
              </Link>
              <span className="mx-1 hidden h-5 w-px bg-line-strong sm:block" aria-hidden />
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center gap-1 px-2 text-sm text-muted transition-colors hover:text-fg"
              >
                GitHub <ArrowUpRight size={13} aria-hidden />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center gap-1 px-2 text-sm text-muted transition-colors hover:text-fg"
              >
                LinkedIn <ArrowUpRight size={13} aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— Now ————— */}
      <Section index="01" title="Now">
        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {currently.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <Link
                href={item.href}
                className="group flex h-full flex-col bg-bg p-6 transition-colors hover:bg-bg-elevated md:p-7"
              >
                <p className="flex items-center justify-between gap-2 font-mono text-[12.5px] text-fg">
                  {item.label}
                  <ArrowUpRight
                    size={13}
                    aria-hidden
                    className="text-faint transition-colors group-hover:text-accent"
                  />
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ————— Selected work ————— */}
      <Section index="02" title="Selected work">
        <div className="grid gap-4 md:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link
            href="/projects"
            className="link-underline mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-fg"
          >
            All projects <ArrowRight size={14} aria-hidden />
          </Link>
        </Reveal>
      </Section>

      {/* ————— Signals ————— */}
      <Section index="03" title="In numbers">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {[
            { value: "28%", label: "trajectory stability gained in autonomy research" },
            { value: "100+", label: "users on Chronos, with $2K in competitive funding" },
            { value: "716", label: "locomotive HMI error messages authored at Wabtec" },
            { value: "7", label: "robotics & engineering awards, national to international" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <div>
                <p className="font-mono text-4xl font-medium tracking-tight text-fg md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ————— Contact CTA ————— */}
      <Section index="04" title="Get in touch">
        <Reveal>
          <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            Open to conversations about{" "}
            <span className="text-fg">Summer 2027 internships</span> in
            software, robotics, or controls — and about distributed systems,
            embedded projects, or anything with a feedback loop in it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${links.email}`}
              className="flex h-11 items-center rounded-md bg-fg px-5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              {links.email}
            </a>
            <Link
              href="/contact"
              className="flex h-11 items-center rounded-md border border-line-strong px-5 text-sm font-medium transition-colors hover:border-fg"
            >
              All contact options
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
