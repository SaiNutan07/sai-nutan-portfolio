import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import type { Project } from "../data/resume";

const accent: Record<Project["domain"], string> = {
  backend: "var(--color-copper)",
  ai: "var(--color-teal)",
  ml: "var(--color-teal)",
};

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  return (
    <div className="rounded-sm border border-line-soft bg-surface/40">
      <div className="border-l-2 p-6 md:p-8" style={{ borderColor: accent[project.domain] }}>
        <h3 className="font-display text-xl text-text sm:text-2xl">{project.title}</h3>
        <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-muted">
          {project.problem}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-sm border border-line px-2.5 py-1 font-mono text-[12px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-5">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={panelId}
            className="inline-flex items-center gap-1.5 text-sm text-text hover:text-copper-soft"
          >
            {expanded ? "Hide approach" : "How I built it"}
            <ChevronDown
              size={15}
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-text"
            >
              <GithubIcon size={15} />
              Code
            </a>
          )}

          {project.paper && (
            <a
              href={project.paper.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-text"
            >
              <ExternalLink size={15} />
              {project.paper.label}
            </a>
          )}
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={panelId}
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="mt-6 flex flex-col gap-3 border-t border-line-soft pt-6">
                {project.approach.map((step) => (
                  <li key={step} className="flex gap-3 text-[14px] leading-relaxed text-muted">
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                      style={{ backgroundColor: accent[project.domain] }}
                      aria-hidden
                    />
                    {step}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[14px] leading-relaxed text-text/90">{project.outcome}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
