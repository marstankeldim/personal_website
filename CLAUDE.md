# Personal website — ayan-ospan-site

Next.js 16 (App Router) + React 19 + Tailwind 4, compiled to a **static export** (`output: "export"` in next.config.ts) and deployed to Cloudflare Pages from `out/`. There is no server at runtime — anything requiring a Node server (API routes, server actions, next/image optimization, dynamic rendering) will build fine locally and break the deploy. Keep every page statically exportable.

## Commands
- `npm run dev` — local dev server
- `npm run build` — static export to `out/`; this is the real verification step, run it after changes
- `npm run lint` / `npm run typecheck` — run both before calling a change done
- `npm run assets` — regenerates images via scripts/generate-assets.mjs (uses sharp); only needed when source assets change

## Structure
- `src/data/` — all site content (experience, projects, research, skills, leadership) as typed TS, with shapes in `types.ts`. Content edits happen here, not in components. When adding a data entry, follow the existing object shape exactly; typecheck catches drift.
- `src/app/(main)/` — main site routes; `src/app/velorah/` is a separate standalone page with its own components in `src/components/velorah/`.
- `src/components/` — shared UI (nav, footer, section, reveal, project-card, command palette, theme toggle). Animations use framer-motion, icons lucide-react, theming next-themes.

## Conventions
- This is a personal portfolio: content accuracy matters more than cleverness. Never invent or embellish resume content (titles, dates, achievements) — if data seems missing, ask rather than fill in plausible-sounding text.
- Tailwind 4 (CSS-first config via `@tailwindcss/postcss`, globals in `src/app/globals.css`) — there is no tailwind.config file to edit.
- `out/` and `tsconfig.tsbuildinfo` are build artifacts; never edit them.
