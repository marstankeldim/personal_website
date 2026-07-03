import type { Metadata } from "next";
import { Em, PageHeader } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { ProjectsExplorer } from "@/components/projects-explorer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Distributed systems, AI tooling, embedded firmware, robotics, and shipped products — every project discovered from real work.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        kicker="Projects"
        title={
          <>
            Things I’ve <Em>built</Em> — from Raft to robots.
          </>
        }
        lede="A replicated key-value store in C++20, an LLM evaluation platform, a funded startup, bare-metal firmware, and the competition robots that started it all. Search or filter by technology."
      />
      <div className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <Reveal>
          <ProjectsExplorer />
        </Reveal>
      </div>
    </>
  );
}
