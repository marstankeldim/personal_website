# ayan-ospan-site

Personal website of **Ayan Ospan** — a fully static Next.js site designed for
Cloudflare Pages. No backend, no database, no analytics, no auth: everything
compiles to plain HTML/CSS/JS in `out/`.

## Stack

- **Next.js 16** (App Router, `output: "export"`, Turbopack) + **React 19**
- **TypeScript** (strict, `noUncheckedIndexedAccess`)
- **Tailwind CSS v4** (CSS-first config in `src/app/globals.css`)
- **Framer Motion** — used sparingly: scroll reveals and a cross-page fade,
  all disabled under `prefers-reduced-motion`
- **next-themes** — class-based dark/light mode
- **lucide-react** — icons

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build → static export in out/
npm run start      # serve the exported site locally (npx serve out)
npm run lint       # eslint (next/core-web-vitals + next/typescript)
npm run typecheck  # tsc --noEmit
npm run assets     # regenerate PNG icons + og.png from public/favicon.svg
```

## Deploy to Cloudflare Pages

The site is a pure static export — no adapter, no functions, no environment
variables.

**Via the dashboard (recommended):**

1. Push this repository to GitHub/GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Deploy. Done.

**Via Wrangler CLI:**

```bash
npm run build
npx wrangler pages deploy out --project-name=ayan-ospan
```

After connecting a custom domain, update `url` in
[`src/lib/site.ts`](src/lib/site.ts) so canonical URLs, Open Graph tags,
`sitemap.xml`, and `robots.txt` point at the real domain, then rebuild.

## Folder structure

```
├── public/
│   ├── favicon.svg            # source of truth for all icons
│   ├── icon-192.png, apple-icon.png, og.png   # generated (npm run assets)
│   └── resume/Ayan_Ospan_Resume.pdf
├── scripts/
│   └── generate-assets.mjs    # SVG → PNG rasterization (sharp, dev-only)
└── src/
    ├── app/                   # one folder per route + layout, sitemap, robots, 404
    │   └── projects/[slug]/   # statically generated project deep-dives
    ├── components/            # nav, footer, command palette, cards, primitives
    ├── data/                  # ALL site content lives here (typed)
    │   ├── types.ts           # content schemas
    │   ├── projects.ts        # projects + detail-page content
    │   ├── experience.ts      # work/research timeline + education
    │   ├── leadership.ts      # leadership roles + awards
    │   ├── research.ts        # research areas + interests
    │   └── skills.ts          # skill groups (each skill cites its source)
    └── lib/site.ts            # site URL, name, social links
```

## Updating content

Content and presentation are fully separated — you should almost never need
to touch a component to change what the site says.

- **Add a project:** append an entry to `src/data/projects.ts`. The projects
  index, filters, command palette, homepage (if `featured: true`), detail
  page, and sitemap all update automatically. `slug` becomes the URL.
- **Add experience / leadership / awards / skills:** edit the corresponding
  file in `src/data/`. Types in `src/data/types.ts` enforce the shape.
- **Update the resume PDF:** replace
  `public/resume/Ayan_Ospan_Resume.pdf` (keep the filename), and adjust the
  condensed HTML version in `src/app/resume/page.tsx` if the highlights
  changed.
- **Change contact links:** `src/lib/site.ts`.
- **Change the favicon / OG image:** edit `public/favicon.svg` or the OG
  template in `scripts/generate-assets.mjs`, then run `npm run assets`.

## Design notes

- Type: Inter (UI), Newsreader italic (accent words), JetBrains Mono
  (labels, dates, tech chips).
- Color: warm near-black / off-white with a single copper accent — defined
  as CSS variables in `globals.css` and consumed as Tailwind utilities
  (`bg-bg`, `text-muted`, `text-accent`, …).
- Dark and light mode are both first-class; theme follows the system by
  default and persists via `next-themes`.
- Keyboard: `⌘K` / `Ctrl+K` opens the command palette (pages, projects,
  links, theme). All interactive elements have visible focus states; a
  skip-to-content link is the first tab stop.
