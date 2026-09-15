import { motion, useReducedMotion } from "framer-motion";

type Node = { label: string; x: number; y: number; w: number };

const BOX_H = 42;

const backendNodes: Node[] = [
  { label: "Java", x: 24, y: 26, w: 156 },
  { label: "Spring Boot", x: 24, y: 100, w: 156 },
  { label: "REST API", x: 24, y: 174, w: 156 },
  { label: "PostgreSQL", x: 24, y: 248, w: 156 },
];

const aiNodes: Node[] = [
  { label: "RAG", x: 260, y: 63, w: 156 },
  { label: "Vector DB", x: 260, y: 137, w: 156 },
  { label: "LLM", x: 260, y: 211, w: 156 },
];

function laneConnectors(nodes: Node[]) {
  return nodes.slice(0, -1).map((n, i) => {
    const next = nodes[i + 1];
    const x = n.x + n.w / 2;
    return { key: `${n.label}-${next.label}`, x, y1: n.y + BOX_H, y2: next.y };
  });
}

export default function SchemaDiagram() {
  const prefersReducedMotion = useReducedMotion();
  const backendLines = laneConnectors(backendNodes);
  const aiLines = laneConnectors(aiNodes);

  const draw = (delay: number) => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.6, delay, ease: [0.65, 0, 0.35, 1] as const },
    },
  });

  const box = (delay: number) => ({
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay },
    },
  });

  return (
    <svg
      viewBox="0 0 440 320"
      className="h-auto w-full max-w-md"
      role="img"
      aria-label="Diagram of two engineering pipelines: Java through Spring Boot, REST API, and PostgreSQL; and RAG through Vector Database to LLM."
    >
      {/* lane legends */}
      <g className="font-mono text-[11px]">
        <circle cx="26" cy="12" r="3" fill="var(--color-copper)" />
        <text x="34" y="16" fill="var(--color-muted)">
          backend
        </text>
        <circle cx="262" cy="49" r="3" fill="var(--color-teal)" />
        <text x="270" y="53" fill="var(--color-muted)">
          genai
        </text>
      </g>

      {/* connectors */}
      {backendLines.map((l, i) => (
        <motion.line
          key={l.key}
          x1={l.x}
          y1={l.y1}
          x2={l.x}
          y2={l.y2}
          stroke="var(--color-copper)"
          strokeWidth="1.5"
          strokeOpacity="0.6"
          variants={draw(0.15 * i + 0.15)}
          initial="hidden"
          animate="visible"
        />
      ))}
      {aiLines.map((l, i) => (
        <motion.line
          key={l.key}
          x1={l.x}
          y1={l.y1}
          x2={l.x}
          y2={l.y2}
          stroke="var(--color-teal)"
          strokeWidth="1.5"
          strokeOpacity="0.6"
          variants={draw(0.15 * i + 0.35)}
          initial="hidden"
          animate="visible"
        />
      ))}

      {/* backend nodes */}
      {backendNodes.map((n, i) => (
        <motion.g key={n.label} variants={box(0.15 * i)} initial="hidden" animate="visible">
          <rect
            x={n.x}
            y={n.y}
            width={n.w}
            height={BOX_H}
            rx={3}
            fill="var(--color-surface)"
            stroke="var(--color-line)"
          />
          <rect x={n.x} y={n.y} width={3} height={BOX_H} fill="var(--color-copper)" />
          <text
            x={n.x + n.w / 2}
            y={n.y + BOX_H / 2 + 4}
            textAnchor="middle"
            fill="var(--color-text)"
            className="font-mono text-[12px]"
          >
            {n.label}
          </text>
        </motion.g>
      ))}

      {/* genai nodes */}
      {aiNodes.map((n, i) => (
        <motion.g key={n.label} variants={box(0.15 * i + 0.3)} initial="hidden" animate="visible">
          <rect
            x={n.x}
            y={n.y}
            width={n.w}
            height={BOX_H}
            rx={3}
            fill="var(--color-surface)"
            stroke="var(--color-line)"
          />
          <rect x={n.x} y={n.y} width={3} height={BOX_H} fill="var(--color-teal)" />
          <text
            x={n.x + n.w / 2}
            y={n.y + BOX_H / 2 + 4}
            textAnchor="middle"
            fill="var(--color-text)"
            className="font-mono text-[12px]"
          >
            {n.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
