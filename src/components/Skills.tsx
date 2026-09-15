import { skillGroups } from "../data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line-soft py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading
          title="Technical skills"
          description="The languages, fundamentals, and tools I reach for when building backend systems and GenAI applications."
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line-soft bg-line-soft sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05} className="bg-ink p-6">
              <h3 className="font-mono text-[13px] text-copper-soft">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-sm border border-line px-2.5 py-1 text-[13px] text-muted transition-colors duration-200 hover:border-copper/50 hover:text-text"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
