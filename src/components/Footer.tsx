import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/resume";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-soft py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:px-10 md:text-left">
        <div>
          <p className="font-display text-base text-text">{profile.name}</p>
          <p className="text-sm text-muted">Computer Science Engineer · Java | Backend | GenAI</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-text"
          >
            <Mail size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-text"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-text"
          >
            <GithubIcon size={18} />
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-faint">
        © {year} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
