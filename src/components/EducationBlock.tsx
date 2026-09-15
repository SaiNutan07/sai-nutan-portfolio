import { education } from "../data/resume";
import Reveal from "./Reveal";

export default function EducationBlock() {
  return (
    <Reveal delay={0.12}>
      <h3 className="font-mono text-[13px] text-copper-soft">Education</h3>
      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-sm border border-line-soft bg-surface/40 p-6">
        <div>
          <h4 className="font-display text-xl text-text">{education.degree}</h4>
          <p className="mt-1 text-sm text-muted">
            {education.institution} · {education.location}
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[13px] text-muted">{education.period}</p>
          <p className="mt-1 text-sm text-copper-soft">{education.gpa}</p>
        </div>
      </div>
    </Reveal>
  );
}
