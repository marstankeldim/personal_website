/**
 * Global site configuration.
 * Update `url` once the production domain is connected on Cloudflare Pages —
 * it is used for canonical URLs, Open Graph tags, the sitemap, and robots.txt.
 */
export const site = {
  name: "Ayan Ospan",
  title: "Ayan Ospan — Engineer",
  description:
    "Electrical engineering student at Penn State building at the layer where hardware meets software — distributed systems, robotics, embedded firmware, and AI tooling.",
  url: "https://ayan-ospan.com",
  author: "Ayan Ospan",
  keywords: [
    "Ayan Ospan",
    "electrical engineering",
    "software engineer",
    "Penn State",
    "robotics",
    "distributed systems",
    "embedded systems",
    "Raft",
    "ROS",
  ],
} as const;

export const links = {
  github: "https://github.com/marstankeldim",
  linkedin: "https://www.linkedin.com/in/ayan-ospan",
  x: "https://x.com/ayan_ospan",
  email: "ayan.ospan@gmail.com",
  emailAcademic: "ospan@psu.edu",
  orcid: "https://orcid.org/0009-0005-2036-9088",
  chronos: "https://chronos-online.com",
  kazakhstan: "https://home.ayan-ospan.com",
  resumePdf: "/resume/Ayan_Ospan_Resume.pdf",
} as const;
