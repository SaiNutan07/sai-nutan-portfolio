import { achievements } from "../data/resume";
import Reveal from "./Reveal";

export default function AchievementsBlock() {
  return (
    <Reveal delay={0.08}>
      <h3 className="font-mono text-[13px] text-copper-soft">Achievements</h3>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {achievements.map((point) => (
          <li
            key={point}
            className="rounded-sm border border-line-soft bg-surface/40 p-4 text-[14px] leading-relaxed text-muted"
          >
            {point}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
