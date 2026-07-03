import type { SkillGroup } from "./types";

/**
 * Skills are inferred from shipped work — every entry names the project or
 * experience it comes from.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    note: "Daily drivers first — each one attached to real, shipped work.",
    skills: [
      { name: "C / C++ (C++20)", context: "DKVS, STM32 firmware" },
      { name: "Python", context: "CASA-Goes Lab, JobMaster, DESops" },
      { name: "TypeScript", context: "EvalForge, Chronos, Aqsha, EngStudy" },
      { name: "Java", context: "FTC competition robot" },
      { name: "Verilog", context: "Digital logic design coursework" },
      { name: "MATLAB", context: "Signals & systems, electronics" },
      { name: "MicroPython", context: "WRO autonomous robot" },
    ],
  },
  {
    title: "Distributed Systems",
    note: "Learned by building a replicated store from the Raft paper up.",
    skills: [
      { name: "Raft Consensus", context: "original implementation in DKVS" },
      { name: "Write-Ahead Logging", context: "CRC-checked persistence, DKVS" },
      { name: "Leader Election & Failover", context: "DKVS" },
      { name: "Linearizability", context: "log-serialized reads, DKVS" },
      { name: "TCP / POSIX Sockets", context: "DKVS networking layer" },
      { name: "Concurrency & Threading", context: "thread-per-connection servers" },
    ],
  },
  {
    title: "Embedded & Real-Time",
    note: "Bare metal, where the debugger is a logic analyzer and a register view.",
    skills: [
      { name: "STM32 HAL", context: "NUCLEO-F411RE firmware" },
      { name: "GPIO / UART / PWM / Timers", context: "peripheral drivers in C" },
      { name: "Interrupt-Driven Design", context: "STM32 firmware" },
      { name: "SWO Telemetry & GDB", context: "register-level debugging" },
      { name: "Real-Time Constraints", context: "deterministic execution pipelines" },
    ],
  },
  {
    title: "Robotics & Control",
    note: "From competition robots to research validation pipelines.",
    skills: [
      { name: "ROS", context: "CASA-Goes Lab, EE 483" },
      { name: "PID Control", context: "28% stability improvement in research" },
      { name: "Sensor Fusion", context: "odometry + IMU + camera" },
      { name: "Computer Vision", context: "color filtering, edge detection, masking" },
      { name: "State Estimation & Odometry", context: "Duckietown pipelines" },
      { name: "TensorFlow (perception)", context: "FTC team-prop detection" },
    ],
  },
  {
    title: "AI Engineering",
    note: "Building the tooling around models, not just calling them.",
    skills: [
      { name: "LLM Evaluation & Benchmarking", context: "EvalForge" },
      { name: "RAG Pipelines", context: "EngStudy: chunk → embed → retrieve" },
      { name: "pgvector / HNSW", context: "semantic retrieval, EngStudy" },
      { name: "LLM-as-Judge & Graders", context: "EvalForge judge system" },
      { name: "Statistical Testing", context: "CIs, permutation tests, Elo" },
    ],
  },
  {
    title: "Full-Stack & Cloud",
    note: "Production systems with users, CI, and security posture.",
    skills: [
      { name: "React / Next.js", context: "Aqsha, EngStudy, EvalForge dashboard" },
      { name: "Node.js / Fastify", context: "EvalForge REST API" },
      { name: "PostgreSQL / Prisma", context: "16-model schema in Aqsha" },
      { name: "Supabase", context: "Chronos auth, DB, edge functions" },
      { name: "Cloudflare Pages & Workers", context: "Chronos deployment" },
      { name: "GitHub Actions (CI/CD)", context: "lint / typecheck / build gates" },
      { name: "Tailwind CSS", context: "every frontend since 2025" },
    ],
  },
  {
    title: "Hardware & EDA",
    note: "The EE degree, applied.",
    skills: [
      { name: "Siemens NX", context: "locomotive wire routing at Wabtec" },
      { name: "Analog Circuit Design", context: "< 0.5 dB gain error mixer" },
      { name: "Multisim", context: "simulation-first analog validation" },
      { name: "Digital Logic (Verilog)", context: "coursework" },
      { name: "Oscilloscope / DMM / Lab Instruments", context: "EE lab work" },
      { name: "KiCad", context: "PCB design fundamentals" },
    ],
  },
  {
    title: "Simulation & Research Methods",
    note: "Break it in simulation before it breaks in the field.",
    skills: [
      { name: "Duckietown", context: "robotics simulation framework" },
      { name: "Failure-Mode Analysis", context: "100+ validation runs, CASA-Goes" },
      { name: "Discrete Event Systems", context: "DESops — automata, supervisory control" },
      { name: "Reproducible Experiments", context: "seeded, stored runs in EvalForge" },
    ],
  },
  {
    title: "Tools & Environment",
    note: "The everyday stack.",
    skills: [
      { name: "Linux", context: "daily environment for ROS and systems work" },
      { name: "Git / GitHub", context: "every project" },
      { name: "Docker", context: "Duckietown containers, EvalForge stack" },
      { name: "CMake", context: "DKVS build system" },
      { name: "GDB", context: "firmware and systems debugging" },
      { name: "LaTeX", context: "self-hosted Overleaf instance" },
    ],
  },
];

export const humanLanguages = [
  { name: "English", level: "Native" },
  { name: "Kazakh", level: "Native" },
  { name: "Russian", level: "Fluent" },
] as const;
