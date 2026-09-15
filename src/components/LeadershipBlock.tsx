import { leadership } from "../data/resume";
import Reveal from "./Reveal";

export default function LeadershipBlock() {
  return (
    <Reveal>
      <h3 className="font-mono text-[13px] text-copper-soft">Leadership</h3>

      <div className="mt-4 border-l-2 border-line pl-6">
        <div className="relative">
          <span
            className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-copper"
            aria-hidden
          />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h4 className="font-display text-xl text-text">
              {leadership.role} — {leadership.organization}
            </h4>
            <span className="font-mono text-[13px] text-muted">{leadership.period}</span>
          </div>
          <p className="mt-1 text-sm text-muted">
            {leadership.org_full} · {leadership.location}
          </p>

          <ul className="mt-4 flex flex-col gap-2.5">
            {leadership.points.map((point) => (
              <li key={point} className="flex gap-3 text-[14px] leading-relaxed text-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
