import { projects } from "../data/resume";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line-soft py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading
          title="Featured projects"
          description="Three projects spanning backend systems, generative AI, and applied machine learning."
        />

        <div className="mt-12 flex flex-col gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
