import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { StatusBadge } from "@/components/project-card";
import { getProject, projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    openGraph: { title: project.title, description: project.tagline },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
      {/* Header */}
      <div className="pt-14 md:pt-20">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft size={14} aria-hidden /> All projects
          </Link>
          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="microlabel">{project.category}</span>
            <StatusBadge status={project.status} />
            <span className="font-mono text-[11px] text-faint">
              {project.period}
            </span>
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {project.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center gap-2 rounded-md bg-fg px-4 text-sm font-medium text-bg transition-opacity hover:opacity-85"
              >
                <Github size={15} aria-hidden /> Source on GitHub
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center gap-1.5 rounded-md border border-line-strong px-4 text-sm font-medium transition-colors hover:border-fg"
              >
                Visit live <ArrowUpRight size={14} aria-hidden />
              </a>
            )}
          </div>
        </Reveal>
      </div>

      {/* Metrics strip */}
      {project.metrics && (
        <Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-bg-elevated px-6 py-6">
                <p className="font-mono text-2xl font-medium tracking-tight md:text-3xl">
                  {m.value}
                </p>
                <p className="mt-1.5 text-[13px] leading-snug text-muted">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_280px]">
        <div className="max-w-2xl">
          {/* Overview */}
          <Reveal>
            <p className="text-base leading-relaxed text-muted md:text-[17px]">
              {project.summary}
            </p>
          </Reveal>

          {/* Deep-dive sections */}
          {project.sections.map((section, i) => (
            <Reveal key={section.heading}>
              <section className="mt-14">
                <div className="flex items-baseline gap-4">
                  <span className="microlabel">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                    {section.heading}
                  </h2>
                </div>
                <div className="mt-5 space-y-4">
                  {section.body.map((p) => (
                    <p key={p.slice(0, 32)} className="leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}

          {/* Highlights */}
          <Reveal>
            <section className="mt-14">
              <div className="flex items-baseline gap-4">
                <span className="microlabel">
                  {String(project.sections.length + 1).padStart(2, "0")}
                </span>
                <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                  Highlights
                </h2>
              </div>
              <ul className="mt-6 space-y-3">
                {project.highlights.map((h) => (
                  <li
                    key={h.slice(0, 32)}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-[9px] h-px w-4 shrink-0 bg-accent" aria-hidden />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>

        {/* Sidebar */}
        <aside>
          <Reveal>
            <div className="sticky top-24 space-y-8">
              <div>
                <p className="microlabel">Stack</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="microlabel">Next project</p>
                {next && (
                  <Link
                    href={`/projects/${next.slug}`}
                    className="group mt-4 block rounded-lg border border-line p-5 transition-colors hover:border-line-strong"
                  >
                    <p className="flex items-center justify-between font-medium">
                      {next.title}
                      <ArrowUpRight
                        size={14}
                        aria-hidden
                        className="text-faint transition-colors group-hover:text-accent"
                      />
                    </p>
                    <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-muted">
                      {next.tagline}
                    </p>
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        </aside>
      </div>
    </article>
  );
}
