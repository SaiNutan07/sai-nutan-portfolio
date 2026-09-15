import { Award } from "lucide-react";
import { certifications } from "../data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-line-soft py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading title="Certifications" />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.05}>
              <div className="flex h-full items-start gap-4 rounded-sm border border-line-soft bg-surface/40 p-5 transition-colors hover:border-copper/40">
                <Award size={18} className="mt-0.5 shrink-0 text-copper-soft" aria-hidden />
                <div>
                  <p className="text-[15px] leading-snug text-text">{cert.title}</p>
                  <p className="mt-1 font-mono text-[12px] text-muted">{cert.provider}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
