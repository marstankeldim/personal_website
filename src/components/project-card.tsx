import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/types";

export function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
      {status === "Active" ? (
        <span className="status-dot" aria-hidden />
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-faint" aria-hidden />
      )}
      {status}
    </span>
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex h-full flex-col rounded-lg border border-line bg-bg-elevated p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_12px_40px_-18px_rgba(0,0,0,0.25)] md:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-3">
          {index !== undefined && (
            <span className="font-mono text-[11px] text-faint">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
        </div>
        <ArrowUpRight
          size={16}
          aria-hidden
          className="mt-1 shrink-0 text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
        />
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.tagline}
      </p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map((t) => (
          <span
            key={t}
            className="rounded-md border border-line px-2 py-0.5 font-mono text-[10.5px] text-muted"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 5 && (
          <span className="px-1 py-0.5 font-mono text-[10.5px] text-faint">
            +{project.tech.length - 5}
          </span>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <StatusBadge status={project.status} />
        <span className="font-mono text-[10.5px] text-faint">
          {project.period}
        </span>
      </div>
    </Link>
  );
}
