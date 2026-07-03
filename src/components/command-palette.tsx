"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  ArrowUpRight,
  FileText,
  FolderGit2,
  Moon,
  Search,
  Sun,
} from "lucide-react";
import { projects } from "@/data/projects";
import { links } from "@/lib/site";

interface Item {
  id: string;
  group: string;
  label: string;
  hint?: string;
  /** Extra search terms not shown in the UI (e.g. a project's tech stack). */
  keywords?: string;
  external?: boolean;
  action: () => void;
}

export function CommandPalette() {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const items = useMemo<Item[]>(() => {
    const go = (href: string) => () => {
      router.push(href);
      close();
    };
    const openExternal = (href: string) => () => {
      window.open(href, "_blank", "noopener,noreferrer");
      close();
    };
    return [
      { id: "home", group: "Pages", label: "Home", action: go("/") },
      { id: "about", group: "Pages", label: "About", action: go("/about") },
      { id: "projects", group: "Pages", label: "Projects", action: go("/projects") },
      { id: "experience", group: "Pages", label: "Experience", action: go("/experience") },
      { id: "research", group: "Pages", label: "Research", action: go("/research") },
      { id: "leadership", group: "Pages", label: "Leadership", action: go("/leadership") },
      { id: "skills", group: "Pages", label: "Skills", action: go("/skills") },
      { id: "resume", group: "Pages", label: "Resume", action: go("/resume") },
      { id: "contact", group: "Pages", label: "Contact", action: go("/contact") },
      ...projects.map((p) => ({
        id: `project-${p.slug}`,
        group: "Projects",
        label: p.title,
        hint: p.category,
        keywords: `${p.tech.join(" ")} ${p.tagline}`,
        action: go(`/projects/${p.slug}`),
      })),
      {
        id: "theme",
        group: "Actions",
        label: resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        action: () => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
          close();
        },
      },
      {
        id: "download-resume",
        group: "Actions",
        label: "Download resume (PDF)",
        external: true,
        action: openExternal(links.resumePdf),
      },
      { id: "gh", group: "Links", label: "GitHub", hint: "marstankeldim", external: true, action: openExternal(links.github) },
      { id: "li", group: "Links", label: "LinkedIn", hint: "ayan-ospan", external: true, action: openExternal(links.linkedin) },
      { id: "x", group: "Links", label: "X / Twitter", hint: "@ayan_ospan", external: true, action: openExternal(links.x) },
      { id: "email", group: "Links", label: "Email", hint: links.email, external: true, action: openExternal(`mailto:${links.email}`) },
    ];
  }, [router, close, resolvedTheme, setTheme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) =>
      [i.label, i.group, i.hint, i.keywords]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [items, query]);

  // Global shortcuts: ⌘K / Ctrl+K toggles, Escape closes.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        close();
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, [close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Keep the active option visible while arrowing through the list.
  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;

  const groups = [...new Set(filtered.map((i) => i.group))];
  let flatIndex = -1;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center bg-black/40 px-4 pt-[14vh] backdrop-blur-[2px]"
      onClick={close}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-lg overflow-hidden rounded-xl border border-line-strong bg-bg-elevated shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search size={15} className="shrink-0 text-faint" aria-hidden />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, filtered.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter") {
                e.preventDefault();
                filtered[active]?.action();
              }
            }}
            placeholder="Search pages, projects, links…"
            aria-label="Search commands"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={
              filtered[active] ? `palette-${filtered[active].id}` : undefined
            }
            className="h-12 w-full bg-transparent text-[15px] text-fg outline-none placeholder:text-faint"
          />
          <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-faint">
            esc
          </kbd>
        </div>
        <div
          ref={listRef}
          id="palette-list"
          role="listbox"
          aria-label="Results"
          className="max-h-[46vh] overflow-y-auto p-2"
        >
          {filtered.length === 0 && (
            <p className="px-3 py-8 text-center text-sm text-muted">
              No results for “{query}”
            </p>
          )}
          {groups.map((group) => (
            <div key={group} role="group" aria-label={group}>
              <p className="px-3 pt-3 pb-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                {group}
              </p>
              {filtered
                .filter((i) => i.group === group)
                .map((item) => {
                  flatIndex += 1;
                  const idx = flatIndex;
                  const isActive = idx === active;
                  return (
                    <button
                      key={item.id}
                      id={`palette-${item.id}`}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      data-index={idx}
                      onMouseEnter={() => setActive(idx)}
                      onClick={item.action}
                      className={`flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                        isActive ? "bg-accent-soft text-fg" : "text-muted"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        {item.group === "Projects" && (
                          <FolderGit2 size={13} className="text-faint" aria-hidden />
                        )}
                        {item.id === "theme" &&
                          (resolvedTheme === "dark" ? (
                            <Sun size={13} className="text-faint" aria-hidden />
                          ) : (
                            <Moon size={13} className="text-faint" aria-hidden />
                          ))}
                        {item.id === "download-resume" && (
                          <FileText size={13} className="text-faint" aria-hidden />
                        )}
                        {item.label}
                      </span>
                      <span className="flex items-center gap-2">
                        {item.hint && (
                          <span className="font-mono text-[10.5px] text-faint">
                            {item.hint}
                          </span>
                        )}
                        {item.external && (
                          <ArrowUpRight size={12} className="text-faint" aria-hidden />
                        )}
                      </span>
                    </button>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
