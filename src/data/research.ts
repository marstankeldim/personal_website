import type { ResearchArea } from "./types";

export const researchAreas: ResearchArea[] = [
  {
    title: "Ontology-Grounded Test Adequacy (CETA)",
    role: "Independent, solo-authored research",
    organization: "ITEA Cybersecurity T&E Workshop 2026, Bangor Plaza Conference Center, Keyport, WA",
    period: "Presented Sep 16, 2026",
    body: [
      "I authored and presented CETA (Cyber Evaluation Test Adequacy), a formal framework that recasts cyber test-and-evaluation sufficiency as a decidable question over an OWL 2 knowledge graph. Coverage in DoD cyber developmental test & evaluation is currently enumerative — techniques ticked off a matrix, requirements checked against a spreadsheet — and those counts break whenever the system model changes. The artifacts that would make traceability mechanical sit in vocabularies that don't map to each other: SysML/UAF for architecture, MITRE ATT&CK for adversary behavior, CWE/CVE for weaknesses, and criticality analyses for missions.",
      "The framework aligns four modular OWL 2 sub-ontologies — system architecture, threat, weakness, and mission — with SWRL-style inference rules that derive every admissible attack path ending at a mission-essential function. Under its “semantic test adequacy” criterion, a test suite is adequate exactly when every such path above a criticality threshold is covered by an executable test; remaining risk becomes an explicitly enumerated gap set instead of an unexamined remainder. For gap closure, the paper proposes a retrieval-augmented LLM that suggests candidate tests but can only emit instances of declared ontology classes, so the same reasoner that found a gap checks every proposal, and malformed proposals are rejected before a human reviews them.",
      "The paper defines a metric suite — semantic coverage ratio, gap-set cardinality, false-test rate, gap-closure rate, re-materialization time after model revision, and traceability completeness — and a staged evaluation design over open reference architectures, with four stated hypotheses and their falsification conditions. It draws on 18 references, builds on current DoD/DoW policy (Cyber DT&E Guidebook v3.0, DoW Manual 5000.103, DoD Cyber Table Top Guide v3.0), and addresses a gap DoD acknowledges: its own documents describe the existing DoD ontology, OACRA, as low technology readiness level. As the workshop's call requested, it is a concept-and-methodology paper — no empirical results are claimed.",
    ],
    bullets: [
      "Awarded the Min Kim Scholarship ($2,500 + one-year ITEA membership) as the one student presenter selected from all submitted abstracts",
      "Delivered a scripted, rehearsed 10-minute technical talk with live Q&A to a national audience of technical and policy stakeholders",
    ],
    tech: ["OWL 2", "SWRL", "Knowledge Graphs", "Attack-Path Analysis", "MITRE ATT&CK", "RAG", "Cyber T&E"],
  },
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
