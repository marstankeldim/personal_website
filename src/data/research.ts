import type { ResearchArea } from "./types";

export const researchAreas: ResearchArea[] = [
  {
    title: "Controlling Autonomous Systems with Assurances",
    role: "Undergraduate Research Assistant",
    organization: "CASA-Goes Lab, Penn State",
    period: "Jun 2025 — Present",
    body: [
      "The lab's question is the one that matters most for autonomy: not whether a robot can complete a task, but whether you can trust that it will. My work sits in the simulation-first validation loop — building perception and control pipelines for ROS-based autonomous robots and systematically breaking them before they ever touch hardware.",
      "The workflow runs on the Duckietown framework: an image-processing pipeline finds the lane, odometry and IMU data estimate where the robot actually is, and PID control keeps it tracking. The research contribution is in the validation methodology — designing simulation environments that stress the system across dynamic scenarios and identify failure modes early.",
    ],
    bullets: [
      "Built Python-based perception modules: color filtering, edge detection, masking, and spatial awareness in ROS nodes",
      "Implemented and tuned PID control with odometry, IMU, and camera sensor fusion for real-time state estimation",
      "Designed and executed 100+ controlled simulation experiments under injected sensor noise",
      "Improved trajectory stability by 28% through iterative numerical refinement and failure-mode analysis",
      "Operated multi-process ROS node graphs on Linux with real-time publisher/subscriber timing constraints",
    ],
    tech: ["ROS", "Python", "Duckietown", "Docker", "Linux", "PID Control", "Sensor Fusion"],
  },
  {
    title: "Discrete Event Systems & Supervisory Control",
    organization: "DESops (University of Michigan) — contributor & research user",
    period: "2025",
    body: [
      "Formal methods are the other half of trustworthy autonomy. DESops is a University of Michigan Python library for discrete event systems — finite-state automata, parallel and product compositions, observer computation, supervisory control, and opacity enforcement. I made minor contributions to the library and used it for academic research in formal methods and the control theory of autonomous systems.",
      "Where the CASA-Goes work validates behavior empirically, discrete event systems let you prove properties about it: what a supervisor can permit, what an observer can infer, what an outside party can or cannot deduce about system state. The combination — empirical robustness testing plus formal guarantees — is the direction I find most interesting.",
    ],
    tech: ["Python", "Automata Theory", "Supervisory Control", "Formal Methods"],
  },
];

export const researchInterests: string[] = [
  "Verifiable autonomy — control systems whose safety claims can be tested and proven, not just demonstrated",
  "Simulation-first robustness validation — finding failure modes before hardware does",
  "Formal methods for control: discrete event systems, supervisory control, opacity",
  "Distributed systems correctness — consensus, replication, and fault tolerance (explored hands-on in DKVS)",
  "Rigorous evaluation of AI systems — statistically honest benchmarking (explored in EvalForge)",
];
