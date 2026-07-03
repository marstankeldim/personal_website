import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/projects",
    "/experience",
    "/research",
    "/leadership",
    "/skills",
    "/resume",
    "/contact",
  ].map((path) => ({
    url: `${site.url}${path}/`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const projectPages = projects.map((p) => ({
    url: `${site.url}/projects/${p.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const labPages = [
    {
      url: `${site.url}/velorah/`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  return [...pages, ...projectPages, ...labPages];
}
