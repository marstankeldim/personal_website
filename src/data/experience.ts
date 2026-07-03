import type { EducationItem, ExperienceItem } from "./types";

/** Professional, research, and teaching experience — newest first. */
export const experience: ExperienceItem[] = [
  {
    company: "Wabtec Corporation",
    role: "Engineer Intern",
    period: "Jun 2026 — Aug 2026",
    location: "Astana, Kazakhstan",
    kind: "Internship",
    summary:
      "Locomotive engineering at Wabtec's LKZ facility, which assembles the ES44ACi — a 4,400 hp Evolution Series freight locomotive — for Kazakhstan's national railway.",
    bullets: [
      "Performed wire routing for the ES44ACi auxiliary cabin's electronic controls in Siemens NX, localizing the US hardware design to Kazakhstani specifications and locally sourced components alongside electrical integration and controls engineers",
      "Identified and filed an approved Product Change Request correcting 3 erroneous helper's-console harness callouts in official design documentation — catching an error that would have caused incorrect assembly on production units",
      "Authored from-scratch assembly instructions for the first ES44ACi auxiliary cabin localization at LKZ, coordinating across technicians, sourcing, mechanical, and electrical integration engineers",
      "Authored 716 operator-facing HMI error messages covering the locomotive's thermal, sensor, mechanical, and electrical fault spectrum",
      "Trained 80 testers on Wabtec's Reliance digital test platform and led the digitization of 26 chapters of commercial test plans — 1,700+ test lines — coordinating 3 other interns",
    ],
    tech: ["Siemens NX", "Wabtec Reliance", "PCR Process", "Wire Harness Design"],
  },
  {
    company: "SYNK",
    role: "Product Engineering Intern",
    period: "May 2026 — Present",
    location: "San Francisco, CA",
    kind: "Internship",
    summary:
      "Product engineering for an AI-powered virtual experiences platform, working directly with the founders.",
    bullets: [
      "Developed and tested frontend and backend components for core platform features",
      "Ran user-feedback analysis and feature validation loops with the founding team",
      "Contributed to a 40% reduction in feature iteration time through structured development and feedback workflows",
    ],
    tech: ["TypeScript", "Rapid Prototyping"],
  },
  {
    company: "Chronos",
    role: "Founder",
    period: "Nov 2025 — Present",
    location: "Happy Valley LaunchBox, Penn State",
    kind: "Startup",
    summary:
      "Founded and built an AI-powered scheduling platform for students — product, engineering, and business, solo.",
    bullets: [
      "Architected and shipped the full platform: constraint-based AI scheduling engine, React/TypeScript frontend, Supabase backend, Cloudflare Pages/Workers deployment",
      "Grew to 100+ active users; secured $2,000 in competitive funding after completing the Idea TestLab and MVP DevLab accelerator programs",
      "Conducted 30+ customer discovery interviews; 74% of students surveyed reported significant planning-related stress",
    ],
    tech: ["TypeScript", "React", "Supabase", "Cloudflare"],
    related: ["chronos"],
  },
  {
    company: "CASA-Goes Lab, Penn State",
    role: "Undergraduate Research Assistant",
    period: "Jun 2025 — Present",
    location: "University Park, PA",
    kind: "Research",
    summary:
      "Research on controlling autonomous systems with assurances — perception, state estimation, and control pipelines validated in simulation before hardware deployment.",
    bullets: [
      "Implemented and tuned PID control for closed-loop trajectory tracking; integrated odometry, IMU, and camera streams via sensor fusion for real-time state estimation",
      "Designed and executed 100+ controlled experiments validating accuracy and stability under simulated sensor noise — improving trajectory stability by 28% through iterative refinement",
      "Operated a multi-process ROS node graph on Linux, managing real-time publisher/subscriber timing in a concurrent execution environment",
    ],
    tech: ["ROS", "Python", "Duckietown", "Docker", "Linux"],
  },
  {
    company: "Pattee & Paterno Libraries, Penn State",
    role: "Team Lead (Tier 2)",
    period: "Jun 2025 — Present",
    location: "University Park, PA",
    kind: "Work",
    summary:
      "Promoted to Tier 2 — the highest student-employee level — leading service operations at Penn State's main library.",
    bullets: [
      "Lead an 8-person service team per shift in a facility serving 500+ patrons a day",
      "Own opening/closing procedures, end-of-day walkthroughs, staff coverage, and queue flow",
      "Handle patron account escalations: fines, billing, and policy enforcement",
    ],
  },
  {
    company: "Penn State Dining",
    role: "Crew Leader",
    period: "Oct 2024 — Oct 2025",
    location: "University Park, PA",
    kind: "Work",
    summary:
      "Supervised student dining staff and redesigned the operation's closing procedure.",
    bullets: [
      "Supervised 7–10 student staff per shift across operations, assignments, and safety compliance",
      "Redesigned the nightly closing procedure, cutting completion time by 45 minutes per shift — consistently finishing ahead of schedule",
    ],
  },
  {
    company: "Alliance Minerals",
    role: "Analyst",
    period: "Dec 2024 — Jan 2025",
    location: "Kazakhstan",
    kind: "Work",
    summary:
      "Mining-sector analysis for a family mineral exploration business during winter break.",
    bullets: [
      "Analyzed KAZRC and CRIRSCO international mineral-reporting standards and JORC code comparisons",
      "Developed mineral-deposit sales methodology and M&A workflow documentation supporting due diligence and investment contract processes",
    ],
  },
  {
    company: "Independent",
    role: "Python Instructor",
    period: "2024 — 2025",
    kind: "Teaching",
    summary: "Taught Python programming to high school students ages 13–17.",
    bullets: [
      "Designed lecture materials from scratch covering data structures and problem-solving fundamentals",
      "Translated technical concepts into age-appropriate instruction for pre-university students",
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: "The Pennsylvania State University",
    credential: "B.S. Electrical Engineering, Minor in Engineering Entrepreneurship",
    period: "Aug 2024 — Dec 2027",
    location: "University Park, PA",
    details: [
      "GPA 3.36 / 4.00",
      "Coursework: Digital Logic Design (Verilog), Circuits & Devices, Signals & Systems, Electronics, Embedded Firmware, Introduction to Robotics Systems (ROS), Programming & Computation, Engineering Design, Engineering Leadership",
    ],
  },
  {
    school: "Charles University, Prague",
    credential: "Certificate — Philosophy, Politics & Economics (TFAS program)",
    period: "Jul — Aug 2025",
    location: "Prague, Czech Republic",
    details: [
      "Summer study abroad with The Fund for American Studies — political economy and cross-cultural study",
    ],
  },
  {
    school: "Nazarbayev Intellectual School of Physics & Mathematics, Astana",
    credential: "Secondary education — Physics & Mathematics specialization",
    period: "2018 — 2024",
    location: "Astana, Kazakhstan",
    details: [
      "Kazakhstan's most competitive secondary track; partnered with Nazarbayev University for robotics mentorship",
    ],
  },
];
