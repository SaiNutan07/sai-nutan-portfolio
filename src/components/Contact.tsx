import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/resume";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line-soft py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <h2 className="font-display text-3xl text-text sm:text-4xl">
            Let's build something meaningful.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted">
            I'm looking for opportunities where I can contribute to real backend systems and GenAI
            applications. Reach out — I'd like to hear from you.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-sm bg-copper px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-copper-soft"
            >
              <Mail size={16} />
              {profile.email}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-text"
            >
              <LinkedinIcon size={17} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-text"
            >
              <GithubIcon size={17} />
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
