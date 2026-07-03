"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/data/types";
import { ProjectCard } from "./project-card";

const categories: ProjectCategory[] = [
  "Distributed Systems",
  "AI & ML",
  "Product",
  "Embedded",
  "Robotics",
  "Hardware",
  "Data",
];

/** Frequently used technologies, surfaced as quick filters. */
const techFilters = [
  "C++20",
  "TypeScript",
  "Python",
  "C",
  "Java",
  "React",
  "Next.js 15",
  "PostgreSQL",
  "Supabase",
  "Raft",
  "STM32 HAL",
  "TensorFlow",
];

export function ProjectsExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProjectCategory | null>(null);
  const [tech, setTech] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (category && p.category !== category) return false;
      if (tech && !p.tech.includes(tech)) return false;
      if (!q) return true;
      const haystack = [p.title, p.tagline, p.summary, p.category, ...p.tech]
        .join(" ")
        .toLowerCase();
      return q.split(/\s+/).every((term) => haystack.includes(term));
    });
  }, [query, category, tech]);

  const hasFilters = query !== "" || category !== null || tech !== null;

  return (
    <div>
      {/* Search */}
      <div className="flex items-center gap-3 border-b border-line-strong pb-3">
        <Search size={16} className="shrink-0 text-faint" aria-hidden />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects by name, description, or technology…"
          aria-label="Search projects"
          className="w-full bg-transparent text-[15px] outline-none placeholder:text-faint [&::-webkit-search-cancel-button]:hidden"
        />
        {hasFilters && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory(null);
              setTech(null);
            }}
            className="flex shrink-0 items-center gap-1 font-mono text-[11px] text-muted transition-colors hover:text-fg"
          >
            <X size={12} aria-hidden /> clear
          </button>
        )}
      </div>

      {/* Category filter */}
      <div className="mt-6 flex flex-wrap items-center gap-2" role="group" aria-label="Filter by category">
        <span className="microlabel mr-2">Category</span>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={category === c}
            onClick={() => setCategory(category === c ? null : c)}
            className={`rounded-full border px-3 py-1 text-[12.5px] transition-colors ${
              category === c
                ? "border-fg bg-fg text-bg"
                : "border-line text-muted hover:border-line-strong hover:text-fg"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Tech filter */}
      <div className="mt-3 flex flex-wrap items-center gap-2" role="group" aria-label="Filter by technology">
        <span className="microlabel mr-2">Tech</span>
        {techFilters.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={tech === t}
            onClick={() => setTech(tech === t ? null : t)}
            className={`rounded-full border px-3 py-1 font-mono text-[11px] transition-colors ${
              tech === t
                ? "border-accent bg-accent-soft text-accent"
                : "border-line text-muted hover:border-line-strong hover:text-fg"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Results */}
      <p className="mt-8 font-mono text-[11px] text-faint" aria-live="polite">
        {filtered.length} project{filtered.length === 1 ? "" : "s"}
      </p>
      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {filtered.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-lg border border-dashed border-line-strong p-12 text-center">
          <p className="text-sm text-muted">
            Nothing matches those filters. Try clearing one.
          </p>
        </div>
      )}
    </div>
  );
}
