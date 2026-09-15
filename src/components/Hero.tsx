import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { heroSupport, profile } from "../data/resume";
import SchemaDiagram from "./SchemaDiagram";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p variants={item} className="font-mono text-sm text-copper-soft">
            {profile.role} · {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl leading-[1.08] text-text sm:text-5xl md:text-[3.3rem]"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            Building practical solutions with Java, backend development &amp; generative AI.
          </motion.p>

          <motion.ul variants={item} className="mt-6 flex max-w-lg flex-col gap-2.5">
            {heroSupport.map((line) => (
              <li key={line} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper" aria-hidden />
                {line}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-sm bg-copper px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-copper-soft"
            >
              View my work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm border border-line px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-faint"
            >
              Let's Connect
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-muted transition-colors hover:text-text"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted transition-colors hover:text-text"
            >
              <LinkedinIcon size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center rounded-sm border border-line bg-surface/60 p-6 md:justify-end md:p-8"
        >
          <SchemaDiagram />
        </motion.div>
      </div>
    </section>
  );
}
