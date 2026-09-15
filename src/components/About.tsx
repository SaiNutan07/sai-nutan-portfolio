import { about, stats } from "../data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-t border-line-soft py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading title="About me" />

        <div className="mt-10 grid grid-cols-1 gap-14 md:grid-cols-[1.3fr_1fr]">
          <Reveal delay={0.05} className="flex flex-col gap-5">
            {about.paragraphs.map((p) => (
              <p key={p} className="max-w-[62ch] text-[15px] leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line-soft pt-8 md:border-t-0 md:pt-0">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl text-copper-soft">{stat.value}</dd>
                  <div className="mt-1 text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
