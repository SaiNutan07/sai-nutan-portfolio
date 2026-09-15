import { pillars } from "../data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function WhatIBring() {
  return (
    <section className="border-t border-line-soft py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading title="What I bring" />

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.index} delay={i * 0.05} className="flex gap-5">
              <span className="font-mono text-sm text-faint">{pillar.index}</span>
              <div>
                <h3 className="font-display text-lg text-text">{pillar.title}</h3>
                <p className="mt-2 max-w-[48ch] text-[14px] leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
