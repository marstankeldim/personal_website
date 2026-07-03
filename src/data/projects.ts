import type { Project } from "./types";

/**
 * All projects, ordered roughly by significance. To add a project, append an
 * entry here — the projects index, filters, homepage, detail page, and
 * sitemap all derive from this array.
 */
export const projects: Project[] = [
  {
    slug: "dkvs",
    title: "DKVS",
    tagline:
      "A fault-tolerant, replicated key-value store written from scratch in C++20 — an original implementation of Raft.",
    period: "Jun 2026 — Present",
    status: "Active",
    category: "Distributed Systems",
    featured: true,
    tech: ["C++20", "Raft", "POSIX Sockets", "CMake", "GoogleTest", "Linux"],
    github: "https://github.com/marstankeldim/dkvs",
    summary:
      "No frameworks, no serialization libraries, no consensus libraries. Leader election and log replication are implemented directly from the Raft paper; persistence is a CRC-checked write-ahead log; the only runtime dependencies are POSIX sockets and threads.",
    highlights: [
      "Leader election and log replication (Raft): commands are acknowledged only after a majority of nodes has durably stored them",
      "Crash recovery: every node fsyncs entries to a write-ahead log before acknowledging; torn or corrupted tail writes are detected by per-record CRC32 and discarded safely",
      "Automatic failover: kill -9 the leader and the survivors elect a new one in a few hundred milliseconds, with zero committed data lost",
      "Linearizable operations: reads go through the replicated log, so a GET observes exactly the writes committed before it — even across leader changes",
      "Quorum safety: with a majority of nodes down, the cluster refuses writes rather than diverging (CP)",
      "Client redirects: clients may contact any node; non-leaders answer REDIRECT and the CLI follows automatically",
    ],
    metrics: [
      { value: "0", label: "external runtime dependencies" },
      { value: "<1 s", label: "leader failover, zero data lost" },
      { value: "CRC32", label: "per-record WAL integrity" },
    ],
    sections: [
      {
        heading: "Why build it from scratch",
        body: [
          "DKVS exists to understand what replication actually costs — the consistency trade-offs and fault-tolerance mechanics that libraries normally abstract away. Every command a client submits becomes an entry in a replicated log. The leader replicates it to followers; once a majority has fsynced it, the entry commits, each node's applier feeds it to the in-memory state machine, and the client handler that submitted it gets the result.",
          "The design is strictly layered: a client server (thread per connection) accepts a text protocol, a RaftNode handles consensus RPCs between peers, a storage layer owns metadata and the write-ahead log, and the KVStore state machine applies only committed entries.",
        ],
      },
      {
        heading: "Correctness under failure",
        body: [
          "The interesting work is in the failure paths. A deposed leader stranded behind a network partition can never serve stale data as committed, because reads are serialized through the log like writes. A node that crashes mid-write recovers by replaying its log and rejoining the cluster; CRC32 checks detect torn tail writes and discard them safely.",
          "The project is exercised through a live cluster script — start three nodes, write through the CLI, kill the leader mid-flight, and verify that a new leader answers with data intact.",
        ],
      },
    ],
  },
  {
    slug: "evalforge",
    title: "EvalForge",
    tagline:
      "A production-grade, reproducible benchmarking and evaluation platform for LLMs — statistically honest results, every run stored.",
    period: "2026 — Present",
    status: "Active",
    category: "AI & ML",
    featured: true,
    tech: [
      "TypeScript",
      "Node.js",
      "Fastify",
      "Next.js",
      "Tailwind CSS",
      "Recharts",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Vitest",
    ],
    github: "https://github.com/marstankeldim/ai_benchmark",
    summary:
      "EvalForge is what you reach for when “the model felt better” isn't good enough. It runs standardized and custom benchmarks across many providers, grades outputs with pluggable judges, persists every run for reproducibility, and reports results with real confidence intervals and significance tests.",
    highlights: [
      "7 model providers behind one fetch-based interface — OpenAI, Anthropic, Google Gemini, OpenRouter, Groq, Ollama, plus a deterministic mock for offline runs; no vendor SDKs",
      "Benchmark suites across coding, math, reasoning, knowledge, tool use, and long context — HumanEval, GSM8K, MMLU, ARC, TruthfulQA, function calling, and needle-in-a-haystack retrieval (10k–500k tokens)",
      "Pluggable judges: exact / regex / numeric / JSON-schema graders, embedding similarity, LLM-as-judge, and sandboxed code execution",
      "A real engine: parallel execution, retries with backoff, timeouts, content-addressed caching, and resume-after-interrupt",
      "Statistical rigor: bootstrap and Wilson confidence intervals, paired permutation / McNemar / Welch tests, effect sizes, and Elo / Bradley–Terry leaderboards",
      "REST API (Fastify) and a Next.js dashboard with radar, score-history, latency, cost, and heatmap views; reports in Markdown, HTML, JSON, and CSV",
    ],
    metrics: [
      { value: "7", label: "model providers, one interface" },
      { value: "100+", label: "offline-reproducible tests" },
      { value: "1 file", label: "to add a provider, benchmark, or judge" },
    ],
    sections: [
      {
        heading: "Design rule: one new file",
        body: [
          "The whole system is built around one rule: adding a new provider, benchmark, judge, or dataset format takes exactly one new file. Each benchmark self-registers with sample data; each provider implements a single fetch-based interface; persistence sits behind a single RunStore port with in-memory, filesystem, and Postgres implementations.",
          "It runs with zero setup — no API keys, no database, no Docker required. A deterministic mock provider drives the entire pipeline offline, which is how the 100+ tests stay fast and reproducible.",
        ],
      },
      {
        heading: "Statistically honest by default",
        body: [
          "Every headline number ships with a confidence interval. Model comparisons use paired significance tests rather than raw score deltas, and leaderboards are computed with Elo and Bradley–Terry models rather than simple averages. Runs are reproducible byte-for-byte from stored configuration — in the spirit of OpenAI Evals, SWE-bench, and LiveBench.",
          "The premise: “best model” means nothing without a workload attached. EvalForge exists to find the most efficient model per task, not a single winner.",
        ],
      },
    ],
  },
  {
    slug: "chronos",
    title: "Chronos",
    tagline:
      "An AI-powered scheduling platform for students — founded, funded, and shipped from zero.",
    period: "Nov 2025 — Present",
    status: "Active",
    category: "Product",
    featured: true,
    tech: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "Cloudflare Pages",
      "Cloudflare Workers",
      "Capacitor",
      "GitHub Actions",
    ],
    link: "https://chronos-online.com",
    summary:
      "A constraint-based AI scheduling engine that turns tasks, goals, and calendar commitments into optimized weekly schedules. Built solo as a startup through Penn State's Happy Valley LaunchBox — 100+ active users and $2,000 in competitive funding.",
    highlights: [
      "Constraint-based scheduling engine with energy- and priority-aware placement, break insertion, and conflict detection — the AI builds a full week schedule in under 10 seconds",
      "35% reduction in conflicting event generation during internal testing",
      "Full-stack production system: React + TypeScript frontend, Supabase auth/DB/edge functions, deployed on Cloudflare Pages and Workers",
      "Recurring events with exception handling, undo/redo history, drag-and-drop scheduling, .ics calendar import/export, and full DST-aware timezone support",
      "Security hardening: CSP headers, row-level security policies, environment validation; CI/CD via GitHub Actions",
      "30+ customer discovery interviews — 74% of students surveyed reported significant planning-related stress; $2,000 secured from Happy Valley LaunchBox",
    ],
    metrics: [
      { value: "100+", label: "active users" },
      { value: "$2,000", label: "competitive funding" },
      { value: "<10 s", label: "to generate a week schedule" },
    ],
    sections: [
      {
        heading: "From interviews to engine",
        body: [
          "Chronos started with 30+ customer discovery interviews across student cohorts, which surfaced one number: 74% of students reported significant planning-related stress. The product answer is an adaptive scheduling system that accounts for energy, priority, and academic workload patterns — a niche that Notion, Clockwise, and Google Calendar don't address.",
          "The engine treats scheduling as a constraint problem: fixed commitments, task deadlines, energy windows, and break policies go in; a conflict-free week comes out. Conflict handling is configurable (strict / warn / allow), and the recurring-event model uses a base-plus-exception design so a single edited occurrence doesn't corrupt the series.",
        ],
      },
      {
        heading: "Running it like a company",
        body: [
          "Chronos went through Penn State's Idea TestLab and MVP DevLab accelerator programs and secured $2,000 in competitive funding from Happy Valley LaunchBox. Beta testing ran with students across majors, including a collaboration agreement with a student productivity club for structured feedback.",
          "Engineering runs like production software: GitHub Actions CI for lint, typecheck, and build; CSP and secure headers; Supabase row-level security on every table; and a Capacitor build that packages the platform for mobile with push notifications.",
        ],
      },
    ],
  },
  {
    slug: "aqsha",
    title: "Aqsha",
    tagline:
      "A production-grade personal finance platform — atomic money math, multi-currency, and a recurring-billing engine.",
    period: "2026",
    status: "Shipped",
    category: "Product",
    featured: true,
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Neon",
      "TanStack Query",
      "Zod",
      "Tailwind CSS",
      "Recharts",
    ],
    github: "https://github.com/marstankeldim/aqsha",
    summary:
      "Aqsha (“money” in Kazakh) is a Monarch/YNAB-class finance app: 16-model normalized PostgreSQL schema, strictly layered service/repository architecture, atomic reversible balance mutations, and FX rollups across 12 currencies — validated end-to-end against a live database.",
    highlights: [
      "Strictly layered architecture — UI → TanStack Query → route handlers → Zod validation → services → repositories → Prisma → PostgreSQL; no handler touches the database directly",
      "Money correctness: all values stored as PostgreSQL NUMERIC / Prisma Decimal, never JS floats; balances derived per account type with liability sign-flipping",
      "Atomic, reversible mutations: create/edit/delete recompute balances inside database transactions; edits reverse the prior effect and apply the new one atomically",
      "Idempotent recurring-transaction engine deduplicated by (recurringId, date), with a catch-up cap so retries never double-post",
      "Multi-currency FX: net worth and budget spend computed across mixed-currency accounts via a USD-base rate table, 12 currencies supported",
      "Every user-owned query scoped by userId — IDOR-safe tenant isolation; caught a category-reparenting bug and a unique-constraint race through adversarial code review",
    ],
    metrics: [
      { value: "16", label: "normalized data models" },
      { value: "12", label: "currencies with FX rollups" },
      { value: "100%", label: "money mutations in transactions" },
    ],
    sections: [
      {
        heading: "Engineering for correctness",
        body: [
          "Finance software fails in quiet ways, so Aqsha treats correctness as the core feature. Every monetary value is a decimal, never a float. Every balance change happens inside a database transaction, and every edit is expressed as “reverse the old effect, apply the new one” so the ledger can never drift. Cross-currency transfers are a single row with an explicit FX conversion rather than two loosely coupled entries.",
          "The recurring engine is idempotent by construction: generated transactions are deduplicated by recurring-rule and date, missed runs are caught up under a hard cap, and the cron endpoint is secured so re-delivery can't double-post.",
        ],
      },
      {
        heading: "Real production debugging",
        body: [
          "Shipping against a serverless Postgres (Neon) surfaced real reliability work: long interactive transactions failing over PgBouncer's pooled connections led to a rewrite of category seeding as pooler-safe bulk writes. A Recharts 2 → 3 upgrade was forced by React 19 removing function-component defaultProps — identified, diagnosed, and migrated.",
          "Features cover the full personal-finance surface: dashboards computed from live data, six account types, budgets with subcategory roll-up, savings goals with auto-completion, tags, search, and month-to-month navigation.",
        ],
      },
    ],
  },
  {
    slug: "engstudy",
    title: "EngStudy",
    tagline:
      "An AI study platform for engineering students — a full RAG pipeline from course PDF to grounded tutor.",
    period: "2026",
    status: "Shipped",
    category: "AI & ML",
    featured: true,
    tech: [
      "Next.js",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "Prisma",
      "OpenAI API",
      "Tailwind CSS",
    ],
    github: "https://github.com/marstankeldim/engstudy",
    summary:
      "Upload course PDFs; EngStudy extracts, chunks, and embeds the content, then generates quizzes, SM-2 spaced-repetition flashcards, and study guides — and answers questions through a streaming AI tutor grounded strictly in the uploaded material.",
    highlights: [
      "Full RAG pipeline: PDF upload → text extraction → chunking → OpenAI text-embedding-3-small → pgvector with HNSW index → semantic retrieval at query time",
      "Streaming AI tutor grounded in embedded course material — answers come from the documents, not the model's imagination",
      "AI-generated quizzes (multiple choice, true/false, short answer), timed and server-graded",
      "Flashcard decks scheduled with the SM-2 spaced-repetition algorithm",
      "Study guide synthesis: summaries, formula sheets, exam reviews, and key takeaways in Markdown",
      "Study sessions and quiz attempts logged for progress analytics",
    ],
    metrics: [
      { value: "HNSW", label: "vector index for retrieval" },
      { value: "SM-2", label: "spaced-repetition scheduling" },
      { value: "4", label: "study modes from one upload" },
    ],
    sections: [
      {
        heading: "Grounded, not generative-at-random",
        body: [
          "The design constraint that matters: the tutor answers strictly from the uploaded course material. Documents are chunked and embedded with OpenAI's text-embedding-3-small, stored in PostgreSQL with pgvector, and retrieved through an HNSW index by cosine similarity. Retrieved chunks are the only context the model sees, which keeps answers anchored to the actual course.",
          "Quiz generation, flashcards, and study guides run off the same pipeline — one upload produces four study modes, with quiz attempts and study sessions logged for analytics.",
        ],
      },
    ],
  },
  {
    slug: "jobmaster",
    title: "JobMaster",
    tagline:
      "A job-application copilot — semantic autofill across four ATS platforms and an async application pipeline.",
    period: "Apr 2026 — Present",
    status: "Active",
    category: "Product",
    tech: [
      "Python",
      "TypeScript",
      "Chrome Extension (MV3)",
      "LLM Integration",
      "LaTeX",
    ],
    github: "https://github.com/marstankeldim/jobmaster",
    summary:
      "A Python dashboard plus an MV3 Chrome extension that detects application forms semantically and fills them with reviewed, structured profile data — with adapters for Workday, LinkedIn, Greenhouse, and Lever, and an AI draft flow for application questions.",
    highlights: [
      "Semantic matching engine for form-field detection and autofill, with explicit review states before anything is submitted",
      "ATS adapters for Workday, LinkedIn, Greenhouse, and Lever",
      "Python dashboard: profile management, resume storage, LaTeX cover-letter generation, application tracking with status history, CSV export",
      "Built-in AI draft flow for application questions",
      "Async backend pipeline with batching, concurrent workload handling, deduplication, and queue management",
    ],
    sections: [
      {
        heading: "The unglamorous hard part",
        body: [
          "Job applications are a data-mapping problem wearing a UI. Every ATS renders the same questions differently, so JobMaster matches form fields semantically instead of by selector, then routes values through per-platform adapters that know each system's quirks. Autofill is never blind: fields land in a review state before submission.",
          "Behind the extension sits an async pipeline that batches work, deduplicates repeated fields, and tracks every application with status history — exportable to CSV.",
        ],
      },
    ],
  },
  {
    slug: "stm32-firmware",
    title: "Real-Time Embedded Firmware",
    tagline:
      "Bare-metal C firmware on the STM32 NUCLEO-F411RE — interrupts, timers, and register-level debugging.",
    period: "Jan 2026 — Present",
    status: "Active",
    category: "Embedded",
    featured: true,
    tech: ["C", "STM32 HAL", "GPIO", "UART", "PWM", "SWO", "GDB", "STM32CubeIDE"],
    summary:
      "Embedded firmware in C using the STM32 HAL: GPIO interrupt-driven control, hardware timer configuration, UART, and PWM with precise floating-point duty-cycle computation at the register level — plus a live telemetry pipeline for debugging real hardware.",
    highlights: [
      "GPIO interrupt-driven control, hardware timers, UART, and PWM peripheral interfacing on the STM32 NUCLEO-F411RE",
      "SWO telemetry pipeline at 115200 baud for live hardware diagnostics under Linux",
      "Resolved 6 hardware–software interface bugs through systematic register-level debugging and failure-mode analysis in GDB and STM32CubeIDE",
      "Deterministic execution pipelines under real-time constraints",
    ],
    sections: [
      {
        heading: "Code that answers to physics",
        body: [
          "Firmware is where software stops being abstract. A PWM duty cycle is a register value with a physical consequence; a missed interrupt is a visible glitch. This project is a deliberate tour of the STM32 peripheral set — GPIO, timers, UART, PWM — written in C against the HAL, with the interesting bugs living at the hardware–software interface.",
          "Debugging happens where the evidence is: SWO trace output at 115200 baud for live telemetry, and GDB at the register level when behavior and intent disagree. Six such interface bugs were isolated and fixed through systematic failure-mode analysis.",
        ],
      },
    ],
  },
  {
    slug: "ftc-xcellence",
    title: "FTC xCellence — Competition Robot",
    tagline:
      "Engineer on FTC Team #22934 — omnidirectional drivetrain, TensorFlow autonomy, and five competition awards.",
    period: "2023 — 2024",
    status: "Completed",
    category: "Robotics",
    tech: [
      "Java",
      "FTC SDK",
      "TensorFlow",
      "PID Control",
      "Encoder/IMU Sensor Fusion",
    ],
    summary:
      "Designed the drivetrain and movement architecture for a FIRST Tech Challenge robot: omnidirectional chassis, dual driver-control modes, and a camera-based autonomous mode — the team won 1st place at the FTC Kazakhstan Regional and the Innovation in Engineering Award at the First Global Challenge.",
    highlights: [
      "Engineered omnidirectional chassis (omni wheels, HD motors with 1:12 gearboxes) with centrally mounted battery and control hub for weight distribution",
      "Full autonomous and teleop control stack in Java: TensorFlow team-prop detection, encoder/IMU sensor fusion for field localization, floating-point PID trajectory control",
      "Solved pixel-capture ergonomics by adding an intake wheel to the claw — eliminating manual alignment entirely",
      "Modular software architecture: separate autonomous, movement, config, and vision modules; dual drive modes with a three-level speed multiplier system",
      "5 awards: 1st Place FTC Kazakhstan Regional, Innovation in Engineering (First Global Challenge), Samsung Solve for Tomorrow, Astana Hub Battle People's Choice, AI BATTLE (ISSAI / Nazarbayev University)",
    ],
    metrics: [
      { value: "5", label: "competition awards" },
      { value: "1st", label: "FTC Kazakhstan Regional" },
    ],
    sections: [
      {
        heading: "Hardware decisions with software consequences",
        body: [
          "The drivetrain was the foundation everything else stood on: omnidirectional wheels for full-plane maneuverability, HD motors geared 1:12 for precision torque, and an elevated base that kept game pieces from jamming the chassis while improving camera sightlines. The claw's intake wheel is the design I'm proudest of — a small mechanical change that deleted an entire class of driver error.",
          "The software mirrored the team's structure: autonomous, movement, configuration, and vision lived in separate modules. Autonomous mode detected the team prop with a TensorFlow pipeline, stored field positions, and planned trajectories from there. The team partnered with ISSAI at Nazarbayev University for the AI integration and was mentored by NU robotics engineering students.",
        ],
      },
    ],
  },
  {
    slug: "wro-robot",
    title: "World Robot Olympiad — Senior Challenge",
    tagline:
      "Autonomous EV3 robot with PID navigation and a forklift mechanism — top 3 nationally among 80+ teams.",
    period: "Mar 2023 — Nov 2023",
    status: "Completed",
    category: "Robotics",
    tech: ["MicroPython", "LEGO EV3", "PID Control", "Sensor Fusion"],
    summary:
      "A two-person team project for WRO Kazakhstan: a fully autonomous robot with PID-controlled closed-loop navigation on color-sensor feedback, a forklift mechanism for load/transport/stacking, and zone-detection logic — finishing top 3 in the country.",
    highlights: [
      "PID-controlled closed-loop navigation using color-sensor feedback",
      "Forklift mechanism for autonomous load, transport, and stacking tasks",
      "Autonomous task sequencing, zone detection, and adaptive path planning in MicroPython",
      "Top 3 national finish among 80+ teams",
    ],
    metrics: [
      { value: "Top 3", label: "national finish" },
      { value: "80+", label: "competing teams" },
    ],
    sections: [
      {
        heading: "Reliability beats cleverness",
        body: [
          "Competition robotics compresses engineering into its essentials: the field is known, the time is short, and the robot is alone out there. The design philosophy was repeatability — PID line tracking tuned until runs were boringly consistent, a forklift mechanism debugged until alignment errors disappeared, and task sequencing that recovered gracefully when a zone read failed.",
        ],
      },
    ],
  },
  {
    slug: "karaoke-mixer",
    title: "Karaoke Audio Mixer",
    tagline:
      "A multi-stage analog signal chain — mixing, filtering, and amplification with under 0.5 dB gain error.",
    period: "Dec 2025",
    status: "Completed",
    category: "Hardware",
    tech: ["Op-Amps", "Multisim", "Analog Design", "Breadboard"],
    summary:
      "An op-amp based audio processing pipeline designed with small-signal modeling, nodal analysis, and Thevenin/Norton equivalents — validated in Multisim simulation and on a physical breadboard, achieving less than 0.5 dB gain error across the operating range.",
    highlights: [
      "Multi-stage analog pipeline: microphone/music mixing → filtering → amplification",
      "Op-amp circuit design via small-signal modeling, nodal analysis, and Thevenin/Norton equivalents",
      "< 0.5 dB gain error across the operating range, validated in simulation and hardware",
      "Comparator-based signal visualization with calibrated threshold indicators",
    ],
    sections: [
      {
        heading: "Analog discipline",
        body: [
          "Analog design punishes hand-waving. Every stage of the mixer was designed on paper first — small-signal models, nodal analysis, component values chosen analytically — then verified in Multisim before a single part hit the breadboard. The result held to under 0.5 dB of gain error across the operating range, with a comparator-driven level indicator calibrated against real signal thresholds.",
        ],
      },
    ],
  },
  {
    slug: "hackpsu-wildfire",
    title: "Wildfire Prediction Tool",
    tagline:
      "HackPSU 2024 — forecasting wildfire risk from NASA FIRMS satellite data and 24 years of weather history.",
    period: "Nov 2024",
    status: "Completed",
    category: "Data",
    tech: ["Python", "NASA FIRMS", "Data Analysis"],
    summary:
      "A hackathon project built on NASA FIRMS satellite fire-incident data and a 24-year historical US weather dataset (2000–2024) — temperature, humidity, wind, precipitation, and cloud cover — analyzed to identify high-risk wildfire conditions.",
    highlights: [
      "Integrated NASA FIRMS VIIRS fire-incident data with 24 years of US weather history",
      "Analyzed temperature, humidity, wind, and precipitation patterns to flag high-risk conditions",
      "Built end-to-end in one hackathon weekend at HackPSU 2024",
    ],
    sections: [
      {
        heading: "Signal from public data",
        body: [
          "The project paired two public datasets — NASA's FIRMS satellite fire detections and Visual Crossing's historical US weather archive — and looked for the conditions under which fires actually started. A weekend is not long enough for a production model, but it was enough to build the pipeline, join the datasets, and surface the weather signatures that precede high-risk periods.",
        ],
      },
    ],
  },
  {
    slug: "overleaf-selfhosted",
    title: "Self-Hosted Overleaf",
    tagline: "A personal LaTeX infrastructure project — Overleaf Community Edition, self-managed.",
    period: "2025",
    status: "Completed",
    category: "Distributed Systems",
    tech: ["Docker", "Linux", "LaTeX", "Self-Hosting"],
    summary:
      "Deployed and configured a self-hosted Overleaf Community Edition instance — running the full multi-service LaTeX collaboration stack locally for resume and document work.",
    highlights: [
      "Configured and ran Overleaf's multi-service architecture locally",
      "Used as daily infrastructure for LaTeX resume and document compilation",
    ],
    sections: [
      {
        heading: "Infrastructure as a habit",
        body: [
          "Less a showcase than a habit of self-reliance: rather than depending on a hosted service for LaTeX work, this project stood up Overleaf Community Edition — a genuinely multi-service system — and kept it running as personal infrastructure.",
        ],
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const allTech = [...new Set(projects.flatMap((p) => p.tech))].sort();
export const allCategories = [
  ...new Set(projects.map((p) => p.category)),
] as const;
