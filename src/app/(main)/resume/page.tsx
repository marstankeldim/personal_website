import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { PageHeader } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { education, experience } from "@/data/experience";
import { awards } from "@/data/leadership";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Ayan Ospan — electrical engineering at Penn State, Wabtec internship, autonomous systems research, and founder of Chronos.",
};

/** Condensed, print-friendly resume rendered from the same data as the site. */
export default function ResumePage() {
  const featured = experience.filter((e) =>
    ["Wabtec Corporation", "CASA-Goes Lab, Penn State", "Chronos", "SYNK"].includes(
      e.company,
    ),
  );

  const resumeSkills: [string, string][] = [
    ["Languages", "C/C++ (C++20), Python, TypeScript, Java, Verilog, MATLAB"],
    ["Systems", "Raft consensus, TCP/POSIX sockets, write-ahead logging, Linux, Docker, CMake, GDB"],
    ["Embedded & Robotics", "STM32 HAL, GPIO/UART/PWM, SWO debugging, ROS, PID control, sensor fusion"],
    ["Hardware", "Siemens NX (wire routing), analog circuit design, Multisim, oscilloscope/DMM"],
    ["Web & Cloud", "React, Next.js, PostgreSQL/Prisma, Supabase, Cloudflare Pages/Workers, GitHub Actions"],
  ];

  return (
    <>
      <PageHeader
        kicker="Resume"
        title="The one-page version."
        lede="A condensed summary rendered from the same data as this site — or grab the typeset PDF."
      />

      <div className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <Reveal>
          <div className="mb-12 flex flex-wrap gap-3">
            <a
              href={links.resumePdf}
              download="Ayan_Ospan_Resume.pdf"
              className="flex h-11 items-center gap-2 rounded-md bg-fg px-5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              <Download size={15} aria-hidden /> Download PDF
            </a>
            <a
              href={links.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center gap-1.5 rounded-md border border-line-strong px-5 text-sm font-medium transition-colors hover:border-fg"
            >
              Open in new tab <ArrowUpRight size={14} aria-hidden />
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="max-w-3xl rounded-lg border border-line bg-bg-elevated p-7 md:p-12">
            {/* Header */}
            <header className="border-b border-line-strong pb-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                Ayan Ospan
              </h2>
              <p className="mt-2 font-mono text-[12px] leading-relaxed text-muted">
                {links.email} · linkedin.com/in/ayan-ospan ·
                github.com/marstankeldim
              </p>
            </header>

            {/* Education */}
            <section className="pt-7">
              <h3 className="microlabel">Education</h3>
              {education.slice(0, 2).map((e) => (
                <div key={e.school} className="mt-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="font-medium">{e.school}</p>
                    <p className="font-mono text-[11px] text-faint">{e.period}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-muted">{e.credential}</p>
                  <p className="mt-0.5 text-[13px] text-faint">{e.details[0]}</p>
                </div>
              ))}
            </section>

            {/* Experience */}
            <section className="pt-8">
              <h3 className="microlabel">Experience</h3>
              {featured.map((item) => (
                <div key={item.company} className="mt-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="font-medium">
                      {item.role}
                      <span className="text-muted"> — {item.company}</span>
                    </p>
                    <p className="font-mono text-[11px] text-faint">
                      {item.period}
                    </p>
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {item.bullets.slice(0, 3).map((b) => (
                      <li
                        key={b.slice(0, 32)}
                        className="flex gap-2.5 text-[13.5px] leading-relaxed text-muted"
                      >
                        <span className="mt-[8px] h-px w-3 shrink-0 bg-line-strong" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Selected projects */}
            <section className="pt-8">
              <h3 className="microlabel">Selected Projects</h3>
              <ul className="mt-4 space-y-3">
                {[
                  ["DKVS", "Replicated key-value store in C++20 — original Raft implementation, CRC-checked WAL, automatic failover, linearizable reads."],
                  ["EvalForge", "LLM benchmarking platform — 7 providers, pluggable judges, bootstrap CIs and significance tests, REST API + dashboard."],
                  ["Real-Time Firmware", "Bare-metal STM32 firmware in C — interrupt-driven GPIO, timers, UART/PWM, SWO telemetry, register-level debugging."],
                ].map(([name, desc]) => (
                  <li key={name} className="text-[13.5px] leading-relaxed">
                    <span className="font-medium text-fg">{name}.</span>{" "}
                    <span className="text-muted">{desc}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Skills */}
            <section className="pt-8">
              <h3 className="microlabel">Skills</h3>
              <dl className="mt-4 space-y-2">
                {resumeSkills.map(([k, v]) => (
                  <div key={k} className="grid gap-x-6 sm:grid-cols-[150px_1fr]">
                    <dt className="text-[13px] font-medium">{k}</dt>
                    <dd className="text-[13px] leading-relaxed text-muted">{v}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Awards */}
            <section className="pt-8">
              <h3 className="microlabel">Awards</h3>
              <p className="mt-4 text-[13.5px] leading-relaxed text-muted">
                {awards
                  .slice(0, 4)
                  .map((a) => `${a.title} (${a.issuer}, ${a.year})`)
                  .join(" · ")}
              </p>
            </section>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-8 max-w-3xl text-sm text-faint">
            Full detail lives on the{" "}
            <Link href="/experience" className="link-underline text-muted">
              experience
            </Link>
            ,{" "}
            <Link href="/projects" className="link-underline text-muted">
              projects
            </Link>{" "}
            and{" "}
            <Link href="/leadership" className="link-underline text-muted">
              leadership
            </Link>{" "}
            pages.
          </p>
        </Reveal>
      </div>
    </>
  );
}
